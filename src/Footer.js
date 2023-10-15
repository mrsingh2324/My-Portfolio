import React from 'react';
import {
  FaAddressBook,
  FaTwitter,
  FaInstagram,
  FaGithub,
  FaFacebook
} from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className='w-[90%]  sm:items-center sm:flex sm:justify-center gap-8 flex lg:flex-row md:items-start md:justify-between mt-10 mb-5 text-white text-xl'>
      <div className='flex w-full items-center md:w-[30%] sm:text-4xl sm:items-center flex-col gap-6 items-start'>
        <div className='flex gap-2 items-center sm:w-screen flex flex-row justify-center '>
          <FaAddressBook className='text-2xl sm:text-4xl text-yellow-500' />
          <p className='text-yellow-500'>Satyam Singh</p>
        </div>
        <div className='text-gray-700 text-4xl flex flex-row gap-5 '>
          <FaTwitter className='hover:text-yellow-500 cursor-pointer ' />
          <FaInstagram className='hover:text-yellow-500 cursor-pointer ' />
          <FaGithub className='hover:text-yellow-500 cursor-pointer ' />
          <FaFacebook className='hover:text-yellow-500 cursor-pointer ' />
        </div>
      </div>
      <div className='hidden md:w-[20%] lg:flex'>
        <ul>
          <li className='hover:text-yellow-500 cursor-pointer '>
            <Link to='/portfolio'>Portfolio</Link>
          </li>
          <li className='hover:text-yellow-500 cursor-pointer '>
            <Link to='/services'>Services</Link>
          </li>
          <li className='hover:text-yellow-500 cursor-pointer '>
            <Link to='/works'>Works</Link>
          </li>
          <li className='hover:text-yellow-500 cursor-pointer '>
            <Link to='/about'>About</Link>
          </li>
        </ul>
      </div>
      <div className='hidden md:w-[20%] lg:flex'>
        <ul>
          <li className='hover:text-yellow-500 cursor-pointer '>Style Guide</li>
          <li className='hover:text-yellow-500 cursor-pointer '>Licenses</li>
          <li className='hover:text-yellow-500 cursor-pointer '>Changelog</li>
          <li className='hover:text-yellow-500 cursor-pointer '>Start Here</li>
        </ul>
      </div>
      <div className='hidden md:block flex-row lg:w-[30%] lg:flex-col sm:items-center lg:items-start'>
        <p className='font-bold text-3xl'>Get In Touch</p>
        <div className='flex mt-5 sm:flex-col sm:items-center lg:items-start sm:justify-between gap-4 rounded overflow-hidden '>
          <input
            type='text'
            placeholder='Enter Your Email'
            className='bg-gray-800 text-2xl p-3 font-semibold w-full'
          />
          <button className='bg-yellow-500 text-black font-semibold hover:bg-transparent text-2xl hover:text-white transition-[300ms] p-2'>
            Text
          </button>
        </div>
      </div>
    </div>
  );
};

export default Footer;
