import Navbar from "../../Components/Navbar/Navbar"

const HeroSection = () => {
    return (
        <>
            <section className="w-full flex items-center justify-center px-6 relative">
                <div className="absolute right-40 top-0">
                    <img className="h-96" src="/arrow.png" alt="" />
                </div>
                <div className="absolute right-40 top-32">
                    <img className="" src="/Star.png" alt="" />
                </div>
                <div className="w-9/12 flex flex-col md:flex-row items-center justify-between pb-36">
                    <div className="flex-1  text-center md:text-left mt-36">
                        <div className="flex flex-col ">
                            <div className="">
                                <h1 className="text-7xl w-[600px]  font-bold text-gray-800 ">
                                    Take Control of  Your Business  Finances
                                </h1>
                                <p className="text-[#71717A] text-[18px] ">
                                    take full control of their finances
                                </p>
                            </div>

                            <div className="">
                                <button className=" bg-[#1929D6] text-white px-6 py-3 rounded-lg cursor-pointer transition mt-24">
                                    Apply For Business Account <span className="p-3 text-xl"> → </span>
                                </button>
                            </div>
                        </div>


                    </div>

                    <div className="flex mt-48 -ml-12 gap-2 ">
                        <img
                            src="/walletGroup.png"
                            alt="Hero"
                            className="w-[343px] h-[420px]"
                        />

                        <div className="mt-28 ">
                            <p className="text-[#71717A] text-[18px] p-1">Our platform empowers businesses to take full control of their finances by replacing slow, fragmented payment processes with an intelligent, all-in-one digital wallet. From instant transfers and real-time reporting to multi-user access and integrated prepaid cards, we streamline everything from supplier payments to expense management — so you can save time, reduce costs, and focus on growth.</p>
                        </div>
                    </div>
    <div className="absolute flex bottom-2 right-[400px] gap-36">
<img src="/Star.png" alt="" className="w-10 h-10" />
<img src="/Star.png" alt="" className="" />
                </div>
                </div>
            
            </section>
        </>
    )
}

export default HeroSection
