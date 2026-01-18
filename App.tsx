import React from 'react';
import Hero from './components/Hero';
import MainGrid from './components/MainGrid';
import FeatureCards from './components/FeatureCards';
import Marquee from './components/Marquee';
import BrandFooter from './components/BrandFooter';
import GridBackground from './components/GridBackground';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-page font-sans selection:bg-primary/20 flex flex-col">
      
      {/* Marquee at the very top */}
      <Marquee />

      <main className="relative z-10 flex-1">
        {/* Background Grid Pattern Decoration */}
        <GridBackground />

        <Hero />
        <MainGrid />
        <FeatureCards />
      </main>

      <BrandFooter />
    </div>
  );
};

export default App;