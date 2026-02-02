import { Shield, Smartphone, Sparkles, Gift, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { trackEvent, getWhatsAppUrl } from '@/lib/tracking';

const products = [
  {
    icon: Shield,
    title: 'ProtectionPro Film',
    price: '€35',
    priceNote: 'installed',
    description: 'Military-grade screen protection by Madico. Tested to withstand extreme impact. Precision fitted by our technicians.',
    cta: 'Add to repair',
    message: "Hi, I'd like to add ProtectionPro screen protection (€35) to my repair.",
    featured: true,
  },
  {
    icon: Smartphone,
    title: 'Quality Case',
    price: 'from €20',
    priceNote: '',
    description: 'Protection that actually works. Range of styles available in-store.',
    cta: 'Ask about cases',
    message: "Hi, I'm interested in a quality case for my device. What options do you have?",
    featured: false,
  },
  {
    icon: Sparkles,
    title: 'Extended Warranty',
    price: '€20',
    priceNote: '',
    description: 'Upgrade from 90 days to 6 months coverage. Peace of mind, longer protection.',
    cta: 'Add warranty',
    message: "Hi, I'd like to add the Extended Warranty (€20) to my repair.",
    featured: false,
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
            Premium protection for your repaired device.
          </p>
        </div>

        {/* Product cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-8">
          {products.map((product, index) => (
            <div
              key={index}
              className={`flex flex-col items-center text-center p-6 bg-card rounded-xl border transition-all hover:shadow-md ${
                product.featured 
                  ? 'border-primary shadow-sm' 
                  : 'border-border hover:border-primary/50'
              }`}
            >
              <div className={`w-14 h-14 rounded-full flex items-center justify-center mb-4 ${
                product.featured ? 'bg-primary/20' : 'bg-primary/10'
              }`}>
                <product.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-display text-lg font-bold text-foreground mb-2">
                {product.title}
              </h3>
              <p className="text-xl font-bold text-primary mb-1">
                {product.price} <span className="text-sm font-normal text-muted-foreground">{product.priceNote}</span>
              </p>
              <p className="text-sm text-muted-foreground mb-4 flex-1">
                {product.description}
              </p>
              <Button
                variant={product.featured ? 'default' : 'outline'}
                size="sm"
                className="w-full"
                asChild
                onClick={() => handleProductClick(product.title)}
              >
                <a href={getWhatsAppUrl(product.message)} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="w-4 h-4" />
                  {product.cta}
                </a>
              </Button>
            </div>
          ))}
        </div>

        {/* Bundle offer */}
        <div className="max-w-2xl mx-auto">
          <div className="relative bg-gradient-to-r from-primary/10 to-primary/5 rounded-2xl border-2 border-primary p-6 md:p-8">
            <div className="absolute -top-3 left-6 px-3 py-1 bg-primary text-primary-foreground text-xs font-semibold rounded-full flex items-center gap-1">
              <Gift className="w-3 h-3" />
              Save €10
            </div>

            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="flex-1 text-center md:text-left">
                <h3 className="font-display text-xl md:text-2xl font-bold text-foreground mb-2">
                  🎁 Protection Pack: €45
                </h3>
                <p className="text-muted-foreground mb-3">
                  ProtectionPro film + Extended warranty
                </p>
                <ul className="text-sm text-muted-foreground space-y-1 mb-2">
                  <li>• Military-grade Madico screen protection (€35 value)</li>
                  <li>• 6 months total warranty coverage (€20 value)</li>
                </ul>
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
                  href={getWhatsAppUrl("Hi, I'd like to add the Protection Pack (€45 - ProtectionPro + 6-month warranty) to my repair.")} 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="w-5 h-5" />
                  Add Protection Pack
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
