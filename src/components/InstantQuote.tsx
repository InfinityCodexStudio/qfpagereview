import { useState } from 'react';
import { MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { trackEvent, getWhatsAppUrl } from '@/lib/tracking';

const deviceTypes = ['Phone', 'Tablet', 'Laptop', 'Console'];
const issueChips = ['Screen', 'Battery', 'Charging', 'Back glass', 'Water', 'Other'];
const locationChips = ['Żebbuġ', 'Fgura'];

export const InstantQuote = () => {
  const [selectedDevice, setSelectedDevice] = useState('Phone');
  const [selectedIssue, setSelectedIssue] = useState('');
  const [selectedLocation, setSelectedLocation] = useState('');
  const [model, setModel] = useState('');

  const handleQuoteClick = () => {
    trackEvent('whatsapp_click', { source: 'instant_quote' });
    const modelLine = model.trim() ? `\nModel: ${model.trim()}` : '\nModel (if known): [MODEL]';
    const message = `Hi QuickFix, I need a quick quote.\n\nDevice type: ${selectedDevice || '[DEVICE]'}\nIssue: ${selectedIssue || '[ISSUE]'}\nLocation: ${selectedLocation || '[Żebbuġ/Fgura]'}${modelLine}\n\nWhat would it cost and how long would it take?`;
    window.open(getWhatsAppUrl(message), '_blank');
  };

  const chipClass = (selected: boolean) =>
    `px-4 py-2 text-sm font-medium rounded-full border transition-all cursor-pointer ${
      selected
        ? 'bg-primary text-primary-foreground border-primary'
        : 'bg-card text-foreground border-border hover:border-primary'
    }`;

  return (
    <section className="py-12 md:py-16 bg-primary/[0.03]">
      <div className="container">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
            Get an instant quote
          </h2>
          <p className="text-muted-foreground max-w-md mx-auto">
            Choose your device and issue. We'll prefill a WhatsApp message.
          </p>
        </div>

        <div className="bg-card border border-border rounded-xl p-6 md:p-8 max-w-2xl mx-auto shadow-sm">
          {/* Device type */}
          <div className="mb-5">
            <p className="text-sm font-medium text-muted-foreground mb-2">Device</p>
            <div className="flex flex-wrap gap-2">
              {deviceTypes.map((d) => (
                <button key={d} onClick={() => setSelectedDevice(d)} className={chipClass(selectedDevice === d)}>
                  {d}
                </button>
              ))}
            </div>
          </div>

          {/* Issue */}
          <div className="mb-5">
            <p className="text-sm font-medium text-muted-foreground mb-2">Issue</p>
            <div className="flex flex-wrap gap-2">
              {issueChips.map((i) => (
                <button key={i} onClick={() => setSelectedIssue(i)} className={chipClass(selectedIssue === i)}>
                  {i}
                </button>
              ))}
            </div>
          </div>

          {/* Location */}
          <div className="mb-5">
            <p className="text-sm font-medium text-muted-foreground mb-2">Location</p>
            <div className="flex flex-wrap gap-2">
              {locationChips.map((l) => (
                <button key={l} onClick={() => setSelectedLocation(l)} className={chipClass(selectedLocation === l)}>
                  {l}
                </button>
              ))}
            </div>
          </div>

          {/* Model (optional) */}
          <div className="mb-6">
            <p className="text-sm font-medium text-muted-foreground mb-2">Model <span className="text-xs font-normal">(optional)</span></p>
            <input
              type="text"
              value={model}
              onChange={(e) => setModel(e.target.value)}
              placeholder="e.g. iPhone 15, Samsung S24"
              className="w-full px-4 py-2.5 text-sm rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors"
            />
          </div>

          <Button variant="whatsapp" className="w-full" size="lg" onClick={handleQuoteClick}>
            <MessageCircle className="w-4 h-4" />
            Send on WhatsApp
          </Button>
          <p className="text-xs text-muted-foreground mt-3 text-center">
            Fast replies during opening hours.
          </p>
        </div>
      </div>
    </section>
  );
};
