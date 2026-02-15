import { Smartphone, Monitor, Gamepad2, HardDrive, Tablet, Laptop, HelpCircle } from 'lucide-react';
import { trackEvent, getWhatsAppUrlForFix, getWhatsAppUrlForDataRecovery, getWhatsAppUrlForService, getWhatsAppUrl } from '@/lib/tracking';

const fixes = [
  { label: 'Screen replacement', price: 'from €70', issue: 'screen replacement' },
  { label: 'Battery replacement', price: 'from €45', issue: 'battery replacement' },
  { label: 'Charging port', price: 'from €40', issue: 'charging port repair' },
  { label: 'Back glass', price: 'from €50', issue: 'back glass replacement' },
  { label: 'Speaker / microphone', price: 'from €40', issue: 'speaker or microphone repair' },
  { label: 'Water damage', price: '€30 diagnostic', issue: 'water damage diagnostic' },
  { label: 'Motherboard / diagnostics', price: '€30 diagnostic', issue: 'motherboard or diagnostic' },
  { label: 'Data recovery', price: 'Get quote', issue: 'data recovery', isDataRecovery: true },
];

const deviceCategories = [
  { icon: Smartphone, title: 'Smartphones', serviceType: 'smartphone' },
  { icon: Tablet, title: 'Tablets', serviceType: 'tablet' },
  { icon: Laptop, title: 'Laptops', serviceType: 'laptop' },
  { icon: Monitor, title: 'Computers', serviceType: 'computer' },
  { icon: Gamepad2, title: 'Consoles', serviceType: 'game console' },
  { icon: HardDrive, title: 'Data Recovery', isDataRecovery: true },
];

export const Services = () => {
  const handleFixClick = (issue: string) => {
    trackEvent('fix_click', { issue, source: 'what_needs_fixed' });
  };

  const handleDeviceClick = (service: string) => {
    trackEvent('service_click', { source: service });
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
            Tap a repair to message us on WhatsApp for a quick quote.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-3xl mx-auto">
          {fixes.map((fix, index) => (
            <a
              key={index}
              href={fix.isDataRecovery ? getWhatsAppUrlForDataRecovery() : getWhatsAppUrlForFix(fix.issue)}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => handleFixClick(fix.issue)}
              className="group flex flex-col items-center justify-center gap-1.5 p-4 bg-card rounded-xl border border-border hover:border-primary hover:shadow-md cursor-pointer transition-all text-center"
            >
              <span className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                {fix.label}
              </span>
              <span className="text-xs font-semibold text-primary">
                {fix.price}
              </span>
            </a>
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
          Prices vary by device model and generation. Final quote confirmed before repair. Diagnostic fee waived if you proceed with repair.
        </p>

        {/* Devices we repair — compact strip */}
        <div className="mt-10 text-center">
          <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-4">
            Devices we repair
          </h3>
          <div className="flex flex-wrap justify-center gap-3 max-w-2xl mx-auto">
            {deviceCategories.map((device, index) => (
              <a
                key={index}
                href={device.isDataRecovery ? getWhatsAppUrlForDataRecovery() : getWhatsAppUrlForService(device.serviceType || device.title)}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => handleDeviceClick(device.title)}
                className="group inline-flex items-center gap-2 px-4 py-2 bg-card rounded-full border border-border hover:border-primary transition-all text-sm font-medium text-foreground hover:text-primary"
              >
                <device.icon className="w-4 h-4 text-primary" />
                {device.title}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
