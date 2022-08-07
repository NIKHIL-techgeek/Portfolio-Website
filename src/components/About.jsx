import React from 'react'

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#0a192f] text-gray-300'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 pl-4'>
            <p className='text-4xl font-bold inline border-b-4 border-pink-600'>
              About
            </p>
          </div>
          <div></div>
          </div>
          <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
            <div className='sm:text-right text-4xl font-bold'>
              <p>Hey , Thank You for Stopping by.</p>
            </div>
            <div>
              <p>I am an aspiring software engineer. I have a keen interest in web development and I recently started working on React JS which is my first project using react components. I am also well acquainted with the knowledge of Tail Wind CSS. I am eagerly willing to learn and work upon the latest technologies.</p>  
            </div>
          </div>
      </div>
    </div>
  )
}

export default About