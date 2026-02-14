
import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen w-full flex items-center overflow-hidden">
      {/* Background Video/Image Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-matte-black via-matte-black/60 to-transparent z-10" />
        <img 
          src="https://images.unsplash.com/photo-1574950578143-858c6fc58922?q=80&w=2500" 
          alt="Luxury Architecture" 
          className="w-full h-full object-cover animate-fade-in scale-105"
          style={{ animation: 'zoomOut 20s linear infinite alternate' }}
        />
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-20 mt-20">
        <div className="max-w-4xl space-y-6 animate-slide-up">
          <div className="flex items-center space-x-4">
            <div className="h-[1px] w-12 bg-gold" />
            <span className="text-gold uppercase tracking-[0.4em] text-xs font-semibold">Institutional Excellence</span>
          </div>
          
          <h1 className="text-5xl lg:text-8xl font-serif leading-[1.1] text-white">
            Where <span className="italic text-gold">Vision</span> <br /> Meets Scale.
          </h1>
          
          <p className="text-lg lg:text-xl text-white/70 max-w-2xl font-light leading-relaxed">
            International real estate development and masterplanning firm delivering premium residential, 
            commercial and mixed-use environments across Dubai and India.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 pt-8">
            <a 
              href="#portfolio" 
              className="bg-gold text-matte-black px-10 py-5 font-bold uppercase tracking-widest text-sm flex items-center justify-center hover:bg-white transition-all group"
            >
              Explore Portfolio
              <ArrowRight className="ml-3 group-hover:translate-x-2 transition-transform" size={18} />
            </a>
            <a 
              href="#profile" 
              className="border border-white/30 text-white px-10 py-5 font-bold uppercase tracking-widest text-sm hover:border-gold hover:text-gold transition-all"
            >
              Corporate Profile
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-12 left-6 lg:left-12 flex items-center space-x-6 z-20">
         <div className="flex flex-col">
            <span className="text-[10px] uppercase tracking-[0.3em] text-white/40 mb-1">Global Presence</span>
            <span className="text-sm font-medium tracking-widest text-white/80">DUBAI | INDIA | LONDON</span>
         </div>
      </div>

      <style>{`
        @keyframes zoomOut {
          from { transform: scale(1.1); }
          to { transform: scale(1); }
        }
      `}</style>
    </section>
  );
};

export default Hero;
