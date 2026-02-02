import { Clock, Shield, Lock, MapPin, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { trackEvent, getWhatsAppUrl, GOOGLE_REVIEWS_URL } from '@/lib/tracking';

const trustBullets = [
  { icon: Clock, text: 'Same-day repairs (most jobs)' },
  { icon: Shield, text: '90-day guarantee' },
  { icon: Lock, text: 'Your data stays safe' },
];

export const Hero = () => {
  const handleBookClick = () => {
    trackEvent('whatsapp_click', { source: 'hero_book' });
  };

  const handleDirectionsClick = () => {
    trackEvent('directions_click', { source: 'hero' });
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-primary-light to-background">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, hsl(var(--primary) / 0.1) 1px, transparent 0)`,
          backgroundSize: '32px 32px'
        }} />
      </div>
      
      <div className="container relative section-padding">
        <div className="max-w-3xl mx-auto text-center">
          {/* Location badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card border border-border text-sm font-medium text-muted-foreground mb-6 animate-fade-in">
            <MapPin className="w-4 h-4 text-primary" />
            📍 Two locations: Żebbuġ + Fgura
          </div>

          {/* Headline */}
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-extrabold text-foreground mb-4 animate-slide-up text-balance">
            Cracked screen?{' '}
            <span className="text-primary">Dead battery?</span>
            <br />
            We'll sort it today.
          </h1>

          {/* Subhead */}
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto animate-slide-up" style={{ animationDelay: '0.1s' }}>
            Same-day repairs for most issues. 90-day guarantee on all repairs and parts. Walk in or we come to you.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <Button variant="hero" size="xl" asChild onClick={handleBookClick}>
              <a href={getWhatsAppUrl()} target="_blank" rel="noopener noreferrer">
                Book a repair
              </a>
            </Button>
            <Button variant="heroSecondary" size="lg" asChild onClick={handleDirectionsClick}>
              <a href="#locations">
                <MapPin className="w-5 h-5" />
                Get directions
              </a>
            </Button>
          </div>

          {/* Trust bullets */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-8 mb-6 animate-slide-up" style={{ animationDelay: '0.3s' }}>
            {trustBullets.map((bullet, index) => (
              <div key={index} className="flex items-center gap-2 text-sm font-medium text-foreground">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                  <bullet.icon className="w-4 h-4 text-primary" />
                </div>
                {bullet.text}
              </div>
            ))}
          </div>

          {/* Google Reviews */}
          <a 
            href={GOOGLE_REVIEWS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors animate-slide-up"
            style={{ animationDelay: '0.4s' }}
          >
            <div className="flex items-center gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-accent text-accent" />
              ))}
            </div>
            <span>4.9 from 120+ Google reviews</span>
          </a>

          {/* Local touch */}
          <p className="text-sm text-muted-foreground mt-4 animate-slide-up" style={{ animationDelay: '0.5s' }}>
            Serving Żebbuġ, Fgura, and all of Malta since 2020
          </p>
        </div>
      </div>
    </section>
  );
};