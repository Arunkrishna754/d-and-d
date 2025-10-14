import React, { useEffect, useState } from "react";
import { API } from "../../api";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const Cart = () => {
  const [cart, setCart] = useState(null);
  const [addresses, setAddresses] = useState([]);
  const [selectedAddress, setSelectedAddress] = useState(null);
  const [loading, setLoading] = useState(false); // ✅ Add loading state

  const navigate = useNavigate();

  // Helper: get auth headers
  const getAuthHeaders = () => {
    const token = localStorage.getItem("token");
    if (!token) {
      toast.error("Please login first");
      navigate("/auth");
      return null;
    }
    return { headers: { Authorization: `Bearer ${token}` } };
  };

  // Fetch cart
  const fetchCart = async () => {
    const headers = getAuthHeaders();
    if (!headers) return;
    try {
      const res = await API.get("/cart", headers);
      setCart(res.data);
    } catch (error) {
      toast.error(error.response?.data?.message || "Failed to fetch cart");
    }
  };

  // Fetch addresses
  const fetchAddresses = async () => {
    const headers = getAuthHeaders();
    if (!headers) return;
    try {
      const res = await API.get("/profile/addresses", headers);
      setAddresses(res.data.addresses || []);
      if (res.data.addresses.length > 0) setSelectedAddress(res.data.addresses[0]._id);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchCart();
    fetchAddresses();
  }, []);

  const handleRemove = async (productId) => {
    const headers = getAuthHeaders();
    if (!headers) return;
    try {
      await API.delete(`/cart/${productId}`, headers);
      await fetchCart();
      window.dispatchEvent(new Event("cartUpdated"));
      toast.success("Item removed from cart");
    } catch (error) {
      toast.error("Failed to remove item");
      console.error(error);
    }
  };

  const handleQuantityChange = async (productId, qty) => {
    if (qty < 1) return;
    const headers = getAuthHeaders();
    if (!headers) return;
    try {
      await API.put(`/cart/${productId}`, { quantity: qty }, headers);
      await fetchCart();
      window.dispatchEvent(new Event("cartUpdated"));
    } catch (error) {
      toast.error("Failed to update quantity");
      console.error(error);
    }
  };

  const totalPrice = cart?.items.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0
  );

  const handleCheckout = async () => {
    if (!selectedAddress) return toast.error("Please select a delivery address");
    
    // ✅ Check if cart is empty
    if (!cart || cart.items.length === 0) {
      return toast.error("Your cart is empty");
    }

    const headers = getAuthHeaders();
    if (!headers) return;

    setLoading(true); // ✅ Set loading state

    try {
      // 1️⃣ Create order
      const res = await API.post("/orders/create-order", { addressId: selectedAddress }, headers);
      const { id, amount, currency } = res.data;

      // 2️⃣ Razorpay options
      const options = {
        key: "rzp_test_RSbu0tJAtXmrqF",
        amount,
        currency,
        name: "My Shop",
        description: "Order Payment",
        order_id: id,
        handler: async (response) => {
          try {
            // 3️⃣ Verify payment
            await API.post(
              "/orders/verify-payment",
              {
                razorpay_order_id: response.razorpay_order_id,
                razorpay_payment_id: response.razorpay_payment_id,
                razorpay_signature: response.razorpay_signature,
              },
              headers
            );
            window.dispatchEvent(new Event("cartUpdated"));
            toast.success("Payment successful! Order placed.");
            navigate("/orders");
          } catch (error) {
            console.error("Verification error:", error);
            toast.error(error.response?.data?.message || "Payment verification failed!");
          }
        },
        // ✅ Add prefill for better UX
        prefill: {
          name: localStorage.getItem("userName") || "",
          email: localStorage.getItem("userEmail") || "",
        },
        // ✅ Add modal close handler
        modal: {
          ondismiss: function() {
            setLoading(false);
            toast.error("Payment cancelled");
          }
        },
        theme: { color: "#3399cc" },
      };

      if (window.Razorpay) {
        const rzp = new window.Razorpay(options);
        rzp.open();
        setLoading(false); // ✅ Reset loading when modal opens
      } else {
        setLoading(false);
        toast.error("Razorpay SDK failed to load. Please refresh the page.");
      }
    } catch (error) {
      setLoading(false);
      console.error("Checkout error:", error);
      toast.error(error.response?.data?.message || "Something went wrong while creating order.");
    }
  };

  if (!cart) return <div className="p-10 text-center text-white">Loading Cart...</div>;

  return (
    <div className="bg-[#0f0f0f] text-white min-h-screen py-16 px-4 sm:px-6 mt-20">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-10 text-center">Your Cart</h1>

        {cart.items.length === 0 ? (
          <div className="text-center">
            <p className="text-white/70 text-lg mb-4">Your cart is empty</p>
            <button 
              onClick={() => navigate("/products")}
              className="bg-green-600 hover:bg-green-700 px-6 py-3 rounded-full font-semibold transition"
            >
              Continue Shopping
            </button>
          </div>
        ) : (
          <>
            {/* Cart Items */}
            <div className="space-y-6">
              {cart.items.map((item) => (
                <div key={item.product._id} className="flex flex-col sm:flex-row items-center bg-white/5 rounded-2xl p-4 sm:p-6 shadow-lg gap-4">
                  <img src={item.product.image} alt={item.product.name} className="w-28 h-28 sm:w-32 sm:h-32 object-contain rounded-lg border border-white/10"/>
                  <div className="flex-1 flex flex-col justify-between h-full">
                    <h2 className="text-lg sm:text-xl font-semibold">{item.product.name}</h2>
                    <p className="text-primary font-bold text-lg mt-1">₹{item.product.price}</p>
                    <div className="flex items-center gap-3 mt-3">
                      <button 
                        onClick={() => handleQuantityChange(item.product._id, item.quantity - 1)} 
                        className="w-8 h-8 flex items-center justify-center bg-white/10 rounded-full hover:bg-white/20 transition"
                        disabled={item.quantity <= 1}
                      >
                        -
                      </button>
                      <span className="px-2 text-lg">{item.quantity}</span>
                      <button 
                        onClick={() => handleQuantityChange(item.product._id, item.quantity + 1)} 
                        className="w-8 h-8 flex items-center justify-center bg-white/10 rounded-full hover:bg-white/20 transition"
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <button 
                    onClick={() => handleRemove(item.product._id)} 
                    className="text-red-500 font-semibold hover:text-red-400 transition mt-2 sm:mt-0"
                  >
                    Remove
                  </button>
                </div>
              ))}
            </div>

            {/* Addresses */}
            <div className="mt-10 p-6 bg-white/5 rounded-2xl">
              <h2 className="text-2xl font-semibold mb-4">Select Delivery Address</h2>
              {addresses.length === 0 ? (
                <p>
                  No addresses found. 
                  <button 
                    className="text-blue-500 underline ml-2 hover:text-blue-400" 
                    onClick={() => navigate("/profile")}
                  >
                    Add Address
                  </button>
                </p>
              ) : (
                <div className="flex flex-col gap-3">
                  {addresses.map((addr) => (
                    <label 
                      key={addr._id} 
                      className="flex items-center gap-3 bg-white/10 p-3 rounded cursor-pointer hover:bg-white/20 transition"
                    >
                      <input 
                        type="radio" 
                        name="selectedAddress" 
                        value={addr._id} 
                        checked={selectedAddress === addr._id} 
                        onChange={() => setSelectedAddress(addr._id)} 
                        className="w-5 h-5 accent-blue-500"
                      />
                      <span>{addr.street}, {addr.city}, {addr.state}, {addr.pincode}, {addr.phone}</span>
                    </label>
                  ))}
                </div>
              )}
            </div>

            {/* Total & Checkout */}
            <div className="flex flex-col sm:flex-row justify-between items-center mt-10 p-6 bg-white/5 rounded-2xl shadow-lg">
              <h2 className="text-2xl font-bold">Total: ₹{totalPrice?.toLocaleString('en-IN')}</h2>
              <button 
                onClick={handleCheckout} 
                disabled={loading || addresses.length === 0}
                className={`mt-4 sm:mt-0 px-8 py-3 rounded-full font-semibold text-lg transition ${
                  loading || addresses.length === 0
                    ? 'bg-gray-600 cursor-not-allowed'
                    : 'bg-green-600 hover:bg-green-700'
                }`}
              >
                {loading ? "Processing..." : "Proceed to Checkout"}
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Cart;