import React, { useState } from 'react';

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
    <div>
      <h2>Cart</h2>
      <ul>{cartItems}</ul>
      <div>Total: ${total}</div>
    </div>
  );
}

export default Cart;