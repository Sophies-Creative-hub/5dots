
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-40 px-6 overflow-hidden bg-[#fdfcf7]">
      {/* Abstract ink blot elements */}
      <div className="absolute top-[-5%] right-[-5%] w-[45%] aspect-square bg-orange-100/40 rounded-full blur-[120px] z-0 animate-pulse"></div>
      <div className="absolute bottom-[-10%] left-[-10%] w-[35%] aspect-square bg-red-100/40 rounded-full blur-[90px] z-0"></div>

      <div className="relative z-10 max-w-6xl mx-auto flex flex-col items-center text-center space-y-12">
        <div className="space-y-4">
          <p className="text-red-900 font-black tracking-[0.5em] uppercase text-xs md:text-sm font-sans-ui bg-red-50 px-6 py-2 rounded-full inline-block">
            Est. 2024 — Düsseldorf
          </p>
          <h2 className="font-brand text-[8rem] md:text-[16rem] leading-[0.7] text-gray-900 drop-shadow-sm select-none animate-ink hover:scale-105 transition-transform duration-700 cursor-default">
            5dots
          </h2>
          <div className="flex items-center justify-center gap-6 pt-6">
            <div className="h-[2px] w-12 md:w-32 bg-gradient-to-r from-transparent to-orange-400"></div>
            <p className="text-2xl md:text-4xl font-black tracking-tighter text-gray-900 italic">Hand-crafted Art</p>
            <div className="h-[2px] w-12 md:w-32 bg-gradient-to-l from-transparent to-orange-400"></div>
          </div>
        </div>

        <div className="max-w-xl mx-auto space-y-10">
          <p className="text-xl md:text-3xl text-gray-700 leading-tight font-sans-ui font-light">
            Individuelle Kunstwerke, <span className="font-black text-gray-900 underline decoration-orange-400 decoration-[6px] underline-offset-8">direkt auf die Haut</span>. 
            Traditionelles Handwerk trifft moderne Präzision.
          </p>
          
          <div className="flex flex-col md:flex-row gap-6 justify-center">
            <a 
              href="#artists" 
              className="px-12 py-6 bg-gray-900 text-white rounded-3xl font-black text-xl hover:bg-orange-500 transition-all shadow-2xl hover:-translate-y-2 active:translate-y-0 font-sans-ui"
            >
              Artists entdecken
            </a>
            <button 
              onClick={() => window.dispatchEvent(new CustomEvent('open-booking'))}
              className="px-12 py-6 bg-white text-gray-900 border-4 border-gray-100 rounded-3xl font-black text-xl hover:border-orange-400 hover:text-orange-500 transition-all shadow-xl hover:-translate-y-2 active:translate-y-0 font-sans-ui"
            >
              Termin anfragen
            </button>
          </div>
        </div>
      </div>
      
      {/* Decorative vertical line with pulse */}
      <div className="absolute left-1/2 bottom-0 w-[2px] h-32 bg-gradient-to-t from-orange-400 to-transparent animate-bounce"></div>
    </section>
  );
};

export default Hero;
