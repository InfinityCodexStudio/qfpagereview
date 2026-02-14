import { useState, useRef, useEffect } from 'react';
import { Phone, MessageCircle, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { trackEvent, getWhatsAppUrl, LOCATIONS } from '@/lib/tracking';

export const StickyCTA = () => {
  const [callOpen, setCallOpen] = useState(false);
  const [directionsOpen, setDirectionsOpen] = useState(false);
  const callRef = useRef<HTMLDivElement>(null);
  const dirRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (callRef.current && !callRef.current.contains(e.target as Node)) setCallOpen(false);
      if (dirRef.current && !dirRef.current.contains(e.target as Node)) setDirectionsOpen(false);
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="sticky-cta-bar md:hidden">
      <div className="container py-2.5">
        <div className="grid grid-cols-3 gap-2">
          {/* WhatsApp - primary, widest */}
          <Button
            variant="whatsapp"
            size="sm"
            className="flex-col h-auto py-2 px-1 text-xs col-span-1"
            asChild
            onClick={() => trackEvent('whatsapp_click', { source: 'sticky_cta' })}
          >
            <a href={getWhatsAppUrl()} target="_blank" rel="noopener noreferrer">
              <MessageCircle className="w-4 h-4 mb-0.5" />
              WhatsApp
            </a>
          </Button>

          {/* Call - dropdown */}
          <div className="relative" ref={callRef}>
            <Button
              variant="cta"
              size="sm"
              className="flex-col h-auto py-2 px-1 text-xs w-full"
              onClick={() => { setCallOpen(!callOpen); setDirectionsOpen(false); }}
            >
              <Phone className="w-4 h-4 mb-0.5" />
              Call
            </Button>
            {callOpen && (
              <div className="absolute bottom-full mb-1 left-0 right-0 bg-card border border-border rounded-lg shadow-lg overflow-hidden z-50">
                <a
                  href={LOCATIONS.zebbug.phoneUrl}
                  onClick={() => { trackEvent('call_click', { location: 'zebbug', source: 'sticky_cta' }); setCallOpen(false); }}
                  className="flex items-center gap-2 px-3 py-2.5 text-xs font-medium text-foreground hover:bg-secondary transition-colors"
                >
                  <Phone className="w-3 h-3 text-accent" />
                  Żebbuġ
                </a>
                <a
                  href={LOCATIONS.fgura.phoneUrl}
                  onClick={() => { trackEvent('call_click', { location: 'fgura', source: 'sticky_cta' }); setCallOpen(false); }}
                  className="flex items-center gap-2 px-3 py-2.5 text-xs font-medium text-foreground hover:bg-secondary transition-colors border-t border-border"
                >
                  <Phone className="w-3 h-3 text-accent" />
                  Fgura
                </a>
              </div>
            )}
          </div>

          {/* Directions - dropdown */}
          <div className="relative" ref={dirRef}>
            <Button
              variant="secondary"
              size="sm"
              className="flex-col h-auto py-2 px-1 text-xs w-full"
              onClick={() => { setDirectionsOpen(!directionsOpen); setCallOpen(false); }}
            >
              <MapPin className="w-4 h-4 mb-0.5" />
              Directions
            </Button>
            {directionsOpen && (
              <div className="absolute bottom-full mb-1 left-0 right-0 bg-card border border-border rounded-lg shadow-lg overflow-hidden z-50">
                <a
                  href={LOCATIONS.zebbug.directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => { trackEvent('directions_click', { location: 'zebbug', source: 'sticky_cta' }); setDirectionsOpen(false); }}
                  className="flex items-center gap-2 px-3 py-2.5 text-xs font-medium text-foreground hover:bg-secondary transition-colors"
                >
                  <MapPin className="w-3 h-3 text-primary" />
                  Żebbuġ
                </a>
                <a
                  href={LOCATIONS.fgura.directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => { trackEvent('directions_click', { location: 'fgura', source: 'sticky_cta' }); setDirectionsOpen(false); }}
                  className="flex items-center gap-2 px-3 py-2.5 text-xs font-medium text-foreground hover:bg-secondary transition-colors border-t border-border"
                >
                  <MapPin className="w-3 h-3 text-primary" />
                  Fgura
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
