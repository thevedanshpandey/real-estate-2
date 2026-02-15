import React from 'react';
import { Map, PenTool, Key, Layers, Building, LineChart, ShieldCheck } from 'lucide-react';
import { SERVICES } from '../constants';

const IconsMap: Record<string, any> = {
  Building, Map, ShieldCheck, PenTool, Layers, Key
};

const Services: React.FC = () => {
  return (
    <section id="services" className="bg-luxury-gray py-20 md:py-32 lg:py-56 border-y border-white/5 relative overflow-hidden">
      {/* Background Detail */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-matte-black/40 to-transparent pointer-events-none" />
      
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="max-w-4xl mb-16 md:mb-32">
          <span className="text-gold uppercase tracking-[0.4em] lg:tracking-[0.6em] text-[9px] lg:text-[10px] font-bold block mb-4 lg:mb-6">The Al Faren Methodology</span>
          <h2 className="text-4xl md:text-6xl lg:text-8xl font-serif text-white mb-6 lg:mb-10 leading-[1.1] lg:leading-[0.9] tracking-tighter">Visionary <span className="italic text-gold">Thinking</span> <br className="hidden sm:block" /> Local Implementation.</h2>
          <p className="text-white/50 text-lg md:text-2xl font-light leading-relaxed max-w-2xl">
            Our Dubai studio serves as a hub of innovation and architectural vision, while our regional centers provide the technical rigor required for seamless execution.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5 border border-white/5">
          {SERVICES.map((service, idx) => {
            const IconComp = IconsMap[service.iconName] || Layers;
            return (
              <div key={idx} className="bg-luxury-gray p-8 md:p-14 lg:p-20 hover:bg-black transition-all duration-700 group border-b md:border-none border-white/5">
                <IconComp className="text-gold/50 mb-6 lg:mb-10 group-hover:text-gold group-hover:scale-110 transition-all duration-500" size={32} lg:size={44} strokeWidth={0.5} />
                <h4 className="text-xl lg:text-2xl font-serif text-white mb-4 lg:mb-6 tracking-tight">{service.title}</h4>
                <p className="text-white/40 text-xs lg:text-sm leading-relaxed mb-6 lg:mb-10 font-light">
                  {service.description}
                </p>
                <div className="w-12 h-[1px] bg-gold/30 group-hover:w-full group-hover:bg-gold transition-all duration-700" />
              </div>
            );
          })}
        </div>

        {/* Execution Pillar */}
        <div className="mt-20 md:mt-40 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-16">
          <div className="space-y-4 lg:space-y-6">
             <h5 className="text-gold text-[9px] lg:text-[10px] uppercase tracking-[0.3em] lg:tracking-[0.4em] font-bold">Conceptual Leadership</h5>
             <h3 className="text-2xl lg:text-3xl font-serif text-white leading-tight">Dubai: The Hub of Innovation</h3>
             <p className="text-white/40 text-xs lg:text-sm leading-relaxed font-light">The origin of all Al Faren visions. A studio environment dedicated to advanced architectural thinking, urban systems research, and high-profile conceptualization.</p>
          </div>
          <div className="space-y-4 lg:space-y-6">
             <h5 className="text-gold text-[9px] lg:text-[10px] uppercase tracking-[0.3em] lg:tracking-[0.4em] font-bold">Execution Standards</h5>
             <h3 className="text-2xl lg:text-3xl font-serif text-white leading-tight">Implementation Architecture</h3>
             <p className="text-white/40 text-xs lg:text-sm leading-relaxed font-light">Strict cost control, financial discipline, and meticulous quality monitoring ensure that visionary concepts remain buildable and viable.</p>
          </div>
          <div className="space-y-4 lg:space-y-6">
             <h5 className="text-gold text-[9px] lg:text-[10px] uppercase tracking-[0.3em] lg:tracking-[0.4em] font-bold">Cultural Context</h5>
             <h3 className="text-2xl lg:text-3xl font-serif text-white leading-tight">Rooted in Tradition</h3>
             <p className="text-white/40 text-xs lg:text-sm leading-relaxed font-light">We translate high-end global concepts into practical solutions that respect and integrate local culture, traditions, and environmental context.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;