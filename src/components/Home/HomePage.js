import React from 'react'
// import Header from '../../header'
import Home from './Home'
import About from './About'
import Services from './Services'
import Works from './Works'
import Contact from './Contact'
import Intro from './Intro'
import News from './News'
import Marquee from './Marquee'
import Footer from '../../Footer'
import Copyright from './Copyright'

// import Footer from './Footer'

const HomePage = () => {
  return (
    <div className=' items-center overflow-hidden font-mono bg-gray-900 flex flex-col w-[90%]  '>
        {/* <Header /> */}
        <Home/>
        <Services />
        <Works />
        <Marquee />
        <About />
        <Intro />
        <News />
        <Contact />
    </div>
  )
}

export default HomePage
