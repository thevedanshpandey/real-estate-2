import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-700 px-6 lg:px-12 py-8 ${
        isScrolled ? 'bg-matte-black/95 backdrop-blur-xl py-5 border-b border-white/5' : 'bg-transparent'
      }`}
    >
      <div className="max-w-[1800px] mx-auto flex justify-between items-center">
        <div className="flex flex-col group cursor-pointer">
          <span className="text-2xl font-serif tracking-[0.3em] text-white font-bold group-hover:text-gold transition-colors duration-500">AL FAREN</span>
          <span className="text-[9px] tracking-[0.5em] uppercase text-white/40 -mt-1 font-bold">& PARTNERS</span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex space-x-14 text-[10px] font-bold uppercase tracking-[0.4em] items-center text-white/60">
          <a href="#portfolio" className="hover:text-gold transition-colors duration-300">Portfolio</a>
          <a href="#services" className="hover:text-gold transition-colors duration-300">Methodology</a>
          <a href="#global" className="hover:text-gold transition-colors duration-300">Network</a>
          <a href="#contact" className="text-white border border-white/20 px-8 py-3 hover:bg-gold hover:text-black hover:border-gold transition-all duration-500">Inquiry</a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="lg:hidden text-white hover:text-gold transition-colors"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 bg-matte-black h-screen w-full flex flex-col items-center justify-center space-y-12 text-2xl font-serif uppercase tracking-[0.2em] z-[60]">
          <button className="absolute top-10 right-10 text-white" onClick={() => setMobileMenuOpen(false)}>
            <X size={32} />
          </button>
          <a href="#portfolio" onClick={() => setMobileMenuOpen(false)} className="hover:text-gold transition-colors">Portfolio</a>
          <a href="#services" onClick={() => setMobileMenuOpen(false)} className="hover:text-gold transition-colors">Methodology</a>
          <a href="#global" onClick={() => setMobileMenuOpen(false)} className="hover:text-gold transition-colors">Network</a>
          <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="text-gold border border-gold/30 px-16 py-6 hover:bg-gold hover:text-black">Inquiry</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;