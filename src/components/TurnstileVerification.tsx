import { useState, useEffect, useRef } from 'react';

interface TurnstileVerificationProps {
  onVerificationSuccess: () => void;
}

interface TurnstileOptions {
  sitekey: string;
  theme?: 'light' | 'dark';
  callback: (token: string) => void;
  'error-callback': () => void;
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
      return;
    }

    // Check if Turnstile script is loaded
    if (!window.turnstile) {
      console.error('Turnstile Error: Script not loaded');
      setError('Turnstile script not loaded. Please check your network connection.');
      return;
    }

    const loadTurnstile = () => {
      if (!containerRef.current) {
        console.error('Turnstile Error: Container not found');
        return;
      }

      try {
        // Remove any existing widget
        if (widgetIdRef.current) {
          window.turnstile.remove(widgetIdRef.current);
        }

        console.log('Turnstile Debug: Rendering widget with options:', {
          siteKey,
          appearance: 'interaction-only',
          size: 'invisible'
        });

        // Render the Turnstile widget
        widgetIdRef.current = window.turnstile.render(containerRef.current, {
          sitekey: siteKey,
          appearance: 'interaction-only',
          size: 'invisible',
          callback: (token) => {
            console.log('Turnstile Success: Verification token received');
            onVerificationSuccess();
          },
          'error-callback': () => {
            console.error('Turnstile Error: Verification failed');
            setError('Verification failed. Please try again.');
          }
        });

        console.log('Turnstile Debug: Widget rendered with ID:', widgetIdRef.current);
      } catch (err) {
        console.error('Turnstile Error:', err);
        setError('Failed to initialize Turnstile. Please try again.');
      }
    };

    // Initial load
    loadTurnstile();

    // Cleanup function
    return () => {
      if (widgetIdRef.current) {
        try {
          window.turnstile.remove(widgetIdRef.current);
          console.log('Turnstile Debug: Widget removed during cleanup');
        } catch (err) {
          console.error('Turnstile Error during cleanup:', err);
        }
      }
    };
  }, [onVerificationSuccess]);

  return (
    <div className="turnstile-container">
      <div ref={containerRef} id="turnstile-widget" />
      {error && (
        <div className="text-red-500 text-sm mt-2">
          {error}
        </div>
      )}
    </div>
  );
};

export default TurnstileVerification; 