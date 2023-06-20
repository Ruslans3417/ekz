import React, { useState, useEffect } from 'react';
import { Table, Button, Modal, Form, Input } from 'antd';
import axios from 'axios';
import Karzina from './karzina.jsx';

const MainShop = ({ cartItems, setCartItems }) => {
  const initialProducts = [
    { id: 1, name: 'Lūpu krāsa', price: 10.99 },
    { id: 2, name: 'mask', price: 14.99 },
    { id: 3, name: 'calagen ', price: 8.99 },
    { id: 4, name: 'Pūdera ', price: 9.99 },
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
    axios
      .post('/api/products', values)
      .then((response) => {
        const newProduct = response.data.product;
        setProducts([...products, newProduct]);
        setModalVisible(false);
      })
      .catch((error) => {
        console.error('Failed to add product:', error);
      });
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
    if (cartItems && cartItems.length > 0) {
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
    }
  };

  const calculateTotal = () => {
    let total = 0;
    for (const item of cartItems) {
      total += item.price;
    }
    return total;
  };



  useEffect(() => {
    axios.get('/api/products')
      .then((response) => {
        setProducts(response.data.products);
      })
      .catch((error) => {
        console.error('Failed to fetch products:', error);
      });
  }, []);



  return (
    <div>
      <h1>MainShop</h1>
      <Button onClick={() => setModalVisible(true)}>Pievienot produktu</Button>
      <Table dataSource={products} columns={productColumns} />

      <Modal
        title="Pievienot produktu"
        visible={modalVisible}
        onCancel={() => setModalVisible(false)}
        footer={null}
      >
        <Form onFinish={handleAddProduct}>
          <Form.Item
            label="Nosaukums"
            name="name"
            rules={[{ required: true, message: 'Lūdzu ievadiet produkta nosaukumu!' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Cena"
            name="price"
            rules={[{ required: true, message: 'Lūdzu ievadiet produkta cenu!' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Pievienot
            </Button>
          </Form.Item>
        </Form>
      </Modal>

      <Modal
        title="Rediģēt produktu"
        visible={editModalVisible}
        onCancel={() => setEditModalVisible(false)}
        footer={null}
      >
        <Form onFinish={handleUpdateProduct} initialValues={editingProduct}>
          <Form.Item
            label="Nosaukums"
            name="name"
            rules={[{ required: true, message: 'Lūdzu ievadiet produkta nosaukumu!' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Cena"
            name="price"
            rules={[{ required: true, message: 'Lūdzu ievadiet produkta cenu!' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Saglabāt
            </Button>
          </Form.Item>
        </Form>
      </Modal>

  

      <h2>Pasūtījumi</h2>
      <Button onClick={handleOrder}>Pasūtīt</Button>
      <Table dataSource={orders} columns={orderColumns} />
    </div>
  );
};

export default MainShop;