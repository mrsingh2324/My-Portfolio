import React, { useEffect, useState } from 'react';
import NewsCard from '../../cards/NewsCard';
import axios from 'axios'; // Import axios or any other library for making HTTP requests

const News = () => {
  const [newsData, setNewsData] = useState([]);

  // Replace 'YOUR_API_KEY' with your actual API key
  const API_KEY = '4a5441aa04364e90b21f643ebfcecee5';
  const API_URL = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`;

  useEffect(() => {
    // Fetch news data from the API
    axios.get(API_URL)
      .then(response => {
        setNewsData(response.data.articles);
        // console.log(response.data.articles)
      })
      .catch(error => {
        console.error('Error fetching news:', error);
      });
  }, []);

  return (
    <div className='flex flex-col text-white '>
        <p className='mb-5 text-4xl mx-[auto] font-bold underline'>Latest News Section</p>

      <div className='flex flex-col sm:flex-row w-[90%] sm:items-center sm:justify-center gap-5 mb-20 mx-auto'>

        {newsData.slice(0, 3).map((newsItem, index) => (
          <NewsCard key={index} news={newsItem} />

        ))}
      </div>
    </div>
  );
};

export default News;
