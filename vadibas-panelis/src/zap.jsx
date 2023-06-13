import { AutoComplete, Button, Cascader, Col, Form, Input, InputNumber, Radio, Row, Select, Checkbox } from 'antd';
import { useState } from 'react';
import axios from 'axios';
import './all.css/reg.css';

import './all.css/reg.css';

const { Option } = Select;
const residences = [
  {
    value: 'zhejiang',
    label: 'Zhejiang',
    children: [
      {
        value: 'hangzhou',
        label: 'Hangzhou',
        children: [
          {
            value: 'xihu',
            label: 'West Lake',
          },
        ],
      },
    ],
  },
  {
    value: 'jiangsu',
    label: 'Jiangsu',
    children: [
      {
        value: 'nanjing',
        label: 'Nanjing',
        children: [
          {
            value: 'zhonghuamen',
            label: 'Zhong Hua Men',
          },
        ],
      },
    ],
  },
];
const formItemLayout = {
  labelCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 8,
    },
  },
  wrapperCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 16,
    },
  },
};
const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 8,
    },
  },
};
const App = () => {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    axios.post('/api/orders', values)
      .then((response) => {
        console.log('Order created:', response.data);
      })
      .catch((error) => {
        console.error('Error creating order:', error);
      });
  };
  const prefixSelector = (
    <Form.Item name="prefix" noStyle>
      <Select
        style={{
          width: 70,
        }}
      >
        <Option value="371">+371</Option>
        <Option value="7">+7</Option>
      </Select>
    </Form.Item>
  );
  const suffixSelector = (
    <Form.Item name="suffix" noStyle>
      <Select
        style={{
          width: 70,
        }}
      >
        <Option value="USD">$</Option>
      </Select>
    </Form.Item>
  );
  const [autoCompleteResult, setAutoCompleteResult] = useState([]);
  const onWebsiteChange = (value) => {
    if (!value) {
      setAutoCompleteResult([]);
    } else {
      setAutoCompleteResult(['.com', '.org', '.net'].map((domain) => `${value}${domain}`));
    }
  };
  const websiteOptions = autoCompleteResult.map((website) => ({
    label: website,
    value: website,
  }));

  const checkBoxOptions1 = [
    { label: 'Pirmdiena', value: 'option-1' },
    { label: 'Otrdiena', value: 'option-2' },
    { label: 'Trešdiena', value: 'option-3' },
    { label: 'Ceturtdiena', value: 'option-4' },
    { label: 'Piektdiena', value: 'option-5' },
    { label: 'Sestdiena', value: 'option-6' },
  ];

  const checkBoxOptions2 = [
    { label: '13:00 (tikai sestdien)', value: 'option-7' },
    { label: '15:30', value: 'option-8' },
    { label: '17:30', value: 'option-9' },
    { label: '10:00 (tikai sestdien)', value: 'option-10' },
  ];

  const procedureOptions = [
    { label: 'Pilnā sejas kopšanas procedūra', value: 'procedure-1' },
    { label: 'Pīlinga procedūra', value: 'procedure-2' },
    { label: 'Sejas tīrīšana', value: 'procedure-3' },
    { label: 'Atjaunojošā procedūra ar alginatu masku', value: 'procedure-4' },
    { label: 'Masāža', value: 'procedure-5' },
    { label: 'Carboxy terapija', value: 'procedure-6' },
    { label: 'Darsonvalizācija', value: 'procedure-7' },
    { label: 'Konsultācija', value: 'procedure-8' },
    { label: 'Uzacis/skropstas', value: 'procedure-9' },

  ];

  return (
    <div className="container">
      <Form
        {...formItemLayout}
        form={form}
        name="register"
        onFinish={onFinish}
        initialValues={{
          residence: ['zhejiang', 'hangzhou', 'xihu'],
          prefix: '+371',
        }}
        style={{
          maxWidth: 600,
        }}
        scrollToFirstError
      >


        <Form.Item
          name="Vards"
          label="Vards"
          rules={[
            {
              type: 'Vards',
              message: 'The input is not valid Vards!',
            },
            {
              required: true,
              message: 'Please input your Vards!',
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item label="Procedūra" name="procedure">
          <Select>
            {procedureOptions.map((option) => (
              <Option key={option.value} value={option.value}>{option.label}</Option>
            ))}
          </Select>
        </Form.Item>
        
        <Form.Item
  name="phone"
  label="Phone Number"
  rules={[
    {
      required: true,
      message: 'Please input your phone number!',
    },
  ]}
>
  <Input
    addonBefore={prefixSelector}
    style={{
      width: '100%',
    }}
    maxLength={8} // Ограничение до 8 символов
  />
</Form.Item>

        <Form.Item label="Checkbox Group 1" name="group1">
          <Radio.Group>
            <Row>
              {checkBoxOptions1.map((option) => (
                <Col span={8} key={option.value}>
                  <Radio value={option.value}>{option.label}</Radio>
                </Col>
              ))}
            </Row>
          </Radio.Group>
        </Form.Item>

        <Form.Item label="Checkbox Group 2" name="group2">
          <Radio.Group>
            <Row>
              {checkBoxOptions2.map((option) => (
                <Col span={8} key={option.value}>
                  <Radio value={option.value}>{option.label}</Radio>
                </Col>
              ))}
            </Row>
          </Radio.Group>
        </Form.Item>

        <Form.Item {...tailFormItemLayout}>
  <Button type="primary" htmlType="submit" style={{ backgroundColor: 'purple' }}>
    Register
  </Button>
</Form.Item>
      </Form>
    </div>
  );
};

export default App;
