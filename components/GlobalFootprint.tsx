import React from 'react';
import { motion } from 'framer-motion';

const StatCard: React.FC<{ value: string; label: string }> = ({ value, label }) => (
  <div className="flex flex-col items-center text-center px-4 relative z-10 py-6 lg:py-0">
    <span className="text-4xl md:text-5xl lg:text-8xl font-serif text-gold mb-2 leading-none">{value}</span>
    <span className="text-[8px] md:text-[10px] uppercase tracking-[0.3em] lg:tracking-[0.4em] text-white/50 font-bold">{label}</span>
  </div>
);

const GlobalFootprint: React.FC = () => {
  return (
    <section id="global" className="bg-matte-black py-20 lg:py-48 relative overflow-hidden">
      {/* Category C Background Visual */}
      <div className="absolute inset-0 z-0 opacity-10 grayscale pointer-events-none">
        <img 
          src="https://alfaren.ae/images/Slide25.JPG" 
          alt="Institutional Planning Background" 
          className="w-full h-full object-cover"
        />
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-12 lg:gap-0 divide-x-0 lg:divide-x divide-white/10 mb-20 md:mb-32 border-y lg:border-none border-white/5">
          <StatCard value="3000+" label="Luxury Villas Designed" />
          <StatCard value="120M" label="Sq. Ft Managed" />
          <StatCard value="Global" label="Institutional Reach" />
          <StatCard value="30+" label="Years of Authority" />
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          <div className="lg:w-1/2 space-y-8 lg:space-y-10 order-2 lg:order-1">
            <div className="space-y-4">
               <span className="text-gold uppercase tracking-[0.4em] lg:tracking-[0.5em] text-[9px] lg:text-[10px] font-bold">Our Reach</span>
               <h2 className="text-4xl md:text-5xl lg:text-7xl font-serif text-white leading-[1.1] lg:leading-[1] tracking-tighter">
                Redefining <br className="hidden sm:block" /> <span className="text-gold italic">International Urbanism.</span>
              </h2>
            </div>
            <p className="text-white/50 text-base md:text-xl font-light leading-relaxed max-w-xl">
              From our operational centers in Dubai and India, Al Faren & Partners provides specialized architectural and master planning services that respond to the unique cultural and structural demands of global cities.
            </p>
            <div className="flex flex-col space-y-4">
               <div className="flex items-center space-x-4 group">
                 <div className="w-2 h-2 rounded-full bg-gold group-hover:scale-150 transition-transform"></div>
                 <span className="text-[10px] md:text-xs uppercase tracking-widest text-white/80 font-bold">Middle East Hub — Dubai DIFC</span>
               </div>
               <div className="flex items-center space-x-4 group">
                 <div className="w-2 h-2 rounded-full bg-gold group-hover:scale-150 transition-transform"></div>
                 <span className="text-[10px] md:text-xs uppercase tracking-widest text-white/80 font-bold">South Asia Hub — New Delhi | Mumbai</span>
               </div>
            </div>
          </div>
          
          <div className="lg:w-1/2 relative order-1 lg:order-2 w-full">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.5 }}
              className="relative aspect-video rounded-sm overflow-hidden border border-white/5"
            >
              <img 
                src="https://alfaren.ae/images/Slide28.JPG" 
                alt="Global Strategic Mapping" 
                className="w-full h-full object-cover opacity-40 grayscale"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-matte-black/80 to-transparent" />
              
              {/* Visual markers - Scaled positions */}
              <div className="absolute top-[45%] left-[65%] group">
                <div className="w-2 h-2 md:w-3 md:h-3 bg-gold rounded-full animate-ping absolute" />
                <div className="w-2 h-2 md:w-3 md:h-3 bg-gold rounded-full relative" />
                <span className="absolute top-4 md:top-6 left-1/2 -translate-x-1/2 text-[7px] md:text-[9px] tracking-widest text-gold font-bold whitespace-nowrap">DUBAI</span>
              </div>
              <div className="absolute top-[55%] left-[75%] group">
                <div className="w-2 h-2 md:w-3 md:h-3 bg-gold rounded-full relative" />
                <span className="absolute top-4 md:top-6 left-1/2 -translate-x-1/2 text-[7px] md:text-[9px] tracking-widest text-gold font-bold whitespace-nowrap">INDIA</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GlobalFootprint;