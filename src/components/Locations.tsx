import { MapPin, Phone, MessageCircle, Clock, Navigation } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { trackEvent, getWhatsAppUrl, LOCATIONS, OPENING_HOURS } from '@/lib/tracking';

const locationCards = [
  { id: 'zebbug' as const, ...LOCATIONS.zebbug },
  { id: 'fgura' as const, ...LOCATIONS.fgura },
];

const LocationButton = ({
  variant,
  href,
  onClick,
  icon: Icon,
  label,
  external = false,
}: {
  variant: 'whatsapp' | 'locationOutline' | 'location';
  href: string;
  onClick: () => void;
  icon: typeof MapPin;
  label: string;
  external?: boolean;
}) => (
  <Button
    variant={variant}
    className="flex-1 h-11 min-w-[100px] rounded-lg text-sm"
    asChild
    onClick={onClick}
  >
    <a
      href={href}
      {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
    >
      <Icon className="w-4 h-4" />
      {label}
    </a>
  </Button>
);

export const Locations = () => {
  return (
    <section id="locations" className="py-10 md:py-16 bg-secondary">
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
            <div key={location.id} className="bg-card rounded-xl border border-border p-6 md:p-8 shadow-sm flex flex-col">
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

              <div className="flex flex-col sm:flex-row gap-3 mt-auto">
                <LocationButton
                  variant="whatsapp"
                  href={getWhatsAppUrl()}
                  onClick={() => trackEvent('whatsapp_click', { location: location.id, source: 'locations_section' })}
                  icon={MessageCircle}
                  label="WhatsApp"
                  external
                />
                <LocationButton
                  variant="locationOutline"
                  href={location.phoneUrl}
                  onClick={() => trackEvent('call_click', { location: location.id, source: 'locations_section' })}
                  icon={Phone}
                  label={`Call ${location.id === 'zebbug' ? 'Żebbuġ' : 'Fgura'}`}
                />
                <LocationButton
                  variant="location"
                  href={location.directionsUrl}
                  onClick={() => trackEvent('directions_click', { location: location.id, source: 'locations_section' })}
                  icon={MapPin}
                  label="Directions"
                  external
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Locations;
