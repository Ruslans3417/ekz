// userRoutes.js
const express = require('express');

const router = express.Router();

const path = require('path');

router.get('/mainshop', (req, res) => {
    // Определите путь к файлу mainshop.jsx
    const filePath = path.join(__dirname, '.', 'src', 'mainshop.jsx');
  
  // Отправьте файл mainshop.jsx в ответ на запрос
  res.sendFile(filePath);
});

router.get('/karzina', (req, res) => {
  
  const filePath = path.join(__dirname, '.', 'src', 'karzina.jsx');
  res.sendFile(filePath);
});

router.get('/admin', (req, res) => {
 
  const filePath = path.join(__dirname, '.', 'src', 'admin.jsx');
  res.sendFile(filePath);
});

router.get('/zap', (req, res) => {
 
  const filePath = path.join(__dirname, '.', 'src', 'zap.jsx');
  res.sendFile(filePath);
});

router.get('/contact', (req, res) => {
  
  const filePath = path.join(__dirname, '.', 'src', 'contact.jsx');
  res.sendFile(filePath);
});

router.get('/blog', (req, res) => {
  
  const filePath = path.join(__dirname, '.', 'src', 'blog.jsx');
  res.sendFile(filePath);
});

router.get('/dostavka', (req, res) => {
  // Обработка запроса для файла dostavka.jsx
  const filePath = path.join(__dirname, '.', 'src', 'dostavka.jsx');
  res.sendFile(filePath);
});

router.get('/reg', (req, res) => {
  
  const filePath = path.join(__dirname, '.', 'src', 'reg.jsx');
  res.sendFile(filePath);
});

// Обработчик маршрута /api/users
router.get('/users', (req, res) => {
  // Обработка запроса на получение списка пользователей
  // Здесь вы можете использовать вашу собственную логику для получения пользователей из базы данных
  const users = [
    { username: 'Ruslan', password: 'password123',admin:'1'},
    { username: 'Natalija', password: 'password456',admin:'0' },
  ];
  res.json(users);
});

module.exports = router;
