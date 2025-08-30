import { Router } from "express";

const userRouter = Router();

// Root endpoint: GET /api/users
userRouter.get("/", (req, res) => {
  res.send("Users API root is working ✅");
});

// Test endpoint: GET /api/users/Hello
userRouter.get("/Hello", (req, res) => {
  res.send("Hello World!");
});

export default userRouter;
