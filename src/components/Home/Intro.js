import React from 'react';
import IntroCards from '../../cards/IntroCards';

const data = [
  {
    value: '2+',
    title: 'Years',
  },
  {
    value: '12+',
    title: 'Projects',
  },
  {
    value: '3+',
    title: 'Freelance Works',
  },
  {
    value: '15+',
    title: 'Clients',
  },
];

const Intro = () => {
  return (
    <div className=' my-10 border p-10 cursor:pointer flex flex-wrap justify-center gap-4 md:gap-10 mx-4 md:mx-0'>
      {data.map((item, index) => (
        <IntroCards key={index} data={item}  />
      ))}
    </div>
  );
};

export default Intro;
