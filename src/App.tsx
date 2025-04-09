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
  const [isVerified, setIsVerified] = useState(true); // Set to true by default for local testing
  const { trackEvent } = useMetaPixel([
    // Track verification completion
    ...(isVerified ? [{ name: 'VerificationComplete' }] : []),
  ]);

  const handleVerificationSuccess = () => {
    setIsVerified(true);
    // Track successful verification with additional data
    trackEvent('VerificationSuccess', {
      timestamp: new Date().toISOString(),
      userAgent: navigator.userAgent
    });
  };

  useEffect(() => {
    // Initialize Turnstile
    const turnstileOptions = {
      sitekey: '0x4AAAAAAAZXhXQZQZQZQZQ',
      callback: (token: string) => {
        setIsVerified(true);
        localStorage.setItem('isVerified', 'true');
      },
      'error-callback': () => {
        setIsVerified(false);
        localStorage.setItem('isVerified', 'false');
      },
      appearance: 'interaction-only', // This makes Turnstile only show when needed
      execution: 'execute' // This makes it run automatically
    };

    // @ts-expect-error - Turnstile types are not properly defined
    window.turnstile?.render('#turnstile-widget', turnstileOptions);
  }, []);

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
            </Routes>
          </Layout>
        </BrowserRouter>
        <LeadPopup />
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
