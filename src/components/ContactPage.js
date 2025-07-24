// src/components/ContactPage.js
import React, { useState } from 'react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      alert('Message sent! We will contact you soon.');
      setFormData({ name: '', email: '', message: '' });
    } else {
      alert('Please fill in all fields.');
    }
  };

  return (
    <div className="contact-page">
      <div className="container">
        <div className="page-header">
          <h1 className="page-title"><span className="highlight">Contact</span> Us</h1>
          <p className="page-subtitle">Get in touch with Sheetal Farm</p>
        </div>
        
        <div className="contact-content">
          {/* Contact Information */}
          <div className="contact-info-card">
            <h3>Contact Information</h3>
            
            <div className="contact-item">
              <div className="contact-icon">📞</div>
              <div className="contact-details">
                <p>Phone</p>
                <a href="tel:+19851164441">(985)-116-4441</a>
              </div>
            </div>
            
            <div className="contact-item">
              <div className="contact-icon">✉️</div>
              <div className="contact-details">
                <p>Email</p>
                <a href="mailto:rrkarki@gmail.com">rrkarki@gmail.com</a>
              </div>
            </div>
            
            <div className="contact-item">
              <div className="contact-icon">📍</div>
              <div className="contact-details">
                <p>Location</p>
                <p>Tansen, Nepal</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="contact-form">
            <h3>Send a Message</h3>
            
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  placeholder="Your name"
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  placeholder="Your email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea 
                  id="message" 
                  rows="4" 
                  placeholder="Your message"
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>
              </div>
              
              <button type="submit" className="btn">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;