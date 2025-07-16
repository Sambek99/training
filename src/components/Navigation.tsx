import React, { useState } from 'react';
import { Menu, X, Send } from 'lucide-react';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: '#hero', label: 'Inicio' },
    { href: '#about', label: 'Sobre mi' },
    { href: '#services', 'label': 'Servicios' },
    { href: '#portfolio', label: 'Trabajos' },
    { href: '#', label: 'Iniciar Sesión' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#14171b] text-white">
      <div className="flex items-center mx-10 justify-between h-20 px-6 lg:px-8">
        <div className="mx-auto flex items-center justify-between w-full">
          {/* Grupo de Logo y Navegación */}
          <div className="flex items-center space-x-8">
            {/* Logo */}
            <div className="flex-shrink-0 mr-10">
              <a href="#top" className="text-2xl font-bold text-white">
                FUERZA-MOVIMIENTO
              </a>
            </div>

            {/* Desktop Navigation Links: Se ocultarán en 'custom_lg' (950px) y abajo */}
            <nav className="hidden custom_lg:flex items-center space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-gray-300 hover:text-white text-sm font-medium transition-colors duration-200 uppercase tracking-wider"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Grupo del Botón de Contacto y Botón de Menú Móvil */}
          <div className="flex items-center ml-auto">
            {/* Botón de Contacto: Solo visible en 'custom_lg' (950px) y arriba */}
            <a
              href="mailto:hello@flare.com"
              className="hidden custom_lg:flex bg-[#DA1035] hover:bg-black text-white px-8 py-3 rounded text-sm font-medium transition-colors duration-200 items-center gap-2 uppercase tracking-wider"
            >
              <Send size={16} />
              Contactenos
            </a>

            {/* Mobile menu button: Solo visible en pantallas menores a 'custom_lg' (950px) */}
            <div className="custom_lg:hidden ml-4">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-300 hover:text-white focus:outline-none"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* --- Menú de Navegación Móvil (con animación de despliegue) --- */}
      <nav
        className={`custom_lg:hidden bg-[#14171b] overflow-hidden transition-all duration-500 ease-in-out ${
          isMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="flex flex-col items-center py-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="block text-gray-300 hover:text-white px-6 py-3 w-full text-center text-lg font-medium transition-colors duration-200"
              onClick={() => setIsMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href="mailto:hello@flare.com"
            className="mt-4 bg-[#DA1035] hover:bg-black text-white px-8 py-3 rounded text-sm font-medium transition-colors duration-200 items-center gap-2 uppercase tracking-wider flex justify-center w-auto"
            onClick={() => setIsMenuOpen(false)}
          >
            <Send size={16} />
            Contactenos
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Navigation;