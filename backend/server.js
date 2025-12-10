// server.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config(); // <-- loads .env locally

const authRoutes = require('./routes/auth');

const app = express();

// CORS: allow your Vercel site in prod + localhost in dev
const allowedOrigins = [
  process.env.FRONTEND_URL || '',      // e.g. https://your-frontend.vercel.app
  'http://localhost:3000',             // dev frontend
  'http://127.0.0.1:3000'
];

app.use(cors({
  origin: function(origin, cb) {
    // allow tools like Postman with no origin
    if (!origin) return cb(null, true);
    return cb(null, allowedOrigins.includes(origin));
  },
  credentials: true
}));

app.use(express.json());

// Health check (for testing on Render)
app.get('/health', (req, res) => res.send('OK'));

app.use('/api', authRoutes);

// Use Render's PORT in prod, 5000 locally
const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI;

// Validate MONGO_URI early for clearer Render logs
if (!MONGO_URI || !/^mongodb(\+srv)?:\/\//.test(MONGO_URI)) {
  console.error('Missing or invalid MONGO_URI. Expected it to start with "mongodb://" or "mongodb+srv://"');
  process.exit(1);
}

mongoose.connect(MONGO_URI)
  .then(() => {
    console.log('MongoDB connected');
    app.listen(PORT, () => console.log(`Backend listening on ${PORT}`));
  })
  .catch(err => {
    console.error('MongoDB connection error:', err);
    process.exit(1);
  });
