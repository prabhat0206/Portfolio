import React from 'react';
import {MdComputer} from "react-icons/md";

const Skills = () => {
  return (
    <div className='flex bg-[#1c1c1c] h-screen w-full'>
     <div className="flex items-center w-1/5">
      <span className='flex h-1/3 w-full text-[#272727] text-[4rem] font-semibold -rotate-90 items-starts justify-center'>What i do</span>
     </div>
     <div className="flex flex-1 flex-col">
          <div className="flex flex-1 justify-start text-white items-end my-10">
            <p className='font-medium mx-2 text-5xl'><span style={{color:"#c32865"}}>My</span> specialization</p>
          </div>
          <div className="flex justify-between  items-start my-5 w-5/6 h-3/5">
             <div className="flex justify-around w-1/4 h-3/5 flex-col">
                  <div className="flex text-6xl justify-start text-[#c32865] mx-4"><MdComputer /></div>
                  <div className="flex text-2xl font-medium justify-start mx-3 text-white">Web Design</div>
                  <div className="flex text-left text-gray-500 p-3">Working with client and community, 
                     we deliver masterplans that create vibrant new places and
                     spaces, attract people, and encourage investment through.
                   </div>
             </div>
             <div className="flex justify-around w-1/4 h-3/5 flex-col">
                  <div className="flex text-6xl justify-start text-[#c32865] mx-4"><MdComputer /></div>
                  <div className="flex text-2xl font-medium justify-start mx-3 text-white">Web Design</div>
                  <div className="flex text-left text-gray-500 p-3">Working with client and community, 
                     we deliver masterplans that create vibrant new places and
                     spaces, attract people, and encourage investment through.
                   </div>
             </div>
             <div className="flex justify-around w-1/4 h-3/5 flex-col">
                  <div className="flex text-6xl justify-start text-[#c32865] mx-4"><MdComputer /></div>
                  <div className="flex text-2xl font-medium justify-start mx-3 text-white">Web Design</div>
                  <div className="flex text-left text-gray-500 p-3">Working with client and community, 
                     we deliver masterplans that create vibrant new places and
                     spaces, attract people, and encourage investment through.
                   </div>
             </div>
          </div>
     </div>
      </div>
  )
}

export default Skills