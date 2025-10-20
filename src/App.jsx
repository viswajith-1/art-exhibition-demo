import React from 'react';

// Import all the components
import Navbar from './components/Navbar.jsx';
import HeroPage from './components/HeroPage.jsx';
import AboutPage from './components/AboutPage.jsx';
import ArtistPage from './components/ArtistPage.jsx';

const App = () => {
  return (
    <div>
      <Navbar />
      <main>
        <section id="home">
          <HeroPage />
        </section>
        <section id="about">
          <AboutPage />
        </section>
        {/* The ArtistPage component contains the section with the "artists" id */}
        <ArtistPage />
      </main>
    </div>
  );
};

export default App;