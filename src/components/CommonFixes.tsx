import { HelpCircle, MessageCircle } from 'lucide-react';
import { trackEvent, getWhatsAppUrlForFix, getWhatsAppUrl } from '@/lib/tracking';

const fixes = [
  { label: 'Screen replacement', price: 'from €70' },
  { label: 'Battery replacement', price: 'from €45' },
  { label: 'Charging port', price: 'from €40' },
  { label: 'Speaker / microphone', price: 'from €40' },
  { label: 'Back glass', price: 'from €50' },
  { label: 'Camera issues', price: 'Get quote' },
  { label: 'Buttons', price: 'Get quote' },
  { label: 'Water damage', price: '€30 diagnostic' },
  { label: 'Motherboard / diagnostics', price: '€30 diagnostic' },
];

export const CommonFixes = () => {
  const handleFixClick = (issue: string) => {
    trackEvent('fix_click', { issue, source: 'common_fixes' });
  };

  return (
    <section id="common-fixes" className="section-padding bg-secondary">
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
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 max-w-4xl mx-auto">
          {fixes.map((fix, index) => (
            <a
              key={index}
              href={getWhatsAppUrlForFix(fix.label)}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => handleFixClick(fix.label)}
              className="group flex flex-col items-center justify-center gap-2 p-4 md:p-5 bg-card rounded-xl border border-border hover:border-primary hover:shadow-md transition-all text-center"
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

        {/* Not listed */}
        <div className="text-center mt-8">
          <a 
            href={getWhatsAppUrl("Hi, I have an issue that's not listed. My device is [] and the problem is [].")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors"
          >
            <HelpCircle className="w-4 h-4" />
            Issue not listed? Ask us.
          </a>
        </div>

        {/* Disclaimer */}
        <p className="text-xs text-muted-foreground text-center mt-6 max-w-2xl mx-auto">
          Prices vary by device model and generation. Final quote confirmed before repair. Diagnostic fee waived if you proceed with repair.
        </p>
      </div>
    </section>
  );
};