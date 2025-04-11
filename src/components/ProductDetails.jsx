import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './ProductDetails.css';

const ProductDetails = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const product = state?.product;

  if (!product) {
    return <div>Product not found. <button onClick={() => navigate('/')}>Go Home</button></div>;
  }

  return (
    <div className="product-details-container">
      <img src={product.image} alt={product.name} className="product-details-image" />
      <div className="product-details-info">
        <h2>{product.name}</h2>
        <p><strong>Description:</strong> {product.description}</p>
        <p><strong>Phone:</strong> {product.phone}</p>
        <p><strong>Price:</strong> {product.price}</p>
        <p><strong>Expiry Date:</strong> {product.expiry}</p>
        <p><strong>Ingredients:</strong></p>
        <ul>
          {product.ingredients.map((item, idx) => (
            <li key={idx}>- {item}</li>
          ))}
        </ul>
        <button onClick={() => navigate('/')}>⬅ Back to Home</button>
      </div>
    </div>
  );
};

export default ProductDetails;
