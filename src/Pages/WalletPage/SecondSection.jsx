
const SecondSection = () => {
 const features = [
    {
      icon: "/icon1.png",
      title: "Built For Modern Businesses",
      description:
        "Automated invoice management with real-time payment tracking and smart reminders for outstanding payments.",
    },
    {
      icon: "/icon2.png",
      title: "Team Wallet Access",
      description:
        "Role-based permissions and multi-user access with spending limits and approval workflows for team members.",
    },
    {
      icon: "/icon3.png",
      title: "Quick Business Withdrawals",
      description:
        "Fast bank transfers and same-day payouts to your business accounts with competitive rates and transparent fees.",
    },
    
  
  ];

  return (
    <section className="py-20 px-6 bg-white ">
      {/* Heading */}
      <div className="w-9/12 mx-auto text-center -mt-12 lg:-mt-0 mb-12">
        <h2 className="text-[24px] lg:text-[48px] font-bold text-gray-900">
          Built For Modern Businesses
        </h2>
        <p className="w-full lg:w-[53%] mx-auto text-[12px] lg:text-[18px] text-[#71717A]">
         Everything you need to manage business payments, expenses, and financial operations in one platform 
        </p>
      </div>

      {/* Feature Cards using Flexbox */}
      <div className="mx-auto flex flex-wrap justify-center gap-0">
        {features.map((f, index) => (
          <div
            key={index}
            className="flex-1 flex flex-col items-center text-center px-2 mt-2 lg:mt-10"
          >
           <div className="w-20 h-20 bg-gray-400 rounded-full flex items-center justify-center">
  <img src={f.icon} alt={f.title} className="w-12 h-12" />
</div>
           
            <h3 className="text-[18px] lg:text-[26px] font-semibold text-gray-900 lg:mb-2">
              {f.title}
            </h3>
            <p className="text-gray-600 text-[12px] lg:text-[18px] w-86">{f.description}</p>
          </div>
        ))}
      </div>

    <div className="flex w-full lg:w-9/12 mx-auto mt-8 lg:mt-16 bg-[#25272D] rounded-2xl text-white">
  <div className="relative w-1/2">
    <img
      src="/iphoneB.png"
      alt="iPhone B"
      className="relative w-full rounded-lg shadow-lg h-32 lg:h-full z-20"
    />
    <img
      src="/iphoneA.png"
      alt="iPhone A"
      className="absolute top-[44px] left-8 lg:top-8 lg:left-[450px] lg:transform lg:-translate-x-1/2 lg:w-3/4 rounded-lg shadow-xl z-0"
    />
  </div>

 

  <div className="flex items-center justify-center h-[150px] lg:h-[300px] lg:w-96">
  <p className="text-[18px] lg:text-[44px] font-bold leading-tight lg:text-center">
    Send your money with one click!
  </p>
</div>

</div>

    </section>
  );
};

export default SecondSection
