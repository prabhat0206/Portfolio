import React from 'react';
import {GrInstagram} from "react-icons/gr";
import {BsGithub,BsTwitter,BsLinkedin} from "react-icons/bs";


const BottomPanel = () => {
  return (
    <div className='flex items-center bottom-0 justify-between text-white w-full fixed bg-transparent h-14'>
    <div className="flex mx-12 font-medium text-sm flex-1">@ Prabhat 2023</div>
    <div className="flex justify-around mx-12 w-1/5">
      <span><GrInstagram /></span>
      <span><BsGithub /></span>
      <span><BsTwitter /></span>
      <span><BsLinkedin /></span>
    </div>
    </div>
  )
}

export default BottomPanel