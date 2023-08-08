import React from 'react'
import Button from '../../cards/button'
import ServicesCard from '../../cards/ServiceCard'
// import Fade from 'react-reveal/Fade';
import '../../index.css'

const Services = () => {
    return (
        <div className="lg:h-screen sm:flex-col mb-20 w-[90%] overflow-hidden text-white flex lg:flex-row gap-10 mt-20 items-start top-20 left-0 text-left">
            <div className=' mt-10 lg:w-[50%] pr-10 flex items-start flex-col gap-5 items-start h-[90%]'>
                <div className=' self-align-left flex flex-col gap-5'>
                    <p className='text-gray-100 text-2xl'>- Services</p>
                    <p className='text-8xl '>Best Services I Offer!</p>
                    <p className='text-lg mb-30'>Hi, this is Satyam Singh having 2 years of experience in the web design and web development field, Love to develop your business in reality by providing high-quality service from my end.</p>
                </div>
                <div className='flex flex-row gap-7 items-center'>
                    <Button />
                    <div className='flex gap-5 items-center' > Or,
                        <p className='text-sm' 
                        onClick={() => window.location.href = 'mailto:satyam.12011172@gmail.com'}>
                            Mail me : <span className='text-yellow-500 cursor-pointer'>satyam.12011172@gmail.com </span> </p>
                    </div>
                </div>
            </div>
            <div className='lg:h-[90%] sm:h-[50vh] shadow shadow-white shadow-lg mb-20 sm:w-[97%] items-center flex flex-col gap-10 p-2 overflow-y-auto lg:w-[50%] scrollbar-none'

            // style={{ boxShadow: '0px 2px 4px rgba(255, 255, 255, 1)' }}
            >
                <ServicesCard className="animate-slide-up" profile={"Web Development"} />
                <hr className='border-gray-700' />
                <ServicesCard className="animate-slide-up" profile={"React Native Development"} />
                <hr className='border-gray-700' />
                <ServicesCard className="animate-slide-up" profile={"React Development"} />
                <hr className='border-gray-700' />
                <ServicesCard className="animate-slide-up" profile={"FrontEnd Development"} />
                <hr className='border-gray-700' />
                <ServicesCard className="animate-slide-up" profile={"UI/UX Designer"} />
                <hr className='border-gray-700' />
            </div>
        </div>
    )
}

export default Services;
