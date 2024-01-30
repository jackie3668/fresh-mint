import React from 'react'
import './Newsletter.css'

const Newsletter = () => {
  return (
    <div className='newsletter'>
      <div className="newsletter-banner"></div>
      <div className="newsletter-signup">
        <h2><span>Want to stay in touch?</span>Subscribe for Exclusive Offers & More</h2>
        <p>Sign up for our newsletter, and you’ll be the first to receive exclusive offers, new product announcements, and lifestyle content from our wellness experts.</p>
        <div className="newsletter-signup-wrapper">
          <input type="email" placeholder='Enter your email'/>
          <button>Subscribe</button>
        </div>
        <p className='newsletter-fine-print'>You can unsubscribe anytime</p>
      </div>
    </div>
  )
}

export default Newsletter