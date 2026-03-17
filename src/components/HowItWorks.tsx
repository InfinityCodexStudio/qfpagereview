const steps = [
  {
    step: '1',
    emoji: '💬',
    title: 'Tell us the issue',
    description: 'WhatsApp, call, or fill in the form. Describe your device and the problem.',
  },
  {
    step: '2',
    emoji: '📍',
    title: 'Visit or we collect',
    description: 'Walk into Żebbuġ or Fgura, or we collect from anywhere in Malta.',
  },
  {
    step: '3',
    emoji: '🔧',
    title: 'We diagnose and repair',
    description: 'We check your device, give you a clear quote, then fix it. Many repairs done same day.',
  },
];

export const HowItWorks = () => {
  return (
    <section className="py-10 md:py-14 bg-background">
      <div className="container">
        <div className="text-center mb-6">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-3">
            How it works
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Simple, transparent, no surprises.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-4xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="relative text-center">
              {index < 2 && (
                <div className="hidden md:block absolute top-10 left-[60%] w-[80%] h-px bg-border" />
              )}
              
              <div className="relative inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                <span className="text-2xl">{step.emoji}</span>
                <span className="absolute -top-1 -right-1 w-6 h-6 rounded-full bg-primary text-primary-foreground text-xs font-bold flex items-center justify-center">
                  {step.step}
                </span>
              </div>

              <h3 className="font-display text-lg font-semibold text-foreground mb-2">{step.title}</h3>
              <p className="text-sm text-muted-foreground">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
