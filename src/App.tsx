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
import NotFound from "./pages/NotFound";
import Layout from "./components/Layout";
import TurnstileVerification from "./components/TurnstileVerification";
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
  const [isVerified, setIsVerified] = useState(false);
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

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        {!isVerified && (
          <TurnstileVerification onVerificationSuccess={handleVerificationSuccess} />
        )}
        <BrowserRouter>
          <RouteChangeTracker />
          <Layout className={!isVerified ? 'hidden' : ''}>
            <Routes>
              <Route path="/" element={<Index />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Layout>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
