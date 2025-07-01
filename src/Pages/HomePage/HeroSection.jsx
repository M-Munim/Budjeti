import Navbar from "../../Components/Navbar/Navbar";
import { Link } from "react-router-dom";

const HeroSection = () => {
  // const images = ["/pic3.png", "/pic2.png", "/pic1.png"];

  return (
    <>
      <section className="w-full flex items-center justify-center px-6 relative">
        <div className="absolute right-[280px] top-0 z-0 hidden lg:block">
          <img className="h-96" src="/arrow.png" alt="Arrow" />
        </div>
        <div className="absolute right-64 top-32 hidden lg:block">
          <img className="w-10" src="/Star.png" alt="Star Top" />
        </div>
        <div className="absolute right-[650px] bottom-48 hidden lg:block">
          <img className="w-8" src="/Star.png" alt="Star Bottom" />
        </div>

        <div className="max-w-7xl mx-auto flex flex-col xl:flex-row items-center justify-between gap-8 z-10">

          <div className="flex-1 text-center xl:text-left">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-[64px] font-bold text-gray-800 leading-tight mt-24 lg:mt-20 xl:mt-6">
              Empower Your <br />
              Business With{" "}
              <span className="text-[#1929D6] whitespace-nowrap">Seamless Payments</span>
            </h1>

            <p className="text-[#71717A] text-sm sm:text-base lg:text-lg mt-4 max-w-[420px] mx-auto xl:mx-0">
              Send, receive, and manage payments effortlessly — with a secure digital wallet designed for business.
            </p>

            <div className="mt-10">
              <Link to="/business-wallet" >
                <button className="bg-[#1929D6] text-white px-6 py-3 rounded-md cursor-pointer transition text-sm md:text-base">
                  Get Started Today <span className="ml-2 text-xl">→</span>
                </button>
              </Link>
            </div>

            <div className="w-full max-w-[420px] flex flex-col sm:flex-row gap-4 mt-5 xl:mt-10 items-center sm:items-start mx-auto xl:mx-0">
              <div className="w-[60px] h-[65px] rounded-[13px] text-white bg-black flex items-center justify-center text-lg font-semibold">
                1.0m
              </div>

              <div className="flex-1 text-center sm:text-left">
                {/* <div className="flex gap-2 justify-center sm:justify-start mb-2">
                  {images.map((src, index) => (
                    <img
                      key={index}
                      src={src}
                      alt={`Image ${index + 1}`}
                      className="w-7 h-7 rounded-full"
                    />
                  ))}
                </div> */}
                <p className="text-base lg:text-lg xl:text-lg">
                  Over £1 million of transactions a month. Everyone is happy with our service.
                </p>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="flex-1 flex justify-center md:justify-end">
            <img
              src="/heroSectionPhone.png"
              alt="Hero Phone"
              className="w-[300px] md:w-[400px] lg:w-[500px] mt-0 xl:mt-10 "
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
