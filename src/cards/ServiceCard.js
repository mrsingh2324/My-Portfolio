import React from 'react';
import { BsArrowUpRight } from 'react-icons/bs';
import { BiBookOpen } from 'react-icons/bi';
import { Link } from 'react-router-dom';

const Service = ({ profile }) => {
  return (
    <div className="mb-5 p-5 sm:p-10 shadow shadow-sm shadow-white w-full lg:w-[90%] flex text-3xl sm:text-4xl md:text-5xl gap-5 text-gray-500">
      <div className="bg-gradient-to-r from-gray-500 via-gray-800 to-gray-900 text-gray-100 rounded p-2 sm:p-4 text-5xl sm:text-6xl">
        <BiBookOpen />
      </div>
      <div className="flex flex-col justify-between text-4xl sm:text-5xl">
        <p>{profile}</p>
        <div className="flex items-center hover:text-yellow-500 gap-2 text-2xl sm:text-3xl">
          <Link to="/services" className="">
            Read More
          </Link>
          <BsArrowUpRight className="" />
        </div>
      </div>
    </div>
  );
};

export default Service;
