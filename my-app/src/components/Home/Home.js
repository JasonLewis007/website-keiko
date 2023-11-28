// src/components/Home/Home.js
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Home.css';

const Home = () => {
  const sliderSettings = {
    autoplay: true,
    autoplaySpeed: 2000,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="home">
      <Slider {...sliderSettings}>
        <div>
          <img src="image1.jpg" alt="Slide 1" />
        </div>
        <div>
          <img src="image2.jpg" alt="Slide 2" />
        </div>
      </Slider>
    </div>
  );
};

export default Home;
