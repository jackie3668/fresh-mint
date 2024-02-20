import React from 'react'
import './Payment.css'
import arrow from '../../Asset/UI/arrow.png'
import logo1 from '../../Asset/UI/mc.svg'
import logo2 from '../../Asset/UI/visa_logo.svg'
import logo3 from '../../Asset/UI/paypal.svg'
import logo4 from '../../Asset/UI/discovernet.svg'

const Payment = ({handleNextStep, price, count}) => {
  const handleCheck = (e) => {
    if (!e.target.classList.contains('checked')) {
      document.querySelector('.checked').classList.remove('checked')
      e.target.classList.add('checked')
    }
  }

  return (
    <div className='register'>
      <div className="payment">
        <h3>Payment Method</h3>
        <div className="card">
          <div>
            <h4><div className="checkbox checked"  onClick={handleCheck}></div>Credit or Debit Card</h4>
            <div>
              <img src={logo1} alt="" />
              <img src={logo2} alt="" />
              <img src={logo4} alt="" />
            </div>
          </div>
          <form>
            <div>
              <label htmlFor="name">*Card Number:</label>
              <input
                type="text"
                id="card-num"
                name="card-num"
                required
              />
            </div>
            <div>
              <label htmlFor="name">*Expiration Date:</label>
              <input
                type="text"
                id="last-name"
                name="last-name"
                required
              />
            </div>
            <div>
              <label htmlFor="street">*CVC code:</label>
              <input
                type="text"
                id="street"
                name="street"
                required
              />
            </div>
          </form>
        </div>
        <div className="paypal">
          <h4><div className="checkbox" onClick={handleCheck}></div>Pay with PayPal</h4>
          <img src={logo3} alt="" />
        </div>
      </div>
      <div className="summary">
        <h3>Order Summary</h3>
        <div>
          <h4>{count} meals per week</h4>
          <p>{count} servings at <span>${price.toFixed(2)}</span> <span>${(price/2).toFixed(2)}</span> per serving</p>
        </div>
        <hr />
        <div>
          <span>Box price</span>
          <span>${((price * count)).toFixed(2)}</span>
        </div>
        <div>
          <span>Shipping</span>
          <span>$9.99</span>
        </div>
        <div>
          <span>Discount</span>
          <span>-${((price * count)/2).toFixed(2)}</span>
        </div>
        <div className='promo-wrapper'>
          <p onClick={(e) => {
            if (document.querySelector('.promo')) {
              document.querySelector('.promo').classList.toggle('hidden')
            }
            e.target.closest('.promo-wrapper').querySelector('img').classList.toggle('active')
          }}><span>Apply promo code</span> <img src={arrow} alt="" /></p>
          <div className="promo hidden">
            <input type="text" placeholder='Promo code' />
            <button>Apply</button>
          </div>
        </div>
        <hr />
        <div>
          <span>First box total</span>
          <span>${((price * count)/2+9.99).toFixed(2)}</span>
        </div>
        <button onClick={handleNextStep}>Next</button>
      </div>
    </div>
  )
}

export default Payment