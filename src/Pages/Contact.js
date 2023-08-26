import React from 'react'
import amitabh  from "../photo/amitabh.jpg"
import ashutosh  from "../photo/ashutosh.jpg"
import anurag  from "../photo/anurag.JPG"
import raju  from "../photo/raju.jpg"
import abhinav from "../photo/abhinav.jpg"
import manish from "../photo/manish.jpg"


function Contact() {
  return (
    <div className='bg-gradient-to-r from-neutral-300 to-stone-400 w-full py-8'>
            <div className='md:grid grid-cols-2 px-12 py-5 rounded-3xl  '>
                <div className='bg-gradient-to-r from-neutral-300 to-stone-400  rounded-3xl mx-auto p-4 mt-10 '>
                    <img className='rounded-3xl mx-auto' src={amitabh} width={150} alt="" />
                    <div className=' text-2xl font-semibold  text-center '>
                        <p className='pt-2'>Amitabh Jha </p>
                        <p><i class="pt-2 fa-brands fa-whatsapp">+91 7717780586</i></p>
                        
                        <p>
                        <i class="pt-3 fa-solid fa-phone">+91 7717780586</i>
                        </p>
                        
                       
                        
                        
                        
                    </div>
                </div>
                <div className='bg-gradient-to-r from-neutral-300 to-stone-400mx-auto rounded-3xl p-4 mt-10'>
                    <img className='rounded-3xl mx-auto' src={ashutosh} width={150} alt="" />
                    <div className=' text-2xl font-semibold text-center '>
                        <p className='pt-2'>Ashutosh Kumar </p>
                        <p><i class="pt-2 fa-brands fa-whatsapp">+91 6206631635</i></p>
                        
                        <p>
                        <i class="pt-3 fa-solid fa-phone">+91 6206631635</i>
                        </p>
                        
                       
                        
                        
                        
                    </div>
                </div>
                <div className='bg-gradient-to-r from-neutral-300 to-stone-400mx-auto rounded-3xl p-4 py-10 my-8'>
                    <img className='rounded-3xl mx-auto' src={anurag} width={150} alt="" />
                    <div className=' text-2xl font-semibold text-center '>
                        <p className='pt-2'>Anurag Chaman </p>
                        <p><i class="pt-2 fa-brands fa-whatsapp">+91 8877338235</i></p>
                        
                        <p>
                        <i class="pt-3 fa-solid fa-phone">+91 8877338235</i>
                        </p>
                        
                       
                        
                        
                        
                    </div>
                </div>
                <div className='bg-gradient-to-r from-neutral-300 to-stone-400 mx-auto rounded-3xl p-4 my-8'>
                    <img className='rounded-3xl mx-auto' src={raju} width={150} alt="" />
                    <div className=' text-2xl font-semibold text-center '>
                        <p className='pt-2'>Rajkamal Bhardwaj </p>
                        <p><i class="pt-2 fa-brands fa-whatsapp">+91 9692187107</i></p>
                        
                        <p>
                        <i class="pt-3 fa-solid fa-phone">+91 9692187107</i>
                        </p>
                        
                       
                        
                        
                        
                    </div>
                </div>
                <div className='bg-gradient-to-r from-neutral-300 to-stone-400 mx-auto rounded-3xl p-4 my-auto'>
                    <img className='rounded-3xl mx-auto' src={abhinav} width={150} alt="" />
                    <div className=' text-2xl font-semibold text-center '>
                        <p className='pt-2'>Abhinav Kumar </p>
                        <p><i class="pt-2 fa-brands fa-whatsapp">+91 7739342615</i></p>
                        
                        <p>
                        <i class="pt-3 fa-solid fa-phone">+91 7739342615</i>
                        </p>
                        
                       
                        
                        
                        
                    </div>
                </div>
                
                <div className='bg-gradient-to-r from-neutral-300 to-stone-400 mx-auto rounded-3xl p-4 my-auto mt-10'>
                    <img className='rounded-3xl mx-auto' src={manish} width={150} alt="" />
                    <div className=' text-2xl font-semibold text-center '>
                        <p className='pt-2'>Manish Kumar</p>
                        <p><i class="pt-2 fa-brands fa-whatsapp">+91 7255964983</i></p>
                        
                        <p>
                        <i class="pt-3 fa-solid fa-phone">+91 7255964983</i>
                        </p>
                        
                       
                        
                        
                        
                    </div>
                </div>
                
               

            </div>
      
    </div>
  )
}


 export default Contact
