import React from 'react'
import './Select.css'

const Select = ({handleNextStep}) => {
  return (
    <div>Select

      <button onClick={handleNextStep}>next</button>
    </div>
  )
}

export default Select