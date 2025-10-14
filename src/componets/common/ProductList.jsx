import React, { useState, useEffect } from "react";
import Banner from "../website/Banner";
import Drawer from "react-modern-drawer";
import { IoMdClose } from "react-icons/io";
import { API } from "../../api";
import { useNavigate } from "react-router-dom";
import { Toaster, toast } from "react-hot-toast";
import Kaspersky_plus from "../../assets/images/kaspersky-plus.png";

const ProductList = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [products, setProducts] = useState([]);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [loading, setLoading] = useState(true);

    const navigate = useNavigate();

    useEffect(() => {
        fetchProducts();
    }, []);

    const fetchProducts = async () => {
        try {
            setLoading(true);
            const res = await API.get("/products");

            if (res.data && res.data.length > 0) {
                const formattedProducts = res.data.map((product) => ({
                    id: product._id,
                    name: product.name,
                    image: product.image || Kaspersky_plus,
                    description: product.description,
                    detailContent: product.description,
                    price: product.price,
                }));
                setProducts(formattedProducts);
            }
        } catch (error) {
            console.error("Error fetching products:", error);
        } finally {
            setLoading(false);
        }
    };

    const handleViewDetails = (productId) => {
        const token = localStorage.getItem("token");
        if (!token) {
            toast.error("You have not logged in!");
            return;
        }
        navigate(`/product/${productId}`);
    };

    if (loading) {
        return (
            <>
                <Banner page="Products" />
                <div className="py-[5rem] bg-[#101010] text-white">
                    <div className="wrapper flex flex-col text-center gap-5 items-center">
                        <div className="gradient-rounded-text-box mb-2">Our Products</div>
                        <h2 className="heading-2 max-w-[50rem]">Loading Products...</h2>
                    </div>
                </div>
            </>
        );
    }

    return (
        <>
            <Toaster position="top-center" reverseOrder={false} />
            <Banner page="Products" />

            <div className="py-[5rem] bg-[#101010] text-white">
                <div className="wrapper flex flex-col text-center gap-5 items-center">
                    <div className="gradient-rounded-text-box mb-2">Our Products</div>
                    <h2 className="heading-2 max-w-[50rem]">
                        Explore Our Wide Range of Products
                    </h2>
                    <p className="desc max-w-[50rem]">
                        Check out our top-quality products, designed to meet your digital needs.
                        Click "View Details" to see detailed features and specifications.
                    </p>

                    {products.length === 0 ? (
                        <div className="mt-8">
                            <p className="desc">No products available at the moment.</p>
                        </div>
                    ) : (
                        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5 mt-8 w-full">
                            {products.map((product, index) => (
                                <div
                                    key={product.id}
                                    data-aos={index % 2 === 0 ? "fade-up" : "fade-left"}
                                    data-aos-duration="800"
                                    className="rounded-lg p-[1px] bg-gradient-to-r from-secondary to-primary cursor-pointer"
                                >
                                    <div className="rounded-lg bg-[#101010] hover:bg-black/70 transition-all duration-300 p-5 flex flex-col justify-between items-center text-center h-full gap-4">
                                        <div className="flex justify-center">
                                            <img
                                                src={product.image}
                                                alt={product.name}
                                                className="w-32 h-32 object-contain transition duration-300 hover:scale-105"
                                            />
                                        </div>
                                        <div className="flex flex-col gap-2">
                                            <h5 className="font-semibold text-xl">{product.name}</h5>
                                            <p className="desc text-white/80 line-clamp-1">
                                                {product.description}
                                            </p>
                                            {product.price && (
                                                <p className="text-lg font-semibold text-primary">
                                                    ₹{product.price}
                                                </p>
                                            )}
                                        </div>
                                        <div className="flex gap-2 mt-2">
                                            <button
                                                onClick={() => handleViewDetails(product.id)}
                                                className="bg-purple-600 text-white px-3 py-1 rounded hover:bg-purple-700 transition"
                                            >
                                                View Details
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>

            <Drawer
                open={isOpen}
                onClose={() => setIsOpen(false)}
                direction="top"
                className="p-4 z-10 w-screen"
                lockBackgroundScroll
            >
                <div className="mb-3 flex items-center justify-end pr-[.7rem] py-[.4rem]">
                    <button
                        onClick={() => setIsOpen(false)}
                        className="text-white text-[2.2rem]"
                    >
                        <IoMdClose />
                    </button>
                </div>
                {selectedProduct && (
                    <div className="flex flex-col gap-6 text-white pb-[2rem]">
                        <h1 className="heading-2">{selectedProduct.name}</h1>
                        <p className="desc whitespace-pre-line">
                            {selectedProduct.detailContent}
                        </p>
                        {selectedProduct.price && (
                            <p className="text-xl font-semibold text-primary">
                                Price: ₹{selectedProduct.price}
                            </p>
                        )}
                    </div>
                )}
            </Drawer>
        </>
    );
};

export default ProductList;
