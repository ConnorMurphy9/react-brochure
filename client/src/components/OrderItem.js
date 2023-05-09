import React from 'react';

const OrderItem = ({ item }) => {
  const { product, quantity, price } = item;

  return (
    <div>
      <img src={product.image} alt={product.name} />
      <div>
        <h3>{product.name}</h3>
        <p>Quantity: {quantity}</p>
        <p>Price: ${price / 100}</p>
      </div>
    </div>
  );
};

export default OrderItem;
