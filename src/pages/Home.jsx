import React from 'react'
import Hero from '../component/Hero'
import Footer from '../component/Footer'
import CauseCard from '../component/CauseCard'
import Nav from '../component/Nav'

const Home = () => {
  return (
    <div className=''>
      <Nav />
      <Hero />
      <CauseCard />
      <Footer  />
    </div>
  )
}

export default Home