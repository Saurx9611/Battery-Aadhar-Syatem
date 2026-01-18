import React from 'react';
import Hero from './components/Hero';
import MainGrid from './components/MainGrid';
import FeatureCards from './components/FeatureCards';
import Marquee from './components/Marquee';

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

      <footer className="border-t border-gray-200 py-8 text-center text-sm text-gray-400">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
             <p>© 2024 Battery Aadhaar Initiative. All rights reserved.</p>
             <div className="flex gap-6 mt-4 md:mt-0">
                <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
                <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
                <a href="#" className="hover:text-primary transition-colors">Registry API</a>
             </div>
        </div>
      </footer>
    </div>
  );
};

export default App;