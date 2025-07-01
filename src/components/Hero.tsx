import React, { useState, useEffect } from 'react';
import { Play, ChevronDown, Facebook, Twitter, Instagram, Dribbble } from 'lucide-react';


import {
  Carousel,
  CarouselContent,
  CarouselItem,
  // CarouselNext, // Comentados si no quieres navegación manual
  // CarouselPrevious, // Comentados si no quieres navegación manual
  type CarouselApi
} from '@/components/ui/carousel';

const frases = [
  { description: 'Aquí no se entrena por costumbre, se entrena por propósito.' },
  { description: 'Transforma tu cuerpo. Eleva tu mente. Vive con intención.' },
  { description: 'Fuerza real. Movimiento consciente. Resultados duraderos.' },
  { description: 'No es solo ejercicio. Es evolución personal.' },
  { description: 'Tu cuerpo cambia cuando tu propósito es claro.' },
  { description: 'Entrena desde donde estés. Progrésate desde adentro.' },
  { description: 'Físico fuerte. Mente clara. Vida alineada.' },
  { description: 'Lo online también transforma, si hay propósito.' }
];

const heroBackgroundImages = [
  { src: '/images/carousel/1.jpeg', alt: 'Alain sentado' },
  { src: '/images/carousel/2.jpeg', alt: 'Alain retrado' },
  { src: '/images/carousel/3.jpeg', alt: 'Alain retrado' },
];

const Hero = () => {
  const [currentPhrase, setCurrentPhrase] = useState('');
  const [carouselApi, setCarouselApi] = useState<CarouselApi>();

  const getRandomPhrase = () => {
    const randomIndex = Math.floor(Math.random() * frases.length);
    setCurrentPhrase(frases[randomIndex].description);
  };

  useEffect(() => {
    getRandomPhrase();
  }, []);

  useEffect(() => {
    if (!carouselApi) return;

    const autoplay = setInterval(() => {
      carouselApi.scrollNext();
    }, 5000);

    return () => {
      clearInterval(autoplay);
    };
  }, [carouselApi]);

  return (
    <section
      id="hero"
      className="relative
                 sm:min-h-[700px]
                 md:min-h-[800px]
                 custom_lg:min-h-screen
                 bg-gray-900 text-white flex items-center overflow-hidden"
    >
      <div className="absolute inset-0 z-0">
        <Carousel
          opts={{
            align: "start",
            loop: true,
            dragFree: false,
          }}
          setApi={setCarouselApi}
          className="w-full h-full"
        >
          <CarouselContent className="h-full">
            {heroBackgroundImages.map((image, index) => (
              <CarouselItem key={index} className="h-full">
                {/* SIN el 'relative' en este div, ya que la imagen no es 'absolute' */}
                <div className="w-full h-full relative">
                  <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-screen md:h-full object-cover"/>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>

      <div className="relative z-10 w-full h-full min-h-[inherit] flex flex-col justify-end px-6 lg:px-8 pb-32">
        <div className="max-w-4xl pl-6 lg:pl-12">
          <div className="max-w-xl space-y-8 mt-8">
            <p className="text-xl md:text-3xl leading-relaxed text-gray-300">
              {currentPhrase.split('<br />').map((line, index) => (
                <React.Fragment key={index}>
                  {line}
                  {index < currentPhrase.split('<br />').length - 1 && <br />}
                </React.Fragment>
              ))}
            </p>
            <footer className="mt-8">
              <div className="flex space-x-6">
                <a href="https://www.instagram.com/alain_jg/" target="_blank" className="text-gray-400 hover:text-white transition-colors duration-200">
                  <Instagram size={40} />
                </a>
              </div>
            </footer>
          </div>
        </div>
      </div>

      <div className="absolute right-6 mr-10 md:right-16 top-1/2 transform -translate-y-1/2 z-20">
        <button className="group flex flex-col items-center space-y-2 text-white hover:text-orange-500 transition-colors duration-300">
          <div className="w-16 h-16 border-2 border-white group-hover:border-orange-500 rounded-full flex items-center justify-center transition-colors duration-300">
            <Play size={24} className="ml-1" fill="currentColor" />
          </div>
          <span className="text-sm uppercase tracking-wider">Play Video</span>
        </button>
      </div>

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