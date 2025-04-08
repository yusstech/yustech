import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import TurnstileVerification from '../components/TurnstileVerification';

const GetStarted: React.FC = () => {
  const navigate = useNavigate();
  const [showVerification, setShowVerification] = useState(false);
  const [isVerified, setIsVerified] = useState(false);

  useEffect(() => {
    // Track page view for analytics
    if (window.fbq) {
      window.fbq('track', 'PageView');
    }

    // Show verification after a delay
    const timer = setTimeout(() => {
      setShowVerification(true);
    }, 3000); // Show verification after 3 seconds

    return () => clearTimeout(timer);
  }, []);

  const handleCtaClick = () => {
    if (!isVerified) {
      setShowVerification(true);
      return;
    }

    if (window.fbq) {
      window.fbq('track', 'Lead');
    }
    navigate('/contact');
  };

  const handleVerificationSuccess = () => {
    setIsVerified(true);
    setShowVerification(false);
  };

  return (
    <>
      <Helmet>
        <title>Get Started with YussTech | Modern Web & AI Solutions</title>
        <meta name="description" content="Start your digital transformation journey with YussTech. Get your high-converting website or AI solution launched in days, not months. Book your free consultation now!" />
        <meta property="og:title" content="Get Started with YussTech | Modern Web & AI Solutions" />
        <meta property="og:description" content="Start your digital transformation journey with YussTech. Get your high-converting website or AI solution launched in days, not months. Book your free consultation now!" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-b from-purple-900 to-black text-white relative">
        <div className="container mx-auto px-4 py-16">
          {/* Hero Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Start Your Digital Transformation Today
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-purple-200">
              High-Converting Websites & AI Solutions with 100% Execution Guarantee
            </p>
          </motion.div>

          {/* Value Proposition */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {[
              {
                title: "Quick Launch",
                description: "Get your project up and running in days with our accelerated development process"
              },
              {
                title: "100% Guarantee",
                description: "We guarantee project completion and satisfaction or your money back"
              },
              {
                title: "AI-Powered",
                description: "Leverage cutting-edge AI technology to give your business a competitive edge"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-purple-800 bg-opacity-20 p-6 rounded-lg"
              >
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-purple-200">{item.description}</p>
              </motion.div>
            ))}
          </div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              Special Offer: Get 20% Off Your First Project
            </h2>
            <button
              onClick={handleCtaClick}
              className="bg-purple-600 hover:bg-purple-700 text-white text-xl px-8 py-4 rounded-full transition-all transform hover:scale-105"
            >
              Book Your Free Consultation Now
            </button>
            <p className="mt-4 text-purple-200">
              *Limited time offer for new clients. Terms and conditions apply.
            </p>
          </motion.div>
        </div>

        {/* Verification Modal */}
        <AnimatePresence>
          {showVerification && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
              onClick={(e) => {
                if (e.target === e.currentTarget) {
                  setShowVerification(false);
                }
              }}
            >
              <motion.div
                initial={{ scale: 0.95 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.95 }}
                className="bg-white p-6 rounded-lg shadow-xl max-w-md w-full mx-4"
                onClick={(e) => e.stopPropagation()}
              >
                <h3 className="text-black text-xl font-bold mb-4 text-center">
                  Quick Verification Required
                </h3>
                <p className="text-gray-600 mb-4 text-center">
                  Please complete this quick verification to continue
                </p>
                <TurnstileVerification onVerificationSuccess={handleVerificationSuccess} />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
};

export default GetStarted; 