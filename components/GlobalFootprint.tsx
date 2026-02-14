
import React from 'react';

const StatCard: React.FC<{ value: string; label: string }> = ({ value, label }) => (
  <div className="flex flex-col items-center text-center px-4">
    <span className="text-5xl lg:text-7xl font-serif text-gold mb-2">{value}</span>
    <span className="text-xs uppercase tracking-[0.3em] text-white/60 font-medium">{label}</span>
  </div>
);

const GlobalFootprint: React.FC = () => {
  return (
    <section id="global" className="bg-matte-black py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-0 divide-x-0 lg:divide-x divide-white/10 mb-32">
          <StatCard value="1000+" label="Projects Delivered" />
          <StatCard value="120M" label="Sq. Ft developed" />
          <StatCard value="12" label="Global Cities" />
          <StatCard value="25+" label="Years of Excellence" />
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2 space-y-8">
            <h2 className="text-4xl lg:text-5xl font-serif text-white leading-tight">
              An Integrated <br /> <span className="text-gold italic">Global Network.</span>
            </h2>
            <p className="text-white/60 text-lg font-light leading-relaxed">
              Our presence transcends borders. With strategic headquarters in Dubai and regional centers of excellence in India, Al Faren & Partners manages a diversified portfolio of ultra-luxury assets that redefine cityscapes.
            </p>
            <div className="space-y-4">
               <div className="flex items-center space-x-4">
                 <div className="w-2 h-2 rounded-full bg-gold"></div>
                 <span className="text-sm uppercase tracking-widest text-white/80">Middle East Operations Hub - Dubai</span>
               </div>
               <div className="flex items-center space-x-4">
                 <div className="w-2 h-2 rounded-full bg-gold"></div>
                 <span className="text-sm uppercase tracking-widest text-white/80">Emerging Markets Hub - New Delhi / Mumbai</span>
               </div>
            </div>
          </div>
          
          <div className="lg:w-1/2 relative">
            <img 
              src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?q=80&w=1600" 
              alt="World Map" 
              className="w-full opacity-20 grayscale"
            />
            {/* Visual markers */}
            <div className="absolute top-[45%] left-[65%] group">
              <div className="w-3 h-3 bg-gold rounded-full animate-ping absolute" />
              <div className="w-3 h-3 bg-gold rounded-full relative" />
              <span className="absolute top-6 left-1/2 -translate-x-1/2 text-[10px] tracking-widest text-gold opacity-0 group-hover:opacity-100 transition-opacity">DUBAI</span>
            </div>
            <div className="absolute top-[55%] left-[75%] group">
              <div className="w-3 h-3 bg-gold rounded-full relative" />
              <span className="absolute top-6 left-1/2 -translate-x-1/2 text-[10px] tracking-widest text-gold opacity-0 group-hover:opacity-100 transition-opacity">INDIA</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GlobalFootprint;
