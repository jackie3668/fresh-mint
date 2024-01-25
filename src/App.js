import './App.css';
import Hero from './Component/Hero/Hero';
import Navbar from './Component/Navbar/Navbar';
import arrow from './Asset/UI/upload.png'
import { useEffect } from 'react';
import Steps from './Component/Steps/Steps';
import Countdown from './Component/Countdown/Countdown';
import Slider from './Component/Slider/Slider';

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
      <div className='scroll-up'>
        <img src={arrow} />
      </div>
      <Navbar />
      <Hero />
      <Steps />
      <Countdown />
      <Slider />
      <Steps />
    </div>
  );
}

export default App;
