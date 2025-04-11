import React, { useEffect, useState } from 'react';
import './Cart.css';

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    setCartItems(cart);
  }, []);

  const handleClearCart = () => {
    localStorage.removeItem('cart');
    setCartItems([]);
  };

  const handleRemoveItem = (indexToRemove) => {
    const updatedCart = cartItems.filter((_, index) => index !== indexToRemove);
    setCartItems(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => {
      const price = parseFloat(item.priceINR?.replace('₹', '') || item.price?.replace('₹', '') || 0);
      return total + price;
    }, 0).toFixed(2);
  };

  return (
    <div className="cart-container">
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p className="empty-cart">🛒 No items in the cart.</p>
      ) : (
        <div className="cart-box">
          {cartItems.map((item, index) => (
            <div key={index} className="cart-item">
              <img src={item.image} alt={item.name} className="cart-image" />
              <div className="cart-details">
                <h3>{item.name}</h3>
                <p className="price">Price: {item.priceINR || item.price}</p>
                <button className="remove-btn" onClick={() => handleRemoveItem(index)}>Remove</button>
              </div>
            </div>
          ))}
          <h3 className="total">Total: ₹{calculateTotal()}</h3>
          <button onClick={handleClearCart} className="clear-cart-btn">Clear All</button>
        </div>
      )}
    </div>
  );
};

export default Cart;
