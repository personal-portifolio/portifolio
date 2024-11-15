import React, { useState } from 'react';
import { FaEnvelope, FaUserAlt } from 'react-icons/fa';

const ContactPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your submit logic here
  };

  return (
    <div className="container mx-auto px-4 py-12 lg:py-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Side - Text and Image */}
        <div className="space-y-6 text-center lg:text-left">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
            Got a project in <br />
            <span className="text-teal-400">mind?</span>
          </h2>
          
          <div className="hidden lg:block">
            <img
              src="image/contact.png"
              alt="Contact"
              className="w-full max-w-md mx-auto rounded-lg shadow-2xl transform hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>

        {/* Right Side - Contact Form */}
        <div className="bg-gray-800 rounded-xl shadow-2xl p-6 sm:p-8 lg:p-10">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name Input */}
            <div>
              <label 
                htmlFor="name" 
                className="block text-sm font-medium text-gray-300 mb-2 flex items-center"
              >
                <FaUserAlt className="mr-2 text-teal-400" />
                Your Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-3 bg-gray-700 text-white rounded-lg 
                focus:outline-none focus:ring-2 focus:ring-teal-500 
                transition duration-300"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                placeholder="Enter your name"
              />
            </div>

            {/* Email Input */}
            <div>
              <label 
                htmlFor="email" 
                className="block text-sm font-medium text-gray-300 mb-2 flex items-center"
              >
                <FaEnvelope className="mr-2 text-teal-400" />
                Your Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-3 bg-gray-700 text-white rounded-lg 
                focus:outline-none focus:ring-2 focus:ring-teal-500 
                transition duration-300"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="Enter your email"
              />
            </div>

            {/* Message Textarea */}
            <div>
              <label 
                htmlFor="message" 
                className="block text-sm font-medium text-gray-300 mb-2"
              >
                Your Message
              </label>
              <textarea
                id="message"
                className="w-full px-4 py-3 bg-gray-700 text-white rounded-lg 
                focus:outline-none focus:ring-2 focus:ring-teal-500 
                transition duration-300 h-32 resize-none"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                placeholder="Write your message here..."
              ></textarea>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-teal-500 text-white py-3 rounded-lg 
              hover:bg-teal-600 transition duration-300 
              transform hover:scale-105 active:scale-95 
              font-semibold tracking-wider"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;