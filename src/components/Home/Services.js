import React from 'react';
import Button from '../../cards/button';
import ServicesCard from '../../cards/ServiceCard';
import '../../index.css';

const Services = () => {
  return (
    <div className="lg:h-screen sm:items-center sm:text-center md:text-left md:items-left flex-col md:flex-row md:mb-20 w-full lg:w-[90%] overflow-hidden text-white flex lg:flex-row gap-10 mt-20 items-start top-20 left-0 text-left">
      <div className="mt-10 lg:w-[50%] pr-10 flex items-start flex-col gap-5 items-start md:h-auto lg:h-auto">
        <div className="self-align-left flex flex-col gap-5">
          <p className="text-gray-100 text-2xl">- Services</p>
          <p className="text-4xl sm:text-6xl md:text-8xl">
            Best Services I Offer!
          </p>
          <p className="text-lg mb-5 sm:mb-10">
            Hi, this is Satyam Singh, having 2 years of experience in the web
            design and web development field. I love to develop your business in
            reality by providing high-quality service from my end.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-5 items-center">
          <Button />
          <div className="flex flex-col gap-2 sm:flex-row items-center">
            Or,
            <p
              className="text-sm cursor-pointer text-yellow-500"
              onClick={() => (window.location.href = 'mailto:satyam.12011172@gmail.com')}
            >
              Mail me: satyam.12011172@gmail.com
            </p>
          </div>
        </div>
      </div>
      <div className="lg:h-auto sm:h-[50vh] shadow shadow-white shadow-lg mb-20 w-full sm:w-[97%] items-center flex flex-col gap-10 p-2 overflow-y-auto lg:w-[50%] scrollbar-none">
        <ServicesCard className="animate-slide-up" profile={"Web Development"} />
        <hr className="border-gray-700" />
        <ServicesCard className="animate-slide-up" profile={"React Native Development"} />
        <hr className="border-gray-700" />
        <ServicesCard className="animate-slide-up" profile={"React Development"} />
        <hr className="border-gray-700" />
        <ServicesCard className="animate-slide-up" profile={"FrontEnd Development"} />
        <hr className="border-gray-700" />
        <ServicesCard className="animate-slide-up" profile={"UI/UX Designer"} />
        <hr className="border-gray-700" />
      </div>
    </div>
  );
};

export default Services;
