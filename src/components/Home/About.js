import React from "react";
import Me from "../../Images/me.webp";
import { Carousel } from "react-responsive-carousel";
import AboutCarousel from "../../cards/AboutCarousel";

const About = () => {
  return (
    <div className="text-white relative items-center text-xl w-full md:bg-gray-800 flex items-start md:h-screen overflow-hidden sm:flex-wrap">
      <div
        className="hidden md:absolute z-0 bg-yellow-500 absolute p-10 relative w-[50%] pb-20 z-10 flex-col justify-center h-full top-0 right-0"
        style={{
          background: `url(${Me})`,
          backgroundSize: "cover",
        }}
      ></div>
      <div className="w-full md:w-[50%] p-10 sm:p-5">
        <h1 className="text-4xl sm:text-6xl font-bold mb-5">About Me</h1>
        <p className="text-lg mb-10">
          Hi, I'm Satyam Singh, a passionate web developer with a creative mind. I specialize in building beautiful and functional web applications. My goal is to create innovative and efficient solutions that help businesses succeed in the digital world.
        </p>
        <AboutCarousel />
      </div>
    </div>
  );
};

export default About;