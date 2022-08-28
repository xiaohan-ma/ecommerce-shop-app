import e from "express";
import express from "express";
import Product from "../schemas/Product.js";
import { adminVerification } from "../utils/verify.js";

const router = express.Router();

// Create new product
router.post("/", adminVerification, async (req, res) => {
  const newProduct = new Product(req.body);
  try {
    const savedProduct = await newProduct.save();
    res.status(200).json(savedProduct);
  } catch (error) {
    res.status(500).json(error);
  }
});

// Retrieve product
router.get("/get/:id", async (req, res) => {
  try {
    const retrieveProduct = await Product.findById(req.params.id);
    res.status(200).json(retrieveProduct);
  } catch (error) {
    res.status(500).json(error);
  }
});

// Retrieve all products
router.get("/", async (req, res) => {
  try {
    const allProducts = await Product.find();
    res.status(200).json(allProducts);
  } catch (error) {
    res.status(500).json(error);
  }
});

// Retrieve product based on gender category
router.get("/category", async (req, res) => {
  try {
    const allProducts = await Product.find(req.query);
    res.status(200).json(allProducts);
  } catch (error) {
    res.status(500).json(error);
  }
});

//Retrieve featured products
router.get("/", async (req, res) => {
  try {
    const featuredProducts = await Product.find(req.query);
    res.status(200).json(featuredProducts);
  } catch (error) {
    res.status(500).json(error);
  }
});

// Update product
router.put("/:id", adminVerification, async (req, res) => {
  try {
    const updatedProduct = await Product.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatedProduct);
  } catch (error) {
    res.status(500).json(error);
  }
});

// Delete product
router.put("/:id", adminVerification, async (req, res) => {
  try {
    await Product.findByIdAndDelete(req.params.id);
    res.status(200).json("Deleted product");
  } catch (error) {
    res.status(500).json(error);
  }
});

export default router;
