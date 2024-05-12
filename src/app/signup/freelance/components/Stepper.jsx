"use client"
import React from 'react'

const Stepper = ({step,setStep}) => {
    const activeClassName = "size-5 bg-black rounded-full transition-all ease-in delay-150"
    const normalClassName = "size-5 bg-gray-300 rounded-full transition-all ease-in delay-150"

  return (
    <>
    <button className='px-8 py-1.5 w-fit ml-auto mr-[25%] rounded-md bg-black text-white border border-black hover:text-black hover:bg-white transition-colors ease-linear' onClick={()=>setStep(prev=>prev+1)}>Next</button>
    <div className='flex w-1/2 items-center mx-auto'>
      <section  className={step>=1?activeClassName:normalClassName}></section>
      <aside className={`h-1 transition-all ease-in delay-150 ${step>=2?"bg-black":"bg-gray-300"} grow`}></aside>
      <section  className={step>=2?activeClassName:normalClassName}></section>
      <aside className={`h-1 transition-all ease-in delay-150 ${step>=3?"bg-black":"bg-gray-300"} grow`}></aside>
      <section  className={step>=3?activeClassName:normalClassName}></section>
      <aside className={`h-1 transition-all ease-in delay-150 ${step>=4?"bg-black":"bg-gray-300"} grow`}></aside>
      <section  className={step==4?activeClassName:normalClassName}></section>
    </div>
    </>
  )
}

export default Stepper
