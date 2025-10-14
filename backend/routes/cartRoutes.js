import express from "express";
import { getCart, addToCart, removeFromCart, updateCartItem } from "../controllers/cartController.js";
import { authMiddleware } from "../controllers/authController.js";

const router = express.Router();

router.get("/", authMiddleware, getCart);
router.post("/", authMiddleware, addToCart);
router.put("/:productId", authMiddleware, updateCartItem);
router.delete("/:productId", authMiddleware, removeFromCart);

export default router;
