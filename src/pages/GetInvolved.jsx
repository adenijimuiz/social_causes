import React from 'react'
import Nav from '../component/Nav'
import Footer from '../component/Footer'

const GetInvolved = () => {
  return (
    <div>
      <Nav />

      <h1 className='font-semibold text-blue-800 text-4xl text-center my-5'>Be Part Of The <br className='block md:hidden'/> Movement</h1>

      <div className='min-h-screen flex justify-center items-center bg-gray-50 px-4'>
        <form className='w-full max-w-md bg-white p-6 rounded-lg shadow-md space-y-4'>
          <h2 className='text-2xl font-semibold text-center text-blue-800'>Get Involved</h2>

          {/* Name */}
          <div className='flex flex-col'>
            <label htmlFor='name' className='mb-1 text-sm'>Name</label>
            <input type='text' id='name' placeholder='Full Name' required className='border border-gray-300 px-3 py-2 rounded-md outline-none focus:ring-2 focus:ring-blue-200' />
          </div>

          {/* Email */}
          <div className='flex flex-col'>
            <label htmlFor='email' className='mb-1 text-sm'>Email</label>
            <input type='email' id='email' placeholder='Email Address' required className='border border-gray-300 px-3 py-2 rounded-md outline-none focus:ring-2 focus:ring-blue-200'/>
          </div>

          {/* Cause Selection */}
          <div className='flex flex-col'>
            <label htmlFor='cause' className='mb-1 text-sm'>Select a Cause</label>
            <select required id='cause' className='border border-gray-300 px-3 py-2 rounded-md outline-none focus:ring-2 focus:ring-blue-200'>
              <option value=''>-- Choose a cause --</option>
              <option value='environment'>Environmental Action</option>
              <option value='education'>Education for All</option>
              <option value='mental-health'>Mental Health Support</option>
              <option value='animal-welfare'>Animal Welfare</option>
            </select>
          </div>

          {/* Submit Button */}
          <button type='submit' className='w-full bg-blue-800 text-white py-3 rounded-md hover:bg-blue-900 transition duration-300'>
            Submit
          </button>
        </form>
      </div>
      <Footer />
    </div>
  )
}

export default GetInvolved