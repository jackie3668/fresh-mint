import React from 'react'
import './Testimonial.css'
import avatar1 from '../../Asset/Home/avatar1.png'
import avatar2 from '../../Asset/Home/avatar2.png'
import avatar3 from '../../Asset/Home/avatar3.png'
import avatar4 from '../../Asset/Home/avatar4.png'
import avatar5 from '../../Asset/Home/avatar5.png'

const Testimonial = () => {
  return (
    <div className='testimonial'>
      <div className="testimonial-wrapper">
        <div className="title">
          <img src={avatar1} alt="Black Female" />
          <div className='title-text'>
            <h4>Lisa Hamilton</h4>
            <p>Verified Customer</p>
          </div>
        </div>
        <div className="summary">
          Game-changer in making mealtime simple.
        </div>
        <div className="details">
        FreshMint redefines the dining experience with unmatched convenience, exceptional taste, and unbeatable affordability, sparking a true culinary revolution. It's the perfect solution for busy lifestyles, offering variety and quality without the hassle.
      </div>
      </div>
      <div className="testimonial-wrapper">
        <div className="title">
          <img src={avatar2} alt="White Male" />
          <div className='title-text'>
            <h4>Michael Smith</h4>
            <p>Verified Customer</p> 
          </div>
        </div>
        <div className="summary">
          Simple, affordable, delightful.
        </div>
        <div className="details">
          Affordable meal kits and easy recipes transform dinner, enriching lives and promoting health.
        </div>
      </div>
      <div className="testimonial-wrapper">
        <div className="title">
          <img src={avatar3} alt="Asian Male" />
          <div className='title-text'>
            <h4>Kevin Tan</h4>
            <p>Verified Customer</p> 
          </div>
        </div>
        <div className="summary">
          Easy and delightful.
        </div>
        <div className="details">
          FreshMint simplifies dining with affordability and diverse flavors. A dining revolution. 
        </div>
      </div>
      <div className="testimonial-wrapper">
        <div className="title">
          <img src={avatar4} alt="White Female" />
          <div className='title-text'>
            <h4>Sarah Johnson</h4>
            <p>Verified Customer</p> 
          </div>
        </div>
        <div className="summary">
          Easy, affordable, and delicious.
        </div>
        <div className="details">
          FreshMint completely eradicates the hassles of meal planning by providing nutritious and budget-friendly meal kits, making it an essential service for anyone. It's a must-try solution that simplifies life, promotes healthy eating, and accommodates all dietary preferences. Their commitment to quality and convenience is unparalleled.
        </div>
      </div>
      <div className="testimonial-wrapper">
        <div className="title">
          <img src={avatar5} alt="Black Male" />
          <div className='title-text'>
            <h4>James Williams</h4>
            <p>Verified Customer</p> 
          </div>
        </div>
        <div className="summary">
          FreshMint has transformed our dinner times!
        </div>
        <div className="details">
          Subscribing to FreshMint has been life-changing, offering hassle-free, and healthy meals perfectly for our fast-paced lives. It comes highly recommended for anyone seeking culinary variety without the time investment. Their diverse menu caters to all tastes, ensuring there's always something exciting to try. 
        </div>
      </div>
    </div>
  
  )
}

export default Testimonial