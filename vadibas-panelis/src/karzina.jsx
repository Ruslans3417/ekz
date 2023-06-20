import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Karzina = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    axios.get('/api/cart')
      .then((response) => {
        const { items } = response.data;
        setCartItems(items || []);
      })
      .catch((error) => {
        console.error('Failed to fetch cart items:', error);
      });
  }, []);

  const removeItem = (itemId) => {
    axios.delete(`/api/cart/${itemId}`)
      .then((response) => {
        const { message } = response.data;
        console.log(message); // Опционально: выведите сообщение в консоль
        setCartItems(cartItems.filter((item) => item._id !== itemId));
      })
      .catch((error) => {
        console.error('Failed to remove item from cart:', error);
      });
  };

  const calculateTotal = () => {
    let total = 0;
    if (cartItems) {
      for (const item of cartItems) {
        total += item.price;
      }
    }
    return total;
  };

  const placeOrder = () => {
    const orderData = {
      items: cartItems,
      total: calculateTotal(),
    };

    axios.post('/api/orders', orderData)
      .then((response) => {
        const { message } = response.data;
        console.log(message); // Опционально: вывести сообщение в консоль
        setCartItems([]);
      })
      .catch((error) => {
        console.error('Failed to place order:', error);
      });
  };

  return (
    <div style={{ textAlign: "center", margin: "120px auto", width: "20%" }}>
      <h2 style={{ fontSize: "28px", marginBottom: "20px" }}>Grozs</h2>
      {cartItems.length > 0 ? (
        <div>
          {cartItems.map((item) => (
            <div
              key={item._id}
              style={{
                border: "1px solid #ccc",
                borderRadius: "4px",
                padding: "10px",
                marginBottom: "10px",
              }}
            >
              <h3 style={{ fontSize: "24px", marginBottom: "5px" }}>{item.name}</h3>
              <p style={{ fontSize: "18px", marginBottom: "5px" }}>{item.price} $</p>
              <button
                onClick={() => removeItem(item._id)}
                style={{
                  background: "#ff5252",
                  color: "#fff",
                  border: "none",
                  borderRadius: "4px",
                  padding: "8px 12px",
                  cursor: "pointer",
                  fontSize: "16px",
                }}
              >
                Delete
              </button>
            </div>
          ))}
          <p style={{ fontSize: "20px", marginTop: "20px", marginBottom: "108px" }}>
            Kopējā summa: {calculateTotal()} $
          </p>

          <button
            onClick={placeOrder}
            style={{
              background: "#4caf50",
              color: "#fff",
              border: "none",
              borderRadius: "4px",
              padding: "8px 12px",
              cursor: "pointer",
              fontSize: "16px",
              marginTop: "20px"
            }}
          >
            Pasūtīt
          </button>
        </div>
      ) : (
        <p style={{ fontSize: "20px", marginTop: "20px",marginBottom: "220px" }}>Jūsu grozs ir tukšs</p>
      )}
    </div>
  );
};

export default Karzina;
