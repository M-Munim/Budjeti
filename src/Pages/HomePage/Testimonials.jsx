const Testimonials = () => {
    return (
        <section className="w-full py-20 px-6 flex items-center justify-center">
            <div className="text-center max-w-3xl">
                <h4 className="text-[#6366F1] uppercase tracking-widest text-[14px] lg:text-[18px] font-semibold mb-2">
                    Testimonials
                </h4>
                <h2 className="text-[18px] lg:text-[48px] font-bold text-gray-900 lg:mb-10">
                    What Our Users Say <br /> About Us?
                </h2>

                <div className="flex flex-row justify-between">

                    <div className="hidden lg:block flex-col items-center ">
                        <div className="mt-20 w-3 h-3 rounded-full bg-[#D946EF]"></div>
                        {/* <img className="mt-44 w-14 h-14" src="/man.png" alt="" /> */}
                    </div>

                    <div className="mt-4 lg:mt-20 mx-auto">
                        <div className="flex justify-center mb-4">
                            <img
                                src="/man.png"
                                alt="User"
                                className="w-24 h-24 lg:w-36 lg:h-36 bg-[#D9D9D9] object-cover rounded-full "
                            />
                        </div>

                        <div className="hidden lg:block mr-92 w-3 h-3 rounded-full bg-[#1929D6]"></div>
                        <h3 className="text-[12px] lg:text-[24px] font-semibold">Arslan Yonis</h3>
                        <p className="text-gray-500 text-[9px] lg:text-[18px] lg:mb-3">London, United Kingdom</p>
                        <div className="flex justify-center">
                            <img className="w-14 h-2 lg:w-28 lg:h-5 " src="/stars.png" alt="" />
                        </div>
                    </div>
                    <div className="">
                           <div className="hidden lg:block flex-col items-center ">
                        {/* <img className=" w-14 bg-gray-100 rounded-full p-1 h-14" src="/man.png" alt="" /> */}
                        <div className="mt-44  w-3 h-3 rounded-full bg-[#D946EF]"></div>
                    </div>
                    </div>

                </div>





                <div className="relative w-9/12 mx-auto  text-gray-600 text-base px-4 leading-relaxed">
                    <div className="flex justify-between items-center">
                        <div className="flex gap-5">
                            <img className="w-8 h-5 mt-2.5" src="./leftArrow.png" alt="" />
                            <img className="hidden lg:block w-10" src="./VectorT.png" alt="" />
                        </div>

                        <img className="w-8 h-5 mt-2.5" src="./rightArrow.png" alt="" />
                    </div>

                    <p className="text-black w-full lg:w-[75%] mx-auto text-center ">
                        Managing payments used to be the most time-consuming part of running my business. Since switching to this platform, everything has changed. I can now take paymets,  top up my wallet, pay vendors, and assign staff cards all in one place. It’s fast, secure, and incredibly intuitive. I even get real-time insights that help me forecast spending more accurately. This is hands down the smartest financial tool we’ve added to our workflow
                    </p>
                    <div className="hidden lg:flex justify-end  mr-8 "><img className="w-10" src="./VectorB.png" alt="" /></div>
                </div>

                <div className="flex justify-between">
                    <div className="hidden lg:block w-3 h-3 bg-[#1929D6] rounded-full"></div>
                    <div className="hidden lg:block w-3 h-3 bg-[#F97316] rounded-full mt-10"></div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
