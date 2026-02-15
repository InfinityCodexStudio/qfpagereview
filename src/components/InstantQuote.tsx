import { useState } from 'react';
import { MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { trackEvent, getWhatsAppUrl } from '@/lib/tracking';

const deviceTypes = ['Phone', 'Tablet', 'Laptop', 'Console'];
const issueChips = ['Screen', 'Battery', 'Charging', 'Back glass', 'Water', 'Other'];
const locationChips = ['Żebbuġ', 'Fgura'];
const speedOptions = [
  { label: 'Standard', note: '24–48 hrs' },
  { label: 'Same-Day Priority', note: '+€15' },
  { label: 'Pickup', note: '€15/€30' },
];

export const InstantQuote = () => {
  const [selectedDevice, setSelectedDevice] = useState('Phone');
  const [selectedIssue, setSelectedIssue] = useState('');
  const [selectedLocation, setSelectedLocation] = useState('');
  const [selectedSpeed, setSelectedSpeed] = useState('');
  const [brand, setBrand] = useState('');
  const [model, setModel] = useState('');

  const handleQuoteClick = () => {
    trackEvent('whatsapp_click', { source: 'instant_estimate' });
    const brandLine = brand.trim() ? `\nBrand: ${brand.trim()}` : '';
    const modelLine = model.trim() ? `\nModel: ${model.trim()}` : '';
    const speedLine = selectedSpeed ? `\nSpeed: ${selectedSpeed}` : '';
    const message = `Hi QuickFix, I need a quick estimate.\n\nDevice type: ${selectedDevice || '[DEVICE]'}\nIssue: ${selectedIssue || '[ISSUE]'}\nLocation: ${selectedLocation || '[Żebbuġ/Fgura]'}${brandLine}${modelLine}${speedLine}\n\nWhat would it cost and how long would it take?`;
    window.open(getWhatsAppUrl(message), '_blank');
  };

  const chipClass = (selected: boolean) =>
    `px-4 py-2.5 text-sm font-medium rounded-full border transition-all cursor-pointer ${
      selected
        ? 'bg-primary text-primary-foreground border-primary'
        : 'bg-card text-foreground border-border hover:border-primary'
    }`;

  return (
    <section className="py-10 md:py-14 bg-primary/[0.03]">
      <div className="container">
        <div className="text-center mb-6">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
            Instant estimate <span className="text-muted-foreground font-normal text-lg">(30 sec)</span>
          </h2>
          <p className="text-muted-foreground max-w-md mx-auto">
            Choose your device and issue. We'll prefill a WhatsApp message.
          </p>
        </div>

        <div className="bg-card border border-border rounded-xl p-5 md:p-8 max-w-2xl mx-auto shadow-sm">
          {/* Device type */}
          <div className="mb-4">
            <p className="text-sm font-medium text-muted-foreground mb-2">Device</p>
            <div className="flex flex-wrap gap-2">
              {deviceTypes.map((d) => (
                <button key={d} onClick={() => setSelectedDevice(d)} className={chipClass(selectedDevice === d)}>
                  {d}
                </button>
              ))}
            </div>
          </div>

          {/* Brand + Model */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
            <div>
              <p className="text-sm font-medium text-muted-foreground mb-2">Brand <span className="text-xs font-normal">(optional)</span></p>
              <input
                type="text"
                value={brand}
                onChange={(e) => setBrand(e.target.value)}
                placeholder="e.g. Apple, Samsung"
                className="w-full px-4 py-2.5 text-sm rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors"
              />
            </div>
            <div>
              <p className="text-sm font-medium text-muted-foreground mb-2">Model <span className="text-xs font-normal">(optional)</span></p>
              <input
                type="text"
                value={model}
                onChange={(e) => setModel(e.target.value)}
                placeholder="e.g. iPhone 15, Galaxy S24"
                className="w-full px-4 py-2.5 text-sm rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors"
              />
            </div>
          </div>

          {/* Issue */}
          <div className="mb-4">
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
          <div className="mb-4">
            <p className="text-sm font-medium text-muted-foreground mb-2">Location</p>
            <div className="flex flex-wrap gap-2">
              {locationChips.map((l) => (
                <button key={l} onClick={() => setSelectedLocation(l)} className={chipClass(selectedLocation === l)}>
                  {l}
                </button>
              ))}
            </div>
          </div>

          {/* Speed */}
          <div className="mb-5">
            <p className="text-sm font-medium text-muted-foreground mb-2">Speed</p>
            <div className="flex flex-wrap gap-2">
              {speedOptions.map((s) => (
                <button key={s.label} onClick={() => setSelectedSpeed(s.label)} className={chipClass(selectedSpeed === s.label)}>
                  {s.label} <span className="text-xs opacity-70 ml-1">{s.note}</span>
                </button>
              ))}
            </div>
          </div>

          <Button variant="whatsapp" className="w-full" size="lg" onClick={handleQuoteClick}>
            <MessageCircle className="w-4 h-4" />
            Send estimate on WhatsApp
          </Button>
          <p className="text-xs text-muted-foreground mt-2.5 text-center">
            Fast replies during opening hours. Estimate only, final quote confirmed before repair.
          </p>
        </div>
      </div>
    </section>
  );
};
