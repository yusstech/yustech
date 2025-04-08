import { useCallback } from 'react';

interface CustomData {
  service_type?: string;
  value?: number;
  currency?: string;
  [key: string]: unknown;
}

interface ConversionEvent {
  event_name: string;
  user_data?: {
    client_ip_address?: string;
    client_user_agent?: string;
    em?: string; // Hashed email
    ph?: string; // Hashed phone
    external_id?: string;
  };
  custom_data?: CustomData;
  action_source?: 'website' | 'email' | 'app' | 'phone_call' | 'chat' | 'physical_store' | 'system_generated' | 'other';
}

export const useMetaConversion = () => {
  const sendConversionEvent = useCallback(async (event: ConversionEvent) => {
    try {
      const response = await fetch('/.netlify/functions/meta-conversion', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...event,
          user_data: {
            ...event.user_data,
            client_user_agent: window.navigator.userAgent,
          },
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to send conversion event');
      }

      const data = await response.json();
      console.log('Conversion event sent successfully:', data);
      return data;
    } catch (error) {
      console.error('Error sending conversion event:', error);
      throw error;
    }
  }, []);

  return { sendConversionEvent };
}; 