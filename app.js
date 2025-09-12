import express from 'express';
import cors from 'cors';
import createdb from './db.js';   // ✅ db.js import

import ContactRoute from './routes/contact_route.js';

const app = express();


app.use(cors({
  origin: ["https://ab-aziz-port.vercel.app"],
  methods: ["GET", "POST"],
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/contact', ContactRoute);

app.get('/', (req, res) => {
  res.send("Hello from Express");
});

export default app;   // Vercel ke liye export
