import { FaShoppingCart, FaUserCircle } from "react-icons/fa";
import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Drawer from "react-modern-drawer";
import { Divide as Hamburger } from "hamburger-react";
import { IoMdClose } from "react-icons/io";
import { routes, logoImg1 } from "../../constant";
import { API } from "../../api";
import toast from 'react-hot-toast';


const WebsiteHeader = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [cartCount, setCartCount] = useState(0);
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const profileRef = useRef(null);
  const [showProfileMenu, setShowProfileMenu] = useState(false);

  const toggleDrawer = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (profileRef.current && !profileRef.current.contains(event.target)) {
        setShowProfileMenu(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token);
    fetchCartCount();
  }, []);

  const getAuthHeaders = () => {
    const token = localStorage.getItem("token");
    if (!token) return null;
    return { headers: { Authorization: `Bearer ${token}` } };
  };

  // ✅ Fetch cart count
  const fetchCartCount = async () => {
    const headers = getAuthHeaders();
    if (!headers) return; // No token, skip
    try {
      const res = await API.get("/cart", headers);
      const count = res.data.items.reduce((sum, item) => sum + item.quantity, 0);
      setCartCount(count);
    } catch (error) {
      console.error("Error fetching cart count", error);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userEmail");
    localStorage.removeItem("userId");
    setIsLoggedIn(false);
    setShowProfileMenu(false);
    navigate("/");

    // ✅ Show toast
    toast.success("You have logged out");
  };


  const handleCartClick = () => {
    navigate("/cart");
  };

  useEffect(() => {
    const listener = () => fetchCartCount();
    window.addEventListener("cartUpdated", listener);
    return () => window.removeEventListener("cartUpdated", listener);
  }, []);





  return (
    <div className="fixed top-4 left-1/2 transform -translate-x-1/2 w-[95%] h-[5.5rem] sm:h-[7rem] flex items-center px-6 sm:px-12 rounded-[2rem] shadow-lg z-50 text-white"
         style={{
           background: "linear-gradient(135deg, rgba(236, 236, 236, 0.2), rgba(255, 255, 255, 0.1))",
           backdropFilter: "blur(20px)",
           border: "1px solid rgba(255, 255, 255, 0.3)"
         }}>
      <div className="flex justify-between items-center gap-4 sm:gap-10 w-full">
        <Link to="/" className="relative">
          <img
            src={logoImg1}
            className="w-[3rem] sm:w-[3.5rem] scale-150" // Reduced size
            alt="logo"
          />
        </Link>

        <div className="hidden sm:flex items-center gap-4 sm:gap-6">
          {routes
            .filter((r) => r.name !== "Login / Signup")
            .map(({ name, path }) => (
              <Link
                to={path}
                key={path}
                className={`link text-xs sm:text-sm ${pathname === path ? "active-link" : ""
                  }`}
              >
                {name}
              </Link>
            ))}

          {/* Cart Icon */}
          <button
            onClick={handleCartClick}
            className="relative text-xl sm:text-2xl hover:text-primary transition"
          >
            <FaShoppingCart />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-3 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center animate-pulse">
                {cartCount}
              </span>
            )}
          </button>

          {isLoggedIn ? (
            <div className="relative" ref={profileRef}>
              <button
                onClick={() => setShowProfileMenu(!showProfileMenu)}
                className="text-2xl hover:text-primary transition"
              >
                <FaUserCircle />
              </button>

              {showProfileMenu && (
                <div className="absolute right-0 mt-3 bg-black/90 backdrop-blur-md border border-white/10 rounded-xl shadow-xl w-40 flex flex-col items-start py-2 z-50">
                  <button
                    onClick={() => {
                      navigate("/orders");
                      setShowProfileMenu(false);
                    }}
                    className="w-full text-left px-4 py-2 hover:bg-white/10 text-sm"
                  >
                    Orders
                  </button>
                  <button
                    onClick={() => {
                      navigate("/profile");
                      setShowProfileMenu(false);
                    }}
                    className="w-full text-left px-4 py-2 hover:bg-white/10 text-sm"
                  >
                    Profile
                  </button>
                  <button
                    onClick={() => {
                      handleLogout();
                      setShowProfileMenu(false);
                    }}
                    className="w-full text-left px-4 py-2 text-red-400 hover:bg-white/10 text-sm"
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          ) : (
            <Link
              to="/auth"
              className="text-xs sm:text-sm bg-blue-600 hover:bg-blue-700 rounded-full px-4 py-2"
            >
              Login / Signup
            </Link>
          )}
        </div>

        <div className="block sm:hidden cursor-pointer" onClick={toggleDrawer}>
          <Hamburger
            color="white"
            size={20}
            toggled={isOpen}
            rounded
            toggle={setIsOpen}
          />
        </div>
      </div>

      <Drawer
        open={isOpen}
        onClose={toggleDrawer}
        direction="right"
        className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-black/30 text-white transition-all duration-300 ${
          isOpen ? "scale-100 opacity-100" : "scale-95 opacity-0 pointer-events-none"
        }`}
        style={{
          transformOrigin: "center",
          background: "rgba(0, 0, 0, 0.3)", // Semi-transparent black
          backdropFilter: "blur(10px)", // Frosty effect
        }}
      >
        <div className="flex flex-col h-full pt-4 px-6">
          <div className="flex items-center justify-end w-full pb-6">
            <button
              onClick={() => setIsOpen(false)}
              className="text-white text-[1.5rem] hover:opacity-70 transition-opacity"
            >
              <IoMdClose />
            </button>
          </div>

          {/* Mobile Links */}
          <div className="flex flex-col gap-4">
            {routes
              .filter((r) => r.name !== "Login / Signup")
              .map(({ name, path }) => (
                <Link
                  to={path}
                  key={path}
                  onClick={() => setIsOpen(false)}
                  className={`text-lg text-white ${pathname === path ? "font-bold" : "hover:text-blue-400"}`}
                >
                  {name}
                </Link>
              ))}

            <button
              onClick={() => { navigate("/cart"); setIsOpen(false); }}
              className="text-lg text-white relative"
            >
              Cart
              {isLoggedIn && cartCount > 0 && (
                <span className="absolute -top-2 -right-3 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center animate-pulse">
                  {cartCount}
                </span>
              )}
            </button>

            {isLoggedIn ? (
              <>
                <button
                  onClick={() => { navigate("/profile"); setIsOpen(false); }}
                  className="text-lg text-white"
                >
                  Profile
                </button>
                <button
                  onClick={() => { handleLogout(); setIsOpen(false); }}
                  className="text-lg text-red-400"
                >
                  Logout
                </button>
              </>
            ) : (
              <Link
                to="/auth"
                onClick={() => setIsOpen(false)}
                className="text-lg text-blue-400"
              >
                Login / Signup
              </Link>
            )}
          </div>
        </div>
      </Drawer>
    </div>
  );
};

export default WebsiteHeader;
