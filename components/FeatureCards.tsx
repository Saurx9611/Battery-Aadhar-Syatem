import React from 'react';
import { BOTTOM_CARDS } from '../constants';

const FeatureCards: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6 pb-20 px-6 max-w-7xl mx-auto">
      {BOTTOM_CARDS.map((card, idx) => (
        <div 
            key={idx}
            className="bg-card rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group cursor-default"
        >
            <div className={`w-12 h-12 rounded-xl ${card.bg} ${card.color} flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110`}>
                <card.icon size={24} />
            </div>
            <h3 className="font-display text-xl font-bold text-main mb-3">{card.title}</h3>
            <p className="text-gray-500 text-sm leading-relaxed">
                {card.description}
            </p>
        </div>
      ))}
    </div>
  );
};

export default FeatureCards;