import mongoose from "mongoose";
const { Schema } = mongoose;

const ProductSchema = new mongoose.Schema({
  productName: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    min: 0,
    required: true,
  },
  image: {
    type: String,
  },
  desc: {
    type: String,
    required: true,
  },
  featured: {
    type: Boolean,
    default: false,
  },
  genderCategory: {
    type: String,
    required: true,
  },
  styleType: {
    type: String,
    required: true,
  },
  inStock: {
    type: Boolean,
    default: true,
  },
});

export default mongoose.model("Product", ProductSchema);
