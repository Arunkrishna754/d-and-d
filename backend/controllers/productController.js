import { Product } from "../models/productModel.js";
import cloudinary from "../config/cloudinary.js";
import multer from "multer";
import { CloudinaryStorage } from "multer-storage-cloudinary";

// ✅ Cloudinary storage for multer
const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: "products", // folder in Cloudinary
    allowed_formats: ["jpg", "jpeg", "png"],
  },
});

const upload = multer({ storage });

// ✅ Create Product
export const createProduct = async (req, res) => {
  try {
    const { name, description, price } = req.body;
    const image = req.file?.path || null; // Cloudinary returns URL in file.path

    const product = new Product({ name, description, price, image });
    await product.save();
    res.status(201).json({ message: "Product created successfully", product });
  } catch (error) {
    res.status(500).json({ message: "Error creating product", error: error.message });
  }
};

// ✅ Get all products
export const getProducts = async (req, res) => {
  try {
    const products = await Product.find().sort({ createdAt: -1 });
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: "Error fetching products", error: error.message });
  }
};

// ✅ Update Product
export const updateProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, description, price } = req.body;
    let updateData = { name, description, price };

    if (req.file?.path) updateData.image = req.file.path;

    const updated = await Product.findByIdAndUpdate(id, updateData, { new: true });
    res.status(200).json({ message: "Product updated successfully", product: updated });
  } catch (error) {
    res.status(500).json({ message: "Error updating product", error: error.message });
  }
};

// ✅ Get single product by ID
export const getProductById = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findById(id);
    
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }
    
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: "Error fetching product", error: error.message });
  }
};

// ✅ Delete Product
export const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Product.findByIdAndDelete(id);
    // Optionally, delete from Cloudinary if you store public_id
    res.status(200).json({ message: "Product deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting product", error: error.message });
  }
};

export { upload };
