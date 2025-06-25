import React from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { assests } from '../assets/assets'

const Nav = () => {
  const location = useLocation()
  const isHomepage = location.pathname === '/'
  return (
    <nav className='flex justify-between items-center max-w-[1100px] mx-auto'>
        <NavLink to={'/'} className='text-blue-800 text-3xl'>Terntribe</NavLink>

        {isHomepage && <NavLink to = '/get_involved' className={'flex items-center gap-2'}>     <p>Get Involved</p> 
        <img src={assests.arrow_icon} alt="arrow"  className='w-3.5'/>
        </NavLink>}
        
      </nav>
  )
}

export default Nav