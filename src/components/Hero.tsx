import { useState } from 'react';
import { Clock, Shield, Lock, MapPin, Star, MessageCircle, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { trackEvent, getWhatsAppUrl, getWhatsAppUrlForQuote, GOOGLE_REVIEWS_URL, LOCATIONS } from '@/lib/tracking';

const trustBullets = [
  { icon: Clock, text: 'Same-day on many repairs' },
  { icon: Shield, text: '90-day guarantee' },
  { icon: Lock, text: 'Your data stays safe' },
];

const deviceTypes = ['Phone', 'Tablet', 'Laptop', 'Console'];
const issueChips = ['Screen', 'Battery', 'Charging', 'Back glass', 'Water', 'Other'];
const locationChips = ['Żebbuġ', 'Fgura'];

export const Hero = () => {
  const [selectedDevice, setSelectedDevice] = useState('');
  const [selectedIssue, setSelectedIssue] = useState('');
  const [selectedLocation, setSelectedLocation] = useState('');

  const handleWhatsAppClick = () => {
    trackEvent('whatsapp_click', { source: 'hero_primary' });
  };

  const handleQuoteClick = () => {
    trackEvent('whatsapp_click', { source: 'hero_instant_quote' });
    const url = getWhatsAppUrlForQuote(
      selectedDevice || '[DEVICE]',
      selectedIssue || '[ISSUE]',
      selectedLocation || '[Żebbuġ/Fgura]'
    );
    window.open(url, '_blank');
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-primary-light to-background">
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, hsl(var(--primary) / 0.1) 1px, transparent 0)`,
          backgroundSize: '32px 32px'
        }} />
      </div>
      
      <div className="container relative py-12 md:py-18">
        <div className="max-w-3xl mx-auto text-center">
          {/* Location badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card border border-border text-sm font-medium text-muted-foreground mb-5 animate-fade-in">
            <MapPin className="w-4 h-4 text-primary" />
            Two locations: Żebbuġ + Fgura
          </div>

          {/* Headline */}
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-extrabold text-foreground mb-4 animate-slide-up text-balance">
            Cracked screen?{' '}
            <span className="text-primary">Dead battery?</span>
          </h1>

          {/* Subhead */}
          <p className="text-lg md:text-xl text-muted-foreground mb-6 max-w-2xl mx-auto animate-slide-up" style={{ animationDelay: '0.1s' }}>
            Same-day on many repairs. Depends on parts and device condition. 90-day guarantee on all repairs. Walk in or we come to you.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-8 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <Button variant="whatsapp" size="xl" asChild onClick={handleWhatsAppClick}>
              <a href={getWhatsAppUrl()} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-5 h-5" />
                WhatsApp for a quick quote
              </a>
            </Button>
            <div className="flex items-center gap-3">
              <Button variant="cta" size="lg" asChild>
                <a href={LOCATIONS.zebbug.phoneUrl} onClick={() => trackEvent('call_click', { source: 'hero' })}>
                  <Phone className="w-5 h-5" />
                  Call
                </a>
              </Button>
              <Button variant="heroSecondary" size="lg" asChild onClick={() => trackEvent('directions_click', { source: 'hero' })}>
                <a href="#locations">
                  <MapPin className="w-5 h-5" />
                  Get directions
                </a>
              </Button>
            </div>
          </div>

          {/* Instant Quote micro-block */}
          <div className="bg-card border border-border rounded-xl p-5 max-w-lg mx-auto mb-8 animate-slide-up text-left" style={{ animationDelay: '0.25s' }}>
            <p className="text-sm font-semibold text-foreground mb-3 text-center">Instant quote</p>
            
            {/* Device type */}
            <div className="mb-3">
              <p className="text-xs text-muted-foreground mb-1.5">Device</p>
              <div className="flex flex-wrap gap-2">
                {deviceTypes.map((d) => (
                  <button
                    key={d}
                    onClick={() => setSelectedDevice(d)}
                    className={`px-3 py-1.5 text-xs font-medium rounded-full border transition-all cursor-pointer ${
                      selectedDevice === d
                        ? 'bg-primary text-primary-foreground border-primary'
                        : 'bg-card text-foreground border-border hover:border-primary'
                    }`}
                  >
                    {d}
                  </button>
                ))}
              </div>
            </div>

            {/* Issue */}
            <div className="mb-3">
              <p className="text-xs text-muted-foreground mb-1.5">Issue</p>
              <div className="flex flex-wrap gap-2">
                {issueChips.map((i) => (
                  <button
                    key={i}
                    onClick={() => setSelectedIssue(i)}
                    className={`px-3 py-1.5 text-xs font-medium rounded-full border transition-all cursor-pointer ${
                      selectedIssue === i
                        ? 'bg-primary text-primary-foreground border-primary'
                        : 'bg-card text-foreground border-border hover:border-primary'
                    }`}
                  >
                    {i}
                  </button>
                ))}
              </div>
            </div>

            {/* Location */}
            <div className="mb-4">
              <p className="text-xs text-muted-foreground mb-1.5">Location</p>
              <div className="flex flex-wrap gap-2">
                {locationChips.map((l) => (
                  <button
                    key={l}
                    onClick={() => setSelectedLocation(l)}
                    className={`px-3 py-1.5 text-xs font-medium rounded-full border transition-all cursor-pointer ${
                      selectedLocation === l
                        ? 'bg-primary text-primary-foreground border-primary'
                        : 'bg-card text-foreground border-border hover:border-primary'
                    }`}
                  >
                    {l}
                  </button>
                ))}
              </div>
            </div>

            <Button variant="whatsapp" className="w-full" onClick={handleQuoteClick}>
              <MessageCircle className="w-4 h-4" />
              Send on WhatsApp
            </Button>
          </div>

          {/* Trust bullets */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-8 mb-4 animate-slide-up" style={{ animationDelay: '0.3s' }}>
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
          <p className="text-sm text-muted-foreground mt-3 animate-slide-up" style={{ animationDelay: '0.5s' }}>
            Serving Żebbuġ, Fgura, and all of Malta since 2020
          </p>
        </div>
      </div>
    </section>
  );
};
