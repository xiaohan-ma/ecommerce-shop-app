import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();
import { error } from "./error.js";

export const tokenVerification = (req, res, next) => {
  const token = req.cookies.access_token;

  //Not authenticated if no token exists
  if (!token) {
    return next(error(401, "Not authenticated"));
  }

  try {
    const data = jwt.verify(token, process.env.JWT_KEY);
    req.user = data.user;
    next();
  } catch (error) {
    return next(error(403, "Invalid token"));
  }
};

export const adminVerification = (req, res, next) => {
  tokenVerification(req, res, next, () => {
    if (req.user.isAdmin) {
      next();
    } else {
      return next(error(403, "Not admin"));
    }
  });
};

export const userVerification = (req, res, next) => {
  tokenVerification(req, res, next, () => {
    if (req.user.id == req.params.id || req.user.isAdmin) {
      next();
    } else {
      return next(error(403, "Not authenticated"));
    }
  });
};
