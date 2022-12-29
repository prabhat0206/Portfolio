import React from 'react';
import {BiMenu} from "react-icons/bi";

const NavBar = () => {
  return (
    <div className='flex justify-between h-14 fixed w-full top-0 text-white bg-[#1c1c1c]'>
      <div className="flex pl-4 lg:pl-10 w-18 md:w-1/4 font-semibold items-center text-sm">Logo</div>
      <div className="flex items-center text-[#9c9c9c] justify-evenly flex-1">
            <span className="flex md:text-lg text-sm">+96 56-85-1379</span>
            <span>/</span>
            <span className="flex md:text-lg text-sm">contact@robert.com</span>
      </div>
      <div className="flex w-1/4 items-center justify-end pr-10">
            <BiMenu 
            style={{color: "white"}} size="28" className="ml-4 cursor-pointer" onClick={() => {
            document.querySelector(".sidebar")?.classList.toggle("-translate-x-full")}}/>
      </div>
    </div>
  )
}

export default NavBar