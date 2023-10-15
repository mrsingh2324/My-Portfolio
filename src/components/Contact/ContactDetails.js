import React from 'react'
import Contact from '../Home/Contact'

const ContactDetails = () => {
  return (
    <div className='mt-10 bg-gray-900 flex bg-gray-950 sm:flex-col lg:flex-row items-start text-start '>
      <div className='mt-20 text-start p-10'>
        <h1 className='text-6xl text-white font-semibold'>I`m Available for Hire</h1>
        <p className='text-white text-2xl font-light'>Expert in Product Designing and Developing since an Year.</p>

      </div>
      <Contact />
    </div>
  )
}

export default ContactDetails;
