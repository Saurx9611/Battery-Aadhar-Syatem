import React from 'react';
import Hero from './components/Hero';
import MainGrid from './components/MainGrid';
import FeatureCards from './components/FeatureCards';
import Marquee from './components/Marquee';
import BrandFooter from './components/BrandFooter';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-page font-sans selection:bg-primary/20 flex flex-col">
      
      {/* Marquee at the very top */}
      <Marquee />

      <main className="relative z-10 flex-1">
        {/* Background Grid Pattern Decoration */}
        <div className="absolute inset-0 h-[600px] bg-grid-pattern bg-[length:40px_40px] opacity-[0.4] pointer-events-none -z-10" />
        <div className="absolute inset-0 h-[600px] bg-gradient-to-b from-transparent to-page pointer-events-none -z-10" />

        <Hero />
        <MainGrid />
        <FeatureCards />
      </main>

      <BrandFooter />
    </div>
  );
};

export default App;