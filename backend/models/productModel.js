import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    price: { type: Number, required: true },
    description: { type: String },
    image: { type: String }, // will store image URL or file path
  },
  { timestamps: true }
);

export const Product = mongoose.model("Product", productSchema);
