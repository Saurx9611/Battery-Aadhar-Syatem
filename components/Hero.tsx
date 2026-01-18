import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { Zap } from 'lucide-react';

const WarpText = ({ text, className, delay = 0 }: { text: string, className?: string, delay?: number }) => {
  const charsRef = useRef<(HTMLSpanElement | null)[]>([]);
  const tweenRef = useRef<gsap.core.Tween | null>(null);

  useLayoutEffect(() => {
    const chars = charsRef.current.filter(Boolean);
    
    // Initial Reveal
    const ctx = gsap.context(() => {
      gsap.fromTo(chars, 
        { 
          y: 100, 
          opacity: 0,
          rotateX: -90
        },
        {
          y: 0,
          opacity: 1,
          rotateX: 0,
          stagger: 0.02,
          duration: 0.8,
          ease: "back.out(1.7)",
          delay: delay
        }
      );
    });

    return () => {
      ctx.revert();
      if (tweenRef.current) tweenRef.current.kill();
    };
  }, [delay]);

  const handleMouseEnter = () => {
    const chars = charsRef.current.filter(Boolean);
    
    // Kill any existing return-to-normal tween
    if (tweenRef.current) tweenRef.current.kill();
    
    // Start the warped wave loop
    tweenRef.current = gsap.to(chars, {
      y: -8, 
      rotation: 5, 
      skewX: -10, 
      duration: 0.6,
      stagger: {
        each: 0.05,
        yoyo: true,
        repeat: -1
      },
      ease: "sine.inOut"
    });
  };

  const handleMouseLeave = () => {
    const chars = charsRef.current.filter(Boolean);
    
    // Kill the wave loop
    if (tweenRef.current) tweenRef.current.kill();
    
    // Smoothly return to resting state
    tweenRef.current = gsap.to(chars, {
      y: 0,
      rotation: 0,
      skewX: 0,
      duration: 0.5,
      stagger: {
        each: 0.02,
        from: "end"
      },
      ease: "power3.out"
    });
  };

  return (
    <span 
      className={`inline-block cursor-default select-none ${className}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {text.split("").map((char, i) => (
        <span 
          key={i} 
          ref={(el: HTMLSpanElement | null) => { charsRef.current[i] = el; }}
          className="inline-block origin-bottom transform-gpu"
        >
          {char === " " ? "\u00A0" : char}
        </span>
      ))}
    </span>
  );
};

const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Animate Logo and Subtitle separately as they are not part of the warp text
      gsap.from(logoRef.current, {
        y: -30,
        opacity: 0,
        duration: 1,
        ease: "power3.out"
      });
      
      gsap.from(subtitleRef.current, {
        y: 20,
        opacity: 0,
        duration: 0.8,
        ease: "power2.out",
        delay: 0.8
      });

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="pt-20 pb-12 text-center max-w-5xl mx-auto px-6 flex flex-col items-center">
      
      {/* Branding */}
      <div ref={logoRef} className="flex items-center gap-3 mb-10 group cursor-default">
          <div className="w-12 h-12 rounded-xl bg-panel flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform duration-300">
            <Zap className="w-6 h-6 text-primary" fill="currentColor" />
          </div>
          <div className="font-display font-bold text-2xl text-main tracking-tight">
            Battery Aadhaar <span className="text-accent font-normal">System</span>
          </div>
      </div>

      {/* Warped Heading - Only warps on hover now */}
      <h1 className="font-display text-5xl md:text-8xl font-bold tracking-tight text-main mb-6 leading-[0.9] overflow-hidden py-4">
        <div className="block">
           <WarpText text="Digital Passports for" delay={0.2} />
        </div>
        <div className="block text-primary mt-2">
           <WarpText text="Energy Storage" delay={0.4} />
        </div>
      </h1>

      <p ref={subtitleRef} className="text-lg md:text-xl text-gray-500 max-w-2xl mx-auto leading-relaxed mt-4">
        The Battery Aadhaar assigns a unique 12-digit digital identity to every battery pack, 
        creating an immutable ledger of its chemistry, origin, and health from mine to wheel.
      </p>
    </div>
  );
};

export default Hero;