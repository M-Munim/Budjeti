import { useState } from 'react';

const Accordion = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "How do I verify my business?",
      answer: "After signing up, you'll be asked to upload documentation such as a business registration certificate and proof of address. Our verification team typically approves accounts within 24 hours"
    },
    {
      question: "How secure are wallet funds?",
      answer: "Shipping typically takes 5-7 business days depending on your location.",
    },
    {
      question: "Can I withdraw to multiple bank accounts?",
      answer: "Yes, we provide 24/7 technical support through chat and email.",
    },
    {
      question: "  Is there a mobile app?",
      answer: "Yes, we provide 24/7 technical support through chat and email.",
    },
    {
      question: "What fees apply for using the service?",
      answer: "Yes, we provide 24/7 technical support through chat and email.",
    },
  ];



  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
   <section className="w-full px-6 py-20 bg-gray-50 flex flex-col items-center">
  <div className="w-9/12 mx-auto text-center">
    <h2 className="text-3xl font-bold mb-8">Frequently Asked <br /> Questions</h2>

    <div className="space-y-4 text-left">
      {faqs.map((faq, index) => (
        <div
          key={index}
className={`${
  activeIndex === index ? "bg-[#CDE5FFEB]" : "bg-[#E2E2E5]"
} shadow-md p-4 border border-gray-200`}
        >
          <button
            onClick={() => toggleAccordion(index)}
            className="w-full text-left font-medium text-gray-800 flex justify-between items-center"
          >
            {faq.question}
            <span className='text-2xl  '>{activeIndex === index ? '−' : '+'}</span>
          </button>

          {activeIndex === index && (
            <p className="mt-3 text-gray-600">{faq.answer}</p>
          )}
        </div>
      ))}
    </div>
  </div>
</section>

  );
};

export default Accordion;
