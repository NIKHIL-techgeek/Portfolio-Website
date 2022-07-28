import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';

const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#0a192f]'>
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
      <p className='text-[#f41a85]'>Hey , My name is</p>
      <h1 className='text-4xl sm:text-7xl font-bold text-[#d4cacf]'>Nikhil Kapoor</h1>
      <h2 className='text-4xl sm:text-7xl font-bold text-[#908a8d]'>I am Full Time International Student.</h2>
      <p className='text-[#908a8d] py-4 max-w-[700px]'>I love working on new Technologies and make projects using it. 
        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Voluptatibus tenetur cum porro ab itaque ipsam animi consequatur id voluptatem modi officia iusto, 
        facere, debitis repellendus ad tempora quibusdam accusantium accusamus harum reprehenderit commodi</p>
        <div>
          <button className='text-[#ffffff] group border-2 px-6 py-3 my-2 flex items-center
           hover:bg-[#f41a85] hover:border-[#f41a85]'>
          View Work
          <span className='group-hover:rotate-90 duration-300'>
          <HiArrowNarrowRight className='ml-2.5'/>
          </span>
          </button>
        </div>eee
      </div>

    </div>
  );
};

export default Home;