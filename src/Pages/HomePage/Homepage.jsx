import Navbar from "../../Components/Navbar/Navbar"
import AboutUs from "./AboutUS.jsx"
import Accordion from "./Accordion"
import Features from "./Features"
import Footer from "./Footer"
import HeroSection from "./HeroSection"
import HowItWork from "./HowItWork"
import Testimonials from "./Testimonials"

const Homepage = () => {
  return (
    <>
      <Navbar />
      <div className="bg-[#F1F5FF]">

        <HeroSection />
      </div>
      <Features />
      <div className="bg-[#F1F5FF]">

        <HowItWork />
      </div>
      <Testimonials />
      <AboutUs />
      <Accordion />
      <Footer />
    </>
  )
}

export default Homepage
