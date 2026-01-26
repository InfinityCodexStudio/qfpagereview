// Event tracking for CTAs
// Replace with your actual analytics implementation (GA4, Plausible, etc.)

type TrackingEvent = 
  | 'call_click'
  | 'whatsapp_click'
  | 'directions_click'
  | 'form_submit'
  | 'nav_click'
  | 'service_click';

interface TrackingData {
  location?: 'zebbug' | 'fgura';
  source?: string;
  device_type?: string;
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
export const getWhatsAppUrl = (message?: string) => {
  const baseUrl = `https://wa.me/${WHATSAPP_NUMBER.replace(/\+/g, '')}`;
  return message ? `${baseUrl}?text=${encodeURIComponent(message)}` : baseUrl;
};
export const getEmailUrl = () => `mailto:${EMAIL}`;

// Location data
export const LOCATIONS = {
  zebbug: {
    name: 'QuickFix Żebbuġ',
    address: 'Triq Luret Vella, Żebbuġ, Malta (ZBG 1971)',
    directionsUrl: 'https://maps.app.goo.gl/V5seyJYmfwfrdBfV6',
    postalCode: 'ZBG 1971',
  },
  fgura: {
    name: 'QuickFix Fgura',
    address: '31 Vjal Kottoner, Il-Fgura, Malta (FGR 1388)',
    directionsUrl: 'https://maps.app.goo.gl/5HwDwfUXHV6g5DVe8',
    postalCode: 'FGR 1388',
  },
} as const;

export const OPENING_HOURS = {
  weekdays: '10:00–19:00',
  saturday: '10:00–14:00',
  display: 'Mon–Fri: 10:00–19:00 | Sat: 10:00–14:00',
};
