import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../HomePage/Footer'
import HeroSection from './HeroSection'
import JoinUs from './JoinUs'
import SecondSection from './SecondSection'
import ThirdSection from './ThirdSection'

const WalletHomePage = () => {
  return (
    <>
      <Navbar />
      <div className="bg-[#F1F5FF]">

        <HeroSection />
      </div>
      <SecondSection/>
      <ThirdSection/>
      <JoinUs/>
      <Footer/>
    </>
  )
}

export default WalletHomePage
