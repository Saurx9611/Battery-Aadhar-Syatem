import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { TIMELINE_STEPS } from '../constants';

gsap.registerPlugin(ScrollTrigger);

const Timeline: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const stepsRef = useRef<(HTMLDivElement | null)[]>([]);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      
      // Animate Vertical Line Drawing
      gsap.fromTo(lineRef.current, 
        { height: "0%" },
        {
          height: "100%",
          duration: 1.5,
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 70%",
            end: "bottom 80%",
            scrub: 1
          }
        }
      );

      // Animate Steps popping in
      stepsRef.current.forEach((step, index) => {
        if(!step) return;
        gsap.from(step, {
            opacity: 0,
            x: 20,
            duration: 0.5,
            ease: "back.out(1.5)",
            scrollTrigger: {
                trigger: step,
                start: "top 85%",
                toggleActions: "play none none reverse"
            }
        });
      });

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="bg-white rounded-3xl p-8 shadow-sm h-full border border-gray-100 relative overflow-hidden flex flex-col">
      <h3 className="font-display text-xl font-bold text-main mb-8">How It Works</h3>
      
      <div className="relative flex-1 pl-4">
        {/* Background Line (Gray) */}
        <div className="absolute left-[27px] top-2 bottom-10 w-0.5 bg-gray-100 z-0"></div>
        {/* Active Line (Teal/Green) - Animated */}
        <div ref={lineRef} className="absolute left-[27px] top-2 w-0.5 bg-gradient-to-b from-primary to-accent z-10 max-h-[calc(100%-40px)]"></div>

        <div className="space-y-10">
            {TIMELINE_STEPS.map((step, idx) => (
                <div 
                    key={idx} 
                    ref={el => stepsRef.current[idx] = el}
                    className="relative z-20 flex gap-6 group"
                >
                    <div className="w-14 h-14 rounded-full bg-white border-2 border-gray-100 group-hover:border-primary transition-colors duration-300 flex items-center justify-center shrink-0 shadow-sm relative z-20">
                        <step.icon className="w-6 h-6 text-gray-400 group-hover:text-primary transition-colors duration-300" />
                    </div>
                    <div className="pt-2">
                        <h4 className="font-display font-bold text-main text-lg">{step.title}</h4>
                        <p className="text-sm text-gray-500 mt-1 leading-relaxed">{step.description}</p>
                    </div>
                </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Timeline;