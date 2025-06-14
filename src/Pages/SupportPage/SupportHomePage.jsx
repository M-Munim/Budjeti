import Navbar from "../../Components/Navbar/Navbar"
import SupportForm from "./SupportForm"
import Contact from "./Contact"
import Footer from "../HomePage/Footer"
import LegalPage from "./Legalpage"


const SupportHomePage = () => {
  return (
    <>
    <Navbar/>
    <div className="bg-[#F1F5FF]">

    <SupportForm/>
    </div>
    <Contact/>
    <div className="bg-[#F1F5FF]">
<LegalPage/>
    </div>
<Footer/>
    </>
  )
}

export default SupportHomePage
