import { useState } from "react";

const testimonialsData = [
  {
    name: "Arslan Yonis",
    location: "London, United Kingdom",
    image: "/man.png",
    ratingImage: "/stars.png",
    message:
      "Managing payments used to be the most time-consuming part of running my business. Since switching to this platform, everything has changed. I can now take payments, top up my wallet, pay vendors, and assign staff cards all in one place.",
  },
  {
    name: "Sarah Thompson",
    location: "Manchester, United Kingdom",
    image: "/profile.png",
    ratingImage: "/stars.png",
    message:
      "This app has streamlined all my financial tasks. I don’t need multiple tools anymore – everything I need is just here. Fast, secure, and very user-friendly!",
  },
  {
    name: "Halima Noor",
    location: "Liverpool, United Kingdom",
    image: "/profile2.png",
    ratingImage: "/stars.png",
    message:
      "It’s the best platform I’ve used for managing expenses. Real-time insights have saved me hours of manual work and helped me control budgets better.",
  },
  {
    name: "Emma Williams",
    location: "Toronto, Canada",
    image: "/women.png",
    ratingImage: "/stars.png",
    message:
      "Love the design and simplicity. It’s powerful but not overwhelming. My team uses it daily, and we’ve seen major improvements in efficiency.",
  },
];

const Testimonials = () => {
  const [index, setIndex] = useState(0);
  const testimonial = testimonialsData[index];

  const handlePrev = () => {
    setIndex((prevIndex) =>
      prevIndex === 0 ? testimonialsData.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setIndex((prevIndex) =>
      prevIndex === testimonialsData.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <section className="w-full py-20 px-6 flex items-center justify-center">
      <div className="text-center max-w-3xl">
        <h4 className="text-[#6366F1] uppercase tracking-widest text-[14px] lg:text-[18px] font-semibold mb-2">
          Testimonials
        </h4>
        <h2 className="text-[18px] lg:text-[48px] font-bold text-gray-900 lg:mb-10">
          What Our Users Say <br /> About Us?
        </h2>

        <div className="flex justify-center mt-8">
          <div className="flex flex-col items-center">
            <img
              src={testimonial.image}
              alt={testimonial.name}
              className="w-24 h-24 lg:w-36 lg:h-36 object-cover rounded-full bg-[#D9D9D9]"
            />
            <h3 className="text-[12px] lg:text-[24px] font-semibold mt-4">
              {testimonial.name}
            </h3>
            <p className="text-gray-500 text-[9px] lg:text-[18px] lg:mb-3">
              {testimonial.location}
            </p>
            <img
              className="w-14 h-2 lg:w-28 lg:h-5"
              src={testimonial.ratingImage}
              alt="Rating"
            />
          </div>
        </div>

        <div className="relative w-9/12 mx-auto text-gray-600 text-base px-4 leading-relaxed mt-6">
          <div className="flex justify-between items-center mb-4">
            <div className="flex gap-5">
              <img
                className="w-8 h-5 mt-2.5 cursor-pointer"
                src="./leftArrow.png"
                alt="Prev"
                onClick={handlePrev}
              />
              <img
                className="hidden lg:block w-10"
                src="./VectorT.png"
                alt=""
              />
            </div>
            <img
              className="w-8 h-5 mt-2.5 cursor-pointer"
              src="./rightArrow.png"
              alt="Next"
              onClick={handleNext}
            />
          </div>

          <p className="text-black w-full lg:w-[75%] mx-auto text-center">
            {testimonial.message}
          </p>
          <div className="hidden lg:flex justify-end mr-8">
            <img className="w-10" src="./VectorB.png" alt="" />
          </div>
        </div>

        <div className="flex justify-center mt-6 space-x-2">
          {testimonialsData.map((_, i) => (
            <div
              key={i}
              className={`w-3 h-3 rounded-full ${
                i === index ? "bg-[#1929D6]" : "bg-gray-300"
              }`}
            ></div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
