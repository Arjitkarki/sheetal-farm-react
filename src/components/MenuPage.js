// src/components/MenuPage.js
import React from 'react';
import './Menupage.css';

const menuImages = Array.from({ length: 12 }, (_, i) => ({
  src: `/images/menu${i + 1}.jpg`,
  alt: `Menu item ${i + 1}`,
}));

export default function MenuPage() {
  return (
    <div className="menu-page">
      <div className="container">
        <div className="page-header">
          <h1 className="page-title">
            Our <span className="highlight">Menu</span>
          </h1>
          <p className="page-subtitle">Taste the authentic flavors of Nepal</p>
        </div>

        <div className="gallery menu-grid">
          {menuImages.map((img, idx) => (
            <div key={idx} className="gallery-item menu-item">
              <img
                src={img.src}
                alt={img.alt}
                className="gallery-image menu-image"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
