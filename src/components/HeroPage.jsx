import React from 'react';
import backgroundImage from '../assets/images/background.png';

// This component uses the same dramatic styling and layout (full-width, centered text, dark background)
// as the previous request, but with updated text for an 'Art Exhibition' theme.

const HeroPage = () => {
  // IMPORTANT: The path below assumes the image 'background.jpg' is available in the hosting environment.
  // In a typical React project, you might import it, but here we use the direct path.
  const backgroundImagePath = backgroundImage;

  return (
    // The main container. Sets the height, background, and text color.
    // 'relative' is needed for the absolute positioning of the text overlay.
    <section 
      className="relative h-screen w-full bg-cover bg-center text-white overflow-hidden flex items-center justify-center"
      // Setting the uploaded abstract image as the background
      style={{ 
        backgroundImage: `url(${backgroundImagePath})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      
      {/* REQUIRED OVERLAY: Adds a dark, semi-transparent layer over the image 
          to ensure high-contrast and readability for the white text. */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Text Container: 
        Centers the content vertically and horizontally.
        'z-10' ensures the text is above the background effects.
      */}
      <div className="flex flex-col items-center justify-center z-10 p-4 max-w-5xl w-full">
        
        {/* Top Context - Mimics the '2D GAME ARTIST' line */}
        <p className="text-lg md:text-2xl tracking-widest font-light uppercase mb-6 text-gray-200">
           MOST AWAITED ART EXHIBITION
        </p>

        {/* Main Exhibition Title - Bold and Massive */}
        <h1 className="text-6xl sm:text-7xl lg:text-9xl font-black uppercase text-center leading-tight [text-shadow:0_4px_10px_rgba(0,0,0,0.4)]">
          FIVE FINGERS
        </h1>
        
        {/* Sub-text/Details - Mimics the 'BONG' and '2024' lines */}
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
