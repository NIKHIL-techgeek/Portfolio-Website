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
    <div name='skills' className='bg-[#0a192f] text-gray-300'>
        {/* container */}
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div>
                <p className='text-4xl font-bold inline border-b-4 border-pink-600 '>
                    Experience
                </p>
                <p className='py-4'>
                    The Technologies I had worked with
                </p>
            </div>
            <div className='w-full grid grid-cols-2 sm:gird-cols-4 gap-4 text-center py-8'>
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-300'>
                <img className='w-20 mx-auto' src={react} alt="htmll icon" />
                <p className='my-4'>REACT</p>
            </div>
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-300'>
                <img className='w-20 mx-auto' src={css} />
                <p className='my-4'>CSS</p>
            </div>
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-300'>
                <img className='w-20 mx-auto' src={javascript} />
                <p className='my-4'>JAVASCRIPT</p>
            </div>
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-300'>
                <img className='w-20 mx-auto' src={htmll} />
                <p className='my-4'>HTML</p>
            </div>
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-300'>
                <img className='w-20 mx-auto' src={c_logo} />
                <p className='my-4'>C</p>
            </div>
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-300'>
                <img className='w-20 mx-auto' src={cplus_Logo}  />
                <p className='my-4'>C++</p>
            </div>
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-300'>
                <img className='w-20 mx-auto' src={github} />
                <p className='my-4'>GITHUB</p>
            </div>
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-300'>
                <img className='w-20 mx-auto' src={java}  />
                <p className='my-4'>JAVA</p>
            </div>
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-300'>
                <img className='w-20 mx-auto' src={tailwind}/>
                <p className='my-4'>TAIL WIND</p>
            </div>
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-300'>
                <img className='w-20 mx-auto' src={python}/>
                <p className='my-4'>PYTHON</p>
            </div>
            </div>
            
        </div>
    </div>
  )
}

export default Skills