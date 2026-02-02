import { useState } from 'react';
import { Phone, MessageCircle, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { trackEvent, getPhoneUrl, getWhatsAppUrl } from '@/lib/tracking';
import logoFull from '@/assets/QF_Logo.png';
import logoIcon from '@/assets/QF_Logo_Sticker.png';

const navLinks = [
  { href: '#services', label: 'Services' },
  { href: '#common-fixes', label: 'Common Fixes' },
  { href: '#locations', label: 'Locations' },
  { href: '#faq', label: 'FAQ' },
];

export const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (label: string) => {
    trackEvent('nav_click', { source: label });
    setMobileMenuOpen(false);
  };

  const handleCallClick = () => {
    trackEvent('call_click', { source: 'header' });
  };

  const handleWhatsAppClick = () => {
    trackEvent('whatsapp_click', { source: 'header' });
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-card/95 backdrop-blur-md border-b border-border">
      <div className="container flex h-16 items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center">
          {/* Icon only on mobile */}
          <img 
            src={logoIcon} 
            alt="QuickFix" 
            className="h-10 w-10 md:hidden"
          />
          {/* Full logo on desktop */}
          <img 
            src={logoFull} 
            alt="QuickFix Malta" 
            className="h-12 hidden md:block"
          />
        </a>

        {/* Desktop Nav - Centered */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => handleNavClick(link.label)}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Desktop CTAs */}
        <div className="hidden md:flex items-center gap-3">
          <Button
            variant="headerCta"
            size="sm"
            asChild
            onClick={handleCallClick}
          >
            <a href={getPhoneUrl()}>
              <Phone className="w-4 h-4" />
              Call
            </a>
          </Button>
          <Button
            variant="headerWhatsapp"
            size="sm"
            asChild
            onClick={handleWhatsAppClick}
          >
            <a href={getWhatsAppUrl()} target="_blank" rel="noopener noreferrer">
              <MessageCircle className="w-4 h-4" />
              WhatsApp
            </a>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 text-foreground"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-card border-b border-border">
          <nav className="container py-4 flex flex-col gap-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => handleNavClick(link.label)}
                className="py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="flex gap-2 pt-4 border-t border-border mt-2">
              <Button
                variant="headerCta"
                size="sm"
                className="flex-1"
                asChild
                onClick={handleCallClick}
              >
                <a href={getPhoneUrl()}>
                  <Phone className="w-4 h-4" />
                  Call
                </a>
              </Button>
              <Button
                variant="headerWhatsapp"
                size="sm"
                className="flex-1"
                asChild
                onClick={handleWhatsAppClick}
              >
                <a href={getWhatsAppUrl()} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="w-4 h-4" />
                  WhatsApp
                </a>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};