import { Smartphone, Monitor, Gamepad2, HardDrive, ArrowRight, Tablet, Laptop } from 'lucide-react';
import { trackEvent, getWhatsAppUrlForFix, getWhatsAppUrlForDataRecovery, getWhatsAppUrlForService } from '@/lib/tracking';

const popularRepairs = [
  { label: 'Screen replacement', price: 'from €70', issue: 'screen replacement' },
  { label: 'Battery replacement', price: 'from €45', issue: 'battery replacement' },
  { label: 'Charging port', price: 'from €40', issue: 'charging port repair' },
  { label: 'Back glass', price: 'from €50', issue: 'back glass replacement' },
  { label: 'Camera / buttons', price: 'Get quote', issue: 'camera or button repair' },
  { label: 'Water damage (diagnostic)', price: '€30', issue: 'water damage diagnostic' },
];

const deviceCategories = [
  { icon: Smartphone, title: 'Smartphones', serviceType: 'smartphone' },
  { icon: Tablet, title: 'Tablets', serviceType: 'tablet' },
  { icon: Laptop, title: 'Laptops', serviceType: 'laptop' },
  { icon: Monitor, title: 'Computers', serviceType: 'computer' },
  { icon: Gamepad2, title: 'Game Consoles', serviceType: 'game console' },
  { icon: HardDrive, title: 'Data Recovery', isDataRecovery: true },
];

export const Services = () => {
  const handleRepairClick = (issue: string) => {
    trackEvent('fix_click', { issue, source: 'popular_repairs' });
  };

  const handleDeviceClick = (service: string) => {
    trackEvent('service_click', { source: service });
  };

  return (
    <section id="services" className="py-12 md:py-18 bg-background">
      <div className="container">
        {/* Popular repairs - lead with problems */}
        <div className="text-center mb-8">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-3">
            Popular repairs
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Tap a repair to message us on WhatsApp for a quick quote.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 max-w-3xl mx-auto mb-14">
          {popularRepairs.map((repair, index) => (
            <a
              key={index}
              href={getWhatsAppUrlForFix(repair.issue)}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => handleRepairClick(repair.issue)}
              className="group flex flex-col items-center justify-center gap-2 p-4 md:p-5 bg-card rounded-xl border border-border hover:border-primary hover:shadow-md cursor-pointer transition-all text-center"
            >
              <span className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                {repair.label}
              </span>
              <span className="text-xs font-semibold text-primary">
                {repair.price}
              </span>
            </a>
          ))}
        </div>

        {/* Devices we repair - secondary */}
        <div className="text-center mb-6">
          <h3 className="font-display text-xl md:text-2xl font-bold text-foreground mb-2">
            Devices we repair
          </h3>
          <p className="text-muted-foreground text-sm max-w-2xl mx-auto">
            From smartphones to game consoles. Professional repairs with quality parts.
          </p>
        </div>

        <div className="grid grid-cols-3 md:grid-cols-6 gap-3 max-w-4xl mx-auto">
          {deviceCategories.map((device, index) => (
            <a
              key={index}
              href={device.isDataRecovery ? getWhatsAppUrlForDataRecovery() : getWhatsAppUrlForService(device.serviceType || device.title)}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => handleDeviceClick(device.title)}
              className="group flex flex-col items-center gap-2 p-4 bg-card rounded-xl border border-border hover:border-primary hover:shadow-md transition-all text-center"
            >
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <device.icon className="w-5 h-5 text-primary" />
              </div>
              <span className="text-xs font-medium text-foreground group-hover:text-primary transition-colors">
                {device.title}
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
