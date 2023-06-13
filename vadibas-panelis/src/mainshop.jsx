import React, { useState } from "react";
import { Card, Col, Row, Button, Select } from "antd";
import './all.css/cartprod.css';
import img20 from "./corusel/20.png";
import treug from "./corusel/treug.jpg";
import mask from "./corusel/mask.jpeg";
import calagen from "./corusel/calagen.jpeg";
import Cart from "./karzina.jsx";


const { Option } = Select;
const products = [
  {
    id: 1,
    name: "Lūpu krāsa",
    brand: "Maybelline",
    price: 10.99,
    image: require('./corusel/treug.jpg'),
    category: "Lūpas",
  },
  {
    id: 2,
    name: "mask",
    brand: "L'Oreal",
    price: 14.99,
    image:  require('./corusel/mask.jpeg'),
    category: "mask",
  },
  {
    id: 3,
    name: "calagen",
    brand: "Rimmel",
    price: 8.99,
    image:  require('./corusel/calagen.jpeg'),
    category: "calagen",
  },
  {
    id: 4,
    name: "Pūdera",
    brand: "Maybelline",
    price: 9.99,
    image:  require('./corusel/20.png'),
    category: "Seja",
  },
  {
    id: 5,
    name: "Pūdera",
    brand: "Maybelline",
    price: 9.99,
    image:  require('./corusel/20.png'),
    category: "Lūpas",
  },
  {
    id: 6,
    name: "Pūdera",
    brand: "Maybelline",
    price: 9.99,
    image:  require('./corusel/20.png'),
    category: "Acis",
  },
  {
    id: 7,
    name: "Pūdera",
    brand: "Maybelline",
    price: 9.99,
    image:  require('./corusel/20.png'),
    category: "Seja",
  },
  {
    id: 8,
    name: "Pūdera",
    brand: "Maybelline",
    price: 9.99,
    image:  require('./corusel/20.png'),
    category: "Lūpas",
  },
  {
    id: 9,
    name: "Pūdera",
    brand: "Maybelline",
    price: 9.99,
    image:  require('./corusel/20.png'),
    category: "Acis",
  },
  {
    id: 10,
    name: "Pūdera",
    brand: "Maybelline",
    price: 9.99,
    image:  require('./corusel/20.png'),
    category: "Seja",
  },
  {
    id: 11,
    name: "Pūdera",
    brand: "Maybelline",
    price: 9.99,
    image:  require('./corusel/20.png'),
    category: "Lūpas",
  },
  {
    id: 12,
    name: "Pūdera",
    brand: "Maybelline",
    price: 9.99,
    image:  require('./corusel/20.png'),
    category: "Acis",
  },
    {
    id: 13,
    name: "Pūdera",
    brand: "Maybelline",
    price: 9.99,
    image:  require('./corusel/20.png'),
    category: "Seja",
  },  {
    id: 14,
    name: "Pūdera",
    brand: "Maybelline",
    price: 9.99,
    image:  require('./corusel/20.png'),
    category: "Lūpas",
  },
  {
    id: 15,
    name: "Pūdera",
    brand: "Maybelline",
    price: 9.99,
    image:  require('./corusel/20.png'),
    category: "Acis",
  },
    {
    id: 16,
    name: "Pūdera",
    brand: "Maybelline",
    price: 9.99,
    image:  require('./corusel/20.png'),
    category: "Seja",
  },  {
    id: 17,
    name: "Pūdera",
    brand: "Maybelline",
    price: 9.99,
    image:  require('./corusel/20.png'),
    category: "Lūpas",
  },
  {
    id: 18,
    name: "Pūdera",
    brand: "Maybelline",
    price: 9.99,
    image:  require('./corusel/20.png'),
    category: "Acis",
  },
  {
    id: 19,
    name: "Pūdera",
    brand: "Maybelline",
    price: 9.99,
    image:  require('./corusel/20.png'),
    category: "Seja",
  },
  {
    id: 20,
    name: "Пудра",
    brand: "Maybelline",
    price: 9.99,
    image:  require('./corusel/20.png'),
    category: "Lūpas",
  },
  {
    id: 21,
    name: "Pūdera",
    brand: "Maybelline",
    price: 9.99,
    image:  require('./corusel/20.png'),
    category: "Acis",
  },
  {
    id: 22,
    name: "Пудра",
    brand: "Maybelline",
    price: 9.99,
    image:  require('./corusel/20.png'),
    category: "Seja",
  },
  {
    id: 23,
    name: "Pūdera",
    brand: "Maybelline",
    price: 9.99,
    image:  require('./corusel/20.png'),
    category: "Lūpas",
  },
  {
    id: 24,
    name: "Pūdera",
    brand: "Maybelline",
    price: 9.99,
    image:  require('./corusel/20.png'),
    category: "Acis",
  },
    {
    id: 25,
    name: "Pūdera",
    brand: "Maybelline",
    price: 9.99,
    image:  require('./corusel/20.png'),
    category: "Seja",
  },
    {
    id: 26,
    name: "Pūdera",
    brand: "Maybelline",
    price: 9.99,
    image:  require('./corusel/20.png'),
    category: "Lūpas",
  },  {
    id: 27,
    name: "Пудра",
    brand: "Maybelline",
    price: 9.99,
    image:  require('./corusel/20.png'),
    category: "Acis",
  },
  {
    id: 28,
    name: "Pūdera",
    brand: "Maybelline",
    price: 9.99,
    image: "https://via.placeholder.com/350",
    category: "Seja",
  },

];

const productTypes = ["Lūpu krāsa", "Tonālais krēms", "Pūdera","calagen","mask"];

const CatalogPage = () => {
  const [selectedType, setSelectedType] = useState(null);
  const [items, setItems] = useState([]);
  const [total, setTotal] = useState(0);

  const addItemToCart = (item) => {
    const newItems = [...items, item];
    setItems(newItems);
    const newTotal = total + item.price;
    setTotal(newTotal);
  };

  const removeItemFromCart = (index) => {
    const newItems = [...items];
    const removedItem = newItems.splice(index, 1)[0];
    setItems(newItems);
    const newTotal = total - removedItem.price;
    setTotal(newTotal);
  };

  const cartItems = items.map((item, index) => (
    <tr key={index}>
      <td>{item.name}</td>
      <td>${item.price.toFixed(2)}</td>
      <td>
        <button onClick={() => removeItemFromCart(index)}>Remove</button>
      </td>
    </tr>
  ));

  return (
    <div style={{ padding: "24px" }}>
      <h1 style={{ marginTop: "40px" }}>Produktu katalogs</h1>
      <div>
        <Select
          defaultValue="Visi produkti"
          style={{ width: 200, marginRight: "6px" }}
          onChange={(value) => setSelectedType(value)}
        >
          <Option value={null}>Visi produkti</Option>
          {productTypes.map((type) => (
            <Option key={type} value={type}>
              {type}
            </Option>
          ))}
        </Select>
        <Button onClick={() => setSelectedType(null)}>Notīrīt filtru</Button>
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
                    onClick={() => addItemToCart(product)}
                    style={{ backgroundColor: '#9a7dac' }}
                  >
                    Pievienot grozam
                  </Button>,
                ]}
              >
                <Card.Meta title={product.name} description={product.brand} />
                <div style={{ marginTop: "8px", fontWeight: "bold" }}>
                  Cena: ${product.price}
                </div>
              </Card>
            </Col>
          ))}
      </Row>
</div>
 ); 
 
};

export default CatalogPage;
