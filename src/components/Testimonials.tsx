import { motion } from 'motion/react';
import { Star, Quote, ExternalLink } from 'lucide-react';

const testimonials = [
  {
    name: 'David Thompson',
    role: 'Local Resident',
    content: 'Been using SW Autotech for years. Always honest, fair pricing, and they never do work that isn\'t needed. Best garage in Yeovil by far.',
    rating: 5,
    date: '1 month ago'
  },
  {
    name: 'Sarah Jenkins',
    role: 'Business Owner',
    content: 'They look after our fleet of vans. Reliable, quick turnaround, and the diagnostics expertise is second to none. Highly recommended.',
    rating: 5,
    date: '2 months ago'
  },
  {
    name: 'Michael Ross',
    role: 'Car Enthusiast',
    content: 'Had my performance car in for tuning and DPF cleaning. The difference is night and day. These guys really know their stuff.',
    rating: 5,
    date: '3 weeks ago'
  }
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-sm font-bold text-orange-500 uppercase tracking-[0.3em] mb-4">Customer Feedback</h2>
            <p className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">What Our Clients Say</p>
            <p className="text-lg text-slate-600">
              We take pride in our reputation. Here are some of the latest reviews from our 
              valued customers in Yeovil and the surrounding areas.
            </p>
          </div>
          
          <div className="flex items-center space-x-4 bg-slate-50 p-6 rounded-2xl border border-slate-100">
            <div className="text-right">
              <p className="text-3xl font-bold text-slate-900">4.9</p>
              <p className="text-xs text-slate-500 font-bold uppercase tracking-wider">Average Rating</p>
            </div>
            <div className="flex flex-col">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={18} className="text-orange-500 fill-orange-500" />
                ))}
              </div>
              <p className="text-[10px] font-bold text-slate-400 mt-1 uppercase tracking-widest">Based on 200+ reviews</p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-slate-50 p-8 rounded-3xl relative border border-slate-100 flex flex-col h-full hover:shadow-xl hover:shadow-slate-900/5 transition-all"
            >
              <Quote className="absolute top-6 right-8 text-orange-500/10" size={64} />
              
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={16} className="text-orange-500 fill-orange-500" />
                ))}
              </div>
              
              <p className="text-slate-700 italic mb-8 relative z-10 leading-relaxed flex-grow">
                "{testimonial.content}"
              </p>
              
              <div className="pt-6 border-t border-slate-200 flex justify-between items-center">
                <div>
                  <p className="font-bold text-slate-900">{testimonial.name}</p>
                  <p className="text-xs text-slate-500 font-medium">{testimonial.role}</p>
                </div>
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{testimonial.date}</span>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <a 
            href="https://www.google.com/maps/search/?api=1&query=SW+Autotech+Ltd+Yeovil" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-3 bg-slate-900 text-white px-10 py-4 rounded-full font-bold hover:bg-orange-500 transition-all shadow-xl shadow-slate-900/10 group"
          >
            <span>VIEW ALL GOOGLE REVIEWS</span>
            <ExternalLink size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
}
