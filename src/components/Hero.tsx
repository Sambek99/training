
import React from 'react';
import { Play, ChevronDown } from 'lucide-react';

const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen bg-gray-900 text-white flex items-center overflow-hidden">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-black opacity-90"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-20">
        <div className="max-w-4xl">
          {/* Main heading */}
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-normal mb-8 leading-tight">
            Hello.
          </h1>
          
          <div className="max-w-xl space-y-8">
            <p className="text-xl md:text-2xl leading-relaxed text-gray-300">
              We are Flare. We love <br />
              building great brands <br />
              & digital experiences.
            </p>

            {/* Social icons */}
            <div className="flex space-x-6">
              <a href="https://www.instagram.com/alain_jg/" target="_blank" className="text-gray-400 hover:text-white transition-colors duration-200">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Video button */}
      <div className="absolute right-8 md:right-16 top-1/2 transform -translate-y-1/2 z-20">
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
