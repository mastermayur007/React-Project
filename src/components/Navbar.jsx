import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const token = localStorage.getItem('token');

  return (
    <nav className="navbar">
    <div>
  <Link to="/" className="brand">MediStore</Link>
</div>
      <div>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </div>
      <div>
        {token ? (
          <Link to="/profile">Profile</Link>
        ) : (
          <>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
            <Link to="/cart" className="nav-link">
  🛒 Cart
</Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
