import React from 'react'
import './Payment.css'
const Payment = ({handleNextStep}) => {
  return (
    <div>Payment
      <button onClick={handleNextStep}>next</button>
    </div>
  )
}

export default Payment