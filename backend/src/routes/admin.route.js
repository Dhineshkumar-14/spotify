import { Router } from "express";
import {
  checkAdmin,
  createAlbum,
  createSong,
  deleteAlbum,
  deleteSong,
} from "../controllers/admin.controller.js";
import { protectRoute, requireAdmin } from "../middleware/auth.middleware.js";

const adminRouter = Router();

adminRouter.use(protectRoute, requireAdmin);
adminRouter.get("/check", checkAdmin);
adminRouter.get("/songs", createSong);
adminRouter.get("/song/:id", deleteSong);
adminRouter.get("/albums", createAlbum);
adminRouter.get("/album/:id", deleteAlbum);

export default adminRouter;
