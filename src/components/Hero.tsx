import { useState } from 'react';
import { Clock, Shield, Lock, MapPin, Star, MessageCircle, Phone, ThumbsUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { trackEvent, getWhatsAppUrl, getWhatsAppUrlForQuote, GOOGLE_REVIEWS_URL, LOCATIONS } from '@/lib/tracking';
import repairBench from '@/assets/repair-bench.png';

const FACEBOOK_REVIEWS_URL = 'https://www.facebook.com/quickfixmalta/reviews';

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
    <section className="relative overflow-hidden">
      {/* Background image */}
      <img
        src={repairBench}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover object-[right_center] md:object-[75%_80%]"
        style={{ objectPosition: undefined }}
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

      <div className="container relative py-14 md:py-20 lg:py-24" style={{ minHeight: 'min(720px, 85vh)' }}>
        <div className="max-w-xl lg:max-w-[600px] text-left">
          {/* Location badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card/80 backdrop-blur-sm border border-border text-sm font-medium text-muted-foreground mb-5 animate-fade-in">
            <MapPin className="w-4 h-4 text-primary" />
            Two locations: Żebbuġ + Fgura
          </div>

          {/* Headline */}
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-extrabold text-foreground mb-4 animate-slide-up text-balance">
            Cracked screen?{' '}
            <span className="text-primary">Dead battery?</span>
          </h1>

          {/* Subhead */}
          <p className="text-lg md:text-xl text-muted-foreground mb-6 max-w-lg animate-slide-up" style={{ animationDelay: '0.1s' }}>
            Same-day on many repairs. Depends on parts and device condition. 90-day guarantee on all repairs. Walk in or we come to you.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-start gap-3 mb-2 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <Button variant="whatsapp" size="xl" asChild onClick={handleWhatsAppClick}>
              <a href={getWhatsAppUrl()} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-5 h-5" />
                WhatsApp for a quick quote
              </a>
            </Button>
            <Button variant="cta" size="lg" asChild>
              <a href={LOCATIONS.zebbug.phoneUrl} onClick={() => trackEvent('call_click', { source: 'hero' })}>
                <Phone className="w-5 h-5" />
                Call us
              </a>
            </Button>
          </div>
          {/* Microcopy */}
          <p className="text-xs text-muted-foreground mb-6 animate-slide-up" style={{ animationDelay: '0.22s' }}>
            Fast replies during opening hours.
          </p>

          {/* Social proof badges */}
          <div className="flex flex-col sm:flex-row items-start gap-4 mb-8 animate-slide-up" style={{ animationDelay: '0.25s' }}>
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
          <div className="flex flex-col sm:flex-row items-start gap-4 md:gap-6 animate-slide-up" style={{ animationDelay: '0.3s' }}>
            {trustBullets.map((bullet, index) => (
              <div key={index} className="flex items-center gap-2 text-sm font-medium text-foreground">
                <div className="w-8 h-8 rounded-full bg-primary/10 backdrop-blur-sm flex items-center justify-center">
                  <bullet.icon className="w-4 h-4 text-primary" />
                </div>
                {bullet.text}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Instant Quote card: overlaps hero bottom on desktop */}
      <div className="relative md:-mt-16 z-10">
        <div className="container pb-8 md:pb-12">
          <div className="bg-card border border-border rounded-xl p-5 max-w-lg mx-auto text-left shadow-lg">
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

          {/* Local touch */}
          <p className="text-sm text-muted-foreground mt-4 text-center">
            Serving Żebbuġ, Fgura, and all of Malta since 2020
          </p>
        </div>
      </div>
    </section>
  );
};
