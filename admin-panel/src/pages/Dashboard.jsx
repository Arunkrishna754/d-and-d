import React, { useEffect, useState } from "react";
import API from "../api/api";
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    Tooltip,
    CartesianGrid,
    ResponsiveContainer,
    Legend,
    AreaChart,
    Area,
} from "recharts";

const Dashboard = () => {
    const [salesData, setSalesData] = useState({
        totalOrders: 0,
        totalRevenue: 0,
        paidOrders: 0,
        pendingOrders: 0,
    });
    const [chartData, setChartData] = useState([]);
    const [filter, setFilter] = useState("month"); // default filter
    const [chartType, setChartType] = useState("bar"); // "bar" or "area"
    const [loading, setLoading] = useState(true);

    const getAuthHeaders = () => {
        const token = localStorage.getItem("adminToken");
        if (!token) return null;
        return { headers: { Authorization: `Bearer ${token}` } };
    };

    const fetchSalesData = async () => {
        const headers = getAuthHeaders();
        if (!headers) {
            setLoading(false);
            return;
        }

        try {
            setLoading(true);
            const res = await API.get("/orders/all", headers);
            const orders = res.data;

            // Aggregate metrics
            const totalOrders = orders.length;
            const paidOrders = orders.filter((o) => o.paid).length;
            const pendingOrders = totalOrders - paidOrders;
            const totalRevenue = orders
                .filter((o) => o.paid)
                .reduce((sum, o) => sum + (o.totalPrice || 0), 0);

            setSalesData({ totalOrders, paidOrders, pendingOrders, totalRevenue });

            // Process chart data
            processChartData(orders, filter);
        } catch (error) {
            console.error("Error fetching sales data:", error);
        } finally {
            setLoading(false);
        }
    };

    const processChartData = (orders, filterType) => {
        const dataMap = {};

        const now = new Date();

        if (filterType === "day") {
            // Last 7 days
            for (let i = 6; i >= 0; i--) {
                const d = new Date(now);
                d.setDate(now.getDate() - i);
                const key = d.toLocaleDateString("en-IN");
                dataMap[key] = 0;
            }
        } else if (filterType === "week") {
            // Current week: Monday to Sunday
            const monday = new Date(now);
            monday.setDate(now.getDate() - ((now.getDay() + 6) % 7)); // Monday
            for (let i = 0; i < 7; i++) {
                const d = new Date(monday);
                d.setDate(monday.getDate() + i);
                const key = d.toLocaleDateString("en-IN");
                dataMap[key] = 0;
            }
        } else {
            // Current month
            const year = now.getFullYear();
            const month = now.getMonth();
            const daysInMonth = new Date(year, month + 1, 0).getDate();
            for (let i = 1; i <= daysInMonth; i++) {
                const d = new Date(year, month, i);
                const key = d.toLocaleDateString("en-IN");
                dataMap[key] = 0;
            }
        }

        // Fill revenue from orders
        orders.forEach((o) => {
            if (!o.paid) return;
            const date = new Date(o.createdAt);
            let key;

            if (filterType === "day" || filterType === "week" || filterType === "month") {
                key = date.toLocaleDateString("en-IN");
            }

            if (dataMap[key] !== undefined) {
                dataMap[key] += o.totalPrice || 0;
            }
        });

        const chartArray = Object.keys(dataMap)
            .sort((a, b) => new Date(a) - new Date(b))
            .map((key) => ({ name: key, Revenue: dataMap[key] }));

        setChartData(chartArray);
    };


    const handleFilterChange = (e) => {
        setFilter(e.target.value);
        fetchSalesData();
    };

    const toggleChartType = () => {
        setChartType(chartType === "bar" ? "area" : "bar");
    };

    useEffect(() => {
        fetchSalesData();
    }, []);

    if (loading) {
        return (
            <div className="p-4 flex justify-center items-center min-h-screen">
                <p className="text-lg">Loading sales data...</p>
            </div>
        );
    }

    return (
        <div className="p-4 space-y-6">
            <h2 className="text-2xl font-bold">Dashboard</h2>
            <p>Welcome to the admin panel.</p>

            {/* Metrics */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="bg-white p-4 rounded-lg shadow">
                    <h3 className="text-gray-600 font-semibold">Total Orders</h3>
                    <p className="text-2xl font-bold">{salesData.totalOrders}</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow">
                    <h3 className="text-gray-600 font-semibold">Paid Orders</h3>
                    <p className="text-2xl font-bold">{salesData.paidOrders}</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow">
                    <h3 className="text-gray-600 font-semibold">Pending Orders</h3>
                    <p className="text-2xl font-bold">{salesData.pendingOrders}</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow">
                    <h3 className="text-gray-600 font-semibold">Total Revenue</h3>
                    <p className="text-2xl font-bold">
                        ₹{salesData.totalRevenue.toLocaleString("en-IN")}
                    </p>
                </div>
            </div>

            {/* Filters */}
            <div className="flex items-center gap-4 mt-4">
                <div className="flex items-center gap-2">
                    <label className="font-semibold">Filter:</label>
                    <select
                        className="border rounded p-1"
                        value={filter}
                        onChange={handleFilterChange}
                    >
                        <option value="day">Day</option>
                        <option value="week">Week</option>
                        <option value="month">Month</option>
                    </select>
                </div>
                <button
                    onClick={toggleChartType}
                    className="bg-green-500 text-white px-3 py-1 rounded"
                >
                    {chartType === "bar" ? "Switch to Mountain" : "Switch to Bar"}
                </button>
            </div>

            {/* Chart */}
            <div className="bg-white p-4 rounded-lg shadow mt-4">
                <h3 className="text-gray-600 font-semibold mb-2">Revenue Over Time</h3>
                {chartData.length ? (
                    <ResponsiveContainer width="100%" height={300}>
                        {chartType === "bar" ? (
                            <BarChart data={chartData}>
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="name" />
                                <YAxis />
                                <Tooltip formatter={(value) => `₹${value.toLocaleString("en-IN")}`} />
                                <Legend />
                                <Bar dataKey="Revenue" fill="#22c55e" animationDuration={1500} />
                            </BarChart>
                        ) : (
                            <AreaChart data={chartData}>
                                <defs>
                                    <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="5%" stopColor="#22c55e" stopOpacity={0.8} />
                                        <stop offset="95%" stopColor="#22c55e" stopOpacity={0.2} />
                                    </linearGradient>
                                </defs>
                                <XAxis dataKey="name" />
                                <YAxis />
                                <CartesianGrid strokeDasharray="3 3" />
                                <Tooltip formatter={(value) => `₹${value.toLocaleString("en-IN")}`} />
                                <Legend />
                                <Area
                                    type="monotone"
                                    dataKey="Revenue"
                                    stroke="#22c55e"
                                    fillOpacity={1}
                                    fill="url(#colorRevenue)"
                                    animationDuration={1500}
                                />
                            </AreaChart>
                        )}
                    </ResponsiveContainer>
                ) : (
                    <p className="text-gray-500">No sales data for selected period.</p>
                )}
            </div>
        </div>
    );
};

export default Dashboard;
