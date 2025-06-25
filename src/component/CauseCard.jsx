import React from 'react'
import causes from '../assets/assets'

const CauseCard = () => {
  return (
    <>
    <div className='grid grid-cols-1 md:grid-cols-2 gap-6 max-w-[1100px] mx-auto'>
      {causes.map((cause, index) => (
      <div key={index} className='flex flex-col md:flex-row gap-4 bg-white shadow-md rounded-lg p-4'>
          <img src={cause.image} alt={cause.title} className='w-full md:w-56 h-40 object-cover rounded-md' />

          <div className='flex flex-col justify-center'>
            <h2 className='text-blue-800 text-xl font-semibold mb-2'>{cause.title}</h2>
            <p className='text-gray-700 text-sm'>{cause.description}</p>

            <button className='bg-blue-800 text-white px-4 py-2 w-fit mt-3 rounded-lg hover:bg-blue-900 transition duration-300 self-center'>Learn More</button>
          </div>
    </div>
    ))}
  </div>
  
    </>
    

  )
}

export default CauseCard