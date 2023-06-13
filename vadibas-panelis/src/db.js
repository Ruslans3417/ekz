const { MongoClient } = require('mongodb');

const uri = 'const uri = process.env.MONGODB_URI;';

let client; // Глобальная переменная для хранения подключения

async function connectToMongoDB() {
  try {
    client = await MongoClient.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });

    console.log('Connected to MongoDB');

    // Добавьте свой код для выполнения операций с базой данных

  } catch (error) {
    console.error('MongoDB connection error:', error);
  }
}

// Вызывайте функцию connectToMongoDB для установки подключения
connectToMongoDB();

// В других частях вашего приложения вы можете использовать глобальную переменную client для доступа к подключению и выполнения операций с базой данных.
