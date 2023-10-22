import React, { useState } from 'react';
import { BiRefresh } from 'react-icons/bi';
import { FaAddressBook, FaHamburger } from 'react-icons/fa';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const location = useLocation();
  // const [isMenuOpen, setIsMenuOpen] = useState(false);

  // = () => {
  //   setIsMenuOpen(!isMenuOpen);
  // };

  return (
    <div className='w-full h-[100px] bg-black/30 bg-gray-900 opacity-90 z-10 flex items-center justify-between py-2 text-white'>
      {/* <div className='sm:fixed sm:top-0 sm:w-screen sm:flex sm:items-center sm:justify-around  md:hidden sm:py-2 bg-black/30'>
        <FaAddressBook className='sm:text-lg' />
        <p className='font-semibold text-xl ml-2'>My Portfolio</p>
      </div> */}
      <div
        className='gap-2 flex md:relative top-0 items-center ml-4 hover:cursor-pointer hover:text-yellow-500'
        onClick='#'
      >        <FaAddressBook className='md:text-2xl sm:text-lg' />
        <p className='md:text-2xl sm:text-lg'>My Portfolio</p>
      </div>

      {/* <div className='lg:hidden sm:flex'>
        <button className='text-white text-2xl hover:text-yellow-500' >
          <FaHamburger />
        </button>
      </div> */}

      <ul className={`lg:flex hidden max-w-[40%] flex-row gap-10 absolute top-[6rem] lg:static lg:w-auto`}>
        <li>
          <Link to='/' className={`hover:text-yellow-500 ${location.pathname === '/' ? 'text-yellow-500' : ''}`}>
            Home
          </Link>
        </li>
        <li>
          <Link to='/services' className={`hover:text-yellow-500 ${location.pathname === '/services' ? 'text-yellow-500' : ''}`}>
            Services
          </Link>
        </li>
        <li>
          <Link to='/portfolio' className={`hover:text-yellow-500 ${location.pathname === '/portfolio' ? 'text-yellow-500' : ''}`}>
            Portfolio
          </Link>
        </li>
        <li>
          <Link to='/blog' className={`hover:text-yellow-500 ${location.pathname === '/blog' ? 'text-yellow-500' : ''}`}>
            Blog
          </Link>
        </li>
        <li>
          <Link to='/contact' className={`hover:text-yellow-500 ${location.pathname === '/contact' ? 'text-yellow-500' : ''}`}>
            Contact
          </Link>
        </li>
      </ul>

      <div className='lg:w-auto flex items-center mr-4'>

        <button className='px-2 py-1 bg-yellow-500 text-black font-semibold hover:bg-transparent text-2xl border border-yellow-500 hover:text-white transition-[1s]'>
          <a href='https://wa.me/+919758051994'> Let's Talk </a>
        </button>
      </div>
    </div>
  );
};

export default Header;
