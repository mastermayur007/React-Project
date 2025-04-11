import React from 'react';
import './About.css';

const teamMembers = [
  {
    name: 'Mayur Patil',
    role: 'Founder & CEO',
    image: 'https://randomuser.me/api/portraits/men/32.jpg',
  },
  {
    name: 'Riya Sharma',
    role: 'Marketing Head',
    image: 'https://randomuser.me/api/portraits/women/65.jpg',
  },
  {
    name: 'Aman Verma',
    role: 'Lead Developer',
    image: 'https://randomuser.me/api/portraits/men/45.jpg',
  },
];

const About = () => {
  return (
    <div className="about-page">
      <div className="about-hero">
        <h1>Welcome to Medicart</h1>
        <p>Your trusted online healthcare partner</p>
      </div>

      <section className="about-section">
        <h2>Our Mission</h2>
        <p>
          At Medicart, our mission is to revolutionize healthcare accessibility by offering genuine medicines and health products at the best prices—all from the comfort of your home.
        </p>
      </section>

      <section className="about-boxes">
        <div className="about-box">
          <h3>Fast Delivery</h3>
          <p>We ensure quick and safe delivery at your doorstep within 24-48 hours.</p>
        </div>
        <div className="about-box">
          <h3>Certified Medicines</h3>
          <p>All our medicines are approved by certified healthcare authorities.</p>
        </div>
        <div className="about-box">
          <h3>24/7 Support</h3>
          <p>Our team is here round-the-clock to answer your health and order-related queries.</p>
        </div>
      </section>

      <section className="about-section">
        <h2>Meet Our Team</h2>
        <div className="team-grid">
          {teamMembers.map((member, idx) => (
            <div key={idx} className="team-card">
              <img src={member.image} alt={member.name} />
              <h4>{member.name}</h4>
              <p>{member.role}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="about-section">
        <h2>Why Choose Us?</h2>
        <ul className="reasons-list">
          <li>✔ 100% Authentic Products</li>
          <li>✔ Real-time Order Tracking</li>
          <li>✔ Easy Return Policy</li>
          <li>✔ Free Health Tips & Consultation</li>
        </ul>
      </section>
    </div>
  );
};

export default About;
