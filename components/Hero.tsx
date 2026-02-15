import React from 'react';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen min-h-[600px] w-full flex items-center overflow-hidden bg-matte-black">
      {/* Cinematic Background Authority Image */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-matte-black via-matte-black/60 to-transparent z-10" />
        <motion.img 
          initial={{ scale: 1.15 }}
          animate={{ scale: 1 }}
          transition={{ duration: 15, ease: "linear" }}
          src="https://alfaren.ae/images/new.jpg" 
          alt="Al Faren & Partners Signature Architecture" 
          className="w-full h-full object-cover opacity-60"
        />
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-20 pt-20">
        <div className="max-w-5xl space-y-6 lg:space-y-12">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex items-center space-x-4"
          >
            <div className="h-[1px] w-8 lg:w-12 bg-gold" />
            <span className="text-gold uppercase tracking-[0.3em] lg:tracking-[0.5em] text-[8px] lg:text-[10px] font-bold">Dubai Innovation Hub | Global Execution</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-5xl md:text-7xl lg:text-[130px] font-serif leading-[0.95] lg:leading-[0.85] text-white tracking-tighter"
          >
            Where <span className="italic text-gold">Vision</span> <br className="hidden sm:block" /> Meets Legacy.
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-lg md:text-xl lg:text-3xl text-white/70 max-w-2xl font-light leading-relaxed border-l border-gold/30 pl-6 lg:pl-8"
          >
            A world-class architecture and urban design studio originating visionary concepts from Dubai, 
            backed by rigorous international implementation.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 lg:gap-6 pt-6 lg:pt-10"
          >
            <a 
              href="#portfolio" 
              className="bg-gold text-matte-black px-8 lg:px-14 py-4 lg:py-6 font-bold uppercase tracking-[0.2em] lg:tracking-[0.3em] text-[10px] flex items-center justify-center hover:bg-white transition-all group"
            >
              The Studio Portfolio
              <ArrowRight className="ml-3 group-hover:translate-x-2 transition-transform" size={16} />
            </a>
            <a 
              href="#contact" 
              className="border border-white/20 text-white px-8 lg:px-14 py-4 lg:py-6 font-bold uppercase tracking-[0.2em] lg:tracking-[0.3em] text-[10px] hover:border-gold hover:text-gold text-center transition-all"
            >
              Institutional Inquiry
            </a>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-8 lg:bottom-12 left-6 lg:left-12 flex items-center space-x-4 lg:space-x-6 z-20">
         <div className="flex flex-col">
            <span className="text-[8px] lg:text-[9px] uppercase tracking-[0.4em] lg:tracking-[0.6em] text-white/40 mb-1">Conceptual Hub</span>
            <span className="text-xs lg:text-sm font-medium tracking-widest text-gold italic">DUBAI STUDIO 01</span>
         </div>
         <div className="h-6 lg:h-8 w-[1px] bg-white/10 mx-2 lg:mx-4 hidden xs:block" />
         <div className="hidden xs:flex flex-col">
            <span className="text-[8px] lg:text-[9px] uppercase tracking-[0.4em] lg:tracking-[0.6em] text-white/40 mb-1">Execution Center</span>
            <span className="text-xs lg:text-sm font-medium tracking-widest text-white/80 uppercase">INDIA OPERATIONS</span>
         </div>
      </div>
    </section>
  );
};

export default Hero;