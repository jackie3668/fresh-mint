import React from 'react'
import './Register.css'
import arrow from '../../Asset/UI/arrow.png'

const Register = ({handleNextStep, price, count}) => {
  return (
    <div className='register'>
      <div className="address">
        <h3>Delivery Address</h3>
        <form>
          <div>
            <label htmlFor="name">*First Name:</label>
            <input
              type="text"
              id="first-name"
              name="first-name"
              required
            />
          </div>
          <div>
            <label htmlFor="name">*Last Name:</label>
            <input
              type="text"
              id="last-name"
              name="last-name"
              required
            />
          </div>
          <div>
            <label htmlFor="street">*Street Address:</label>
            <input
              type="text"
              id="street"
              name="street"
              required
            />
          </div>
          <div>
            <label htmlFor="street">Unit:</label>
            <input
              type="text"
              id="unit"
              name="unit"
              required
            />
          </div>
          <div>
            <label htmlFor="city">*City:</label>
            <input
              type="text"
              id="city"
              name="city"
              required
            />
          </div>
          <div>
            <label htmlFor="state">*State:</label>
            <input
              type="text"
              id="state"
              name="state"
              required
            />
          </div>
          <div>
            <label htmlFor="zip">*Zip Code:</label>
            <input
              type="text"
              id="zip"
              name="zip"
              required
            />
          </div>
          <div>
            <label htmlFor="zip">Phone Number:</label>
            <input
              type="tel"
              id="num"
              name="num"
            />
          </div>
        </form>
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

export default Register