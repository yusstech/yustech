import { Suspense, useEffect } from "react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import { sections } from "../config/sections";
import { ErrorBoundary } from "react-error-boundary";
import { useConversionTracking } from '../utils/conversionTracking';

// Fallback loading component
const SectionLoader = () => (
  <div className="w-full h-96 flex items-center justify-center">
    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
  </div>
);

// Error fallback component
const ErrorFallback = ({ error, resetErrorBoundary }: { error: Error; resetErrorBoundary: () => void }) => (
  <div className="w-full p-6 text-center">
    <h2 className="text-xl font-semibold text-red-500">Something went wrong</h2>
    <p className="mt-2 text-gray-600">{error.message}</p>
    <button
      onClick={resetErrorBoundary}
      className="mt-4 px-4 py-2 bg-primary text-white rounded hover:bg-primary/90 transition-colors"
    >
      Try again
    </button>
  </div>
);

const Index = () => {
  const { trackViewContent, trackContact, trackLead } = useConversionTracking();

  useEffect(() => {
    // Track initial page view
    trackViewContent('Home Page', 'landing_page');
  }, [trackViewContent]);

  const handleServiceClick = (service: string) => {
    trackViewContent(service, 'service_page');
  };

  const handleCTAClick = (ctaType: string) => {
    trackContact(ctaType, `cta_${ctaType}_${Date.now()}`, {
      client_user_agent: navigator.userAgent
    });
  };

  // Initialize scroll animations
  useScrollAnimation({
    threshold: 0.1,
    rootMargin: '50px'
  });

  return (
    <div className="min-h-screen flex flex-col">
      {sections.map(({ id, Component, priority }) => (
        <ErrorBoundary key={id} FallbackComponent={ErrorFallback}>
          <Suspense fallback={<SectionLoader />}>
            <section 
              id={id} 
              className={`section ${priority === 'high' ? 'contents' : 'animate-on-scroll'}`}
              onClick={() => handleServiceClick(id)}
            >
              <Component />
            </section>
          </Suspense>
        </ErrorBoundary>
      ))}
    </div>
  );
};

export default Index; 