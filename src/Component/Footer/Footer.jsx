import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'
import instagram from '../../Asset/UI/instagram.svg'
import facebook from '../../Asset/UI/facebook.svg'
import twitter from '../../Asset/UI/twitter.svg'
import discord from '../../Asset/UI/discord.svg'
import youtube from '../../Asset/UI/youtube.svg'
import pinterest from '../../Asset/UI/pinterest.svg'
import arrow from '../../Asset/UI/arrow-right.png'
import logo1 from '../../Asset/UI/mc.svg'
import logo2 from '../../Asset/UI/visa_logo.svg'
import logo3 from '../../Asset/UI/paypal.svg'
import logo4 from '../../Asset/UI/discovernet.svg'
import app1 from '../../Asset/UI/playstore-badge-en.webp'
import app2 from '../../Asset/UI/appstore-badge-en.png'

const Footer = () => {
  const socialMediaLinks = [
    { platform: 'Instagram', url: 'https://www.instagram.com/blingbristles/', icon: instagram },
    { platform: 'Facebook', url: 'https://www.etsy.com/shop/BlingBristles?ref=usf_2020', icon: facebook },
    { platform: 'Pinterest', url: 'https://www.pinterest.com/blingedbrushes/blinged-brushes/', icon: pinterest },
    { platform: 'Twitter', url: 'https://twitter.com/BlingBristles', icon: twitter },
    { platform: 'YouTube', url: 'https://www.tiktok.com/@blingbristles?lang=en', icon: youtube },
    { platform: 'Discord', url: 'https://www.etsy.com/shop/BlingBristles?ref=usf_2020', icon: discord },
  ];

  const handleDropdown = (e) => {
    const targetDiv = e.target.parentNode.previousElementSibling.querySelector('ul')
    targetDiv.classList.toggle('hidden')
    e.target.classList.toggle('close')
  }

  return (
    <div className='footer'>
      <div className="footer-top">
        <div className="footer-wrapper">
          <div className="footer-freshmint">
            <div className="footer-content">
              <h3>FreshMint</h3>
              <ul className='hidden'>
                <li><Link style={{ textDecoration: 'none'}} onClick={()=>{window.scrollTo(0, 0)}} to='/'>Affiliate Program</Link></li>
                <li><Link style={{ textDecoration: 'none'}} onClick={()=>{window.scrollTo(0, 0)}} to='/'>Promotions</Link></li>
                <li><Link style={{ textDecoration: 'none'}} onClick={()=>{window.scrollTo(0, 0)}} to='/'>Student Discount</Link></li>
                <li><Link style={{ textDecoration: 'none'}} onClick={()=>{window.scrollTo(0, 0)}} to='/'>Blog</Link></li>
                <li><Link style={{ textDecoration: 'none'}} onClick={()=>{window.scrollTo(0, 0)}} to='/'>Recipes</Link></li>
              </ul>
            </div>
            <div className="footer-dropdown">
              <img src={arrow} onClick={handleDropdown} alt="" />
            </div>
          </div>
          <div className="footer-ourcompany">
            <div className="footer-content">
              <h3>Our Company</h3>
              <ul className='hidden'>
                <li><Link style={{ textDecoration: 'none'}} onClick={()=>{window.scrollTo(0, 0)}} to='/'>FreshMint Group</Link></li>
                <li><Link style={{ textDecoration: 'none'}} onClick={()=>{window.scrollTo(0, 0)}} to='/'>Sustainability</Link></li>
                <li><Link style={{ textDecoration: 'none'}} onClick={()=>{window.scrollTo(0, 0)}} to='/'>Press</Link></li>
                <li><Link style={{ textDecoration: 'none'}} onClick={()=>{window.scrollTo(0, 0)}} to='/'>Careers</Link></li>
                <li><Link style={{ textDecoration: 'none'}} onClick={()=>{window.scrollTo(0, 0)}} to='/'>Partners</Link></li>
              </ul>
            </div>
            <div className="footer-dropdown">
              <img src={arrow} onClick={handleDropdown} alt="" />
            </div>
          </div>
          <div className="footer-help">
            <div className="footer-content">
              <h3>Help</h3>
              <ul className='hidden'>
                <li><Link style={{ textDecoration: 'none'}} onClick={()=>{window.scrollTo(0, 0)}} to='/'>Help Center</Link></li>
                <li><Link style={{ textDecoration: 'none'}} onClick={()=>{window.scrollTo(0, 0)}} to='/'>Contact Us</Link></li>
                <li><Link style={{ textDecoration: 'none'}} onClick={()=>{window.scrollTo(0, 0)}} to='/'>Live Chat</Link></li>
                <li><Link style={{ textDecoration: 'none'}} onClick={()=>{window.scrollTo(0, 0)}} to='/'>Order Status</Link></li>
                <li><Link style={{ textDecoration: 'none'}} onClick={()=>{window.scrollTo(0, 0)}} to='/'>Feedback</Link></li>
              </ul>
            </div>
            <div className="footer-dropdown">
              <img src={arrow} onClick={handleDropdown} alt="" />
            </div>
          </div>
          <div className="footer-payment">
            <div className="footer-content">
              <h3>Payment Method</h3>
              <ul>
                <div className="payment-logos">
                  <img className='logo' src={logo1} alt="" />
                  <img className='logo' src={logo2} alt="" />
                  <img className='logo' src={logo3} alt="" />
                  <img className='logo' src={logo4} alt="" />
                </div>
              </ul>
            </div>
            <div className="footer-dropdown">
              <img src={arrow} onClick={handleDropdown} alt="" />
            </div>
          </div>
          <div className="footer-app">
            <div className="footer-content">
              <h3>Download Our App</h3>
              <ul className='hidden'>
                <img src={app1} alt="" />
                <img src={app2} alt="" />
              </ul>
            </div>
            <div className="footer-dropdown">
              <img src={arrow} onClick={handleDropdown} alt="" />
            </div>
          </div>
        </div>

        <div className="footer-socials">
          {socialMediaLinks.map((link, index) => (
            <a key={index} href={link.url} target='_blank' rel='noopener noreferrer'>
              <img src={link.icon} alt={link.platform} />
            </a>
          ))}
        </div>
      </div>

      <div className="footer-bot">
        <p><span>&copy; 2024 FreshMint. </span>All rights reserved. Unauthorized reproduction, copying, or redistribution is prohibited. Your use of this site signifies your agreement to our terms and conditions and privacy policy.</p>
      </div>
    </div>
  )
}

export default Footer