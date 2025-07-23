import React from 'react'
import Legal from './Legal'
import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../HomePage/Footer'

const Legalhomepage = () => {
  return (
    <>
      <Navbar />
      <div className="pt-10">
        <Legal />
      </div>
      <Footer />

    </>
  )
}

export default Legalhomepage
