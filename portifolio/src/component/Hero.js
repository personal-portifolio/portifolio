import React from 'react';

function Hero() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-16 md:py-24 flex flex-col md:flex-row items-center justify-between space-y-10 md:space-y-0 md:space-x-16">
      <div className="flex-1 text-center md:text-left">
        <div className="space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Hi there, I'm <span className="text-teal-500">Maraki Astatke</span>
            <br />
            Front-end Developer
          </h1>
          
          <p className="text-gray-400 max-w-xl mx-auto md:mx-0">
            Passionate about creating elegant, responsive, and user-centric web experiences. 
            I transform complex problems into intuitive digital solutions.
          </p>
          
          <div className="space-y-4">
            <div className="flex items-center justify-center md:justify-start space-x-2">
              <svg className="w-5 h-5 text-teal-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clipRule="evenodd" />
              </svg>
              <span className="text-gray-400">Creative problem-solving</span>
            </div>
            <div className="flex items-center justify-center md:justify-start space-x-2">
              <svg className="w-5 h-5 text-teal-500" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 5a2 2 0 012-2h7a2 2 0 012 2v4a2 2 0 01-2 2H9l-3 3v-3H4a2 2 0 01-2-2V5z" />
                <path d="M15 7v2a4 4 0 01-4 4H9.828l-1.766 1.767c.28.149.599.233.938.233h2l3 3v-3h2a2 2 0 002-2V9a2 2 0 00-2-2h-1z" />
              </svg>
              <span className="text-gray-400">Excellent communication</span>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4 pt-6">
          <a 
            href="..\image\cv.png" 
            download="cv.png" 
            className="px-6 py-3 border-2 border-teal-500 text-teal-500 rounded-lg hover:bg-teal-500 hover:text-white transition-colors duration-300 flex items-center justify-center space-x-2"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm5 6a1 1 0 10-2 0v3a1 1 0 102 0V8z" clipRule="evenodd" />
            </svg>
            <span>Download CV</span>
          </a>
            <button className="px-6 py-3 bg-teal-500 text-white rounded-lg hover:bg-teal-600 transition-colors duration-300">
              Hire Me
            </button>
          </div>
        </div>
      </div>

      <div className="flex-shrink-0 relative group">
        <div className="absolute -inset-1 bg-teal-400 rounded-full opacity-70 group-hover:opacity-100 blur-xl transition-all duration-300"></div>
        <div className="relative">
          <img 
            className="w-64 h-64 md:w-80 md:h-80 object-cover rounded-full border-4 border-white 
                       shadow-lg transform transition-all duration-300 
                       group-hover:scale-105 group-hover:shadow-xl"
            src="image/photo.jpg" 
            alt="Maraki Astatke" 
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;