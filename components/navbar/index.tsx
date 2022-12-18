import React from 'react';
import {MdArrowBackIos} from "react-icons/md";



const Sidebar=() => {

    return (
        <div className="flex flex-col absolute z-5 bg-white lg:relative top-0 left-0 z-10 h-full duration-300 sidebar w-full transition-all ease-in-out -translate-x-full">
            <div className="flex h-14 bg-blue-500 items-center w-full">
                <div className="flex pl-4 cursor-pointer text-white flex-1 h-10 items-center">
                    <MdArrowBackIos size="22" onClick={() => {
                        // document.querySelector(".sidebar").classList.toggle("-translate-x-full")
                    }} />
                </div>
            </div>  
        </div>
    )
}

export default Sidebar