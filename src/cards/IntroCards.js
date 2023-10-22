import React from 'react'

const IntroCards = (props) => {
  const { data } = props;
  return (
    <div className='md:border cursor-pointer border-gray-600 text-center hover:scale-[1.05] hover:shadow hover:shadow-lg p-16 px-32'>
      <p className='text-2xl text-white'>{data.value}</p>
      <p className='text-3xl text-gray-600'>{data.title}</p>
    </div>
  )
}

export default IntroCards
