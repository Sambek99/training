
import React from 'react';

const About = () => {
  const processes = [
    {
      title: 'Define',
      description: 'Deserunt rerum perspiciatis quaerat quam numquam assumenda neque. Quis dolores totam voluptatibus molestiae non. Quae exercitationem cum numquam repudiandae. Beatae eum quae. Ut ex unde rem quod ipsum consequatur. blanditiis temporibus pariatur voluptatibus molestiae.'
    },
    {
      title: 'Design', 
      description: 'Deserunt rerum perspiciatis quaerat quam numquam assumenda neque. Quis dolores totam voluptatibus molestiae non. Quae exercitationem cum numquam repudiandae. Beatae eum quae. Ut ex unde rem quod ipsum consequatur. blanditiis temporibus pariatur voluptatibus molestiae.'
    },
    {
      title: 'Build',
      description: 'Deserunt rerum perspiciatis quaerat quam numquam assumenda neque. Quis dolores totam voluptatibus molestiae non. Quae exercitationem cum numquam repudiandae. Beatae eum quae. Ut ex unde rem quod ipsum consequatur. blanditiis temporibus pariatur voluptatibus molestiae.'
    },
    {
      title: 'Launch',
      description: 'Deserunt rerum perspiciatis quaerat quam numquam assumenda neque. Quis dolores totam voluptatibus molestiae non. Quae exercitationem cum numquam repudiandae. Beatae eum quae. Ut ex unde rem quod ipsum consequatur. blanditiis temporibus pariatur voluptatibus molestiae.'
    }
  ];

  return (
    <section id="about" className="bg-[#14171b] py-20 lg:py-32">
      {/* Horizontal line */}
      <div className="w-full h-px bg-[#14171b] mb-20"></div>
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section title */}
        <div className="mb-20">
          <div className="flex items-center gap-8 mb-12">
        <span className="text-6xl lg:text-8xl font-light text-gray-200">01</span>
        <h3 className="text-sm uppercase tracking-wider text-orange-500 font-medium">
          Who We Are
        </h3>
          </div>
        </div>

        {/* Main content */}
        <div className="grid lg:grid-cols-2 gap-16 mb-20">
          {/* Left column - Text */}
          <div className="space-y-8">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-light leading-tight text-white">
          Flare is a branding agency based in somewhere. We design thoughtful digital experiences and beautiful brand aesthetics.
        </h1>

        <p className="text-xl text-gray-500 leading-relaxed">
          Non amet venenatis dolor id pellentesque mattis erat. Fermentum nunc, 
          tincidunt sit elit amet scelerisque. Ac quisque quis eu nibh rutrum 
          risus tellus egestas neque. Vestibulum ante ipsum primis in faucibus 
          orci luctus et.
        </p>
          </div>

          {/* Right column - Photo */}
          <div className="relative">
        <div className="bg-gradient-to-br from-orange-400 to-red-500 rounded-lg aspect-[4/5] w-full"></div>
          </div>
        </div>

        {/* Process items */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {processes.map((process, index) => (
        <div key={index} className="space-y-4">
          <h3 className="text-2xl font-light text-gray-500 mb-4">
            {process.title}
          </h3>
          <p className="text-gray-500 leading-relaxed">
            {process.description}
          </p>
        </div>
          ))}
        </div>
      </div>
        </section>
  );
};

export default About;
