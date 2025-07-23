// import { Link } from "react-router-dom";

// const Contact = () => {
//   const phoneNumbers = [
//     { label: "Budgeti London", number: "02039575949" },
//     { label: "Budgeti Dublin", number: "+35312636252" },
//     // { label: "Termination", number: "01253207559" }
//   ];


//   return (
//     <section className="bg-white py-10 lg:py-20 md:px-6">
//       <div className="text-center w-9/12 mx-auto">
//         <h2 className="text-[24px] md:text-[48px] font-bold text-gray-900 mb-1 lg:mb-4">
//           Let’s Talk Business
//         </h2>
//         <p className="text-[9px] lg:text-[18px] text-[#71717A] mb-6 lg:mb-12">
//           Have questions or want a custom demo?
//         </p>

//         <div className="flex flex-col lg:ps-44 lg:flex-row justify-between text-center lg:text-left md:text-center md:text-[18px] text-gray-800">
//           <div>
//             <p className="mb-2">
//               📧 <span className="font-medium">support@budjeti.com</span>
//             </p>
//           </div>
//           <div>
//             <div className="mt-2 lg:mt-0 ">
//               {phoneNumbers.map((phone, index) => (
//                 <p key={index} className="mb-2">
//                   📞 <span className="font-medium">{phone.label}:</span>{" "}
//                   {phone.number}
//                 </p>
//               ))}
//             </div>
//           </div>
//           <div>
//             <p className="mt-2 lg:mt-0 ">
//               📍 51 Bracken Road, Sandyford D18 Dublin Ireland
//             </p>
//           </div>
//         </div>

//         {/* CTA Button */}
//         <div className="mt-12">
//           <Link
//             to="/about-us"
//             className="bg-[#1929D6] cursor-pointer text-white px-8 py-3 rounded-xl font-semibold transition"
//           >
//             Schedule a Demo
//           </Link>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Contact;



import { Link } from "react-router-dom";

const Contact = () => {
  const phoneNumbers = [
    { label: "Budgeti London", number: "02039575949" },
    { label: "Budgeti Dublin", number: "+35312636252" },
  ];

  return (
    <section className="bg-white py-10 md:py-16 lg:py-20 px-4 md:px-6">
      <div className="max-w-5xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[48px] font-bold text-gray-900 mb-3 md:mb-4">
          Let’s Talk Business
        </h2>

        {/* Subheading */}
        <p className="text-xs sm:text-sm md:text-base lg:text-lg text-[#71717A] mb-6 lg:mb-10">
          Have questions or want a custom demo?
        </p>

        {/* Contact Info Grid */}
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 md:gap-10 text-center md:text-left text-sm sm:text-base text-gray-800">
          {/* Email */}
          <div className="flex-1">
            <p className="mb-2">
              📧 <span className="font-medium">support@budjeti.com</span>
            </p>
          </div>

          {/* Phone Numbers */}
          <div className="flex-1">
            {phoneNumbers.map((phone, index) => (
              <p key={index} className="mb-2">
                📞 <span className="font-medium">{phone.label}:</span>{" "}
                {phone.number}
              </p>
            ))}
          </div>

          {/* Address */}
          <div className="flex-1">
            <p className="mb-2">
              📍 51 Bracken Road, Sandyford D18 Dublin Ireland
            </p>
          </div>
        </div>

        {/* CTA Button */}
        <div className="mt-10 md:mt-12">
          <Link
            to="/about-us#contact"
            className="bg-[#1929D6] text-white px-6 sm:px-8 py-3 rounded-lg font-semibold hover:bg-[#101cc3] transition"
          >
            Schedule a Demo
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Contact;
