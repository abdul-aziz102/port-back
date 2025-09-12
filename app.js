import express from 'express';
import cors from 'cors';
import db from './db.js';
import ContactRoute from './routes/contact_route.js';

const app = express();

// ✅ Use CORS
app.use(cors({
  origin: ["https://ab-aziz-port.vercel.app"], // frontend ka domain
  methods: ["GET", "POST"],
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ✅ Contact API
app.use('/contact', ContactRoute);

// ✅ Test route
app.get('/', (req, res) => {
  res.send("Hello from Express");
});

// ⚠️ Vercel ke liye export karna hoga, listen mat lagao
export default app;
