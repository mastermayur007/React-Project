import React from 'react';
import './ProductCard.css';

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <p><strong>₹{product.price}</strong></p>
      <p>Stock: {product.stock}</p>
    </div>
  );
};

export default ProductCard;
