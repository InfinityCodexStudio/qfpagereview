import { HelpCircle } from 'lucide-react';
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

  // 9 items: 4+4+1 on desktop (md:grid-cols-4). Center last row.
  return (
    <section id="common-fixes" className="py-10 md:py-16 bg-secondary">
      <div className="container">
        <div className="text-center mb-8">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-3">
            Common fixes
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            These are the issues we see most often. Tap a fix to message us on WhatsApp.
          </p>
        </div>

        {/* Use flex-wrap with centered last row */}
        <div className="flex flex-wrap justify-center gap-3 md:gap-4 max-w-4xl mx-auto">
          {fixes.map((fix, index) => (
            <a
              key={index}
              href={getWhatsAppUrlForFix(fix.label)}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => handleFixClick(fix.label)}
              className="group flex flex-col items-center justify-center gap-2 p-4 md:p-5 bg-card rounded-xl border border-border hover:border-primary hover:shadow-md cursor-pointer transition-all text-center w-[calc(50%-6px)] md:w-[calc(25%-12px)]"
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

        <div className="text-center mt-6">
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

        <p className="text-xs text-muted-foreground text-center mt-5 max-w-2xl mx-auto">
          Prices vary by device model and generation. Final quote confirmed before repair. Diagnostic fee waived if you proceed with repair.
        </p>
      </div>
    </section>
  );
};
