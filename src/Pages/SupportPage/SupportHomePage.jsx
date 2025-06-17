import Navbar from "../../Components/Navbar/Navbar"
import Contact from "./Contact"
import Footer from "../HomePage/Footer"
import Legal from "./Legal"
import Support from "./Support"


const SupportHomePage = () => {
  return (
    <>
      <Navbar />
      <div className="bg-[#F1F5FF]">

        <Support />
      </div>
      <Contact />
      <div className="bg-[#F1F5FF]">
        <Legal />
      </div>
      <Footer />
    </>
  )
}

export default SupportHomePage
