// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

// Import all components
import Header from './components/Header';
import HomePage from './components/HomePage';
import MenuPage from './components/MenuPage';
import PicturesPage from './components/PicturesPage';
import ContactPage from './components/ContactPage';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/menu" element={<MenuPage />} />
          <Route path="/pictures" element={<PicturesPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;