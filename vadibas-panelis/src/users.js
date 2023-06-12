const express = require('express');
const router = express.Router();
const User = require('../models/User');

// Маршрут для создания пользователя
router.post('/users', async (req, res) => {
  try {
    const user = await User.create(req.body);
    res.status(201).json(user);
  } catch (error) {
    res.status(400).json({ error: 'Failed to create user' });
  }
});

// Другие маршруты для чтения, обновления и удаления пользователей

module.exports = router;