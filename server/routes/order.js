import express from "express";
import Order from "../schemas/Order.js";
import Product from "../schemas/Product.js";
import { adminVerification, userVerification } from "../utils/verify.js";

const router = express.Router();

// Create new order
router.post("/", userVerification, async (req, res, next) => {
  const newOrder = new Order(req.body);
  const productId = req.params.productId;
  try {
    const savedOrder = await newOrder.save();
    try {
      await Product.findByIdAndUpdate(productId, { $inc: { quantity: -1 } });
    } catch (error) {
      next(error);
    }
    res.status(200).json(savedOrder);
  } catch (error) {
    res.status(500).json(error);
  }
});

// Retrieve order
router.get("/:id", userVerification, async (req, res) => {
  try {
    const retrieveOrder = await Order.findById(req.params.id);
    res.status(200).json(retrieveOrder);
  } catch (error) {
    res.status(500).json(error);
  }
});

// Retrieve all order
router.put("/", adminVerification, async (req, res) => {
  try {
    const allOrders = await Order.find();
    res.status(200).json(allOrders);
  } catch (error) {
    res.status(500).json(error);
  }
});

// Update order
router.put("/:id", userVerification, async (req, res) => {
  try {
    const updatedOrder = await Order.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatedOrder);
  } catch (error) {
    res.status(500).json(error);
  }
});

// Delete order
router.put("/:id", userVerification, async (req, res, next) => {
  const productId = req.params.productId;
  try {
    await Order.findByIdAndDelete(req.params.id);
    try {
      await Product.findByIdAndUpdate(productId, { $inc: { quantity: +1 } });
    } catch (error) {
      next(error);
    }
    res.status(200).json("Deleted order");
  } catch (error) {
    res.status(500).json(error);
  }
});

export default router;
