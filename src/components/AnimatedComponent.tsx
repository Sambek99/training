// components/AnimatedComponent.jsx (o .tsx)
import { motion, useAnimation } from "framer-motion"; // Importamos useAnimation
import React, { useState, useEffect, useRef } from 'react';

const AnimatedComponent = ({ children }) => {
  const controls = useAnimation(); // Hook para controlar la animación manualmente
  const [hasAnimated, setHasAnimated] = useState(false); // Nuevo estado para saber si ya se animó
  const componentRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Si el componente es visible y aún NO se ha animado
        if (entry.isIntersecting && !hasAnimated) {
          controls.start({ opacity: 1, y: 0 }); // Inicia la animación a su estado final
          setHasAnimated(true); // Marca que la animación ya se ejecutó
        }
        // Si el componente sale de la vista pero ya se animó, no hacemos nada
        // Si el componente entra de nuevo en la vista y ya se animó, no hacemos nada
        // Simplemente permanece en su estado animado final
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.1, // Ajusta si quieres que se active antes/después
      }
    );

    if (componentRef.current) {
      observer.observe(componentRef.current);
    }

    return () => {
      if (componentRef.current) {
        observer.unobserve(componentRef.current);
      }
    };
  }, [controls, hasAnimated]); // Asegúrate de que 'controls' y 'hasAnimated' estén en las dependencias

  return (
    <motion.div
      ref={componentRef}
      initial={{ opacity: 0, y: 50 }} // Estado inicial: invisible y hacia abajo
      animate={controls} // Conectamos las animaciones al controlador
      transition={{ duration: 0.8, delay: 0.2 }} // La transición se aplica solo cuando controls.start() se llama
      className="bg-transparent"
    >
      {children}
    </motion.div>
  );
};

export default AnimatedComponent;