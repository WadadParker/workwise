"use client"
import React from 'react'
import { useState } from 'react'

import { useFreelance } from './FreelanceContext'
import { FreelanceProvider } from './FreelanceContext'

import Stepper from './components/Stepper'
import FillDetails from './components/FillDetails'
import Domain from './components/Domain'
import Expertise from "./components/Expertise"
import Skills from './components/Skills'

const page = () => {
  const [step,setStep] = useState(1);
  return (
    <FreelanceProvider>
    <div className='bg-bg h-screen flex flex-col justify-start gap-y-10'>
      {step==1 && <FillDetails />}
      {step==2 && <Domain />}
      {step==3 && <Expertise />}
      {step==4 && <Skills />}
      <Stepper step={step} setStep={setStep}/>
    </div>
    </FreelanceProvider>
  )
}

export default page
