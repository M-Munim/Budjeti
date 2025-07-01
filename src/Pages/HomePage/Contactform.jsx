import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    companyName: '',
    email: '',
    phone: '',
    companySize: '',
    turnover: '',
    features: [],
    challenges: '',
    contactMethod: '',
  });

  const featuresList = [
    'Digital Wallet',
    'Corporate Cards',
    'Payment Automation',
    'Expense Management',
    'Financial Analytics',
  ];

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === 'checkbox') {
      setFormData((prev) => ({
        ...prev,
        features: checked
          ? [...prev.features, value]
          : prev.features.filter((f) => f !== value),
      }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert('Your interest has been submitted to info@Budjeti.com');
  };

  return (
    <section className="bg-[#F1F5FF] text-black py-16 px-4 md:px-10">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">Customer Interest Form</h2>
        <p className="text-center text-gray-700 mb-10">
          We’d love to learn more about your business and how we can help streamline your financial operations. Please fill out the form below and a member of our team will be in touch shortly.
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Full Name */}
          <input
            type="text"
            name="fullName"
            placeholder="Full Name"
            value={formData.fullName}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded bg-white text-black border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#28C2A0]"
          />

          {/* Company Name */}
          <input
            type="text"
            name="companyName"
            placeholder="Company Name"
            value={formData.companyName}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded bg-white text-black border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#28C2A0]"
          />

          {/* Business Email */}
          <input
            type="email"
            name="email"
            placeholder="Business Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded bg-white text-black border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#28C2A0]"
          />

          {/* Phone Number */}
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number (Optional)"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded bg-white text-black border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#28C2A0]"
          />

          {/* Company Size */}
          <select
            name="companySize"
            value={formData.companySize}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded bg-white text-black border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#28C2A0]"
          >
            <option value="">Select Company Size</option>
            <option value="1–10">1–10</option>
            <option value="11–50">11–50</option>
            <option value="51–200">51–200</option>
            <option value="200+">200+</option>
          </select>

          {/* Turnover */}
          <select
            name="turnover"
            value={formData.turnover}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded bg-white text-black border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#28C2A0]"
          >
            <option value="">Select Turnover</option>
            <option value="$300K–$1M">$300K–$1M</option>
            <option value="$1M–$10M">$1M–$10M</option>
            <option value="$10M–$50M">$10M–$50M</option>
            <option value="$50M+">$50M+</option>
          </select>

          {/* Features */}
          <div>
            <p className="mb-2 font-semibold">Which features are you most interested in?</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              {featuresList.map((feature) => (
                <label key={feature} className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    name="features"
                    value={feature}
                    checked={formData.features.includes(feature)}
                    onChange={handleChange}
                    className="accent-[#28C2A0]"
                  />
                  <span>{feature}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Finance Challenges */}
          <textarea
            name="challenges"
            value={formData.challenges}
            onChange={handleChange}
            placeholder="Tell us about your current finance challenges"
            rows="4"
            className="w-full px-4 py-3 rounded bg-white text-black border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#28C2A0]"
          ></textarea>

          {/* Preferred Contact Method */}
          <select
            name="contactMethod"
            value={formData.contactMethod}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded bg-white text-black border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#28C2A0]"
          >
            <option value="">Preferred Contact Method</option>
            <option value="Email">Email</option>
            <option value="Phone">Phone</option>
            <option value="Either">Either</option>
          </select>

          {/* Submit Button */}
          <button
            type="submit"
            className="p-5 bg-[#1929D6] text-white py-3 rounded-lg font-semibold hover:bg-[#20a690] transition"
          >
            Submit 
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
