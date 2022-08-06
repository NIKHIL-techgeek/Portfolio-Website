import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen bg-[#0a192f] flex justify-center items-center p-4 text-gray-300 '>
         <form method="POST" action="https://getform.io/f/03057a8b-f250-438b-bc6f-8a766f3a7816" className='flex flex-col max-w-[600px] w-full '>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-pink-600 '>Contact Me</p>
                <p className='py-4'>Submit your Details!</p>
            </div>
            <input className='bg-[#6e717d] p-2 ' type="text" placeholder='Name' name='name' />
            <input className='my-4 p-2 bg-[#6e717d]' type="text" placeholder='Email' name='email'/>
            <textarea className='bg-[#6e717d] p-2' name="message" rows="10" placeholder='Message'></textarea>
            <button className='text-whtie border-2 hover:bg-pink-600 hover:border-pink-600 px-4 my-8 mx-auto flex items-center hover:text-2xl hover:underline'>HIT ME!</button>
         </form>
    </div>
  )
}

export default Contact