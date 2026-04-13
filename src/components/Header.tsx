import { Phone, MapPin, Clock, Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <>
      {/* Top Bar */}
      <div className="hidden lg:block bg-slate-900 text-white py-2 text-xs border-b border-slate-800">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <MapPin size={14} className="text-orange-500" />
              <span>Unit 5–6 Babylon View, Yeovil, BA21 5HR</span>
            </div>
            <div className="flex items-center space-x-2">
              <Clock size={14} className="text-orange-500" />
              <span>Mon-Fri: 08:30-17:30 | Sat: 08:30-12:30</span>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <a href="tel:01935410532" className="flex items-center space-x-2 hover:text-orange-500 transition-colors">
              <Phone size={14} className="text-orange-500" />
              <span className="font-semibold">01935 410532</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header 
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-white shadow-md py-3' : 'bg-white/90 backdrop-blur-sm py-5'
        }`}
      >
        <div className="container mx-auto px-4 flex justify-between items-center">
          <a href="#home" className="flex flex-col">
            <span className="text-2xl font-bold tracking-tighter text-slate-900">
              SW <span className="text-orange-500">AUTOTECH</span>
            </span>
            <span className="text-[10px] uppercase tracking-[0.2em] font-mono text-slate-500 -mt-1">
              Automotive Excellence
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                className="text-sm font-medium text-slate-600 hover:text-orange-500 transition-colors"
              >
                {link.name}
              </a>
            ))}
            <a 
              href="tel:01935410532"
              className="bg-orange-500 text-white px-5 py-2.5 rounded-md text-sm font-bold hover:bg-orange-600 transition-all shadow-lg shadow-orange-500/20 active:scale-95"
            >
              CALL NOW
            </a>
          </nav>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden p-2 text-slate-900"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white border-t border-slate-100 overflow-hidden"
            >
              <div className="container mx-auto px-4 py-6 flex flex-col space-y-4">
                {navLinks.map((link) => (
                  <a 
                    key={link.name} 
                    href={link.href}
                    className="text-lg font-medium text-slate-900 py-2 border-b border-slate-50"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.name}
                  </a>
                ))}
                <a 
                  href="tel:01935410532"
                  className="bg-orange-500 text-white px-5 py-4 rounded-md text-center font-bold text-lg"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  CALL NOW: 01935 410532
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
