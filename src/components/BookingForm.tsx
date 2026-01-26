import { useState } from 'react';
import { Send, MessageCircle, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { trackEvent, getWhatsAppUrl } from '@/lib/tracking';
import { useToast } from '@/hooks/use-toast';

const deviceTypes = [
  { value: 'phone', label: 'Smartphone' },
  { value: 'tablet', label: 'Tablet' },
  { value: 'laptop', label: 'Laptop' },
  { value: 'computer', label: 'Computer' },
  { value: 'console', label: 'Game Console' },
  { value: 'other', label: 'Other' },
];

const issues = [
  { value: 'screen', label: 'Screen replacement' },
  { value: 'battery', label: 'Battery replacement' },
  { value: 'charging', label: 'Charging port' },
  { value: 'speaker', label: 'Speaker / microphone' },
  { value: 'camera', label: 'Camera issues' },
  { value: 'buttons', label: 'Buttons' },
  { value: 'water', label: 'Water damage' },
  { value: 'motherboard', label: 'Motherboard / diagnostics' },
  { value: 'other', label: 'Other issue' },
];

const locations = [
  { value: 'zebbug', label: 'Żebbuġ' },
  { value: 'fgura', label: 'Fgura' },
];

export const BookingForm = () => {
  const { toast } = useToast();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    deviceType: '',
    brandModel: '',
    issue: '',
    notes: '',
    location: '',
    preferredTime: '',
    consent: false,
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.consent) {
      toast({
        title: 'Consent required',
        description: 'Please agree to be contacted about your repair.',
        variant: 'destructive',
      });
      return;
    }

    setIsSubmitting(true);

    // Simulate form submission (replace with actual backend)
    await new Promise((resolve) => setTimeout(resolve, 1000));

    trackEvent('form_submit', {
      device_type: formData.deviceType,
      location: formData.location as 'zebbug' | 'fgura',
    });

    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  const handleWhatsAppFallback = () => {
    const message = `Hi, I'd like to book a repair.\n\nName: ${formData.name}\nDevice: ${formData.deviceType} - ${formData.brandModel}\nIssue: ${formData.issue}\nPreferred location: ${formData.location}`;
    trackEvent('whatsapp_click', { source: 'form_fallback' });
    window.open(getWhatsAppUrl(message), '_blank');
  };

  if (isSubmitted) {
    return (
      <section id="book" className="section-padding bg-background">
        <div className="container">
          <div className="max-w-xl mx-auto text-center p-8 bg-card rounded-xl border border-border">
            <div className="w-16 h-16 rounded-full bg-success/10 flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-8 h-8 text-success" />
            </div>
            <h2 className="font-display text-2xl font-bold text-foreground mb-4">
              Request received!
            </h2>
            <p className="text-muted-foreground mb-6">
              We'll get back to you shortly to confirm your repair booking.
              For faster response, you can also reach us on WhatsApp.
            </p>
            <Button variant="whatsapp" size="lg" onClick={handleWhatsAppFallback}>
              <MessageCircle className="w-5 h-5" />
              Message us on WhatsApp
            </Button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="book" className="section-padding bg-background">
      <div className="container">
        {/* Section header */}
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Book your repair
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Fill in the form and we'll get back to you to confirm your booking.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="max-w-2xl mx-auto">
          <div className="bg-card rounded-xl border border-border p-6 md:p-8 space-y-6">
            {/* Name & Phone row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="name">Name *</Label>
                <Input
                  id="name"
                  required
                  placeholder="Your name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Phone *</Label>
                <Input
                  id="phone"
                  type="tel"
                  required
                  placeholder="+356 9999 9999"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                />
              </div>
            </div>

            {/* Email */}
            <div className="space-y-2">
              <Label htmlFor="email">Email (optional)</Label>
              <Input
                id="email"
                type="email"
                placeholder="your@email.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
            </div>

            {/* Device type & Brand/Model row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="deviceType">Device type *</Label>
                <Select
                  value={formData.deviceType}
                  onValueChange={(value) => setFormData({ ...formData, deviceType: value })}
                  required
                >
                  <SelectTrigger id="deviceType">
                    <SelectValue placeholder="Select device" />
                  </SelectTrigger>
                  <SelectContent>
                    {deviceTypes.map((type) => (
                      <SelectItem key={type.value} value={type.value}>
                        {type.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="brandModel">Brand + Model *</Label>
                <Input
                  id="brandModel"
                  required
                  placeholder="e.g. iPhone 13, Samsung S23"
                  value={formData.brandModel}
                  onChange={(e) => setFormData({ ...formData, brandModel: e.target.value })}
                />
              </div>
            </div>

            {/* Issue */}
            <div className="space-y-2">
              <Label htmlFor="issue">Issue *</Label>
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

            {/* Notes */}
            <div className="space-y-2">
              <Label htmlFor="notes">Additional details (optional)</Label>
              <Textarea
                id="notes"
                placeholder="Describe the issue in more detail..."
                value={formData.notes}
                onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                rows={3}
              />
            </div>

            {/* Location & Preferred time row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="location">Preferred location *</Label>
                <Select
                  value={formData.location}
                  onValueChange={(value) => setFormData({ ...formData, location: value })}
                  required
                >
                  <SelectTrigger id="location">
                    <SelectValue placeholder="Select shop" />
                  </SelectTrigger>
                  <SelectContent>
                    {locations.map((loc) => (
                      <SelectItem key={loc.value} value={loc.value}>
                        {loc.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="preferredTime">Preferred time (optional)</Label>
                <Input
                  id="preferredTime"
                  placeholder="e.g. Tomorrow morning"
                  value={formData.preferredTime}
                  onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                />
              </div>
            </div>

            {/* Consent */}
            <div className="flex items-start gap-3 pt-2">
              <Checkbox
                id="consent"
                checked={formData.consent}
                onCheckedChange={(checked) => setFormData({ ...formData, consent: checked as boolean })}
              />
              <Label htmlFor="consent" className="text-sm text-muted-foreground font-normal cursor-pointer">
                I agree to be contacted by QuickFix about my repair request via phone, WhatsApp, or email.
              </Label>
            </div>

            {/* Submit */}
            <Button
              type="submit"
              variant="cta"
              size="lg"
              className="w-full"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                'Sending...'
              ) : (
                <>
                  <Send className="w-5 h-5" />
                  Submit repair request
                </>
              )}
            </Button>

            {/* WhatsApp fallback */}
            <p className="text-center text-sm text-muted-foreground">
              Prefer to chat?{' '}
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="text-whatsapp font-medium hover:underline"
                onClick={() => trackEvent('whatsapp_click', { source: 'form_link' })}
              >
                Message us on WhatsApp
              </a>
            </p>
          </div>
        </form>
      </div>
    </section>
  );
};
