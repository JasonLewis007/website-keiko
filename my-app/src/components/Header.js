// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'; // Add styles as needed

const Header = () => {
  return (
    <header className="header">
      <div className="logo-container">
        <img src="/path/to/your/logo.png" alt="Company Logo" className="logo" />
      </div>
      <div className="company-info">
        <h1>Trinity RealEstate Partners</h1>
      </div>
      <nav className="nav">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/realestate">Real Estate</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

