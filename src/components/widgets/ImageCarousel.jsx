// ImageCarousel.jsx
import React, { useState } from 'react';

const ImageCarousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slideCount = images.length;
  const slideWidth = 300; // 假设每个图片的宽度为300px

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  const handlePrevClick = () => {
    console.log({ slideCount });
    goToSlide((currentIndex + slideCount - 1) % slideCount);
  };

  const handleNextClick = () => {
    goToSlide((currentIndex + 1) % slideCount);
  };

  return (
    <div className="carousel">
      <button onClick={handlePrevClick}>Previous</button>
      <div className="carousel" style={{ transform: `translateX(-${currentIndex * slideWidth}px)` }}>
        {images.map((image, index) => (
          <div key={index} className="carousel-item relative w-full">
            {/* <img src={image.src} alt={image.alt} /> */}
            {typeof image === 'string' ? (
              //   <Fragment set:html={image} />
              <img src={image} />
            ) : (
              <img
                src={image.src}
                crossorigin="anonymous"
                referrerpolicy="no-referrer"
                class="mx-auto rounded-md w-full"
                widths={[400, 768, 1024, 2040]}
                sizes="(max-width: 767px) 400px, (max-width: 1023px) 768px, (max-width: 2039px) 1024px, 2040px"
                loading="eager"
                width={1024}
                height={576}
                {...image.attributes}
              />

              //   <Image
              //     class="mx-auto rounded-md w-full"
              //     widths={[400, 768, 1024, 2040]}
              //     sizes="(max-width: 767px) 400px, (max-width: 1023px) 768px, (max-width: 2039px) 1024px, 2040px"
              //     loading="eager"
              //     width={1024}
              //     height={576}
              //     {...image}
              //   />
            )}
          </div>
        ))}
      </div>
      <button onClick={handleNextClick}>Next</button>
      <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
        <a onClick={handlePrevClick} class="btn btn-circle">
          ❮
        </a>
        <a onClick={handleNextClick} class="btn btn-circle">
          ❯
        </a>
      </div>
    </div>
  );
};

export default ImageCarousel;
