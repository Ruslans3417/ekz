// userRoutes.js
const express = require('express');

const router = express.Router();

router.get('/mainshop', (req, res) => {
  // Обработка запроса для файла mainshop.jsx
});

router.get('/karzina', (req, res) => {
  // Обработка запроса для файла karzina.jsx
});

router.get('/contact', (req, res) => {
  // Обработка запроса для файла contact.jsx
});

router.get('/blog', (req, res) => {
  // Обработка запроса для файла blog.jsx
});

router.get('/dostavka', (req, res) => {
  // Обработка запроса для файла dostavka.jsx
});

// Обработчик маршрута /api/users
router.get('/users', (req, res) => {
  // Обработка запроса на получение списка пользователей
  // Здесь вы можете использовать вашу собственную логику для получения пользователей из базы данных
  const users = [
    { username: 'Ruslan', password: 'password123' },
    { username: 'Natalija', password: 'password456' },
  ];
  res.json(users);
});

module.exports = router;
