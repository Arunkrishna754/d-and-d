import mongoose from "mongoose";

const addressSchema = new mongoose.Schema({
  street: { type: String },
  city: { type: String },
  state: { type: String },
  pincode: { type: String },
  phone: { type: String },
});

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String, enum: ["user", "admin"], default: "user" },
    addresses: [addressSchema], // array of addresses
  },
  { timestamps: true }
);

export const User = mongoose.model("User", userSchema);
