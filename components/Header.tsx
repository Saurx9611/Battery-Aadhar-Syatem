import React from 'react';
import { NAV_LINKS } from '../constants';
import { Zap } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 w-full bg-page/80 backdrop-blur-md border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2 group cursor-pointer">
          <div className="w-10 h-10 rounded-xl bg-panel flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform duration-300">
            <Zap className="w-5 h-5 text-primary" fill="currentColor" />
          </div>
          <div className="font-display font-bold text-xl text-main tracking-tight">
            Battery Aadhaar <span className="text-accent font-normal">System</span>
          </div>
        </div>

        {/* Nav Links */}
        <nav className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <a 
              key={link} 
              href={`#${link.toLowerCase()}`}
              className="text-sm font-medium text-gray-600 hover:text-accent transition-colors duration-200"
            >
              {link}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <button className="bg-accent hover:bg-teal-700 text-white font-medium px-6 py-2.5 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 text-sm">
          Download Report
        </button>
      </div>
    </header>
  );
};

export default Header;