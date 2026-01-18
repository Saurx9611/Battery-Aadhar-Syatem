import React, { useEffect, useRef } from 'react';

const GridBackground: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      container.style.setProperty('--mouse-x', `${x}px`);
      container.style.setProperty('--mouse-y', `${y}px`);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div 
        ref={containerRef} 
        className="absolute inset-0 h-[600px] -z-10 pointer-events-none select-none"
        aria-hidden="true"
    >
      {/* Base Grid - Static, slightly visible */}
      <div className="absolute inset-0 bg-grid-pattern bg-[length:40px_40px] opacity-30" />

      {/* Spotlight Grid - Follows mouse, prominent */}
      <div 
        className="absolute inset-0 bg-grid-pattern bg-[length:40px_40px] opacity-100"
        style={{
          maskImage: `radial-gradient(400px circle at var(--mouse-x, -500px) var(--mouse-y, -500px), black, transparent)`,
          WebkitMaskImage: `radial-gradient(400px circle at var(--mouse-x, -500px) var(--mouse-y, -500px), black, transparent)`,
        }}
      />
      
      {/* Fade out at bottom */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-page" />
    </div>
  );
};

export default GridBackground;