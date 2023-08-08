import React from 'react'
import Portfolio from '../Home/Works'
import Contact from '../Home/Contact';


const PortfolioPage = () => {
  return (
    <div className=' w-[90%] mt-32 bg-gray-950 '>
    <div className='p-10 '>


      <p className='text-7xl text-white font-bold'>Work I have done</p>
      <p className='text-2xl text-gray-600'>Latest News And Articles goes her , The most Powerfu software page for any kind of app and software marketing business</p>
    </div>
      <Portfolio />
      <Contact />

    </div>
  )
}

export default PortfolioPage;
