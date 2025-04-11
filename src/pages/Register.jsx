import React, { useState } from 'react';
import api from '../api';
import { useNavigate } from 'react-router-dom';
import './Register.css';

const Register = () => {
  const [form, setForm] = useState({
    name: '',
    age: '',
    phone: '',
    email: '',
    bloodGroup: '',
    username: '',
    password: '',
    confirmPassword: ''
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleRegister = async (e) => {
    e.preventDefault();

    if (form.password !== form.confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    try {
      const registerData = {
        name: form.name,
        age: form.age,
        phone: form.phone,
        email: form.email,
        blood_group: form.bloodGroup,
        username: form.username,
        password: form.password
      };

      await api.post('/register/', registerData);
      alert('Registration successful. Now login.');
      navigate('/login');
    } catch (err) {
      alert('Registration failed!');
    }
  };

  return (
    <div className="register-container">
      <div className="register-card">
        <h2 className="register-title">Create Account</h2>
        <p className="register-subtitle">Fill in your details below</p>
        <form onSubmit={handleRegister} className="register-form">
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={form.name}
            onChange={handleChange}
            className="register-input"
            required
          />
          <input
            type="number"
            name="age"
            placeholder="Age"
            value={form.age}
            onChange={handleChange}
            className="register-input"
            required
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={form.phone}
            onChange={handleChange}
            className="register-input"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            className="register-input"
            required
          />
          <input
            type="text"
            name="bloodGroup"
            placeholder="Blood Group (e.g., A+)"
            value={form.bloodGroup}
            onChange={handleChange}
            className="register-input"
            required
          />
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={form.username}
            onChange={handleChange}
            className="register-input"
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
            className="register-input"
            required
          />
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            value={form.confirmPassword}
            onChange={handleChange}
            className="register-input"
            required
          />
          <button type="submit" className="register-button">Register</button>
        </form>
        <p className="register-footer">
          Already have an account? <a href="/login">Login</a>
        </p>
      </div>
    </div>
  );
};

export default Register;
