import React from 'react';

const BrandFooter: React.FC = () => {
  return (
    <footer className="w-full bg-page pt-12 pb-0 flex flex-col items-center justify-end overflow-hidden border-t border-gray-200/60">
      {/* Oversized Brand Typography */}
      <div className="w-full flex justify-center leading-none">
        <h1 className="text-[13vw] font-display font-bold bg-gradient-to-b from-primary to-accent bg-clip-text text-transparent opacity-40 tracking-tighter select-none whitespace-nowrap translate-y-[15%]">
          BATTERY AADHAAR
        </h1>
      </div>
    </footer>
  );
};

export default BrandFooter;