import { MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { trackEvent, getWhatsAppUrl, LOCATIONS } from '@/lib/tracking';

export const FinalCTA = () => {
  return (
    <section className="py-10 md:py-14 bg-primary">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-5">
            Ready to get your device fixed?
          </h2>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-5">
            <Button
              size="xl"
              className="bg-white text-primary hover:bg-white/90 font-semibold"
              asChild
              onClick={() => trackEvent('whatsapp_click', { source: 'final_cta' })}
            >
              <a href={getWhatsAppUrl()} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-5 h-5" />
                WhatsApp for a quick quote
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
