
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
    <section className="py-20 px-6 bg-white">
      {/* Heading */}
      <div className="mx-auto text-center mb-12">
        <h2 className="text-[48px] font-bold text-gray-900">
          Built For Modern Businesses
        </h2>
        <p className="text-[18px] text-[#71717A]">
         Everything you need to manage business payments, expenses, and financial operations in one platform 
        </p>
      </div>

      {/* Feature Cards using Flexbox */}
      <div className=" mx-auto flex flex-wrap justify-center gap-0">
        {features.map((f, index) => (
          <div
            key={index}
            className="flex-1 flex flex-col items-center text-center px-2 mt-10"
          >
           <div className="w-20 h-20 bg-gray-400 rounded-full flex items-center justify-center">
  <img src={f.icon} alt={f.title} className="w-12 h-12" />
</div>
           
            <h3 className="text-[26px] font-semibold text-gray-900 mb-2">
              {f.title}
            </h3>
            <p className="text-gray-600 text-[18px] w-86">{f.description}</p>
          </div>
        ))}
      </div>

    <div className="flex w-9/12 mx-auto mt-16 bg-[#25272D] rounded-2xl text-white">
  <div className="relative w-1/2">
    <img
      src="/iphoneB.png"
      alt="iPhone B"
      className="w-full rounded-lg shadow-lg"
    />
    <img
      src="/iphoneA.png"
      alt="iPhone A"
      className="absolute top-8 left-[450px] transform -translate-x-1/2 w-3/4 rounded-lg shadow-xl z-10"
    />
  </div>

  <div className=" flex items-center justify-center w-96">
    <p className="text-[44px] font-bold leading-tight">Send your money with one click!</p>
  </div>
</div>

    </section>
  );
};

export default SecondSection
