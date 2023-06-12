const express = require('express');
const app = express();

app.use(express.json());

app.post('/register', (req, res) => {
  // Обработка регистрации пользователя
  const userData = req.body; // Данные пользователя из POST-запроса

  // Ваш код для сохранения данных пользователя или выполнения другой логики регистрации

  res.status(200).json({ message: 'User registered successfully' });
});

// Запуск сервера
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
