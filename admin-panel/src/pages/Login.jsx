import { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../api/api";
import React from "react";

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [message, setMessage] = useState("");

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await API.post("/auth/login", { ...formData, role: "admin" });
localStorage.setItem("adminToken", res.data.token);
navigate("/admin/dashboard");

    } catch (err) {
      setMessage(err.response?.data?.message || "Login Failed");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow w-96">
        <h2 className="text-2xl font-bold mb-5 text-center">Admin Login</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
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
          <button className="w-full py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
            Login
          </button>
        </form>
        {message && <p className="text-red-500 mt-2 text-center">{message}</p>}
      </div>
    </div>
  );
};

export default Login;
