import { Shield, Smartphone, Sparkles, Gift, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { trackEvent, getWhatsAppUrl } from '@/lib/tracking';

const products = [
  {
    icon: Shield,
    title: 'Screen Protector',
    price: '€15',
    priceNote: 'installed',
    description: 'Tempered glass, professionally fitted',
  },
  {
    icon: Smartphone,
    title: 'Quality Case',
    price: 'from €20',
    priceNote: '',
    description: 'Protection that actually works',
  },
  {
    icon: Sparkles,
    title: 'Extended Warranty',
    price: '€20',
    priceNote: '',
    description: 'Upgrade to 6 months total coverage',
  },
];

export const ProtectYourDevice = () => {
  const handleProductClick = (product: string) => {
    trackEvent('whatsapp_click', { source: `upsell_${product.toLowerCase().replace(/\s/g, '_')}` });
  };

  const handleBundleClick = () => {
    trackEvent('whatsapp_click', { source: 'protection_pack' });
  };

  return (
    <section id="protect" className="section-padding bg-secondary">
      <div className="container">
        {/* Section header */}
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Keep it protected
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Don't leave without these.
          </p>
        </div>

        {/* Product cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-8">
          {products.map((product, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center p-6 bg-card rounded-xl border border-border hover:border-primary/50 hover:shadow-md transition-all"
            >
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <product.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-display text-lg font-bold text-foreground mb-2">
                {product.title}
              </h3>
              <p className="text-xl font-bold text-primary mb-1">
                {product.price} <span className="text-sm font-normal text-muted-foreground">{product.priceNote}</span>
              </p>
              <p className="text-sm text-muted-foreground">
                {product.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bundle offer */}
        <div className="max-w-2xl mx-auto">
          <div className="relative bg-gradient-to-r from-primary/10 to-primary/5 rounded-2xl border-2 border-primary p-6 md:p-8">
            <div className="absolute -top-3 left-6 px-3 py-1 bg-primary text-primary-foreground text-xs font-semibold rounded-full flex items-center gap-1">
              <Gift className="w-3 h-3" />
              Save €15
            </div>

            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="flex-1 text-center md:text-left">
                <h3 className="font-display text-xl md:text-2xl font-bold text-foreground mb-2">
                  🎁 Protection Pack — €50
                </h3>
                <p className="text-muted-foreground mb-2">
                  Screen protector + case + extended warranty
                </p>
                <p className="text-sm text-foreground font-medium">
                  Everything you need to keep your device safe.
                </p>
              </div>
              <Button
                variant="hero"
                size="lg"
                className="flex-shrink-0"
                asChild
                onClick={handleBundleClick}
              >
                <a 
                  href={getWhatsAppUrl("Hi, I'd like to add the Protection Pack (€50) to my repair.")} 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="w-5 h-5" />
                  Add to your repair
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
