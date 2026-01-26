import { 
  Smartphone, 
  Battery, 
  PlugZap, 
  Volume2, 
  Camera, 
  SquareMousePointer, 
  Droplets, 
  Cpu,
  HelpCircle
} from 'lucide-react';

const fixes = [
  { icon: Smartphone, label: 'Screen replacement' },
  { icon: Battery, label: 'Battery replacement' },
  { icon: PlugZap, label: 'Charging port' },
  { icon: Volume2, label: 'Speaker / microphone' },
  { icon: Camera, label: 'Camera issues' },
  { icon: SquareMousePointer, label: 'Buttons' },
  { icon: Droplets, label: 'Water damage' },
  { icon: Cpu, label: 'Motherboard / diagnostics' },
];

export const CommonFixes = () => {
  return (
    <section id="common-fixes" className="section-padding bg-secondary/50">
      <div className="container">
        {/* Section header */}
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Common fixes
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            These are the issues we see most often. Quick turnaround on most repairs.
          </p>
        </div>

        {/* Fixes grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
          {fixes.map((fix, index) => (
            <div
              key={index}
              className="flex items-center gap-3 p-4 bg-card rounded-lg border border-border hover:border-primary/30 hover:shadow-sm transition-all"
            >
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                <fix.icon className="w-5 h-5 text-primary" />
              </div>
              <span className="text-sm font-medium text-foreground">
                {fix.label}
              </span>
            </div>
          ))}
        </div>

        {/* Not listed */}
        <div className="text-center mt-8">
          <a 
            href="#book" 
            className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors"
          >
            <HelpCircle className="w-4 h-4" />
            Issue not listed? Ask us.
          </a>
        </div>
      </div>
    </section>
  );
};
