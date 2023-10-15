import React from 'react'
import IntroCards from '../../cards/IntroCards'

const Intro = () => {
  const data = [
    {
      'value': '2+',
      'title': 'Years'
    },
    {
      'value': '12+',
      'title': 'Projects'
    },
    {
      'value': '3+',
      'title': 'Freelance Works'
    },
    {
      'value': '15+',
      'title': 'Client'
    }
  ]
  return (
    <div className='flex gap-10 my-20 flex-col md:flex-wrap items-center justify-center '>
      {data.map((item) => {

        return (<IntroCards data={item} />)
      
      })}
    </div>
  )
}

export default Intro
