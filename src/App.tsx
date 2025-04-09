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

  useEffect(() => {
    // Initialize Turnstile
    const turnstileOptions = {
      sitekey: import.meta.env.VITE_CLOUDFLARE_SITE_KEY,
      callback: (token: string) => {
        console.log('Turnstile verification successful', token);
        setIsVerified(true);
        localStorage.setItem('isVerified', 'true');
      },
      'error-callback': () => {
        console.error('Turnstile verification failed');
        setIsVerified(false);
        localStorage.setItem('isVerified', 'false');
      },
      appearance: 'interaction-only', // Use interaction-only for invisible mode
      execution: 'execute', // Execute automatically
      'refresh-expired': 'auto', // Automatically refresh expired tokens
      'response-field': false, // Don't show response field
      'response-field-name': 'cf-turnstile-response', // Custom response field name
      'size': 'invisible', // Ensure invisible size
      'theme': 'dark' // Match your site's theme
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
