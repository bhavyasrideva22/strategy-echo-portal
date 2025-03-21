
import React from 'react';

const ContactHero = () => {
  return (
    <div className="relative h-[50vh] min-h-[300px] w-full">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url('https://images.unsplash.com/photo-1423666639041-f56000c27a9a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1474&q=80')` }}
      >
        <div className="absolute inset-0 bg-focus-blue bg-opacity-70"></div>
      </div>
      
      <div className="relative h-full container mx-auto px-4 flex flex-col justify-center">
        <div className="max-w-3xl animate-fade-in">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Contact Us
          </h1>
          <p className="text-xl md:text-2xl text-white opacity-90 mb-8 max-w-2xl">
            Get in touch with our team to discuss how we can help your business grow.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactHero;
