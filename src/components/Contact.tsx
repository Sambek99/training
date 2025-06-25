
import React from 'react';

const Contact = () => {
  return (
    <section className="bg-[#14171b] py-20 lg:py-32">
      <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
        {/* Section header */}
        <div className="mb-12">
          <h3 className="text-sm uppercase tracking-wider text-[#DA1035] font-medium mb-8">
            Get In Touch
          </h3>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-light leading-tight text-white">
            Have an idea or an epic project in mind? Talk to
            us. Let us work together and make something great.
            Shoot us a message at
          </h1>
        </div>

        {/* Email */}
        <div className="text-center">
          <a 
            href="mailto:hello@flare.com" 
            className="text-3xl md:text-4xl lg:text-5xl font-light text-[#DA1035] hover:text-[#BF0E30] transition-colors duration-200"
          >
            hello@flare.com
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
