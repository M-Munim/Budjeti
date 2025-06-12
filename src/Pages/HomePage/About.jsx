import React from 'react'

const About = () => {
  return (
    <section className="relative w-full text-white px-6 flex items-center justify-center bg-[#18181B]">
      <div className="w-full lg:w-9/12 pt-4 pb-4 lg:pt-10 lg:pb-24 flex flex-col md:flex-row items-center justify-between gap-8 mb-[200px] lg:mb-0">
        <div className="hidden lg:block absolute left-0 mt-60 z-0">
          <img className="h-64" src="/aboutUsL.png" alt="" />
        </div>

        <div className="hidden lg:block absolute right-0 mb-0  ">
          <img className="" src="/aboutUsR.png" alt="" />
        </div>

        <div className="hidden lg:block absolute right-[600px] top-10  ">
          <img className=" w-8 h-8" src="/aboutStar.png" alt="" />
        </div>



        <div className="flex-1 text-center lg:text-left ">
          <div className="flex flex-col lg:flex-row lg:justify-between items-center lg:items-start">
            <h2 className="text-3xl lg:text-[48px] font-semibold mb-4">About Us</h2>
            <img className="hidden lg:block ml-[700px] w-8 h-8" src="/aboutStar.png" alt="" />
          </div>
          <p className="text-white text-sm leading-relaxed max-w-md lg:w-[400px] mx-auto md:mx-0 mb-6">
            We aim to revolutionize the way businesses collect and manage their finances by providing an all-in-one digital wallet and payment platform built for speed, transparency, and control. Our mission is to eliminate the friction of traditional banking processes, empowering businesses to move money instantly, track payments in real time, and streamline financial operations with ease.
          </p>
          <img className="hidden lg:block absolute w-8 left-[640px] bottom-36" src="/aboutStar.png" alt="" />
          <button className="bg-white text-black px-6 py-3 rounded-lg z-10 relative flex items-center gap-2 mx-auto md:mx-0">
            Download App
            <img src="/apple.png" alt="Apple Icon" className="w-5 h-5" />
          </button>





        </div>

        <div className="flex items-center justify-center lg:justify-end absolute h-full top-48 right-24 lg:right-16 lg:top-0 ">
          <img
            src="./aboutPhone2.png"
            alt="Phone Back"
            className="w-32 h-32 lg:w-96 lg:h-full"
          />

          <img
            src="./aboutPhone.png"
            alt="Phone Front"
            className="right-10 h-32 lg:h-full absolute lg:right-32 transform   z-10 rounded-xl shadow-2xl"
          />
        </div>

      </div>
    </section>
  )
}

export default About
