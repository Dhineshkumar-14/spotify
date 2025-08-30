import { Router } from "express";
import { protectRoute, requireAdmin } from "../middleware/auth.middleware";
import {
  getAllSongs,
  getFeaturedSongs,
  getMadeForYouSongs,
  getTrendingSongs,
} from "../controllers/song.controller";

const songRouter = Router();

songRouter.use("/", protectRoute, requireAdmin, getAllSongs);
songRouter.use("/featured", getFeaturedSongs);
songRouter.use("/made-for-you", getMadeForYouSongs);
songRouter.use("/trending", getTrendingSongs);

export default songRouter;
