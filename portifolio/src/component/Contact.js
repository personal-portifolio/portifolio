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
    <div className="flex flex-col md:flex-row items-center justify-around  p-4 md:p-8">
      <div className="md:w-1/2 p-4 text-left">
        <h2 className="text-3xl md:text-4xl font-semibold text-white">
          Got a project in <br />
          <span className="text-teal-400">mind?</span>
        </h2>
        <img
          src="image/contact.png"
          alt="Contact"
          className="mt-4 rounded-lg shadow-lg  h-auto"
        />
      </div>
      <div className="md:w-1/2 p-4 mt-4">
        <form onSubmit={handleSubmit} className=" p-6 rounded-lg shadow-lg">
          <div className="flex flex-col gap-4">
            <div className="mb-6">
              <label htmlFor="name" className="block text-left text-gray-400 font-medium mb-2">
                <FaUserAlt className="inline-block mr-2" />
                Your Name
              </label>
              <input
                type="text"
                id="name"
                className="bg-gray-700 text-gray-400 rounded-md px-4 py-3 w-full focus:outline-none focus:ring-2 focus:ring-teal-500"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className="mb-6">
              <label htmlFor="email" className="block text-left text-gray-400 font-medium mb-2">
                <FaEnvelope className="inline-block mr-2" />
                Your Email
              </label>
              <input
                type="email"
                id="email"
                className="bg-gray-700 text-gray-400 rounded-md px-4 py-3 w-full focus:outline-none focus:ring-2 focus:ring-teal-500"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="mb-6">
              <label htmlFor="message" className="block text-left text-gray-400 font-medium mb-2">
                Your Message
              </label>
              <textarea
                id="message"
                className="bg-gray-700 text-gray-400 rounded-md px-4 py-3 w-full h-32 focus:outline-none focus:ring-2 focus:ring-teal-500 resize-none"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-teal-400 hover:bg-teal-500 text-white font-medium rounded-md px-6 w-24 py-3"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
