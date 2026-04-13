import { motion } from 'motion/react';
import { 
  ClipboardCheck, 
  Wrench, 
  Settings, 
  Search, 
  Zap, 
  Wind, 
  Disc, 
  Droplets,
  ArrowRight
} from 'lucide-react';

const primaryServices = [
  {
    title: 'MOT Testing',
    description: 'DVSA approved Class 1, 2 & 4 MOT testing for motorcycles and cars. Quick, reliable, and fair.',
    icon: ClipboardCheck,
    features: ['Class 1 & 2 (Motorcycles)', 'Class 4 (Cars & Vans)', 'Fast Turnaround']
  },
  {
    title: 'Car Servicing',
    description: 'Keep your vehicle in peak condition with our interim, full, and major service packages.',
    icon: Settings,
    features: ['Manufacturer Warranty Safe', 'Quality Parts Used', 'Service Book Stamped']
  },
  {
    title: 'Vehicle Repairs',
    description: 'From clutches to exhausts, our expert mechanics handle all general mechanical repairs.',
    icon: Wrench,
    features: ['Clutch Repairs', 'Exhaust Systems', 'Suspension & Steering']
  },
  {
    title: 'Diagnostics',
    description: 'Advanced fault-finding using the latest diagnostic equipment to identify issues quickly.',
    icon: Search,
    features: ['Engine Management', 'ABS & Airbags', 'Electrical Faults']
  }
];

const specialistServices = [
  { name: 'DPF Cleaning', icon: Droplets },
  { name: 'Performance Tuning', icon: Zap },
  { name: 'Air Conditioning', icon: Wind },
  { name: 'Fuel Injection', icon: Settings },
  { name: 'Brakes & Steering', icon: Disc },
  { name: 'Tyres & Fitting', icon: Wrench },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-bold text-orange-500 uppercase tracking-[0.3em] mb-4">Our Expertise</h2>
          <p className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Comprehensive Vehicle Services</p>
          <div className="h-1.5 w-24 bg-orange-500 mx-auto mb-8"></div>
          <p className="text-lg text-slate-600">
            From routine MOTs to complex engine diagnostics, our Yeovil-based team provides professional 
            automotive care for all makes and models.
          </p>
        </div>

        {/* Primary Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {primaryServices.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-slate-50 p-8 rounded-xl border border-slate-100 hover:border-orange-200 hover:shadow-xl hover:shadow-orange-500/5 transition-all group"
            >
              <div className="w-14 h-14 bg-white rounded-lg flex items-center justify-center mb-6 shadow-sm group-hover:bg-orange-500 group-hover:text-white transition-colors">
                <service.icon size={28} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">{service.title}</h3>
              <p className="text-slate-600 text-sm mb-6 leading-relaxed">
                {service.description}
              </p>
              <ul className="space-y-2 mb-8">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center text-xs font-medium text-slate-500">
                    <div className="w-1.5 h-1.5 bg-orange-500 rounded-full mr-2"></div>
                    {feature}
                  </li>
                ))}
              </ul>
              <a href="#contact" className="inline-flex items-center text-sm font-bold text-orange-500 hover:text-orange-600 transition-colors">
                <span>Enquire Now</span>
                <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>
          ))}
        </div>

        {/* Specialist Services Strip */}
        <div className="bg-slate-900 rounded-2xl p-10 md:p-16 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
          
          <div className="relative z-10">
            <h3 className="text-2xl font-bold text-white mb-10 text-center md:text-left">Specialist & Additional Services</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {specialistServices.map((service) => (
                <div key={service.name} className="flex flex-col items-center p-4 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                  <service.icon className="text-orange-500 mb-3" size={24} />
                  <span className="text-white text-xs font-semibold text-center">{service.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
