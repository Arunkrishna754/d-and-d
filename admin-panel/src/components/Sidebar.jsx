// Sidebar.jsx
import React from "react";
import { NavLink } from "react-router-dom";
import { X } from "lucide-react";

const Sidebar = ({ isSidebarOpen, toggleSidebar }) => {
  const linkClass = ({ isActive }) =>
    `block py-2 px-4 rounded hover:bg-gray-200 transition-colors ${
      isActive ? "bg-gray-300 font-bold" : ""
    }`;

  const handleLinkClick = () => {
    // Close sidebar on mobile when a link is clicked
    if (window.innerWidth < 1024) {
      toggleSidebar();
    }
  };

  return (
    <>
      {/* Mobile Sidebar Overlay */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={toggleSidebar}
        />
      )}

      {/* Sidebar */}
      <div
        className={`
          fixed lg:sticky top-0 left-0 h-screen w-64 bg-gray-100 z-50 
          transform transition-transform duration-300 ease-in-out
          lg:transform-none
          ${isSidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}
        `}
      >
        <div className="p-4 h-full overflow-y-auto">
          {/* Mobile close button */}
          <div className="flex justify-between items-center mb-6 lg:hidden">
            <h2 className="text-2xl font-bold">Menu</h2>
            <button
              onClick={toggleSidebar}
              className="text-gray-700 hover:text-gray-900"
              aria-label="Close menu"
            >
              <X size={24} />
            </button>
          </div>

          {/* Desktop title */}
          <h2 className="hidden lg:block text-2xl font-bold mb-6">Menu</h2>

          <nav className="flex flex-col space-y-2">
            <NavLink
              to="/admin/dashboard"
              className={linkClass}
              onClick={handleLinkClick}
            >
              Dashboard
            </NavLink>
            <NavLink
              to="/admin/products"
              className={linkClass}
              onClick={handleLinkClick}
            >
              Products
            </NavLink>
            <NavLink
              to="/admin/orders"
              className={linkClass}
              onClick={handleLinkClick}
            >
              Orders
            </NavLink>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Sidebar;