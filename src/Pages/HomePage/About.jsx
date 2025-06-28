const aboutCards = [
  {
    title: "Our Vision",
    description:
      "To become the go-to platform for business finance and expense management — a seamless one-stop solution for sending, receiving, and tracking money across teams, vendors, and global operations.",
  },
  {
    title: "Our Mission",
    description:
      "We’re here to make business money management insightful, straightforward, and even enjoyable. With Budjeti, managing finances is no longer a burden — it becomes a powerful advantage.",
  },
  {
    title: "Founder’s Message",
    description:
      "Built from the perspective of business owners, Budjeti was designed to lift the financial weight off their shoulders. Our goal is to help companies manage their money effortlessly, so they can stay focused on what matters most — growing their business. By eliminating inefficiencies and automating the repetitive, we help unlock resources, time, and clarity.\nWe’re not just building software — we’re building the future of business finance.",
  },
];

const About = () => {
  return (
    <section className="relative w-full text-white px-6 flex items-center justify-center bg-[#18181B]">
      <div className="w-full lg:w-9/12 pt-4 pb-4 lg:pt-10 lg:pb-24 flex flex-col items-center justify-between gap-8 mb-0">
        
        {/* Text Content */}
        <div className="text-center lg:text-left z-10">
          <div className="flex flex-col lg:flex-row lg:justify-between items-center lg:items-start">
            <h2 className="mx-auto text-3xl lg:text-[48px] font-semibold mb-4">About Us</h2>
          </div>

          <p className="text-white leading-relaxed w-full mx-auto text-center">
            Budjeti was founded with a clear purpose: to simplify and streamline how businesses manage their finances. We recognised that traditional financial systems are slow, fragmented, and often costly — so we built a smarter way. Budjeti empowers businesses to take control of their payments, expenses, and overall financial workflows with automation, real-time insights, and intuitive tools that eliminate waste and boost efficiency.
          </p>
        </div>

        {/* Cards Section */}
        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-6 text-center z-10">
          {aboutCards.map((card, index) => (
            <div key={index} className="bg-[#27272A] p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-2">{card.title}</h3>
              <p className="text-sm leading-relaxed whitespace-pre-line">{card.description}</p>
            </div>
          ))}
        </div>

        {/* Download Button */}
        <button className="bg-white text-black px-6 py-3 rounded-lg z-10 relative flex items-center gap-3 mt-6">
          Download App
          <img src="/android.png" alt="Android Icon" className="w-5 h-5" />
          <img src="/apple.png" alt="Apple Icon" className="w-5 h-5" />
        </button>

        {/* Phone Image (Commented out) */}
        {/* <div className="hidden lg:flex items-center justify-center lg:justify-end absolute h-full top-48 right-24 lg:right-16 lg:top-4">
          <img src="./about.png" alt="Phone Back" className="w-[608.54px]" />
        </div> */}
      </div>
    </section>
  );
};

export default About;
