
const Features = () => {
    const features = [
        { icon: "/icon.png", text: "Instant P2P payments" },
        { icon: "/icon.png", text: "Linked bank accounts & debit cards" },
        { icon: "/icon.png", text: "QR code payments" },
        { icon: "/icon.png", text: "Digital wallet balance" },
        { icon: "/icon.png", text: "Real-time notifications" },
        { icon: "/icon.png", text: "Prepaid card access" },
        { icon: "/icon.png", text: "Optional social feed / memo sharing" },
    ];
    return (
        <>
            <section className="w-full  flex items-center justify-center px-6 mt-16 lg:mt-44">

                <div className="w-full lg:w-9/12 mt-10 flex flex-col xl:flex-row items-center justify-between gap-8 mb-20 xl:mb-24">
                    <div className="flex-1 text-center lg:text-left relative ">
                        <img src="/vectorsGroup.png" className="hidden lg:block absolute w-[518px] h-[689px] -top-[200px] right-60 rotate-[165deg]" alt="" />

                        <div className="w-[250px] h-[250px] lg:w-[515px] lg:h-[300px]"
                            style={{
                                background: `linear-gradient(0deg, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.2)),
               linear-gradient(0deg, #1929D6, #1929D6)`
                            }}

                        >

                        </div>
                        <img
                            src="/iphoneFeature.png"
                            alt="Phone"
                            className="absolute top-[135px] lg:top-44 left-[150px] lg:left-[290px] transform -translate-x-1/2 -translate-y-1/2 w-[250px] h-[420px] lg:w-[420px]  lg:h-[691px] "
                        />
                    </div>


                    <div className="flex-1 text-left md:text-center xl:text-left mt-8 lg:mt-40 xl:mt-0 xl:ml-36 w-full">
                        <div className="">
                            <h3 className="text-[#1929D6] text-[14px] lg:text-[18px] font-bold">FEATURES</h3>
                            <h2 className="text-[18px] lg:text-[30px] xl:text-[48px] font-bold ">Designed For Business.</h2>
                        </div>




                        <div className="flex flex-col gap-3.5 lg:gap-5 mt-4 lg:mt-10">
                            {features.map((feature, index) => (
                                <div key={index} className="flex items-center justify-start md:justify-center xl:justify-start space-x-3">
                                    <img
                                        src={feature.icon}
                                        alt="Feature Icon"
                                        className="w-3.5 h-3.5 lg:w-6 lg:h-6"
                                    />
                                    <p className="text-gray-800">{feature.text}</p>
                                </div>
                            ))}
                        </div>


                        <div className="relative">
                            <div className="hidden xl:block absolute right-56 top-32">
                                <img className="w-10" src="./Star.png" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Features
