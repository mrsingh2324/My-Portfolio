import React from 'react';
import { FaArrowRight } from 'react-icons/fa';

const WorksCard = ({ work }) => {
  const { category, title, description, caseStudyLink, imageSrc } = work;

  return (
    <div className='mt-10 text-start text-white sm:mt-10 sm:flex-col lg:mt-0 flex-col flex lg:flex-row bg-gray-950 lg:h-[100%]'>
      <div className='flex flex-col py-30 px-20 lg:w-[50%] h-[100%] text-start lg:gap-16 sm:gap-2 mb-24 lg:mt-20'>
        <div>
          <p className='text-2xl text-gray-500 underline w-[100%] text-start'>{category}</p>
        </div>
        <div>
          <p className='text-6xl font-bold'>{title}</p>
        </div>
        <div>
          <p className='text-2xl'>{description}</p>
        </div>
        <div className='flex text-gray-500 text-xl cursor-pointer gap-2 items-center hover:text-white transtion-300'>
          <a href={caseStudyLink} target='_blank' rel='noopener noreferrer'>
            <p>View Case Study</p>
            <FaArrowRight />
          </a>
        </div>
        <hr className='border-2 border-dotted border-gray-500 mt-[-50px] w-[36%]' />
      </div>
      <div className='h-full lg:w-[50%]  overflow-hidden  flex flex-row text-center  item-center justify-center'>
        <img src={imageSrc} alt={title} className='lg:h-[60%] w-[100%] md:mt-[30%]' />
      </div>
    </div>
  );
};

export default WorksCard;
