import { Cart } from "../models/cartModel.js";

// ✅ Get Cart
export const getCart = async (req, res) => {
    try {
        const cart = await Cart.findOne({ user: req.user.userId }).populate("items.product");
        if (!cart) return res.status(200).json({ items: [] });
        res.status(200).json(cart);
    } catch (error) {
        res.status(500).json({ message: "Error fetching cart", error: error.message });
    }
};

// ✅ Add to Cart
export const addToCart = async (req, res) => {
    try {
        const { productId, quantity } = req.body;

        let cart = await Cart.findOne({ user: req.user.userId });
        if (!cart) {
            cart = new Cart({ user: req.user.userId, items: [{ product: productId, quantity }] });
        } else {
            const existingItem = cart.items.find(item => item.product.toString() === productId);
            if (existingItem) {
                existingItem.quantity += quantity;
            } else {
                cart.items.push({ product: productId, quantity });
            }
        }

        await cart.save();
        const populatedCart = await cart.populate("items.product");
        res.status(200).json(populatedCart);
    } catch (error) {
        res.status(500).json({ message: "Error adding to cart", error: error.message });
    }
};


// ✅ Remove from Cart
export const removeFromCart = async (req, res) => {
  try {
    const { productId } = req.params;
    const cart = await Cart.findOne({ user: req.user.userId });
    if (!cart) return res.status(404).json({ message: "Cart not found" });

    cart.items = cart.items.filter(item => item.product.toString() !== productId);
    await cart.save();
    const populatedCart = await cart.populate("items.product");
    res.status(200).json(populatedCart);
  } catch (error) {
    res.status(500).json({ message: "Error removing from cart", error: error.message });
  }
};


// Update cart item quantity
export const updateCartItem = async (req, res) => {
  try {
    const { productId } = req.params;
    const { quantity } = req.body;

    const cart = await Cart.findOne({ user: req.user.userId });
    if (!cart) return res.status(404).json({ message: "Cart not found" });

    const item = cart.items.find(i => i.product.toString() === productId);
    if (item) item.quantity = quantity;

    await cart.save();
    const populatedCart = await cart.populate("items.product");
    res.status(200).json(populatedCart);
  } catch (error) {
    res.status(500).json({ message: "Error updating cart", error: error.message });
  }
};