import React from 'react'

const Qualification = () => {
  return (
    <div className='flex h-screen w-full' style={{
      backgroundImage: `url("https://c0.wallpaperflare.com/preview/267/174/427/apple-computer-eyeglasses-eyewear.jpg")`
      ,backgroundSize:"cover",
      backgroundRepeat:"no-repeat",
    }}>
      <div className="flex w-full justify-between h-full backdrop-opacity-30 backdrop-invert bg-white/5">
            <div className="flex w-[10%] items-center">
                  <span className='text-7xl font-semibold text-gray-500 -rotate-90 justify-start'>resume</span>
            </div>
            <div className="flex flex-1 z-1 justify-center items-center">
                  <div className="flex justify-center w-2/4 items-start h-3/4">
                    <div className="flex rounded-lg flex-col text-white opacity-25 bg-gray-800 h-4/5 w-full">
                      <div className="flex text-5xl font-medium justify-start pl-10 -mt-7 mb-5">Education</div>
                      <div className="flex flex-1 items-center justify-evenly flex-col ">
                       <div className="flex h-full w-4/5 border-b-2 border-white flex-col">

                       <p className="flex text-sm font-medium h-12 items-center">SPECIALIZATION COURSE</p>
                        <p className="flex text-xl font-medium h-10 items-center">Dr shyama prasad dummy</p>
                        <p className="flex flex-1 items-center">
                        Lorem ipsum dolor sit amet, consectetur 
                        adipisicing elit. Minus nobis animi 
                        assumenda sint recusandae! Dolor placeat
                        debitis animi illum quo repellendus pariatur.</p>
                      </div>

                       </div>
                      <div className="flex flex-1 items-center justify-evenly flex-col ">
                       <div className="flex h-full w-4/5 flex-col">

                       <p className="flex text-sm font-medium h-12 items-center">ACADEMY COURSE</p>
                        <p className="flex text-xl font-medium h-10 items-center">Dr shyama prasad dummy</p>
                        <p className="flex flex-1 items-center">
                        Lorem ipsum dolor sit amet, consectetur 
                        adipisicing elit. Minus nobis animi 
                        assumenda sint recusandae! Dolor placeat
                        debitis animi illum quo repellendus pariatur.</p>
                      </div>
                        </div>                 
                             </div>
                  </div>
                  <div className="flex justify-center w-2/4 items-end h-3/4 ml-10 mr-10">
                    <div className="flex rounded-lg flex-col text-white opacity-25 bg-gray-800 h-4/5 w-full">
                      <div className="flex text-5xl font-medium justify-start pl-10 -mt-7 mb-5">Experience</div>
                      <div className="flex flex-1 items-center justify-evenly flex-col ">
                       <div className="flex h-full w-4/5 border-b-2 border-white flex-col">

                       <p className="flex text-sm font-medium h-12 items-center">SPECIALIZATION COURSE</p>
                        <p className="flex text-xl font-medium h-10 items-center">Dr shyama prasad dummy</p>
                        <p className="flex flex-1 items-center">
                        Lorem ipsum dolor sit amet, consectetur 
                        adipisicing elit. Minus nobis animi 
                        assumenda sint recusandae! Dolor placeat
                        debitis animi illum quo repellendus pariatur.</p>
                      </div>

                       </div>
                      <div className="flex flex-1 items-center justify-evenly flex-col ">
                       <div className="flex h-full w-4/5 flex-col">

                       <p className="flex text-sm font-medium h-12 items-center">ACADEMY COURSE</p>
                        <p className="flex text-xl font-medium h-10 items-center">Dr shyama prasad dummy</p>
                        <p className="flex flex-1 items-center">
                        Lorem ipsum dolor sit amet, consectetur 
                        adipisicing elit. Minus nobis animi 
                        assumenda sint recusandae! Dolor placeat
                        debitis animi illum quo repellendus pariatur.</p>
                      </div>
                        </div>                 
                             </div>
                  </div>
            </div>
      </div>
    </div>
  )
}

export default Qualification