import React from 'react'
import News from '../Home/News';
import Contact from '../Home/Contact';


const Blog = () => {
  return (
    <div className='mt-32 w-full overflow-hidden items-center flex flex-col justify-center'>
      <News />
      <News />
      <Contact />
    </div>
  )
}

export default Blog
