import express from "express";
import ShoppingCart from "../schemas/ShoppingCart.js";
import {
  adminVerification,
  tokenVerification,
  userVerification,
} from "../utils/verify.js";

const router = express.Router();

// Create new shopping cart
router.post("/", tokenVerification, async (req, res) => {
  const newCart = new ShoppingCart(req.body);

  try {
    const savedCart = await newCart.save();
    res.status(200).json(savedCart);
  } catch (error) {
    res.status(500).json(error);
  }
});

// Retrieve existing shopping cart
router.get("/:id", userVerification, async (req, res) => {
  try {
    const getCart = await ShoppingCart.findById(req.params.id);
    res.status(200).json(getCart);
  } catch (error) {
    res.status(500).json(error);
  }
});

// Retrieve all shopping carts
router.get("/", adminVerification, async (req, res) => {
  try {
    const getCart = await ShoppingCart.find();
    res.status(200).json(getCart);
  } catch (error) {
    res.status(500).json(error);
  }
});

// Update existing shopping cart
router.post("/:id", userVerification, async (req, res) => {
  try {
    const updateCart = await ShoppingCart.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updateCart);
  } catch (error) {
    res.status(500).json(error);
  }
});

// Delete existing shopping cart
router.post("/:id", userVerification, async (req, res) => {
  try {
    const deleteCart = await ShoppingCart.findByIdAndDelete(req.params.id);
    res.status(200).json("Deleted existing cart");
  } catch (error) {
    res.status(500).json(error);
  }
});

export default router;
