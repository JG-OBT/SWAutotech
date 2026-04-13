import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Cookie, X } from 'lucide-react';

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      const timer = setTimeout(() => setIsVisible(true), 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('cookie-consent', 'accepted');
    setIsVisible(false);
  };

  const declineCookies = () => {
    localStorage.setItem('cookie-consent', 'declined');
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          className="fixed bottom-6 left-6 right-6 md:left-auto md:right-6 md:max-w-md z-[100]"
        >
          <div className="bg-white rounded-2xl shadow-2xl border border-slate-200 p-6 md:p-8">
            <div className="flex items-start gap-4">
              <div className="bg-orange-100 p-3 rounded-xl text-orange-600 shrink-0">
                <Cookie size={24} />
              </div>
              <div className="flex-grow">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-bold text-slate-900">Cookie Policy</h3>
                  <button 
                    onClick={() => setIsVisible(false)}
                    className="text-slate-400 hover:text-slate-600 transition-colors"
                  >
                    <X size={20} />
                  </button>
                </div>
                <p className="text-sm text-slate-600 leading-relaxed mb-6">
                  We use cookies to enhance your experience, analyze site traffic, and serve professional automotive content. By clicking "Accept", you consent to our use of cookies.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <button
                    onClick={acceptCookies}
                    className="flex-grow bg-slate-900 text-white px-6 py-3 rounded-xl font-bold text-sm hover:bg-slate-800 transition-all active:scale-95"
                  >
                    Accept All
                  </button>
                  <button
                    onClick={declineCookies}
                    className="flex-grow bg-slate-100 text-slate-600 px-6 py-3 rounded-xl font-bold text-sm hover:bg-slate-200 transition-all active:scale-95"
                  >
                    Decline
                  </button>
                </div>
                <div className="mt-4 text-center">
                  <a href="#privacy-policy" className="text-xs text-slate-400 hover:text-orange-500 underline underline-offset-4">
                    Read our Privacy Policy
                  </a>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
