"use client"
import React from 'react'

import { useFreelance } from '../FreelanceContext'

const FillDetails = () => {
  const {state:{name,email,hourlyRate,password} , dispatch} = useFreelance();

  const changeHandler = (inputField,text) => {
    dispatch({type:"INPUT_FIELDS",payload:text,inputField})
  }

  return (
    <section className='border border-black rounded-xl p-4 pb-8 w-1/2 mx-auto flex flex-col gap-y-4 mt-20'>
        <h1 className='font-medium text-3xl underline mb-2'>Fill the details</h1>
        <input value={name} placeholder='Name' className='bg-white outline-none px-4 py-2 rounded-md text-2xl font-medium placeholder:text-black ' 
         onChange={(e)=>changeHandler("name",e.target.value)}
        />
        <input value={email} placeholder='Email' className='bg-white outline-none px-4 py-2 rounded-md text-2xl font-medium placeholder:text-black ' 
         onChange={(e)=>changeHandler("email",e.target.value)}
        />
        <input value={hourlyRate} placeholder='Hourly Rate (INR)' type="number" className='bg-white outline-none px-4 py-2 rounded-md text-2xl font-medium placeholder:text-black ' 
         onChange={(e)=>changeHandler("hourlyRate",Number(e.target.value))}
        />
        <input value={password} placeholder='Password' type="password" className='bg-white outline-none px-4 py-2 rounded-md text-2xl font-medium placeholder:text-black ' 
         onChange={(e)=>changeHandler("password",e.target.value)}
        />
      </section>
  )
}

export default FillDetails
