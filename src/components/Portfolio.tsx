
import React from 'react';
import { ExternalLink } from 'lucide-react';

const Portfolio = () => {
  const projects = [
    {
      title: 'Entrenamiento de Resistencia',
      category: 'Fuerza y Resistencia',
      image: '/images/carousel/1.jpeg',
      link: 'https://www.behance.net/'
    },
    {
      title: 'Rutina de Cardio Intensivo',
      category: 'Cardio',
      image: '/images/carousel/2.jpeg',
      link: 'https://www.behance.net/'
    },
    {
      title: 'Sesión de Yoga Deportivo',
      category: 'Flexibilidad',
      image: '/images/carousel/3.jpeg',
      link: 'https://www.behance.net/'
    },
    {
      title: 'Entrenamiento Funcional',
      category: 'Funcional',
      image: '/images/carousel/2.jpeg',
      link: 'https://www.behance.net/'
    },
    {
      title: 'Preparación para Maratón',
      category: 'Resistencia',
      image: '/images/carousel/1.jpeg',
      link: 'https://www.behance.net/'
    },
    {
      title: 'Entrenamiento HIIT',
      category: 'Alta Intensidad',
      image: '/images/carousel/3.jpeg',
      link: 'https://www.behance.net/'
    }
  ];

  return (
    <section id="portfolio" className="bg-[#14171b] py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section header */}
        <div className="grid lg:grid-cols-2 gap-16 mb-20">
          <div>
            <div className="flex items-center gap-8 mb-8">
              <span className="text-6xl lg:text-8xl font-light text-gray-200">03</span>
              <h3 className="text-sm uppercase tracking-wider text-[#DA1035] font-medium">
                Entrenamientos recientes
              </h3>
            </div>
          </div>
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light leading-tight text-white">
              Aquí tienes algunos de los entrenamientos que hemos realizado recientemente. 
              No dudes en revisarlos.
            </h1>
          </div>
        </div>

        {/* Portfolio grid */}
        <div className="grid md:grid-cols-2 gap-0">
          {projects.map((project, index) => (
            <div key={index} className="group relative bg-black-100 aspect-[4/3] overflow-hidden">
              {/* Project image */}
              <div className="w-full h-full group-hover:opacity-30 transition-opacity duration-300"> 
                <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover object-center transition-transform duration-300 group-hover:scale-105"/>
              </div>
              {/* Project overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-left justify-left">
                <div className="w-full grid grid-rows-[0.25fr_0.25fr_2fr] text-left text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-8">
                  <div className="text-sm items-baseline uppercase tracking-wider text-orange-400 mb-2">
                    {project.category}
                  </div>
                  <h4 className="text-2xl items-baseline font-light mb-4">
                    {project.title}
                  </h4>
                  <a 
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-end gap-2 text-orange-400 hover:text-orange-300 transition-colors duration-200"
                  >
                    Project Link
                    <ExternalLink size={16} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
