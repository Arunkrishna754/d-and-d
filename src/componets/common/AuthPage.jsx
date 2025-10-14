import React, { useState, useEffect } from "react";
import { API } from "../../api";
import { useNavigate } from "react-router-dom";

export default function AuthPage() {
    const navigate = useNavigate();
    const [isLogin, setIsLogin] = useState(true);
    const [formData, setFormData] = useState({ name: "", email: "", password: "" });
    const [message, setMessage] = useState("");

    const handleChange = (e) =>
        setFormData({ ...formData, [e.target.name]: e.target.value });

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const endpoint = isLogin ? "/auth/login" : "/auth/signup";
            const res = await API.post(endpoint, formData);

            setMessage(res.data.message);

            if (isLogin) {
                const { user, token } = res.data;
                localStorage.setItem("token", token);
                localStorage.setItem("userId", user.userId);
                localStorage.setItem("userEmail", user.email);
                localStorage.setItem("userName", user.name); // ✅ store name
                navigate("/products");
                window.location.reload();
            } else {
                setIsLogin(true);
            }
        } catch (err) {
            setMessage(err.response?.data?.message || "Something went wrong");
        }
    };

    useEffect(() => {
        if (localStorage.getItem("token")) {
            navigate("/products");
        }
    }, [navigate]);

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
            <div className="bg-white shadow-xl rounded-lg p-8 w-96">
                <h2 className="text-2xl font-bold mb-5 text-center text-blue-600">
                    {isLogin ? "Login" : "Signup"}
                </h2>

                <form onSubmit={handleSubmit} className="space-y-4">
                    {!isLogin && (
                        <input
                            type="text"
                            name="name"
                            placeholder="Full Name"
                            onChange={handleChange}
                            className="w-full p-2 border rounded"
                            required
                        />
                    )}
                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        onChange={handleChange}
                        className="w-full p-2 border rounded"
                        required
                    />
                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        onChange={handleChange}
                        className="w-full p-2 border rounded"
                        required
                    />

                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
                    >
                        {isLogin ? "Login" : "Signup"}
                    </button>
                </form>

                {message && (
                    <p className="text-center text-sm mt-3 text-gray-600">{message}</p>
                )}

                <p className="text-center mt-4 text-sm">
                    {isLogin ? "Don't have an account?" : "Already have an account?"}
                    <button
                        onClick={() => {
                            setIsLogin(!isLogin);
                            setMessage("");
                        }}
                        className="text-blue-500 ml-1 hover:underline"
                    >
                        {isLogin ? "Signup" : "Login"}
                    </button>
                </p>
            </div>
        </div>
    );
}
