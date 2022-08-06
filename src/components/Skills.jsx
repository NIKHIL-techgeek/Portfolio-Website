import React from 'react'
import c_logo from '../assets/c_logo.png'
import cplus_Logo from '../assets/cplus.png'
import css from '../assets/css.png'
import htmll from '../assets/htmll.png'
import java from '../assets/java.png'
import javascript from '../assets/javascript.png'
import react from '../assets/react.png'
import tailwind from '../assets/tailwind.png' 
import github from '../assets/github.png'
import python from '../assets/python.png'
const Skills = () => {
  return (
    <div name='skills' className='bg-[#0a192f] text-gray-300 w-full h-screen'>
        {/* container */}
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div>
                <p className='text-4xl font-bold inline border-b-4 border-pink-600 '>
                    Skills
                </p>
                <p className='py-4'>
                    The Technologies I had worked with
                </p>
            </div>
            <div className='w-full grid grid-cols-2 sm:gird-cols-4 gap-4 text-center py-8'>
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-300 hover:shadow-[#637d9c]'>
                <div>
                <a href='https://reactjs.org/'>
                <img className='w-20 mx-auto' src={react} alt="htmll icon" />
                <p className='my-4'>REACT</p>
                </a>
                </div>
            </div>
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-300 hover:shadow-[#637d9c]'>
                <div>
                <a href='https://developer.mozilla.org/en-US/docs/Web/CSS'>
                <img className='w-20 mx-auto' src={css} alt="htmll icon" />
                <p className='my-4'>CSS</p>
                </a>
                </div>
            </div>
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-300 hover:shadow-[#637d9c]'>
                <div>
                <a href='https://www.w3schools.com/html/'>
                <img className='w-20 mx-auto' src={htmll}  />
                <p className='my-4'>HTML</p>
                </a>
                </div>
            </div>
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-300 hover:shadow-[#637d9c]'>
                <div >
                <a href='https://www.w3schools.com/js/'>
                <img className='w-20 mx-auto' src={javascript} />
                <p className='my-4'>JAVASCRIPT</p>
                </a>
                </div>
            </div>
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-300 hover:shadow-[#637d9c]'>
                <div className='my-auto'>
                <a href='https://tailwindcss.com/'>
                <img className='w-20 mx-auto' src={tailwind}/>
                <p className='my-7'>TAILWIND</p>
                </a>
                </div>
            </div>
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-300 hover:shadow-[#637d9c]'>
                <div className='my-4'>
                <a href='https://www.tutorialspoint.com/cprogramming/index.htm'>
                <img className='w-20 mx-auto' src={c_logo} />
                <p className='my-4'>C</p>
                </a>
                </div>
            </div>
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-300 hover:shadow-[#637d9c]'>
                <div>
                <a href='https://cplusplus.com/doc/tutorial/'>
                <img className='w-20 mx-auto' src={cplus_Logo} alt="htmll icon" />
                <p className='my-4'>C++</p>
                </a>
                </div>
            </div>
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-300 hover:shadow-[#637d9c]'>
                <div>
                <a href='https://github.com/'>
                <img className='w-20 mx-auto' src={github} alt="htmll icon" />
                <p  className='my-4'>GITHUB</p>
                </a>
                </div>
            </div>
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-300 hover:shadow-[#637d9c]'>
                <div>
                <a href='https://dev.java/'>
                <img className='w-10 mx-auto py-1' src={java} alt="htmll icon" />
                JAVA
                </a>
                </div>
            </div>
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-300 hover:shadow-[#637d9c]'>
                <div className='my-4'>
                <a href='https://www.python.org/'>
                <img className='w-14 mx-auto py-2' src={python} alt="htmll icon" />
                PYTHON
                </a>
                </div>
            </div>
            
            
        </div>
    </div>
    </div>
  )
}

export default Skills