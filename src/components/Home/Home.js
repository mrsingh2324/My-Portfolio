import React, { useState, useEffect } from "react";
import Typewriter from "typewriter-effect";
import Me from '../../Images/me.webp';
import CV from '../../Images/MY_CV.png';

const Home = () => {
  return (
    <div className="home w-full md:w-[90%] mb-20 md:mt-[-50px] overflow-hidden text-white flex flex-col md:flex-row items-center justify-center">
      <div className="w-full md:w-[50%] md:ml-10 p-5 md:p-0 md:pl-10">
        <div className="circle-container sm:justify-center flex flex-col items-center ">
          <p className="circle-text p-6 md:p-16 bg-gray-800 font-serif text-4xl md:text-6xl text-white rounded-full">
            S
          </p>
          <p className="text-4xl md:text-6xl font-bold text-white mt-4">
            Satyam <span className="text-yellow-500">Singh</span>
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-center text-2xl md:text-4xl gap-5 mt-5">
          <p className="md:mr-2">I am a</p>
          <div className="text-yellow-500 font-bold">
            <Typewriter
              options={{
                strings: ['Frontend Developer', 'React Developer', 'MERN Stack Developer', 'React Native Developer'],
                autoStart: true,
                loop: true,
              }}
            />
          </div>
        </div>
        <div className="mt-10 flex flex-col md:flex-row gap-5">
          <a href={CV} download="Satyam Singh CV">
            <button className="bg-yellow-500 hover:bg-transparent hover:border-2 hover:border-yellow-500 hover:text-white border-2 rounded-2xl text-2xl font-bold p-4 px-8">
              My CV
            </button>
          </a>
        </div>
      </div>
      <div className="w-full md:w-[50%] mt-5 md:mt-0">
        <img src={Me} alt="Satyam Singh" className="w-full h-auto object-cover object-center" />
      </div>
    </div>
  );
};

export default Home;
