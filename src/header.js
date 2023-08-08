import React, { useState } from 'react';
import { FaAddressBook, FaHamburger } from 'react-icons/fa';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const location = useLocation(); 
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const handleWhatsAppClick = () => {
    window.open('wa.me/+919758051994', '_blank');
  };

  return (
    <div className='w-[95%] h-[10%] mt-5 absolute bg-gray-900 opacity-90 z-1 flex flex-row items-center justify-between px-2 text-white text'>
      <div className='flex flex-row text-yellow-500 hover:text-white cursor-pointer items-center justify-center gap-2 w-[15%] sm:ml-10 lg:m-0'>
        <FaAddressBook className='text-2xl' />
        <p className='font-semibold text-3xl'>Foliobies</p>
      </div>

      {/* Hamburger Menu for Mobile */}
      <div className='lg:hidden sm:flex'>
        <button className='text-white text-2xl hover:text-yellow-500' onClick={toggleMenu}>
          <FaHamburger />
        </button>
      </div>

      {/* Menu for Mobile */}
      {isMenuOpen && (
        <ul className='lg:hidden bg-gray-500 z-999 sm:flex flex-row fixed top-[10%] p-5 w-[80%] items-center justify-around font-semibold'>
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
            <Link to='/portfolio' onClick={toggleMenu} className={location.pathname === '/portfolio' ? 'text-yellow-500 ' : ''}>
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
      )}

      {/* Menu for Desktop */}
      <ul className='hidden lg:flex w-[35%] flex flex-row items-center justify-around font-semibold'>
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

      <div className='flex flex-row w-[35%] gap-4 justify-around items-center'>
        <div className='hidden lg:flex bg-gray-800 p-2 cursor-pointer hover:border-white'
                  onClick={() => window.location.href = 'mailto:satyam.12011172@gmail.com'}>
          <p className='font-light text-gray-300'>
            Mail:<span className='text-white ml-2 hover:text-yellow-500'>satyam.12011172@gmail.com</span>
          </p>
        </div>
        <button className='px-2 py-1 bg-yellow-500 text-black font-semibold hover:bg-transparent text-inline border border-yellow-500 text-2xl hover:text-white transition-[1s]' 
        // onClick={handleWhatsAppClick}
        >
         <a href='https://wa.me/+919758051994'> Let`s Talk </a> 
        </button>
      </div>
    </div>
  );
};

export default Header;
