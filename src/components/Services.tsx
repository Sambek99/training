
import React from 'react';
import { Check, X, Send } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"; // Ajusta la ruta de importación


const Services = () => {
  const services = [
    {
      icon: 'entrenamiento-basico',
      title: 'Entrenamiento Básico en Casa',
      description: 'Programa ideal para quienes inician en el mundo fitness. Rutinas sencillas y efectivas para entrenar en casa sin equipo especializado.',
      features: [
        { text: "Rutinas fáciles para principiantes", available: true },
        { text: "Entrenamiento sin equipo", available: true },
        { text: "Videos explicativos paso a paso", available: true },
        { text: "Acceso a grupo de apoyo", available: true },
        { text: "Seguimiento personalizado", available: false }
      ],
      price: "$19.99",
      image: "/images/carousel/1.jpeg",
      encodedMessage: encodeURIComponent("¡Hola! Estoy interesado en el servicio de Entrenamiento Básico en Casa. ¿Podrías darme más información?")
    },
    {
      icon: 'entrenamiento-intermedio',
      title: 'Entrenamiento Intermedio',
      description: 'Para quienes ya tienen experiencia y buscan nuevos retos. Planes progresivos para mejorar fuerza, resistencia y composición corporal.',
      features: [
        { text: "Rutinas progresivas de fuerza y resistencia", available: true },
        { text: "Acceso a rutinas con y sin equipo", available: true },
        { text: "Desafíos mensuales", available: true },
        { text: "Feedback mensual del progreso", available: true },
        { text: "Soporte de coach 1-a-1", available: false }
      ],
      price: "$24.99",
      image: "/images/carousel/2.jpeg",
      encodedMessage: encodeURIComponent("¡Hola! Estoy interesado en el servicio de Entrenamiento Intermedio. ¿Podrías darme más información?")
    },
    {
      icon: 'entrenamiento-avanzado',
      title: 'Entrenamiento Avanzado',
      description: 'Entrenamientos intensivos para atletas o personas con experiencia. Rutinas personalizadas para alcanzar el máximo rendimiento.',
      features: [
        { text: "Rutinas avanzadas y personalizadas", available: true },
        { text: "Planificación semanal de entrenamientos", available: true },
        { text: "Evaluación de rendimiento", available: true },
        { text: "Acceso a comunidad exclusiva", available: true },
        { text: "Soporte de coach 1-a-1", available: false }
      ],
      price: "$29.99",
      image: "/images/carousel/3.jpeg",
      encodedMessage: encodeURIComponent("¡Hola! Estoy interesado en el servicio de Entrenamiento Avanzado. ¿Podrías darme más información?")
    },
    {
      icon: 'entrenamiento-funcional',
      title: 'Entrenamiento Funcional',
      description: 'Mejora tu movilidad, equilibrio y fuerza con ejercicios funcionales adaptados a tu nivel y objetivos.',
      features: [
        { text: "Ejercicios para movilidad y equilibrio", available: true },
        { text: "Rutinas funcionales adaptadas", available: true },
        { text: "Videos de técnica y ejecución", available: true },
        { text: "Acceso a foro de dudas", available: true },
        { text: "Seguimiento personalizado", available: false }
      ],
      price: "$14.99",
      image: "/images/carousel/1.jpeg",
      encodedMessage: encodeURIComponent("¡Hola! Estoy interesado en el servicio de Entrenamiento Funcional. ¿Podrías darme más información?")
    },
    {
      icon: 'entrenamiento-personalizado',
      title: 'Entrenamiento Personalizado',
      description: 'Plan de entrenamiento hecho a tu medida, con seguimiento y ajustes semanales para lograr tus metas específicas.',
      features: [
        { text: "Plan 100% personalizado", available: true },
        { text: "Ajustes semanales según progreso", available: true },
        { text: "Soporte directo con el coach", available: true },
        { text: "Evaluaciones periódicas", available: true },
        { text: "Acceso a comunidad", available: true }
      ],
      price: "$39.99",
      image: "/images/carousel/2.jpeg",
      encodedMessage: encodeURIComponent("¡Hola! Estoy interesado en el servicio de Entrenamiento Personalizado. ¿Podrías darme más información?")
    },
    {
      icon: 'coaching-premium',
      title: 'Coaching Premium 1-a-1',
      description: 'Entrenamiento exclusivo con acompañamiento diario, soporte directo y rutinas avanzadas para resultados garantizados.',
      features: [
        { text: "Acompañamiento diario 1-a-1", available: true },
        { text: "Rutinas avanzadas y exclusivas", available: true },
        { text: "Soporte prioritario", available: true },
        { text: "Revisión y ajuste constante", available: true },
        { text: "Acceso a recursos premium", available: true }
      ],
      price: "$44.99",
      image: "/images/carousel/3.jpeg",
      encodedMessage: encodeURIComponent("¡Hola! Estoy interesado en el servicio de Coaching Premium 1-a-1. ¿Podrías darme más información?")
    }
  ];

  return (
    <section id="services" className="bg-[#14171b] py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section header */}
        <div className="mb-20">
          <div className="flex items-center gap-8 mb-12">
            <span className="text-6xl lg:text-8xl font-light text-gray-200">02</span>
            <h3 className="text-sm uppercase tracking-wider text-[#DA1035] font-medium">
              Entrenamiento Online Personalizado
            </h3>
          </div>

          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-light leading-tight text-white">
                Transforma tu cuerpo, tu salud y tu energía donde estés. Logra resultados reales sin depender del gym, todo a tu ritmo.
              </h1>
            </div>
            <div>
              <p className="text-xl text-gray-500 leading-relaxed">
                Como tu entrenador, te guiaré con un plan adaptado a tus objetivos, tu nivel y el equipo disponible, sin importar tu
                punto de partida. Es 100% online, con el mismo compromiso y seguimiento personalizado que un entrenamiento presencial,
                asegurando que alcances tus metas de forma efectiva y duradera.
              </p>
            </div>
          </div>
        </div>

        {/* Services grid */}
        <div className="grid mt-5 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index}>
              <Card className="h-full bg-[#23272f] rounded-lg hover:shadow-lg transition-shadow duration-300 border border-[#23272f] hover:border-[#DA1035]">
                <div>
                  <img src={service.image} alt="Imagen del servicio" className="w-full h-40 object-cover rounded-lg" />
                </div>
                <CardHeader className='p-4'>
                  <CardTitle>{service.title}</CardTitle>
                  <p className="text-gray-400">{service.description}</p>
                </CardHeader>
                <CardContent className='p-4 h-full'>
                  <ul className="mb-8 space-y-3">
                    {service.features.map((feature, featIndex) => (
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
                  <p className="mt-5 mb-5 text-[#DA1035] font-bold text-2xl">{service.price}</p>
                  <div className='grid grid-cols items-left justify-between'>
                    <a
                      href="#"
                      className="mb-4 text-center bg-gray-600 hover:bg-gray-700 text-white px-8 py-3 rounded text-sm font-medium transition-colors duration-200 items-center gap-2 uppercase tracking-wider"
                    >
                      Más Información
                    </a>
                    <a
                      href={`https://wa.me/593983647509?text=${service.encodedMessage}`}
                      className="text-center  bg-[#DA1035] hover:bg-black text-white px-8 py-3 rounded text-sm font-medium transition-colors duration-200 items-center gap-2 uppercase tracking-wider"
                    >
                      Comprar
                    </a>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Services;
