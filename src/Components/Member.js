import React from "react";
import amitabh from "../photo/amitabh.jpg";
import raju from "../photo/raju.jpg";
import ashutosh from "../photo/ashutosh.jpg";
import abhinav from "../photo/abhinav.jpg";
import manish from "../photo/manish.jpg";
import anurag from "../photo/anurag.JPG";
import { Link } from "react-router-dom";

function Member() {
  return (
    <div className="bg-gradient-to-r from-fuchsia-500 to-cyan-500  lg:pt-32 sm:pt-28">
      <div>
        <div className=" text-4xl leading-[4rem] font-semibold  font-serif italic text-center  relative animate__animated animate__flip">
          <span>Founding Members</span>
        </div>
      </div>

      {/* <div className="sm:grid lg:grid-cols-3 sm:grid-cols-2 px-12 sm:px-20 lg:px-28 gap-5 justify-between pt-12  pb-10 ">
          <Link to={"/amitabh"}><div className="bg-blue-500 flex rounded-2xl mb-5 animate__animated animate__slideInRight">
                <img className="h-[150px] w-[100px] rounded-2xl " src={amitabh} alt="" />
               <div className="">
               <p className="text-center text-2xl hover:text-4xl   py-5 text-white">Amitabh Jha</p>
                <p className="px-10 text-2xl py-2 hover:text-4xl text-white">UPSC Aspirant</p>
               </div>
            </div></Link>  
            <div className="bg-blue-500   flex rounded-2xl mb-5 animate__animated animate__slideInLeft">
            <img className="h-[150px] w-[100px] rounded-2xl" src={raju} alt="" />
            <div>
               <p className="px-2 text-2xl  text-center hover:text-4xl py-5 text-white">Rajkamal Bhardwaj</p>
                <p className="px-10 text-2xl  hover:text-4xl text-white">GATE Aspirant</p>
               </div>
            </div>

            <div className="bg-blue-500 flex rounded-2xl mb-5 animate__animated animate__slideInRight">
            <img className="h-[150px] w-[100px] rounded-2xl" src={ashutosh} alt="" />
            <div>
               <p className="px-5 text-2xl py-5  hover:text-4xl text-white">Ashutosh Kumar</p>
                <p className="px-5 text-2xl py-2 hover:text-4xl text-white">PHILOSHPHER</p>
               </div>

               
            </div>

            <div className="bg-blue-500 flex rounded-2xl mb-5 animate__animated animate__slideInLeft">
            <img className="h-[150px] w-[100px] rounded-2xl" src={anurag} alt="" />
            <div>
               <p className="px-5 text-2xl py-5  hover:text-4xl text-white">Anurag Chaman</p>
                <p className="px-5 text-lg py-2 hover:text-2xl text-white">Black Diamond Owner</p>
               </div> 
            </div>

            <div className="bg-blue-500 flex rounded-2xl mb-5 animate__animated animate__slideInRight">
            <img className="h-[150px] w-[100px] rounded-2xl" src={manish} alt="" />
            <div>
               <p className="px-5 text-2xl py-5  hover:text-4xl text-white">Manish Kumar</p>
                <p className="px-5 text-2xl py-2 hover:text-4xl text-white">Coder & Singer</p>
               </div>

               
            </div>

            <div className="bg-blue-500 flex rounded-2xl mb-5 animate__animated animate__slideInLeft">
            <img className="h-[150px] w-[100px] rounded-2xl" src={abhinav} alt="" />
            <div>
               <p className="px-5 text-2xl py-5  hover:text-4xl text-white">Abhinav Kumar</p>
                <p className="px-5 text-2xl py-2 hover:text-3xl text-white">Mechanical Topper</p>
               </div>

               
            </div>
      </div> */}

      <div className="md:grid grid-cols-3 gap-5  pb-5  ">
        <Link to={"/amitabh"}>
          <div className="bg-gradient-to-r from-cyan-500 to-blue-500 mx-12 py-8 rounded-2xl my-10 sm:mx-48 md:mx-3 animate__animated animate__slideInRight">
            <img
              className="bg-center object-cover
            h-[300px] mx-auto rounded-2xl"
              src={amitabh}
              alt=""
            />
            <p className="text-center text-2xl hover:text-4xl   py-2 text-white">
              Amitabh Jha
            </p>
            <p className="px-10 text-center text-2xl  hover:text-4xl text-white">
              UPSC Aspirant
            </p>
          </div>
        </Link>
        <Link to={"/rajkamal"}> <div className="bg-gradient-to-r from-cyan-500 to-blue-500 mx-12 py-8 rounded-2xl my-10 sm:mx-48 md:mx-3 animate__animated animate__slideInLeft">
          <img
            className="bg-center object-cover
            h-[300px] mx-auto rounded-2xl"
            src={raju}
            alt=""
          />

          <p className="px-2 text-2xl  text-center hover:text-4xl py-2 text-white">
            Rajkamal Bhardwaj
          </p>
          <p className=" text-center px-10 text-2xl  hover:text-4xl text-white">
            GATE Aspirant
          </p>
        </div></Link>

        <Link to={"/ashutosh"}><div className=" bg-gradient-to-r from-cyan-500 to-blue-500 mx-12 py-8 rounded-2xl my-10 sm:mx-48 md:mx-3 animate__animated animate__slideInRight">
          <img
            className="bg-center object-cover
            h-[300px] mx-auto rounded-2xl"
            src={ashutosh}
            alt=""
          />

          <p className="px-5 text-2xl py-2 text-center hover:text-4xl text-white">
            Ashutosh Kumar
          </p>
          <p className="px-5 text-center text-2xl  hover:text-4xl text-white">
            PHILOSHPHER
          </p>
        </div></Link>
       
       <Link to={"/manish"}> <div className="bg-gradient-to-r from-cyan-500 to-blue-500 mx-12 py-8 rounded-2xl  my-10 sm:mx-48 md:mx-3 animate__animated animate__slideInLeft">
          <img
            className="bg-center object-cover
            h-[300px] w-[150px] mx-auto rounded-2xl"
            src={manish}
            alt=""
          />

          <p className="px-5 text-2xl py-2 text-center  hover:text-4xl text-white">
            Manish Kumar
          </p>
          <p className="px-5 text-2xl text-center  hover:text-4xl text-white">
            Coder & Singer
          </p>
        </div></Link>
        
        <Link to={"/anurag"}> <div className="bg-gradient-to-r from-cyan-500 to-blue-500 mx-12 py-8 rounded-2xl my-10 sm:mx-48 md:mx-3 animate__animated animate__slideInRight">
          <img
            className="bg-center object-cover
            h-[300px] mx-auto rounded-2xl"
            src={anurag}
            alt=""
          />

          <p className="px-5  text-2xl py-2 text-center hover:text-4xl text-white">
            Anurag Chaman
          </p>
          <p className="px-5 text-lg text-center  hover:text-2xl text-white">
            
          </p>
        </div></Link>
       
       
        <Link to={"/abhinav"}>
          <div className="bg-gradient-to-r from-cyan-500 to-blue-500 mx-12 py-8 md:mt-6 rounded-2xl sm:mx-48 md:mx-3 animate__animated animate__slideInLeft">
            <img
              className="bg-center object-cover
            h-[300px] mx-auto rounded-2xl"
              src={abhinav}
              alt=""
            />

            <p className="px-5 text-2xl  py-2 text-center hover:text-4xl text-white">
              Abhinav Kumar
            </p>
            <p
              className="px-5 text-center
                 text-2xl  hover:text-3xl text-white"
            >
              Mechanical Topper
            </p>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Member;
