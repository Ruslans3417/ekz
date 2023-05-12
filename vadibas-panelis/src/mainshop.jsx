import React, { useState } from "react";
import { Card, Col, Row, Button } from "antd";
import './all.css/cartprod.css';

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
    name: "Тушь для ресниц",
    brand: "Maybelline",
    price: 9.99,
    image: "https://via.placeholder.com/150",
    category: "Лицо",
  },
  {
    id: 5,
    name: "Тушь для ресниц",
    brand: "Maybelline",
    price: 9.99,
    image: "https://via.placeholder.com/150",
    category: "Губы",
  },
  {
    id: 6,
    name: "Тушь для ресниц",
    brand: "Maybelline",
    price: 9.99,
    image: "https://via.placeholder.com/150",
    category: "Глаза",
  },
  {
    id: 7,
    name: "Тушь для ресниц",
    brand: "Maybelline",
    price: 9.99,
    image: "https://via.placeholder.com/150",
    category: "Лицо",
  },
  {
    id: 8,
    name: "Тушь для ресниц",
    brand: "Maybelline",
    price: 9.99,
    image: "https://via.placeholder.com/150",
    category: "Губы",
  },
  {
    id: 9,
    name: "Тушь для ресниц",
    brand: "Maybelline",
    price: 9.99,
    image: "https://via.placeholder.com/150",
    category: "Глаза",
  },
  {
    id: 10,
    name: "Тушь для ресниц",
    brand: "Maybelline",
    price: 9.99,
    image: "https://via.placeholder.com/150",
    category: "Лицо",
  },
  {
    id: 11,
    name: "Тушь для ресниц",
    brand: "Maybelline",
    price: 9.99,
    image: "https://via.placeholder.com/150",
    category: "Губы",
  },
  {
    id: 12,
    name: "Тушь для ресниц",
    brand: "Maybelline",
    price: 9.99,
    image: "https://via.placeholder.com/150",
    category: "Глаза",
  },
    {
    id: 13,
    name: "Тушь для ресниц",
    brand: "Maybelline",
    price: 9.99,
    image: "https://via.placeholder.com/150",
    category: "Лицо",
  },  {
    id: 14,
    name: "Тушь для ресниц",
    brand: "Maybelline",
    price: 9.99,
    image: "https://via.placeholder.com/150",
    category: "Губы",
  },
  {
    id: 15,
    name: "Тушь для ресниц",
    brand: "Maybelline",
    price: 9.99,
    image: "https://via.placeholder.com/150",
    category: "Глаза",
  },
    {
    id: 16,
    name: "Тушь для ресниц",
    brand: "Maybelline",
    price: 9.99,
    image: "https://via.placeholder.com/150",
    category: "Лицо",
  },  {
    id: 17,
    name: "Тушь для ресниц",
    brand: "Maybelline",
    price: 9.99,
    image: "https://via.placeholder.com/150",
    category: "Губы",
  },
  {
    id: 18,
    name: "Тушь для ресниц",
    brand: "Maybelline",
    price: 9.99,
    image: "https://via.placeholder.com/150",
    category: "Глаза",
  },
  {
    id: 19,
    name: "Тушь для ресниц",
    brand: "Maybelline",
    price: 9.99,
    image: "https://via.placeholder.com/150",
    category: "Лицо",
  },
  {
    id: 20,
    name: "Тушь для ресниц",
    brand: "Maybelline",
    price: 9.99,
    image: "https://via.placeholder.com/150",
    category: "Губы",
  },
  {
    id: 21,
    name: "Тушь для ресниц",
    brand: "Maybelline",
    price: 9.99,
    image: "https://via.placeholder.com/150",
    category: "Глаза",
  },
  {
    id: 22,
    name: "Тушь для ресниц",
    brand: "Maybelline",
    price: 9.99,
    image: "https://via.placeholder.com/150",
    category: "Лицо",
  },
  {
    id: 23,
    name: "Тушь для ресниц",
    brand: "Maybelline",
    price: 9.99,
    image: "https://via.placeholder.com/150",
    category: "Губы",
  },
  {
    id: 24,
    name: "Тушь для ресниц",
    brand: "Maybelline",
    price: 9.99,
    image: "https://via.placeholder.com/150",
    category: "Глаза",
  },
    {
    id: 25,
    name: "Тушь для ресниц",
    brand: "Maybelline",
    price: 9.99,
    image: "https://via.placeholder.com/150",
    category: "Лицо",
  },
    {
    id: 26,
    name: "Тушь для ресниц",
    brand: "Maybelline",
    price: 9.99,
    image: "https://via.placeholder.com/150",
    category: "Губы",
  },  {
    id: 27,
    name: "Тушь для ресниц",
    brand: "Maybelline",
    price: 9.99,
    image: "https://via.placeholder.com/150",
    category: "Глаза",
  },
  {
    id: 28,
    name: "Тушь для ресниц",
    brand: "Maybelline",
    price: 9.99,
    image: "https://via.placeholder.com/350",
    category: "Лицо",
  },

];


const productTypes = ["Помада", "Тональный крем", "Пудра"]; // Создаем массив типов продуктов


const lipProducts = products.filter((product) => product.category === "Губы");
const faceProducts = products.filter((product) => product.category === "Лицо");
const eyeProducts = products.filter((product) => product.category === "Глаза");

const CatalogPage = () => {
  const [selectedType, setSelectedType] = useState(null); // Добавляем состояние для выбранного типа продукта
 
  const handleAddToCart = (product) => {
    // Действия при добавлении продукта в корзину
    console.log(`Продукт "${product.name}" добавлен в корзину`);
  };

  return (
    <div style={{ padding: "24px" }}>
    <h1 style={{ marginTop: "40px" }}>Каталог продуктов</h1>
    <div>
      {productTypes.map((type) => (
        <Button
          key={type}
          type={selectedType === type ? "primary" : "default"} // Выделяем выбранный тип
          onClick={() => setSelectedType(type)} // Обновляем выбранный тип при клике на кнопку
          style={{ marginRight: "8px" }}
        >  
          
          {type}
        </Button>
      ))}<Button onClick={() => setSelectedType(null)}>Сбросить фильтр</Button>
    </div>
    <Row gutter={[16, 16]} className="card-container">
      {products
        .filter((product) => selectedType ? product.name === selectedType : true) // Фильтруем продукты по выбранному типу
        .map((product) => (
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