// YussTech - Modern React Application
// Testing deployment with proper GitHub Actions permissions
// Last updated: April 5, 2024

import { useState } from 'react';
import { Toaster } from "./components/ui/toaster";
import { Toaster as Sonner } from "./components/ui/sonner";
import { TooltipProvider } from "./components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Layout from './components/Layout';
import TurnstileVerification from './components/TurnstileVerification';

// Create a client
const queryClient = new QueryClient();

const App = () => {
  const [isVerified, setIsVerified] = useState(false);

  const handleVerificationSuccess = () => {
    setIsVerified(true);
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
