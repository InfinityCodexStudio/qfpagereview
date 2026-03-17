import { Truck, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { trackEvent, getWhatsAppUrlForPickup } from '@/lib/tracking';

export const PickupDelivery = () => {
  return (
    <section className="py-8 md:py-10 bg-background">
      <div className="container">
        <div className="mx-auto bg-card rounded-2xl border border-primary/20 p-6 md:p-8 shadow-sm">
          <div className="flex flex-col lg:flex-row items-start gap-8">
            <div className="flex flex-col items-center lg:items-start gap-4 flex-1">
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
              </div>
              <div className="w-full flex justify-center md:justify-start md:pl-[88px]">
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
            <div className="hidden lg:block flex-1 border-l border-border pl-8">
              <p className="text-sm font-medium text-muted-foreground mb-4 uppercase tracking-wide">How it works</p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-xs font-bold text-primary">1</span>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground">WhatsApp us</p>
                    <p className="text-xs text-muted-foreground">Tell us your device, issue, and address.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-xs font-bold text-primary">2</span>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground">We collect</p>
                    <p className="text-xs text-muted-foreground">We come to you anywhere in Malta.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-xs font-bold text-primary">3</span>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground">Fixed and returned</p>
                    <p className="text-xs text-muted-foreground">Repaired and delivered back to your door.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PickupDelivery;
