import { Router } from "express";
import { authCallback } from "../controllers/auth.controller.js";
import { protectRoute, requireAdmin } from "../middleware/auth.middleware.js";
import {
  checkAdmin,
  createSong,
  deleteSong,
  deleteAlbum,
  createAlbum,
} from "../controllers/admin.controller.js";

const adminRouter = Router();

adminRouter.use(protectRoute, requireAdmin);
adminRouter.get("/check", checkAdmin);
adminRouter.get("/songs", createSong);
adminRouter.get("/song/:id", deleteSong);
adminRouter.get("/albums", createAlbum);
adminRouter.get("/album/:id", deleteAlbum);

export default adminRouter;
