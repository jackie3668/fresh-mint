import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Hero from './Component/Hero/Hero';
import Navbar from './Component/Navbar/Navbar';
import arrow from './Asset/UI/upload.png'
import { useEffect } from 'react';
import Steps from './Component/Steps/Steps';
import Countdown from './Component/Countdown/Countdown';
import Slider from './Component/Slider/Slider';
import Accordion from './Component/Accordion/Accordion';
import Newsletter from './Component/Newsletter/Newsletter';
import Footer from './Component/Footer/Footer';
import Subscribe from './Page/Subscribe/Subscribe';
import About from './Component/About/About';
import Recipes from './Page/Recipes/Recipes';
import Contact from './Page/Contact/Contact';


function App() {
  useEffect(() => {
    const targetDiv = document.querySelector('.scroll-up');
  
    const handleScroll = () => {
      if (window.scrollY > 300) { 
        targetDiv.classList.add('fade-in-right');
        targetDiv.classList.remove('fade-out-right'); 
      } else {
        targetDiv.classList.remove('fade-in-right'); 
        targetDiv.classList.add('fade-out-right');
      }
    };
  
    window.addEventListener('scroll', handleScroll);
  
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  return (
    <div className="App">
      <div className='scroll-up' onClick={() => {window.scrollTo({top: 0, behavior: 'smooth'})}}>
        <img src={arrow} alt="Scroll to top" /> 
      </div>
      <BrowserRouter basename='/fresh-mint'>
        <Navbar />
        <Routes>
          <Route 
            path='/' 
            element={
              <React.Fragment>
                <Hero />
                <Steps />
                <Countdown />
                <Slider />
                <Accordion />
                <Newsletter />
              </React.Fragment>
            }>
          </Route>
          <Route path='/subscribe' element={<Subscribe />} />
          <Route path='/about' element={<About />} />
          <Route path='/recipes' element={<Recipes />} />
          <Route path='/contact' element={<Contact/>} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;