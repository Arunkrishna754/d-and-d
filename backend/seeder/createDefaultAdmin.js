import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import dotenv from "dotenv";
import { User } from "../models/userModel.js";

dotenv.config();

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("✅ MongoDB connected");
  } catch (err) {
    console.error("❌ MongoDB connection failed:", err.message);
    process.exit(1);
  }
};

const createAdmin = async () => {
  const { ADMIN_EMAIL, ADMIN_PASSWORD } = process.env;

  const existingAdmin = await User.findOne({ email: ADMIN_EMAIL });
  if (existingAdmin) {
    console.log("⚠️ Admin already exists");
    return process.exit();
  }

  const hashedPassword = await bcrypt.hash(ADMIN_PASSWORD, 10);

  const admin = await User.create({
    email: ADMIN_EMAIL,
    password: hashedPassword,
    role: "admin",
  });

  console.log("✅ Default admin created:", admin.email);
  process.exit();
};

// Connect DB and create admin
connectDB().then(createAdmin);
