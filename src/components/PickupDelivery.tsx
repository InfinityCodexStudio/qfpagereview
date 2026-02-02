import { Truck, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { trackEvent, getWhatsAppUrlForPickup } from '@/lib/tracking';

export const PickupDelivery = () => {
  const handlePickupClick = () => {
    trackEvent('whatsapp_click', { source: 'pickup_delivery' });
  };

  return (
    <section className="py-12 bg-primary/5">
      <div className="container">
        <div className="max-w-3xl mx-auto bg-card rounded-2xl border border-primary/20 p-6 md:p-8 shadow-sm">
          <div className="flex flex-col md:flex-row items-center gap-6">
            {/* Icon */}
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
              <Truck className="w-8 h-8 text-primary" />
            </div>

            {/* Content */}
            <div className="flex-1 text-center md:text-left">
              <h3 className="font-display text-xl md:text-2xl font-bold text-foreground mb-2">
                Can't make it to us? We'll come to you.
              </h3>
              <p className="text-muted-foreground mb-2">
                Pickup and delivery anywhere in Malta.
              </p>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• <span className="font-medium text-foreground">Standard:</span> €5</li>
                <li>• <span className="font-medium text-foreground">Same-day return:</span> €10</li>
              </ul>
              <p className="text-sm text-muted-foreground mt-2">
                We collect your device, fix it, and bring it back — usually same day.
              </p>
            </div>

            {/* CTA */}
            <Button
              variant="hero"
              size="lg"
              className="flex-shrink-0"
              asChild
              onClick={handlePickupClick}
            >
              <a href={getWhatsAppUrlForPickup()} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-5 h-5" />
                Book pickup
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};