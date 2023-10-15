import React, { useState } from 'react';
import { FaAddressBook, FaHamburger } from 'react-icons/fa';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className='w-full h-[100px] bg-black/30 bg-gray-900 opacity-90 z-10 flex items-center justify-between py-2 text-white'>
      <div className='sm:fixed md:hidden py-2 px-4 flex items-center bg-black/30'>
        <FaAddressBook className='sm:text-lg' />
        <p className='font-semibold text-xl ml-2'>My Portfolio</p>
      </div>
      <div className='md:flex hidden  md:relative top-0  items-center ml-4'>
        <FaAddressBook className='md:text-2xl sm:text-lg' />
        <p className='font-semibold text-3xl ml-2'>My Portfolio</p>
      </div>

      {/* Hamburger Menu for Mobile */}
      {/* <div className='lg:hidden sm:flex'>
        <button className='text-white text-2xl hover:text-yellow-500' onClick={toggleMenu}>
          <FaHamburger />
        </button>
      </div> */}

      {/* Menu (Mobile & Desktop) */}
      <ul className={`md:flex hidden max-w-[40%] flex-row gap-10 absolute top-[6rem] lg:static lg:w-auto`}>
        <li>
          <Link to='/' onClick={toggleMenu} className={location.pathname === '/' ? 'text-yellow-500' : ''}>
            Home
          </Link>
        </li>
        <li>
          <Link to='/services' onClick={toggleMenu} className={location.pathname === '/services' ? 'text-yellow-500' : ''}>
            Services
          </Link>
        </li>
        <li>
          <Link to='/portfolio' onClick={toggleMenu} className={location.pathname === '/portfolio' ? 'text-yellow-500' : ''}>
            Portfolio
          </Link>
        </li>
        <li>
          <Link to='/blog' onClick={toggleMenu} className={location.pathname === '/blog' ? 'text-yellow-500' : ''}>
            Blog
          </Link>
        </li>
        <li>
          <Link to='/contact' onClick={toggleMenu} className={location.pathname === '/contact' ? 'text-yellow-500' : ''}>
            Contact
          </Link>
        </li>
      </ul>

      <div className='lg:w-auto flex items-center mr-4'>
        <div className='hidden lg:flex bg-gray-800 p-2 cursor-pointer'>
          <p className='font-light text-gray-300'>
            Mail:<span className='text-white ml-2 hover:text-yellow-500'>satyam.12011172@gmail.com</span>
          </p>
        </div>
        <button className='px-2 py-1 bg-yellow-500 text-black font-semibold hover:bg-transparent text-2xl border border-yellow-500 hover:text-white transition-[1s]'>
          <a href='https://wa.me/+919758051994'> Let's Talk </a>
        </button>
      </div>
    </div>
  );
};

export default Header;
