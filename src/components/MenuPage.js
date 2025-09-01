// src/components/MenuPage.js
import React, { useState } from 'react';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
import './Menupage.css';

const menuImages = Array.from({ length: 12 }, (_, i) => ({
  src: `/images/menu${i + 1}.jpg`,
  alt: `Menu item ${i + 1}`,
  title: `Dish ${i + 1}`,
  price: `$${(i + 1) * 2}.00` // placeholder prices
}));

export default function MenuPage() {
  const [index, setIndex] = useState(-1);

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
            <div
              key={idx}
              className="gallery-item menu-item"
              onClick={() => setIndex(idx)}
              style={{ cursor: 'pointer' }}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="gallery-image menu-image"
              />
              <div className="menu-content">
                <h3>{img.title}</h3>
                <p>{img.price}</p>
              </div>
            </div>
          ))}
        </div>

        <Lightbox
          open={index >= 0}
          index={index}
          close={() => setIndex(-1)}
          slides={menuImages}
        />
      </div>
    </div>
  );
}
