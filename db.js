import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const createdb = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

    console.log("Database connected ✅");
  } catch (error) {
    console.error("Database connection failed ❌", error.message);
  }
};

export default createdb;
