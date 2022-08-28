import mongoose from "mongoose";
const { Schema } = mongoose;

const ShoppingCartSchema = new mongoose.Schema({
  products: [
    {
      productId: {
        type: String,
      },
      quantity: {
        type: Number,
        default: 1,
      },
    },
  ],
  userId: {
    type: String,
    required: true,
  },
});

export default mongoose.model("ShoppingCart", ShoppingCartSchema);
