import React from 'react'
import manish from "../photo/manish.jpg"
import mm1 from "../photo/mm1.jpg"
import mm2 from "../photo/mm2.jpg"
import mm3 from "../photo/mm3.jpg"
import mm4 from "../photo/mm4.jpg"
import mm5 from "../photo/mm5.jpg"
import mm6 from "../photo/mm6.jpg"

function Manish() {
  return (
    <div >

    <div className='md:grid grid-cols-[1.5fr,1fr] py-4  bg-sky-500/50'>
     
    
    <div className='  '>
        <div className='border-solid border-blue-700 py-4  border-l-8 border-r-8 md:mx-40  mx-10'>
        <img className=' mx-auto   h-[600px] bg-cover bg-center border-solid border-blue-700 border-4 ' src={manish} alt="" />
        </div>
      </div>
    
      <div className='text-center md:mt-32 '>
        <p className='text-7xl'><span className='text-9xl'>M</span>anish Jha</p>
        <p className='text-3xl pt-5 font-medium'>Mechanical Engineering</p>
      </div>



      

    </div>


    <div className='w-full pt-8 sm:grid sm:grid-cols-2 md:grid-cols-3 gap-5 bg-sky-500/50 px-12'>
       
        <div className='pt-12'>
          <img className='rounded-3xl' src={mm1} alt="" />
        </div>
        <div  className='pt-12'>
          <img className='rounded-3xl' src={mm2} alt="" />
        </div>
        <div className='pt-12'>
          <img className='rounded-3xl ' src={mm3} alt="" />
        </div>
        <div className='pt-12'>
          <img className='rounded-3xl ' src={mm4} alt="" />
        </div>
        <div  className='pt-12'>
          <img className='rounded-3xl ' src={mm5} alt="" />
        </div>
       
        <div className='pt-12'>
          <img className='rounded-3xl' src={mm6} alt="" />
        </div>
        <div className='pt-12 '>
          <img className='rounded-3xl' src="" alt="" />
        </div>
        <div  className='pt-12'>
          <img className='rounded-3xl ' src=" " alt="" />
        </div>
        
        <div className='pt-12 pb-5'>
          <img className='rounded-3xl' src="" alt="" />
        </div>
        
        
        
          
        
      

    </div>
   
    </div>
  )
}

export default Manish
