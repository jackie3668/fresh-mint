import React from 'react'
import './Hero.css'
import logo from '../../Asset/UI/peppermint.png'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <div className='hero'>
      <div className="hero-img">
        <div className="hero-content">
          <h3>
            <div className="dot"></div>
            <div className="dot"></div>
            <div className="dot"></div>
            <div className="dot"></div>  
            FRESH MEALS
            <div className="dot"></div> 
            <div className="dot"></div> 
            <div className="dot"></div> 
            <div className="dot"></div> 
          </h3>
          <h3><span>Award Winning</span> Culinary Experience</h3>
          <h1>Refresh Your Plate <br />with <span className='logo'>FreshMint <img src={logo} alt="" /></span></h1>
          <h6>Healthy Eating<div className="dot"></div>Innovative Recipes<div className="dot"></div>Clean Diet</h6>
          <button><span><Link to='/subscribe'>SUBSCRIBE</Link></span></button>
        </div>
      </div>
    </div>
  )
}

export default Hero