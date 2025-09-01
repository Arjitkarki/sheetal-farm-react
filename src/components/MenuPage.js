// src/components/MenuPage.js
import React, { useState } from 'react';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';
import './Menupage.css';

const menuImages = Array.from({ length: 12 }, (_, i) => ({
  src: `/images/menu${i + 1}.jpg`,
  alt: `Menu item ${i + 1}`,
}));

export default function MenuPage() {
  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

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
              onClick={() => {
                setPhotoIndex(idx);
                setIsOpen(true);
              }}
              style={{ cursor: 'pointer' }}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="gallery-image menu-image"
              />
            </div>
          ))}
        </div>

        {isOpen && (
          <Lightbox
            mainSrc={menuImages[photoIndex].src}
            nextSrc={menuImages[(photoIndex + 1) % menuImages.length].src}
            prevSrc={menuImages[(photoIndex + menuImages.length - 1) % menuImages.length].src}
            onCloseRequest={() => setIsOpen(false)}
            onMovePrevRequest={() =>
              setPhotoIndex((photoIndex + menuImages.length - 1) % menuImages.length)
            }
            onMoveNextRequest={() =>
              setPhotoIndex((photoIndex + 1) % menuImages.length)
            }
            imageCaption={menuImages[photoIndex].alt}
          />
        )}
      </div>
    </div>
  );
}
