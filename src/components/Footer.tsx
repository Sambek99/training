
import React from 'react';
import { ChevronUp } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    { name: 'Instagram', href: 'https://www.instagram.com/alain_jg/' },
  ];

  return (
    <footer className="bg-[#DA1035] text-white py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact info */}
          <div className="lg:col-span-2">
            <div className="grid md:grid-cols-2 gap-12">
              {/* Address */}
              <div>
                <h4 className="text-sm uppercase tracking-wider text-white mb-6">
                  Dónde encontrarnos
                </h4>
                <div className="space-y-2 text-white">
                  <p>Av. 9 de Octubre 100</p>
                  <p>Guayaquil, Guayas</p>
                  <p>090313 EC</p>
                  <a 
                    href="tel:098-765-4321" 
                    className="text-white hover:text-gray-300 transition-colors duration-200"
                  >
                    098 765 4321
                  </a>
                </div>
              </div>

              {/* Social links */}
              <div>
                <h4 className="text-sm uppercase tracking-wider text-white mb-6">
                  Síguenos
                </h4>
                <ul className="space-y-3">
                  {socialLinks.map((link) => (
                    <li key={link.name}>
                      <a 
                        href={link.href} 
                        target="_blank" className="text-gray-300 hover:text-white transition-colors duration-200"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* CTA and copyright */}
          <div className="space-y-8">
            <a 
              href="mailto:hello@flare.com" 
              className="block w-full bg-white text-black hover:bg-black hover:text-white text-center py-4 px-6 rounded text-lg font-medium transition-colors duration-200"
            >
              Hablemos
            </a>

            <div className="space-y-2 text-sm text-white">
              <p>Copyright Flare 2020</p>
              <p>
                Diseño por{' '}
                <a
                  href="https://www.creative-tim.com/"
                  className="text-white hover:text-gray-200 transition-colors duration-200"
                >
                  Creative Tim
                </a>{' '}
                Distribución por{' '}
                <a
                  href="https://colorlib.com"
                  className="text-white hover:text-gray-200 transition-colors duration-200"
                >
                  Colorlib
                </a>
                {' '}| Rediseñado por Sambek99
              </p>
            </div>
          </div>
        </div>

        {/* Back to top */}
        <div className="mt-16 pt-8 text-center">
          <a 
            href="#top" 
            className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors duration-200 group"
          >
            <ChevronUp size={20} className="group-hover:-translate-y-1 transition-transform duration-200" />
            <span className="text-sm uppercase tracking-wider">Top</span>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
