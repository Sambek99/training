import React from 'react';
import { Check, X } from 'lucide-react'; // Importing Check for features, X for unavailable features

const Subscriptions = () => {
  const plans = [
    {
      name: "Basic Plan",
      price: "$29",
      period: "/month",
      description: "Ideal for individuals starting their fitness journey.",
      features: [
        { text: "Access to basic workout routines", available: true },
        { text: "Monthly fitness tips via email", available: true },
        { text: "Community forum access", available: true },
        { text: "Personalized diet plans", available: false },
        { text: "1-on-1 coach support", available: false }
      ],
      buttonText: "Choose Basic",
      buttonClass: "bg-gray-700 hover:bg-gray-800" // Example color for button
    },
    {
      name: "Pro Plan",
      price: "$59",
      period: "/month",
      description: "Perfect for those looking to intensify their training.",
      features: [
        { text: "Access to all workout routines", available: true },
        { text: "Weekly advanced fitness tips", available: true },
        { text: "Priority community support", available: true },
        { text: "Personalized diet plans", available: true },
        { text: "1-on-1 coach support (2 sessions/month)", available: false }
      ],
      buttonText: "Go Pro",
      buttonClass: "bg-[#DA1035] hover:bg-[#B30D2B]" // Primary color for button
    },
    {
      name: "Premium Plan",
      price: "$99",
      period: "/month",
      description: "For dedicated individuals seeking full support and guidance.",
      features: [
        { text: "Access to all workout routines", available: true },
        { text: "Daily advanced fitness tips & insights", available: true },
        { text: "Exclusive member community & support", available: true },
        { text: "Fully personalized diet & meal plans", available: true },
        { text: "1-on-1 coach support (4 sessions/month)", available: true }
      ],
      buttonText: "Get Premium",
      buttonClass: "bg-gray-700 hover:bg-gray-800" // Example color for button
    }
  ];

  return (
    <section id="subscriptions" className="bg-[#14171b] py-20 lg:py-32 text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Main heading */}
        <div className="text-center mb-20">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-light leading-tight max-w-4xl mx-auto">
            Find the Perfect Plan for Your Fitness Journey
          </h1>
          <p className="mt-4 text-lg text-gray-400">
            Choose a subscription that fits your goals and level of support.
          </p>
        </div>

        {/* Pricing Plans */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div key={index} className="bg-gray-900 p-8 rounded-lg flex flex-col justify-between">
              <div>
                <h2 className="text-3xl font-semibold mb-4 text-white">
                  {plan.name}
                </h2>
                <p className="text-gray-400 mb-6">{plan.description}</p>
                <div className="text-white mb-6">
                  <span className="text-5xl font-bold">{plan.price}</span>
                  <span className="text-xl text-gray-400">{plan.period}</span>
                </div>

                <ul className="mb-8 space-y-3">
                  {plan.features.map((feature, featIndex) => (
                    <li key={featIndex} className={`flex items-center ${feature.available ? 'text-gray-200' : 'text-gray-600 line-through'}`}>
                      {feature.available ? (
                        <Check size={20} className="text-[#DA1035] mr-2 flex-shrink-0" />
                      ) : (
                        <X size={20} className="text-gray-600 mr-2 flex-shrink-0" />
                      )}
                      {feature.text}
                    </li>
                  ))}
                </ul>
              </div>
              <a
                href="#" // You'd link this to your subscription checkout page
                className={`w-full text-white py-3 px-6 rounded text-lg font-medium text-center transition-colors duration-200 ${plan.buttonClass}`}
              >
                {plan.buttonText}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Subscriptions;