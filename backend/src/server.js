import dotenv from "dotenv";
import express from "express";
import connectDB from "./lib/db.js";

dotenv.config();
const app = express();

const PORT = process.env.PORT;

app.listen(5000, () => {
  console.log("Server is running on port : " + PORT);
  connectDB();
});
