import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  passwordHash: {
    type: String,
    required: true
  },
  phoneNumber: {
    type: String,
    required: true
  },
  avatarURL: String
}, {
  timestamps: true
});

// Подключение к базе данных MongoDB
mongoose.connect('mongodb+srv://ruslan:3472886@crystalino.vliap2z.mongodb.net/?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('MongoDB connection error:', error);
  });

// Модель покупателя
const Customer = mongoose.model('Customer', {
  name: String,
  email: String,
  address: String
});

// Модель карзины
const Cart = mongoose.model('Cart', {
  customerId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Customer'
  },
  products: [{
    productId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Product'
    },
    quantity: Number
  }]
});

// Модель администратора
const Administrator = mongoose.model('Administrator', {
  username: String,
  password: String
});

// Модель продукта (косметики)
const Product = mongoose.model('Product', {
  name: String,
  brandId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Brand'
  },
  categoryId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Category'
  },
  price: Number
});

// Модель категории
const Category = mongoose.model('Category', {
  name: String
});

// Модель бренда
const Brand = mongoose.model('Brand', {
  name: String
});

// Модель заказа
const Order = mongoose.model('Order', {
  customerId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Customer'
  },
  products: [{
    productId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Product'
    },
    quantity: Number
  }],
  totalAmount: Number,
  status: String
});


export { Customer, Cart, Administrator, Product, Category, Brand, Order };