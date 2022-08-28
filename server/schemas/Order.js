import mongoose from "mongoose";
const { Schema } = mongoose;

const OrderSchema = new mongoose.Schema({
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
  totalPrice: {
    type: Number,
    min: 0,
    required: true,
  },
  userId: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    default: "pending",
  },
});

export default mongoose.model("Order", OrderSchema);
