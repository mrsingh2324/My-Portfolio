import React, { useState, useEffect } from 'react';

const ExtraPointer = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (event) => {
    setPosition({ x: event.pageX, y: event.pageY });
  };

  useEffect(() => {
    document.addEventListener('mousemove', handleMouseMove);
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);
  const isInsideLink = () => {
    const links = document.querySelectorAll('a');
    let isInside = false;
    links.forEach((link) => {
        const rect = link.getBoundingClientRect();
        if (
            position.x >= rect.left &&
            position.x <= rect.right &&
            position.y >= rect.top &&
            position.y <= rect.bottom
            ) {
            isInside = true;
            }
        });
        return isInside;
    };


  return (
    <div className={`${isInsideLink() ? 'w-20 h-20 opacity-30' : 'w-10 h-10 opacity-50'}'fixed z-50 w-10 h-10 bg-gray-800 rounded-full pointer-events-none'`}
      style={{
        position: 'fixed',
        top: position.y,
        left: position.x,
        width: '60px',
        height: '60px',
        opacity: '0.5',
        backgroundColor: 'gray', // Customize the color and appearance as you like
        borderRadius: '50%',
        pointerEvents: 'none', // Ensure the extra pointer doesn't interfere with mouse events
        zIndex: 9999, // Ensure the extra pointer is above other elements
      }}
    ></div>
  );
};

export default ExtraPointer;
