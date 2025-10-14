import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import API from "../api/api";
import React from "react";

const Products = () => {
    const [products, setProducts] = useState([]);

    const fetchProducts = async () => {
        const res = await API.get("/products");
        setProducts(res.data);
    };

    useEffect(() => {
        fetchProducts();
    }, []);

    const handleDelete = async (id) => {
        if (window.confirm("Are you sure you want to delete this product?")) {
            await API.delete(`/products/${id}`);
            fetchProducts();
        }
    };

    return (
        <div className="p-4">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 mb-6">
                <h2 className="text-2xl font-bold">Products</h2>
                <Link
                    to="/admin/products/add"
                    className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 text-center transition-colors"
                >
                    Add Product
                </Link>
            </div>

            {/* Desktop Table View - Hidden on mobile */}
            <div className="hidden md:block overflow-x-auto">
                <table className="w-full border bg-white rounded-lg shadow">
                    <thead className="bg-gray-50">
                        <tr className="border-b">
                            <th className="p-3 text-left">Image</th>
                            <th className="p-3 text-left">Name</th>
                            <th className="p-3 text-left">Price</th>
                            <th className="p-3 text-left">Description</th>
                            <th className="p-3 text-center">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map((p) => (
                            <tr key={p._id} className="border-b hover:bg-gray-50 transition-colors">
                                <td className="p-3">
                                    {p.image && (
                                        <img 
                                            src={p.image} 
                                            alt={p.name} 
                                            className="w-16 h-16 object-cover rounded"
                                        />
                                    )}
                                </td>
                                <td className="p-3 font-medium">{p.name}</td>
                                <td className="p-3">₹{p.price?.toLocaleString("en-IN")}</td>
                                <td className="p-3 max-w-xs">
                                    <span className="block truncate" title={p.description}>
                                        {p.description}
                                    </span>
                                </td>
                                <td className="p-3">
                                    <div className="flex justify-center gap-2">
                                        <Link
                                            to={`/admin/products/edit/${p._id}`}
                                            className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600 transition-colors"
                                        >
                                            Edit
                                        </Link>
                                        <button
                                            onClick={() => handleDelete(p._id)}
                                            className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition-colors"
                                        >
                                            Delete
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Mobile Card View - Hidden on desktop */}
            <div className="md:hidden space-y-4">
                {products.map((p) => (
                    <div 
                        key={p._id} 
                        className="bg-white rounded-lg shadow p-4 border border-gray-200"
                    >
                        <div className="flex gap-4 mb-3">
                            {p.image && (
                                <img 
                                    src={p.image} 
                                    alt={p.name} 
                                    className="w-20 h-20 object-cover rounded flex-shrink-0"
                                />
                            )}
                            <div className="flex-1 min-w-0">
                                <h3 className="font-bold text-lg mb-1 truncate">{p.name}</h3>
                                <p className="text-blue-600 font-semibold text-lg">
                                    ₹{p.price?.toLocaleString("en-IN")}
                                </p>
                            </div>
                        </div>
                        
                        <div className="mb-3">
                            <p className="text-sm text-gray-600 line-clamp-2" title={p.description}>
                                {p.description}
                            </p>
                        </div>

                        <div className="flex gap-2">
                            <Link
                                to={`/admin/products/edit/${p._id}`}
                                className="flex-1 bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600 text-center transition-colors font-medium"
                            >
                                Edit
                            </Link>
                            <button
                                onClick={() => handleDelete(p._id)}
                                className="flex-1 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition-colors font-medium"
                            >
                                Delete
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            {/* Empty State */}
            {products.length === 0 && (
                <div className="text-center py-12 bg-white rounded-lg shadow">
                    <p className="text-gray-500 text-lg mb-4">No products found</p>
                    <Link
                        to="/admin/products/add"
                        className="inline-block bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition-colors"
                    >
                        Add Your First Product
                    </Link>
                </div>
            )}
        </div>
    );
};

export default Products;