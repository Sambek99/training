import React from 'react';
import { Check, X } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"; // Ajusta la ruta de importación


const Subscriptions = () => {
  const plans = [
    {
      name: "Cotiza tu planificación",
      period: "",
      description: "Acordemos las sesiones que necesitas para alcanzar tus objetivos.",
      encodedMessage: encodeURIComponent("¡Hola! Estoy interesado en el servicio de Entrenamiento online perzonalizado. ¿Podrías darme más información?"),
      features: [
        { text: "Programas 100% online personalizados", "available": true },
        { text: "Modalidad híbrida (online + presencial)", "available": true },
        { text: "Evaluación inicial y seguimiento continuo", "available": true },
        { text: "Planificación adaptada a tus objetivos y nivel", "available": true },
        { text: "Acceso a tu entrenador para dudas y ajustes", "available": true }
      ],
      buttonText: "Cotizalo ahora",
      buttonClass: "bg-gray-700 hover:bg-gray-800"
    },
  ];

  return (
    <section id="subscriptions" className="bg-[#14171b] py-20 lg:py-32 text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="mb-20">
          <div className="flex items-center gap-8 mb-12">
            <span className="text-6xl lg:text-8xl font-light text-gray-200">03</span>
            <h3 className="text-sm uppercase tracking-wider text-[#DA1035] font-medium">
              Entrenamiento online perzonalizado
            </h3>
          </div>

          <div className="gap-16">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-4xl font-light leading-tight text-white">
                Si deseas un plan 100% online, totalmente personalizado según tus objetivos, nivel y el equipo 
                que tengas disponible, puedes acceder a nuestras asesorías. Cotiza nuestro servicio coaching 1 
                a 1 y seguimiento constante, para que entrenes con el mismo compromiso que en un programa presencial.
                Avanzarás con seguridad y alcanzarás resultados duraderos.
              </h1>
            </div>
          </div>
        </div>
        {/* Pricing Plans */}
        <div className="lg:place-items-center gap-8">
          {plans.map((plan, index) => (
            <div key={index}>
              <Card className="h-full w-full bg-gray-900 p-8 rounded-lg flex flex-col justify-between">
                <CardHeader>
                  <CardTitle className="text-3xl font-semibold mb-4 text-white" >{plan.name}</CardTitle>
                  <CardDescription className="text-gray-400 mb-6">{plan.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-white mb-6">
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
                </CardContent>
                <CardFooter>
                  <a
                    href={`https://wa.me/593983647509?text=${plan.encodedMessage}`}
                    target="_blank"
                    className={`w-full text-white py-3 px-6 rounded text-lg font-medium text-center transition-colors duration-200 ${plan.buttonClass}`}>
                    {plan.buttonText}
                  </a>
                </CardFooter>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Subscriptions;