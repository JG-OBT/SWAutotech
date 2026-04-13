import { motion } from 'motion/react';
import { X, Shield, Lock, FileText } from 'lucide-react';

interface PolicyModalProps {
  isOpen: boolean;
  onClose: () => void;
  type: 'privacy' | 'cookie';
}

export default function PolicyModal({ isOpen, onClose, type }: PolicyModalProps) {
  if (!isOpen) return null;

  const content = {
    privacy: {
      title: 'Privacy Policy',
      icon: Shield,
      sections: [
        {
          title: '1. Introduction',
          text: 'SW Autotech Ltd ("we", "our", or "us") is committed to protecting and respecting your privacy. This policy explains how we collect, use, and protect your personal data when you visit our website or use our services.'
        },
        {
          title: '2. Data We Collect',
          text: 'We may collect and process the following data: Contact information (name, email, phone number), vehicle details (registration, make, model), and technical data (IP address, browser type) via cookies.'
        },
        {
          title: '3. How We Use Your Data',
          text: 'We use your information to provide automotive services, process bookings, respond to enquiries, and comply with legal obligations. We do not sell your data to third parties.'
        },
        {
          title: '4. Data Security',
          text: 'We implement appropriate technical and organizational measures to protect your personal data against unauthorized access, loss, or destruction.'
        },
        {
          title: '5. Your Rights',
          text: 'Under the GDPR, you have the right to access, rectify, or erase your personal data. You also have the right to object to or restrict certain processing activities.'
        }
      ]
    },
    cookie: {
      title: 'Cookie Policy',
      icon: Lock,
      sections: [
        {
          title: '1. What are Cookies?',
          text: 'Cookies are small text files stored on your device when you visit a website. They help the website function correctly and provide us with information about how you use our site.'
        },
        {
          title: '2. Types of Cookies We Use',
          text: 'We use strictly necessary cookies for site functionality, analytical cookies to understand visitor behavior, and functional cookies to remember your preferences.'
        },
        {
          title: '3. Managing Cookies',
          text: 'Most web browsers allow you to control cookies through their settings. You can choose to block or delete cookies, but this may affect your experience on our website.'
        },
        {
          title: '4. Third-Party Cookies',
          text: 'Some cookies are placed by third-party services that appear on our pages, such as Google Maps for our location display.'
        }
      ]
    }
  };

  const activeContent = content[type];

  return (
    <div className="fixed inset-0 z-[110] flex items-center justify-center p-4 md:p-6">
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="absolute inset-0 bg-slate-900/80 backdrop-blur-sm"
      />
      <motion.div
        initial={{ scale: 0.9, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.9, opacity: 0, y: 20 }}
        className="relative bg-white w-full max-w-2xl max-h-[80vh] overflow-hidden rounded-3xl shadow-2xl flex flex-col"
      >
        {/* Header */}
        <div className="p-6 border-b border-slate-100 flex justify-between items-center bg-slate-50">
          <div className="flex items-center gap-3">
            <div className="bg-orange-500 p-2 rounded-lg text-white">
              <activeContent.icon size={20} />
            </div>
            <h2 className="text-xl font-bold text-slate-900">{activeContent.title}</h2>
          </div>
          <button 
            onClick={onClose}
            className="p-2 hover:bg-slate-200 rounded-full transition-colors text-slate-500"
          >
            <X size={24} />
          </button>
        </div>

        {/* Body */}
        <div className="p-8 overflow-y-auto custom-scrollbar">
          <div className="space-y-8">
            {activeContent.sections.map((section, idx) => (
              <div key={idx}>
                <h3 className="font-bold text-slate-900 mb-3 flex items-center gap-2">
                  <FileText size={16} className="text-orange-500" />
                  {section.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {section.text}
                </p>
              </div>
            ))}
          </div>
          
          <div className="mt-12 pt-8 border-t border-slate-100 text-sm text-slate-400 italic">
            Last updated: April 2026. This is a standard policy template for SW Autotech Ltd.
          </div>
        </div>

        {/* Footer */}
        <div className="p-6 border-t border-slate-100 bg-slate-50 flex justify-end">
          <button
            onClick={onClose}
            className="bg-slate-900 text-white px-8 py-3 rounded-xl font-bold hover:bg-slate-800 transition-all active:scale-95"
          >
            Close
          </button>
        </div>
      </motion.div>
    </div>
  );
}
