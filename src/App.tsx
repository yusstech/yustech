// YussTech - Modern React Application
// Testing deployment with proper GitHub Actions permissions
// Last updated: April 5, 2024

import { useState, useEffect } from 'react';
import { Toaster } from "./components/ui/toaster";
import { Toaster as Sonner } from "./components/ui/sonner";
import { TooltipProvider } from "./components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation, Navigate } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Layout from "./components/Layout";
import TurnstileVerification from "./components/TurnstileVerification";
import { useMetaPixel } from "./hooks/useMetaPixel";
import GetStarted from './pages/GetStarted';

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
        <BrowserRouter>
          <RouteChangeTracker />
          <Routes>
            {/* Redirect from old /ad to /getstarted */}
            <Route 
              path="/ad" 
              element={<Navigate to="/getstarted" replace />} 
            />
            <Route 
              path="/getstarted" 
              element={<GetStarted />} 
            />
            <Route
              path="*"
              element={
                <>
                  {!isVerified && (
                    <TurnstileVerification onVerificationSuccess={handleVerificationSuccess} />
                  )}
                  <Layout className={!isVerified ? 'hidden' : ''}>
                    <Routes>
                      <Route path="/" element={<Index />} />
                      <Route path="*" element={<NotFound />} />
                    </Routes>
                  </Layout>
                </>
              }
            />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
