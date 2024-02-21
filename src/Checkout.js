import React from 'react';
import { useBasket } from './App'; // Import the useBasket hook

function Checkout() {
  const { basket } = useBasket();

  console.log('Basket:', basket); // Log the basket to see its contents

  const getTotalPrice = () => {
    const totalPrice = basket.reduce((total, item) => total + item.price, 0);
    console.log('Total Price:', totalPrice); // Log the total price to debug
    return totalPrice;
  };

  return (
    <div>
      <h2>Checkout Page</h2>
      <div>
        <h3>Order Summary</h3>
        <ul>
          {basket.map((item) => (
            <li key={item.id}>
              <strong>{item.name}</strong> - ${item.price}
            </li>
          ))}
        </ul>
        <h3>Total: ${getTotalPrice()}</h3>
        {/* Add checkout form or any other checkout components */}
      </div>
    </div>
  );
}

export default Checkout;
