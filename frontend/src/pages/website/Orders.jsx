import React, { useEffect, useState } from "react";
import { API } from "../../api";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const Orders = () => {
    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    const getAuthHeaders = () => {
        const token = localStorage.getItem("token");
        if (!token) {
            toast.error("Please login first");
            navigate("/auth");
            return null;
        }
        return { headers: { Authorization: `Bearer ${token}` } };
    };

    const fetchOrders = async () => {
        const headers = getAuthHeaders();
        if (!headers) return;

        try {
            setLoading(true);
            const res = await API.get("/orders", headers);
            setOrders(res.data);
        } catch (error) {
            console.error("Error fetching orders:", error);
            if (error.response?.status === 401) {
                toast.error("Please login to view orders");
                navigate("/auth");
            }
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchOrders();
    }, []);

    if (loading) {
        return (
            <div className="bg-[#0f0f0f] text-white min-h-screen flex items-center justify-center">
                <p className="text-xl">Loading your orders...</p>
            </div>
        );
    }

    if (!orders.length) {
        return (
            <div className="bg-[#0f0f0f] text-white min-h-screen py-16 px-4 sm:px-6">
                <div className="max-w-6xl mx-auto text-center">
                    <h1 className="text-4xl font-bold mb-6">Your Orders</h1>
                    <p className="text-white/70 text-lg">No orders found.</p>
                </div>
            </div>
        );
    }

    return (
        <div className="bg-[#0f0f0f] text-white min-h-screen py-16 px-4 sm:px-6">
            <div className="max-w-6xl mx-auto">
                <h1 className="text-4xl font-bold mb-10 text-center">Your Orders</h1>
                <div className="space-y-6">
                    {orders.map((order) => (
                        <div
                            key={order._id}
                            className="flex flex-col sm:flex-row items-center bg-white/5 rounded-2xl p-4 sm:p-6 shadow-lg hover:shadow-2xl transition-shadow duration-300 gap-4"
                        >
                            <img
                                src={order.product?.image}
                                alt={order.product?.name}
                                className="w-28 h-28 sm:w-32 sm:h-32 object-contain rounded-lg border border-white/10"
                            />
                            <div className="flex-1 flex flex-col justify-between h-full">
                                <h2 className="text-lg sm:text-xl font-semibold">{order.product?.name}</h2>
                                <p className="text-primary font-bold text-lg mt-1">₹{order.product?.price?.toLocaleString('en-IN')}</p>
                                <p className="text-white/70 mt-1">Quantity: {order.quantity}</p>
                                <p className="text-white/70 font-semibold mt-1">Total: ₹{order.totalPrice?.toLocaleString('en-IN')}</p>
                                {order.paid ? (
                                    <span className="text-green-500 font-semibold mt-1">✅ Paid</span>
                                ) : (
                                    <span className="text-yellow-500 font-semibold mt-1">⏳ Payment Pending</span>
                                )}
                                {order.address && (
                                    <p className="text-white/70 mt-1 text-sm">
                                        Delivered to: {order.address.street}, {order.address.city}, {order.address.state}, {order.address.pincode}
                                    </p>
                                )}

                                {/* Status dot */}
                                {order.paid && (
                                    <div className="flex items-center mt-2 gap-2">
                                        <span
                                            className={`w-3 h-3 rounded-full ${
                                                order.status === "Delivered"
                                                    ? "bg-green-500"
                                                    : order.status === "Out for Delivery"
                                                    ? "bg-yellow-500"
                                                    : order.status === "Shipped"
                                                    ? "bg-blue-500"
                                                    : order.status === "Packed"
                                                    ? "bg-purple-500"
                                                    : "bg-gray-400"
                                            }`}
                                        ></span>
                                        <span className="text-white/80 text-sm">{order.status}</span>
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Orders;
