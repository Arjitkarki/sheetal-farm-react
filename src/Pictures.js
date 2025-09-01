
import React from 'react';

const PicturesPage = () => {
  return (
    <div className="pictures-page">
      <div className="container">
        <div className="page-header">
          <h1 className="page-title">Farm <span className="highlight">Gallery</span></h1>
          <p className="page-subtitle">Here is a taste of our farm...</p>
        </div>
        
        <div className="gallery">
          <div className="gallery-item">
            <div className="gallery-placeholder">
              <div className="icon">📷</div>
              Farm View 1
            </div>
          </div>
          
          <div className="gallery-item">
            <div className="gallery-placeholder">
              <div className="icon">📷</div>
              Farm View 2
            </div>
          </div>
          
          <div className="gallery-item">
            <div className="gallery-placeholder">
              <div className="icon">📷</div>
              Farm View 3
            </div>
          </div>
          
          <div className="gallery-item">
            <div className="gallery-placeholder">
              <div className="icon">📷</div>
              Farm View 4
            </div>
          </div>
          
          <div className="gallery-item">
            <div className="gallery-placeholder">
              <div className="icon">📷</div>
              Farm View 5
            </div>
          </div>
          
          <div className="gallery-item">
            <div className="gallery-placeholder">
              <div className="icon">📷</div>
              Farm View 6
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PicturesPage;