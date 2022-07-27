import React from 'react'
import {FaBars , FaTimes} from 'react-icons/fa'
import logo from '../assets/logo.svg'
function Navbar() {
  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300'>
      <div>
          <img src={logo} alt='logo' style={{width:"60px"}}/>
      </div>
      {/* menu */}
      
            <ul className='hidden md:flex'>
              <li>Home</li>
              <li>About</li>
              <li>Skills</li>
              <li>Work</li>
              <li>Contact</li>
            </ul>
        
          {/* Hamburger */}
          <div className='md:hidden'>
            <FaBars/>
          </div>
          {/* Mobile menu */}
            <ul className='absolute top-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'>
            <li>Home</li>
              <li>About</li>
              <li>Skills</li>
              <li>Work</li>
              <li>Contact</li>
            </ul>

          {/* Social Icons */}
          <div className='hidden'></div>
    </div>
  )
}

export default Navbar