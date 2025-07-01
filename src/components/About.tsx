import React from 'react';

const About = () => {
  const processes = [
    {
      title: 'Evaluación Personalizada',
      description:
        'Analizo tus objetivos, necesidades y condición física para establecer una base sólida y realista. Cada persona es única, por eso el primer paso es conocerte bien.'
    },
    {
      title: 'Planificación a Medida',
      description:
        'Diseño un plan de entrenamiento personalizado, adaptado a tu perfil y metas. Busco que sea realista, sostenible y que se ajuste a tu día a día.'
    },
    {
      title: 'Acompañamiento',
      description:
        'Te acompaño en la ejecución del plan, corrigiendo técnica y ajustando el proceso según avances. El foco está en progresar con seguridad y constancia.'
    },
    {
      title: 'Resultados',
      description:
        'Celebramos tus logros y consolidamos hábitos para que los resultados sean duraderos. El objetivo es que entrenes con propósito y vivas con fuerza.'
    }
  ];

  return (
    <section id="about" className="bg-[#14171b] py-20 lg:py-32">
      {/* Horizontal line */}
      <div className="w-full h-px bg-[#14171b] mb-20"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section title */}
        <div className="mb-20">
          <div className="flex items-center gap-8 mb-12">
            <span className="text-6xl lg:text-8xl font-light text-gray-200">01</span>
            <h3 className="text-sm uppercase tracking-wider text-orange-500 font-medium">
              Sobre mí
            </h3>
          </div>
        </div>

        {/* Main content */}
        <div className="grid lg:grid-cols-2 gap-16 mb-20">
          {/* Left column - Text */}
          <div className="space-y-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light leading-tight text-white">
              ¡Hola! Soy Richard Jiménez, entrenador con experiencia y formación en entrenamiento deportivo, funcional y musculación.
            </h1>

            <p className="text-xl text-gray-500 leading-relaxed">
              Trabajo con personas que buscan mejorar su rendimiento, ganar fuerza, verse mejor o recuperar su salud a través del movimiento. Cada plan es personalizado y pensado para que progreses con seguridad y logres resultados duraderos.
            </p>
          </div>

          {/* Right column - Photo */}
            <div className="relative flex justify-center items-center">
            <img
              src="/images/alain-jimenez-hero.jpeg"
              alt="Photo by Alain Jimenez"
              className="rounded-lg aspect-[4/5] w-[90%] object-cover"
            />
            </div>
        </div>

        {/* Process items */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {processes.map((process, index) => (
            <div key={index} className="space-y-4">
              <h3 className="text-2xl font-light text-white mb-4">
                {process.title}
              </h3>
              <p className="text-gray-500 leading-relaxed">
                {process.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
