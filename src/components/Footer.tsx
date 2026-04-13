import { useState } from 'react';
import { ArrowUp, Shield, Lock } from 'lucide-react';
import PolicyModal from './PolicyModal';

export default function Footer() {
  const [modalType, setModalType] = useState<'privacy' | 'cookie' | null>(null);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-900 text-white pt-20 pb-10">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Column */}
          <div className="space-y-6">
            <a href="#home" className="flex flex-col">
              <span className="text-2xl font-bold tracking-tighter text-white">
                SW <span className="text-orange-500">AUTOTECH</span>
              </span>
              <span className="text-[10px] uppercase tracking-[0.2em] font-mono text-slate-400 -mt-1">
                Automotive Excellence
              </span>
            </a>
            <p className="text-slate-400 leading-relaxed">
              Professional, high-quality vehicle maintenance and repairs in Yeovil. 
              Established in 2012 with a reputation for excellence.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6">Quick Links</h4>
            <ul className="space-y-4 text-slate-400">
              <li><a href="#home" className="hover:text-orange-500 transition-colors">Home</a></li>
              <li><a href="#services" className="hover:text-orange-500 transition-colors">Our Services</a></li>
              <li><a href="#about" className="hover:text-orange-500 transition-colors">About Us</a></li>
              <li><a href="#contact" className="hover:text-orange-500 transition-colors">Contact & Booking</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold mb-6">Our Services</h4>
            <ul className="space-y-4 text-slate-400">
              <li><a href="#services" className="hover:text-orange-500 transition-colors">MOT Testing</a></li>
              <li><a href="#services" className="hover:text-orange-500 transition-colors">Car Servicing</a></li>
              <li><a href="#services" className="hover:text-orange-500 transition-colors">Vehicle Repairs</a></li>
              <li><a href="#services" className="hover:text-orange-500 transition-colors">Diagnostics</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-bold mb-6">Contact Info</h4>
            <ul className="space-y-4 text-slate-400">
              <li className="flex items-start space-x-3">
                <span className="text-orange-500 font-bold">A:</span>
                <span>Unit 5–6 Babylon View, Yeovil, BA21 5HR</span>
              </li>
              <li className="flex items-center space-x-3">
                <span className="text-orange-500 font-bold">T:</span>
                <a href="tel:01935410532" className="hover:text-orange-500 transition-colors">01935 410532</a>
              </li>
              <li className="flex items-center space-x-3">
                <span className="text-orange-500 font-bold">E:</span>
                <span>info@swautotech.co.uk</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
            <p className="text-slate-500 text-sm">
              © {new Date().getFullYear()} SW Autotech Ltd. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <button 
                onClick={() => setModalType('privacy')}
                className="text-xs text-slate-500 hover:text-orange-500 transition-colors flex items-center gap-1.5"
              >
                <Shield size={12} />
                Privacy Policy
              </button>
              <button 
                onClick={() => setModalType('cookie')}
                className="text-xs text-slate-500 hover:text-orange-500 transition-colors flex items-center gap-1.5"
              >
                <Lock size={12} />
                Cookie Policy
              </button>
            </div>
          </div>
          <button 
            onClick={scrollToTop}
            className="group flex items-center space-x-2 text-slate-400 hover:text-white transition-colors text-sm font-bold"
          >
            <span>BACK TO TOP</span>
            <div className="w-8 h-8 bg-white/5 rounded-full flex items-center justify-center group-hover:bg-orange-500 transition-colors">
              <ArrowUp size={16} />
            </div>
          </button>
        </div>
      </div>

      <PolicyModal 
        isOpen={modalType !== null} 
        onClose={() => setModalType(null)} 
        type={modalType || 'privacy'} 
      />
    </footer>
  );
}
