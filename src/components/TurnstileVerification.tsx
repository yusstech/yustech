import { useState, useEffect, useRef } from 'react';

interface TurnstileVerificationProps {
  onVerificationSuccess: () => void;
}

interface TurnstileOptions {
  sitekey: string;
  theme?: 'light' | 'dark';
  callback: (token: string) => void;
  'error-callback': () => void;
}

declare global {
  interface Window {
    turnstile: {
      render: (container: string | HTMLElement, options: TurnstileOptions) => string;
      reset: (widgetId: string) => void;
    };
  }
}

const TurnstileVerification = ({ onVerificationSuccess }: TurnstileVerificationProps) => {
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);
  const widgetId = useRef<string | null>(null);

  useEffect(() => {
    const siteKey = import.meta.env.VITE_CLOUDFLARE_SITE_KEY;
    
    if (!siteKey) {
      console.error('Site key is missing:', {
        env: import.meta.env.MODE,
        hasKey: !!siteKey
      });
      setError('Configuration error: Site key not found');
      setIsLoading(false);
      return;
    }

    let retryCount = 0;
    const maxRetries = 3;
    
    const loadTurnstile = () => {
      if (!containerRef.current || !window.turnstile) {
        return false;
      }

      try {
        console.log('Rendering Turnstile with site key:', siteKey);
        widgetId.current = window.turnstile.render(containerRef.current, {
          sitekey: siteKey,
          theme: 'dark',
          callback: (token: string) => {
            console.log('Verification successful');
            setError(null);
            onVerificationSuccess();
          },
          'error-callback': () => {
            console.error('Turnstile verification failed');
            setError('Verification failed. Please try again.');
            if (widgetId.current) {
              window.turnstile.reset(widgetId.current);
            }
          }
        });
        setIsLoading(false);
        return true;
      } catch (err) {
        console.error('Turnstile render error:', err);
        setError('Failed to initialize verification. Please refresh the page.');
        setIsLoading(false);
        return false;
      }
    };

    const initTurnstile = () => {
      if (window.turnstile) {
        if (loadTurnstile()) {
          return;
        }
      }

      if (retryCount >= maxRetries) {
        setError('Verification system failed to load. Please refresh the page.');
        setIsLoading(false);
        return;
      }

      retryCount++;
      setTimeout(initTurnstile, 1000); // Retry after 1 second
    };

    // Start initialization
    initTurnstile();

    // Cleanup
    return () => {
      if (widgetId.current) {
        try {
          window.turnstile.reset(widgetId.current);
        } catch (err) {
          console.error('Error cleaning up Turnstile:', err);
        }
      }
    };
  }, [onVerificationSuccess]);

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/90 z-50">
      <div className="bg-white/10 backdrop-blur-md p-8 rounded-lg shadow-xl text-center">
        <h2 className="text-2xl font-bold mb-6 text-white">Welcome to YussTech</h2>
        <p className="text-gray-300 mb-6">Please complete the verification to continue</p>
        <div ref={containerRef} className="flex justify-center"></div>
        {isLoading && (
          <p className="text-blue-400 mt-4">Loading verification...</p>
        )}
        {error && (
          <p className="text-red-400 mt-4">{error}</p>
        )}
      </div>
    </div>
  );
};

export default TurnstileVerification; 