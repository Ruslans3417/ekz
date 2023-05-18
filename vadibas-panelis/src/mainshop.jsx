import React from "react";
import { Card, Col, Row, Button } from "antd";
import './all.css/cartprod.css';

const products = [
  {
    id: 1,
    name: "Помада",
    brand: "Maybelline",
    price: 10.99,
    image: "https://via.placeholder.com/150",
  },
  {
    id: 2,
    name: "Тональный крем",
    brand: "L'Oreal",
    price: 14.99,
    image: "https://via.placeholder.com/150",
  },
  {
    id: 3,
    name: "Пудра",
    brand: "Rimmel",
    price: 8.99,
    image: "https://via.placeholder.com/150",
  },
  {
    id: 4,
    name: "Тушь для ресниц",
    brand: "Maybelline",
    price: 9.99,
    image: "https://via.placeholder.com/150",
  },
  {
    id: 5,
    name: "Тушь для ресниц",
    brand: "Maybelline",
    price: 9.99,
    image: "https://via.placeholder.com/150",
  },
  {
    id: 6,
    name: "Тушь для ресниц",
    brand: "Maybelline",
    price: 9.99,
    image: "https://via.placeholder.com/150",
  },
  {
    id: 7,
    name: "Тушь для ресниц",
    brand: "Maybelline",
    price: 9.99,
    image: "https://via.placeholder.com/150",
  },
  {
    id: 8,
    name: "Тушь для ресниц",
    brand: "Maybelline",
    price: 9.99,
    image: "https://via.placeholder.com/150",
  },
  {
    id: 9,
    name: "Тушь для ресниц",
    brand: "Maybelline",
    price: 9.99,
    image: "https://via.placeholder.com/150",
  },
  {
    id: 10,
    name: "Тушь для ресниц",
    brand: "Maybelline",
    price: 9.99,
    image: "https://via.placeholder.com/150",
  },
  {
    id: 11,
    name: "Тушь для ресниц",
    brand: "Maybelline",
    price: 9.99,
    image: "https://via.placeholder.com/150",
  },
  {
    id: 12,
    name: "Тушь для ресниц",
    brand: "Maybelline",
    price: 9.99,
    image: "https://via.placeholder.com/150",
  },
    {
    id: 13,
    name: "Тушь для ресниц",
    brand: "Maybelline",
    price: 9.99,
    image: "https://via.placeholder.com/150",
  },  {
    id: 14,
    name: "Тушь для ресниц",
    brand: "Maybelline",
    price: 9.99,
    image: "https://via.placeholder.com/150",
  },
  {
    id: 15,
    name: "Тушь для ресниц",
    brand: "Maybelline",
    price: 9.99,
    image: "https://via.placeholder.com/150",
  },
    {
    id: 16,
    name: "Тушь для ресниц",
    brand: "Maybelline",
    price: 9.99,
    image: "https://via.placeholder.com/150",
  },  {
    id: 17,
    name: "Тушь для ресниц",
    brand: "Maybelline",
    price: 9.99,
    image: "https://via.placeholder.com/150",
  },
  {
    id: 18,
    name: "Тушь для ресниц",
    brand: "Maybelline",
    price: 9.99,
    image: "https://via.placeholder.com/150",
  },
  {
    id: 19,
    name: "Тушь для ресниц",
    brand: "Maybelline",
    price: 9.99,
    image: "https://via.placeholder.com/150",
  },
  {
    id: 20,
    name: "Тушь для ресниц",
    brand: "Maybelline",
    price: 9.99,
    image: "https://via.placeholder.com/150",
  },
  {
    id: 21,
    name: "Тушь для ресниц",
    brand: "Maybelline",
    price: 9.99,
    image: "https://via.placeholder.com/150",
  },
  {
    id: 22,
    name: "Тушь для ресниц",
    brand: "Maybelline",
    price: 9.99,
    image: "https://via.placeholder.com/150",
  },
  {
    id: 23,
    name: "Тушь для ресниц",
    brand: "Maybelline",
    price: 9.99,
    image: "https://via.placeholder.com/150",
  },
  {
    id: 24,
    name: "Тушь для ресниц",
    brand: "Maybelline",
    price: 9.99,
    image: "https://via.placeholder.com/150",
  },
    {
    id: 25,
    name: "Тушь для ресниц",
    brand: "Maybelline",
    price: 9.99,
    image: "https://via.placeholder.com/150",
  },
    {
    id: 26,
    name: "Тушь для ресниц",
    brand: "Maybelline",
    price: 9.99,
    image: "https://via.placeholder.com/150",
  },  {
    id: 27,
    name: "Тушь для ресниц",
    brand: "Maybelline",
    price: 9.99,
    image: "https://via.placeholder.com/150",
  },
  {
    id: 28,
    name: "Тушь для ресниц",
    brand: "Maybelline",
    price: 9.99,
    image: "https://via.placeholder.com/150",
  },

];

const CatalogPage = () => {
  const handleAddToCart = (product) => {
    // Действия при добавлении продукта в корзину
    console.log(`Продукт "${product.name}" добавлен в корзину`);
  };

  return (
    <div style={{ padding: "24px" }}>
      
      <h1 style={{ marginTop: "40px"}}>Каталог продуктов</h1>
      <Row gutter={[16, 16]} className="card-container">
        {products.map((product) => (
          <Col xs={24} sm={12} md={12} lg={8} key={product.id}> {/* Изменение на md={12} и lg={8} */}
            <Card
              cover={<img alt={product.name} src={product.image} />}
              hoverable
              actions={[
                <Button
                  type="primary"
                  onClick={() => handleAddToCart(product)}
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
