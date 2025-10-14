import Razorpay from "razorpay";
import { Cart } from "../models/cartModel.js";
import { Order } from "../models/orderModel.js";
import { User } from "../models/userModel.js";
import crypto from "crypto";

const RAZORPAY_KEY_ID = "rzp_test_RSbu0tJAtXmrqF";
const RAZORPAY_KEY_SECRET = "3kU9cFOLgIFou22QyNcKUQb7";

const razorpay = new Razorpay({
  key_id: RAZORPAY_KEY_ID,
  key_secret: RAZORPAY_KEY_SECRET,
});

// ✅ Create Razorpay Order
export const createOrder = async (req, res) => {
  try {
    const { addressId } = req.body;

    // 1️⃣ Find user
    const user = await User.findById(req.user.userId);
    if (!user) return res.status(404).json({ message: "User not found" });

    // 2️⃣ Find cart
    const cart = await Cart.findOne({ user: req.user.userId }).populate("items.product");
    if (!cart || cart.items.length === 0)
      return res.status(400).json({ message: "Cart is empty" });

    // 3️⃣ Selected address
    const selectedAddress = user.addresses.id(addressId);
    if (!selectedAddress) return res.status(400).json({ message: "Address not found" });

    // 4️⃣ Calculate total amount
    const amount = cart.items.reduce(
      (sum, item) => sum + (item.product?.price || 0) * item.quantity,
      0
    );
    if (amount <= 0) return res.status(400).json({ message: "Invalid cart total" });

    // 5️⃣ Create Razorpay order
    const razorpayOrder = await razorpay.orders.create({
      amount: amount * 100, // in paise
      currency: "INR",
      receipt: `receipt_${Date.now()}`,
    });

    // 6️⃣ Save one Order document per cart item
    // ✅ UPDATED: Added razorpayOrderId to each order
    const savedOrders = [];
    for (const item of cart.items) {
      if (!item.product) continue;
      const order = new Order({
        product: item.product._id,
        quantity: item.quantity,
        totalPrice: item.product.price * item.quantity,
        user: req.user.userId,
        address: selectedAddress,
        paid: false,
        razorpayOrderId: razorpayOrder.id, // ✅ CRITICAL: Store Razorpay order ID
      });
      await order.save();
      savedOrders.push(order);
    }

    res.status(200).json({
      id: razorpayOrder.id,
      amount: razorpayOrder.amount,
      currency: razorpayOrder.currency,
      orderIds: savedOrders.map((o) => o._id),
    });
  } catch (error) {
    console.error("Error creating order:", error);
    res.status(500).json({ message: "Error creating order", error: error.message });
  }
};

// ✅ Verify Razorpay Payment
export const verifyPayment = async (req, res) => {
  try {
    const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = req.body;

    // Verify signature
    const expectedSignature = crypto
      .createHmac("sha256", RAZORPAY_KEY_SECRET)
      .update(razorpay_order_id + "|" + razorpay_payment_id)
      .digest("hex");

    if (expectedSignature !== razorpay_signature)
      return res.status(400).json({ message: "Invalid signature" });

    // 1️⃣ Find all orders with this Razorpay order ID
    const orders = await Order.find({ razorpayOrderId: razorpay_order_id });
    if (!orders || orders.length === 0)
      return res.status(404).json({ message: "No orders found for this payment" });

    // 2️⃣ Mark orders as paid and store payment ID
    // ✅ UPDATED: Also storing razorpayPaymentId
    await Order.updateMany(
      { razorpayOrderId: razorpay_order_id }, 
      { 
        $set: { 
          paid: true,
          razorpayPaymentId: razorpay_payment_id // ✅ Store payment ID
        } 
      }
    );

    // 3️⃣ Clear cart
    const cart = await Cart.findOne({ user: req.user.userId });
    if (cart) {
      cart.items = [];
      await cart.save();
    }

    res.status(200).json({ message: "Payment successful, order placed!" });
  } catch (error) {
    console.error("Payment verification failed:", error);
    res.status(500).json({ message: "Payment verification failed", error: error.message });
  }
};

// ✅ Get all orders
export const getOrders = async (req, res) => {
  try {
    const orders = await Order.find({ user: req.user.userId })
      .populate("product user")
      .sort({ createdAt: -1 }); // ✅ ADDED: Sort by newest first
    res.status(200).json(orders);
  } catch (error) {
    console.error("Error fetching orders:", error);
    res.status(500).json({ message: "Error fetching orders", error: error.message });
  }
};


export const getAllOrders = async (req, res) => {
  try {
    const orders = await Order.find()
      .populate("product user")
      .sort({ createdAt: -1 });
    res.status(200).json(orders);
  } catch (error) {
    console.error("Error fetching all orders:", error);
    res.status(500).json({ message: "Error fetching orders", error: error.message });
  }
};



// orderController.js

export const updateOrderStatus = async (req, res) => {
  try {
    const { orderId } = req.params;
    const { status } = req.body;

    const validStatuses = ["Order Placed", "Packed", "Shipped", "Out for Delivery", "Delivered"];
    if (!validStatuses.includes(status)) {
      return res.status(400).json({ message: "Invalid status" });
    }

    const order = await Order.findByIdAndUpdate(orderId, { status }, { new: true });
    if (!order) return res.status(404).json({ message: "Order not found" });

    res.status(200).json(order);
  } catch (error) {
    console.error("Error updating order status:", error);
    res.status(500).json({ message: "Error updating status", error: error.message });
  }
};
