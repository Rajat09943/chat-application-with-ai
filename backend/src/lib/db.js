import mongoose from "mongoose";
<<<<<<< HEAD
import dotenv from "dotenv";
dotenv.config();
=======

>>>>>>> saved-changes
export const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URI);
    console.log(`MongoDB connected: ${conn.connection.host}`);
  } catch (error) {
    console.log("MongoDB connection error:", error);
  }
};
