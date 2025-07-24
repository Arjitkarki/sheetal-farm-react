// src/components/HomePage.js
import React from 'react';

const HomePage = () => {
  return (
    <div className="homepage">
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">
              Welcome to <span className="highlight">Sheetal Farm</span>!
            </h1>
            
            <div className="hero-description">
              <p>
                Sheetal Farm, located in the beautiful Tansen region of Nepal, is a peaceful farm and 
                resort perfect for relaxing and enjoying nature. We aim to create a warm and welcoming space
                where guests can unwind and connect with the countryside. At Sheetal Farm, we focus on hospitality, 
                sustainable practices, and offering unique experiences. Whether you're looking for a quiet escape,
                a chance to learn about farming, or a mix of both, we're excited to welcome you to our little paradise in Tansen.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <div className="container">
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">🌱</div>
              <h3>Sustainable Farming</h3>
              <p>Experience eco-friendly farming practices in the heart of Nepal</p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">👥</div>
              <h3>Warm Hospitality</h3>
              <p>Enjoy authentic Nepali hospitality in our peaceful resort</p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">📸</div>
              <h3>Unique Experiences</h3>
              <p>Create unforgettable memories in our countryside paradise</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="contact-info">
        <div className="container">
          <div className="contact-card">
            <h3>Contact Information</h3>
            <p>
              For further questions please contact Ramesh Karki at{' '}
              <a href="tel:+19851164441" className="contact-link">
                (985)-116-4441
              </a>{' '}
              or{' '}
              <a href="mailto:rrkarki@gmail.com" className="contact-link">
                rrkarki@gmail.com
              </a>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;