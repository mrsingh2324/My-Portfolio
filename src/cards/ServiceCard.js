import React from 'react'
import { BsArrowUpRight } from 'react-icons/bs'
import { BiBookOpen } from 'react-icons/bi'
import {Link} from 'react-router-dom';


const service = ({profile}) => {
  return (
    <div className=' mb-5 p-10 shadow shadow-sm shadow-white w-[90%]  flex text-5xl gap-5 text-gray-500'>
      <div className='bg-gradient-to-r from-gray-500 via-gray-800 to-gray-900 text-gray-100 rounded  p-2 text-8xl'>
        <BiBookOpen />
      </div>
      <div className='flex flex-col justify-between text-4xl'>

        <p>{profile}</p>

        <div className='flex items-center hover:text-yellow-500 gap-2 text-2xl'>
        <Link to='/services' className=''>Read More</Link>
          <BsArrowUpRight className='text' />
        </div>
      </div>
    </div>
  )
}

export default service
