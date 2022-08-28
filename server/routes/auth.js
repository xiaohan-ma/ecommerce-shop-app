import express from "express";
import User from "../schemas/User.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();
import { error } from "../utils/error.js";

const router = express.Router();

// Create new user and register authentication
router.post("/register", async (req, res, next) => {
  try {
    // Password encryption
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.password, salt);

    const newUser = new User({
      ...req.body,
      password: hash,
    });

    await newUser.save();
    res.status(200).send("User created");
  } catch (error) {
    next(error);
  }
});

// User login authentication
router.post("/login", async (req, res, next) => {
  try {
    const user = await User.findOne({
      username: req.body.username,
    });

    // If user not found return error
    if (!user) return next(error(404, "User not found"));

    //If password not correct return error
    const checkPassword = await bcrypt.compare(
      req.body.password,
      user.password
    );
    if (!checkPassword)
      return next(error(400, "Incorrect username or password combination"));

    // Jwt to verify user identity
    const token = jwt.sign(
      { id: user._id, isAdmin: user.isAdmin },
      process.env.JWT_KEY
    );

    const { isAdmin, password, ...data } = user._doc;

    res
      .cookie("access_token", token, { httpOnly: true })
      .status(200)
      .json({ details: { ...data }, isAdmin });
  } catch (error) {
    next(error);
  }
});

export default router;
