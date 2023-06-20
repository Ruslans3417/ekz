const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const userRoutes = require('./userRoutes');

const app = express();

// Подключение к базе данных MongoDB
mongoose
  .connect('mongodb+srv://ruslan:3472886@crystalino.vliap2z.mongodb.net/?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('MongoDB connection error:', error);
  });

// Определение модели пользователя
const User = mongoose.model('User', {
  username: String,
  password: String,
});

const Product = mongoose.model('Product', {
  name: String,
  price: Number,
});

// Определение модели товара в корзине
const CartItem = mongoose.model('CartItem', {
  name: String,
  price: Number,
});

// Определение модели заказа
const Order = mongoose.model('Order', {
  name: String,
  price: Number,
  procedure: String,
});

// Разрешить использование JSON в запросах
app.use(bodyParser.json());

// Роут для добавления товара в корзину
app.post('/api/cart', (req, res) => {
  const { name, price } = req.body;

  // Создание нового товара в корзине с использованием модели CartItem
  const newItem = new CartItem({
    name,
    price,
  });

  // Сохранение товара в корзине в базе данных
  newItem
    .save()
    .then(() => {
      res.status(200).json({ message: 'Item added to cart successfully' });
    })
    .catch((error) => {
      console.error('Failed to add item to cart:', error);
      res.status(500).json({ error: 'Failed to add item to cart' });
    });
});


//роут для создания нового товара:

app.post('/api/products', (req, res) => {
  const { name, price } = req.body;

  const newProduct = new Product({
    name,
    price,
  });

  newProduct.save()
    .then(() => {
      res.status(200).json({ message: 'Product created successfully' });
    })
    .catch((error) => {
      console.error('Failed to create product:', error);
      res.status(500).json({ error: 'Failed to create product' });
    });
});

app.get('/api/products', (req, res) => {
  Product.find()
    .then((products) => {
      res.status(200).json({ products });
    })
    .catch((error) => {
      console.error('Failed to fetch products:', error);
      res.status(500).json({ error: 'Failed to fetch products' });
    });
});


// Роут для удаления товара
app.delete('/api/products/:id', (req, res) => {
  const { id } = req.params;

  // Удаление товара по ID
  Product.findByIdAndDelete(id)
    .then(() => {
      res.status(200).json({ id });
    })
    .catch((error) => {
      console.error('Failed to delete product:', error);
      res.status(500).json({ error: 'Failed to delete product' });
    });
});


// Роут для получения всех товаров в корзине
app.get('/api/cart', (req, res) => {
  // Получение всех товаров в корзине из базы данных
  CartItem.find()
    .then((items) => {
      res.status(200).json({ items });
    })
    .catch((error) => {
      console.error('Failed to fetch cart items:', error);
      res.status(500).json({ error: 'Failed to fetch cart items' });
    });
});

// Роут для удаления товара из корзины по ID
app.delete('/api/cart/:id', (req, res) => {
  const { id } = req.params;

  // Удаление товара из корзины по ID
  CartItem.findByIdAndDelete(id)
    .then(() => {
      res.status(200).json({ message: 'Item removed from cart successfully' });
    })
    .catch((error) => {
      console.error('Failed to remove item from cart:', error);
      res.status(500).json({ error: 'Failed to remove item from cart' });
    });
});

// Роут для создания заказа
app.post('/api/orders', (req, res) => {
  const { name, price, procedure } = req.body;

  // Создание нового заказа с использованием модели Order
  const newOrder = new Order({
    name,
    price,
    procedure,
  });

  // Сохранение заказа в базе данных
  newOrder
    .save()
    .then(() => {
      res.status(200).json({ message: 'Order placed successfully' });
    })
    .catch((error) => {
      console.error('Failed to place order:', error);
      res.status(500).json({ error: 'Failed to place order' });
    });
});

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
    password,
  });

  // Сохранение пользователя в базе данных
  newUser
    .save()
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
