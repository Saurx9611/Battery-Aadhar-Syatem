import React from 'react';
import { Zap } from 'lucide-react';

const Marquee: React.FC = () => {
  const items = [
    "BATTERY PASSPORT",
    "TRACEABILITY",
    "CIRCULAR ECONOMY",
    "NET ZERO",
    "URBAN MINING",
    "SUPPLY CHAIN TRANSPARENCY",
    "LITHIUM RECOVERY",
    "SAFETY COMPLIANCE"
  ];

  return (
    <div className="bg-panel text-primary py-3 overflow-hidden border-b border-gray-800 relative z-50 group cursor-default select-none">
      <div className="flex animate-marquee group-hover:[animation-play-state:paused] w-max">
        {[...Array(3)].map((_, i) => (
          <div key={i} className="flex items-center gap-8 px-4">
            {items.map((item, idx) => (
              <div key={idx} className="flex items-center gap-8">
                <span className="font-display font-bold text-sm tracking-widest uppercase whitespace-nowrap">
                  {item}
                </span>
                <Zap className="w-3 h-3 text-accent fill-accent" />
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Marquee;