
import React from 'react';
import { ChevronUp } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    { name: 'Facebook', href: '#' },
    { name: 'Twitter', href: '#' },
    { name: 'Instagram', href: '#' },
    { name: 'Dribbble', href: '#' }
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
                  Where to Find Us
                </h4>
                <div className="space-y-2 text-white">
                  <p>1600 Amphitheatre Parkway</p>
                  <p>Mountain View, California</p>
                  <p>94043 US</p>
                  <a 
                    href="tel:197-543-2345" 
                    className="text-white hover:text-gray-300 transition-colors duration-200"
                  >
                    +197 543 2345
                  </a>
                </div>
              </div>

              {/* Social links */}
              <div>
                <h4 className="text-sm uppercase tracking-wider text-white mb-6">
                  Follow Us
                </h4>
                <ul className="space-y-3">
                  {socialLinks.map((link) => (
                    <li key={link.name}>
                      <a 
                        href={link.href}
                        className="text-gray-300 hover:text-white transition-colors duration-200"
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
              Let's Talk
            </a>

            <div className="space-y-2 text-sm text-white">
              <p>Copyright Flare 2020</p>
              <p>
                Design by{' '}
                <a
                  href="https://www.creative-tim.com/"
                  className="text-white hover:text-gray-200 transition-colors duration-200"
                >
                  Creative Tim
                </a>{' '}
                Distribution By{' '}
                <a
                  href="https://colorlib.com"
                  className="text-white hover:text-gray-200 transition-colors duration-200"
                >
                  Colorlib
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Back to top */}
        <div className="mt-16 pt-8 border-t border-gray-800 text-center">
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
