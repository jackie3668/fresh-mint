import React from 'react'
import './Pick.css'

const Pick = ({handleNextStep}) => {
  return (
    <div>Pick
      <button onClick={handleNextStep}>next</button>
    </div>
  )
}

export default Pick