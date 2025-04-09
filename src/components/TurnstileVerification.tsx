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
      render: (container: string | HTMLElement, options: TurnstileOptions) => void;
      reset: (widgetId: string) => void;
    };
  }
}

const TurnstileVerification = ({ onVerificationSuccess }: TurnstileVerificationProps) => {
  const [error, setError] = useState<string | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Debug logging for environment variables
    console.log('All import.meta.env:', import.meta.env);
    console.log('Direct site key access:', import.meta.env.VITE_CLOUDFLARE_SITE_KEY);
    console.log('Process env:', process.env);
    console.log('Process env site key:', process.env.VITE_CLOUDFLARE_SITE_KEY);

    const siteKey = import.meta.env.VITE_CLOUDFLARE_SITE_KEY || process.env.VITE_CLOUDFLARE_SITE_KEY;
    
    if (!siteKey) {
      console.error('Site key is missing. Environment variables may not be loading correctly.');
      setError('Configuration error: Site key not found');
      return;
    }

    const loadTurnstile = () => {
      if (containerRef.current && window.turnstile) {
        try {
          console.log('Attempting to render Turnstile with site key:', siteKey);
          window.turnstile.render(containerRef.current, {
            sitekey: siteKey,
            theme: 'dark',
            callback: (token: string) => {
              console.log('Verification successful', token);
              onVerificationSuccess();
            },
            'error-callback': () => {
              console.error('Turnstile error');
              setError('Verification failed. Please try again.');
            }
          });
        } catch (err) {
          console.error('Turnstile render error:', err);
          setError('Failed to initialize verification. Please refresh the page.');
        }
      }
    };

    if (window.turnstile) {
      loadTurnstile();
    } else {
      const checkTurnstile = setInterval(() => {
        if (window.turnstile) {
          loadTurnstile();
          clearInterval(checkTurnstile);
        }
      }, 100);

      setTimeout(() => {
        clearInterval(checkTurnstile);
        if (!window.turnstile) {
          setError('Verification system failed to load. Please refresh the page.');
        }
      }, 10000);
    }
  }, [onVerificationSuccess]);

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/90 z-50">
      <div className="bg-white/10 backdrop-blur-md p-8 rounded-lg shadow-xl text-center">
        <h2 className="text-2xl font-bold mb-6 text-white">Welcome to YussTech</h2>
        <p className="text-gray-300 mb-6">Please complete the verification to continue</p>
        <div ref={containerRef} className="flex justify-center"></div>
        {error && (
          <p className="text-red-400 mt-4">{error}</p>
        )}
      </div>
    </div>
  );
};

export default TurnstileVerification; 