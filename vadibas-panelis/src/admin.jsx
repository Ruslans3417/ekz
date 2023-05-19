import React, { useState } from 'react';
import { Table, Button, Modal, Form, Input } from 'antd';

const MainShop = () => {
  const initialProducts = [
    { id: 1, name: 'Товар 1', price: 10 },
    { id: 2, name: 'Товар 2', price: 15 },
    { id: 3, name: 'Товар 3', price: 20 },
  ];

  const initialOrders = [
    { id: 1, productName: 'Товар 1', quantity: 2 },
    { id: 2, productName: 'Товар 2', quantity: 1 },
  ];

  const [products, setProducts] = useState(initialProducts);
  const [orders, setOrders] = useState(initialOrders);
  const [modalVisible, setModalVisible] = useState(false);
  const [editModalVisible, setEditModalVisible] = useState(false);
  const [editingProduct, setEditingProduct] = useState(null);

  const handleAddProduct = (values) => {
    const newProduct = {
      id: products.length + 1,
      name: values.name,
      price: values.price,
    };
    setProducts([...products, newProduct]);
    setModalVisible(false);
  };

  const handleEditProduct = (record) => {
    setEditingProduct(record);
    setEditModalVisible(true);
  };

  const handleUpdateProduct = (values) => {
    const updatedProducts = products.map((product) =>
      product.id === editingProduct.id ? { ...product, ...values } : product
    );
    setProducts(updatedProducts);
    setEditModalVisible(false);
  };

  const productColumns = [
    { title: 'ID', dataIndex: 'id', key: 'id' },
    { title: 'Название', dataIndex: 'name', key: 'name' },
    { title: 'Цена', dataIndex: 'price', key: 'price' },
    {
      title: 'Действия',
      key: 'actions',
      render: (_, record) => (
        <Button onClick={() => handleEditProduct(record)}>Редактировать</Button>
      ),
    },
  ];

  const orderColumns = [
    { title: 'ID', dataIndex: 'id', key: 'id' },
    { title: 'Название товара', dataIndex: 'productName', key: 'productName' },
    { title: 'Количество', dataIndex: 'quantity', key: 'quantity' },
  ];

  return (
    <div>
      <h2>Товары</h2>
      <Button onClick={() => setModalVisible(true)}>Добавить товар</Button>
      <Table dataSource={products} columns={productColumns} />

      <h2>Заказы</h2>
      <Table dataSource={orders} columns={orderColumns} />

      <Modal
        title="Добавить товар"
        visible={modalVisible}
        onCancel={() => setModalVisible(false)}
        footer={null}
      >
        <Form onFinish={handleAddProduct}>
          <Form.Item
            label="Название"
            name="name"
            rules={[{ required: true, message: 'Введите название товара' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Цена"
            name="price"
            rules={[{ required: true, message: 'Введите цену товара' }]}
          >
            <Input type="number" />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Добавить
            </Button>
          </Form.Item>
        </Form>
      </Modal>

      <Modal
        title="Редактировать товар"
        visible={editModalVisible}
        onCancel={() => setEditModalVisible(false)}
        footer={null}
      >
        {editingProduct && (
          <Form onFinish={handleUpdateProduct} initialValues={editingProduct}>
            <Form.Item
              label="Название"
              name="name"
              rules={[{ required: true, message: 'Введите название товара' }]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="Цена"
              name="price"
              rules={[{ required: true, message: 'Введите цену товара' }]}
            >
              <Input type="number" />
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit">
                Сохранить
              </Button>
            </Form.Item>
          </Form>
        )}
      </Modal>
    </div>
  );
};

export default MainShop;
