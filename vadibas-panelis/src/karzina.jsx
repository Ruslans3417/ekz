import React, { useState } from 'react';
import './all.css/Karzina.css';
function Cart() {
  const [items, setItems] = useState([]);

  const addItemToCart = (item) => {
    setItems([...items, item]);
  };

  const removeItemFromCart = (index) => {
    const newItems = [...items];
    newItems.splice(index, 1);
    setItems(newItems);
  };

  const cartItems = items.map((item, index) => (
    <li key={index}>
      {item.name} - ${item.price}{' '}
      <button onClick={() => removeItemFromCart(index)}>Remove</button>
    </li>
  ));

  const total = items.reduce((acc, item) => acc + item.price, 0);

  return (
<div class="cart">
  <h2>Preču grozs</h2>
  <ul class="cart-items">
   
  </ul>
  <button class="checkout-button">Pasūtīt</button>
</div>
  );
}

export default Cart;
