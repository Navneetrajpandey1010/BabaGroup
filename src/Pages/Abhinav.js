import React from 'react'
import abhinav from "../photo/abhinav.jpg"
import DSC_1458 from "../photo/DSC_1458.JPG"
import DSC_1479 from "../photo/DSC_1479.JPG"
import DSC_1618 from "../photo/DSC_1618.JPG"

function Abhinav() {
  return (
    <div >

    <div className='md:grid grid-cols-[1.5fr,1fr] py-4  bg-sky-500/50'>
     
    
    <div className='  '>
        <div className='border-solid border-blue-700 py-4  border-l-8 border-r-8 md:mx-40  mx-10'>
        <img className=' mx-auto   h-[600px] bg-cover bg-center border-solid border-blue-700 border-4 ' src={abhinav} alt="" />
        </div>
      </div>
    
      <div className='text-center md:mt-32 '>
        <p className='text-7xl'><span className='text-9xl'>A</span>bhinav Kumar</p>
        <p className='text-3xl pt-5 font-medium'>Mechanical Engineering</p>
      </div>



      

    </div>


    <div className='w-full pt-8 sm:grid sm:grid-cols-2 md:grid-cols-3 gap-5 bg-sky-500/50 px-12'>
       
        <div className='pt-12'>
          <img className='rounded-3xl' src={DSC_1458} alt="" />
        </div>
        <div  className='pt-12'>
          <img className='rounded-3xl' src={DSC_1479} alt="" />
        </div>
        <div className='pt-12'>
          <img className='rounded-3xl ' src={DSC_1618} alt="" />
        </div>
        <div className='pt-12'>
          <img className='rounded-3xl ' src="" alt="" />
        </div>
        <div  className='pt-12'>
          <img className='rounded-3xl ' src="" alt="" />
        </div>
       
        <div className='pt-12'>
          <img className='rounded-3xl' src="" alt="" />
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

export default Abhinav
