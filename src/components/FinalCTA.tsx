import { MessageCircle, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { trackEvent, getWhatsAppUrl, getPhoneUrl } from '@/lib/tracking';

export const FinalCTA = () => {
  const handleWhatsAppClick = () => {
    trackEvent('whatsapp_click', { source: 'final_cta' });
  };

  const handleCallClick = () => {
    trackEvent('call_click', { source: 'final_cta' });
  };

  return (
    <section className="py-16 md:py-20 bg-primary">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
            Ready to get your device fixed?
          </h2>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
            <Button
              size="xl"
              className="bg-white text-primary hover:bg-white/90 font-semibold"
              asChild
              onClick={handleWhatsAppClick}
            >
              <a href={getWhatsAppUrl()} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-5 h-5" />
                Book a repair on WhatsApp
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white text-white bg-transparent hover:bg-white/10"
              asChild
              onClick={handleCallClick}
            >
              <a href={getPhoneUrl()}>
                <Phone className="w-5 h-5" />
                Call us now
              </a>
            </Button>
          </div>

          <p className="text-primary-foreground/80 text-lg">
            Or walk into our Żebbuġ or Fgura shop, no appointment needed.
          </p>
        </div>
      </div>
    </section>
  );
};
