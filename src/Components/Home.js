import React from "react";
import { Component } from "react";
import ReactDOM from "react-dom";
import Member from "./Member";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import aa from "../photo/aa.JPG";
import DSC_1428 from "../photo/DSC_1428.JPG";
import DSC_1430 from "../photo/DSC_1430.JPG";
import DSC_1437 from "../photo/DSC_1437.JPG";
import DSC_1479 from "../photo/DSC_1479.JPG";
import DSC_1619 from "../photo/DSC_1619.JPG";
import DSC_1666 from "../photo/DSC_1666.JPG";
import DSC_1653 from "../photo/DSC_1653.JPG";
import DSC_1652 from "../photo/DSC_1652.JPG";
const images = [
 DSC_1652,
  DSC_1653,
  
  DSC_1619,
  DSC_1479,
  DSC_1437,
  DSC_1430,
  DSC_1428,
  aa,
];

function Home() {
  return (
    <>
    <div className="md:flex text-center md:items-center bg-gradient-to-r from-fuchsia-500 to-cyan-500 ">
      <div className="w-full pt-10 ">
        <p className="text-4xl font-bold font-serif md:text-4xl animate__animated animate__backInDown">Do You Have Problems <span><i class="fa-solid fa-question"></i></span> </p>
        <p className=" pt-5 text-2xl font-semibold text-right pr-20 animate__animated animate__backInUp ]"> Just Dial Us</p>
      </div>
      <div className="w-full h-[400px]  m-auto py-12 px-4 relative ">
      <Carousel showThumbs={false}  autoPlay={true} transitionTime={3} infiniteLoop={true} showStatus={false}>
        {images.map((URL, index) => (
          <div className="">
            <img className='animate__animated animate__slideInRight w-full h-full rounded-2xl bg-center bg-cover duration-500' alt="sample_file" src={URL} key={index} />
          </div>
        ))}
      </Carousel>
    </div>
    </div>
      
      <Member />
    </>
  );
}

export default Home;
