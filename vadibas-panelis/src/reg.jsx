import { Form, Input, Button } from 'antd';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [form] = Form.useForm();
  const navigate = useNavigate();

  const onFinish = (values) => {
    axios
      .post('/register', values)
      .then((response) => {
        console.log('User registered:', response.data);
        navigate('/main');
      })
      .catch((error) => {
        console.error('Failed to register user:', error);
      });
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '65vh' }}>
      <div>
        <h1>Registration</h1>
        <Form form={form} onFinish={onFinish}>
          <Form.Item name="username" label="Username" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
          <Form.Item name="password" label="Password" rules={[{ required: true }]}>
            <Input.Password />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Register
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default Register;
