import { MapPin, Phone, MessageCircle, Clock, Navigation } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { trackEvent, getWhatsAppUrl, LOCATIONS, OPENING_HOURS } from '@/lib/tracking';

const locationCards = [
  { id: 'zebbug' as const, ...LOCATIONS.zebbug },
  { id: 'fgura' as const, ...LOCATIONS.fgura },
];

export const Locations = () => {
  return (
    <section id="locations" className="py-12 md:py-18 bg-secondary">
      <div className="container">
        <div className="text-center mb-8">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-3">
            Visit us
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Two convenient locations in Malta. Walk in or book ahead.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {locationCards.map((location) => (
            <div key={location.id} className="bg-card rounded-xl border border-border p-6 md:p-8 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-lg bg-primary flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="font-display text-xl font-bold text-foreground">{location.name}</h3>
              </div>

              <div className="flex items-start gap-3 mb-4">
                <Navigation className="w-5 h-5 text-muted-foreground mt-0.5 flex-shrink-0" />
                <p className="text-muted-foreground">{location.address}</p>
              </div>

              <div className="flex items-start gap-3 mb-6 p-4 bg-secondary rounded-lg">
                <Clock className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <div className="text-sm">
                  <p className="font-medium text-foreground">Opening hours</p>
                  <p className="text-muted-foreground">Mon–Fri: {OPENING_HOURS.weekdays}</p>
                  <p className="text-muted-foreground">Sat: {OPENING_HOURS.saturday}</p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <Button variant="whatsapp" className="flex-1" asChild
                  onClick={() => trackEvent('whatsapp_click', { location: location.id, source: 'locations_section' })}
                >
                  <a href={getWhatsAppUrl()} target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="w-4 h-4" />
                    WhatsApp
                  </a>
                </Button>
                <Button variant="locationOutline" className="flex-1" asChild
                  onClick={() => trackEvent('call_click', { location: location.id, source: 'locations_section' })}
                >
                  <a href={location.phoneUrl}>
                    <Phone className="w-4 h-4" />
                    Call {location.id === 'zebbug' ? 'Żebbuġ' : 'Fgura'}
                  </a>
                </Button>
                <Button variant="location" className="flex-1" asChild
                  onClick={() => trackEvent('directions_click', { location: location.id, source: 'locations_section' })}
                >
                  <a href={location.directionsUrl} target="_blank" rel="noopener noreferrer">
                    <MapPin className="w-4 h-4" />
                    Directions
                  </a>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
