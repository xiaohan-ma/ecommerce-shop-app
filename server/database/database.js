import dotenv from "dotenv";
import mongoose from "mongoose";
dotenv.config();

const connection = () => {
  try {
    mongoose.connect(process.env.MONGODB);
    console.log("Connected to database");
  } catch (error) {
    console.log(error);
  }

  mongoose.connection.on("disconnected", () => {
    console.log("MongoDB disconnected");
  });
};

export default connection;
