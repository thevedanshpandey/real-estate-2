
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
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 px-6 lg:px-12 py-6 ${
        isScrolled ? 'bg-matte-black/90 backdrop-blur-md py-4 border-b border-gold/20' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex flex-col">
          <span className="text-2xl font-serif tracking-widest text-gold font-bold">AL FAREN</span>
          <span className="text-[10px] tracking-[0.3em] uppercase text-white/60 -mt-1">& PARTNERS</span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-10 text-xs font-medium uppercase tracking-[0.2em] items-center">
          <a href="#portfolio" className="hover:text-gold transition-colors">Portfolio</a>
          <a href="#services" className="hover:text-gold transition-colors">Services</a>
          <a href="#global" className="hover:text-gold transition-colors">Global Presence</a>
          <a href="#contact" className="border border-gold px-6 py-2 hover:bg-gold hover:text-black transition-all">Enquire</a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-matte-black h-screen flex flex-col items-center justify-center space-y-8 text-xl font-serif uppercase tracking-widest z-40 animate-fade-in">
          <a href="#portfolio" onClick={() => setMobileMenuOpen(false)} className="hover:text-gold">Portfolio</a>
          <a href="#services" onClick={() => setMobileMenuOpen(false)} className="hover:text-gold">Services</a>
          <a href="#global" onClick={() => setMobileMenuOpen(false)} className="hover:text-gold">Global Presence</a>
          <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="border border-gold px-12 py-4 hover:bg-gold hover:text-black">Enquire</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
