// YussTech - Modern React Application
// Testing deployment with proper GitHub Actions permissions
// Last updated: April 5, 2024

import { useState, useEffect } from 'react';
import { Toaster } from "./components/ui/toaster";
import { Toaster as Sonner } from "./components/ui/sonner";
import { TooltipProvider } from "./components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Index from "./pages/Index";
import Layout from "./components/Layout";
import TurnstileVerification from "./components/TurnstileVerification";
import LeadPopup from "./components/LeadPopup";
import { useMetaPixel } from "./hooks/useMetaPixel";
import Portfolio from "./pages/Portfolio";
import ClientLinks from "./pages/ClientLinks";
import PreMeetingForm from "./pages/PreMeetingForm";

// Create a client
const queryClient = new QueryClient();

// Route change tracking component
const RouteChangeTracker = () => {
  const location = useLocation();
  const { trackEvent } = useMetaPixel();

  useEffect(() => {
    // Track page view on route change
    trackEvent('PageView', {
      path: location.pathname,
      search: location.search
    });
  }, [location, trackEvent]);

  return null;
};

const App = () => {
  // Set to false in production, true for local testing
  const [isVerified, setIsVerified] = useState(() => {
    // Check if we're in development mode
    if (import.meta.env.DEV) {
      return true;
    }
    // In production, check localStorage first
    const stored = localStorage.getItem('isVerified');
    return stored === 'true';
  });

  const { trackEvent } = useMetaPixel([
    // Track verification completion
    ...(isVerified ? [{ name: 'VerificationComplete' }] : []),
  ]);

  const handleVerificationSuccess = () => {
    setIsVerified(true);
    localStorage.setItem('isVerified', 'true');
    // Track successful verification with additional data
    trackEvent('VerificationSuccess', {
      timestamp: new Date().toISOString(),
      userAgent: navigator.userAgent
    });
  };

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <RouteChangeTracker />
          <Layout>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/clients" element={<ClientLinks />} />
              <Route path="/prepform" element={<PreMeetingForm />} />
            </Routes>
          </Layout>
          <LeadPopup />
          {!isVerified && (
            <TurnstileVerification onVerificationSuccess={handleVerificationSuccess} />
          )}
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
