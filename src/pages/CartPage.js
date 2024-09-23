import React, { useState } from 'react';
import CartItem from '../components/CartItem'; // Import your CartItem component

const CartPage = () => {
  // Example state for cart items
  const [cartItems, setCartItems] = useState([
    // Sample data; replace with your actual cart items
    { id: 1, name: 'Item 1', quantity: 1, price: 10 },
    { id: 2, name: 'Item 2', quantity: 2, price: 15 },
  ]);

  // Handler to decrease item quantity
  const decreaseQuantity = (id) => {
    setCartItems(cartItems.map(item =>
      item.id === id && item.quantity > 1
        ? { ...item, quantity: item.quantity - 1 }
        : item
    ));
  };

  // Handler to increase item quantity
  const increaseQuantity = (id) => {
    setCartItems(cartItems.map(item =>
      item.id === id
        ? { ...item, quantity: item.quantity + 1 }
        : item
    ));
  };

  // Handler to remove an item from the cart
  const removeItem = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  return (
    <div>
      <h1>Your Cart</h1>
      <div className="cart-items">
        {cartItems.map(item => (
          <CartItem
            key={item.id}
            item={item}
            onDecrease={() => decreaseQuantity(item.id)}
            onIncrease={() => increaseQuantity(item.id)}
            onRemove={() => removeItem(item.id)}
          />
        ))}
      </div>
      <button>Proceed to Checkout</button>
    </div>
  );
};

export default CartPage;
