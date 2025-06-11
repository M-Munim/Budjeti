const Testimonials = () => {
    return (
        <section className="w-full py-20 px-6 flex items-center justify-center">
            <div className="text-center max-w-3xl">
                {/* Title */}
                <h4 className="text-[#6366F1] uppercase tracking-widest text-sm font-semibold mb-2">
                    Testimonials
                </h4>
                <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-10">
                    What Our Users Say <br /> About Us?
                </h2>

                {/* User Image */}
                <div className="flex flex-row  justify-between">
                   
                    <div className="flex flex-col items-center ">
                        <div className="mt-20 w-3 h-3 rounded-full bg-[#D946EF]"></div>
                        <img className="mt-44 w-14 h-14" src="/profile2.png" alt="" />
                    </div>

                    <div className="mt-20 ">
                        <div className="flex justify-center mb-4">
                            <img
                                src="/profile.png"
                                alt="User"
                                className="w-36 h-36 object-cover rounded-full "
                            />
                        </div>

                        <div className="mr-92 w-3 h-3 rounded-full bg-[#1929D6]"></div>
                        <h3 className="text-lg font-semibold">Jhon Doe</h3>
                        <p className="text-gray-500 text-sm mb-3">Sydney, Australia</p>
                        <div className="flex justify-center">
                            <img className="w-28 h-5 " src="/stars.png" alt="" />
                        </div>
                    </div>
                    <div className="">
                           <div className="flex flex-col items-center ">
                        <img className=" w-14 h-14" src="/profile2.png" alt="" />
                        <div className="mt-44  w-3 h-3 rounded-full bg-[#D946EF]"></div>
                    </div>
                    </div>

                </div>




                {/* Stars */}
                {/* <div className="flex justify-center gap-1 mb-6">
          {[...Array(5)].map((_, i) => (
            <img key={i} src="" alt="Star" className="w-5 h-5" />
          ))}
        </div> */}

                {/* Testimonial Text */}
                <div className="relative w-9/12 mx-auto  text-gray-600 text-base px-4 leading-relaxed">
                    <div className="flex justify-between items-center">
                        <div className="flex gap-5">
                            <img className="w-8 h-5 mt-2.5" src="./leftArrow.png" alt="" />
                            <img className="w-10" src="./VectorT.png" alt="" />
                        </div>

                        <img className="w-8 h-5 mt-2.5" src="./rightArrow.png" alt="" />
                    </div>

                    <p className="text-black w-[70%] mx-auto text-center">           Lorem ipsum dolor sit amet consectetur. Et id habitant semper arcu turpis ornare tellus tortor eleifend. Platea sit at id massa sit at non bibendum viverra. Enim dui neque senectus consequat
                    </p>
                    <div className="flex justify-end mt-[-40px]"><img className="w-10" src="./VectorB.png" alt="" /></div>
                </div>

                <div className="flex justify-between">
                    <div className="w-3 h-3 bg-[#1929D6] rounded-full"></div>
                    <div className="w-3 h-3 bg-[#F97316] rounded-full mt-10"></div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
