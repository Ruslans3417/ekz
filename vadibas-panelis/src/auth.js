import mongoose from 'mongoose';

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
const onFinish = async (values) => {
    try {
      const { username, password } = values;
  
      // Поиск пользователя по имени в базе данных
      const user = await User.findOne({ name: username });
  
      if (user && user.password === password) {
        // Пользователь найден и пароль совпадает
        console.log('User is authenticated');
        // Дополнительные действия после успешной авторизации
      } else {
        // Пользователь не найден или пароль неверный
        console.log('Invalid credentials');
        // Обработка неверных учетных данных
      }
    } catch (error) {
      console.error('Error during authentication:', error);
    }
  };
