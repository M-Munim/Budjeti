import Navbar from "../../Components/Navbar/Navbar";

const HeroSection = () => {
    const images = [
        "/pic1.png",
        "/pic2.png",
        "/pic3.png",
    ];

    return (
        <>
            <section className="w-full  flex items-center justify-center px-6 relative">
                <div className="absolute right-40 top-0">
                    <img className="h-96" src="/arrow.png" alt="" />
                </div>
                <div className="absolute right-40 top-32">
                    <img className="" src="/Star.png" alt="" />
                </div>
                 <div className="absolute right-[520px] bottom-32">
                    <img className="w-12" src="/Star.png" alt="" />
                </div>
                <div className="w-9/12 flex flex-col md:flex-row items-center justify-between gap-8">
                    <div className="flex-1 text-center md:text-left ">
                        <div className="">
                            <h1 className="text-[64px] md:text-5xl font-bold text-gray-800 mt-6">
                                Empower Your <br /> Business With <span className="text-[#1929D6] whitespace-nowrap">Seamless Payments</span>
                            </h1>
                            <p className="text-[#71717A] text-[18px] w-[460px]">
                                Send, receive, and manage payments effortlessly — with a secure digital wallet designed for business.
                            </p>
                        </div>

                        <div className="mt-14">
                            <button className=" bg-[#1929D6] text-white px-6 py-3 rounded-lg cursor-pointer transition">
                                Get Started Today <span className="p-3 text-xl"> → </span>
                            </button>
                        </div>


                        <div className="w-[413px] flex gap-4 mt-7">
                            <div className="w-[95px] h-[80px]  text-white  rounded-lg bg-black flex items-center justify-center">
                               <span className="text-xl font-semibold">1.0m</span> 
                            </div>
                            <div className="w-[294px] mt-2">
                                <div className="flex gap-2">
                                    {images.map((src, index) => (
                                        <img
                                            key={index}
                                            src={src}
                                            alt={`Image ${index + 1}`}
                                            className="w-5 h-5  rounded-full"
                                        />
                                    ))}
                                </div>
                                <p>There are 1.0 million users in the world,
                                    everyone is happy with our service.</p>
                            </div>
                        </div>
                    </div>

                    <div className="flex-1 ">
                        <img
                            src="/heroSectionPhone.png"
                            alt="Hero"
                            className="w-[439px]  mt-[110px] ml-[250px]"
                        />
                    </div>

                </div>
            </section>
        </>
    );
};

export default HeroSection;
