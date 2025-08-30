import { Router } from "express";
import { getStats } from "../controllers/stat.controller.js";
import { protectRoute, requireAdmin } from "../middleware/auth.middleware.js";

const statRouter = Router();

statRouter.get("/", protectRoute, requireAdmin, getStats);

export default statRouter;
