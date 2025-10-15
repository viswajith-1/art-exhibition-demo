import React from 'react';

// Main component name changed from App to AboutPage
const AboutPage = () => {
  // Mock data for the exhibition
  const exhibitionData = {
    title: "Five Fingers", // Exhibition name
    date: "October 15 - November 30, 2025",
    location: "The Modern Gallery, Digital Wing",
    curator: "The Five Featured Artists", // Updated curator/featured group
    description: "The 'Five Fingers' exhibition is a collective retrospective featuring the distinct voices and groundbreaking work of five pioneering contemporary artists. Each 'finger' represents a unique perspective across various mediums—from abstract expressionism to digital sculpture. Together, their works explore themes of connection, identity, and the modern human human condition, showcasing the power of collaboration and individual mastery.", // Updated description
    // Updated placeholder image text to match the new title and color changed to teal for refresh
    posterUrl: "src/assets/images/poster.jpeg" 
  };
  
  return (
    // Using a React fragment. The style block for the font has been removed.
    <>
      {/* Outer Content Container - Font class removed to use browser default. */}
      <div 
        className={`min-h-screen bg-white p-4 sm:p-10 flex items-center justify-center`}
      >
        {/* Centering container for the card */}
        <div className="max-w-6xl mx-auto my-12"> {/* Adjusted margin to standard spacing */}
          
          {/* Main Card Container */}
          <div 
            className="flex flex-col md:flex-row bg-white shadow-2xl overflow-hidden"
          >
            
            {/* Left Section (Poster) */}
            <div 
              className={`md:w-1/2 p-6 bg-teal-600 flex items-center justify-center`}
            >
              {/* Poster Image Wrapper */}
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
                <p className="text-gray-600 leading-relaxed text-lg">
                  {exhibitionData.description}
                </p>
              </div>

              {/* Key Details */}
              <div className={`space-y-4`}>
                  {/* Subtle hover effect added to DetailBox for micro-interaction */}
                  <DetailBox icon="📅" label="Dates" value={exhibitionData.date} />
                  <DetailBox icon="📍" label="Location" value={exhibitionData.location} />
                  <DetailBox icon="👥" label="Featured By" value={exhibitionData.curator} />
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

// Changed export from App to AboutPage
export default AboutPage;