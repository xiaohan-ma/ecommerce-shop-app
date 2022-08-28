import express from "express";
import User from "../schemas/User.js";
import {
  adminVerification,
  tokenVerification,
  userVerification,
} from "../utils/verify.js";

const router = express.Router();

router.get("/checkLogin", tokenVerification, (req, res) => {
  res.send("User is authenticated");
});

router.get("/checkAdmin/:id", adminVerification, (req, res, next) => {
  res.send("User is authenticated");
});

router.get("/checkUser/:id", userVerification, (req, res, next) => {
  res.send("User is authenticated");
});

// Retrieve user
router.get("/:id", userVerification, async (req, res) => {
  try {
    const retrieveUser = await User.findById(req.params.id);
    res.status(200).json(retrieveUser);
  } catch (error) {
    res.status(500).json(error);
  }
});

// Retrieve all user
router.put("/", adminVerification, async (req, res) => {
  try {
    const allUsers = await User.find();
    res.status(200).json(allUsers);
  } catch (error) {
    res.status(500).json(error);
  }
});

// Update user
router.put("/:id", userVerification, async (req, res) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatedUser);
  } catch (error) {
    res.status(500).json(error);
  }
});

// Delete user
router.put("/:id", userVerification, async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    res.status(200).json("Deleted user");
  } catch (error) {
    res.status(500).json(error);
  }
});

export default router;
