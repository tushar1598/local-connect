import express from "express";
import { authenticate } from "../config/auth";
import { authorize } from "../config/authorize";
import {
  createBusiness,
  deleteBusiness,
  getBusinessById,
  getMyBusinesses,
  toggleBusinessStatus,
  updateBusiness,
} from "../controller/businessController";
const router = express.Router();

router.post(
  "/create-business",
  authenticate,
  authorize("owner"),
  createBusiness,
);

router.get("/my-businesses", authenticate, authorize("owner"), getMyBusinesses);

router.get(
  "/get-business/:id",
  authenticate,
  authorize("owner"),
  getBusinessById,
);

router.put(
  "/edit-business/:id",
  authenticate,
  authorize("owner"),
  updateBusiness,
);

router.delete(
  "/delete-business/:id",
  authenticate,
  authorize("owner"),
  deleteBusiness,
);

router.patch(
  "/toggle-status/:id",
  authenticate,
  authorize("owner"),
  toggleBusinessStatus,
);

export default router;
