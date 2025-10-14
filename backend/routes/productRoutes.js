import express from "express";
import {
  createProduct,
  getProducts,
  getProductById, // Add this import
  updateProduct,
  deleteProduct,
  upload,
} from "../controllers/productController.js";

const router = express.Router();

router.post("/", upload.single("image"), createProduct);
router.get("/", getProducts);
router.get("/:id", getProductById); // Add this route BEFORE the put route
router.put("/:id", upload.single("image"), updateProduct);
router.delete("/:id", deleteProduct);

export default router;