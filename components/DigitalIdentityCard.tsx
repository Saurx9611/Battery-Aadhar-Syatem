import React, { useRef } from 'react';
import gsap from 'gsap';
import { Fingerprint, ScanLine } from 'lucide-react';

const DigitalIdentityCard: React.FC = () => {
  const idRef = useRef<HTMLElement>(null);
  const fingerprintRef = useRef<SVGSVGElement>(null);
  const scanLineRef = useRef<HTMLDivElement>(null);
  const tweenRef = useRef<gsap.core.Tween | null>(null);

  const ORIGINAL_ID = "BAT-8922-X754-Y123-Z987-Q5";
  const CHARS = "ABCDEF0123456789XYZ";
  const handleMouseEnter = () => {
    // 1. Scramble Text Effect
    if (tweenRef.current) tweenRef.current.kill();
    let iteration = 0;
    
    tweenRef.current = gsap.to({}, {
      duration: 0.6,
      onUpdate: () => {
        if (!idRef.current) return;
        
        idRef.current.innerText = ORIGINAL_ID
          .split("")
          .map((char, index) => {
            if (index < iteration) {
              return ORIGINAL_ID[index];
            }
            return CHARS[Math.floor(Math.random() * CHARS.length)];
          })
          .join("");
        
        iteration += 1/3; // Speed of resolution
      },
      onComplete: () => {
        if (idRef.current) idRef.current.innerText = ORIGINAL_ID;
      }
    });

    // 2. Fingerprint Scan & Scale
    gsap.to(fingerprintRef.current, {
      scale: 1.2,
      color: "#2ECC71", // Primary Green
      duration: 0.4,
      ease: "back.out(1.7)"
    });

    gsap.fromTo(scanLineRef.current, 
      { top: "0%", opacity: 1 },
      { top: "100%", opacity: 0, duration: 1, ease: "power2.inOut" }
    );
  };

  const handleMouseLeave = () => {
    gsap.to(fingerprintRef.current, {
      scale: 1,
      color: "#16A085", // Accent Teal (Default)
      duration: 0.3,
      ease: "power2.out"
    });
  };

  return (
    <div 
      className="bg-card rounded-3xl p-8 shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 group border border-gray-100 min-h-[320px] flex flex-col justify-between relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      
      {/* Decorative background blur */}
      <div className="absolute -top-10 -right-10 w-32 h-32 bg-accent/5 rounded-full blur-2xl group-hover:bg-accent/10 transition-colors duration-500" />

      <div>
        <div className="relative w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mb-6 text-accent overflow-hidden">
          <Fingerprint ref={fingerprintRef} size={28} strokeWidth={1.5} className="transition-colors" />
          {/* Scan Line Overlay */}
          <div ref={scanLineRef} className="absolute left-0 w-full h-[2px] bg-primary shadow-[0_0_8px_rgba(46,204,113,0.8)] opacity-0 pointer-events-none"></div>
        </div>
        
        <h3 className="font-display text-2xl font-bold text-main mb-3 group-hover:text-primary transition-colors duration-300">Unique Digital Identity</h3>
        <p className="text-gray-500 text-sm leading-relaxed group-hover:text-gray-600 transition-colors">
          Just like a citizen ID, every battery gets a permanent 21-digit code linking the physical unit to a secure registry.
        </p>
      </div>

      <div className="mt-4">
        <div className="flex justify-between text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-2 px-1">
          <span>Sample ID</span>
          <span className="text-primary flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></span>
            Active
          </span>
        </div>
        <div className="bg-gray-50 border border-gray-100 group-hover:border-primary/30 group-hover:bg-primary/5 transition-all duration-300 rounded-xl p-4 flex items-center justify-center relative overflow-hidden">
          <code ref={idRef} className="font-mono text-xl font-bold text-main tracking-widest relative z-10">
            {ORIGINAL_ID}
          </code>
          {/* Subtle background decoration for the ID box */}
          <div className="absolute inset-0 opacity-[0.03] group-hover:opacity-[0.05] transition-opacity pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)', backgroundSize: '12px 12px' }}></div>
        </div>
      </div>
    </div>
  );
};

export default DigitalIdentityCard;