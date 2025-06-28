import React from 'react';
import { Play, ChevronDown, Facebook, Twitter, Instagram, Dribbble } from 'lucide-react';

const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen bg-gray-900 text-white flex items-center overflow-hidden">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-black opacity-90"></div>
      
      {/* Main content wrapper */}
      <div className="relative z-10 w-full h-full min-h-screen flex flex-col justify-end px-6 lg:px-8 pb-32"> 
        
        {/* Contenedor del texto "Hola." y la frase, además de los iconos sociales */}
        {/* MODIFICACIÓN AQUÍ: pl-4 lg:pl-8 cambiado a pl-6 lg:pl-12 */}
        <div className="max-w-4xl pl-6 lg:pl-12"> 
          <h1>
            <span className="text-6xl md:text-8xl lg:text-9xl font-normal leading-tight">
                Hola.
            </span>
          </h1>
          
          <div className="max-w-xl space-y-8 mt-8"> 
            <p className="text-xl md:text-2xl leading-relaxed text-gray-300">
              Richard Jiménez: <br />
              Entrena con propósito, <br />
              vive con fuerza.
            </p>

            {/* Footer with social icons */}
            <footer className="mt-8"> 
              <div className="flex space-x-6">
                <a href="https://www.instagram.com/alain_jg/" target="_blank" className="text-gray-400 hover:text-white transition-colors duration-200">
                  <Instagram size={24} />
                </a>
              </div>
            </footer>
          </div>
        </div>
      </div>

      {/* Video button - Remains absolutely positioned */}
      <div className="absolute right-6 mr-10 md:right-16 top-1/2 transform -translate-y-1/2 z-20">
        <button className="group flex flex-col items-center space-y-2 text-white hover:text-orange-500 transition-colors duration-300">
          <div className="w-16 h-16 border-2 border-white group-hover:border-orange-500 rounded-full flex items-center justify-center transition-colors duration-300">
            <Play size={24} className="ml-1" fill="currentColor" />
          </div>
          <span className="text-sm uppercase tracking-wider">Play Video</span>
        </button>
      </div>

      {/* Scroll down indicator - Remains absolutely positioned */}
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