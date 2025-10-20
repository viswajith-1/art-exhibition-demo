import React from 'react';
import backgroundImage from 'src/assets/images/background.png';

const HeroPage = () => {
  return (
    <section 
      className="relative h-screen w-full bg-cover bg-center text-white overflow-hidden flex items-center justify-center"
      style={{ 
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      
      <div className="absolute inset-0 bg-black opacity-50"></div>

      <div className="flex flex-col items-center justify-center z-10 p-4 max-w-5xl w-full">
        
        <p className="text-lg md:text-2xl tracking-widest font-light uppercase mb-6 text-gray-200">
           MOST AWAITED ART EXHIBITION
        </p>

        <h1 className="text-6xl sm:text-7xl lg:text-9xl font-black uppercase text-center leading-tight [text-shadow:0_4px_10px_rgba(0,0,0,0.4)]">
          FIVE FINGERS
        </h1>
        
        <div className="flex flex-col sm:flex-row items-center justify-center mt-8 space-y-3 sm:space-y-0 sm:space-x-12 text-xl md:text-3xl font-normal tracking-wider text-gray-100">
          <p className="border-b border-gray-400 pb-1">
            AT DAVID HALL, KOCHI
          </p>
          <p className="text-2xl font-light">
            OCT 24TH - NOV 2ND  2025
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroPage;
