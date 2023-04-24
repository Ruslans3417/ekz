import React, { useState } from 'react';
import { Form, Input, Button, Checkbox, message } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';

const Login = () => {
  const [loading, setLoading] = useState(false);

  const onFinish = (values) => {
    setLoading(true);

    // Здесь вы можете отправить запрос на сервер для проверки учетных данных пользователя
    // Если учетные данные действительны, вы можете перенаправить пользователя на другую страницу

    setTimeout(() => {
      setLoading(false);
      message.success('Вы успешно авторизовались!');
    }, 2000);
  };

  return (
    <Form
      name="normal_login"
      className="login-form"
      initialValues={{ remember: true }}
      onFinish={onFinish}
    >
      <Form.Item
        name="username"
        rules={[{ required: true, message: 'Пожалуйста, введите имя пользователя!' }]}
      >
        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Имя пользователя" />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[{ required: true, message: 'Пожалуйста, введите пароль!' }]}
      >
        <Input
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Пароль"
        />
      </Form.Item>
      <Form.Item>
        <Form.Item name="remember" valuePropName="checked" noStyle>
          <Checkbox>Запомнить меня</Checkbox>
        </Form.Item>

        <a className="login-form-forgot" href="/">
          Забыли пароль?
        </a>
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" className="login-form-button" loading={loading}>
          Войти
        </Button>
        Или <a href="/">зарегистрироваться сейчас!</a>
      </Form.Item>
    </Form>
  );
};

export default Login;