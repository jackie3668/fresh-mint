import React from 'react'
import './Contact.css'
import info1 from '../../Asset/UI/telephone-call.png'
import info2 from '../../Asset/UI/envelope.png'
import info3 from '../../Asset/UI/maps-and-flags.png'
import instagram from '../../Asset/UI/instagram.svg'
import facebook from '../../Asset/UI/facebook.svg'
import twitter from '../../Asset/UI/twitter.svg'
import discord from '../../Asset/UI/discord.svg'
import youtube from '../../Asset/UI/youtube.svg'
import pinterest from '../../Asset/UI/pinterest.svg'

const Contact = () => {

  const socialMediaLinks = [
    { platform: 'Instagram', url: 'https://www.instagram.com/blingbristles/', icon: instagram },
    { platform: 'Facebook', url: 'https://www.etsy.com/shop/BlingBristles?ref=usf_2020', icon: facebook },
    { platform: 'Pinterest', url: 'https://www.pinterest.com/blingedbrushes/blinged-brushes/', icon: pinterest },
    { platform: 'Twitter', url: 'https://twitter.com/BlingBristles', icon: twitter },
    { platform: 'YouTube', url: 'https://www.tiktok.com/@blingbristles?lang=en', icon: youtube },
    { platform: 'Discord', url: 'https://www.etsy.com/shop/BlingBristles?ref=usf_2020', icon: discord },
  ];

  const handleCheck = (e)=> {
    document.querySelector('.checked').classList.remove('checked')
    e.target.classList.add('checked')
  }
  return (
    <div className='contact'>
      <div className="left">
        <div className="header">
          <h2>Contact Information</h2>
          <h4>Got a question? Get in touch today!</h4>
        </div>
        <div className="contact-info">
          <div className="info-1">
            <img src={info1} alt="" />
            <p>+1 369 369 3639</p>
          </div>
          <div className="info-2">
            <img src={info2} alt="" />
            <p>support@freshmint.com</p>
          </div>
          <div className="info-3">
            <img src={info3} alt="" />
            <p>132 Fresh Street <br />New York, NY <br />10012</p>
          </div>
        </div>
        <div className="social-media">
          {socialMediaLinks.map((link, index) => (
            <a key={index} href={link.url} target='_blank' rel='noopener noreferrer'>
              <img src={link.icon} alt={link.platform} />
            </a>
          ))}
        </div>
      </div>
      <div className="right">
        <form>
          <div>
            <label>Name</label>
            <input type="text" />
          </div>
          <div>
            <label>Email</label>
            <input type="email" />
          </div>
          <div className='inquiry'>
            <h5>Inquiry Type</h5>
            <div>
              <div>
                <div className="checkbox checked" onClick={handleCheck}></div>
                <div className="text">General</div>
              </div>
              <div>
                <div className="checkbox" onClick={handleCheck}></div>
                <div className="text">Subscription</div>
              </div>
              <div>
                <div className="checkbox" onClick={handleCheck}></div>
                <div className="text">Billing</div>
              </div>
            </div>
            
          </div>
          <div>
            <label>Message</label>
            <textarea cols="30" rows="1"></textarea>
          </div>
          <div>
            <button>Submit</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Contact