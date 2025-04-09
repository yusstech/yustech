import { useMetaPixel } from '../hooks/useMetaPixel';

type UserData = {
  client_user_agent: string;
  client_ip_address: string;
  fbc: string;
  fbp: string;
  em: string[];
  ph: string[];
  fn: string[];
  ln: string[];
  ct: string[];
  st: string[];
  zp: string[];
  country: string[];
  external_id: string;
  gender: string[];
  db: string[];
};

export const useConversionTracking = () => {
  const { trackEvent, trackCustom } = useMetaPixel();

  const getBasePayload = (action: string) => ({
    event_name: action,
    event_time: Math.floor(Date.now() / 1000),
    event_source_url: window.location.href,
    action_source: 'website',
    user_data: {
      client_user_agent: navigator.userAgent,
      client_ip_address: '', // Will be filled by server
      fbc: document.cookie.match(/_fbc=([^;]+)/)?.[1] || '',
      fbp: document.cookie.match(/_fbp=([^;]+)/)?.[1] || '',
      // Additional user data fields
      em: [], // Email (hashed)
      ph: [], // Phone (hashed)
      fn: [], // First name (hashed)
      ln: [], // Last name (hashed)
      ct: [], // City (hashed)
      st: [], // State (hashed)
      zp: [], // Zip code (hashed)
      country: [], // Country (hashed)
      external_id: '', // External ID
      gender: [], // Gender (hashed)
      db: [], // Date of birth (hashed)
    } as UserData
  });

  const trackSchedule = (eventId: string, optOut: boolean = false) => {
    trackEvent('Schedule', {
      ...getBasePayload('Schedule'),
      event_id: eventId,
      opt_out: optOut,
      data_processing_options: ['LDU'],
      data_processing_options_country: 0,
      data_processing_options_state: 0
    });
  };

  const trackViewContent = (contentName: string, contentCategory?: string, testEventCode?: string) => {
    trackEvent('ViewContent', {
      ...getBasePayload('ViewContent'),
      custom_data: {
        content_name: contentName,
        content_category: contentCategory || 'general',
        ...(testEventCode && { test_event_code: testEventCode })
      }
    });
  };

  const trackContact = (
    method: string,
    eventId: string,
    userData: Partial<UserData> = {}
  ) => {
    trackCustom('Contact', {
      ...getBasePayload('Contact'),
      event_id: eventId,
      custom_data: {
        contact_method: method
      },
      user_data: {
        ...getBasePayload('Contact').user_data,
        ...userData
      }
    });
  };

  const trackLead = (
    source: string,
    eventId: string,
    userData: Partial<UserData> = {}
  ) => {
    trackCustom('Lead', {
      ...getBasePayload('Lead'),
      event_id: eventId,
      custom_data: {
        lead_source: source
      },
      user_data: {
        ...getBasePayload('Lead').user_data,
        ...userData
      }
    });
  };

  return {
    trackSchedule,
    trackViewContent,
    trackContact,
    trackLead
  };
}; 