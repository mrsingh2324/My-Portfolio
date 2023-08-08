import React from 'react';
import Marquee from 'react-fast-marquee';

const MovingText = () => {
  return (
    <Marquee direction="left" speed={20}>
      <div className="text-yellow-500 text-8xl mt-20 mb-20 overflow-hidden">
        <ul className="flex gap-10">
          <li style={{ textStroke: '2px white' }}>
            <span role="img" aria-label="Wave">
              👋
            </span>
          </li>
          <li style={{ textStroke: '2px white' }}>Welcome</li>
            
          <li style={{ textStroke: '2px white' }}>To</li>
            <span role="img" aria-label="Wave">
              👋
            </span>
          <li style={{ textStroke: '2px white' }}>My</li>
            
          <li style={{ textStroke: '2px white' }}>Portfolio</li>
            
          <li style={{ textStroke: '2px white' }}>Page</li>
            
        </ul>
      </div>
    </Marquee>
  );
};

export default MovingText;
