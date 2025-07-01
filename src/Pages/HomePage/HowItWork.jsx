
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
        <div className="w-full lg:w-9/12 mt-8 xl:mt-40 mb-10 lg:mb-10 flex flex-col xl:flex-row items-center justify-between gap-8">


          <div className="flex-1 text-left md:text-center xl:text-left lg:mb-36 w-full">
            <div className="">
              <h3 className="text-[#1929D6] text-[14px] lg:text-[18px] whitespace-nowrap overflow-x-hidden font-bold">EASY TO USE</h3>
              <h2 className="text-[18px] lg:text-[48px] font-bold whitespace-nowrap overflow-x-hidden">How It Works?</h2>
            </div>

            <div className="flex flex-col gap-3.5 lg:gap-5 mt-5">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center justify-start md:justify-center xl:justify-start space-x-3">
                  <img src={feature.icon} alt="Feature Icon" className="w-3.5 h-3.5 lg:w-6 lg:h-6" />
                  <p className="text-gray-800 text-left lg:text-[18px] lg:whitespace-nowrap overflow-x-hidden">{feature.text}</p>
                </div>
              ))}
            </div>

          </div>

          <div className="flex w-full lg:w-[700px] relative text-center lg:ml-44 lg:mb-36 mt-10 lg:mt-0">
            <img className="hidden xl:block absolute right-16 top-[-180px] h-92" src="./ellipse.png" alt="" />
            <div className="w-[250px] h-[250px] lg:w-[450px] lg:h-[330px] xl:w-[490px] xl:h-[335px] ml-16 md:ml-62 lg:ml-20 xl:ml-auto bg-[#1929D6]"></div>
            <div className="">
              <img
                src="/phonesgroup.png"
                alt="Phone"
                className="absolute w-[420px] h-[400px] lg:w-[680px] lg:h-[595px] xl:w-[720px] xl:h-[600px] top-32 lg:top-44 xl:top-40 left-[210px] md:left-[410px] lg:left-[350px] xl:left-[480px] transform -translate-x-1/2 -translate-y-1/2 "
              />
            </div>
            <div className="hidden xl:block absolute bottom-[-70px] left-52">
              <img className="w-12" src="./Star.png" alt="" />
            </div>
            <div className="hidden xl:block absolute -top-[100px] -left-96">
              <img className="w-10" src="./Star.png" alt="" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};


export default HowItWork
