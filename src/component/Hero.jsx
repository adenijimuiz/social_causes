import React from 'react'

const Hero = () => {
  return (
    <div className='flex flex-col gap-4 items-center justify-center bg-blue-400/20 my-4 py-6'>
      <h2 className='font-semibold text-blue-800 text-4xl text-center'>Together for <br className='block md:hidden'/> Change</h2>
      <p >Join us in build a better future</p>
      <button className='bg-blue-800 text-white py-3 px-8'>Join our Course</button>
    </div>
  )
}

export default Hero