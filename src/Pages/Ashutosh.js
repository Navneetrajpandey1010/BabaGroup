import React from 'react'
import  ashutosh from "../photo/ashutosh.jpg"
import DSC_1440 from "../photo/DSC_1440.JPG"
import DSC_1449 from "../photo/DSC_1449.JPG"
import DSC_1452 from "../photo/DSC_1452.JPG"
import DSC_1453 from "../photo/DSC_1453.JPG"
import DSC_1459 from "../photo/DSC_1459.JPG"
import DSC_1461 from "../photo/DSC_1461.JPG"
function Ashutosh() {
  return (
    <div >

    <div className='md:grid grid-cols-[1.5fr,1fr] py-4  bg-sky-500/50'>
     
    
    <div className='  '>
        <div className='border-solid border-blue-700 py-4  border-l-8 border-r-8 md:mx-40  mx-10'>
        <img className=' mx-auto   h-[600px] bg-cover bg-center border-solid border-blue-700 border-4 ' src={ashutosh} alt="" />
        </div>
      </div>
    
      <div className='text-center md:mt-32 '>
        <p className='text-7xl'><span className='text-9xl'>A</span>shutosh Kumar</p>
        <p className='text-3xl pt-5 font-medium'>Mechanical Engineering</p>
      </div>



      

    </div>


    <div className='w-full pt-8 sm:grid sm:grid-cols-2 md:grid-cols-3 gap-5 bg-sky-500/50 px-12'>
       
        <div className='pt-12'>
          <img className='rounded-3xl' src={DSC_1440} alt="" />
        </div>
        <div  className='pt-12'>
          <img className='rounded-3xl' src={DSC_1449} alt="" />
        </div>
        <div className='pt-12'>
          <img className='rounded-3xl ' src={DSC_1452} alt="" />
        </div>
        <div className='pt-12'>
          <img className='rounded-3xl ' src={DSC_1453} alt="" />
        </div>
        <div  className='pt-12'>
          <img className='rounded-3xl ' src={DSC_1459} alt="" />
        </div>
       
        <div className='pt-12'>
          <img className='rounded-3xl' src={DSC_1461} alt="" />
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

export default Ashutosh
