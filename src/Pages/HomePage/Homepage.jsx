import Navbar from "../../Components/Navbar/Navbar"
import About from "./About"
import Accordion from "./Accordion"
import ContactForm from "./Contactform"
import Features from "./Features"
import Footer from "./Footer"
import HeroSection from "./HeroSection"
import HowItWork from "./HowItWork"
import Testimonials from "./Testimonials"

const Homepage = () => {
  return (
    <>
    <Navbar/>
      <div className="bg-[#F1F5FF]">

        <HeroSection />
      </div>
      <Features />
      <div className="bg-[#F1F5FF]">

        <HowItWork />
      </div>
      <Testimonials />
      {/* <ContactForm/> */}
      <About />
      {/* <Accordion /> */}
      <Footer />
    </>
  )
}

export default Homepage
