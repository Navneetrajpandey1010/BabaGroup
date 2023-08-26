import React from 'react'
import { Link, } from 'react-router-dom'
import Contact from '../Pages/Contact'
import { useState } from 'react'

import {AiOutlineClose, AiOutlineMenu,AiFillTag} from 'react-icons/ai'




function Nav() {
  const [nav , setNav] =useState(false)
  return (
    <div>
        <nav class="  p-5 flex justify-between items-center max-[1200px] mx-auto bg-sky-600 text-white ">
        <div>
          <span class="text-xl md:text-3xl  font-extrabold text-white hover:text-2xl hover:md:text-4xl  "> <Link to={"/"}>BABA GROUP</Link></span>
          <span class="ml-10 text-lg md:text-2xl font-semibold hover:text-xl hover:md:text-3xl"> <Link to={"/contact"}>Contact Us</Link> </span>
        </div>
        <div className='flex'>
        
              
         

          <div onClick={()=> setNav(!nav) } className='cursor-pointer'>
            <AiOutlineMenu size={20} />
        </div>
         


        </div>
        

       {/* Mobile Menu */}
    {/* Overlay */}

    { nav ? <div className='bg-black/80 fixed w-full h-screen z-10 top-0 left-0'></div> :''}

        
    <div className={nav ? 'fixed top-0 right-0 w-[300px] h-screen  z-10 duration-300 bg-sky-500' : 'fixed top-0 right-[-100%] w-[300px] h-screen  z-10 duration-500 bg-black'}>
    <AiOutlineClose 
        onClick={()=> setNav(!nav)} size={30}
        className='absolute right-4 top-4 cursor-pointer '/>
        <h2 className='text-2xl p-4'>
        <Link to={"/join"}><span onClick={()=> setNav(!nav)} class=" md:text-2xl bg-blue-500 px-5 py-1 rounded-lg text-center hover:text-3xl  ">Join Us</span></Link>
        </h2>



        <nav>
            <ul className='flex flex-col p-5  '>
                <Link to={"/navneet"}><li  onClick={()=> setNav(!nav)} className='text-xl py-4 flex hover:text-2xl'>Navneet Raj </li></Link>
                <Link to={"/amitabh"}><li  onClick={()=> setNav(!nav)} className='text-xl py-4 flex hover:text-2xl'>Amitabh Jha </li></Link>
                <Link to={"/rajkamal"}><li  onClick={()=> setNav(!nav)} className='text-xl py-4 flex hover:text-2xl'>Rajkamal Bhardwaj </li></Link>
                <Link to={"/ashutosh"}><li  onClick={()=> setNav(!nav)} className='text-xl py-4 flex hover:text-2xl'>Ashutosh Kumar </li></Link>
                <Link to={"/anurag"}><li  onClick={()=> setNav(!nav)} className='text-xl py-4 flex hover:text-2xl'>Anurag Chaman </li></Link>
                <Link to={"/manish"}><li  onClick={()=> setNav(!nav)} className='text-xl py-4 flex hover:text-2xl'>Manish Kumar </li></Link>
                <Link to={"/abhinav"}><li  onClick={()=> setNav(!nav)} className='text-xl py-4 flex hover:text-2xl'>Abhinav Kumar </li></Link>
                
                
               
                
                
                
            </ul>
        </nav>
    
    
        </div>


      </nav>
      
    </div>
  )
}

export default Nav
