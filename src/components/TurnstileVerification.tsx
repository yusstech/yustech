import { useState, useEffect, useRef } from 'react';

interface TurnstileVerificationProps {
  onVerificationSuccess: () => void;
}

interface TurnstileOptions {
  sitekey: string;
  theme?: 'light' | 'dark';
  callback: (token: string) => void;
  'error-callback': (error: Error) => void;
  appearance?: 'always' | 'execute' | 'interaction-only';
  execution?: 'execute' | 'render';
  'refresh-expired'?: 'auto' | 'manual';
  'response-field'?: boolean;
  'response-field-name'?: string;
  size?: 'invisible' | 'normal' | 'compact';
}

declare global {
  interface Window {
    turnstile: {
      render: (container: string | HTMLElement, options: TurnstileOptions) => string;
      reset: (widgetId: string) => void;
      remove: (widgetId: string) => void;
    };
  }
}

const TurnstileVerification = ({ onVerificationSuccess }: TurnstileVerificationProps) => {
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);
  const widgetIdRef = useRef<string | null>(null);

  useEffect(() => {
    // Debug logging for environment variables
    console.log('Turnstile Verification - Environment Check:', {
      envMode: import.meta.env.MODE,
      siteKey: import.meta.env.VITE_CLOUDFLARE_SITE_KEY,
      isDev: import.meta.env.DEV,
      isProd: import.meta.env.PROD
    });

    const siteKey = import.meta.env.VITE_CLOUDFLARE_SITE_KEY;
    
    if (!siteKey) {
      console.error('Turnstile Error: Site key is missing');
      setError('Configuration error: Site key not found');
      setIsLoading(false);
      return;
    }

    // Check if Turnstile script is loaded
    const checkTurnstile = () => {
      if (window.turnstile) {
        initializeTurnstile(siteKey);
      } else {
        setTimeout(checkTurnstile, 100);
      }
    };

    const initializeTurnstile = (siteKey: string) => {
      if (!containerRef.current) {
        console.error('Turnstile Error: Container not found');
        setError('Initialization error: Container not found');
        setIsLoading(false);
        return;
      }

      try {
        // Remove any existing widget
        if (widgetIdRef.current) {
          window.turnstile.remove(widgetIdRef.current);
        }

        const widgetId = window.turnstile.render(containerRef.current, {
          sitekey: siteKey,
          callback: (token: string) => {
            console.log('Turnstile verification successful');
            localStorage.setItem('isVerified', 'true');
            onVerificationSuccess();
            setIsLoading(false);
          },
          'error-callback': (error: Error) => {
            console.error('Turnstile verification failed:', error);
            setError('Verification failed. Please try again.');
            setIsLoading(false);
          },
          appearance: 'interaction-only',
          execution: 'execute',
          size: 'invisible'
        });

        widgetIdRef.current = widgetId;
      } catch (err) {
        console.error('Turnstile Error:', err);
        setError('Failed to initialize verification');
        setIsLoading(false);
      }
    };

    // Start checking for Turnstile script
    checkTurnstile();

    // Cleanup
    return () => {
      if (widgetIdRef.current) {
        window.turnstile.remove(widgetIdRef.current);
      }
    };
  }, [onVerificationSuccess]);

  if (error) {
    return (
      <div className="text-red-500 text-sm">
        {error}
      </div>
    );
  }

  return (
    <div ref={containerRef} className="turnstile-container">
      {isLoading && (
        <div className="text-sm text-gray-500">
          Loading verification...
        </div>
      )}
    </div>
  );
};

export default TurnstileVerification; 