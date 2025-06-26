
import React from 'react';
import Navigation from '../components/Navigation';
import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import Portfolio from '../components/Portfolio';
import Clients from '../components/Clients';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import AnimatedComponent from '../components/AnimatedComponent';


const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <AnimatedComponent>
        <Hero />
      </AnimatedComponent>

      <AnimatedComponent>
        <About />
      </AnimatedComponent>

      <AnimatedComponent>
        <Services />
      </AnimatedComponent>

      <AnimatedComponent>
        <Portfolio />
      </AnimatedComponent>

      <AnimatedComponent>
        <Clients />
      </AnimatedComponent>

      <AnimatedComponent>
        <Contact />
      </AnimatedComponent>
      <Footer />
    </div>
  );
};

export default Index;
