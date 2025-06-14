import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <section className="bg-white py-10 lg:py-20 px-6">
      <div className="text-center w-9/12 mx-auto">
        <h2 className="text-[24px] md:text-[48px] font-bold text-gray-900 mb-1 lg:mb-4">
          Let’s Talk Business
        </h2>
        <p className="text-[9px] lg:text-[18px] text-[#71717A] mb-6 lg:mb-12">
          Have questions or want a custom demo?
        </p>

        <div className="flex flex-col lg:flex-row justify-center gap-4 lg:gap-10 text-center lg:text-left md:text-center text-[18px] text-gray-800">
          <div>
            <p className="mb-2">
              📧 <span className="font-medium">support@budjeti.com</span>
            </p>
          </div>
          <div>
            <p className="mb-2">
              📞 <span className="font-medium">+44 203 123 4567</span>
            </p>
          </div>
          <div>
            <p className="mb-2">
              📍 51 Bracken Road, Sandyford D18 Dublin Ireland
            </p>
          </div>
        </div>

        {/* CTA Button */}
        <div className="mt-12">
          <Link
            to="/support"
            className="bg-[#1929D6] cursor-pointer text-white px-8 py-3 rounded-xl font-semibold transition"
          >
            Schedule a Demo
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Contact;
