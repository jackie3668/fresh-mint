import React from 'react'
import './Address.css'

const Address = ({handleNextStep}) => {
  return (
    <div>Address
      <button onClick={handleNextStep}>next</button>
    </div>
  )
}

export default Address