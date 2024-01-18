import React, { useEffect, useState } from 'react'
import './Navbar.css'
import logo from '../../Asset/UI/peppermint.png'
import menu from '../../Asset/UI/hamburger.png'
import close from '../../Asset/UI/close.png'

const Navbar = () => {
  const [menuHidden, setMenuHidden] = useState(true)

  useEffect(() => {
    const targetDiv = document.querySelector('nav ul')
    if (!menuHidden) {
      targetDiv.classList.add('fade-in-right')
      targetDiv.classList.remove('fade-out-right')
    } else {
      targetDiv.classList.remove('fade-in-right')
      targetDiv.classList.add('fade-out-right')
    }
  }, [menuHidden])

  return (
    <nav>
      <div className='nav-logo'>
        <h1 className='logo'>FreshMint <img src={logo} alt="" /></h1>
        <img 
          src={menuHidden ? menu : close} 
          className={menuHidden ? '' : 'close'}
          onClick={()=>{setMenuHidden(!menuHidden)}}
          id='mobile'
        />
      </div>
      <ul className={menuHidden ? '' : 'active'}>
        <li>Home</li>
        <li>About</li>        
        <li>Recipes</li>
        <li>Subscribe</li>
        <li>Contact Us</li>
      </ul>
    </nav>
  )
}

export default Navbar