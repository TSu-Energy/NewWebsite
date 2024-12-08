import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import "~/styles/FlyInCardContainer.css"; // 引入样式文件


const FlyInCardContainer = ({ cards }) => {
  const [animationDelays, setAnimationDelays] = useState([]);

  useEffect(() => {
    // 随机生成每个卡片的动画延迟，0 到 500 毫秒之间
    const delays = cards.map(() => Math.random() * 500);
    setAnimationDelays(delays);
  }, [cards]);

  return (
    <div className="relative flex flex-wrap gap-4 items-center justify-center">
      {cards.map((card, index) => (
        <div
          key={index}
          className={`
            ${card.position} 
            ${card.width} 
            border border-solid border-gray-300/20 
            bg-white 
            p-2 
            rounded-lg 
            shadow-lg 
            shadow-gray-300/30 
            absolute 
            overflow-hidden 
            animate-fly-in 
            float-effect
            hidden
            md:block
          `}
          style={{
            animationDelay: `${animationDelays[index] || 0}ms`, // 动态延迟
          }}
        >
          <img 
            src={card.src} 
            alt={card.alt} 
            className="w-full h-auto"
          />
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
