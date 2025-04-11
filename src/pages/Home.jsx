import React from 'react';
import './Home.css';
import { useNavigate } from 'react-router-dom';

const products = Array.from({ length: 50 }, (_, i) => {
  const dollarPrice = (Math.random() * 10 + 1).toFixed(2);
  const rupeePrice = (dollarPrice * 83).toFixed(2);

  return {
    id: i + 1,
    name: `Medicine ${i + 1}`,
    image: `/media/medicine${i + 1}.jpg`, // ← Load from /public/media/
    description: `Effective and safe medicine number ${i + 1}.`,
    phone: `+91-99999${String(i).padStart(3, '0')}`,
    priceUSD: `$${dollarPrice}`,
    priceINR: `₹${rupeePrice}`,
    expiry: `2026-12-${(i % 30) + 1}`,
    ingredients: ['Ingredient A', 'Ingredient B', 'Ingredient C'],
  };
});

const Home = () => {
  const navigate = useNavigate();

  const handleAddToCart = (product) => {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push(product);
    localStorage.setItem('cart', JSON.stringify(cart));
    alert(`${product.name} added to cart.`);
  };

  const handleDetails = (product) => {
    navigate(`/product/${product.id}`, { state: { product } });
  };

  return (
    <div className="home-container">
      <h2 className="home-heading">Popular Medicines</h2>
      <div className="product-grid">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img
              src={product.image}
              alt={product.name}
              className="product-image"
            />
            <div className="product-content">
              <h3 className="product-name">{product.name}</h3>
              <p className="product-desc">{product.description}</p>
              <p className="product-price">{product.priceINR} <span className="usd-price">({product.priceUSD})</span></p>
              <p className="product-phone">📞 {product.phone}</p>
              <div className="product-actions">
                <button className="button-add" onClick={() => handleAddToCart(product)}>Add to Cart</button>
                <button className="details-link" onClick={() => handleDetails(product)}>View Details</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
