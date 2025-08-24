const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const authRoutes = require('./routes/auth');

const app = express();
app.use(cors());
app.use(express.json());
app.use('/api', authRoutes);

mongoose.connect('mongodb://127.0.0.1:27017/snapchat-practice', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(5000, () => console.log('Backend listening on port 5000')))
  .catch(err => console.error('MongoDB connection error:', err));
