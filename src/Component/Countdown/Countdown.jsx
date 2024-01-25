import React, { useState, useEffect, useRef } from 'react';
import './Countdown.css';
import sale from '../../Asset/Home/sale1.png'
import sale1 from '../../Asset/Home/megaphone.png'

const Countdown = () => {
  const [timer, setTimer] = useState(86399); 
  const [prevDigits, setPrevDigits] = useState([]);

  let hours = Math.floor(timer / 3600).toString().padStart(2, '0');
  let minutes = Math.floor((timer % 3600) / 60).toString().padStart(2, '0');
  let seconds = (timer % 60).toString().padStart(2, '0');

  
  useEffect(() => {

    
    const timerInterval = setInterval(() => {
      setTimer(prev => prev - 1)
    }, 1000);

    return () => clearInterval(timerInterval)
  }, [])

  useEffect(() => {
    
    hours = Math.floor(timer / 3600).toString().padStart(2, '0');
    minutes = Math.floor((timer % 3600) / 60).toString().padStart(2, '0');
    seconds = (timer % 60).toString().padStart(2, '0');

    const currentDigits = [
      ...hours.toString().padStart(2, '0'),
      ...minutes.toString().padStart(2, '0'),
      ...seconds.toString().padStart(2, '0'),
    ].map(Number);

    if (prevDigits.length > 0) {
      currentDigits.forEach((digit, index) => {
        const card = document.getElementById(`${index}`)
        const cardTop = card.querySelector('.countdown-flip-card-top')
        const cardBot = card.querySelector('.countdown-flip-card-bot')
        if (digit !== prevDigits[index]) {
          if (card) {
            if (!card.classList.contains('flip-top')) {
              card.classList.add('flip-top');
            }
            setTimeout(() => {
              cardBot.innerHTML = digit === 0 ? "9" : `${digit - 1}`;
              card.style.setProperty('--before-content', `"${digit}"`);
              if (card.classList.contains('flip-top')) {
                card.classList.remove('flip-top');
              }
              cardTop.innerHTML = `${digit}` 
              if (!card.classList.contains('flip-bot')) {
                card.classList.add('flip-bot');
              }
              setTimeout(() => {
                if (card.classList.contains('flip-bot')) {
                  card.classList.remove('flip-bot');
                }
               
                card.style.setProperty('--after-content', digit === 0 ? `"9"` : `"${digit-1}"`);
                cardBot.innerHTML = `${digit}`  
              }, 500);  

            }, 500); 
          }
        } else {
          cardTop.innerHTML = `${digit}` 
          cardBot.innerHTML = `${digit}`  
        }
      });
    }
    setPrevDigits(currentDigits);

  }, [timer])


  return (
    <div className='countdown'>
      <img src={sale} alt="" />
      <p>TIME LEFT</p>
      <div className="countdown-timer">
        <div className="countdown-h">
          <div className="countdown-flip-card" id='0'>
            <div className="countdown-flip-card-top">2</div>
            <div className="countdown-flip-card-bot">2</div>
          </div>
          <div className="countdown-flip-card" id='1'>
            <div className="countdown-flip-card-top">4</div>
            <div className="countdown-flip-card-bot">4</div>
          </div>
        </div>

        <div className="countdown-m">
          <div className="countdown-flip-card" id='2'>
            <div className="countdown-flip-card-top">0</div>
            <div className="countdown-flip-card-bot">0</div>
          </div>
          <div className="countdown-flip-card" id='3'>
            <div className="countdown-flip-card-top">0</div>
            <div className="countdown-flip-card-bot">0</div>
          </div>
        </div>
        <div className="countdown-s">
          <div className="countdown-flip-card" id='4'>
            <div className="countdown-flip-card-top">0</div>
            <div className="countdown-flip-card-bot">0</div>
          </div>
          <div className="countdown-flip-card" id='5'>
            <div className="countdown-flip-card-top">0</div>
            <div className="countdown-flip-card-bot">0</div>
          </div>
        </div>
      </div>
      <button><span>SUBSCRIBE NOW</span></button>
    </div>
  );
}

export default Countdown;
