import React from 'react'
import { useState } from 'react'

function Join() {
   

  return (
   <div className='flex
    flex-col  flex-wrap  items-center py-10 text-lg bg-gradient-to-r from-blue-200 to-cyan-200'>

<form>
        <fieldset>
            <legend className='pb-5 text-4xl font-semibold'>Personal Details</legend>
 
            <p>
                <label >
                    Salutation
                    <br />
                    <select className='border-solid border-black border-2' name="salutation">
                        <option>--None--</option>
                        <option>Mr.</option>
                        <option>Ms.</option>
                        <option>Mrs.</option>
                        <option>Dr.</option>
                        <option>Prof.</option>
                    </select>
                </label>
            </p>
 
            <p className='pt-2 pb-4'>
                <label>First name: <input className='border-solid border-black/50 border-2'name="firstName" /></label>
            </p>
 
            <p className='pb-4'>
                <label>Last name: <input className='border-solid border-black/50 border-2'name="lastName" /></label>
            </p>
 
            <p className='pb-4'>
                Gender :
                <label><input type="radio" name="gender"
                              value="male" />
                      Male   
                  </label>
                <label><input type="radio" name="gender"
                              value="female" />
                      Female   
                  </label>
            </p>
 
            <p className='pb-5'>
                <label>Email:<input className='  border-solid border-black/50 border-2'type="email"
                                    name="email" />
                  </label>
            </p>
 
            <p>
                <label>Date of Birth:<input className='border-solid border-black/50 border-2' type="date"
                                            name="birthDate"/>
                  </label>
            </p>
 
            <p>
                <label>
                    Address :
                    <br />
                    <textarea className='border-solid border-black/50 border-2' name="address" cols="30"
                              rows="3">
                      </textarea>
                </label>
            </p>
 
            <p   className='pt-4'>
                <button className='border-solid border-black border-2 pt-2  px-4 py-2 text-white bg-blue-500 rounded-2xl ' type="submit">Submit</button>

                

            </p>
 
        </fieldset>
    </form>

   </div>

  )
}

export default Join
