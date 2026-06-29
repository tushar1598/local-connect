import express from "express";
import {
  getMe,
  Login,
  logout,
  refreshToken,
  Register,
} from "../controller/authController";
import { authenticate } from "../config/auth";
import businessRouter from "./business";
import userRouter from "./user";
const router = express.Router();

router.post("/register", Register);
router.post("/login", Login);
router.get("/me", authenticate, getMe);
router.post("/refresh-token", refreshToken);
router.post("/logout", logout);

router.use("/business", businessRouter);
router.use("/user", userRouter);

export default router;
