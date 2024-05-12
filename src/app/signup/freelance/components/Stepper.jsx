"use client"
import React from 'react'
import { useRouter } from 'next/navigation'

const Stepper = ({step,setStep}) => {
    const activeClassName = "size-5 bg-black rounded-full transition-all ease-in delay-150 cursor-pointer"
    const normalClassName = "size-5 bg-gray-300 rounded-full transition-all ease-in delay-150 cursor-pointer"

    const router = useRouter();

    const clickHandler = () => {
      if(step==4){
      // API call to create new freelancer here
        router.push("/projects")
    }
      else
      setStep(prev=>prev + 1)
    }

  return (
    <>
    <button className='px-8 py-1.5 w-fit ml-auto mr-[25%] rounded-md bg-black text-white border border-black hover:text-black hover:bg-white transition-colors ease-linear'
     onClick={clickHandler}>Next</button>
    <div className='flex w-1/2 items-center mx-auto'>
      <section  className={step>=1?activeClassName:normalClassName} onClick={()=>setStep(1)}></section>
      <aside className={`h-1 transition-all ease-in delay-150 ${step>=2?"bg-black":"bg-gray-300"} grow`}></aside>
      <section  className={step>=2?activeClassName:normalClassName} onClick={()=>setStep(2)}></section>
      <aside className={`h-1 transition-all ease-in delay-150 ${step>=3?"bg-black":"bg-gray-300"} grow`}></aside>
      <section  className={step>=3?activeClassName:normalClassName} onClick={()=>setStep(3)}></section>
      <aside className={`h-1 transition-all ease-in delay-150 ${step>=4?"bg-black":"bg-gray-300"} grow`}></aside>
      <section  className={step==4?activeClassName:normalClassName} onClick={()=>setStep(4)}></section>
    </div>
    </>
  )
}

export default Stepper
