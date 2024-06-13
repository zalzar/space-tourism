import React from 'react';
import HeroSection from './components/HeroSection';
import InfoCard from './components/InfoCard';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="font-sans">
      <HeroSection />
      <div className="p-8">
        <InfoCard
          title="Journey to the Red Planet"
          description="Mars is the fourth planet from the Sun and the second-smallest planet in the Solar System."
          image="/path/to/mars.jpg"
        />
        <InfoCard
          title="Unleash Your Inner Astronaut"
          description="Experience what it's like to be an astronaut with our training programs."
          image="/path/to/astronaut.jpg"
        />
        <InfoCard
          title="Ultimate Guide to Interplanetary Travel"
          description="Prepare for your journey beyond Earth with our comprehensive guide."
          image="/path/to/guide.jpg"
        />
      </div>
      <Footer />
    </div>
  );
}

export default App;
