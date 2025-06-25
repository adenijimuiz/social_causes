import React from 'react'
import { assests } from '../assets/assets'

const Footer = () => {
  return (
    <footer className='mt-10 max-w-[1100px] mx-auto'>
      <p className='text-center'>
        contact: <a href="mailto:terntribe.gmail.com">support@terntribe.org</a>
      </p>

      <div className='flex items-center justify-center gap-3.5  mt-3'>
        <a href='#'>
          <img src={assests.facebook_icon} alt="facebook_icon" />
        </a>

        <a href='#'>
          <img src={assests.twitter_icon} alt="twitter_icon" />
        </a>

        <a href='#'>
          <img src={assests.instagram_icon} alt="instagram_icon" />
        </a>
      </div>
    </footer>
  )
}

export default Footer