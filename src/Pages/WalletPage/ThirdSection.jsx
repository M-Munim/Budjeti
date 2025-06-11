const plans = [
  {
    id: 'free',
    label: 'FREE PLAN',
    price: '$0',
    priceSuffix: 'per month',
    descriptions: [
      'Perfect for individuals and small teams who want to explore our core features at no cost.',
    ],
    features: [
      { name: 'Access to Basic Functions', included: true },
      { name: 'Free User Account', included: true },
      { name: 'Monthly Reports', included: false },
      { name: 'Analytics', included: false },
    ],
    buttonText: 'Join for Free',
    isPopular: false,
  },
  {
    id: 'enterprise',
    label: 'ENTERPRISE PLAN',
    price: '$49',
    priceSuffix: 'per month',
    descriptions: [
      'Designed for small businesses and teams looking for enhanced productivity with expanded features',
    ],
    features: [
      { name: 'Website Visitor Tracking', included: true },
      { name: 'Live Properties', included: true },
      { name: 'Monthly Reports', included: true },
      { name: 'Chat Real-time', included: true },
    ],
    buttonText: 'Contact Sales',
    isPopular: true,
  },
];

const ThirdSection = () => {
  return (
    <section className="py-20 px-6 bg-[#F6FAFF]">
      {/* Heading */}
      <div className="mx-auto text-center mb-12">
        <h2 className="text-[48px] font-bold text-gray-900">
          Transparent Pricing. No Hidden Fees.
        </h2>
        <p className="text-[18px] text-[#71717A] mt-4">
          Simple, straightforward pricing that grows with your business
        </p>
      </div>
<div
  className="flex w-full mx-auto justify-center gap-8 mt-16 bg-no-repeat "
  style={{
    backgroundImage: "url('/Vector.png')",
  }}
>   {plans.map((plan) => (
          <div
            key={plan.id}
            className={`${
              plan.id === 'enterprise' ? 'bg-blue-600 text-white' : 'bg-white'
            } rounded-2xl p-8 shadow-lg flex-1 max-w-xs ${
              plan.id === 'free' ? 'border border-gray-200' : ''
            } relative`}
          >
            {plan.isPopular && (
              <div className="absolute -top-3 -right-24 transform -translate-x-1/2 ">
                <span className="bg-[#282828] text-[#FFFFFF]  rounded-full text-sm p-3.5">
                  Best Choice
                </span>
              </div>
            )}

            <div className="text-center mb-8">
              <p
                className={`text-sm font-semibold mb-2 ${
                  plan.id === 'enterprise' ? 'text-blue-200' : 'text-green-600'
                }`}
              >
                {plan.label}
              </p>
              <div className="mb-4">
                <span
                  className={`text-5xl font-bold ${
                    plan.id === 'enterprise' ? 'text-white' : 'text-gray-900'
                  }`}
                >
                  {plan.price}
                </span>
                <span
                  className={`ml-2 ${
                    plan.id === 'enterprise' ? 'text-blue-200' : 'text-gray-500'
                  }`}
                >
                  {plan.priceSuffix}
                </span>
              </div>
              {plan.descriptions.map((line, idx) => (
                <p
                  key={idx}
                  className={`text-sm text-start ${
                    plan.id === 'enterprise' ? 'text-blue-100' : 'text-gray-600'
                  } mt-${idx === 0 ? 0 : 2}`}
                >
                  {line}
                </p>
              ))}
            </div>

            <div className="space-y-4 mb-8">
              {plan.features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  {feature.included ? (
                    <div
                      className={`w-5 h-5 rounded-full flex items-center justify-center font-bold ${
                        plan.id === 'enterprise'
                          ? 'bg-white/20 text-white'
                          : 'bg-green-100 text-green-600'
                      }`}
                    >
                      ✓
                    </div>
                  ) : (
                    <div className="w-5 h-5 rounded-full bg-red-200 flex items-center justify-center">
                      <span className="w-2 h-2 bg-white rounded-full"></span>
                    </div>
                  )}
                  <span
                    className={`text-sm ${
                      feature.included
                        ? plan.id === 'enterprise'
                          ? 'text-white'
                          : 'text-gray-700'
                        : 'text-gray-400'
                    }`}
                  >
                    {feature.name}
                  </span>
                </div>
              ))}
            </div>

            <button
              className={`w-full py-3 px-6 rounded-lg font-medium transition-colors cursor-pointer ${
                plan.id === 'enterprise'
                  ? 'bg-white text-blue-600 hover:bg-gray-50'
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
