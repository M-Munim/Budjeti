import { Link } from "react-router-dom";
import Accordion from "../HomePage/Accordion";

const Support = () => {


  return (
    <section className="w-full flex items-center justify-center px-6 ">
      <div className="w-9/12 mt-32 lg:mt-40 mb-10 lg:mb-10 ">
        <div className="text-center ">
          <h1 className="text-[18px] lg:text-[48px] font-bold text-gray-900">Got Questions? We’ve Got Answers.</h1>
          <p className="text-[12px] lg:text-[18px] lg:mt-2 text-gray-600">Live chat available Mon–Sat, 9am to 7pm.</p>
        </div>

        <Accordion noBg />


        <div className="w-full flex justify-center">
          <div className="w-full md:w-1/2 bg-white p-8 rounded-xl shadow-md">
            <h2 className="text-center text-2xl font-bold mb-6 text-gray-900">Support Request Form</h2>

            <form className="flex flex-col gap-4">
              <div className="flex flex-col md:flex-row gap-4">
                <input type="text" placeholder="Full Name" className="flex-1 border px-4 py-2 rounded" />
                <input type="text" placeholder="Business Name" className="flex-1 border px-4 py-2 rounded" />
              </div>

              <div className="flex flex-col md:flex-row gap-4">
                <input type="email" placeholder="Email Address" className="flex-1 border px-4 py-2 rounded" />
                <input type="text" placeholder="Phone Number (optional)" className="flex-1 border px-4 py-2 rounded" />
              </div>

              <select className="border px-4 py-2 rounded w-full ">
                <option className="text-[5px]">How can we help you?</option>
                <option>Account Issue</option>
                <option>Billing</option>
                <option>Technical Support</option>
                <option>Feedback</option>
                <option>Other</option>
              </select>

              <textarea
                placeholder="Message"
                rows="5"
                className="border px-4 py-2 rounded w-full"
              ></textarea>
              <div className="flex justify-between gap-8 lg:gap-0">
                <button
                  type="submit"
                  className="bg-[#1929D6] text-white py-3 rounded w-40 transition cursor-pointer"
                >
                  Submit Request
                </button>
                <Link to="/support" className=" text-[#1929D6] underline font-semibold">
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

