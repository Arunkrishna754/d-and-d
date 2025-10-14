import mongoose from "mongoose";

const addressSchema = new mongoose.Schema({
  street: { type: String },
  city: { type: String },
  state: { type: String },
  pincode: { type: String },
  phone: { type: String },
});

const orderSchema = new mongoose.Schema({
  product: { type: mongoose.Schema.Types.ObjectId, ref: "Product", required: true },
  quantity: { type: Number, required: true },
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  totalPrice: { type: Number, required: true },
  address: addressSchema,
  paid: { type: Boolean, default: false },
  status: { 
    type: String, 
    enum: ["Order Placed", "Packed", "Shipped", "Out for Delivery", "Delivered"], 
    default: "Order Placed" 
  }, // ✅ new status field
  razorpayOrderId: { type: String },
  razorpayPaymentId: { type: String },
}, { timestamps: true });


export const Order = mongoose.model("Order", orderSchema);