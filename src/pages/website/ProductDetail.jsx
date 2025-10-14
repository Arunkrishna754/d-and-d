import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { API } from "../../api";
import Kaspersky_plus from "../../assets/images/kaspersky-plus.png";
import { toast } from "react-hot-toast";

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchProduct();
  }, [id]);

  const fetchProduct = async () => {
    try {
      const res = await API.get(`/products/${id}`);
      if (res.data) {
        setProduct({
          ...res.data,
          image: res.data.image || Kaspersky_plus,
        });
      }
    } catch (error) {
      console.error("Error fetching product:", error);
    }
  };

  // ✅ Add item to backend cart
  const handleAddToCart = async () => {
    try {
      setLoading(true);

      const token = localStorage.getItem("token");
      const headers = { headers: { Authorization: `Bearer ${token}` } };

      await API.post("/cart", { productId: product._id, quantity: 1 }, headers);

      setLoading(false);

      // Dispatch event to refresh cart count in header
      window.dispatchEvent(new CustomEvent("cartUpdated"));

      navigate("/cart");
    } catch (error) {
      setLoading(false);
      console.error("Error adding to cart:", error);
      toast.error(error.response?.data?.message || "Failed to add to cart");
    }
  };


  // ✅ Buy Now = Add to cart + redirect to checkout
  const handleBuyNow = async () => {
    try {
      setLoading(true);
      await API.post("/cart", { productId: product._id, quantity: 1 });
      setLoading(false);
      navigate("/checkout");
    } catch (error) {
      setLoading(false);
      console.error("Error buying product:", error);
    }
  };

  if (!product) {
    return (
      <div className="p-10 text-center text-white text-xl bg-[#101010] min-h-screen">
        Loading Product Details...
      </div>
    );
  }

  return (
    <div className="bg-[#0f0f0f] mt-20 text-white min-h-screen py-16 px-4 sm:px-6 flex justify-center items-center">
      <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20">
        {/* LEFT SIDE - PRODUCT IMAGE */}
        <div className="flex justify-center items-center bg-white/5 rounded-2xl p-6 md:p-8 backdrop-blur-md shadow-lg h-[380px] sm:h-[420px] md:h-[450px] lg:h-[500px]">
          <img
            src={product.image}
            alt={product.name}
            className="rounded-xl w-full max-w-sm sm:max-w-md object-contain hover:scale-105 transition-transform duration-300"
          />
        </div>

        {/* RIGHT SIDE - PRODUCT INFO */}
        <div className="rounded-2xl p-6 md:p-10 flex flex-col justify-between shadow-lg bg-white/5 backdrop-blur-md">
          {/* Product Name & Price */}
          <div>
            <h1 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-4">
              {product.name}
            </h1>
            <h2 className="text-2xl sm:text-3xl font-semibold text-primary mb-6">
              ₹{product.price}
            </h2>
          </div>

          {/* Description */}
          <div className="flex-1 overflow-y-auto mb-6 max-h-[180px] sm:max-h-[200px]">
            <h3 className="text-lg font-semibold mb-3 text-secondary">
              Key Features
            </h3>
            <ul className="list-disc list-inside space-y-1 text-white/70 text-sm sm:text-base leading-relaxed">
              {product.description
                ?.split("\n")
                .filter((line) => line.trim() !== "")
                .slice(0, 5)
                .map((line, index) => (
                  <li key={index}>{line}</li>
                ))}
            </ul>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 w-full">
            <button
              onClick={handleAddToCart}
              disabled={loading}
              className="w-full bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 px-6 py-3 rounded-full font-semibold shadow-lg transition-transform duration-200 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              🛒 {loading ? "Adding..." : "Add to Cart"}
            </button>
            {/* <button
              onClick={handleBuyNow}
              disabled={loading}
              className="w-full bg-gradient-to-r from-green-500 to-green-700 hover:from-green-600 hover:to-green-800 px-6 py-3 rounded-full font-semibold shadow-lg transition-transform duration-200 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              ⚡ {loading ? "Processing..." : "Buy Now"}
            </button> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
