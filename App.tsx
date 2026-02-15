
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
    <div className="bg-matte-black selection:bg-gold selection:text-black">
      <Navbar />
      
      <AnimatePresence>
        <main>
          {/* Section 1: Hero */}
          <Hero />
          
          {/* Section 2: Global Footprint */}
          <GlobalFootprint />
          
          {/* Section 3: Regional Associates */}
          <section className="flex flex-col lg:flex-row min-h-[80vh] border-y border-white/5">
            {OFFICES.map((office, idx) => (
              <motion.div 
                key={office.region}
                initial={{ opacity: 0, x: idx === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
                className={`lg:w-1/2 relative group overflow-hidden border-white/10 ${idx === 0 ? 'border-b lg:border-b-0 lg:border-r' : ''}`}
              >
                <div className="absolute inset-0 z-0 overflow-hidden">
                  <img 
                    src={office.image} 
                    alt={office.region} 
                    className="w-full h-full object-cover grayscale opacity-30 group-hover:grayscale-0 group-hover:opacity-60 transition-all duration-1000 group-hover:scale-110"
                  />
                </div>
                <div className="relative z-10 p-12 lg:p-24 flex flex-col justify-end h-full min-h-[600px] bg-gradient-to-t from-matte-black via-matte-black/40 to-transparent">
                  <span className="text-gold uppercase tracking-[0.4em] text-[10px] font-bold mb-4">Associate Office</span>
                  <h3 className="text-4xl lg:text-6xl font-serif text-white mb-8 leading-tight">{office.region}</h3>
                  
                  <div className="space-y-4 mb-12">
                    <p className="text-white/50 text-sm max-w-sm leading-relaxed">{office.address}</p>
                    <div className="flex flex-col space-y-1 text-xs tracking-widest text-gold/80 font-bold uppercase">
                      <span>{office.email}</span>
                      <span>{office.phone}</span>
                    </div>
                  </div>

                  <LuxuryButton variant="ghost" className="self-start !px-0 border-b border-gold/30 rounded-none hover:border-gold">
                    Regional Portfolio <ExternalLink className="ml-4" size={14} />
                  </LuxuryButton>
                </div>
              </motion.div>
            ))}
          </section>
          
          {/* Section 4: Signature Projects Gallery */}
          <section id="portfolio" className="bg-deep-navy py-32 lg:py-48 px-6 lg:px-12">
            <div className="max-w-7xl mx-auto">
              <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-24 gap-12">
                <div className="space-y-6">
                  <span className="text-gold uppercase tracking-[0.5em] text-[10px] font-bold">International Portfolio</span>
                  <h2 className="text-5xl lg:text-8xl font-serif text-white leading-none tracking-tighter">Iconic <br /> <span className="italic text-gold">Milestones.</span></h2>
                </div>
                <p className="text-white/40 max-w-md font-light text-lg leading-relaxed border-l border-gold/20 pl-8">
                  From major transport hubs to the world's most exclusive private residences, explore our legacy of architectural dominance.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                {PROJECTS.map((project) => (
                  <ProjectCard key={project.id} project={project} />
                ))}
              </div>
              
              <div className="mt-32 flex justify-center">
                 <LuxuryButton variant="outline" className="px-16">
                   View Full Global Portfolio
                 </LuxuryButton>
              </div>
            </div>
          </section>
          
          {/* Section 5: Services */}
          <Services />
          
          {/* Section 6: Media Credibility */}
          <MediaSection />
          
          {/* Section 7: Leadership */}
          <Leadership />
          
          {/* Section 8: Contact */}
          <Contact />
          
          {/* Section 9: Footer */}
          <Footer />
        </main>
      </AnimatePresence>
    </div>
  );
};

export default App;
