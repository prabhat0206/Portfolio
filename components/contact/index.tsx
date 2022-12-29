import React from 'react'

const Contact = () => {
  return (
    <div className='flex h-screen bg-contact justify-center items-center'>
      <div className="flex justify-between bg-transparent h-2/5 w-3/5">
        <div className="flex flex-col justify-start flex-1">
          <div className="flex text-4xl font-semibold pb-5 text-[#d00064]">New York,USA</div>
          <span className="flex text-gray-600 text-xl pb-9 font-medium">166 Main Street,Beverly Hills,CA 90210</span>
          <p className="flex text-white text-2xl pb-6 font-medium">contact@ramsay.com</p>
          <p className="flex text-2xl font-medium text-white">+12345678</p>
        </div>
        <div className="flex flex-col flex-1 text-white">
         <div className="flex flex-1 justify-between">
          <input className='flex h-10 pl-4 rounded-md bg-[#2f2f2f]' type="text" placeholder='First Name' />
          <input className='flex h-10 pl-4 ml-4 rounded-md bg-[#2f2f2f]' type="text" placeholder='Last Name' />
         </div>
         <div className="flex flex-1">
         <input className='flex h-10 w-full pl-4 rounded-md bg-[#2f2f2f]' type="text" placeholder='Subject' />

         </div>
         <div className="flex flex-1">
         <textarea className='flex h-36 w-full pl-2 rounded-md bg-[#2f2f2f] text-white' placeholder='Comment' />
         </div>
        </div>
      </div>
      </div>
  )
}

export default Contact