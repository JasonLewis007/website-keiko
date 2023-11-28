// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home/Home';
import AboutUs from './components/AboutUs/AboutUs';
import RealEstateDevelopment from './components/RealEstateDevelopment/RealEstateDevelopment';
import ContactUs from './components/ContactUs/ContactUs';

const App = () => {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/realestate" element={<RealEstateDevelopment />} />
          <Route path="/contact" element={<ContactUs />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;



