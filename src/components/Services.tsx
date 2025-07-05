
import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"; // Ajusta la ruta de importación


const Services = () => {
  const services = [
    {
      icon: 'product-design',
      title: 'Product Design',
      description: 'Deserunt rerum perspiciatis quaerat quam numquam assumenda neque. Quis dolores totam voluptatibus molestiae non. Quae exercitationem cum numquam repudiandae. Beatae eum quae. Ut ex unde rem quod ipsum consequatur. blanditiis temporibus pariatur voluptatibus molestiae.'
    },
    {
      icon: 'branding',
      title: 'Branding',
      description: 'Deserunt rerum perspiciatis quaerat quam numquam assumenda neque. Quis dolores totam voluptatibus molestiae non. Quae exercitationem cum numquam repudiandae. Beatae eum quae. Ut ex unde rem quod ipsum consequatur. blanditiis temporibus pariatur voluptatibus molestiae.'
    },
    {
      icon: 'frontend',
      title: 'Frontend Development',
      description: 'Deserunt rerum perspiciatis quaerat quam numquam assumenda neque. Quis dolores totam voluptatibus molestiae non. Quae exercitationem cum numquam repudiandae. Beatae eum quae. Ut ex unde rem quod ipsum consequatur. blanditiis temporibus pariatur voluptatibus molestiae.'
    },
    {
      icon: 'research',
      title: 'UX Research',
      description: 'Deserunt rerum perspiciatis quaerat quam numquam assumenda neque. Quis dolores totam voluptatibus molestiae non. Quae exercitationem cum numquam repudiandae. Beatae eum quae. Ut ex unde rem quod ipsum consequatur. blanditiis temporibus pariatur voluptatibus molestiae.'
    },
    {
      icon: 'illustration',
      title: 'Illustration',
      description: 'Deserunt rerum perspiciatis quaerat quam numquam assumenda neque. Quis dolores totam voluptatibus molestiae non. Quae exercitationem cum numquam repudiandae. Beatae eum quae. Ut ex unde rem quod ipsum consequatur. blanditiis temporibus pariatur voluptatibus molestiae.'
    },
    {
      icon: 'ecommerce',
      title: 'E-Commerce',
      description: 'Deserunt rerum perspiciatis quaerat quam numquam assumenda neque. Quis dolores totam voluptatibus molestiae non. Quae exercitationem cum numquam repudiandae. Beatae eum quae. Ut ex unde rem quod ipsum consequatur. blanditiis temporibus pariatur voluptatibus molestiae.'
    }
  ];

  return (
    <section id="services" className="bg-[#14171b] py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section header */}
        <div className="mb-20">
          <div className="flex items-center gap-8 mb-12">
            <span className="text-6xl lg:text-8xl font-light text-gray-200">02</span>
            <h3 className="text-sm uppercase tracking-wider text-[#DA1035] font-medium">
              Entrenamiento Online Personalizado
            </h3>
          </div>

          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-light leading-tight text-white">
                Transforma tu cuerpo, tu salud y tu energía donde estés. Logra resultados reales sin depender del gym, todo a tu ritmo.
              </h1>
            </div>
            <div>
              <p className="text-xl text-gray-500 leading-relaxed">
                Como tu entrenador, te guiaré con un plan adaptado a tus objetivos, tu nivel y el equipo disponible, sin importar tu
                punto de partida. Es 100% online, con el mismo compromiso y seguimiento personalizado que un entrenamiento presencial,
                asegurando que alcances tus metas de forma efectiva y duradera.
              </p>
            </div>
          </div>
        </div>

        {/* Services grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index}>
              <Card className="bg-[#23272f] p-8 rounded-lg hover:shadow-lg transition-shadow duration-300 border border-[#23272f] hover:border-[#DA1035]">
                <CardHeader>
                  <div className="w-16 h-16 bg-[#DA1035] rounded-lg mb-6 flex items-center justify-center">
                    <div className="w-8 h-8 bg-white rounded opacity-80"></div>
                  </div>
                  <CardTitle>{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>{service.description}</p>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
