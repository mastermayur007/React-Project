import React, { useState } from 'react';
import './Contact.css'; // Ensure this file is styled accordingly

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Message sent successfully!');
    setForm({ name: '', email: '', message: '' });
  };

  return (
    <>
      <div className="contact-container">
        <div className="contact-form">
          <h2>Contact Us</h2>
          <p>We’d love to hear from you! Fill out the form below and we’ll get back to you shortly.</p>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={form.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={form.email}
              onChange={handleChange}
              required
            />
            <textarea
              name="message"
              placeholder="Your Message"
              value={form.message}
              onChange={handleChange}
              required
            ></textarea>
            <button type="submit">Send Message</button>
          </form>
        </div>

        <div className="contact-info">
          <h3>Our Office</h3>
          <div className="contact-info-item">📍 <span>123 Market Street, Mumbai, India</span></div>
          <div className="contact-info-item">📞 <span>+91 98765 43210</span></div>
          <div className="contact-info-item">✉️ <span>support@medicart.com</span></div>
          <p>Our support team is available 24/7 to assist you with any queries.</p>
        </div>
      </div>

      {/* More Info Section */}
      <div className="contact-extra-info">
        <section className="mission-box">
          <h2>Our Mission</h2>
          <p>At Medicart, our goal is to bridge the gap between health and technology by providing affordable, accessible, and reliable medical supplies online.</p>
        </section>

        <section className="team-box">
          <h2>Meet Our Team</h2>
          <div className="team-grid">
            <div className="team-member">
              <img src="https://via.placeholder.com/100" alt="Team Member" />
              <h4>Ravi Sharma</h4>
              <p>Founder & CEO</p>
            </div>
            <div className="team-member">
              <img src="https://via.placeholder.com/100" alt="Team Member" />
              <h4>Anita Joshi</h4>
              <p>Operations Manager</p>
            </div>
            <div className="team-member">
              <img src="https://via.placeholder.com/100" alt="Team Member" />
              <h4>Rahul Mehta</h4>
              <p>Lead Developer</p>
            </div>
          </div>
        </section>

        <section className="faq-box">
          <h2>FAQs</h2>
          <div className="faq-item">
            <h4>🛒 How long does delivery take?</h4>
            <p>Delivery usually takes 2–5 business days depending on your location.</p>
          </div>
          <div className="faq-item">
            <h4>💳 What payment methods do you accept?</h4>
            <p>We accept UPI, credit/debit cards, and net banking.</p>
          </div>
          <div className="faq-item">
            <h4>🔄 Can I return a product?</h4>
            <p>Yes, we have a 7-day return policy for most items. Terms apply.</p>
          </div>
        </section>

        <section className="cta-box">
          <h2>Still Have Questions?</h2>
          <p>Feel free to reach out to our support team anytime. We’re always happy to help!</p>
          <a href="mailto:support@medicart.com" className="cta-button">Email Us</a>
        </section>
      </div>
    </>
  );
};

export default Contact;
