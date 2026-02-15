import { useState } from 'react';
import { Clock, Zap, Truck, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { trackEvent, getWhatsAppUrl } from '@/lib/tracking';

const tiers = [
  {
    icon: Clock,
    label: 'Standard',
    price: '24–48 hrs',
    message: "Hi QuickFix, I'd like to book a standard repair.\n\nDevice: \nIssue: \nLocation (Żebbuġ / Fgura): \n\nThanks!",
  },
  {
    icon: Zap,
    label: 'Same-Day Priority',
    price: '+€15',
    featured: true,
    message: "Hi QuickFix, I'd like to book a Same-Day Priority repair (+€15).\n\nDevice: \nIssue: \nLocation (Żebbuġ / Fgura): \n\nThanks!",
  },
  {
    icon: Truck,
    label: 'We Come To You',
    price: '€15 / €30',
    message: "Hi QuickFix, I'd like to book pickup and delivery.\n\nDevice: \nIssue: \nMy address: \n\nRound trip (€30) or one-way (€15)?\n\nThanks!",
  },
];

export const ChooseYourSpeed = () => {
  const [selected, setSelected] = useState(1); // default to Priority

  const handleBook = () => {
    const tier = tiers[selected];
    trackEvent('whatsapp_click', { source: `speed_tier_${tier.label.toLowerCase().replace(/\s/g, '_')}` });
    window.open(getWhatsAppUrl(tier.message), '_blank');
  };

  return (
    <section id="speed-tiers" className="py-10 md:py-16 bg-background">
      <div className="container">
        <div className="text-center mb-6">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-2">
            Choose your speed
          </h2>
          <p className="text-muted-foreground text-base max-w-2xl mx-auto">
            Every repair includes our 90-day guarantee.
          </p>
        </div>

        <div className="flex flex-col items-center gap-4 max-w-lg mx-auto">
          {/* Tier chips */}
          <div className="flex flex-wrap justify-center gap-3 w-full">
            {tiers.map((tier, index) => (
              <button
                key={tier.label}
                onClick={() => setSelected(index)}
                className={`flex items-center gap-2 px-5 py-3 rounded-xl border-2 transition-all text-left flex-1 min-w-[140px] ${
                  selected === index
                    ? 'border-primary bg-primary/5 shadow-md'
                    : 'border-border bg-card hover:border-primary/50'
                }`}
              >
                <tier.icon className={`w-5 h-5 flex-shrink-0 ${selected === index ? 'text-primary' : 'text-muted-foreground'}`} />
                <div>
                  <p className="text-sm font-semibold text-foreground">{tier.label}</p>
                  <p className={`text-xs font-medium ${selected === index ? 'text-primary' : 'text-muted-foreground'}`}>{tier.price}</p>
                </div>
              </button>
            ))}
          </div>

          <Button variant="whatsapp" size="lg" className="w-full max-w-sm" onClick={handleBook}>
            <MessageCircle className="w-4 h-4" />
            Book {tiers[selected].label.toLowerCase()}
          </Button>

          <p className="text-xs text-muted-foreground text-center max-w-md">
            Priority fee waived if same-day not possible. Pickup available anywhere in Malta.
          </p>
        </div>
      </div>
    </section>
  );
};
