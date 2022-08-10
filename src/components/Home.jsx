import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import {Link} from 'react-scroll';


const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#0a192f]'>
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
      <p className='text-[#f41a85] '>Hey , My name is</p>
      <h1 className='text-4xl sm:text-7xl font-bold text-[#d4cacf]'>Nikhil Kapoor</h1>
      <h2 className='text-4xl sm:text-7xl font-bold text-[#908a8d]'>I am Full Time International Student at University of Windsor .</h2>
      <p className='text-[#908a8d] py-4 max-w-[700px]'>I love working on new Technologies and making projects with it.</p>
      <p className='text-[#908a8d] py-2 max-w-[700px]'>Go To Skills Section to see Technologies that I had worked with!</p>
        <div>
        <Link to="skills"  smooth={true} duration={500} >
        <button className='text-[#ffffff] group border-2 px-6 py-3 my-2 flex items-center
           hover:bg-[#f41a85] hover:border-[#f41a85]'>
          Skills
          <span className='group-hover:rotate-90 duration-300'>
          <HiArrowNarrowRight className='ml-2.5'/>
          </span>
          </button>
              </Link>
         
        </div>
      </div>

    </div>
  );
};

export default Home;