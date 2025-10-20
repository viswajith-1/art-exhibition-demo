import React, { useState, useEffect, useRef } from 'react';
import { Mail, Phone } from 'lucide-react';

// Import artist profile images
import rajiProfile from 'src/assets/images/raji.jpeg';
import miniProfile from 'src/assets/images/mini.jpeg';
import sajiProfile from 'src/assets/images/saji.jpg';
import sajithProfile from 'src/assets/images/sajith.jpg';
import sudharmaProfile from 'src/assets/images/sudharma.jpeg';

// Import artwork images for Raji Chengannur
import rajiArt1 from 'src/assets/images/raji (1).jpeg';
import rajiArt2 from 'src/assets/images/raji (2).jpeg';
import rajiArt3 from 'src/assets/images/raji (3).jpeg';
import rajiArt4 from 'src/assets/images/raji (4).jpeg';

// Import artwork images for Mini Sharma
import miniArt1 from 'src/assets/images/mini1.jpeg';
import miniArt2 from 'src/assets/images/mini2.jpeg';
import miniArt3 from 'src/assets/images/mini3.jpeg';
import miniArt4 from 'src/assets/images/mini4.jpeg';
import miniArt5 from 'src/assets/images/mini5.jpeg';

// Import artwork images for Sudharma
import sudharmaArt1 from 'src/assets/images/sudharma (1).jpeg';
import sudharmaArt2 from 'src/assets/images/sudharma (2).jpeg';
import sudharmaArt3 from 'src/assets/images/sudharma (3).jpeg';
import sudharmaArt4 from 'src/assets/images/sudharma (4).jpeg';
import sudharmaArt5 from 'src/assets/images/sudharma (5).jpeg';

// Import artwork images for Saji Kumar
import sajiArt1 from 'src/assets/images/saji (1).jpeg';
import sajiArt2 from 'src/assets/images/saji (2).jpeg';
import sajiArt3 from 'src/assets/images/saji (3).jpeg';
import sajiArt4 from 'src/assets/images/saji (4).jpg';
import sajiArt5 from 'src/assets/images/saji (5).jpg';

// Import artwork images for Sajith Remady
import sajithArt1 from 'src/assets/images/sajith (1).jpeg';
import sajithArt2 from 'src/assets/images/sajith (2).jpeg';
import sajithArt3 from 'src/assets/images/sajith (3).jpeg';
import sajithArt4 from 'src/assets/images/sajith (4).jpeg';
import sajithArt5 from 'src/assets/images/sajith (5).jpeg';


const ArtistPage = () => {
  const portfolioRef = useRef(null);

  return (
    <div className="font-sans antialiased bg-white text-gray-900 min-h-screen">
      <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js"></script>
      <main>
        <Portfolio ref={portfolioRef} />
      </main>
    </div>
  );
};

const Portfolio = React.forwardRef((props, ref) => {
  const [selectedArtwork, setSelectedArtwork] = useState(null);
  const sectionRefs = useRef([]);
  
  const allArtworks = [
    // Raji Chengannur (5 works)
    { id: 1, artistId: 'raji-chengannur', title: 'Close to the Coast', src: rajiArt1, alt: 'Abstract art of a crimson sky', medium: 'Acrylic', size: '24" x 36"' }, 
    { id: 2, artistId: 'raji-chengannur', title: 'Sunlit Meadow', src: rajiArt2, alt: 'Painting of a sunlit meadow', medium: 'Acrylic', size: '18" x 18"' }, 
    { id: 11, artistId: 'raji-chengannur', title: 'Vibrant Portrait', src: rajiArt3, alt: 'Vibrant abstract portrait', medium: 'Acrylic', size: '30" x 40"' },
    { id: 12, artistId: 'raji-chengannur', title: 'Coastal Blur', src: rajiArt4, alt: 'Abstract coastal scene', medium: 'Acrylic', size: '20" x 16"' },
    { id: 13, artistId: 'raji-chengannur', title: 'Inner Fire', src: rajiArt1, alt: 'Fiery abstract composition', medium: 'Acrylic', size: '48" x 48"' },

    // Mini Sharma (5 works)
    { id: 3, artistId: 'mini-sharma', title: 'Urban Jungle', src: miniArt1, alt: 'Painting of a city with green elements', medium: 'Acrylic', size: '48" x 48"' }, 
    { id: 4, artistId: 'mini-sharma', title: 'City at Dusk', src: miniArt2, alt: 'Graffiti mural of a city skyline', medium: 'Acrylic', size: '72" x 108"' }, 
    { id: 14, artistId: 'mini-sharma', title: 'Neon Alley', src: miniArt3, alt: 'Graffiti with neon accents', medium: 'Acrylic', size: '60" x 40"' },
    { id: 15, artistId: 'mini-sharma', title: 'Concrete Bloom', src: miniArt4, alt: 'Street art of a flower', medium: 'Acrylic', size: '24" x 24"' },
    { id: 16, artistId: 'mini-sharma', title: 'Sky High Tag', src: miniArt5, alt: 'Abstract tag on a skyscraper', medium: 'Acrylic', size: '80" x 50"' },

    // Sudharma (5 works)
    { id: 5, artistId: 'sudharma', title: 'Lost in Thought', src: sudharmaArt1, alt: 'Portrait of a person lost in thought', medium: 'Acrylic', size: '2000px x 2800px' }, 
    { id: 6, artistId: 'sudharma', title: 'Digital Dreams', src: sudharmaArt2, alt: 'Futuristic digital art', medium: 'Acrylic', size: '3000px x 4500px' }, 
    { id: 17, artistId: 'sudharma', title: 'Cyber Fauna', src: sudharmaArt3, alt: 'Digital creature design', medium: 'Acrylic', size: '4K Resolution' },
    { id: 18, artistId: 'sudharma', title: 'Starfall Knight', src: sudharmaArt4, alt: 'Concept art of a warrior', medium: 'Acrylic', size: '2500px x 3500px' },
    { id: 19, artistId: 'sudharma', title: 'Pixel Bloom', src: sudharmaArt5, alt: 'Low-poly botanical art', medium: 'Acrylic', size: '1080px x 1920px' },

    // Saji Kumar (5 works)
    { id: 7, artistId: 'saji-kumar', title: 'Recycled Hope', src: sajiArt1, alt: 'Sculpture made from recycled materials', medium: 'Acrylic', size: '36" x 36" x 12"' }, 
    { id: 8, artistId: 'saji-kumar', title: 'Cosmic Dust', src: sajiArt2, alt: 'A sculpture of the cosmos with bright stars', medium: 'Acrylic', size: '24" x 24" x 24"' }, 
    { id: 20, artistId: 'saji-kumar', title: 'Gear Heart', src: sajiArt3, alt: 'Kinetic sculpture of a heart', medium: 'Acrylic', size: '15" x 15" x 10"' },
    { id: 21, artistId: 'saji-kumar', title: 'Rust Echo', src: sajiArt4, alt: 'Abstract metal sheet sculpture', medium: 'Acrylic', size: '50" x 30" x 5"' },
    { id: 22, artistId: 'saji-kumar', title: 'Wind Chime', src: sajiArt5, alt: 'Sound sculpture for outdoors', medium: 'Acrylic', size: '80" tall' },

    // Sajith Remady (5 works)
    { id: 9, artistId: 'sajith-remady', title: 'Spring Bloom', src: sajithArt1, alt: 'Watercolor of flowers blooming', medium: 'Acrylic', size: '11" x 14"' }, 
    { id: 10, artistId: 'sajith-remady', title: 'Weaving Tales', src: sajithArt2, alt: 'Tapestry telling a story', medium: 'Acrylic', size: '48" x 60"' }, 
    { id: 23, artistId: 'sajith-remady', title: 'Ancestral Threads', src: sajithArt3, alt: 'Hand-woven cultural textile', medium: 'Acrylic', size: '72" x 72"' },
    { id: 24, artistId: 'sajith-remady', title: 'Indigo Dye', src: sajithArt4, alt: 'Shibori dye pattern', medium: 'Acrylic', size: '40" x 40"' },
    { id: 25, artistId: 'sajith-remady', title: 'Harvest Tapestry', src: sajithArt5, alt: 'Tapestry depicting a harvest', medium: 'Acrylic', size: '60" x 90"' },
  ];

  const artists = [
    { 
      id: 'raji-chengannur', 
      name: 'Raji Chengannur', 
      description: "Starting their journey at the Govt Ravivarma College of Fine Arts, Mavelikkara, this dynamic artist has painted a path across the globe! After exciting roles as an illustrator for Kala Kaumudi weekly and an art teacher in the UAE, they now work as a full-time freelance artist. Their vibrant work has earned spots in major international shows like the South Korean International Art Fair and the Jaipur Art Festival, and is happily held in collections across the US, UK, South Korea, and South Africa.", 
      profileSrc: rajiProfile, 
      phone: '+91 8547024903', 
      email: 'rajichengannur@gmail.com',
      borderColor: 'border-yellow-600'
    },
    { 
      id: 'mini-sharma', 
      name: 'Mini Sharma', 
      description: "Mini Sharma's art is a vibrant and fluid blend of nature and surrealism, featuring hornbills and exotic flowers enveloped by swirling, organic shapes and rich colors. Her dynamic compositions are filled with a sense of movement, using flowing lines to suggest an unseen energy in a captivating, mystical atmosphere. She masterfully plays with light and shadow, enhancing the dreamlike and dramatic quality that gives depth to each scene.", 
      profileSrc: miniProfile,
      phone: '+91 9495556649', 
      email: 'minisharma@gmail.com',
      borderColor: 'border-blue-600'
    },
    { 
      id: 'saji-kumar', 
      name: 'Sajikumar V S', 
      description: "Sajikumar V S is a nationally acclaimed artist and art teacher from Kerala, celebrated for his innovative work, particularly with Jawahar Navodaya Vidyalayas. His significant contributions to education have been recognized with the prestigious National Teacher Award and the National ICT Award for Teachers. Known for creatively integrating art with other subjects and transforming school campuses with student-led projects like murals and sculptures, Sajikumar is a passionate advocate for a more holistic and creative educational system in India, even serving on the CBSE's Art Integrated Education Guidelines committee.", 
      profileSrc: sajiProfile,
      phone: '+91 9544449403', 
      email: 'sajijnvaleppey@gmail.com',
      borderColor: 'border-green-600'
    },
    { 
      id: 'sajith-remady', 
      name: 'Sajith Remady', 
      description: "Sajith A. Remady is an accomplished Indian artist and art teacher from Kerala, holding a National Diploma in Fine Arts from the Raja Ravi Varma College of Fine Arts, Mavelikkara. With a career spanning several decades, he has showcased his work in numerous solo and group exhibitions. He is the recipient of the Sidhartha Foundation State Award for Nature Painting (2017) and is known for his plein air painting series - 'Canvas on Wheels'.", 
      profileSrc: sajithProfile,
      phone: '+91 9946998488', 
      email: 'sajithremady123@gmail.com',
      borderColor: 'border-purple-600'
    },
    { 
      id: 'sudharma', 
      name: 'Sudharma', 
      description: "Sudharma is an artist with a highly distinctive style, creating intricate compositions from dense, cellular or web-like patterns. Within this complex matrix, figurative forms—such as human bodies, faces, and hands—emerge and recede, suggesting a profound interconnectedness between the subject and its environment. This unique technique, combined with a varied color palette, results in visually compelling and thought-provoking works that explore the blurring lines between the individual and the universe.", 
      profileSrc: sudharmaProfile,
      phone: '+91 9447190578', 
      email: 'sudharma@gmail.com',
      borderColor: 'border-blue-300'
    },
  ];

  // ... (The rest of the component code remains unchanged)
  const openModal = (artwork) => {
    setSelectedArtwork(artwork);
  };

  const closeModal = () => {
    setSelectedArtwork(null);
  };

  useEffect(() => {
    if (typeof window.gsap !== 'undefined' && window.gsap.registerPlugin) {
      window.gsap.registerPlugin(window.ScrollTrigger);
      sectionRefs.current.forEach(section => {
        if (section) {
          window.gsap.fromTo(section, 
            { y: 50, opacity: 0 }, 
            { y: 0, opacity: 1, duration: 1, ease: "power2.out", 
              scrollTrigger: {
                trigger: section,
                start: "top 80%",
                toggleActions: "play none none none"
              }
            }
          );
        }
      });
    }
  }, []);

  return (
    <section id="artists" className="pt-12 pb-6 bg-white" ref={ref}>
      
      {artists.map((artist, index) => (
        <section 
          key={artist.id} 
          id={`portfolio-${artist.id}`} 
          className={`py-16 md:py-20 bg-white transition-all duration-500`}
          ref={el => sectionRefs.current[index] = el}
        >
          <div className="max-w-7xl mx-auto px-6">
            
            <div className={`flex flex-col sm:flex-row items-center sm:items-start mb-10 md:mb-16 gap-8 sm:gap-16 text-center sm:text-left`}>
              	
              	<div className="flex-shrink-0">
              	  	<img 
              	  	  	src={artist.profileSrc} 
              	  	  	alt={`Profile picture of ${artist.name}`} 
              	  	  	className={`w-48 h-48 md:w-64 md:h-64 object-cover shadow-xl border-4 ${artist.borderColor} rounded-full`} 
              	  	/>
              	</div>
              	
              	<div className="flex flex-col items-start text-left w-full">
              	  	<h3 className={`text-5xl md:text-6xl font-extrabold mb-3 text-gray-900 leading-tight text-center sm:text-left w-full`}>
              	  	  	{artist.name}
              	  	</h3>

              	  	<p className={`text-lg md:text-xl max-w-4xl text-gray-700 leading-relaxed mb-6 text-justify w-full`}>
              	  	  	{artist.description}
              	  	</p>
              	  	
              	  	<div className="flex flex-col space-y-3 text-base md:text-lg">
              	  	  	<a 
              	  	  	  	href={`mailto:${artist.email}`} 
              	  	  	  	className="flex items-center text-gray-700 hover:text-black transition-colors duration-300 group font-medium"
              	  	  	>
              	  	  	  	<Mail className="w-5 h-5 mr-3 text-gray-700 group-hover:text-black" />
              	  	  	  	{artist.email}
              	  	  	</a>
              	  	  	<a 
              	  	  	  	href={`tel:${artist.phone}`} 
              	  	  	  	className="flex items-center text-gray-700 hover:text-black transition-colors duration-300 group font-medium"
              	  	  	>
              	  	  	  	<Phone className="w-5 h-5 mr-3 text-gray-700 group-hover:text-black" />
              	  	  	  	{artist.phone}
              	  	  	</a>
              	  	</div>
              	</div>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 mx-auto">
              {allArtworks
                .filter(artwork => artwork.artistId === artist.id)
                .map((artwork) => (
                  <div
                    key={artwork.id}
                    className="group relative overflow-hidden transition-all duration-300 hover:shadow-xl cursor-pointer bg-gray-100 border border-gray-200"
                    onClick={() => openModal(artwork)}
                  >
                    <img
                      src={artwork.src}
                      alt={artwork.alt}
                      className="w-full h-full object-cover transition-opacity duration-500"
                      style={{ aspectRatio: '1 / 1' }}
                    />
                  </div>
                ))}
            </div>
          </div>
        </section>
      ))}

      {selectedArtwork && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-gray-900 bg-opacity-90 transition-opacity duration-300">
          <div className="relative w-full max-w-6xl mx-auto bg-white shadow-2xl shadow-gray-900/30 flex flex-col md:flex-row overflow-hidden animate-fade-in text-gray-900 h-[95vh]">
            
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-gray-500 text-3xl hover:text-black transition-colors duration-300 z-30 p-2 bg-white shadow-md"
            >
              &times;
            </button>
            
            <div 
                className="md:w-2/3 p-4 relative overflow-hidden flex items-center justify-center w-full h-[50vh] md:h-full flex-shrink-0"
            >
                <img 
                    src={selectedArtwork.src} 
                    alt={selectedArtwork.alt} 
                    className="max-w-full max-h-full object-contain border border-gray-300"
                />
            </div>

            <div className="md:w-1/3 p-6 md:p-10 flex flex-col justify-start overflow-y-auto border-t md:border-t-0 md:border-l border-gray-200 flex-grow">
              <h3 className="text-3xl md:text-4xl font-extrabold text-black mb-4">
                {selectedArtwork.title}
              </h3>
              <p className="text-base md:text-lg text-gray-700 mb-6 leading-relaxed">
                A captivating piece that showcases {artists.find(a => a.id === selectedArtwork.artistId)?.name}'s mastery of **{selectedArtwork.medium}**.
              </p>
              
              <div className="space-y-3 text-gray-600">
                <p className="flex justify-between border-b border-gray-200 pb-2">
                    <span className="font-semibold text-gray-700">Medium:</span> 
                    <span>{selectedArtwork.medium}</span>
                </p>
                <p className="flex justify-between border-b border-gray-200 pb-2">
                    <span className="font-semibold text-gray-700">Dimensions:</span> 
                    <span>{selectedArtwork.size}</span>
                </p>
                <p className="flex justify-between">
                    <span className="font-semibold text-gray-700">Artist:</span> 
                    <span className="text-gray-800 font-medium">{artists.find(a => a.id === selectedArtwork.artistId)?.name}</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
});

export default ArtistPage;
