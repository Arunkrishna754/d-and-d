import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { User } from "../models/userModel.js";

const JWT_SECRET = "Arun12345";


// ✅ Auth middleware
export const authMiddleware = async (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    const token = authHeader.split(" ")[1];
    if (!token) return res.status(401).json({ message: "Unauthorized" });

    const decoded = jwt.verify(token, JWT_SECRET);
    req.user = decoded; // attach user info to request
    next();
  } catch (err) {
    res.status(401).json({ message: "Invalid token", error: err.message });
  }
};

// Signup
export const signup = async (req, res) => {
  try {
    const { name, email, password, role } = req.body;
    const exist = await User.findOne({ email });
    if (exist) return res.status(400).json({ message: "Email already exists" });

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({
      name,
      email,
      password: hashedPassword,
      role: role || "user",
    });

    // Send user info along with message
    res.status(201).json({
      message: "Signup successful",
      user: {
        userId: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
      },
    });
  } catch (err) {
    res.status(500).json({ message: "Server Error", error: err.message });
  }
};

// Login
export const login = async (req, res) => {
  try {
    const { email, password, role } = req.body;

    const query = role
      ? { email: email.toLowerCase(), role }
      : { email: email.toLowerCase() };

    const user = await User.findOne(query);
    if (!user)
      return res.status(404).json({ message: "User not found or role mismatch" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(401).json({ message: "Invalid credentials" });

    const token = jwt.sign(
      { userId: user._id, email: user.email, role: user.role },
      JWT_SECRET,
      { expiresIn: "1d" }
    );

    res.status(200).json({
      message: "Login successful",
      token,
      user: {
        userId: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
      },
    });
  } catch (err) {
    res.status(500).json({ message: "Server Error", error: err.message });
  }
};
