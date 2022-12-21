import React from 'react';

const Banner = () => {
  return (
    <div className='flex h-screen justify-between bg-[#1a1a1a]'>
      <div className="flex flex-col flex-1">
            <div className="flex flex-1 justify-center items-end text-xl lg:text-7xl text-white">
                  <p className='flex justify-end font-medium p-7 lg:pl-32 h-1/4 w-3/4 flex-col'>
                    <span className='flex text-[#c32865]'>Howdy,</span>I am Prabhat
                  </p>
            </div>
            <div className="flex h-2/4 text-white items-start pt-14 justify-center">
              khhb
            </div>
      </div>
      <div className="flex flex-1">
            <img src="https://freepngimg.com/thumb/happy_person/4-2-happy-person-transparent.png" alt="" />
      </div>
    </div>
  )
}

export default Banner