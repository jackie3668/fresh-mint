import React, { useEffect, useState } from 'react'
import './Select.css'
import option1 from '../../Asset/Subscribe/option1.png'
import option2 from '../../Asset/Subscribe/option2.png'
import option3 from '../../Asset/Subscribe/option3.png'
import option4 from '../../Asset/Subscribe/option4.png'
import option5 from '../../Asset/Subscribe/option5.png'
import option6 from '../../Asset/Subscribe/option6.png'
import check from '../../Asset/UI/check.png'

const Select = ({handleNextStep, setPrice, price, setCount, count}) => {
  const [selectedOptions, setSelectedOptions] = useState(["Chef's Choice"]);
  const handleSelect = (e) => {
    const optionText = e.target.closest('.option-wrapper').querySelector('h4').innerText; // Use innerText for better practice

    setSelectedOptions(prev => {
      if (prev.includes(optionText)) {
        return prev.filter(item => item != optionText);
      } else {
        return [...prev, optionText];
      }
    });
    e.target.closest('.option-wrapper').classList.toggle('checked')
  }

  const mealOptions = {
    6: 20.00,
    8: 18.50,
    10: 17.00,
    12: 15.83,
    14: 15.00,
    18: 13.33
  };
  
  

  const handleCountChange = (e) => {
    const curChecked = document.querySelector('.meal-count-container .checked')
    curChecked.classList.toggle('checked')
    e.target.classList.toggle('checked')
    setCount(parseInt(e.target.innerHTML, 10))
    setPrice(mealOptions[count]); 
  }
  return (
    <div className='select'>
      <h2>Build Your First Box</h2>
      <h5>You can pause, cancel or change your plan at any time.</h5>
      <div className="select-container">
        <div className="select-wrapper">
          <div className="select-left">
            <h3>1. Choose your preferences</h3>
            <p>Your preferences will help us show you the most relevant meals first. You will still have access to all the meals each week.</p>
            <div className="diet-preferences">
              <div className='option-wrapper checked' onClick={handleSelect}>
                <img src={check} alt="" />
                <img src={option1} alt="" />
                <h4>Chef's Choice</h4>
              </div>
              <div className='option-wrapper' onClick={handleSelect}>                
                <img src={check} alt="" />
                <img src={option6} alt="" />
                <h4>Veggie Lover</h4>
              </div>
              <div className='option-wrapper' onClick={handleSelect}>                <img src={check} alt="" />
                <img src={option2} alt="" />
                <h4>Keto</h4>
              </div>
              <div className='option-wrapper' onClick={handleSelect}>                <img src={check} alt="" />
                <img src={option4} alt="" />
                <h4>Flex Fun</h4>
              </div>
              <div className='option-wrapper' onClick={handleSelect}>                <img src={check} alt="" />
                <img src={option3} alt="" />
                <h4>Calorie Smart</h4>
              </div>
              <div className='option-wrapper' onClick={handleSelect}>                <img src={check} alt="" />
                <img src={option5} alt="" />
                <h4>Protein Power</h4>
              </div>
            </div>
            <p>A wide variety of well-balanced, chef-prepared meals with whole-food ingredients to fit any lifestyle</p>
          </div>
          <div className="select-right">
            <h3>2. Select meals per week</h3>
            <div>
              <p>Meals per week</p>
              <div className="meal-count-container">
                <div onClick={handleCountChange}>6</div>
                <div className='checked' onClick={handleCountChange}>8</div>
                <div onClick={handleCountChange}>10</div>
                <div onClick={handleCountChange}>12</div>
                <div onClick={handleCountChange}>14</div>
                <div onClick={handleCountChange}>18</div>
              </div>
              <div className="plan-details">
                <div className="plan-preferences"><span>You chose: </span> {selectedOptions.join(', ')}
                </div>
                <div className="plan-count">{count} meals per week</div>
                <div className="plan-price">
                  <p>Box price</p>
                  <p>${(price*count).toFixed(2)}</p>
                </div>
                <div className="plan-perserving">
                  <p>Price per meal</p>
                  <p><span>${price.toFixed(2)}</span><span>${(price/2).toFixed(2)}</span></p>
                </div>
                <div className="plan-total">
                  <p>First delivery total</p>
                  <p><span>${(price*count).toFixed(2)}</span><span>${(price*count/2).toFixed(2)}</span></p>
                </div>              
              </div>
            </div>    
          </div>
        </div>
        <button onClick={handleNextStep}>Next</button>
      </div>
    </div>
  )
}

export default Select