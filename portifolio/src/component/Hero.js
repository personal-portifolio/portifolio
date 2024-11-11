import React from 'react';
import Header from './Header';

function Hero() {
  return (
    <section className="flex flex-wrap gap-10 justify-around mt-20 p-5">
      <div className="flex flex-col">
        <h1 className="text-4xl font-bold text-left">
          I'm Maraki Astatke
          <br />
          <span className="text-teal-400">Front-end</span> Developer
        </h1>
        <p className="mt-6 text-left text-sm text-gray-200">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          <br />
          Est nostrum tenetur fuga, quas quod corrupti assumenda!
        </p>
        
        <div className="flex gap-6 mt-8 mb-5">
          <button className="border border-teal-400 px-6 text-teal-400 py-2 rounded-md hover:bg-teal-400 hover:text-white transition duration-300">
            DOWNLOAD CV
          </button>
          <button className="text-white bg-teal-400 px-6 py-2 rounded-md hover:bg-teal-500 transition duration-300">
            HIRE ME
          </button>
        </div>
      </div>

      <img 
        className="w-80 rounded shadow-lg" 
        src="image/photo.jpg" 
        alt="Maraki Astatke" 
      />
    </section>
  );
}

export default Hero;