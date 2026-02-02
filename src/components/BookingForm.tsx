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
  { value: 'data', label: 'Data recovery' },
  { value: 'backglass', label: 'Back glass' },
  { value: 'other', label: 'Other issue' },
];

const locations = [
  { value: 'zebbug', label: 'Żebbuġ shop' },
  { value: 'fgura', label: 'Fgura shop' },
  { value: 'pickup', label: 'Pickup and delivery (+€15/€30)' },
];

const contactMethods = [
  { value: 'whatsapp', label: 'WhatsApp (fastest)' },
  { value: 'phone', label: 'Phone call' },
  { value: 'email', label: 'Email' },
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
    contactMethod: 'whatsapp',
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
    const message = `Hi, I'd like to book a repair.

Name: ${formData.name}
Device: ${formData.deviceType} - ${formData.brandModel}
Issue: ${formData.issue}
Preferred location: ${formData.location}

Thanks!`;
    trackEvent('whatsapp_click', { source: 'form_fallback' });
    window.open(getWhatsAppUrl(message), '_blank');
  };

  if (isSubmitted) {
    return (
      <section id="book" className="section-padding bg-secondary">
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
            <p className="text-muted-foreground mb-6">
              Need faster help? WhatsApp us now.
            </p>
            <Button variant="whatsapp" size="lg" onClick={handleWhatsAppFallback}>
              <MessageCircle className="w-5 h-5" />
              WhatsApp
            </Button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="book" className="section-padding bg-secondary">
      <div className="container">
        {/* Section header */}
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Book your repair
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Prefer a form? Fill in your details and we'll get back to you within 1 hour during business hours.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="max-w-2xl mx-auto">
          <div className="bg-card rounded-xl border border-border p-6 md:p-8 space-y-6">
            {/* Name & Phone row */}
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

            {/* Email */}
            <div className="space-y-2">
              <Label htmlFor="email">Email (optional)</Label>
              <Input
                id="email"
                type="email"
                placeholder="your@email.com (optional)"
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
                <Label htmlFor="brandModel">Brand and model</Label>
                <Input
                  id="brandModel"
                  placeholder="e.g. iPhone 14 Pro, Samsung S24"
                  value={formData.brandModel}
                  onChange={(e) => setFormData({ ...formData, brandModel: e.target.value })}
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

            {/* Notes */}
            <div className="space-y-2">
              <Label htmlFor="notes">Tell us more (optional)</Label>
              <Textarea
                id="notes"
                placeholder="Any additional details about the problem..."
                value={formData.notes}
                onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                rows={3}
              />
            </div>

            {/* Location */}
            <div className="space-y-2">
              <Label htmlFor="location">Preferred location *</Label>
              <Select
                value={formData.location}
                onValueChange={(value) => setFormData({ ...formData, location: value })}
                required
              >
                <SelectTrigger id="location">
                  <SelectValue placeholder="Select location" />
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

            {/* Contact method */}
            <div className="space-y-2">
              <Label htmlFor="contactMethod">How should we contact you? *</Label>
              <Select
                value={formData.contactMethod}
                onValueChange={(value) => setFormData({ ...formData, contactMethod: value })}
                required
              >
                <SelectTrigger id="contactMethod">
                  <SelectValue placeholder="Select contact method" />
                </SelectTrigger>
                <SelectContent>
                  {contactMethods.map((method) => (
                    <SelectItem key={method.value} value={method.value}>
                      {method.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
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
                  Submit request
                </>
              )}
            </Button>

            {/* WhatsApp fallback */}
            <div className="text-center pt-4 border-t border-border">
              <p className="text-sm text-muted-foreground mb-3">
                Or message us directly on WhatsApp for the fastest response.
              </p>
              <Button
                type="button"
                variant="ctaOutline"
                className="border-whatsapp text-whatsapp hover:bg-whatsapp hover:text-whatsapp-foreground"
                asChild
              >
                <a
                  href={getWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackEvent('whatsapp_click', { source: 'form_link' })}
                >
                  <MessageCircle className="w-4 h-4" />
                  WhatsApp us now
                </a>
              </Button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};
