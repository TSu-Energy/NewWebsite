import React from 'react';

const ButtonGrid = ({ buttons, activeButton, onButtonClick }) => {
  return (
    <div className="grid grid-cols-2 gap-4">
      {buttons.map(({ id, label, image }) => (
        <button
          key={id}
          onClick={() => onButtonClick(id)}
          className={`text-blue-600 flex items-center gap-2 px-4 py-2 rounded transition ${
            activeButton === id ? 'bg-blue-500 text-white' : 'bg-gray-200 hover:bg-gray-500 text-blue-600'
          }`}
        >
          {label}
          <img src={image} alt={`${label} 图标`} className="w-6 h-6" />
        </button>
      ))}
    </div>
  );
};

export default ButtonGrid;
