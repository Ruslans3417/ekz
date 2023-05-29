import { AutoComplete, Button, Cascader, Col, Form, Input, InputNumber, Radio, Row, Select } from 'antd';
import { useState } from 'react';
import { Checkbox } from 'antd';

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
    console.log('Received values of form: ', values);
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
    { label: 'Option 1', value: 'option-1' },
    { label: 'Option 2', value: 'option-2' },
    { label: 'Option 3', value: 'option-3' },
    { label: 'Option 4', value: 'option-4' },
    { label: 'Option 5', value: 'option-5' },
    { label: 'Option 6', value: 'option-6' },
  ];

  const checkBoxOptions2 = [
    { label: 'Option 7', value: 'option-7' },
    { label: 'Option 8', value: 'option-8' },
    { label: 'Option 9', value: 'option-9' },
    { label: 'Option 10', value: 'option-10' },
  ];

  const procedureOptions = [
    { label: 'Procedure 1', value: 'procedure-1' },
    { label: 'Procedure 2', value: 'procedure-2' },
    { label: 'Procedure 3', value: 'procedure-3' },
    { label: 'Procedure 4', value: 'procedure-4' },
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
        <Form.Item label="Процедура" name="procedure">
          <Select>
            {procedureOptions.map((option) => (
              <Option key={option.value} value={option.value}>{option.label}</Option>
            ))}
          </Select>
        </Form.Item>

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

      </Form>
    </div>
  );
};

export default App;