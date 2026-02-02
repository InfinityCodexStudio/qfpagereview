import { Phone, MessageCircle, MapPin, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { trackEvent, getPhoneUrl, getWhatsAppUrl } from '@/lib/tracking';

export const StickyCTA = () => {
  const handleCallClick = () => {
    trackEvent('call_click', { source: 'sticky_cta' });
  };

  const handleWhatsAppClick = () => {
    trackEvent('whatsapp_click', { source: 'sticky_cta' });
  };

  const handleDirectionsClick = () => {
    trackEvent('directions_click', { source: 'sticky_cta' });
  };

  const handleBookClick = () => {
    trackEvent('whatsapp_click', { source: 'sticky_cta_book' });
  };

  return (
    <div className="sticky-cta-bar md:hidden">
      <div className="container py-3">
        <div className="grid grid-cols-4 gap-2">
          <Button
            variant="cta"
            size="sm"
            className="flex-col h-auto py-2 px-1 text-xs"
            asChild
            onClick={handleCallClick}
          >
            <a href={getPhoneUrl()}>
              <Phone className="w-4 h-4 mb-1" />
              Call
            </a>
          </Button>
          
          <Button
            variant="whatsapp"
            size="sm"
            className="flex-col h-auto py-2 px-1 text-xs"
            asChild
            onClick={handleWhatsAppClick}
          >
            <a href={getWhatsAppUrl()} target="_blank" rel="noopener noreferrer">
              <MessageCircle className="w-4 h-4 mb-1" />
              WhatsApp
            </a>
          </Button>
          
          <Button
            variant="secondary"
            size="sm"
            className="flex-col h-auto py-2 px-1 text-xs"
            asChild
            onClick={handleDirectionsClick}
          >
            <a href="#locations">
              <MapPin className="w-4 h-4 mb-1" />
              Locations
            </a>
          </Button>
          
          <Button
            variant="outline"
            size="sm"
            className="flex-col h-auto py-2 px-1 text-xs border-primary text-primary"
            asChild
            onClick={handleBookClick}
          >
            <a href={getWhatsAppUrl()} target="_blank" rel="noopener noreferrer">
              <Calendar className="w-4 h-4 mb-1" />
              Book
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
};