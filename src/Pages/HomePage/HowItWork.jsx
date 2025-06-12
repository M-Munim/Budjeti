
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
      <section className="w-full flex items-center justify-center px-6 lg:mt-44">
        <div className="w-9/12 mt-8 lg:mt-40 mb-10 lg:mb-10 flex flex-col md:flex-row items-center justify-between gap-8">


          <div className="flex-1 text-center lg:text-left lg:mb-36 w-full">
            <div className="">
              <h3 className="text-[#1929D6] text-[14px] lg:text-[18px]">EASY TO USE</h3>
              <h2 className="text-[18px] lg:text-[48px] font-bold">How It Works?</h2>
            </div>

            <div className="flex flex-col gap-8 mt-5">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <img src={feature.icon} alt="Feature Icon" className="w-6 h-6" />
                  <p className="text-gray-800 text-left lg:text-[18px] ">{feature.text}</p>
                </div>
              ))}
            </div>

          </div>

          <div className="flex w-full lg:w-[700px] relative text-center lg:ml-44  lg:mb-36">
            <img className="hidden lg:block absolute -right-4 top-[-180px] h-96" src="./ellipse.png" alt="" />
            <div className="w-[180px] h-[200px] lg:w-[420px] lg:h-[400px] ml-4 lg:ml-auto bg-[#1929D6]"></div>
            <div className="">
              <img
                src="/phonesgroup.png"
                alt="Phone"
                className="absolute w-[420px] h-[340px] lg:w-[720px] lg:h-[700px] top-28 lg:top-54 left-[120px] lg:left-[550px]  transform -translate-x-1/2 -translate-y-1/2 "
              />
            </div>
            <div className="hidden lg:block absolute bottom-[-70px] left-72">
              <img className="w-12" src="./Star.png" alt="" />
            </div>
            <div className="hidden lg:block absolute -top-[100px] -left-96">
              <img className="w-10" src="./Star.png" alt="" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};


export default HowItWork
