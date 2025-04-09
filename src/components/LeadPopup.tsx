import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, MessageCircle, Calendar } from 'lucide-react';
import { CTAButton } from './ui/cta-button';
import { useConversionTracking } from '../utils/conversionTracking';

const LeadPopup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [remainingSpots, setRemainingSpots] = useState(3);
  const { trackLead, trackContact } = useConversionTracking();

  useEffect(() => {
    const lastClosed = localStorage.getItem('popupLastClosed');
    const now = Date.now();
    const shouldShow = !lastClosed || (now - parseInt(lastClosed)) > 20 * 1000;

    if (shouldShow) {
      setIsOpen(true);
      // Track popup view as a lead
      trackLead('popup_view', `popup_view_${Date.now()}`, {
        client_user_agent: navigator.userAgent
      });
      // Increment view count
      localStorage.setItem('popupViewCount', 
        (parseInt(localStorage.getItem('popupViewCount') || '0') + 1).toString()
      );
    }
  }, [trackLead]);

  const handleClose = () => {
    setIsOpen(false);
    localStorage.setItem('popupLastClosed', Date.now().toString());
    setTimeout(() => {
      setIsOpen(true);
    }, 40 * 1000);
  };

  const handleWhatsAppClick = () => {
    // Track WhatsApp contact
    trackContact('whatsapp', `whatsapp_contact_${Date.now()}`, {
      client_user_agent: navigator.userAgent,
      ph: [] // Will be filled with hashed phone if available
    });
    window.open('https://wa.me/2347037942851?text=Hi%20YussTech%2C%20I%27m%20interested%20in%20the%2020%25%20off%20offer', '_blank');
    handleClose();
  };

  const handleScheduleClick = () => {
    // Track Calendly contact
    trackContact('calendly', `calendly_contact_${Date.now()}`, {
      client_user_agent: navigator.userAgent
    });
    window.open('https://calendly.com/yusstechh/30min', '_blank');
    handleClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="bg-gradient-to-br from-gray-900 to-black border border-brand-purple/20 rounded-2xl p-6 max-w-md w-full relative overflow-hidden"
          >
            {/* Close button */}
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
            >
              <X size={20} />
            </button>

            {/* Urgency badge */}
            <div className="absolute top-2 left-2 bg-red-500/20 text-red-400 text-xs px-3 py-1 rounded-full">
              Limited Availability
            </div>

            {/* Content */}
            <div className="text-center left-5 space-y-4">
              <h3 className="text-2xl font-bold text-white">
                🚀 Limited Time Offer!
              </h3>
              
              <div className="space-y-2">
                <p className="text-brand-purple font-semibold">
                  Get 20% Off Your Project
                </p>
                <p className="text-gray-300 text-sm">
                  Join 50+ successful founders who launched with us
                </p>
              </div>

              {/* Trust badges */}
              <div className="flex justify-center gap-2 text-xs text-gray-400">
                <span>✓ 100% Ship Rate</span>
                <span>✓ Money-Back Guarantee</span>
                <span>✓ No Obligation</span>
              </div>

              {/* CTA Buttons */}
              <div className="space-y-3 pt-4">
                <div className="grid grid-cols-2 gap-3">
                  <CTAButton 
                    onClick={handleWhatsAppClick}
                    className="w-full bg-gradient-to-r from-brand-purple to-brand-blue text-white hover:opacity-90 flex items-center justify-center gap-2"
                  >
                    <MessageCircle size={18} />
                    Chat Now
                  </CTAButton>
                  
                  <CTAButton 
                    onClick={handleScheduleClick}
                    className="w-full bg-gradient-to-r from-brand-blue to-brand-purple text-white hover:opacity-90 flex items-center justify-center gap-2"
                  >
                    <Calendar size={18} />
                    Schedule Call
                  </CTAButton>
                </div>
                
                <button
                  onClick={handleClose}
                  className="text-sm text-gray-400 hover:text-white transition-colors"
                >
                  We're only taking a few more projects this month - secure your 20% discount now!
                </button>
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-brand-purple/10 rounded-full blur-3xl"></div>
            <div className="absolute -top-20 -left-20 w-40 h-40 bg-brand-blue/10 rounded-full blur-3xl"></div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LeadPopup; 