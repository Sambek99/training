import React from 'react';
import { Check, X } from 'lucide-react';

const Subscriptions = () => {
  const plans = [
    {
      name: "Plan Básico",
      price: "$29",
      period: "/mes",
      description: "Ideal para personas que inician su viaje fitness.",
      features: [
        { text: "Acceso a rutinas básicas de entrenamiento", available: true },
        { text: "Consejos de fitness mensuales por correo", available: true },
        { text: "Acceso al foro de la comunidad", available: true },
        { text: "Planes de dieta personalizados", available: false },
        { text: "Soporte de coach 1-a-1", available: false }
      ],
      buttonText: "Elegir Básico",
      buttonClass: "bg-gray-700 hover:bg-gray-800"
    },
    {
      name: "Plan Pro",
      price: "$59",
      period: "/mes",
      description: "Perfecto para quienes buscan intensificar su entrenamiento.",
      features: [
        { text: "Acceso a todas las rutinas de entrenamiento", available: true },
        { text: "Consejos avanzados de fitness semanales", available: true },
        { text: "Soporte prioritario en la comunidad", available: true },
        { text: "Planes de dieta personalizados", available: true },
        { text: "Soporte de coach 1-a-1 (2 sesiones/mes)", available: false }
      ],
      buttonText: "Elegir Pro",
      buttonClass: "bg-[#DA1035] hover:bg-[#B30D2B]"
    },
    {
      name: "Plan Premium",
      price: "$99",
      period: "/mes",
      description: "Para personas dedicadas que buscan apoyo y guía total.",
      features: [
        { text: "Acceso a todas las rutinas de entrenamiento", available: true },
        { text: "Consejos e insights avanzados diarios", available: true },
        { text: "Comunidad exclusiva y soporte", available: true },
        { text: "Planes de dieta y comidas totalmente personalizados", available: true },
        { text: "Soporte de coach 1-a-1 (4 sesiones/mes)", available: true }
      ],
      buttonText: "Elegir Premium",
      buttonClass: "bg-gray-700 hover:bg-gray-800"
    }
  ];

  return (
    <section id="subscriptions" className="bg-[#14171b] py-20 lg:py-32 text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Main heading */}
        <div className="text-center mb-20">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-light leading-tight max-w-4xl mx-auto">
            Encuentra el Plan Perfecto para tu Viaje Fitness
          </h1>
          <p className="mt-4 text-lg text-gray-400">
            Elige una suscripción que se adapte a tus objetivos y nivel de apoyo.
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
                href="#"
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