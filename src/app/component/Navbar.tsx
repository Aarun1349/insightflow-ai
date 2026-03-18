import React from 'react'

const Navbar = () => {
  return (
    <div className='bg-primary text-white flex h-16 p-auto items-center justify-content-between'>
        <h1 className='text-2xl font-bold m-auto cursor-pointer'>InsightFlow <span className='text-secondary'>AI</span></h1>
        <h4 className='text-sm m-auto '>Your <span className='text-secondary font-bold'>AI-Powered</span> Data Analysis Companion</h4>
    </div>
  )
}

export default Navbar