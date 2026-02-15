import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import GlobalFootprint from './components/GlobalFootprint';
import Services from './components/Services';
import Leadership from './components/Leadership';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { PROJECTS, OFFICES } from './constants';
import { ProjectCard } from './components/sections/ProjectCard';
import { LuxuryButton } from './components/ui/LuxuryButton';
import { MediaSection } from './components/sections/MediaSection';
import { ExternalLink } from 'lucide-react';

const App: React.FC = () => {
  return (
    <div className="bg-matte-black selection:bg-gold selection:text-black overflow-x-hidden">
      <Navbar />
      
      <AnimatePresence>
        <main>
          {/* Section 1: Visionary Hero */}
          <Hero />
          
          {/* Section 2: Institutional Authority Stats */}
          <GlobalFootprint />
          
          {/* Section 3: The Design Studios (Dubai Hub vs Local Implementation) */}
          <section className="flex flex-col lg:flex-row border-y border-white/5">
            {OFFICES.map((office, idx) => (
              <motion.div 
                key={office.region}
                initial={{ opacity: 0, x: idx === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                className={`lg:w-1/2 relative group overflow-hidden border-white/10 ${idx === 0 ? 'border-b lg:border-b-0 lg:border-r' : ''}`}
              >
                <div className="absolute inset-0 z-0 overflow-hidden">
                  <img 
                    src={office.image} 
                    alt={office.region} 
                    className="w-full h-full object-cover grayscale opacity-20 group-hover:grayscale-0 group-hover:opacity-40 transition-all duration-[2s] group-hover:scale-105"
                  />
                </div>
                <div className="relative z-10 p-8 md:p-16 lg:p-32 flex flex-col justify-end min-h-[500px] md:min-h-[600px] lg:min-h-screen bg-gradient-to-t from-matte-black via-matte-black/30 to-transparent">
                  <span className="text-gold uppercase tracking-[0.4em] lg:tracking-[0.6em] text-[9px] lg:text-[10px] font-bold mb-4 lg:mb-6">Regional Architecture</span>
                  <h3 className="text-4xl md:text-5xl lg:text-7xl font-serif text-white mb-6 lg:mb-10 leading-[0.95] lg:leading-[0.9] tracking-tighter">{office.region}</h3>
                  
                  <div className="space-y-4 lg:space-y-6 mb-8 lg:mb-16 max-w-md">
                    <p className="text-white/40 text-xs lg:text-sm leading-relaxed font-light">{office.address}</p>
                    <div className="flex flex-col space-y-2 text-[9px] lg:text-[10px] tracking-[0.3em] lg:tracking-[0.4em] text-gold font-bold uppercase">
                      <span>{office.email}</span>
                      <span>{office.phone}</span>
                    </div>
                  </div>

                  <LuxuryButton variant="ghost" className="self-start !px-0 border-b border-gold/20 rounded-none hover:border-gold hover:text-gold transition-all duration-500">
                    Regional Insights <ExternalLink className="ml-3 lg:ml-4" size={12} />
                  </LuxuryButton>
                </div>
              </motion.div>
            ))}
          </section>
          
          {/* Section 4: The Archive - Design Portfolio */}
          <section id="portfolio" className="bg-deep-navy py-20 md:py-32 lg:py-64 px-6 lg:px-12 relative">
            <div className="max-w-7xl mx-auto">
              <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 md:mb-32 gap-10 md:gap-12">
                <div className="space-y-4 lg:space-y-8">
                  <span className="text-gold uppercase tracking-[0.6em] lg:tracking-[0.8em] text-[9px] lg:text-[10px] font-bold">Selected Works</span>
                  <h2 className="text-5xl md:text-7xl lg:text-[120px] font-serif text-white leading-[0.9] lg:leading-[0.85] tracking-tighter">Modern <br className="hidden lg:block" /> <span className="italic text-gold">Systems.</span></h2>
                </div>
                <div className="max-w-md space-y-6 lg:space-y-8 border-l border-white/10 pl-8 lg:pl-12">
                  <p className="text-white/40 font-light text-lg lg:text-xl leading-relaxed">
                    A portfolio focused on urban innovation, masterplanning excellence, and the intersection of global vision and local implementation.
                  </p>
                  <LuxuryButton variant="ghost" className="!px-0 text-gold uppercase tracking-[0.3em] text-[9px] lg:text-[10px] font-bold">
                    View Interactive Archive
                  </LuxuryButton>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20">
                {PROJECTS.map((project) => (
                  <ProjectCard key={project.id} project={project} />
                ))}
              </div>
              
              <div className="mt-20 md:mt-40 flex justify-center">
                 <LuxuryButton variant="outline" className="px-12 lg:px-20 py-6 lg:py-8 border-white/10 hover:border-gold w-full sm:w-auto">
                   Load Global Portfolio
                 </LuxuryButton>
              </div>
            </div>
          </section>
          
          {/* Section 5: Methodology */}
          <Services />
          
          {/* Section 6: Press Archive */}
          <MediaSection />
          
          {/* Section 7: Governance & Leadership */}
          <Leadership />
          
          {/* Section 8: Strategic Inquiries */}
          <Contact />
          
          {/* Section 9: Institutional Footer */}
          <Footer />
        </main>
      </AnimatePresence>
    </div>
  );
};

export default App;