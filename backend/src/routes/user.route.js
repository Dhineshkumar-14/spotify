import { Router } from "express";
import { protectRoute, requireAdmin } from "../middleware/auth.middleware.js";
import { getAllUsers } from "../controllers/user.controller.js";

const userRouter = Router();

userRouter.get("/", protectRoute, requireAdmin, getAllUsers);

export default userRouter;
