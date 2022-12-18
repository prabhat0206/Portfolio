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
            <div className="flex flex-1 justify-center items-center">
                  <div className="flex bg-blue-900 justify-center w-full items-end h-3/4">
                    <div className="flex bg-red-900 h-4/5">box1</div>
                  </div>
                  <div className="flex bg-pink-900 w-full items-start h-3/4">
                  <div className="flex bg-green-900 h-4/5">box2</div>
                  </div>


            </div>
      </div>
    </div>
  )
}

export default Qualification