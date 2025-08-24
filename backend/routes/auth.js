const express = require('express');
const User = require('../models/User');
const router = express.Router();

router.post('/register', async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = new User({ username, password });
    await user.save();
    res.status(201).send('User registered (plain password stored)');
  } catch (err) {
    res.status(400).send('User registration failed (possibly duplicate username)');
  }
});

router.post('/login', async (req, res) => {
  const { username, password } = req.body;
  const user = await User.findOne({ username, password });
  if (!user) return res.status(400).send('Invalid credentials');
  res.send('Login successful!');
});

router.get('/all-users', async (req, res) => {
  const users = await User.find({});
  res.json(users);
});

module.exports = router;
