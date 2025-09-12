import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const createdb = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("✅ Database connected to MongoDB Atlas");
  } catch (err) {
    console.error("❌ Database connection failed:", err.message);
  }
};

export default createdb;
