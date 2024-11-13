


import React from 'react';

function Project() {
  const services = [
    {
      icon: 'image/caf.png',
      title: 'Cafe Menu',
    },
    {
      icon: 'image/cafe2.png',
      title: 'Online Market',
    },
    {
      icon: '',
      title: 'E-commerece',
    }
  ];

  return (
    <section className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">
            My<span className="text-teal-500">Projects</span>
          </h2>
        </div>

        <div className="flex flex-wrap gap-16">
          {services.map((service, index) => (
            <div key={index} className="bg-[#1E1E1E] rounded-2xl p-6 border border-[#2C2C2C] flex flex-col items-center">
              <div className="w-72 h-36 rounded-full flex items-center justify-center mb-6">
                <img src={service.icon} alt={service.title} className="w-screen h-full filter" />
              </div>
              <h3 className="text-white text-lg font-semibold">{service.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Project;