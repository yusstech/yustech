import { useState, useEffect } from 'react';
import { Turnstile } from '@marsidev/react-turnstile';

interface TurnstileVerificationProps {
  onVerificationSuccess: () => void;
}

const TurnstileVerification = ({ onVerificationSuccess }: TurnstileVerificationProps) => {
  const [isVerified, setIsVerified] = useState(false);

  const handleVerificationSuccess = (token: string) => {
    setIsVerified(true);
    onVerificationSuccess();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/90 z-50">
      <div className="bg-white/10 backdrop-blur-md p-8 rounded-lg shadow-xl text-center">
        <h2 className="text-2xl font-bold mb-6 text-white">Welcome to YussTech</h2>
        <p className="text-gray-300 mb-6">Please complete the verification to continue</p>
        <div className="flex justify-center">
          <Turnstile
            siteKey={import.meta.env.VITE_CLOUDFLARE_SITE_KEY}
            onSuccess={handleVerificationSuccess}
            options={{
              theme: 'dark',
              size: 'normal'
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default TurnstileVerification; 