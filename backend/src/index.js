import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";
<<<<<<< HEAD
import path from "path";
import axios from "axios"; // ✅ NEW

import { connectDB } from "./lib/db.js";
import authRoutes from "./routes/auth.route.js";
import messageRoutes from "./routes/message.route.js";
import { app, server, io } from "./lib/socket.js"; // make sure you get io if needed
=======

import path from "path";

import { connectDB } from "./lib/db.js";

import authRoutes from "./routes/auth.route.js";
import messageRoutes from "./routes/message.route.js";
import { app, server } from "./lib/socket.js";
>>>>>>> saved-changes

dotenv.config();

const PORT = process.env.PORT;
const __dirname = path.resolve();

<<<<<<< HEAD
// 🔁 Middlewares
app.use(express.json({ limit: '10mb' })); // in case of image base64
app.use(cookieParser());
app.use(cors({
  origin: "http://localhost:5173",
  credentials: true,
}));

// 🔗 Routes
app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);

// ✅ AI & OCR API Bridge (Forward to Python)
app.post("/ai", async (req, res) => {
  try {
    const { message } = req.body;
    const response = await axios.post("http://localhost:5002/ask", { question: message });
    res.json({ reply: response.data.answer });
  } catch (err) {
    res.status(500).json({ error: "AI service failed" });
  }
});

app.post("/ocr", async (req, res) => {
  try {
    const { image } = req.body;
    const response = await axios.post("http://localhost:5002/ocr", { image });
    res.json({ text: response.data.text });
  } catch (err) {
    res.status(500).json({ error: "OCR service failed" });
  }
});

// 🔐 Production Setup
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../frontend/dist")));
=======
app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../frontend/dist")));

>>>>>>> saved-changes
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../frontend", "dist", "index.html"));
  });
}

<<<<<<< HEAD
// 🔁 Socket server start
=======
>>>>>>> saved-changes
server.listen(PORT, () => {
  console.log("server is running on PORT:" + PORT);
  connectDB();
});
