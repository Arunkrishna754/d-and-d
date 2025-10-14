import express from "express";
import { authMiddleware } from "../controllers/authController.js";
import { createOrder, verifyPayment, getOrders, getAllOrders, updateOrderStatus } from "../controllers/orderController.js";

const router = express.Router();

router.post("/create-order", authMiddleware, createOrder); // <-- added auth
router.post("/verify-payment", authMiddleware, verifyPayment); // <-- added auth
router.get("/", authMiddleware, getOrders); // optional, if you want only logged-in users to see orders
router.get("/all", authMiddleware, getAllOrders); // Admin: All orders
router.patch("/update-status/:orderId", authMiddleware, updateOrderStatus); // Admin only




export default router;
