import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css';

const ImageCarousel = () => {
  const images = [
    '/src/assets/2b2.png', // Ensure these paths are correct
    '/src/assets/bd.png',
    '/src/assets/bis logistics.png',
    '/src/assets/ramadam and new year77.png',
  ];

  const settings = {
    dots: true, // Show dots for navigation
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    fade: false, // Disable fade for a sliding effect
  };

  return (
    <div className="w-full max-w-3xl mx-auto">
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index} className="relative">
            <img 
              src={image} 
              alt={`Slide ${index}`} 
              className="w-full h-auto object-contain rounded-lg shadow-lg transition-transform duration-300 transform hover:scale-105"
              style={{ maxHeight: '400px' }}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ImageCarousel; 