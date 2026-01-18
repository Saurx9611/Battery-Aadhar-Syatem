import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import DigitalIdentityCard from './DigitalIdentityCard';
import RecyclingCard from './RecyclingCard';
import DigitalTwin from './DigitalTwin';
import Timeline from './Timeline';

const MainGrid: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const leftColRef = useRef<HTMLDivElement>(null);
  const rightColRef = useRef<HTMLDivElement>(null);
  const centerColRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
        const tl = gsap.timeline({ defaults: { ease: "power3.out", duration: 1 } });
        
        // Slide Columns In
        tl.from(leftColRef.current, { x: -50, opacity: 0 }, 0.2)
          .from(rightColRef.current, { x: 50, opacity: 0 }, 0.2)
          .from(centerColRef.current, { scale: 0.9, opacity: 0 }, 0);
          
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-6">
      
      {/* Left Column (3 Spans) */}
      <div ref={leftColRef} className="lg:col-span-3 flex flex-col gap-6">
        <DigitalIdentityCard />
        <RecyclingCard />
      </div>

      {/* Center Column (6 Spans) */}
      <div ref={centerColRef} className="lg:col-span-6">
        <DigitalTwin />
      </div>

      {/* Right Column (3 Spans) */}
      <div ref={rightColRef} className="lg:col-span-3 h-full">
        <Timeline />
      </div>

    </div>
  );
};

export default MainGrid;