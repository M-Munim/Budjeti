import { useState } from 'react';

const Accordion = ({ noBg = false }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "How do I verify my business?",
      answer: "After signing up, you'll be asked to upload documentation such as a business registration certificate and proof of address. Our verification team typically approves accounts within 24 hours"
    },
    {
      question: "How secure are wallet funds?",
      answer: "Funds are held in safeguarded accounts with top-tier banking partners and are protected using industry-standard encryption, fraud monitoring, and compliance protocols.",
    },
    {
      question: "Can I withdraw to multiple bank accounts?",
      answer: "Yes, you can link multiple business bank accounts and allocate payments or withdrawals accordingly through your dashboard.",
    },
    {
      question: "Is there a mobile app?",
      answer: "Yes, our app is available on iOS and Android, allowing you to manage payments, view balances, and approve transactions on the go.",
    },
    {
      question: "What fees apply for using the service?",
      answer: "Wallet-to-wallet transfers are free. Bank payouts start at 0.5%, and card top-ups incur a 1.5% flat fee. See our Pricing page for full details.",
    },
  ];

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section
      className={` w-full  py-20 flex flex-col items-center`}
    >
      <div className="w-full lg:w-9/12 mx-auto text-center -mt-10">
        <h2 className={`${noBg ? 'hidden' : ''} lg:text-[18px] text-[#1929D6]`}>FAQ</h2>
        <h2 className="text-2xl lg:text-[48px] font-bold mb-8">
          Frequently Asked <br /> Questions
        </h2>

        <div className="space-y-2 text-left">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`${
                activeIndex === index ? "bg-[#CDE5FFEB]" : "bg-[#E2E2E5]"
              } shadow-md p-2 border border-gray-200`}
            >
              <button
                onClick={() => toggleAccordion(index)}
                className="w-full text-left font-medium text-gray-800 flex justify-between items-center"
              >
                {faq.question}
                <span className="w-10 h-10 text-[20px] pb-1 flex items-center justify-center rounded-full text-gray-800 lg:border">
                  {activeIndex === index ? '−' : '+'}
                </span>
              </button>

              {activeIndex === index && (
                <p className="mt-3 text-gray-600 text-sm md:text-base" >{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Accordion;
