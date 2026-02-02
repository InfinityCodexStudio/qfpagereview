// Event tracking for CTAs
// Replace with your actual analytics implementation (GA4, Plausible, etc.)

type TrackingEvent = 
  | 'call_click'
  | 'whatsapp_click'
  | 'directions_click'
  | 'form_submit'
  | 'nav_click'
  | 'service_click'
  | 'fix_click';

interface TrackingData {
  location?: 'zebbug' | 'fgura';
  source?: string;
  device_type?: string;
  issue?: string;
  [key: string]: string | undefined;
}

export const trackEvent = (event: TrackingEvent, data?: TrackingData) => {
  // Log for development
  console.log(`[QuickFix Event] ${event}`, data);
  
  // Google Analytics 4
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', event, data);
  }

  // Add other analytics providers here
};

// Contact URLs
export const PHONE_NUMBER = '+35621317810';
export const WHATSAPP_NUMBER = '+35699209869';
export const EMAIL = 'info@quickfixmalta.com';

export const getPhoneUrl = () => `tel:${PHONE_NUMBER}`;

// WhatsApp URL with pre-filled message support
export const getWhatsAppUrl = (message?: string) => {
  const defaultMessage = "Hi, I need a repair. My device is [] and the issue is [].";
  const baseUrl = `https://wa.me/35699209869`;
  return `${baseUrl}?text=${encodeURIComponent(message || defaultMessage)}`;
};

// WhatsApp URL for specific fix/issue
export const getWhatsAppUrlForFix = (issue: string) => {
  const message = `Hi, I need help with ${issue}. My device is []. I'm near Żebbuġ / Fgura.`;
  return getWhatsAppUrl(message);
};

// WhatsApp URL for pickup
export const getWhatsAppUrlForPickup = () => {
  const message = "Hi, I'd like to book a pickup for my device repair. My address is [] and my device is [].";
  return getWhatsAppUrl(message);
};

export const getEmailUrl = () => `mailto:${EMAIL}`;

// Location data with updated direction URLs
export const LOCATIONS = {
  zebbug: {
    name: 'QuickFix Żebbuġ',
    address: 'Triq Luret Vella, Żebbuġ, Malta (ZBG 1971)',
    directionsUrl: 'https://maps.app.goo.gl/Qeoj9s81ovrJBFET9',
    postalCode: 'ZBG 1971',
  },
  fgura: {
    name: 'QuickFix Fgura',
    address: '31 Vjal Kottoner, Il-Fgura, Malta (FGR 1388)',
    directionsUrl: 'https://maps.app.goo.gl/DxQ6nv1KLcPN8q3S9',
    postalCode: 'FGR 1388',
  },
} as const;

export const OPENING_HOURS = {
  weekdays: '10:00–19:00',
  saturday: '10:00–14:00',
  display: 'Mon–Fri: 10:00–19:00 | Sat: 10:00–14:00',
};

// Google reviews
export const GOOGLE_REVIEWS_URL = 'https://maps.app.goo.gl/Qeoj9s81ovrJBFET9';