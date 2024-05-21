import React, { useEffect, useState } from 'react';
import ContentPanel from './ContentPanel';

const NavigationModule = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleItemClick = (index) => {
    setActiveIndex(index);
  };

  const handlePrevClick = () => {
    setActiveIndex((prevIndex) => (prevIndex === 0 ? items.length - 1 : prevIndex - 1));
  };

  const handleNextClick = () => {
    setActiveIndex((prevIndex) => (prevIndex === items.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <nav className="p-4 bg-inherit rounded-lg">
      <div className="flex flex-wrap items-center gap-2 mb-4 justify-center">
        {items.map((item, index) => (
          <button
            key={index}
            className={`text-lg font-bold px-6 py-2 rounded-md ${activeIndex === index ? 'bg-blue-600' : 'bg-gray-300'} text-white`}
            onClick={() => handleItemClick(index)}
          >
            {item.title}
          </button>
        ))}
      </div>
      <div className="flex items-center justify-center mb-4">
        {/* <button onClick={handlePrevClick} className="px-4 py-2 bg-gray-300 text-black rounded-l-md">
          &lt;
        </button> */}
        <ContentPanel item={items[activeIndex]} />
        {/* <button onClick={handleNextClick} className="px-4 py-2 bg-gray-300 text-black rounded-r-md">
          &gt;
        </button> */}
      </div>
    </nav>
  );
};

export default NavigationModule;
