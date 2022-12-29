import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Mousewheel, Pagination } from "swiper";
import NavBar from "$components/navbar/navBar";
import Banner from "$components/banner/banner";
import BottomPanel from "$components/bottomPanel";
import Skills from "$components/skills";
import Qualification from "$components/qualification";
import Experience from "$components/contact";

const HomePage = () => {
  return (
  <div className="flex overflow-y-hidden flex-col w-full">
      <NavBar/>
      <div className="flex overflow-y-scroll flex-col">
          <Banner />
          <Skills />
          <Qualification />
          <Experience />
      </div>
      <BottomPanel /> 
    </div>
  )
}

export default HomePage