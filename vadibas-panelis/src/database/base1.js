import React, { useState, useEffect } from 'react';

function Database() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('path/to/database.json');
      const jsonData = await response.json();
      setData(jsonData);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const saveData = async (newData) => {
    try {
      const response = await fetch('path/to/database.json', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(newData)
      });
      const updatedData = await response.json();
      setData(updatedData);
    } catch (error) {
      console.error('Error saving data:', error);
    }
  };

  // Другие функции для обновления, удаления и т. д.

  const saveUserData = async (userData) => {
    try {
      // Получите текущие данные из базы данных JSON
      const response = await fetch('path/to/database.json');
      const jsonData = await response.json();
  
      // Генерируйте уникальный идентификатор для нового пользователя
      const newUserId = jsonData.users.length + 1;
  
      // Создайте объект с данными нового пользователя
      const newUser = {
        id: newUserId,
        ...userData,
      };
  
      // Добавьте нового пользователя в массив пользователей
      jsonData.users.push(newUser);
  
      // Сохраните обновленные данные обратно в базу данных JSON
      await fetch('path/to/database.json', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(jsonData),
      });
  
      // Возвращайте нового пользователя или другой индикатор успеха, если необходимо
      return newUser;
    } catch (error) {
      console.error('Error saving user data:', error);
      // Обработайте ошибку сохранения данных
      // Верните false или другой индикатор неудачи
    }
  };

  const registerUser = async (userData) => {
    try {
      const response = await fetch('path/to/database.json', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(userData)
      });
      const savedUser = await response.json();
      console.log('User registered:', savedUser);
    } catch (error) {
      console.error('Error registering user:', error);
    }
  };


  const loginUser = async (userData) => {
    try {
      // Получите текущие данные из базы данных JSON
      const response = await fetch('path/to/database.json');
      const jsonData = await response.json();

      // Проверьте, существует ли пользователь с указанным именем пользователя и паролем
      const user = jsonData.users.find((user) => user.username === userData.username && user.password === userData.password);

      if (user) {
        // Успешный вход пользователя
        console.log('User logged in:', user);
      } else {
        // Неудачный вход пользователя
        console.log('Invalid username or password');
      }
    } catch (error) {
      console.error('Error logging in:', error);
    }
  };



  return (
    <div>
      {/* Ваш код компонента */}
    </div>
  );
}

export default Database;
