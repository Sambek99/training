import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="bg-[#14171b] items-center py-20 lg:py-8">
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
            <h1 className="text-4xl md:text-5xl lg:text-5xl font-light leading-tight text-white">
              ¡Hola! Soy Alain, entrenador con experiencia y formación en entrenamiento deportivo, funcional y musculación.
            </h1>

            <p className="text-xl text-gray-500 leading-relaxed">
              Trabajo con personas que buscan mejorar su rendimiento, fuerza o salud. Con objetivos claros y medibles para avanzar de forma segura y alcanzar resultados duraderos.
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
      </div>
    </section>
  );
};

export default About;
