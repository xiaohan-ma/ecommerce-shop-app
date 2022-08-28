import axios from "axios";

export async function newOrder(orderDetails) {
  try {
    const res = await axios.post("/orders", orderDetails);
    console.log(res.data);
    return res.data;
  } catch (error) {
    console.log(error);
  }
}
