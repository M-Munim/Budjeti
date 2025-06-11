
const HowItWork = () => {
  const features = [
        { icon: "/icon.png", text: "Create an account" },
        { icon: "/icon.png", text: "Verify identity (KYC)" },
        { icon: "/icon.png", text: "Take payments via a variety of methods" },
        { icon: "/icon.png", text: "Add money to wallet" },
        { icon: "/icon.png", text: "Send or receive payments" },
        { icon: "/icon.png", text: "Withdraw funds anytime" }
    ];
    return (
        <>
            <section className="w-full flex items-center justify-center px-6 mt-44">
                <div className="w-9/12 mt-40 flex flex-col md:flex-row items-center justify-between gap-8">

          

                    <div className="flex-1 mb-36">
                        <div className="">
                            <h3 className="text-[#1929D6] text-[18px]">EASY TO USE</h3>
                            <h2 className="text-[48px] font-bold">How It Works?</h2>
                        </div>

                      <div className="flex flex-col gap-6 ">
  {features.map((feature, index) => (
    <div key={index} className="flex items-center space-x-3">
      <img src={feature.icon} alt="Feature Icon" className="w-6 h-6" />
      <p className="text-gray-800 p-[2px] text-[18px]">{feature.text}</p>
    </div>
  ))}
</div>

                    </div>

                      <div className="flex w-[700px] relative text-center ml-44  mb-36">
                            <img className="absolute right-8 top-[-160px] h-96" src="./ellipse.png" alt="" />
                        <div className="w-[420px] h-[400px] ml-auto bg-[#1929D6]"></div>
                      <div className="">
                          <img
                            src="/phonesgroup.png"
                            alt="Phone"
                            className="absolute w-[720px] h-[700px] top-54 left-[550px]  transform -translate-x-1/2 -translate-y-1/2 "
                        />
                      </div>
                      <div className="absolute bottom-[-100px] left-72">
                        <img className="" src="./Star.png" alt="" />
                      </div>
                      <div className="absolute -top-[100px] -left-96">
                        <img className="w-10" src="./Star.png" alt="" />
                      </div>
                    </div>
                </div>
            </section>
        </>
    );
};


export default HowItWork
