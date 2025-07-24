// src/components/PicturesPage.js
import React from 'react';

// List out your actual image filenames & alt texts
const galleryImages = [
  { src: '/images/photo1.jpg', alt: 'Farm View 1' },
  { src: '/images/photo2.jpg', alt: 'Farm View 2' },
  { src: '/images/photo3.jpg', alt: 'Farm View 3' },
  { src: '/images/photo4.jpg', alt: 'Farm View 4' },
  { src: '/images/photo5.jpg', alt: 'Farm View 5' },
  { src: '/images/photo6.jpg', alt: 'Farm View 6' },
  // …add more if you have them
];

const PicturesPage = () => (
  <div className="pictures-page">
    <div className="container">
      <div className="page-header">
        <h1 className="page-title">
          Farm <span className="highlight">Gallery</span>
        </h1>
        <p className="page-subtitle">Here is a taste of our farm…</p>
      </div>

      <div className="gallery">
        {galleryImages.map((img, idx) => (
          <div key={idx} className="gallery-item">
            <img
              src={img.src}
              alt={img.alt}
              className="gallery-image"
            />
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default PicturesPage;
