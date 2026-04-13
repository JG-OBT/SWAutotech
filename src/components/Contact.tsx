import { motion } from 'motion/react';
import { Phone, MapPin, Clock, Mail, Send } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-16">
          {/* Contact Info Side */}
          <div className="lg:w-1/2">
            <h2 className="text-sm font-bold text-orange-500 uppercase tracking-[0.3em] mb-4">Get In Touch</h2>
            <p className="text-4xl md:text-5xl font-bold text-slate-900 mb-8">Book Your Service Today</p>
            
            <div className="grid sm:grid-cols-2 gap-8 mb-12">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center shadow-sm text-orange-500 shrink-0">
                  <Phone size={24} />
                </div>
                <div>
                  <p className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-1">Call Us</p>
                  <a href="tel:01935410532" className="text-xl font-bold text-orange-500 hover:underline">01935 410532</a>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center shadow-sm text-orange-500 shrink-0">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-1">Email Us</p>
                  <p className="text-lg font-medium text-slate-600">info@swautotech.co.uk</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 mb-8">
              <div className="flex items-start space-x-4 mb-8">
                <MapPin className="text-orange-500 shrink-0" size={24} />
                <div>
                  <p className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-1">Visit Our Garage</p>
                  <p className="text-slate-600">Unit 5–6 Babylon View, Oxford Road,<br />Pen Mill Trading Estate, Yeovil, BA21 5HR</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <Clock className="text-orange-500 shrink-0" size={24} />
                <div>
                  <p className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-1">Opening Hours</p>
                  <div className="grid grid-cols-2 gap-x-8 gap-y-1 text-slate-600">
                    <span>Mon – Fri:</span> <span className="font-semibold text-slate-900">08:30 – 17:30</span>
                    <span>Saturday:</span> <span className="font-semibold text-slate-900">08:30 – 12:30</span>
                    <span>Sunday:</span> <span className="font-semibold text-slate-900">Closed</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Embedded Map */}
            <div className="w-full h-64 bg-slate-200 rounded-2xl overflow-hidden relative border border-slate-200">
              <iframe 
                src="https://www.google.com/maps?q=SW+Autotech+Ltd+Yeovil+BA21+5HR&output=embed" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="SW Autotech Location"
              ></iframe>
            </div>
          </div>

          {/* Form Side */}
          <div className="lg:w-1/2">
            <div className="bg-white p-10 rounded-3xl shadow-xl shadow-slate-900/5 border border-slate-100">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Send an Enquiry</h3>
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Full Name</label>
                    <input 
                      type="text" 
                      placeholder="John Doe"
                      className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 outline-none transition-all"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Phone Number</label>
                    <input 
                      type="tel" 
                      placeholder="07123 456789"
                      className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 outline-none transition-all"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Email Address</label>
                  <input 
                    type="email" 
                    placeholder="john@example.com"
                    className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 outline-none transition-all"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Service Required</label>
                  <select className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 outline-none transition-all appearance-none">
                    <option>MOT Testing</option>
                    <option>Vehicle Servicing</option>
                    <option>General Repairs</option>
                    <option>Diagnostics</option>
                    <option>Other Enquiry</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Your Message</label>
                  <textarea 
                    rows={4}
                    placeholder="Tell us about your vehicle and what you need..."
                    className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 outline-none transition-all resize-none"
                  ></textarea>
                </div>

                <button 
                  type="submit"
                  className="w-full bg-orange-500 text-white py-4 rounded-lg font-bold text-lg hover:bg-orange-600 transition-all shadow-lg shadow-orange-500/20 flex items-center justify-center space-x-2 group"
                >
                  <span>SEND ENQUIRY</span>
                  <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
                
                <p className="text-center text-xs text-slate-400">
                  We aim to respond to all online enquiries within 24 hours.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
