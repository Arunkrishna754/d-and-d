import express from "express";
import { authMiddleware } from "../controllers/authController.js";
import {
  getAddresses,
  addAddress,
  updateAddress,
  deleteAddress,
} from "../controllers/profileController.js";

const router = express.Router();

router.get("/", authMiddleware, getAddresses);
router.post("/", authMiddleware, addAddress);
router.put("/:id", authMiddleware, updateAddress);
router.delete("/:id", authMiddleware, deleteAddress);

export default router;
