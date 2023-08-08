import React, { useState, useEffect } from "react";
import Typewriter from "typewriter-effect";
import Me from '../../Images/me.webp';
import CV from '../../Images/MY_CV.png';


const Home = () => {

  return (
    <div className="home w-[90%] h-[80%] mb-20 overflow-hidden relative overflow-hidden text-white flex md:flex-row sm:flex-col mt-10 items-start w-[90%] justify-center top-20 ">
      <div className="ml-10 lg:w-[50%]">
        <div className="circle-container ">
          <p className="circle-text mb-10 p-16 border-none hover:bg-yellow-5 bg-gray-800 font-serif">S</p>
        </div>

        <p className="text-[88px] font-bold">Satyam <span className="text-yellow-500">Singh</span></p>
        <div className="flex items-center text-4xl gap-5">
          <p className="">I am a</p>
          <div className=" text-yellow-500 font-bold">
            <Typewriter
              options={{
                strings: ['Frontend Developer', 'React Developer', 'MERN Stack Developer', 'React Native Developer'],
                autoStart: true,
                loop: true,
              }}
            />
          </div>
        </div>
        <div className="mt-20 flex gap-20 text-black ">
          {/* <button className="hover:bg-transparent bg-yellow-500 hover:border-[3px] hover:border-yellow-500 hover:text-white border-[3px] rounded rounded-2xl text-xl font-bold text-bold p-4 px-10">
            Hire Me
          </button> */}
          <a href={CV} download="Satyam Singh CV">
            <button className="bg-yellow-500 hover:bg-transparent  hover:border-[3px] hover:border-yellow-500 hover:text-white border-[3px] rounded rounded-2xl text-xl font-bold text-bold p-4 px-10">
              My CV
            </button>
          </a>
        </div>
      </div>
      <div className=" h-full lg:w-[40%] sm:mt-20 sm:items-center ">
        <img src={Me} alt="Satyam Singh" className="lg:h-[600px] sm:w-full object-cover object-center" />

      </div>

    </div>
  );
};

export default Home;

