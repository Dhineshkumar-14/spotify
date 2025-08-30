import dotenv from "dotenv";
import express from "express";
import connectDB from "./lib/db.js";
import userRouter from "./routes/user.route.js";
import cors from "cors";
import adminRouter from "./routes/admin.route.js";
import albumRouter from "./routes/album.route.js";
import songRouter from "./routes/song.route.js";
import authRouter from "./routes/auth.route.js";
import statRouter from "./routes/stat.route.js";

dotenv.config();
const app = express();

const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());
// Routes
app.use("/api/users", userRouter);
app.use("/api/admin", adminRouter);
app.use("/api/album", albumRouter);
app.use("/api/songs", songRouter);
app.use("/api/auth", authRouter);
app.use("/api/stat", statRouter);

// Start server
app.listen(PORT, () => {
  console.log("Server is running on port : " + PORT);
  connectDB();
});
