import { Clock, Zap, Truck, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { trackEvent, getWhatsAppUrl } from '@/lib/tracking';

const tiers = [
  {
    icon: Clock,
    title: 'Standard',
    turnaround: '24-48 hour turnaround',
    description: 'Walk in to Żebbuġ or Fgura',
    price: 'Base repair price',
    cta: 'Book standard',
    message: "Hi, I need a repair. My device is [] and the issue is [].",
    featured: false,
  },
  {
    icon: Zap,
    title: 'Same-Day Priority',
    turnaround: 'Guaranteed same-day completion',
    description: 'We prioritise your repair',
    price: '+€15 on any repair',
    cta: 'Book priority',
    message: "Hi, I'd like to book a Same-Day Priority repair (+€15). My device is [] and the issue is [].",
    featured: true,
  },
  {
    icon: Truck,
    title: 'We Come To You',
    turnaround: 'We collect from anywhere in Malta',
    description: 'Device fixed and returned',
    price: 'From €5 (same-day return €10)',
    cta: 'Book pickup',
    message: "Hi, I'd like to book pickup and delivery. My device is [] and the issue is []. My address is [].",
    featured: false,
  },
];

export const ChooseYourSpeed = () => {
  const handleTierClick = (tierTitle: string) => {
    trackEvent('whatsapp_click', { source: `speed_tier_${tierTitle.toLowerCase().replace(/\s/g, '_')}` });
  };

  return (
    <section id="speed-tiers" className="section-padding bg-background">
      <div className="container">
        {/* Section header */}
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Choose your speed
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Every repair includes our 90-day guarantee.
          </p>
        </div>

        {/* Tier cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {tiers.map((tier, index) => (
            <div
              key={index}
              className={`relative flex flex-col p-6 rounded-2xl border-2 transition-all hover:shadow-lg ${
                tier.featured
                  ? 'border-primary bg-primary/5 shadow-md'
                  : 'border-border bg-card hover:border-primary/50'
              }`}
            >
              {tier.featured && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-primary text-primary-foreground text-xs font-semibold rounded-full">
                  Most Popular
                </div>
              )}

              {/* Icon */}
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${
                tier.featured ? 'bg-primary text-primary-foreground' : 'bg-primary/10 text-primary'
              }`}>
                <tier.icon className="w-6 h-6" />
              </div>

              {/* Content */}
              <h3 className="font-display text-xl font-bold text-foreground mb-2">
                {tier.title}
              </h3>
              <p className="text-sm font-medium text-foreground mb-1">
                {tier.turnaround}
              </p>
              <p className="text-sm text-muted-foreground mb-4">
                {tier.description}
              </p>

              {/* Price */}
              <p className={`text-lg font-bold mb-6 ${tier.featured ? 'text-primary' : 'text-foreground'}`}>
                {tier.price}
              </p>

              {/* CTA */}
              <Button
                variant={tier.featured ? 'hero' : 'outline'}
                className="mt-auto w-full"
                asChild
                onClick={() => handleTierClick(tier.title)}
              >
                <a href={getWhatsAppUrl(tier.message)} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="w-4 h-4" />
                  {tier.cta}
                </a>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
