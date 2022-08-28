import express from "express";
import cors from "cors";
import connection from "./database/database.js";
import productRoute from "./routes/products.js";
import orderRoute from "./routes/order.js";
import userRoute from "./routes/users.js";
import shoppingCartRoute from "./routes/shoppingcart.js";
import authRoute from "./routes/auth.js";
import cookieParser from "cookie-parser";
const app = express();

app.use(cors());
app.use(cookieParser());
app.use(express.json());

// Routes
app.all("/*", function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  next();
});
app.use("/api/auth", authRoute);
app.use("/api/products", productRoute);
app.use("/api/orders", orderRoute);
app.use("/api/cart", shoppingCartRoute);
app.use("/api/users", userRoute);

// Error handling
app.use((err, req, res, next) => {
  // Error 500 is internal server error
  // 200 is ok status
  const errorStatus = err.status || 500;
  const errorMessage = err.message || "Something failed";
  return res.status(errorStatus).json({
    success: false,
    status: errorStatus,
    message: errorMessage,
    stack: err.stack,
  });
});

app.listen(5000, () => {
  connection();
  console.log("Server running on localhost:5000");
});
