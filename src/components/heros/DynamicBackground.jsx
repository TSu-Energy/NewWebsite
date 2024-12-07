import React from 'react';

const DynamicBackground = ({ background }) => (
  <div
    className="absolute inset-0 bg-cover bg-center transition-opacity duration-500"
    style={{ 
      backgroundImage: `url(${background})`, 
      opacity: 0.6 
    }}
  ></div>
);

export default DynamicBackground;
