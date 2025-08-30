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
import { clerkMiddleware } from "@clerk/express";
import fileUpload from "express-fileupload";
import path from "path";

dotenv.config();
const app = express();

const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

const __dirname = path.resolve();

app.use(clerkMiddleware());
app.use(
  fileUpload({
    useTempFiles: true,
    createParentPath: true,
    tempFileDir: path.join(__dirname, "tmp"),
    limits: {
      fieldSize: 10 * 1024 * 1024,
    },
  })
);

// Routes
app.use("/api/users", userRouter);
app.use("/api/admin", adminRouter);
app.use("/api/album", albumRouter);
app.use("/api/songs", songRouter);
app.use("/api/auth", authRouter);
app.use("/api/stat", statRouter);

app.use((err, req, res, next) => {
  res.status(500).json({
    message:
      process.env.NODE_ENV === "production"
        ? "Internal server error"
        : err.message,
  });
});
// Start server
app.listen(PORT, () => {
  console.log("Server is running on port : " + PORT);
  connectDB();
});
