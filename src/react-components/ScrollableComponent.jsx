// Import necessary hooks and components
import React, { useRef, useEffect } from 'react';
import '~/assets/styles/RollingViews.css';
import Timeline2 from '~/components/ui/Timeline2.astro';

// Define the ScrollableComponent
const ScrollableComponent = ({ items }) => {
  // Create a ref to the scroll container
  const scrollContainerRef = useRef(null);

  // Function to handle the scroll event
  const handleScroll = (event) => {
    const container = event.currentTarget;
    // You can add logic here to handle the scrolling, e.g., adding/removing items
  };

  // Add event listener on mount and cleanup on unmount
  useEffect(() => {
    const container = scrollContainerRef.current;
    container.addEventListener('wheel', handleScroll);

    // Cleanup the event listener when the component unmounts
    return () => {
      container.removeEventListener('wheel', handleScroll);
    };
  }, []);

  //   const classes = {}

  return (
    <div className="scroll-container" ref={scrollContainerRef}>
      <Timeline2
        items={items}
        classes={{
          container: 'max-w-md mx-auto md:max-w-none grid gap-6 md:gap-8 grid grid-flow-col auto-cols-max',
          panel: 'panel',
          //   ...(classes?.items as Record<string, never>),
        }}
      />
    </div>
  );
};

export default ScrollableComponent;

// // src/components/ScrollableComponent.js
// import React, { useState, useEffect } from 'react';

// const ScrollableComponent = ({ items }) => {
//   const [scrollPosition, setScrollPosition] = useState(0);

//   const handleScroll = () => {
//     const position = window.scrollY;
//     setScrollPosition(position);
//   };

//   useEffect(() => {
//     window.addEventListener('scroll', handleScroll);

//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, []);

//   return (
//     <div className="fixed top-0 left-0 right-0 bottom-0 overflow-y-scroll">
//       {items.map((item, index) => (
//         <div key={index} className="p-4">
//           {item}
//         </div>
//       ))}
//     </div>
//   );
// };

// export default ScrollableComponent;
