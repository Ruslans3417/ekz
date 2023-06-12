import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const onFinish = async (values) => {
    setLoading(true);

    try {
      const { username, password } = values;

      const response = await axios.post('/login', { username, password });

      if (response.status === 200) {
        console.log('User is authenticated');

        // Устанавливаем значение isLoggedIn в true
        // setIsLoggedIn(true); // Эту строку нужно закомментировать, так как setIsLoggedIn не объявлен

        navigate('/main');
      } else {
        console.log('Invalid credentials');
      }
    } catch (error) {
      console.error('Error during authentication:', error);
    } finally {
      setLoading(false);
    }
  };

  // Остальной код

};

export default Login;
