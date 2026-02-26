import { Clock, Shield, Lock, MapPin, Star, MessageCircle, Phone, ShieldCheck } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { trackEvent, getWhatsAppUrl, GOOGLE_REVIEWS_URL, LOCATIONS } from '@/lib/tracking';
import repairBench from '@/assets/repair-bench.png';

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
            Prefer calling? Tap here.
          </a>
          {/* Microcopy */}
          <p className="text-xs text-muted-foreground mb-5 mt-1.5 animate-slide-up" style={{ animationDelay: '0.22s' }}>
            Fast replies during opening hours.
          </p>

          {/* Trust list — stacked on mobile, inline on desktop */}
          <div className="flex flex-col md:flex-row md:flex-wrap md:items-center gap-2 md:gap-x-4 mb-5 animate-slide-up" style={{ animationDelay: '0.25s' }}>
            <a 
              href={GOOGLE_REVIEWS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              <div className="flex items-center gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3 h-3 fill-accent text-accent" />
                ))}
              </div>
              4.9 on Google (120+ reviews)
            </a>
            <span className="text-sm text-muted-foreground flex items-center gap-1.5">
              <Shield className="w-3.5 h-3.5 text-primary" />
              90-day guarantee
            </span>
            <span className="text-sm text-muted-foreground flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-primary" />
              Same-day on most repairs
            </span>
          </div>
        </div>
      </div>

      {/* Insurance report banner */}
      <div className="relative px-4 pb-2 md:pb-4">
        <div className="container">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-4 px-4 py-3 rounded-lg bg-[hsl(120_60%_97%)] border border-[hsl(142_71%_85%)] text-sm">
            <p className="text-muted-foreground">
              <ShieldCheck className="w-4 h-4 text-primary inline-block mr-1.5 shrink-0 -mt-0.5" />
              <span className="font-semibold text-foreground">Need an insurance report?</span>{' '}
              Official device damage assessment: €35 upfront, deducted from your repair if you fix with us.
            </p>
            <a
              href="https://wa.me/35699209313?text=Hi%2C%20I%27d%20like%20to%20request%20an%20insurance%20damage%20report%20for%20my%20device."
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackEvent('whatsapp_click', { source: 'insurance_banner' })}
              className="inline-flex items-center gap-1 shrink-0 px-4 py-1.5 rounded-md border-2 border-primary text-primary text-xs font-semibold hover:bg-primary/5 transition-colors"
            >
              Request Report →
            </a>
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
