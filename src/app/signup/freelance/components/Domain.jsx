"use client"
import React from 'react'

const DomainVector = ({imgSrc}) => {
  return (
    <li className='border-[0.2px] rounded-[10px] border-black hover:cursor-pointer hover:border-highlight-green overflow-hidden p-3 bg-white space-y-2.5'>
        <img src={imgSrc} alt="developer" className="size-48" />
        <h1 className=' text-2xl font-medium text-center'>Developer</h1>
      </li>
  )
}

const Domain = () => {
  return (
    <section className=' mx-auto'>
      <h1 className='text-3xl leading-10 font-medium text-center mt-10'>What is your Domain?</h1>
      <ul className='flex gap-x-10 mt-20 pb-2.5'>
        <DomainVector imgSrc="https://img.freepik.com/free-vector/programming-concept-illustration_114360-1351.jpg?t=st=1715476088~exp=1715479688~hmac=29e382bc437ec3af8b84dd440cffdf9a596fa1d3c4cc78aa2787878e20a63849&w=740" />
        <DomainVector imgSrc="https://img.freepik.com/free-vector/design-tools-concept-illustration_114360-1227.jpg?t=st=1715476733~exp=1715480333~hmac=ae5772991cf7541a08d18fbc1173eefc6299fc533b69d3e7a4795dfe47d717ee&w=740" />
        <DomainVector imgSrc="https://img.freepik.com/free-vector/wall-post-concept-illustration_114360-1022.jpg?t=st=1715476767~exp=1715480367~hmac=26c9df2aa07e69d6696c2404f404d60b015280707c7dccada93b636eca9e004d&w=740" />
        <DomainVector imgSrc="https://img.freepik.com/free-vector/social-tree-concept-illustration_114360-188.jpg?t=st=1715476859~exp=1715480459~hmac=7eb981d06212b370e3bdad196048e6d703e5e0a1bb024f0294777c611ada1883&w=740" />
      </ul>
    </section>
  )
}

export default Domain
