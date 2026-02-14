
import React from 'react';
import { Map, PenTool, Key, Layers, Building, LineChart, ShieldCheck } from 'lucide-react';
import { SERVICES } from '../constants';

const IconsMap: Record<string, any> = {
  Map, PenTool, Key, Layers, Building, LineChart, ShieldCheck
};

const Services: React.FC = () => {
  return (
    <section id="services" className="bg-luxury-gray py-32 border-y border-white/5">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-3xl mb-24">
          <span className="text-gold uppercase tracking-[0.4em] text-xs font-bold block mb-4">Core Competencies</span>
          <h2 className="text-4xl lg:text-6xl font-serif text-white mb-8">Precision Integrated <br /> <span className="text-gold italic">Development.</span></h2>
          <p className="text-white/50 text-xl font-light leading-relaxed">
            At Al Faren, we approach large-scale development with a structured feasibility framework, ensuring institutional-grade outcomes for stakeholders globally.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-white/10 border border-white/10">
          {SERVICES.map((service, idx) => {
            const IconComp = IconsMap[service.iconName] || Layers;
            return (
              <div key={idx} className="bg-luxury-gray p-12 hover:bg-black transition-all duration-500 group">
                <IconComp className="text-gold mb-8 group-hover:scale-110 transition-transform" size={40} strokeWidth={1} />
                <h4 className="text-xl font-serif text-white mb-4">{service.title}</h4>
                <p className="text-white/40 text-sm leading-relaxed mb-8">
                  {service.description}
                </p>
                <div className="w-0 group-hover:w-full h-[1px] bg-gold transition-all duration-700" />
              </div>
            );
          })}
        </div>

        <div className="mt-24 grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="bg-deep-navy p-10 border border-white/5 space-y-4">
             <h5 className="text-gold text-xs uppercase tracking-widest font-bold">Strategy</h5>
             <h3 className="text-2xl font-serif text-white">Land Optimization</h3>
             <p className="text-white/40 text-sm">Strategic analysis to extract maximum institutional value from large land parcels.</p>
          </div>
          <div className="bg-deep-navy p-10 border border-white/5 space-y-4">
             <h5 className="text-gold text-xs uppercase tracking-widest font-bold">Execution</h5>
             <h3 className="text-2xl font-serif text-white">Turnkey Projects</h3>
             <p className="text-white/40 text-sm">A seamless transition from blueprint to fully operational mixed-use environments.</p>
          </div>
          <div className="bg-deep-navy p-10 border border-white/5 space-y-4">
             <h5 className="text-gold text-xs uppercase tracking-widest font-bold">Standard</h5>
             <h3 className="text-2xl font-serif text-white">Precision Craft</h3>
             <p className="text-white/40 text-sm">Applying international standards of craftsmanship to every square meter developed.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
