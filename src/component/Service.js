import React from 'react';

function Service() {
  const services = [
    {
      icon: 'image/coding.png',
      title: 'Web Development',
      description: 'Crafting robust and innovative web solutions with cutting-edge technologies.',
    },
    {
      icon: 'image/illustration.png',
      title: 'UI/UX Design',
      description: 'Designing intuitive interfaces that elevate user experience and interaction.',
    },
    {
      icon: 'image/image.png',
      title: 'Graphic Design',
      description: 'Creating visually compelling graphics that tell your brand\'s unique story.',
    }
  ];

  return (
    <section className="bg-[#121212] py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">
            My Professional <span className="text-teal-500">Services</span>
          </h2>
         
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="
                bg-[#1E1E1E] 
                rounded-2xl 
                p-6 
                border 
                border-[#2C2C2C] 
                hover:border-teal-500 
                transition-all 
                duration-300 
                transform 
                hover:-translate-y-2 
                group
              "
            >
              <div className="flex items-center justify-center mb-6">
                <div className="
                  w-20 
                  h-20 
                  bg-[#2C2C2C] 
                  rounded-full 
                  flex 
                  items-center 
                  justify-center 
                  group-hover:bg-teal-500 
                  transition-colors 
                  duration-300
                ">
                  <img 
                    src={service.icon} 
                    alt={service.title} 
                    className="w-10 h-10 filter brightness-0  "
                  />
                </div>
              </div>
              
              <h3 className="
                text-xl 
                font-semibold 
                text-white 
                mb-4 
                text-center 
                group-hover:text-teal-500 
                transition-colors 
                duration-300
              ">
                {service.title}
              </h3>
              
              <p className="
                text-gray-400 
                text-sm 
                text-center 
                mb-6
              ">
                {service.description}
              </p>
              
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Service;