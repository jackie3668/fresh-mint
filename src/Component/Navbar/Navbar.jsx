import React, { useEffect, useState } from 'react'
import './Navbar.css'
import logo from '../../Asset/UI/peppermint.png'
import menu from '../../Asset/UI/hamburger.png'
import close from '../../Asset/UI/close.png'

const Navbar = () => {
  const [menuHidden, setMenuHidden] = useState(false)

  const handleMenuToggle = () => {
    const targetDiv = document.querySelector('nav ul');
    if (!menuHidden) {
      targetDiv.classList.add('fade-in-menu');
      targetDiv.classList.remove('fade-out-menu');
      targetDiv.classList.remove('hidden');
    } else {
      targetDiv.classList.remove('fade-in-menu');
      targetDiv.classList.add('fade-out-menu');
      
      setTimeout(() => {
        targetDiv.classList.add('hidden'); 
        targetDiv.classList.remove('fade-out-menu'); 
      }, 300); 
    }    

    setTimeout(() => {
      setMenuHidden(!menuHidden);
    }, 300); 
  };
  

  return (
    <nav>
      <div className='nav-logo'>
        <h1 className='logo'>FreshMint <img src={logo} alt="" /></h1>
        <img 
          src={menuHidden ? close : menu} 
          className={menuHidden ? '' : 'close'}
          onClick={handleMenuToggle}
          id='mobile'
        />
      </div>
      <ul className='hidden'>
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