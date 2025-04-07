import { useEffect, useCallback, useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface TurnstileError {
  code: string;
  message: string;
}

declare global {
  interface Window {
    turnstile: {
      render: (container: string, options: {
        sitekey: string;
        theme: string;
        callback: (token: string) => void;
        'error-callback': (error: TurnstileError) => void;
      }) => string;
      remove: (widgetId: string) => void;
    };
    onloadTurnstileCallback: () => void;
  }
}

const TurnstileChallenge = () => {
  const navigate = useNavigate();
  const [widgetId, setWidgetId] = useState<string | null>(null);
  const [isVerified, setIsVerified] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [scriptLoadTimeout, setScriptLoadTimeout] = useState<NodeJS.Timeout | null>(null);

  // Skip verification in development mode
  const isDevelopment = import.meta.env.DEV;

  const turnstileCallback = useCallback((token: string) => {
    console.log('Turnstile token:', token);
    setIsVerified(true);
    localStorage.setItem('turnstile_verified', 'true');
    navigate('/');
  }, [navigate]);

  const errorCallback = useCallback((error: TurnstileError) => {
    console.error('Turnstile error:', error);
    setError('Verification failed. Please try again.');
    // Reset the widget after a short delay
    setTimeout(() => {
      if (widgetId && window.turnstile) {
        window.turnstile.remove(widgetId);
        setWidgetId(null);
        setError(null);
        // Re-render the widget
        const id = window.turnstile.render('#turnstile-container', {
          sitekey: import.meta.env.VITE_TURNSTILE_SITE_KEY,
          theme: 'dark',
          callback: turnstileCallback,
          'error-callback': errorCallback,
        });
        setWidgetId(id);
      }
    }, 2000);
  }, [widgetId, turnstileCallback]);

  useEffect(() => {
    // Always allow access in development
    if (isDevelopment) {
      setIsVerified(true);
      setIsLoading(false);
      return;
    }

    // Check if already verified
    const verified = localStorage.getItem('turnstile_verified');
    if (verified === 'true') {
      navigate('/');
      return;
    }

    // Set a timeout for script loading
    const timeout = setTimeout(() => {
      setError('Failed to load security check. Please refresh the page.');
      setIsLoading(false);
    }, 10000); // 10 second timeout
    setScriptLoadTimeout(timeout);

    // Load the Turnstile script
    const script = document.createElement('script');
    script.src = 'https://challenges.cloudflare.com/turnstile/v0/api.js?onload=onloadTurnstileCallback';
    script.async = true;
    script.onerror = () => {
      setError('Failed to load security check. Please check your connection.');
      setIsLoading(false);
      if (scriptLoadTimeout) clearTimeout(scriptLoadTimeout);
    };
    document.head.appendChild(script);

    // Define the callback function
    window.onloadTurnstileCallback = () => {
      if (scriptLoadTimeout) clearTimeout(scriptLoadTimeout);
      setIsLoading(false);
      if (!widgetId && window.turnstile) {
        try {
          const id = window.turnstile.render('#turnstile-container', {
            sitekey: import.meta.env.VITE_TURNSTILE_SITE_KEY,
            theme: 'dark',
            callback: turnstileCallback,
            'error-callback': errorCallback,
          });
          setWidgetId(id);
        } catch (err) {
          console.error('Error rendering Turnstile:', err);
          setError('Failed to initialize security check. Please refresh the page.');
        }
      }
    };

    return () => {
      // Cleanup
      if (widgetId && window.turnstile) {
        window.turnstile.remove(widgetId);
      }
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
      if (scriptLoadTimeout) {
        clearTimeout(scriptLoadTimeout);
      }
    };
  }, [widgetId, turnstileCallback, errorCallback, isDevelopment, navigate]);

  // Don't render anything in development or if verified
  if (isDevelopment || isVerified) {
    return null;
  }

  return (
    <div className="fixed inset-0 bg-black flex items-center justify-center z-50">
      <div className="bg-black/50 p-8 rounded-lg border border-brand-purple/30 max-w-md w-full backdrop-blur-lg">
        <h2 className="text-2xl font-bold text-white mb-4 text-center">Security Check</h2>
        <p className="text-gray-300 mb-6 text-center">
          Please complete the security check to continue.
        </p>
        {isLoading && (
          <div className="flex justify-center items-center min-h-[100px]">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-brand-purple"></div>
          </div>
        )}
        {error && (
          <div className="text-red-400 text-center mb-4">
            {error}
          </div>
        )}
        <div 
          id="turnstile-container" 
          className="flex justify-center"
          style={{ minHeight: '100px' }}
        />
      </div>
    </div>
  );
};

export default TurnstileChallenge; 