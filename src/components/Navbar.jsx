import React ,{useState} from 'react'
import {FaBars , FaTimes , FaGithub , FaLinkedin} from 'react-icons/fa'
import {HiOutlineMail} from 'react-icons/hi'
import {BsFillPersonLinesFill} from 'react-icons/bs'
import logo from '../assets/logo.svg'
import {Link} from 'react-scroll';


function Navbar() {
  const [nav , setNav] = useState(false);
  const handleClick = () => setNav(!nav);
  return (
    <div className='fixed w-full h-[55px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300 '>
      <div className='bg-[#c5cad1]'>
          <img src={logo} alt='logo' style={{width:"60px"}} />
      </div>
      {/* menu */}
            <ul className='hidden md:flex'>
              <li className='hover:underline  hover:text-pink-600'>
              <Link to="home"  smooth={true} duration={500} >
                   Home
              </Link>
              </li>
              <li className='hover:underline  hover:text-pink-600'>
              <Link to="about"  smooth={true} duration={500} >
                   About
              </Link>
              </li>
              <li className='hover:underline  hover:text-pink-600'>
              <Link to="skills"  smooth={true} duration={500} >
                   Skills
              </Link>
              </li>
              <li className='hover:underline  hover:text-pink-600'>
              <Link to="contact"  smooth={true} duration={500} >
                   Contact
              </Link>
              </li>
            </ul>

      
          {/* Hamburger */}
          <div  onClick={handleClick} className='md:hidden z-10'>
            {!nav ? <FaBars/> : <FaTimes/>}
          </div>

          {/* Mobile menu */}
            <ul className={!nav ? 'hidden' : 'absolute top-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'}>
            <li className='py-6 text-4xl   hover:underline hover:text-pink-600'>
              <Link onClick={handleClick} to="home"  smooth={true} duration={500} >
                   Home
              </Link>
              </li>
              <li className='py-6 text-4xl  hover:underline hover:text-pink-600'>
              <Link  onClick={handleClick} to="about"  smooth={true} duration={500} >
                   About
              </Link>
              </li>
              <li className='py-6 text-4xl  hover:underline hover:text-pink-600'>
              <Link  onClick={handleClick} to="skills"  smooth={true} duration={500} >
                   Skills
              </Link>
              </li>
              <li className='py-6 text-4xl  hover:underline hover:text-pink-600'>
              <Link  onClick={handleClick} to="contact"  smooth={true} duration={500} >
                   Contact
              </Link>
              </li>
            </ul>

          {/* Social Icons */}
          <div className=' hidden lg:flex fixed flex-col top-[35%] left-0'>
            <ul>
              <li className='w-[160px] h-[50px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
                <a className='flex justify-between w-full text-gray-100' href='https://www.linkedin.com/in/nikhilkapoor2002?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BZX7EfotYQ0ypMWSdWQR52g%3D%3D'>LinkedIn <FaLinkedin size={30}/></a>
              </li>
              <li className='w-[160px] h-[50px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#363535]'>
                <a className='flex justify-between w-full text-gray-100' href='https://github.com/NIKHIL-techgeek'>GitHub <FaGithub size={30}/></a>
              </li>
              <li className='w-[160px] h-[50px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#ac8ce3] '>
                <a className='flex justify-between w-full text-gray-100' href='mailto:nikhilkapoor.aus21@gmail.com'>Email <HiOutlineMail size={30}/></a>
              </li>
              <li className='w-[160px] h-[50px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#7c738b]'>
                <a className='flex justify-between w-full text-gray-100' href='https://app.luminpdf.com/viewer/63ca3cf97c031d4333569dd8'>Resume <BsFillPersonLinesFill size={30}/></a>
              </li>
            </ul>
          </div>
    </div>
  )
}

export default Navbar