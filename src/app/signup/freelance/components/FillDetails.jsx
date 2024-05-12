import React from 'react'

const FillDetails = () => {
  return (
    <section className='border border-black rounded-xl p-4 pb-8 w-1/2 mx-auto flex flex-col gap-y-4 mt-20'>
        <h1 className='font-medium text-3xl underline mb-2'>Fill the details</h1>
        <input placeholder='Name' className='bg-white outline-none px-4 py-2 rounded-md text-2xl font-medium placeholder:text-black ' />
        <input placeholder='Email' className='bg-white outline-none px-4 py-2 rounded-md text-2xl font-medium placeholder:text-black ' />
        <input placeholder='Password' type="password" className='bg-white outline-none px-4 py-2 rounded-md text-2xl font-medium placeholder:text-black ' />
        <input placeholder='Re-Password' type="password" className='bg-white outline-none px-4 py-2 rounded-md text-2xl font-medium placeholder:text-black ' />
      </section>
  )
}

export default FillDetails
