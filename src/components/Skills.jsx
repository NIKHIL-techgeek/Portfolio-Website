import React from 'react'
import c_logo from '../assets/c_logo.png'
import cplus_Logo from '../assets/cplus.png'
import css from '../assets/css.png'
import htmll from '../assets/htmll.png'
import java from '../assets/java.png'
import javascript from '../assets/javascript.png'
import react from '../assets/react.png'
import tailwind from '../assets/tailwind.png' 

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
            <div className='w-full grid grid-cols-2'>
                <img className='w-20 mx-auto' src={htmll} alt="htmll icon" />
                <p>HTML</p>
            </div>
        </div>
    </div>
  )
}

export default Skills