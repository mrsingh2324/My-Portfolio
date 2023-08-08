import React from 'react';
import Header from './header';
import Footer from './Footer';
import Copyright from './components/Home/Copyright';
import Navigation from './Navigator/Navigation';

const App = () => {
  return (
    <div className="w- bg-gray-900">
        {/* <Header /> */}
        <Navigation />
    </div>
  );
};


export default App;