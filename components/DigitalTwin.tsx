import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { QrCode, BatteryCharging, Zap, Thermometer } from 'lucide-react';

const DigitalTwin: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const tabletRef = useRef<HTMLDivElement>(null);
  const qrRef = useRef<HTMLDivElement>(null);
  const voltRef = useRef<HTMLSpanElement>(null);
  const tempRef = useRef<HTMLSpanElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      
      // Floating Animation
      gsap.to(tabletRef.current, {
        y: -15,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
      });

      // QR Pulse
      gsap.to(qrRef.current, {
        opacity: 0.7,
        scale: 0.98,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut"
      });

      // Random Data Fluctuations
      const fluctuate = (target: HTMLElement | null, base: number, variance: number, unit: string) => {
        if (!target) return;
        gsap.to(target, {
            duration: 2,
            onRepeat: () => {
                const val = (base + (Math.random() * variance - variance/2)).toFixed(1);
                target.innerText = `${val}${unit}`;
            },
            repeat: -1,
            ease: "none",
            repeatRefresh: true
        });
      };

      fluctuate(voltRef.current, 3.8, 0.2, "V");
      fluctuate(tempRef.current, 24, 2, "°C");

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="h-full min-h-[500px] md:min-h-[624px] relative flex items-center justify-center perspective-1000">
      
      {/* Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-tr from-accent/20 to-primary/20 rounded-3xl blur-3xl opacity-50 transform scale-90"></div>
      
      {/* Tablet Device */}
      <div 
        ref={tabletRef}
        className="relative w-[340px] h-[520px] bg-panel rounded-[2.5rem] shadow-2xl border-[8px] border-gray-800 flex flex-col overflow-hidden ring-1 ring-gray-700/50"
      >
        {/* Screen Glare/Reflection */}
        <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent pointer-events-none z-20"></div>

        {/* Status Bar */}
        <div className="h-8 bg-black/40 flex items-center justify-between px-6 pt-2 z-10">
          <div className="text-[10px] text-gray-500 font-mono tracking-wider">LIVE MONITORING</div>
          <div className="flex gap-1">
            <div className="w-1.5 h-1.5 rounded-full bg-red-500/50"></div>
            <div className="w-1.5 h-1.5 rounded-full bg-yellow-500/50"></div>
            <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></div>
          </div>
        </div>

        {/* Main Interface */}
        <div className="flex-1 p-8 flex flex-col items-center justify-between relative z-10">
          
          {/* Header Info */}
          <div className="w-full flex justify-between items-start border-b border-gray-800 pb-4">
             <div>
                <h4 className="text-white font-display font-bold text-lg tracking-wide">LFP-Cell-2024</h4>
                <div className="flex items-center gap-2 mt-1">
                    <span className="text-xs text-primary bg-primary/10 px-2 py-0.5 rounded">Healthy</span>
                    <span className="text-[10px] text-gray-500">ID: #8922</span>
                </div>
             </div>
             <BatteryCharging className="text-accent w-6 h-6" />
          </div>

          {/* Central QR */}
          <div ref={qrRef} className="relative w-40 h-40 bg-white rounded-2xl p-3 shadow-[0_0_30px_rgba(22,160,133,0.3)]">
             <div className="w-full h-full border-2 border-black rounded-lg flex items-center justify-center">
                <QrCode className="w-32 h-32 text-black" />
             </div>
             {/* Scanning Line */}
             <div className="absolute top-0 left-0 w-full h-1 bg-accent/80 shadow-[0_0_10px_#16A085] animate-[scan_2s_ease-in-out_infinite]"></div>
          </div>

          {/* Metrics Grid */}
          <div className="grid grid-cols-2 gap-3 w-full">
            <div className="bg-gray-800/50 rounded-xl p-3 backdrop-blur-sm border border-gray-700/50">
                <div className="flex items-center gap-2 text-gray-400 mb-1">
                    <Zap size={14} />
                    <span className="text-[10px] uppercase font-bold">Voltage</span>
                </div>
                <span ref={voltRef} className="text-white font-mono text-xl font-bold">3.8V</span>
            </div>
            <div className="bg-gray-800/50 rounded-xl p-3 backdrop-blur-sm border border-gray-700/50">
                <div className="flex items-center gap-2 text-gray-400 mb-1">
                    <Thermometer size={14} />
                    <span className="text-[10px] uppercase font-bold">Temp</span>
                </div>
                <span ref={tempRef} className="text-white font-mono text-xl font-bold">24°C</span>
            </div>
          </div>

          <div className="text-[10px] text-gray-600 font-mono text-center w-full mt-2">
            Last Sync: Just Now
          </div>
        </div>
      </div>
      
      <style>{`
        @keyframes scan {
            0% { top: 10%; opacity: 0; }
            10% { opacity: 1; }
            90% { opacity: 1; }
            100% { top: 90%; opacity: 0; }
        }
      `}</style>
    </div>
  );
};

export default DigitalTwin;