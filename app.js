import express from 'express';
import cors from 'cors';       // ✅ Import CORS
import db from './db.js';
import ContactRoute from './routes/contact_route.js';

const app = express();

// ✅ Use CORS
app.use(cors({
  origin: "http://localhost:5173", // frontend ka URL (Vite ka default port 5173 hota hai)
  methods: ["GET", "POST"],
  credentials: true
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ✅ Contact API
app.use('/contact', ContactRoute);

app.listen(5000, () =>
  console.log("Server is running on port 5000")
);
