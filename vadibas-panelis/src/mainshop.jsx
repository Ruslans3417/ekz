import React, { useState } from "react";
import { Card, Col, Row, Button, Select } from "antd";
import './all.css/cartprod.css';

const { Option } = Select;
const products = [
  {
    id: 1,
    name: "Помада",
    brand: "Maybelline",
    price: 10.99,
    image: "https://via.placeholder.com/150",
    category: "Губы",
  },
  {
    id: 2,
    name: "Тональный крем",
    brand: "L'Oreal",
    price: 14.99,
    image: "https://via.placeholder.com/150",
    category: "Лицо",
  },
  {
    id: 3,
    name: "Пудра",
    brand: "Rimmel",
    price: 8.99,
    image: "https://via.placeholder.com/150",
    category: "Глаза",
  },
  {
    id: 4,
    name: "Пудра",
    brand: "Maybelline",
    price: 9.99,
    image: "https://via.placeholder.com/150",
    category: "Лицо",
  },
  {
    id: 5,
    name: "Пудра",
    brand: "Maybelline",
    price: 9.99,
    image: "https://via.placeholder.com/150",
    category: "Губы",
  },
  {
    id: 6,
    name: "Пудра",
    brand: "Maybelline",
    price: 9.99,
    image: "https://via.placeholder.com/150",
    category: "Глаза",
  },
  {
    id: 7,
    name: "Пудра",
    brand: "Maybelline",
    price: 9.99,
    image: "https://via.placeholder.com/150",
    category: "Лицо",
  },
  {
    id: 8,
    name: "Пудра",
    brand: "Maybelline",
    price: 9.99,
    image: "https://via.placeholder.com/150",
    category: "Губы",
  },
  {
    id: 9,
    name: "Пудра",
    brand: "Maybelline",
    price: 9.99,
    image: "https://via.placeholder.com/150",
    category: "Глаза",
  },
  {
    id: 10,
    name: "Пудра",
    brand: "Maybelline",
    price: 9.99,
    image: "https://via.placeholder.com/150",
    category: "Лицо",
  },
  {
    id: 11,
    name: "Пудра",
    brand: "Maybelline",
    price: 9.99,
    image: "https://via.placeholder.com/150",
    category: "Губы",
  },
  {
    id: 12,
    name: "Пудра",
    brand: "Maybelline",
    price: 9.99,
    image: "https://via.placeholder.com/150",
    category: "Глаза",
  },
    {
    id: 13,
    name: "Пудра",
    brand: "Maybelline",
    price: 9.99,
    image: "https://via.placeholder.com/150",
    category: "Лицо",
  },  {
    id: 14,
    name: "Пудра",
    brand: "Maybelline",
    price: 9.99,
    image: "https://via.placeholder.com/150",
    category: "Губы",
  },
  {
    id: 15,
    name: "Пудра",
    brand: "Maybelline",
    price: 9.99,
    image: "https://via.placeholder.com/150",
    category: "Глаза",
  },
    {
    id: 16,
    name: "Пудра",
    brand: "Maybelline",
    price: 9.99,
    image: "https://via.placeholder.com/150",
    category: "Лицо",
  },  {
    id: 17,
    name: "Пудра",
    brand: "Maybelline",
    price: 9.99,
    image: "https://via.placeholder.com/150",
    category: "Губы",
  },
  {
    id: 18,
    name: "Пудра",
    brand: "Maybelline",
    price: 9.99,
    image: "https://via.placeholder.com/150",
    category: "Глаза",
  },
  {
    id: 19,
    name: "Пудра",
    brand: "Maybelline",
    price: 9.99,
    image: "https://via.placeholder.com/150",
    category: "Лицо",
  },
  {
    id: 20,
    name: "Пудра",
    brand: "Maybelline",
    price: 9.99,
    image: "https://via.placeholder.com/150",
    category: "Губы",
  },
  {
    id: 21,
    name: "Пудра",
    brand: "Maybelline",
    price: 9.99,
    image: "https://via.placeholder.com/150",
    category: "Глаза",
  },
  {
    id: 22,
    name: "Пудра",
    brand: "Maybelline",
    price: 9.99,
    image: "https://via.placeholder.com/150",
    category: "Лицо",
  },
  {
    id: 23,
    name: "Пудра",
    brand: "Maybelline",
    price: 9.99,
    image: "https://via.placeholder.com/150",
    category: "Губы",
  },
  {
    id: 24,
    name: "Пудра",
    brand: "Maybelline",
    price: 9.99,
    image: "https://via.placeholder.com/150",
    category: "Глаза",
  },
    {
    id: 25,
    name: "Пудра",
    brand: "Maybelline",
    price: 9.99,
    image: "https://via.placeholder.com/150",
    category: "Лицо",
  },
    {
    id: 26,
    name: "Пудра",
    brand: "Maybelline",
    price: 9.99,
    image: "https://via.placeholder.com/150",
    category: "Губы",
  },  {
    id: 27,
    name: "Пудра",
    brand: "Maybelline",
    price: 9.99,
    image: "https://via.placeholder.com/150",
    category: "Глаза",
  },
  {
    id: 28,
    name: "Пудра",
    brand: "Maybelline",
    price: 9.99,
    image: "https://via.placeholder.com/350",
    category: "Лицо",
  },

];

const productTypes = ["Помада", "Тональный крем", "Пудра"];
//выбор для селектора

const CatalogPage = () => {
  const [selectedType, setSelectedType] = useState(null);

  const handleAddToCart = (product) => {
    console.log(`Продукт "${product.name}" добавлен в корзину`);
  };

  return (
    <div style={{ padding: "24px" }}>
      <h1 style={{ marginTop: "40px" }}>Каталог продуктов</h1>
      <div>
        <Select
          defaultValue="Все продукты"
          style={{ width: 200, marginRight: "6px" }}
          onChange={(value) => setSelectedType(value)}
        >
          <Option value={null}>Все продукты</Option>
          {productTypes.map((type) => (
            <Option key={type} value={type}>
              {type}
            </Option>
          ))}
        </Select>
        <Button onClick={() => setSelectedType(null)}>Сбросить фильтр</Button>
      </div>
      <Row gutter={[16, 16]} className="card-container">
        {products
          .filter((product) =>
            selectedType ? product.name === selectedType : true
          )
          .map((product) => (
            <Col xs={24} sm={12} md={12} lg={8} key={product.id}>
              <Card
                cover={<img alt={product.name} src={product.image} />}
                hoverable
                actions={[
                  <Button
                  type="primary"
                  onClick={() => handleAddToCart(product)}
                  style={{ backgroundColor: '#9a7dac' }}
                >
                  Добавить в корзину
                </Button>,
                ]}
              >
                <Card.Meta title={product.name} description={product.brand} />
                <div style={{ marginTop: "8px", fontWeight: "bold" }}>
                  Цена: ${product.price}
                </div>
              </Card>
            </Col>
          ))}
      </Row>
    </div>
  );
};

export default CatalogPage;