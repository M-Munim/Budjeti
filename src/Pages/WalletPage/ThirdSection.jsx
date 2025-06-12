const plans = [
  {
    id: 'Startups ',
    label: 'STARTUPS PLAN',
    price: '£0',
    priceSuffix: '/month',
    descriptions: [
      'Perfect for individuals and small teams who want to explore our core features at no cost.',
    ],
    features: [
      { name: 'Up to £10,000/month in transaction volume', included: true },
      { name: 'Free wallet-to-wallet transfers', included: true },
      { name: '1 linked bank account', included: true },
      { name: 'Basic reporting dashboard', included: true },
      { name: 'Access to Basic Functions', included: true },
    ],
    buttonText: 'Join for Free',
    isPopular: false,
  },
  {
    id: 'SME',
    label: 'SME PLAN',
    price: '£29',
    priceSuffix: '/month',
    descriptions: [
      'Built for growing Businesses, All Basic features with multiple account payouts',
    ],
    features: [
      { name: 'Up to £100,000/month in volume', included: true },
      { name: 'Up to 3 linked bank accounts', included: true },
      { name: 'Multi-user access (up to 5 users)', included: true },
      { name: 'Advanced financial dashboard', included: true },
      { name: 'Bulk payments and QR billing', included: true },
      { name: 'Pre paid business cards', included: true },
    ],
    buttonText: 'Contact Sales',
    isPopular: false,
  },
  {
    id: 'Enterprise',
    label: 'ENTERPRISE PLAN',
    price: 'Custom',
    priceSuffix: '/month',
    descriptions: [
      'Built for growing Businesses, All Basic features with multiple account payouts (All the features of SME) ',
    ],
    features: [
      { name: 'Unlimited transaction volume', included: true },
      { name: 'Unlimited bank accounts', included: true },
      { name: 'Unlimited users', included: true },
      { name: 'Dedicated account manager', included: true },
      { name: 'API access and custom integrations', included: true },
    ],
    buttonText: 'Contact Sales',
    isPopular: true,
  }
];

const ThirdSection = () => {
  return (
    <section className="py-20 px-6 bg-[#F6FAFF]">
      {/* Heading */}
      <div className="mx-auto text-center mb-12 -mt-10">
        <h2 className="text-[20px] lg:text-[48px] font-bold text-gray-900">
          Transparent Pricing. No Hidden Fees.
        </h2>
        <p className="text-[10px] lg:text-[18px] text-[#71717A] mt-2 lg:mt-4">
          Simple, straightforward pricing that grows with your business
        </p>
      </div>

      {/* Plans */}
  <div
  className="flex flex-col lg:flex-row flex-wrap justify-center items-center  gap-8 mt-16 bg-no-repeat lg:bg-[url('/Vector.png')]"
>

        {plans.map((plan) => (
          <div
            key={plan.id}
            className={`rounded-2xl p-8 shadow-lg flex-1 max-w-xs w-full relative ${
              plan.isPopular ? 'bg-[#1929D6] text-white' : 'bg-white text-gray-800'
            }`}
          >
            {plan.isPopular && (
              <div className="absolute -top-4 -right-8 ">
                <span className="bg-black text-white rounded-full text-sm  px-4 py-3.5">
                  Best Choice
                </span>
              </div>
            )}

            {/* Plan Header */}
            <div className="text-center mb-8">
              <p
                className={`text-sm font-semibold mb-2 ${
                  plan.isPopular ? 'text-blue-100' : 'text-green-600'
                }`}
              >
                {plan.label}
              </p>
              <div className="mb-4">
                <span className={`text-4xl font-bold`}>
                  {plan.price}
                </span>
                <span className="ml-1 text-sm">{plan.priceSuffix}</span>
              </div>
              {plan.descriptions.map((desc, idx) => (
                <p
                  key={idx}
                  className={`text-sm mt-${idx === 0 ? '0' : '2'} ${
                    plan.isPopular ? 'text-blue-100' : 'text-gray-600'
                  } text-left`}
                >
                  {desc}
                </p>
              ))}
            </div>

            <div className="space-y-4 mb-8">
              {plan.features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div
                    className={`w-5 h-5 rounded-full flex items-center justify-center font-bold ${
                      plan.isPopular
                        ? 'bg-white/20 text-white'
                        : 'bg-green-100 text-green-600'
                    }`}
                  >
                    ✓
                  </div>
                  <span
                    className={`text-sm ${
                      plan.isPopular ? 'text-white' : 'text-gray-700'
                    }`}
                  >
                    {feature.name}
                  </span>
                </div>
              ))}
            </div>

            {/* Button */}
            <button
              className={`w-full py-3 px-6 rounded-3xl font-medium transition-colors cursor-pointer ${
                plan.isPopular
                  ? 'bg-white text-black hover:bg-gray-50 mt-3.5'
                  : 'border-2 border-gray-300 text-gray-700 hover:bg-gray-50'
              }`}
            >
              {plan.buttonText}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};


export default ThirdSection;
