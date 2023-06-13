import React, { useState, useEffect } from 'react';
import { Table, Button, Modal, Form, Input } from 'antd';
import axios from 'axios';

const MainShop = ({ cartItems, setCartItems }) => {
  const initialProducts = [
    { id: 1, name: ' ', price: 0 },
    { id: 2, name: ' ', price: 0 },
    { id: 3, name: ' ', price: 0 },
  ];

  const initialOrders = [
    { id: 1, name: ' ', price: 0, quantity: 2 },
    { id: 2, name: ' ', price: 0, quantity: 1 },
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
    { title: 'Nosaukums', dataIndex: 'name', key: 'name' },
    { title: 'Cena:', dataIndex: 'price', key: 'price' },
    {
      title: 'Darbības',
      key: 'actions',
      render: (_, record) => (
        <Button onClick={() => handleEditProduct(record)}>Rediģēt</Button>
      ),
    },
  ];

  const orderColumns = [
    { title: 'Numurs', dataIndex: 'id', key: 'id' },
    { title: 'Nosaukums', dataIndex: 'name', key: 'name' },
    { title: 'Cena', dataIndex: 'price', key: 'price' },
  ];

  const handleOrder = () => {
    const newOrder = {
      name: cartItems[0].name,
      price: calculateTotal(),
      procedure: 'Procedūras',
    };

    axios
      .post('/api/orders', newOrder)
      .then((response) => {
        console.log('Order created:', response.data);
      })
      .catch((error) => {
        console.error('Error creating order:', error);
      });
  };

  const calculateTotal = () => {
    let total = 0;
    for (const item of cartItems) {
      total += item.price;
    }
    return total;
  };

  useEffect(() => {
    setOrders([...orders]);
  }, [orders]);

  return (
    <div>
      <h2>Produkti</h2>
      <Button onClick={() => setModalVisible(true)}>Pievienot preces</Button>
      <Table dataSource={products} columns={productColumns} />

      <h2>Pasūtījumi</h2>
      <Table dataSource={orders} columns={orderColumns} />

      <Modal
        title="Pievienot preci"
        visible={modalVisible}
        onCancel={() => setModalVisible(false)}
        footer={null}
      >
        <Form onFinish={handleAddProduct}>
          <Form.Item
            label="Nosaukums"
            name="name"
            rules={[{ required: true, message: 'Ievadiet preces nosaukumu' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Cena"
            name="price"
            rules={[{ required: true, message: 'Ievadiet preces cenu' }]}
          >
            <Input type="number" />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Pievienot
            </Button>
          </Form.Item>
        </Form>
      </Modal>

      <Modal
        title="Rediģēt preci"
        visible={editModalVisible}
        onCancel={() => setEditModalVisible(false)}
        footer={null}
      >
        {editingProduct && (
          <Form onFinish={handleUpdateProduct} initialValues={editingProduct}>
            <Form.Item
              label="Nosaukums"
              name="name"
              rules={[{ required: true, message: 'Ievadiet preces nosaukumu' }]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="Cena"
              name="price"
              rules={[{ required: true, message: 'Ievadiet preces cenu' }]}
            >
              <Input type="number" />
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit">
                Saglabāt
              </Button>
            </Form.Item>
          </Form>
        )}
      </Modal>

      <Button onClick={handleOrder}>Izveidot pasūtījumu</Button>
    </div>
  );
};

export default MainShop;
