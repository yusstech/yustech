import { useEffect } from 'react';
import { META_PIXEL_ID } from '@/config/meta';

interface ExtendedFbqFunction {
  (action: 'init', pixelId: string): void;
  (action: 'track', eventName: string, options?: Record<string, unknown>): void;
  (action: 'trackCustom', eventName: string, options?: Record<string, unknown>): void;
  callMethod?: (...args: unknown[]) => void;
  queue?: unknown[];
  push?: ExtendedFbqFunction;
  loaded?: boolean;
  version?: string;
}

declare global {
  interface Window {
    fbq: ExtendedFbqFunction;
    _fbq: ExtendedFbqFunction;
  }
}

export const initializePixel = (): void => {
  // Initialize Meta Pixel code
  const f = window;
  const b = document;
  const e = 'script';
  const v = 'https://connect.facebook.net/en_US/fbevents.js';
  const n: ExtendedFbqFunction = function(...args: unknown[]) {
    if (n.callMethod) {
      n.callMethod(...args);
    } else {
      n.queue?.push(args);
    }
  } as ExtendedFbqFunction;

  if (f.fbq) return;

  if (!f._fbq) f._fbq = n;
  n.push = n;
  n.loaded = true;
  n.version = '2.0';
  n.queue = [];

  const t = b.createElement(e);
  t.async = true;
  t.src = v;
  const s = b.getElementsByTagName(e)[0];
  s?.parentNode?.insertBefore(t, s);

  f.fbq = n;
  window.fbq('init', META_PIXEL_ID);
};

export interface MetaEvent {
  name: string;
  options?: Record<string, unknown>;
}

export const useMetaPixel = (events?: MetaEvent[]) => {
  useEffect(() => {
    // Initialize pixel if not already initialized
    if (!window.fbq) {
      initializePixel();
    }

    // Track page view on mount
    window.fbq('track', 'PageView');

    // Track custom events if provided
    events?.forEach(event => {
      window.fbq('track', event.name, event.options);
    });
  }, [events]);

  return {
    trackEvent: (name: string, options?: Record<string, unknown>) => {
      if (window.fbq) {
        window.fbq('track', name, options);
      }
    },
    trackCustom: (name: string, options?: Record<string, unknown>) => {
      if (window.fbq) {
        window.fbq('trackCustom', name, options);
      }
    }
  };
}; 