import { useState } from 'react';
import { chipClass } from '@/lib/chipClass';
import { Smartphone, Monitor, Gamepad2, HardDrive, Tablet, Laptop, HelpCircle, MessageCircle, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Drawer, DrawerContent, DrawerHeader, DrawerTitle, DrawerClose } from '@/components/ui/drawer';
import { trackEvent, getWhatsAppUrl, getWhatsAppUrlForDataRecovery } from '@/lib/tracking';

const fixes = [
  { label: 'Screen replacement', price: 'from €70', issue: 'screen replacement' },
  { label: 'Battery replacement', price: 'from €45', issue: 'battery replacement' },
  { label: 'Charging port', price: 'from €40', issue: 'charging port repair' },
  { label: 'Back glass', price: 'from €50', issue: 'back glass replacement' },
  { label: 'Speaker / microphone', price: 'from €40', issue: 'speaker or microphone repair' },
  { label: 'Camera', price: 'from €40', issue: 'camera repair' },
  { label: 'Water damage', price: '€30 diagnostic', issue: 'water damage diagnostic' },
  { label: 'Data recovery', price: 'Get quote', issue: 'data recovery', isDataRecovery: true },
];

const deviceCategories = [
  { icon: Smartphone, title: 'Smartphones', serviceType: 'smartphone' },
  { icon: Tablet, title: 'Tablets', serviceType: 'tablet' },
  { icon: Laptop, title: 'Laptops', serviceType: 'laptop' },
  { icon: Monitor, title: 'Computers', serviceType: 'computer' },
  { icon: Gamepad2, title: 'Consoles', serviceType: 'game console' },
  { icon: HardDrive, title: 'Data Recovery', serviceType: 'data recovery' },
];

const locationOptions = ['Żebbuġ', 'Fgura'];
const speedOptions = [
  { label: 'Standard', note: '24–48 hrs' },
  { label: 'Same-Day', note: '+€15' },
];
const pickupOptions = [
  { label: 'No pickup', value: '' },
  { label: 'One-way', value: 'One-way pickup (€15)', note: '€15' },
  { label: 'Round trip', value: 'Round trip pickup & delivery (€30)', note: '€30' },
];

export const Services = () => {
  const [selectedFix, setSelectedFix] = useState<typeof fixes[0] | null>(null);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [location, setLocation] = useState('');
  const [speed, setSpeed] = useState('Standard');
  const [pickup, setPickup] = useState('');
  const [model, setModel] = useState('');

  const handleFixClick = (fix: typeof fixes[0]) => {
    trackEvent('fix_click', { issue: fix.issue, source: 'what_needs_fixed' });
    if (fix.isDataRecovery) {
      window.open(getWhatsAppUrlForDataRecovery(), '_blank');
      return;
    }
    setSelectedFix(fix);
    setLocation('');
    setSpeed('Standard');
    setPickup('');
    setModel('');
    setDrawerOpen(true);
  };

  const handleSendWhatsApp = () => {
    if (!selectedFix) return;
    trackEvent('whatsapp_click', { source: 'repair_sheet', issue: selectedFix.issue });
    const modelLine = model.trim() ? `\nDevice: ${model.trim()}` : '';
    const locationLine = location ? `\nLocation: ${location}` : '';
    const speedLine = `\nSpeed: ${speed}`;
    const pickupLine = pickup ? `\nPickup: ${pickup}` : '';
    const message = `Hi QuickFix, I need a ${selectedFix.issue}.${modelLine}${locationLine}${speedLine}${pickupLine}\n\nPlease confirm the final quote and earliest availability. Thanks.`;
    window.open(getWhatsAppUrl(message), '_blank');
    setDrawerOpen(false);
  };


  return (
    <section id="services" className="py-10 md:py-16 bg-secondary">
      <div className="container">
        {/* What do you need fixed? */}
        <div className="text-center mb-6">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-2">
            What do you need fixed?
          </h2>
          <p className="text-muted-foreground text-base max-w-2xl mx-auto">
            Tap a repair to get started.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-3xl mx-auto">
          {fixes.map((fix, index) => (
            <button
              key={index}
              onClick={() => handleFixClick(fix)}
              className="group flex flex-col items-center justify-center gap-1.5 p-4 bg-card rounded-xl border border-border hover:border-primary hover:shadow-md cursor-pointer transition-all text-center"
            >
              <span className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                {fix.label}
              </span>
              <span className="text-xs font-semibold text-primary">
                {fix.price}
              </span>
            </button>
          ))}
        </div>

        <div className="text-center mt-5">
          <a
            href={getWhatsAppUrl("Hi QuickFix, I have an issue that's not listed. My device is [MODEL] and the problem is [DESCRIBE].")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors"
          >
            <HelpCircle className="w-4 h-4" />
            Issue not listed? Ask us.
          </a>
        </div>

        <p className="text-xs text-muted-foreground text-center mt-4 max-w-2xl mx-auto">
          Final quote depends on model and parts. Diagnostic fee waived if you proceed with repair.
        </p>

        {/* Devices we repair — compact strip */}
        <div className="mt-8 text-center">
          <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-3">
            Devices we repair
          </h3>
          <div className="flex flex-wrap justify-center gap-2 max-w-2xl mx-auto">
            {deviceCategories.map((device, index) => (
              <span
                key={index}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-muted-foreground"
              >
                <device.icon className="w-3.5 h-3.5 text-primary" />
                {device.title}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom sheet for repair details */}
      <Drawer open={drawerOpen} onOpenChange={setDrawerOpen}>
        <DrawerContent className="max-h-[85vh]">
          <DrawerHeader className="text-left pb-2">
            <DrawerTitle className="text-lg font-bold text-foreground">
              {selectedFix?.label}
            </DrawerTitle>
            <p className="text-sm text-primary font-semibold">{selectedFix?.price}</p>
            <p className="text-xs text-muted-foreground mt-1">
              Final quote depends on model and parts.
            </p>
          </DrawerHeader>

          <div className="px-4 pb-6 space-y-4 overflow-y-auto">
            {/* Location */}
            <div>
              <p className="text-sm font-medium text-muted-foreground mb-2">Location</p>
              <div className="flex gap-2" data-vaul-no-drag>
                {locationOptions.map((l) => (
                  <button type="button" key={l} onClick={() => setLocation(l)} className={chipClass(location === l)}>
                    {l}
                  </button>
                ))}
              </div>
            </div>

            {/* Speed */}
            <div>
              <p className="text-sm font-medium text-muted-foreground mb-2">Speed</p>
              <div className="flex gap-2">
                {speedOptions.map((s) => (
                  <button key={s.label} onClick={() => setSpeed(s.label)} className={chipClass(speed === s.label)}>
                    {s.label} <span className="text-xs opacity-70 ml-1">{s.note}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Pickup */}
            <div>
              <p className="text-sm font-medium text-muted-foreground mb-2">Pickup</p>
              <div className="flex flex-wrap gap-2">
                {pickupOptions.map((p) => (
                  <button key={p.label} onClick={() => setPickup(p.value)} className={chipClass(pickup === p.value)}>
                    {p.label} {p.note && <span className="text-xs opacity-70 ml-1">{p.note}</span>}
                  </button>
                ))}
              </div>
            </div>

            {/* Brand/Model */}
            <div>
              <p className="text-sm font-medium text-muted-foreground mb-2">Brand / Model <span className="text-xs font-normal">(optional)</span></p>
              <input
                type="text"
                value={model}
                onChange={(e) => setModel(e.target.value)}
                placeholder="e.g. iPhone 15, Galaxy S24"
                className="w-full px-4 py-2.5 text-base rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors"
              />
            </div>

            <Button variant="whatsapp" size="lg" className="w-full" onClick={handleSendWhatsApp}>
              <MessageCircle className="w-4 h-4" />
              Send on WhatsApp
            </Button>
          </div>
        </DrawerContent>
      </Drawer>
    </section>
  );
};

export default Services;
