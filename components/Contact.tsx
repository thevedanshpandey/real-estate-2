
import React from 'react';
import { Send } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="bg-deep-navy py-32 border-t border-white/5">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
          <div className="space-y-12">
            <div className="space-y-4">
              <span className="text-gold uppercase tracking-[0.4em] text-xs font-bold">Partnership</span>
              <h2 className="text-4xl lg:text-7xl font-serif text-white">Partner With Us.</h2>
            </div>
            
            <p className="text-white/50 text-xl font-light leading-relaxed max-w-lg">
              We operate exclusively on high-scale, strategic developments. For institutional enquiries regarding masterplanning, land optimization, or international associates, please connect with our executive office.
            </p>

            <div className="space-y-8 pt-6">
              <div className="flex items-start space-x-6">
                 <div className="text-gold font-serif text-xl italic mt-1">01.</div>
                 <div>
                    <h5 className="text-white font-bold tracking-widest text-xs uppercase mb-2">Global Headquarters</h5>
                    <p className="text-white/40 text-sm">Dubai International Financial Centre (DIFC), Dubai, UAE</p>
                 </div>
              </div>
              <div className="flex items-start space-x-6">
                 <div className="text-gold font-serif text-xl italic mt-1">02.</div>
                 <div>
                    <h5 className="text-white font-bold tracking-widest text-xs uppercase mb-2">Institutional Liaison</h5>
                    <p className="text-white/40 text-sm">office@alfaren.com | global@alfaren.com</p>
                 </div>
              </div>
            </div>
          </div>

          <div className="bg-luxury-gray/50 p-8 lg:p-16 border border-white/10 backdrop-blur-sm">
            <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest text-white/40 font-bold">Full Name</label>
                  <input type="text" className="w-full bg-transparent border-b border-white/10 py-3 text-white focus:outline-none focus:border-gold transition-colors" placeholder="Executive Name" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest text-white/40 font-bold">Organization</label>
                  <input type="text" className="w-full bg-transparent border-b border-white/10 py-3 text-white focus:outline-none focus:border-gold transition-colors" placeholder="Institutional Entity" />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest text-white/40 font-bold">Work Email</label>
                <input type="email" className="w-full bg-transparent border-b border-white/10 py-3 text-white focus:outline-none focus:border-gold transition-colors" placeholder="email@organization.com" />
              </div>

              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest text-white/40 font-bold">Project Category</label>
                <select className="w-full bg-transparent border-b border-white/10 py-3 text-white/60 focus:outline-none focus:border-gold transition-colors appearance-none">
                  <option className="bg-matte-black">Masterplanning Framework</option>
                  <option className="bg-matte-black">Mixed-Use Development</option>
                  <option className="bg-matte-black">Luxury Residential</option>
                  <option className="bg-matte-black">Land Optimization</option>
                  <option className="bg-matte-black">Institutional Partnership</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest text-white/40 font-bold">Nature of Enquiry</label>
                <textarea rows={4} className="w-full bg-transparent border-b border-white/10 py-3 text-white focus:outline-none focus:border-gold transition-colors resize-none" placeholder="Briefly describe the strategic scope..."></textarea>
              </div>

              <button className="w-full bg-gold text-matte-black py-5 uppercase tracking-[0.3em] font-bold text-sm flex items-center justify-center hover:bg-white transition-all">
                Send Enquiry <Send className="ml-3" size={16} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
