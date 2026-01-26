import { Smartphone, Tablet, Laptop, Monitor, Gamepad2, ArrowRight } from 'lucide-react';
import { trackEvent } from '@/lib/tracking';

const services = [
  {
    icon: Smartphone,
    title: 'Smartphones',
    description: 'iPhone, Samsung, Huawei, Xiaomi, and more. Screen, battery, port repairs.',
  },
  {
    icon: Tablet,
    title: 'Tablets',
    description: 'iPad and Android tablets. Screen replacements and battery fixes.',
  },
  {
    icon: Laptop,
    title: 'Laptops',
    description: 'All brands. Screen, keyboard, battery, and hardware repairs.',
  },
  {
    icon: Monitor,
    title: 'Computers',
    description: 'Desktop repairs, upgrades, and diagnostics.',
  },
  {
    icon: Gamepad2,
    title: 'Game Consoles',
    description: 'PlayStation, Xbox, Nintendo. HDMI, disc drive, controller fixes.',
  },
];

export const Services = () => {
  const handleServiceClick = (service: string) => {
    trackEvent('service_click', { source: service });
  };

  return (
    <section id="services" className="section-padding bg-background">
      <div className="container">
        {/* Section header */}
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            What we repair
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            From smartphones to game consoles. Professional repairs with quality parts.
          </p>
        </div>

        {/* Service grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {services.map((service, index) => (
            <a
              key={index}
              href="#book"
              onClick={() => handleServiceClick(service.title)}
              className="group p-6 bg-card rounded-xl border border-border card-hover"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <service.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                {service.title}
              </h3>
              <p className="text-sm text-muted-foreground mb-4">
                {service.description}
              </p>
              <span className="inline-flex items-center text-sm font-medium text-primary group-hover:gap-2 transition-all">
                Learn more
                <ArrowRight className="w-4 h-4 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
