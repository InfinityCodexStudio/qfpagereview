import { Truck, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { trackEvent, getWhatsAppUrlForPickup } from '@/lib/tracking';

export const PickupDelivery = () => {
  return (
    <section className="py-8 md:py-10 bg-primary/5">
      <div className="container">
        <div className="max-w-3xl mx-auto bg-card rounded-2xl border border-primary/20 p-6 md:p-8 shadow-sm">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
              <Truck className="w-8 h-8 text-primary" />
            </div>
            <div className="flex-1 text-center md:text-left">
              <h3 className="font-display text-xl md:text-2xl font-bold text-foreground mb-2">
                Can't make it to us? We'll come to you.
              </h3>
              <p className="text-muted-foreground mb-2">Pickup and delivery anywhere in Malta.</p>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• <span className="font-medium text-foreground">One-way (pickup OR delivery):</span> €15</li>
                <li>• <span className="font-medium text-foreground">Round trip (we collect and return):</span> €30</li>
              </ul>
            </div>
            <Button variant="whatsapp" size="lg" className="flex-shrink-0" asChild
              onClick={() => trackEvent('whatsapp_click', { source: 'pickup_delivery' })}
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
