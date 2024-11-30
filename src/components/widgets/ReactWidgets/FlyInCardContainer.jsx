import React from "react";
import PropTypes from "prop-types";

const FlyInCardContainer = ({ cards }) => {
  return (
    <div className="relative flex flex-wrap gap-4 items-center justify-center">
      {cards.map((card, index) => (
        <div
          key={index}
          className={`${card.position} ${card.width} border border-solid border-gray-300/20 
              bg-white
              p-2
              rounded-lg 
              shadow-lg 
              shadow-gray-300/30 
              absolute 
              overflow-hidden 
              animate-fly-in`}
        >
          <img src={card.src} alt={card.alt} />
        </div>
      ))}
    </div>
  );
};

FlyInCardContainer.propTypes = {
  cards: PropTypes.arrayOf(
    PropTypes.shape({
      position: PropTypes.string.isRequired,
      width: PropTypes.string.isRequired,
      src: PropTypes.string.isRequired,
      alt: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default FlyInCardContainer;