import { useEffect, useCallback, useState } from 'react';
import { useNavigate } from 'react-router-dom';

declare global {
  interface Window {
    turnstile: {
      render: (container: string, options: {
        sitekey: string;
        theme: string;
        callback: (token: string) => void;
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

  // Skip verification in development mode
  const isDevelopment = import.meta.env.DEV;

  const turnstileCallback = useCallback((token: string) => {
    console.log('Turnstile token:', token);
    setIsVerified(true);
    localStorage.setItem('turnstile_verified', 'true');
    navigate('/');
  }, [navigate]);

  useEffect(() => {
    // Always allow access in development
    if (isDevelopment) {
      setIsVerified(true);
      return;
    }

    // Check if already verified
    const verified = localStorage.getItem('turnstile_verified');
    if (verified === 'true') {
      navigate('/');
      return;
    }

    // Load the Turnstile script
    const script = document.createElement('script');
    script.src = 'https://challenges.cloudflare.com/turnstile/v0/api.js?onload=onloadTurnstileCallback';
    script.async = true;
    document.head.appendChild(script);

    // Define the callback function
    window.onloadTurnstileCallback = () => {
      if (!widgetId && window.turnstile) {
        const id = window.turnstile.render('#turnstile-container', {
          sitekey: import.meta.env.VITE_TURNSTILE_SITE_KEY,
          theme: 'dark',
          callback: turnstileCallback,
        });
        setWidgetId(id);
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
    };
  }, [widgetId, turnstileCallback, isDevelopment, navigate]);

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