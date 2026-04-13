import { motion } from 'motion/react';
import { Award, Users, ShieldCheck, History } from 'lucide-react';
import aboutImage from '../assets/images/about-garage.jpg';

export default function About() {
  const stats = [
    { label: 'Years Established', value: '2012', icon: History },
    { label: 'Expert Mechanics', value: 'Professional', icon: Users },
    { label: 'Service Quality', value: 'Guaranteed', icon: Award },
    { label: 'Customer Trust', value: 'Reliable', icon: ShieldCheck },
  ];

  return (
    <section id="about" className="py-24 bg-slate-50 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Image Side */}
          <div className="lg:w-1/2 relative">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative z-10 rounded-2xl overflow-hidden shadow-2xl shadow-slate-900/20"
            >
              <img 
                src={aboutImage} 
                alt="Inside SW Autotech Garage" 
                className="w-full h-auto object-cover"
                referrerPolicy="no-referrer"
              />
            </motion.div>
            
            {/* Decorative Elements */}
            <div className="absolute -bottom-6 -right-6 w-64 h-64 bg-orange-500 rounded-2xl -z-0 hidden md:block"></div>
            <div className="absolute -top-10 -left-10 text-slate-200 -z-0 opacity-50 hidden md:block">
              <svg width="200" height="200" viewBox="0 0 100 100" fill="currentColor">
                <circle cx="2" cy="2" r="2" />
                <circle cx="12" cy="2" r="2" />
                <circle cx="22" cy="2" r="2" />
                <circle cx="32" cy="2" r="2" />
                <circle cx="42" cy="2" r="2" />
                {/* ... more dots ... */}
              </svg>
            </div>
          </div>

          {/* Content Side */}
          <div className="lg:w-1/2">
            <h2 className="text-sm font-bold text-orange-500 uppercase tracking-[0.3em] mb-4">About SW Autotech</h2>
            <p className="text-4xl md:text-5xl font-bold text-slate-900 mb-8 leading-tight">
              A Legacy of Automotive <span className="text-orange-500">Excellence</span> in Yeovil
            </p>
            
            <div className="space-y-6 text-slate-600 text-lg leading-relaxed mb-10">
              <p>
                Established in 2012, SW Autotech Ltd has grown into one of Yeovil's most respected independent garages. 
                Our journey began with a simple mission: to provide dealership-level quality at local garage prices.
              </p>
              <p>
                Located in the heart of the Pen Mill Trading Estate, we've built our reputation on transparency, 
                high-quality workmanship, and a customer-first approach. Whether it's a routine MOT or complex 
                engine work, we treat every vehicle with the same professional care.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat) => (
                <div key={stat.label} className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm">
                  <stat.icon className="text-orange-500 mb-3" size={24} />
                  <p className="text-2xl font-bold text-slate-900">{stat.value}</p>
                  <p className="text-sm text-slate-500 font-medium">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
