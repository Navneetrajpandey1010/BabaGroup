import React from 'react'

function Footer() {
  return (
    <div>
      <div className='bg-sky-500   flex gap-5'>
          <div className='w-1/3 py-2 sm:px-12 px-6'>
              <p className='sm:text-3xl text-2xl text-white italic font-mono'>Address</p>
              <div className='flex gap-2'>
              <i class="fa-solid fa-location-dot text-xl sm:text-3xl"></i>
                <div className='sm:text-2xl text-xl font-sans italic text-white'>
                <p>V.C Jha B - Block </p>
              <p>Mabbi Chakka Shahpur </p>
              <p>Darbhanga </p>
                </div>
              </div>
              
              
          </div>
          <div className='w-2/3 py-12'>
              <p className=' sm:text-3xl text-2xl text-center  text-white'>Connect With Us</p>
<div className='text-center pt-4'>
  <a href={"https://www.instagram.com/nav_neetraj/"} target='_blank'  class="fa-brands fa-instagram text-3xl   mx-5"></a>
  <a href={"https://www.linkedin.com/in/navneet-raj-9a5375247/"} target='_blank'  class="fa-brands fa-linkedin text-3xl   mx-5"></a>
  <a href={"https://github.com/Navneetrajpandey1010"} target='_blank'  class="fa-brands fa-github text-3xl   mx-5"></a>


<i class="fa-brands fa-twitter text-3xl   mx-5"></i>

<i class="fa-brands fa-facebook text-3xl   mx-5"></i>


</div>
              
          </div>
      </div>
    </div>
  )
}

export default Footer
