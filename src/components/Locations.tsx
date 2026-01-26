import { MapPin, Phone, MessageCircle, Clock, Navigation } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { trackEvent, getPhoneUrl, getWhatsAppUrl, LOCATIONS, OPENING_HOURS } from '@/lib/tracking';

const locationCards = [
  {
    id: 'zebbug',
    ...LOCATIONS.zebbug,
  },
  {
    id: 'fgura',
    ...LOCATIONS.fgura,
  },
];

export const Locations = () => {
  const handleDirectionsClick = (location: string) => {
    trackEvent('directions_click', { location: location as 'zebbug' | 'fgura', source: 'locations_section' });
  };

  const handleCallClick = (location: string) => {
    trackEvent('call_click', { location: location as 'zebbug' | 'fgura', source: 'locations_section' });
  };

  const handleWhatsAppClick = (location: string) => {
    trackEvent('whatsapp_click', { location: location as 'zebbug' | 'fgura', source: 'locations_section' });
  };

  return (
    <section id="locations" className="section-padding bg-secondary/50">
      <div className="container">
        {/* Section header */}
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Visit us
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Two convenient locations in Malta. Walk in or book ahead.
          </p>
        </div>

        {/* Location cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {locationCards.map((location) => (
            <div
              key={location.id}
              className="bg-card rounded-xl border border-border p-6 md:p-8 shadow-sm"
            >
              {/* Shop name */}
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-lg bg-primary flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-display text-xl font-bold text-foreground">
                    {location.name}
                  </h3>
                </div>
              </div>

              {/* Address */}
              <div className="flex items-start gap-3 mb-4">
                <Navigation className="w-5 h-5 text-muted-foreground mt-0.5 flex-shrink-0" />
                <p className="text-muted-foreground">
                  {location.address}
                </p>
              </div>

              {/* Hours */}
              <div className="flex items-start gap-3 mb-6 p-4 bg-secondary/50 rounded-lg">
                <Clock className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <div className="text-sm">
                  <p className="font-medium text-foreground">Opening hours</p>
                  <p className="text-muted-foreground">Mon–Fri: {OPENING_HOURS.weekdays}</p>
                  <p className="text-muted-foreground">Sat: {OPENING_HOURS.saturday}</p>
                </div>
              </div>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-3">
                <Button
                  variant="location"
                  className="flex-1"
                  asChild
                  onClick={() => handleDirectionsClick(location.id)}
                >
                  <a href={location.directionsUrl} target="_blank" rel="noopener noreferrer">
                    <MapPin className="w-4 h-4" />
                    Get directions
                  </a>
                </Button>
                <Button
                  variant="locationOutline"
                  className="flex-1"
                  asChild
                  onClick={() => handleCallClick(location.id)}
                >
                  <a href={getPhoneUrl()}>
                    <Phone className="w-4 h-4" />
                    Call
                  </a>
                </Button>
                <Button
                  variant="whatsapp"
                  className="flex-1"
                  asChild
                  onClick={() => handleWhatsAppClick(location.id)}
                >
                  <a href={getWhatsAppUrl()} target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="w-4 h-4" />
                    WhatsApp
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
