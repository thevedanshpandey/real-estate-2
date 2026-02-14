
import React from 'react';
import { Download } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-matte-black py-20 border-t border-white/5">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-16 mb-20">
          <div className="lg:col-span-1 space-y-6">
            <div className="flex flex-col">
              <span className="text-2xl font-serif tracking-widest text-gold font-bold">AL FAREN</span>
              <span className="text-[10px] tracking-[0.3em] uppercase text-white/60 -mt-1">& PARTNERS</span>
            </div>
            <p className="text-white/40 text-sm font-light leading-relaxed">
              Global leaders in institutional real estate development, masterplanning, and strategic land optimization.
            </p>
            <button className="flex items-center text-gold text-xs font-bold uppercase tracking-widest border border-gold/30 px-6 py-3 hover:bg-gold hover:text-black transition-all">
              <Download size={16} className="mr-3" /> Download Profile
            </button>
          </div>

          <div className="space-y-6">
            <h5 className="text-white font-bold uppercase tracking-widest text-xs">Dubai Associate</h5>
            <div className="text-white/40 text-sm space-y-2 font-light">
              <p>Level 32, Emirates Financial Towers</p>
              <p>DIFC, PO Box 00000</p>
              <p>Dubai, UAE</p>
              <p className="pt-2 text-white/60">T: +971 4 000 000</p>
            </div>
          </div>

          <div className="space-y-6">
            <h5 className="text-white font-bold uppercase tracking-widest text-xs">India Associate</h5>
            <div className="text-white/40 text-sm space-y-2 font-light">
              <p>The Executive Center, CP</p>
              <p>Level 4, Statesman House</p>
              <p>New Delhi, 110001, India</p>
              <p className="pt-2 text-white/60">T: +91 11 0000 0000</p>
            </div>
          </div>

          <div className="space-y-6">
            <h5 className="text-white font-bold uppercase tracking-widest text-xs">Institutional</h5>
            <div className="flex flex-col space-y-3 text-white/40 text-sm font-light">
               <a href="#" className="hover:text-gold transition-colors">Strategic Portfolio</a>
               <a href="#" className="hover:text-gold transition-colors">Governance</a>
               <a href="#" className="hover:text-gold transition-colors">Privacy Policy</a>
               <a href="#" className="hover:text-gold transition-colors">Terms of Engagement</a>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-white/20 text-[10px] uppercase tracking-[0.3em]">
            &copy; {new Date().getFullYear()} AL FAREN & PARTNERS. ALL RIGHTS RESERVED.
          </p>
          <div className="flex space-x-8 text-white/40 uppercase tracking-widest text-[10px] font-bold">
             <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
             <a href="#" className="hover:text-white transition-colors">Instagram</a>
             <a href="#" className="hover:text-white transition-colors">Bloomberg</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
