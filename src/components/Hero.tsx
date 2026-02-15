import { Clock, Shield, Lock, MapPin, Star, MessageCircle, Phone, ThumbsUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { trackEvent, getWhatsAppUrl, GOOGLE_REVIEWS_URL, LOCATIONS } from '@/lib/tracking';
import repairBench from '@/assets/repair-bench.png';

const FACEBOOK_REVIEWS_URL = 'https://www.facebook.com/quickfixmalta/reviews';

const trustBullets = [
  { icon: Clock, text: 'Same-day on most repairs' },
  { icon: Shield, text: '90-day guarantee' },
  { icon: Lock, text: 'Your data stays safe' },
];

export const Hero = () => {
  const handleWhatsAppClick = () => {
    trackEvent('whatsapp_click', { source: 'hero_primary' });
  };

  return (
    <section className="relative overflow-hidden">
      {/* Background image */}
      <img
        src={repairBench}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover object-[right_center] md:object-[75%_80%]"
        loading="eager"
        fetchPriority="high"
      />

      {/* Horizontal scrim: left opaque → right transparent */}
      <div className="absolute inset-0 bg-gradient-to-r from-background/[0.95] via-background/[0.80] to-background/[0.12]" />
      {/* Subtle brand tint */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/[0.04] via-primary/[0.02] to-transparent" />
      {/* Vertical fade: bottom fades into page */}
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-background to-transparent" />

      {/* Mobile: extra overlay for readability */}
      <div className="absolute inset-0 bg-background/[0.60] md:hidden" />

      <div className="container relative py-12 md:py-24 lg:py-28" style={{ minHeight: 'min(720px, 85vh)' }}>
        <div className="max-w-xl lg:max-w-[560px] text-left">
          {/* Location badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card/80 backdrop-blur-sm border border-border text-sm font-medium text-muted-foreground mb-4 animate-fade-in">
            <MapPin className="w-4 h-4 text-primary" />
            Two locations: Żebbuġ + Fgura
          </div>

          {/* Headline */}
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-extrabold text-foreground mb-3 animate-slide-up text-balance">
            Cracked screen?{' '}
            <span className="text-primary">Dead battery?</span>
          </h1>

          {/* Subhead */}
          <p className="text-lg md:text-xl text-muted-foreground mb-5 max-w-lg animate-slide-up" style={{ animationDelay: '0.1s' }}>
            Same-day on most repairs. 90-day guarantee on all repairs. Walk in or we come to you.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-start gap-3 mb-1.5 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <Button variant="whatsapp" size="xl" asChild onClick={handleWhatsAppClick}>
              <a href={getWhatsAppUrl()} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-5 h-5" />
                WhatsApp for a quick quote
              </a>
            </Button>
            {/* Desktop: visible Call button */}
            <Button variant="cta" size="lg" asChild className="hidden sm:inline-flex">
              <a href={LOCATIONS.zebbug.phoneUrl} onClick={() => trackEvent('call_click', { source: 'hero' })}>
                <Phone className="w-5 h-5" />
                Call us
              </a>
            </Button>
          </div>
          {/* Mobile: small text link for calling */}
          <a
            href={LOCATIONS.zebbug.phoneUrl}
            onClick={() => trackEvent('call_click', { source: 'hero_mobile_link' })}
            className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors sm:hidden animate-slide-up"
            style={{ animationDelay: '0.22s' }}
          >
            <Phone className="w-3.5 h-3.5" />
            Prefer calling?
          </a>
          {/* Microcopy */}
          <p className="text-xs text-muted-foreground mb-5 mt-1.5 animate-slide-up" style={{ animationDelay: '0.22s' }}>
            Fast replies during opening hours.
          </p>

          {/* Social proof badges */}
          <div className="flex flex-col sm:flex-row items-start gap-3 mb-6 animate-slide-up" style={{ animationDelay: '0.25s' }}>
            <a 
              href={GOOGLE_REVIEWS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              <div className="flex items-center gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-accent text-accent" />
                ))}
              </div>
              <span>4.9/5 on Google (120+ reviews)</span>
            </a>
            <span className="hidden sm:inline text-border">|</span>
            <a
              href={FACEBOOK_REVIEWS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              <ThumbsUp className="w-3.5 h-3.5 text-[hsl(221,44%,41%)]" />
              <span>98% recommend (267 reviews)</span>
            </a>
          </div>

          {/* Trust bullets */}
          <div className="grid grid-cols-2 sm:flex sm:flex-row items-start gap-3 md:gap-5 animate-slide-up" style={{ animationDelay: '0.3s' }}>
            {trustBullets.map((bullet, index) => (
              <div key={index} className="flex items-center gap-2 text-sm font-medium text-foreground">
                <div className="w-8 h-8 rounded-full bg-primary/10 backdrop-blur-sm flex items-center justify-center flex-shrink-0">
                  <bullet.icon className="w-4 h-4 text-primary" />
                </div>
                {bullet.text}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Serving line */}
      <div className="relative pb-4 md:pb-8">
        <div className="container">
          <p className="text-sm text-muted-foreground text-center">
            Serving Żebbuġ, Fgura, and all of Malta since 2020
          </p>
        </div>
      </div>
    </section>
  );
};
