const AboutUs = () => {
  return (
    <section className="w-full text-white px-6 flex items-center justify-center bg-[#18181B]">
                <div className="w-9/12 mt-10 flex flex-col md:flex-row items-center justify-between gap-8">
  <div className="absolute left-10 mt-12 ">
            <img className="h-44" src="/aboutUsL.png" alt="" />
          </div>

          <div className="absolute right-64 mb-[180px]  ">
            <img className="h-44" src="/aboutUsR.png" alt="" />
          </div>
        <div className="flex-1 text-center md:text-left ">
         <div className="flex justify-between">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Us</h2>
             <img className="ml-[700px] w-8 h-8" src="/aboutStar.png" alt="" />
         </div>
          <p className="text-white mb-6 text-sm w-92">
          We aim to revolutionize the way businesses collect and manage their finances by providing an all-in-one digital wallet and payment platform built for speed, transparency, and control. Our mission is to eliminate the friction of traditional banking processes, empowering businesses to move money instantly, track payments in real time, and streamline financial operations with ease.
          </p>
          <button className="bg-white text-black px-6 py-3 rounded-lg z-0">
            Download App
          </button>

       
        
        </div>

    <div className="flex-1 flex items-center  justify-end relative">
  <img
    src="./aboutPhone2.png"
    alt="Phone Back"
    className="w-72 rounded-lg shadow-lg"
  />

  <img
    src="./aboutPhone.png"
    alt="Phone Front"
    className="w-80  absolute right-24 h-72  transform   z-10 rounded-xl shadow-2xl"
  />
</div>


      </div>
    </section>
  );
};

export default AboutUs;
