import React, { useState, useEffect } from 'react'; // ¡Asegúrate de importar useState y useEffect!
import { Play, ChevronDown, Facebook, Twitter, Instagram, Dribbble } from 'lucide-react';

// Define el arreglo de frases fuera del componente para que no se redefina en cada render.
const frases = [
  {
    description: 'Aquí no se entrena por costumbre, se entrena por propósito.'
  },
  {
    description: 'Transforma tu cuerpo. Eleva tu mente. Vive con intención.'
  },
  {
    description: 'Fuerza real. Movimiento consciente. Resultados duraderos.'
  },
  {
    description: 'No es solo ejercicio. Es evolución personal.'
  },
  {
    description: 'Tu cuerpo cambia cuando tu propósito es claro.'
  },
  {
    description: 'Entrena desde donde estés. Progrésate desde adentro.'
  },
  {
    description: 'Físico fuerte. Mente clara. Vida alineada.'
  },
  {
    description: 'Lo online también transforma, si hay propósito.'
  }
];

const Hero = () => {
  // Estado para guardar la frase que se mostrará
  const [currentPhrase, setCurrentPhrase] = useState('');

  // Función para seleccionar una frase aleatoria del arreglo
  const getRandomPhrase = () => {
    const randomIndex = Math.floor(Math.random() * frases.length);
    setCurrentPhrase(frases[randomIndex].description);
  };

  // useEffect para seleccionar una frase aleatoria solo al montar el componente
  useEffect(() => {
    getRandomPhrase();
  }, []); // El arreglo vacío [] asegura que se ejecute solo una vez al cargar la página

  return (
    <section id="hero" className="relative min-h-screen bg-gray-900 text-white flex items-center overflow-hidden">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-black opacity-90"></div>

      {/* Main content wrapper */}
      <div className="relative z-10 w-full h-full min-h-screen flex flex-col justify-end px-6 lg:px-8 pb-32">

        {/* Contenedor del texto "Hola." y la frase, además de los iconos sociales */}
        <div className="max-w-4xl pl-6 lg:pl-12">
          <h1>
            <span className="text-6xl md:text-8xl lg:text-9xl font-normal leading-tight">
              Hola.
            </span>
          </h1>

          <div className="max-w-xl space-y-8 mt-8">
            {/* Aquí es donde se muestra la frase dinámica */}
            <p className="text-xl md:text-2xl leading-relaxed text-gray-300">
              {currentPhrase.split('<br />').map((line, index) => (
                <React.Fragment key={index}>
                  {line}
                  {index < currentPhrase.split('<br />').length - 1 && <br />}
                </React.Fragment>
              ))}
            </p>

            {/* Footer con iconos sociales */}
            <footer className="mt-8">
              <div className="flex space-x-6">
                <a href="https://www.instagram.com/alain_jg/" target="_blank" className="text-gray-400 hover:text-white transition-colors duration-200">
                  <Instagram size={24} />
                </a>
                {/* Puedes añadir más iconos sociales aquí, si lo deseas: */}
                {/* <a href="#0" className="text-gray-400 hover:text-white transition-colors duration-200">
                  <Twitter size={24} />
                </a>
                <a href="#0" className="text-gray-400 hover:text-white transition-colors duration-200">
                  <Facebook size={24} />
                </a>
                <a href="#0" className="text-gray-400 hover:text-white transition-colors duration-200">
                  <Dribbble size={24} />
                </a> */}
              </div>
            </footer>
          </div>
        </div>
      </div>

      {/* Video button */}
      <div className="absolute right-6 mr-10 md:right-16 top-1/2 transform -translate-y-1/2 z-20">
        <button className="group flex flex-col items-center space-y-2 text-white hover:text-orange-500 transition-colors duration-300">
          <div className="w-16 h-16 border-2 border-white group-hover:border-orange-500 rounded-full flex items-center justify-center transition-colors duration-300">
            <Play size={24} className="ml-1" fill="currentColor" />
          </div>
          <span className="text-sm uppercase tracking-wider">Play Video</span>
        </button>
      </div>

      {/* Scroll down indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <a
          href="#about"
          className="flex flex-col items-center text-white hover:text-orange-500 transition-colors duration-300 group"
        >
          <span className="text-sm uppercase tracking-wider mb-2">Scroll Down</span>
          <ChevronDown size={24} className="animate-bounce" />
        </a>
      </div>
    </section>
  );
};

export default Hero;