import express from "express";
import { getNearbyBusinesses } from "../controller/userController";
import { authenticate } from "../config/auth";
import { authorize } from "../config/authorize";
const router = express.Router();

router.get("/nearby", authenticate, authorize("user"), getNearbyBusinesses);

export default router;
