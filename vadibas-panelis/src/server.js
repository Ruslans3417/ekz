const  express = require('express');
const mongoose  = require('mongoose');
const bodyParser  = require( 'body-parser');
const userRoutes = require('./userRoutes');

const app = express();

// Подключение к базе данных MongoDB
mongoose.connect('mongodb+srv://ruslan:3472886@crystalino.vliap2z.mongodb.net/?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('MongoDB connection error:', error);
  });

// Определение модели пользователя
const User = mongoose.model('User', {
  username: String,
  password: String
});

// Разрешить использование JSON в запросах
app.use(bodyParser.json());

// Подключение маршрутов пользователей
app.use('/api', userRoutes);

// Роут для обработки регистрации нового пользователя
app.post('/register', (req, res) => {
  const { username, password } = req.body;

  app.post('/login', (req, res) => {
    // ... код обработки аутентификации ...
  });
  

  // Создание нового пользователя с использованием модели User
  const newUser = new User({
    username,
    password
  });

  // Сохранение пользователя в базе данных
  newUser.save()
    .then(() => {
      res.status(200).json({ message: 'User registered successfully' });
    })
    .catch((error) => {
      console.error('Failed to register user:', error);
      res.status(500).json({ message: 'Failed to register user' });
    });
});

// Роут для обработки аутентификации
app.post('/login', (req, res) => {
  const { username, password } = req.body;

  // Здесь вы можете использовать вашу собственную логику проверки учетных данных
  // Например, проверка в базе данных или внешней службе аутентификации

  if (username === 'admin' && password === 'password123') {
    // Учетные данные верны
    res.status(200).json({ message: 'User is authenticated' });
    // Дополнительные действия после успешной авторизации
  } else {
    // Учетные данные неверны
    res.status(401).json({ message: 'Invalid credentials' });
    // Обработка неверных учетных данных
  }
});

// Запуск сервера
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
