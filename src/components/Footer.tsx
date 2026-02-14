import { Phone, MessageCircle, Mail, MapPin, Clock } from 'lucide-react';
import { 
  trackEvent, 
  getWhatsAppUrl, 
  getEmailUrl, 
  LOCATIONS, 
  OPENING_HOURS,
  WHATSAPP_NUMBER,
  EMAIL
} from '@/lib/tracking';
import logoFull from '@/assets/QuickFix_logo_cropped_transparent.png';

export const Footer = () => {
  return (
    <footer className="bg-foreground text-background">
      <div className="container py-10 md:py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand + Contact */}
          <div className="lg:col-span-1">
            <div className="flex items-center mb-4">
              <img 
                src={logoFull} 
                alt="QuickFix Malta" 
                className="h-10 brightness-0 invert"
              />
            </div>
            <p className="text-background/70 text-sm mb-4">
              Trusted device repairs in Malta. Fast turnaround, quality parts, 90-day guarantee.
            </p>
            <div className="space-y-2">
              <a
                href={LOCATIONS.zebbug.phoneUrl}
                onClick={() => trackEvent('call_click', { source: 'footer', location: 'zebbug' })}
                className="flex items-center gap-2 text-sm text-background/70 hover:text-primary transition-colors"
              >
                <Phone className="w-4 h-4" />
                Żebbuġ: {LOCATIONS.zebbug.phone}
              </a>
              <a
                href={LOCATIONS.fgura.phoneUrl}
                onClick={() => trackEvent('call_click', { source: 'footer', location: 'fgura' })}
                className="flex items-center gap-2 text-sm text-background/70 hover:text-primary transition-colors"
              >
                <Phone className="w-4 h-4" />
                Fgura: {LOCATIONS.fgura.phone}
              </a>
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackEvent('whatsapp_click', { source: 'footer' })}
                className="flex items-center gap-2 text-sm text-background/70 hover:text-primary transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                WhatsApp: {WHATSAPP_NUMBER}
              </a>
              <a
                href={getEmailUrl()}
                className="flex items-center gap-2 text-sm text-background/70 hover:text-primary transition-colors"
              >
                <Mail className="w-4 h-4" />
                {EMAIL}
              </a>
            </div>
          </div>

          {/* Żebbuġ */}
          <div>
            <h3 className="font-display font-semibold mb-4">Żebbuġ Shop</h3>
            <div className="space-y-3 text-sm text-background/70">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>{LOCATIONS.zebbug.address}</span>
              </div>
              <div className="flex items-start gap-2">
                <Clock className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <div>
                  <p>Mon–Fri: {OPENING_HOURS.weekdays}</p>
                  <p>Sat: {OPENING_HOURS.saturday}</p>
                </div>
              </div>
              <a
                href={LOCATIONS.zebbug.directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackEvent('directions_click', { location: 'zebbug', source: 'footer' })}
                className="inline-flex items-center gap-1 text-primary hover:underline"
              >
                Get directions →
              </a>
            </div>
          </div>

          {/* Fgura */}
          <div>
            <h3 className="font-display font-semibold mb-4">Fgura Shop</h3>
            <div className="space-y-3 text-sm text-background/70">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>{LOCATIONS.fgura.address}</span>
              </div>
              <div className="flex items-start gap-2">
                <Clock className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <div>
                  <p>Mon–Fri: {OPENING_HOURS.weekdays}</p>
                  <p>Sat: {OPENING_HOURS.saturday}</p>
                </div>
              </div>
              <a
                href={LOCATIONS.fgura.directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackEvent('directions_click', { location: 'fgura', source: 'footer' })}
                className="inline-flex items-center gap-1 text-primary hover:underline"
              >
                Get directions →
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display font-semibold mb-4">Quick Links</h3>
            <nav className="space-y-2 text-sm">
              <a href="#services" className="block text-background/70 hover:text-primary transition-colors">Services</a>
              <a href="#common-fixes" className="block text-background/70 hover:text-primary transition-colors">Common Fixes</a>
              <a href="#locations" className="block text-background/70 hover:text-primary transition-colors">Locations</a>
              <a href="#faq" className="block text-background/70 hover:text-primary transition-colors">FAQ</a>
              <a href={getWhatsAppUrl()} target="_blank" rel="noopener noreferrer" className="block text-background/70 hover:text-primary transition-colors">Book a Repair</a>
            </nav>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 pt-6 border-t border-background/10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-background/50">
            <p>© {new Date().getFullYear()} QuickFix Malta. All rights reserved.</p>
            <div className="flex items-center gap-6">
              <a href="/privacy" className="hover:text-background transition-colors">Privacy Policy</a>
              <a href="/terms" className="hover:text-background transition-colors">Terms of Service</a>
            </div>
          </div>
          <p className="text-xs text-background/40 mt-4 text-center md:text-left">
            Prices depend on model and issue. Diagnostics may be required for an accurate quote.
          </p>
        </div>
      </div>
    </footer>
  );
};
