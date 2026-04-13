import { motion } from 'motion/react';
import { Calendar, Phone, ChevronRight } from 'lucide-react';
import heroImage from '../assets/images/hero.jpg';
import heroSideImage from '../assets/images/hero-side.jpg';

export default function Hero() {
  return (
    <section id="home" className="relative h-[85vh] min-h-[600px] flex items-center overflow-hidden bg-slate-900">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="SW Autotech Garage" 
          className="w-full h-full object-cover opacity-40 scale-105 animate-slow-zoom"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/80 to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-3/5">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block px-4 py-1.5 bg-orange-500 text-white text-xs font-bold uppercase tracking-widest rounded-full mb-6">
                Established 2012 • Yeovil's Trusted Garage
              </span>
              <h1 className="text-5xl md:text-7xl font-bold text-white leading-[1.1] tracking-tight mb-6">
                Reliable Car Servicing & <span className="text-orange-500 underline decoration-4 underline-offset-8">MOTs</span> in Yeovil
              </h1>
              <p className="text-xl text-slate-300 mb-10 leading-relaxed max-w-2xl">
                Professional, high-quality vehicle maintenance and repairs from Somerset's leading automotive specialists. Quality workmanship you can depend on.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="#contact" 
                  className="flex items-center justify-center space-x-2 bg-orange-500 text-white px-8 py-4 rounded-md font-bold text-lg hover:bg-orange-600 transition-all shadow-xl shadow-orange-500/20 group"
                >
                  <Calendar size={20} />
                  <span>BOOK YOUR MOT</span>
                  <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </a>
                <a 
                  href="tel:01935410532" 
                  className="flex items-center justify-center space-x-2 bg-white text-slate-900 px-8 py-4 rounded-md font-bold text-lg hover:bg-slate-100 transition-all"
                >
                  <Phone size={20} />
                  <span>CALL 01935 410532</span>
                </a>
              </div>
            </motion.div>

            {/* Quick Trust Signals */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="mt-16 grid grid-cols-2 md:grid-cols-3 gap-8 border-t border-white/10 pt-8"
            >
              <div>
                <p className="text-orange-500 font-bold text-2xl">12+ Years</p>
                <p className="text-slate-400 text-sm uppercase tracking-wider">Experience</p>
              </div>
              <div>
                <p className="text-orange-500 font-bold text-2xl">Class 1, 2 & 4</p>
                <p className="text-slate-400 text-sm uppercase tracking-wider">MOT Testing</p>
              </div>
              <div className="hidden md:block">
                <p className="text-orange-500 font-bold text-2xl">100% Quality</p>
                <p className="text-slate-400 text-sm uppercase tracking-wider">Workmanship</p>
              </div>
            </motion.div>
          </div>

          {/* Side Image */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden lg:block lg:w-2/5"
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-orange-500/20 rounded-2xl blur-2xl"></div>
              <div className="relative rounded-2xl overflow-hidden border-2 border-white/10 shadow-2xl">
                <img 
                  src={heroSideImage} 
                  alt="Professional Automotive Service" 
                  className="w-full h-auto object-cover aspect-[4/3]"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
              </div>
              
              {/* Floating Badge */}
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-xl flex items-center gap-3">
                <div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center text-white">
                  <ChevronRight size={24} />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">Expert Care</p>
                  <p className="text-sm font-bold text-slate-900">Certified Mechanics</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:block">
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center pt-2"
        >
          <div className="w-1 h-2 bg-orange-500 rounded-full"></div>
        </motion.div>
      </div>
    </section>
  );
}
