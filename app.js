import express from "express";
import cors from "cors";
import createdb from "./db.js"; // ✅ db.js import
import ContactRoute from "./routes/contact_route.js";

const app = express();

app.use(
  cors({
    origin: ["https://ab-aziz-port.vercel.app"],
    methods: ["GET", "POST"],
  })
);
createdb(); // ✅ Database connection

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ✅ Correct mount point
app.use("/contact", ContactRoute);

app.get("/", (req, res) => {
  res.send("Hello from Express + Vercel ✅");
});

// ✅ Important for Vercel
export default app;
