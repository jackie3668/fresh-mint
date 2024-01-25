import React from 'react'
import './Steps.css'
import step1 from '../../Asset/Home/step1.jpg'
import step2 from '../../Asset/Home/step2.jpg'
import step3 from '../../Asset/Home/step3.jpg'
import plus from '../../Asset/UI/step1.png'

const Steps = () => {
  return (
    <div className='steps'>
      <h1><span>Meal Kit Subscription</span>How Does it Work</h1>
      <div className="steps-container">
        <div className="step-wrapper">
          <img src={step1} alt="" />
          <div className="step-details">
            <h2><img src={plus} alt="" />You Choose Recipes</h2>
            <p>Explore our daily selection of easy, delicious, healthy recipes.</p>
          </div>
        </div>
        <div className="step-wrapper">
          <img src={step2} alt="" />
          <div className="step-details">
            <h2><img src={plus} alt="" />We Deliver Everything</h2>
            <p>We deliver all the ingredients to your doorstep every week.</p>
          </div>
        </div>
        <div className="step-wrapper">
          <img src={step3} alt="" />
          <div className="step-details">
            <h2><img src={plus} alt="" />Be the Master Chef</h2>
            <p>Follow the recipes and enjoy delicious and healthy homemade meals.</p>
          </div>
        </div>
       
      </div>
    </div>
  )
}

export default Steps