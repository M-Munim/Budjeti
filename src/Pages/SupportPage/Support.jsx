import { Link } from "react-router-dom";
import Accordion from "../HomePage/Accordion";

const Support = () => {


  return (
    <section className="w-full flex items-center justify-center ">
      <div className="w-[90%] md:w-9/12 mt-32 lg:mt-40 mb-10 lg:mb-10 ">
        <div className="text-center ">
          <h1 className="text-2xl lg:text-[48px] font-bold text-gray-900">Got Questions? We’ve Got Answers.</h1>
          <p className="text-[12px] lg:text-[18px] lg:mt-2 text-gray-600">Live chat available Mon–Sat, 9am to 7pm.</p>
        </div>

        <Accordion noBg />


        <div className="w-full flex justify-center">
          <div className="w-full md:w-1/2 p-4 md:p-8 rounded-xl ">
            <h2 className="text-center text-2xl font-bold mb-6 text-black">Support Request Form</h2>

            <form className="flex flex-col gap-4">
              <div className="flex flex-col md:flex-row gap-4">
                <input type="text" placeholder="Full Name" className="flex-1  p-2 rounded bg-white text-black border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#28C2A0]" />
                <input type="text" placeholder="Business Name" className="flex-1  p-2 rounded bg-white text-black border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#28C2A0]" />
              </div>

              <div className="flex flex-col md:flex-row gap-4">
                <input type="email" placeholder="Email Address" className="flex-1  p-2 rounded bg-white text-black border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#28C2A0]" />
                <input type="text" placeholder="Phone Number (optional)" className="flex-1   p-2 rounded bg-white text-black border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#28C2A0]" />
              </div>

              <select className="border  p-2 rounded w-full bg-white text-black  border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#28C2A0]">
                <option className="">How can we help you?</option>
                <option>Account Issue</option>
                <option>Billing</option>
                <option>Technical Support</option>
                <option>Feedback</option>
                <option>Other</option>
              </select>

              <textarea
                placeholder="Message"
                rows="5"
                className="border  p-2 rounded w-full bg-white text-black border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#28C2A0]"
              ></textarea>
              <div className="flex justify-between gap-8 lg:gap-0">
                <button
                  type="submit"
                  className="bg-[#1929D6] text-sm md:text-base text-white py-3 rounded w-40 transition cursor-pointer"
                >
                  Submit Request
                </button>
                <Link to="/support" className="text-sm md:text-base text-[#1929D6] underline font-semibold">
                  Visit Help Center
                </Link>
              </div>

            </form>


          </div>
        </div>


      </div>
    </section>
  );
};

export default Support;

