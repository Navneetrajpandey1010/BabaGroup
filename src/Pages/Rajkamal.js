import React from 'react'

import raju2 from "../photo/raju2.jpeg"
import raju3 from "../photo/raju3.jpeg"
import raju4 from "../photo/raju4.jpeg"
import raju from "../photo/raju.jpg"
import DSC_1478 from "../photo/DSC_1478.JPG"
import DSC_1618 from "../photo/DSC_1618.JPG"
import DSC_1470 from "../photo/DSC_1470.JPG"
function Rajkamal() {
  return (
    <div >

    <div className='md:grid grid-cols-[1.5fr,1fr] py-4  bg-sky-500/50'>
     
    
    <div className='  '>
        <div className='border-solid border-blue-700 py-4  border-l-8 border-r-8 md:mx-40  mx-10'>
        <img className=' mx-auto   h-[600px] bg-cover bg-center border-solid border-blue-700 border-4 ' src={raju} alt="" />
        </div>
      </div>
    
      <div className='text-center md:mt-32 '>
        <p className='text-7xl'><span className='text-9xl'>R</span>ajkamal Bhardwaj</p>
        <p className='text-3xl pt-5 font-medium'>Mechanical Engineering</p>
      </div>



      

    </div>


    <div className='w-full pt-8 sm:grid sm:grid-cols-2 md:grid-cols-3 gap-5 bg-sky-500/50 px-12'>
       
       
        <div  className='pt-12'>
          <img className='rounded-3xl' src={raju2} alt="" />
        </div>
        <div className='pt-12'>
          <img className='rounded-3xl ' src={raju3} alt="" />
        </div>
        <div className='pt-12'>
          <img className='rounded-3xl ' src={raju4} alt="" />
        </div>
        <div  className='pt-12'>
          <img className='rounded-3xl ' src={DSC_1618} alt="" />
        </div>
        <div className='pt-12'>
          <img className='rounded-3xl' src={DSC_1478} alt="" />
        </div>
       
        <div className='pt-12'>
          <img className='rounded-3xl' src={DSC_1470} alt="" />
        </div>
        <div className='pt-12 '>
          <img className='rounded-3xl' src="" alt="" />
        </div>
        <div  className='pt-12'>
          <img className='rounded-3xl ' src="" alt="" />
        </div>
        
        <div className='pt-12 pb-5'>
          <img className='rounded-3xl' src="" alt="" />
        </div>
        
        
        
          
        
      

    </div>
   
    </div>
  )
}

export default Rajkamal
