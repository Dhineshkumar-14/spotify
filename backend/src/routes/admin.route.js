import { Router } from "express";
import { authCallback } from "../controllers/auth.controller.js";

const adminRouter = Router();

adminRouter.get("/callback", authCallback);

export default adminRouter;
