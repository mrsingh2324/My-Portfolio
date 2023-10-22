import React, { useState, useEffect } from "react";
import Typewriter from "typewriter-effect";
import Me from '../../Images/me.webp';
import CV from '../../Images/MY_CV.png';

const Home = () => {
  return (
    <div className="home w-full md:w-[90%] mb-20 overflow-hidden text-white flex flex-col md:flex-row items-center justify-center">
      <div className="w-full md:w-[50%] p-5 md:p-0">
        
          <p className="p-2 md:ml-20 items-center justify-center gap-5 flex text-5xl md:text-6xl font-bold text-white mt-4">
            Satyam <span className="text-yellow-500">Singh</span>
          </p>

        <div className="flex h-[180px] w-full flex-col  md:flex-row items-center text-3xl md:text-4xl gap-5 mt-5 bg-gray-950 ">
          <p className="md:mr-2">I am a</p>
          <div className="text-yellow-500 md:w-[40%] items-center text-center w-full font-bold">
            <Typewriter
              options={{
                strings: ['Frontend Developer', 'React Developer', 'MERN Stack Developer', 'React Native Developer'],
                autoStart: true,
                loop: true,
              }}
            />
          </div>
        </div>
        <div className="lg:mt-10  sm:self-center md:items-start items-center flex flex flex-col md:flex-row gap-5">
          <a href={CV} download="Satyam Singh CV">
            <button className="bg-yellow-500 hover:bg-transparent hover:border-2 hover:border-yellow-500 hover:text-white border-2 rounded-2xl text-2xl font-bold p-4 px-8">
              Resume
            </button>
          </a>
        </div>
      </div>
      <div className="h-[100%] w-full md:w-[50%] md:mt-0">
        <img src={Me} alt="Satyam Singh" className="w-full md:h-[600px] pb-20  object-cover  self-center" />
      </div>
    </div>
  );
};

export default Home;
