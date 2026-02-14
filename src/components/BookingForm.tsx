import { useState } from 'react';
import { Send, MessageCircle, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { trackEvent, getWhatsAppUrl } from '@/lib/tracking';
import { useToast } from '@/hooks/use-toast';

const issues = [
  { value: 'screen', label: 'Screen replacement' },
  { value: 'battery', label: 'Battery replacement' },
  { value: 'charging', label: 'Charging port' },
  { value: 'speaker', label: 'Speaker / microphone' },
  { value: 'camera', label: 'Camera issues' },
  { value: 'buttons', label: 'Buttons' },
  { value: 'water', label: 'Water damage' },
  { value: 'data', label: 'Data recovery' },
  { value: 'backglass', label: 'Back glass' },
  { value: 'other', label: 'Other issue' },
];

export const BookingForm = () => {
  const { toast } = useToast();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    issue: '',
    brandModel: '',
    notes: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    trackEvent('form_submit', { issue: formData.issue });
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  const handleWhatsAppFallback = () => {
    const message = `Hi QuickFix, I'd like to book a repair.\n\nName: ${formData.name}\nDevice: ${formData.brandModel}\nIssue: ${formData.issue}\n\nThanks!`;
    trackEvent('whatsapp_click', { source: 'form_fallback' });
    window.open(getWhatsAppUrl(message), '_blank');
  };

  if (isSubmitted) {
    return (
      <section id="book" className="py-12 md:py-18 bg-secondary">
        <div className="container">
          <div className="max-w-xl mx-auto text-center p-8 bg-card rounded-xl border border-border">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-8 h-8 text-primary" />
            </div>
            <h2 className="font-display text-2xl font-bold text-foreground mb-4">
              Request received!
            </h2>
            <p className="text-muted-foreground mb-2">
              Thanks {formData.name}. We'll contact you within 1 hour during business hours.
            </p>
            <p className="text-sm text-muted-foreground mb-6">
              (Mon-Fri 10am-7pm, Sat 10am-2pm)
            </p>
            <Button variant="whatsapp" size="lg" onClick={handleWhatsAppFallback}>
              <MessageCircle className="w-5 h-5" />
              Or WhatsApp us now (fastest)
            </Button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="book" className="py-12 md:py-18 bg-secondary">
      <div className="container">
        <div className="text-center mb-8">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-3">
            Prefer a form?
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Fill in your details and we'll get back to you within 1 hour during business hours.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
          <div className="bg-card rounded-xl border border-border p-6 md:p-8 space-y-5">
            {/* Name & Phone */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="name">Your name *</Label>
                <Input
                  id="name"
                  required
                  placeholder="Your name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Phone / WhatsApp *</Label>
                <Input
                  id="phone"
                  type="tel"
                  required
                  placeholder="+356..."
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                />
              </div>
            </div>

            {/* Issue */}
            <div className="space-y-2">
              <Label htmlFor="issue">What's the issue? *</Label>
              <Select
                value={formData.issue}
                onValueChange={(value) => setFormData({ ...formData, issue: value })}
                required
              >
                <SelectTrigger id="issue">
                  <SelectValue placeholder="Select the main issue" />
                </SelectTrigger>
                <SelectContent>
                  {issues.map((issue) => (
                    <SelectItem key={issue.value} value={issue.value}>
                      {issue.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Brand/Model - optional */}
            <div className="space-y-2">
              <Label htmlFor="brandModel">Brand and model (optional)</Label>
              <Input
                id="brandModel"
                placeholder="e.g. iPhone 14 Pro, Samsung S24"
                value={formData.brandModel}
                onChange={(e) => setFormData({ ...formData, brandModel: e.target.value })}
              />
            </div>

            {/* Notes - optional */}
            <div className="space-y-2">
              <Label htmlFor="notes">Extra details (optional)</Label>
              <Textarea
                id="notes"
                placeholder="Any additional details..."
                value={formData.notes}
                onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                rows={2}
              />
            </div>

            {/* Submit */}
            <Button
              type="submit"
              variant="default"
              size="lg"
              className="w-full"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Sending...' : (
                <>
                  <Send className="w-5 h-5" />
                  Submit request
                </>
              )}
            </Button>

            {/* WhatsApp fallback */}
            <div className="text-center pt-4 border-t border-border">
              <Button
                type="button"
                variant="whatsapp"
                className="w-full"
                asChild
              >
                <a
                  href={getWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackEvent('whatsapp_click', { source: 'form_link' })}
                >
                  <MessageCircle className="w-4 h-4" />
                  Or WhatsApp us now (fastest)
                </a>
              </Button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};
