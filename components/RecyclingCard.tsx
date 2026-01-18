import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const RecyclingCard: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const numberRef = useRef<HTMLSpanElement>(null);
  const barsRef = useRef<HTMLDivElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      
      // Animate Number Count up on Load
      gsap.from(numberRef.current, {
        textContent: 0,
        duration: 2,
        ease: "power1.out",
        snap: { textContent: 1 },
        stagger: 1,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
        }
      });

      // Animate Bars Growing on Load
      if (barsRef.current) {
        const bars = barsRef.current.children;
        gsap.from(bars, {
          height: 0,
          opacity: 0,
          duration: 1,
          stagger: 0.1,
          ease: "back.out(1.7)",
          delay: 0.5,
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%",
          }
        });
      }

    }, containerRef);

    return () => ctx.revert();
  }, []);

  const handleMouseEnter = () => {
    // 1. "Equalizer" Wave Effect on Bars
    if (barsRef.current) {
        const bars = Array.from(barsRef.current.children);
        gsap.to(bars, {
            height: () => gsap.utils.random(30, 90) + "%", // Randomize heights
            duration: 0.4,
            stagger: {
                each: 0.05,
                yoyo: true,
                repeat: 3 // Bounce a few times
            },
            ease: "sine.inOut"
        });
    }

    // 2. Scale Number
    gsap.to(numberRef.current, {
        scale: 1.1,
        color: "#ffffff",
        textShadow: "0px 0px 20px rgba(255,255,255,0.5)",
        duration: 0.3,
        ease: "power2.out"
    });

    // 3. Pop the Badge
    gsap.to(badgeRef.current, {
        scale: 1.1,
        rotation: -5,
        backgroundColor: "rgba(255,255,255,0.3)",
        duration: 0.3,
        ease: "back.out(2)"
    });
  };

  const handleMouseLeave = () => {
    // Reset Bars to "nice" looking graph
    if (barsRef.current) {
        const bars = Array.from(barsRef.current.children);
        const originalHeights = ["40%", "60%", "50%", "80%"];
        
        gsap.to(bars, {
            height: (i) => originalHeights[i],
            duration: 0.5,
            stagger: 0.05,
            ease: "power2.out"
        });
    }

    // Reset Number
    gsap.to(numberRef.current, {
        scale: 1,
        textShadow: "none",
        duration: 0.3
    });

     // Reset Badge
     gsap.to(badgeRef.current, {
        scale: 1,
        rotation: 0,
        backgroundColor: "rgba(255,255,255,0.2)",
        duration: 0.3
    });
  };

  return (
    <div 
        ref={containerRef} 
        className="bg-accent rounded-3xl p-8 shadow-lg relative overflow-hidden text-white h-[280px] flex flex-col justify-between group cursor-default transition-all duration-300 hover:shadow-2xl hover:scale-[1.02]"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
    >
      
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity duration-500" style={{ backgroundImage: "radial-gradient(circle at 2px 2px, white 1px, transparent 0)", backgroundSize: "20px 20px" }}></div>
      
      {/* Glow gradient that moves on hover */}
      <div className="absolute -inset-full top-0 block h-full w-1/2 -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-20 group-hover:animate-shine" />

      <div className="relative z-10">
        <h3 className="font-display text-lg font-medium opacity-90 mb-1">Recycling Target</h3>
        <div className="flex items-end gap-2">
            <span className="font-display text-6xl font-bold tracking-tight inline-block origin-left">
              <span ref={numberRef} className="inline-block origin-bottom">95</span>%
            </span>
            <div ref={badgeRef} className="bg-white/20 px-2 py-0.5 rounded text-xs font-bold mb-3 backdrop-blur-sm origin-bottom-left">
                +15%
            </div>
        </div>
        <p className="text-white/70 text-sm mt-2 max-w-[80%] group-hover:text-white transition-colors">Material recovery efficiency goal by 2030.</p>
      </div>

      <div ref={barsRef} className="flex items-end justify-end gap-2 h-16 relative z-10">
        <div className="w-4 bg-white/30 rounded-t-sm h-[40%] transition-colors group-hover:bg-white/40"></div>
        <div className="w-4 bg-white/40 rounded-t-sm h-[60%] transition-colors group-hover:bg-white/50"></div>
        <div className="w-4 bg-white/60 rounded-t-sm h-[50%] transition-colors group-hover:bg-white/70"></div>
        <div className="w-4 bg-white rounded-t-sm h-[80%] shadow-[0_0_15px_rgba(255,255,255,0.5)] group-hover:shadow-[0_0_25px_rgba(255,255,255,0.8)] transition-all"></div>
      </div>
      
      <style>{`
        @keyframes shine {
            100% {
                left: 125%;
            }
        }
      `}</style>
    </div>
  );
};

export default RecyclingCard;