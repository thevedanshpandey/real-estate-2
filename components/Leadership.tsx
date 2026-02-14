
import React from 'react';
import { LEADERSHIP } from '../constants';

const Leadership: React.FC = () => {
  return (
    <section className="bg-matte-black py-32">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div className="space-y-12">
            <div className="space-y-4">
              <span className="text-gold uppercase tracking-[0.4em] text-xs font-bold">Governance</span>
              <h2 className="text-4xl lg:text-6xl font-serif text-white">Leadership & Vision</h2>
            </div>
            
            <blockquote className="border-l-2 border-gold pl-8 py-2">
              <p className="text-2xl lg:text-3xl font-serif text-white/90 italic leading-relaxed">
                "We do not merely build structures; we architect ecosystems that define the future trajectory of international urban living."
              </p>
              <footer className="mt-6 text-gold uppercase tracking-widest text-sm font-bold">— Alistair Farren</footer>
            </blockquote>

            <p className="text-white/50 text-lg font-light leading-relaxed">
              Our executive board comprises interdisciplinary leaders with backgrounds in international finance, sustainable urbanism, and structural engineering. This diversity allows us to navigate complex regulatory landscapes in Dubai and India with unparalleled strategic precision.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {LEADERSHIP.map((leader, idx) => (
              <div key={idx} className="space-y-6 group">
                <div className="aspect-[3/4] overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-700">
                  <img src={leader.image} alt={leader.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                </div>
                <div>
                  <h4 className="text-xl font-serif text-white">{leader.name}</h4>
                  <p className="text-gold text-xs uppercase tracking-widest mt-1">{leader.role}</p>
                  <p className="text-white/40 text-sm mt-4 leading-relaxed line-clamp-3">
                    {leader.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Media / Featured In */}
        <div className="mt-32 pt-24 border-t border-white/10">
          <p className="text-center text-white/20 uppercase tracking-[0.5em] text-[10px] mb-12 font-bold">Recognized & Featured In</p>
          <div className="flex flex-wrap justify-center items-center gap-12 lg:gap-24 opacity-30 grayscale contrast-125">
             <span className="text-2xl font-serif font-bold italic">FORBES</span>
             <span className="text-2xl font-serif font-bold">FINANCIAL TIMES</span>
             <span className="text-2xl font-serif italic">The National</span>
             <span className="text-2xl font-serif font-bold uppercase">Reuters</span>
             <span className="text-2xl font-serif tracking-widest">BLOOMBERG</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Leadership;
