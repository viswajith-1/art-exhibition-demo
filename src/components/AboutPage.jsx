import React from 'react';
import posterImage from '../assets/images/poster.jpeg';

// Main component name changed from App to AboutPage
const AboutPage = () => {
  // Mock data for the exhibition
  const exhibitionData = {
    title: "Five Fingers", // Exhibition name
    date: "October 24 - November 2, 2025",
    location: "David Hall, Kochi",
    curator: "Raji Chengannur, Sajikumar V. S., Sajith Remady, Minisharma, & Sudharma", // Updated curator/featured group
    // REDUCED the description into a single, concise paragraph
    description: "The distinguished ‘5 Fingers’ Group is set to unveil a monumental exhibition, celebrating over three and a half decades of artistic dedication and international acclaim. This show is a tribute to their enduring commitment, showcasing a meticulously honed body of work that has earned both national and international recognition. The exhibition promises a visual feast of diverse expressions, techniques, and philosophical depth, inviting art lovers to experience a significant milestone in Kerala’s art history. It represents a convergence of five lives dedicated to shaping the contemporary art movement.",
    posterUrl: posterImage,
    // REMOVED contact property
  };
  
  return (
    // Using a React fragment.
    <>
      {/* Outer Content Container */}
      <div 
        className={`min-h-screen bg-white p-4 sm:p-10 flex items-center justify-center`}
      >
        {/* Centering container for the card */}
        <div className="max-w-6xl mx-auto my-12">
          
          {/* Main Card Container with shadow */}
          <div 
            className="flex flex-col md:flex-row bg-white shadow-2xl overflow-hidden"
          >
            
            {/* Left Section (Poster) */}
            <div 
              className={`md:w-1/2 p-6 bg-teal-600 flex items-center justify-center`}
            >
              {/* Poster Image Wrapper with shadow */}
              <div className="w-full max-w-sm overflow-hidden shadow-lg transform hover:scale-[1.02] transition-transform duration-300">
                <img
                  src={exhibitionData.posterUrl}
                  alt={`${exhibitionData.title} Poster`}
                  className="w-full h-auto object-contain" // Ensures image fits without cropping
                  onError={(e) => {
                    e.target.onerror = null; 
                    e.target.src = "https://placehold.co/400x550/0D9488/FFFFFF?text=Poster%20Missing";
                  }}
                />
              </div>
            </div>
            
            {/* Right Section (Content) */}
            <div 
              className={`md:w-1/2 p-8 sm:p-12 space-y-8`}
            >
              
              {/* Title Block */}
              <div>
                <span className="text-sm font-semibold uppercase tracking-widest text-teal-700"> 
                  The Exhibition
                </span>
                <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mt-2 leading-tight">
                  {exhibitionData.title}
                </h1>
              </div>

              {/* Description */}
              <div>
                <h3 className="text-2xl font-bold text-gray-800 mb-3">About the Show</h3>
                {/* ADDED text-justify and removed whitespace-pre-wrap */}
                <p className="text-gray-600 leading-relaxed text-lg text-justify">
                  {exhibitionData.description}
                </p>
              </div>

              {/* Key Details */}
              <div className={`space-y-4`}>
                  <DetailBox icon="📅" label="Dates" value={exhibitionData.date} />
                  <DetailBox 
                    icon="📍" 
                    label="Location" 
                    value={
                      <a 
                        href="https://maps.app.goo.gl/7uwnrxmdESMNWY6aA" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="hover:underline"
                      >
                        {exhibitionData.location}
                      </a>
                    } 
                  />
                  <DetailBox icon="👥" label="Featured Artists" value={exhibitionData.curator} />
                  {/* REMOVED Contact DetailBox */}
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

// Helper component for cleaner detail presentation
const DetailBox = ({ icon, label, value }) => (
    <div className="flex items-start space-x-3 p-2 transition duration-200 hover:bg-gray-50">
        <span className="text-2xl pt-1">{icon}</span>
        <div>
            <p className="text-sm font-medium text-gray-500 uppercase tracking-wider">{label}</p>
            <p className="text-lg font-semibold text-gray-800">{value}</p>
        </div>
    </div>
);

export default AboutPage;
