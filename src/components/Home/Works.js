import React from 'react';
import WorksCard from '../../cards/WorksCard';
import ListedProject from '../../Images/ListedProject.png';
import FoodDelivery from '../../Images/FoodDelivery.png';
import WeatherApp from '../../Images/WeatherApp.png';
import SpeedChecker from '../../Images/Speed Checker.png';
const demoWorks = [
  {
    id: 1,
    category: 'React Native App',
    title: 'Tic-TacToe Game',
    description: 'App landing page for software marketing business.',
    caseStudyLink: 'https://example.com/case-study-1',
    imageSrc: ListedProject // Use the imported image
  },
  {
    id: 2,
    category: 'Frontend Development',
    title: 'Food Delivery Web',
    description: 'Creating beautiful and responsive websites for food delivery app.',
    caseStudyLink: 'https://example.com/case-study-2',
    imageSrc: FoodDelivery // Use the imported image
  },
  {
    id: 3,
    category: 'Web Development',
    title: 'Weather App',
    description: 'Created weather checking app for the local areas.',
    caseStudyLink: 'https://example.com/case-study-2',
    imageSrc: WeatherApp // Use the imported image
  },
  {
    id: 4,
    category: 'React Development',
    title: 'Typing Speed Checker App',
    description: 'Created typing speed checker app in reactjs .',
    caseStudyLink: 'https://example.com/case-study-2',
    imageSrc: SpeedChecker // Use the imported image
  },
  // Add more works here if needed
];

const Works = () => {
  return (
    <div className='flex flex-col bg-gray-950 gap-5 overflow-y-scroll sm:w-full lg:w-[90%] h-[80vh] mb-10 scrollbar-none'>
      {demoWorks.map((work) => (
        <WorksCard key={work.id} work={work} />
      ))}
    </div>
  );
};

export default Works;
