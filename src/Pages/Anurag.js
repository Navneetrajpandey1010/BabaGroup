import React from 'react'
import anurag from "../photo/anurag.JPG"
import cc1 from "../photo/cc1.jpg"
import cc2 from "../photo/cc2.jpg"
import cc3 from "../photo/cc3.jpg"
import cc4 from "../photo/cc4.jpg"
import cc5 from "../photo/cc5.jpeg"
import cc6 from "../photo/cc6.jpg"
import DSC_1487 from "../photo/DSC_1487.JPG"
import DSC_1449 from "../photo/DSC_1449.JPG"
import DSC_1454 from "../photo/DSC_1454.JPG"

function Anurag() {
  return (
    <div >

    <div className='md:grid grid-cols-[1.5fr,1fr] py-4  bg-sky-500/50'>
     
    
    <div className='  '>
        <div className='border-solid border-blue-700 py-4  border-l-8 border-r-8 md:mx-40  mx-10'>
        <img className=' mx-auto   h-[600px] bg-cover bg-center border-solid border-blue-700 border-4 ' src={anurag} alt="" />
        </div>
      </div>
    
      <div className='text-center md:mt-32 '>
        <p className='text-7xl'><span className='text-9xl'>A</span>nurag Chaman</p>
        <p className='text-3xl pt-5 font-medium'>Mechanical Engineering</p>
      </div>



      

    </div>


    <div className='w-full pt-8 sm:grid sm:grid-cols-2 md:grid-cols-3 gap-5 bg-sky-500/50 px-12'>
       
        <div className='pt-12'>
          <img className='rounded-3xl' src={cc1} alt="" />
        </div>
        <div  className='pt-12'>
          <img className='rounded-3xl' src={cc2} alt="" />
        </div>
        <div className='pt-12'>
          <img className='rounded-3xl ' src={cc3} alt="" />
        </div>
        <div className='pt-12'>
          <img className='rounded-3xl ' src={cc4} alt="" />
        </div>
       
       
        <div className='pt-12'>
          <img className='rounded-3xl' src={cc6} alt="" />
        </div>
        <div className='pt-12 '>
          <img className='rounded-3xl' src={DSC_1487} alt="" />
        </div>
        <div  className='pt-12'>
          <img className='rounded-3xl ' src={cc5} alt="" />
        </div>
        <div  className='pt-12'>
          <img className='rounded-3xl ' src={DSC_1449} alt="" />
        </div>
        
        <div className='pt-12 pb-5'>
          <img className='rounded-3xl' src={DSC_1454} alt="" />
        </div>
        
        
        
          
        
      

    </div>
   
    </div>
  )
}

export default Anurag
