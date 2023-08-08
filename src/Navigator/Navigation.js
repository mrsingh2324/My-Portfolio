import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from '../header';
import Footer from '../Footer';
import Copyright from '../components/Home/Copyright';
import Home from '../components/Home/HomePage';
import Services from '../components/Services/Services';
import Works from '../components/Works/Works';
import Blog from '../components/Blog/Blog';
import Portfolio from '../components/Portfolio/PortfolioPage';
// import About from '../components/About/About'; // Fix the import path
import ContactDetails from '../components/Contact/ContactDetails';
import NotFound from '../NotFound';

const Navigation = () => {
  return (
    <Router>
      <div className="App items-center font-mono bg-gray-900 flex flex-col w-[100%] ">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          {/* <Route path="/works" element={<Works />} /> */}
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/blog" element={<Blog />} />
          {/* <Route path="/about" element={<About />} /> */}
          <Route path="/contact" element={<ContactDetails />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
        <Copyright />
      </div>
    </Router>
  );
};

export default Navigation;
