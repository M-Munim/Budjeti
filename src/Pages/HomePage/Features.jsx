
const Features = () => {
    const features = [
        { icon: "/icon.png", text: "Instant P2P payments" },
        { icon: "/icon.png", text: "Linked bank accounts & debit cards" },
        { icon: "/icon.png", text: "Digital wallet balance" },
        // { icon: "/icon.png", text: "Prepaid card access" },
        { icon: "/icon.png", text: "Optional social feed / memo sharing" },
        { icon: "/icon.png", text: "Group transactions and shared accounts" },
    ];
    return (
        <>
            <section className="w-full  flex items-center justify-center px-6 mt-44">

                <div className="w-9/12 mt-10 flex flex-col md:flex-row items-center justify-between gap-8">
                    {/* Left Text Section */}
                    <div className="flex-1 text-center md:text-left relative ">
                        <img src="/public/1circle.png" className="absolute w-[415px] -top-24 right-86" alt="" />
                        <img src="/public/2circle.png" className="absolute w-[415px] -top-16 right-86" alt="" />
                        <img src="/public/3circle.png" className="absolute w-[415px] -top-8 right-86" alt="" />
                        <div className=" w-[515px] h-[300px] bg-[#1929D6] "></div>
                        <img
                            src="/iphoneFeature.png"
                            alt="Phone"
                            className="absolute top-44 left-[290px] transform -translate-x-1/2 -translate-y-1/2 w-[420px] h-[691px] "
                        />
                    </div>


                    {/* Right Image Section */}
                    <div className="flex-1 -mt-28 ml-44">
                        <div className="">
                            <h3 className="text-[#1929D6] text-[18px]">FEATURES</h3>
                            <h2 className="text-[48px] font-bold ">Designed For Business.</h2>
                        </div>

                        <div className="flex flex-col gap-10 mt-2">
                            {features.map((feature, index) => (
                                <div key={index} className="flex items-center space-x-3 ">
                                    <img src={feature.icon} alt="Feature Icon" className="w-6 h-6" />
                                    <p className="text-gray-800">{feature.text}</p>
                                </div>
                            ))}
                        </div>

                        <div className="relative">
                            <div className="absolute right-44 top-16">
                                <img src="./Star.png" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Features
