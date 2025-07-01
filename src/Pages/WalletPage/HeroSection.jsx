// import Navbar from "../../Components/Navbar/Navbar"

// const HeroSection = () => {
//     return (
//         <>
//             <section className="w-full flex items-center justify-center px-6 relative ">
//                 <div className="hidden lg:block absolute right-72 top-0">
//                     <img className="h-92" src="/arrow.png" alt="" />
//                 </div>
//                 <div className="hidden lg:block absolute right-64 top-32">
//                     <img className="w-10" src="/Star.png" alt="" />
//                 </div>
//                 <div className="w-9/12 mt-12 lg:mt-10 flex flex-col md:flex-row items-center justify-between pb-12 lg:pb-36">
//                     <div className="flex-1 text-center lg:text-left mt-20 lg:mt-36">
//                         <div className="flex flex-col ">
//                             <div className="">
//                                 <h1 className="text-[26px] lg:text-[64px] w-full lg:w-[600px]  font-bold text-gray-800 ">
//                                     Take Control of  Your Business  Finances
//                                 </h1>
//                                 <p className="text-[#71717A] text-[12px] lg:text-[18px] lg:pt-2">
//                                     Take full control of their finances
//                                 </p>
//                             </div>

//                             <div className="">
//                                 <button className=" bg-[#1929D6] text-white px-6 py-3 rounded-lg cursor-pointer transition mt-10 lg:mt-24">
//                                     Apply For Business Account <span className="p-0 lg:p-3 text-xl"> → </span>
//                                 </button>
//                             </div>
//                         </div>


//                     </div>


//                     <div className="flex flex-col lg:flex-col xl:flex-row mt-4 lg:mt-48 lg:-ml-12 gap-6">
//                         <img
//                             src="/walletGroup.png"
//                             alt="Hero"
//                             className="w-[343px] lg:h-[420px]"
//                         />

//                         <div className="lg:mt-28">
//                             <p className="text-[#71717A] text-base px-2 lg:px-0 lg:text-[18px] text-center lg:text-left">
//                                 Our platform empowers businesses to take full control of their finances by replacing slow, fragmented payment processes with an intelligent, all-in-one digital wallet. From instant transfers and real-time reporting to multi-user access and integrated prepaid cards, we streamline everything from supplier payments to expense management — so you can save time, reduce costs, and focus on growth.
//                             </p>
//                         </div>
//                     </div>

//                     <div className="absolute flex bottom-2 right-[400px] gap-36">
//                         <img src="/Star.png" alt="" className="w-10 h-10 hidden lg:block" />
//                         <img src="/Star.png" alt="" className="hidden lg:block" />
//                     </div>
//                 </div>

//             </section>
//         </>
//     )
// }

// export default HeroSection




{/* <div className="flex flex-col xl:flex-row mt-4 lg:mt-48 lg:-ml-12 gap-6 ">
                        <img
                            src="/walletGroup.png"
                            alt="Hero"
                            className="w-[343px] lg:h-[420px]"
                        />

                        <div className="lg:mt-28 ">
                            <p className="text-[#71717A] text-base px-2 lg:px-0 lg:text-[18px] text-center lg:text-left">Our platform empowers businesses to take full control of their finances by replacing slow, fragmented payment processes with an intelligent, all-in-one digital wallet. From instant transfers and real-time reporting to multi-user access and integrated prepaid cards, we streamline everything from supplier payments to expense management — so you can save time, reduce costs, and focus on growth.</p>
                        </div>
                    </div> */}







import Navbar from "../../Components/Navbar/Navbar";

const HeroSection = () => {
    return (
        <section className="w-full relative px-4 sm:px-6">
            {/* Decorative Images (Arrow and Star) */}
            <div className="hidden lg:block absolute right-20 top-0 z-0">
                <img className="h-24" src="/arrow.png" alt="Arrow" />
            </div>
            <div className="hidden lg:block absolute right-36 top-32 z-0">
                <img className="w-10" src="/Star.png" alt="Star" />
            </div>

            {/* Main Content */}
            <div className="max-w-7xl mx-auto flex flex-col xl:flex-row items-center justify-between gap-12 pt-44 pb-20 relative z-10">
                {/* Left Content */}
                <div className="flex-1 text-center xl:text-left">
                    <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-[64px] font-bold text-gray-800 leading-tight max-w-lg mx-auto xl:mx-0">
                        Take Control of Your Business Finances
                    </h1>
                    <p className="text-[#71717A] mt-4 text-sm sm:text-base lg:text-lg max-w-md mx-auto xl:mx-0">
                        Take full control of their finances
                    </p>

                    <button className="bg-[#1929D6] text-white px-6 py-3 rounded-lg mt-8 sm:mt-10 xl:mt-16 transition duration-300 hover:bg-blue-900">
                        Apply For Business Account <span className="ml-2 text-xl">→</span>
                    </button>
                </div>

                {/* Right Content (Image + Paragraph) */}
                <div className="flex flex-col lg:flex-col xl:flex-row items-center gap-6 xl:items-start">
                    <img
                        src="/walletGroup.png"
                        alt="Wallet Illustration"
                        className="w-[260px] sm:w-[320px] md:w-[360px] lg:h-[420px]"
                    />
                    <p className="text-[#71717A] text-sm sm:text-base lg:text-lg max-w-md text-center xl:text-left px-4 xl:px-0">
                        Our platform empowers businesses to take full control of their finances by replacing slow, fragmented payment processes with an intelligent, all-in-one digital wallet. From instant transfers and real-time reporting to multi-user access and integrated prepaid cards, we streamline everything from supplier payments to expense management — so you can save time, reduce costs, and focus on growth.
                    </p>
                </div>
            </div>

            {/* Bottom Floating Stars */}
            <div className="hidden lg:flex absolute bottom-4 right-12 xl:right-80 gap-12 z-0">
                <img src="/Star.png" alt="Star" className="w-8 h-8" />
                <img src="/Star.png" alt="Star" className="w-8 h-8" />
            </div>
        </section>
    );
};

export default HeroSection;
