import React from "react";
import { useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";

const AdminHeader = ({ isSidebarOpen, toggleSidebar }) => {
  const navigate = useNavigate();
  
  const handleLogout = () => {
    localStorage.removeItem("adminToken");
    navigate("/admin/login");
  };

  return (
    <div className="flex justify-between items-center bg-white shadow p-4 sticky top-0 z-30">
      <div className="flex items-center gap-4">
        {/* Burger Menu - visible only on small screens */}
        <button
          onClick={toggleSidebar}
          className="lg:hidden text-gray-700 hover:text-gray-900 focus:outline-none"
          aria-label="Toggle menu"
        >
          {isSidebarOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
        <h1 className="text-xl font-bold">Admin Panel</h1>
      </div>
      <button
        onClick={handleLogout}
        className="bg-red-500 text-white px-3 py-1 sm:px-4 sm:py-2 rounded hover:bg-red-600 transition-colors text-sm sm:text-base"
      >
        Logout
      </button>
    </div>
  );
};

export default AdminHeader;