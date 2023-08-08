import React from 'react';
import { FaArrowRight } from 'react-icons/fa';

const NewsCard = ({ news }) => {
  const { title, urlToImage, description, publishedAt, author } = news;

  return (
    <div className='flex flex-col gap-5 justify-between lg:w-[30%] sm:w-[100%]'>
      <img src={urlToImage} alt='News' className='h-[400px] lg:w-[700px] md:w-[80vw] sm:w-[60vw] bg-gray-950' />
      <div className='text-gray-600 flex'>
        <p className='mr-5'>{author}</p> |
        <p className='ml-5'>{publishedAt}</p>
      </div>
      <div className='text-white text-2xl font-bold'>
        <p>{title}</p>
      </div>
      <div className='text-gray-600 flex gap-3 hover:text-white cursor-pointer items-center'>
        <a href={news.url} target='_blank' rel='noopener noreferrer'>
          <p className=''>Read More</p>
          <FaArrowRight />
        </a>
      </div>
    </div>
  );
};

export default NewsCard;
