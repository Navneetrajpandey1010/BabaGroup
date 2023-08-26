import React from "react";
import navneet from "../photo/navneet.jpg";
import navneet1 from "../photo/navneet1.jpg";
import navneet2 from "../photo/navneet2.jpeg";
import navneet3 from "../photo/navneet3.jpeg";
import navneet4 from "../photo/navneet4.jpeg";
import navneet5 from "../photo/navneet5.jpeg";
import navneet6 from "../photo/navneet6.jpeg";
import navneet7 from "../photo/navneet7.jpeg";
import navneet8 from "../photo/navneet8.jpeg";
import navneet9 from "../photo/navneet9.jpeg";
import navneet10 from "../photo/navneet10.jpeg";
import navneet11 from "../photo/navneet11.jpeg";
import navneet12 from "../photo/navneet12.jpeg";

function Navneet() {
  return (
    <div>
      <div>
        <div className="md:grid grid-cols-[1.5fr,1fr] py-4  bg-sky-500/50">
          <div className="  ">
            <div className="border-solid border-blue-700 py-4  border-l-8 border-r-8 md:mx-40  mx-10">
              <img
                className=" mx-auto   h-[600px] bg-cover bg-center border-solid border-blue-700 border-4 "
                src={navneet}
                alt=""
              />
            </div>
          </div>

          <div className="text-center md:mt-32 ">
            <p className="text-7xl">
              <span className="text-9xl">N</span>avneet Raj
            </p>
            <p className="text-3xl pt-5 font-medium">Mechanical Engineering</p>
          </div>
        </div>

        <div className="w-full pt-8 sm:grid sm:grid-cols-2 md:grid-cols-3 gap-5 bg-sky-500/50 px-12">
          <div className="pt-12 pb-5">
            <img className="rounded-3xl" src={navneet10} alt="" />
          </div>
          <div className="pt-12">
            <img className="rounded-3xl" src={navneet1} alt="" />
          </div>
          <div className="pt-12">
            <img className="rounded-3xl " src={navneet4} alt="" />
          </div>
          <div className="pt-12">
            <img className="rounded-3xl " src={navneet2} alt="" />
          </div>
          <div className="pt-12">
            <img className="rounded-3xl " src={navneet3} alt="" />
          </div>
          

          <div className="pt-12">
            <img className="rounded-3xl" src={navneet5} alt="" />
          </div>
          <div className="pt-12 ">
            <img className="rounded-3xl" src={navneet6} alt="" />
          </div>
          <div className="pt-12">
            <img className="rounded-3xl " src={navneet7} alt="" />
          </div>

          <div className="pt-12 pb-5">
            <img className="rounded-3xl" src={navneet8} alt="" />
          </div>
          <div className="pt-12 pb-5">
            <img className="rounded-3xl" src={navneet9} alt="" />
          </div>

          <div className="pt-12 pb-5">
            <img className="rounded-3xl" src={navneet11} alt="" />
          </div>
          <div className="pt-12 pb-5">
            <img className="rounded-3xl" src={navneet12} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navneet;
