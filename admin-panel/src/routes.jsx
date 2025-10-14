
// Router.jsx - Updated
import { Routes, Route, Navigate } from "react-router-dom";
import React, { useEffect, useState } from "react";

import Dashboard from "./pages/Dashboard";
import AddProduct from "./pages/AddProduct";
import Orders from "./pages/Orders";
import AdminHeader from "./components/AdminHeader";
import Sidebar from "./components/Sidebar";
import Login from "./pages/login";
import Products from "./pages/Products";

const PrivateRoute = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("adminToken"));

  useEffect(() => {
    const storedToken = localStorage.getItem("adminToken");
    setToken(storedToken);
  }, []);

  return token ? children : <Navigate to="/admin/login" />;
};

// Admin layout with sidebar and header - NOW WITH RESPONSIVE STATE
const AdminLayout = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  // Close sidebar when screen size changes to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsSidebarOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      <div className="flex-1 flex flex-col min-h-screen">
        <AdminHeader isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
        <main className="flex-1 p-4 lg:p-6 overflow-x-hidden">{children}</main>
      </div>
    </div>
  );
};

export default function Router() {
  return (
    <Routes>
      {/* Admin login */}
      <Route path="/admin/login" element={<Login />} />

      {/* Admin protected routes */}
      <Route
        path="/admin/dashboard"
        element={
          <PrivateRoute>
            <AdminLayout>
              <Dashboard />
            </AdminLayout>
          </PrivateRoute>
        }
      />

      {/* Products routes */}
      <Route
        path="/admin/products"
        element={
          <PrivateRoute>
            <AdminLayout>
              <Products />
            </AdminLayout>
          </PrivateRoute>
        }
      />
      <Route
        path="/admin/products/add"
        element={
          <PrivateRoute>
            <AdminLayout>
              <AddProduct />
            </AdminLayout>
          </PrivateRoute>
        }
      />
      <Route
        path="/admin/products/edit/:id"
        element={
          <PrivateRoute>
            <AdminLayout>
              <AddProduct />
            </AdminLayout>
          </PrivateRoute>
        }
      />

      {/* Orders route */}
      <Route
        path="/admin/orders"
        element={
          <PrivateRoute>
            <AdminLayout>
              <Orders />
            </AdminLayout>
          </PrivateRoute>
        }
      />

      {/* Redirect unknown routes to admin login */}
      <Route path="*" element={<Navigate to="/admin/login" />} />
    </Routes>
  );
}