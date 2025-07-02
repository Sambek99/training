
import React from 'react';
import { ExternalLink } from 'lucide-react';

const Portfolio = () => {
  const projects = [
    {
      title: 'The Red Wheel',
      category: 'Branding',
      image: '/placeholder.svg',
      description: 'Vero molestiae sed aut natus excepturi. Et tempora numquam. Temporibus iusto quo.Unde dolorem corrupti neque nisi.',
      link: 'https://www.behance.net/'
    },
    {
      title: 'Music Life',
      category: 'Frontend Design',
      image: '/placeholder.svg',
      description: 'Vero molestiae sed aut natus excepturi. Et tempora numquam. Temporibus iusto quo.Unde dolorem corrupti neque nisi.',
      link: 'https://www.behance.net/'
    },
    {
      title: 'OI Logo',
      category: 'Branding',
      image: '/placeholder.svg',
      description: 'Vero molestiae sed aut natus excepturi. Et tempora numquam. Temporibus iusto quo.Unde dolorem corrupti neque nisi.',
      link: 'https://www.behance.net/'
    },
    {
      title: 'Corrugated Sheets',
      category: 'Frontend Design',
      image: '/placeholder.svg',
      description: 'Vero molestiae sed aut natus excepturi. Et tempora numquam. Temporibus iusto quo.Unde dolorem corrupti neque nisi.',
      link: 'https://www.behance.net/'
    },
    {
      title: 'Woodcraft',
      category: 'Frontend Design',
      image: '/placeholder.svg',
      description: 'Vero molestiae sed aut natus excepturi. Et tempora numquam. Temporibus iusto quo.Unde dolorem corrupti neque nisi.',
      link: 'https://www.behance.net/'
    },
    {
      title: 'The Lamp',
      category: 'Frontend Design',
      image: '/placeholder.svg',
      description: 'Vero molestiae sed aut natus excepturi. Et tempora numquam. Temporibus iusto quo.Unde dolorem corrupti neque nisi.',
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
            <div key={index} className="group relative bg-gray-100 aspect-[4/3] overflow-hidden border border-gray-200">
              {/* Project image */}
              <div className="w-full h-full bg-gradient-to-br from-orange-400 to-red-500 opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
              
              {/* Project overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-80 transition-all duration-300 flex items-center justify-center">
                <div className="text-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-8">
                  <div className="text-sm uppercase tracking-wider text-orange-400 mb-2">
                    {project.category}
                  </div>
                  <h4 className="text-2xl font-light mb-4">
                    {project.title}
                  </h4>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {project.description}
                  </p>
                  <a 
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-orange-400 hover:text-orange-300 transition-colors duration-200"
                  >
                    Project Link
                    <ExternalLink size={16} />
                  </a>
                </div>
              </div>

              {/* Project info - visible on mobile */}
              <div className="absolute bottom-0 left-0 right-0 bg-white p-6 md:hidden">
                <div className="text-sm uppercase tracking-wider text-orange-500 mb-1">
                  {project.category}
                </div>
                <h4 className="text-xl font-light text-gray-900">
                  {project.title}
                </h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
