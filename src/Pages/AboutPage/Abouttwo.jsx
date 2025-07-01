import React from 'react'
import Navbar from "../../Components/Navbar/Navbar"
import About from "../HomePage/About"
import ContactForm from "../HomePage/Contactform"
import Footer from "../HomePage/Footer"

const Abouttwo = () => {
  return (
    <div>
      <Navbar />
      <div className="pt-24">
        <About />
      </div>
      <ContactForm />

      <Footer />
    </div>
  )
}

export default Abouttwo
