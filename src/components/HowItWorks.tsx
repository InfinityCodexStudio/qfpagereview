import { MessageSquare, MapPin, Wrench } from 'lucide-react';

const steps = [
  {
    icon: MessageSquare,
    step: '1',
    title: 'Tell us the issue',
    description: 'Call, WhatsApp, or fill in the form. Describe your device and the problem.',
  },
  {
    icon: MapPin,
    step: '2',
    title: 'Choose your shop',
    description: 'Pick Żebbuġ or Fgura. Walk in or book a convenient time.',
  },
  {
    icon: Wrench,
    step: '3',
    title: 'We diagnose & repair',
    description: 'We check your device, give you a clear quote, then fix it. Many repairs done same day.',
  },
];

export const HowItWorks = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container">
        {/* Section header */}
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            How it works
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Simple, transparent, no surprises.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="relative text-center">
              {/* Connector line (hidden on mobile, first two items only) */}
              {index < 2 && (
                <div className="hidden md:block absolute top-10 left-[60%] w-[80%] h-px bg-border" />
              )}
              
              {/* Step number */}
              <div className="relative inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 mb-6">
                <step.icon className="w-8 h-8 text-primary" />
                <span className="absolute -top-1 -right-1 w-7 h-7 rounded-full bg-primary text-primary-foreground text-sm font-bold flex items-center justify-center">
                  {step.step}
                </span>
              </div>

              <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                {step.title}
              </h3>
              <p className="text-sm text-muted-foreground">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
