// Event tracking for CTAs

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
  console.log(`[QuickFix Event] ${event}`, data);
  
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', event, data);
  }
};

// Contact URLs
export const WHATSAPP_NUMBER = '+356 9920 9313';
export const WHATSAPP_RAW = '35699209313';
export const PHONE_ZEBBUG = '+356 2780 2501';
export const PHONE_FGURA = '+356 2131 7810';
export const EMAIL = 'info@quickfixmalta.com';

export const getPhoneUrl = (location?: 'zebbug' | 'fgura') => {
  if (location === 'fgura') return 'tel:+35621317810';
  return 'tel:+35627802501';
};

// WhatsApp URL with structured pre-fill message
export const getWhatsAppUrl = (message?: string) => {
  const defaultMessage = `Hi QuickFix, I need help with [ISSUE]. Device: [BRAND/MODEL]. I'm near [Żebbuġ/Fgura]. What would it cost and how long would it take?`;
  const baseUrl = `https://wa.me/${WHATSAPP_RAW}`;
  return `${baseUrl}?text=${encodeURIComponent(message || defaultMessage)}`;
};

// WhatsApp URL for specific fix/issue
export const getWhatsAppUrlForFix = (issue: string) => {
  const message = `Hi QuickFix, I need a ${issue.toLowerCase()}. Device: [BRAND/MODEL]. I'm near [Żebbuġ/Fgura]. What would it cost and how long would it take?`;
  return getWhatsAppUrl(message);
};

// WhatsApp URL for specific service category
export const getWhatsAppUrlForService = (service: string) => {
  const message = `Hi QuickFix, I need help with my ${service.toLowerCase()}. Device model: [MODEL]. Issue: [DESCRIBE]. I'm near [Żebbuġ/Fgura]. What would it cost?`;
  return getWhatsAppUrl(message);
};

// WhatsApp URL for standard booking
export const getWhatsAppUrlForStandard = () => {
  const message = `Hi QuickFix, I'd like to book a standard repair.\n\nDevice: \nIssue: \nLocation (Żebbuġ / Fgura): \nPreferred time: \n\nThanks!`;
  return getWhatsAppUrl(message);
};

// WhatsApp URL for pickup (round trip)
export const getWhatsAppUrlForPickup = () => {
  const message = `Hi QuickFix, I'd like to book pickup and delivery.\n\nDevice: \nIssue: \nMy address: \nPreferred pickup time: \n\nRound trip (€30) or one-way (€15)? \n\nThanks!`;
  return getWhatsAppUrl(message);
};

// WhatsApp URL for pickup (one-way)
export const getWhatsAppUrlForPickupOneWay = () => {
  const message = `Hi QuickFix, I'd like to book pickup only (€15).\n\nDevice: \nIssue: \nMy address: \n\nThanks!`;
  return getWhatsAppUrl(message);
};

// WhatsApp URL for priority booking
export const getWhatsAppUrlForPriority = () => {
  const message = `Hi QuickFix, I'd like to book a Same-Day Priority repair (+€15).\n\nDevice: \nIssue: \nLocation (Żebbuġ / Fgura): \nPreferred time: \n\nThanks!`;
  return getWhatsAppUrl(message);
};

// WhatsApp URL for protection pack
export const getWhatsAppUrlForProtectionPack = () => {
  const message = `Hi QuickFix, I'd like to add the Protection Pack (€45) to my repair.\n\nDevice: \n\nThanks!`;
  return getWhatsAppUrl(message);
};

// WhatsApp URL for ProtectionPro only
export const getWhatsAppUrlForProtectionPro = () => {
  const message = `Hi QuickFix, I'd like to add ProtectionPro screen protection (€35) to my repair.\n\nDevice: \n\nThanks!`;
  return getWhatsAppUrl(message);
};

// WhatsApp URL for data recovery
export const getWhatsAppUrlForDataRecovery = () => {
  const message = `Hi QuickFix, I need help with data recovery.\n\nDevice: \nWhat happened: \nWhat data do you need recovered: \n\nThanks!`;
  return getWhatsAppUrl(message);
};

// WhatsApp URL for instant quote
export const getWhatsAppUrlForQuote = (device: string, issue: string, location: string) => {
  const message = `Hi QuickFix, I need a quick quote.\n\nDevice type: ${device}\nIssue: ${issue}\nLocation: ${location}\n\nWhat would it cost and how long would it take?`;
  return getWhatsAppUrl(message);
};

export const getEmailUrl = () => `mailto:${EMAIL}`;

// Location data
export const LOCATIONS = {
  zebbug: {
    name: 'QuickFix Żebbuġ',
    address: 'Triq Luret Vella, Żebbuġ, Malta (ZBG 1971)',
    directionsUrl: 'https://maps.app.goo.gl/Qeoj9s81ovrJBFET9',
    postalCode: 'ZBG 1971',
    phone: '+356 2780 2501',
    phoneUrl: 'tel:+35627802501',
  },
  fgura: {
    name: 'QuickFix Fgura',
    address: '31 Vjal Kottoner, Il-Fgura, Malta (FGR 1388)',
    directionsUrl: 'https://maps.app.goo.gl/DxQ6nv1KLcPN8q3S9',
    postalCode: 'FGR 1388',
    phone: '+356 2131 7810',
    phoneUrl: 'tel:+35621317810',
  },
} as const;

export const OPENING_HOURS = {
  weekdays: '10:00–19:00',
  saturday: '10:00–14:00',
  display: 'Mon–Fri: 10:00–19:00 | Sat: 10:00–14:00',
};

// Google reviews
export const GOOGLE_REVIEWS_URL = 'https://maps.app.goo.gl/Qeoj9s81ovrJBFET9';
