import React from 'react'
import './Register.css'
const Register = ({handleNextStep}) => {
  return (
    <div>Register
      <button onClick={handleNextStep}>next</button>
    </div>
  )
}

export default Register