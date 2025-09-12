import express from 'express';
import cors from 'cors';       // ✅ Import CORS
import db from './db.js';
import ContactRoute from './routes/contact_route.js';

const app = express();

// ✅ Use CORS

app.use(cors({
  origin: ["https://ab-aziz-port.vercel.app"], // ✅ apna frontend domain allow karo
  methods: ["GET", "POST"],
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ✅ Contact API
app.use('/contact', ContactRoute);
app.get('/', (req, res) => {
  res.send("Hello from Express server");
});


app.listen(5000, () =>
  console.log("Server is running on port 5000")
);
