import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
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
        <h1 className='logo'><Link to='/'>FreshMint <img src={logo} alt="" /></Link></h1>
        <img 
          src={menuHidden ? close : menu} 
          className={menuHidden ? '' : 'close'}
          onClick={handleMenuToggle}
          id='mobile'
        />
      </div>
      <ul className='hidden'>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/about'>About</Link></li>        
        <li><Link to='/recipes'>Recipes</Link></li>      
        <li><Link to='/contact'>Contact</Link></li>      
        <li><Link to='/subscribe'>Subscribe</Link></li>
      </ul>
    </nav>
  )
}

export default Navbar