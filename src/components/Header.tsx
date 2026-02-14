import { useState, useRef, useEffect } from 'react';
import { Phone, MessageCircle, Menu, X, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { trackEvent, getWhatsAppUrl, LOCATIONS } from '@/lib/tracking';
import logoFull from '@/assets/QuickFix_logo_cropped_transparent.png';
import logoIcon from '@/assets/QuickFix_icon_square_transparent.png';

const navLinks = [
  { href: '#services', label: 'Services' },
  { href: '#common-fixes', label: 'Common Fixes' },
  { href: '#locations', label: 'Locations' },
  { href: '#faq', label: 'FAQ' },
];

export const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [callDropdownOpen, setCallDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setCallDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleNavClick = (label: string) => {
    trackEvent('nav_click', { source: label });
    setMobileMenuOpen(false);
  };

  const handleWhatsAppClick = () => {
    trackEvent('whatsapp_click', { source: 'header' });
  };

  const scrollToTop = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-card/95 backdrop-blur-md border-b border-border">
      <div className="container flex h-14 items-center justify-between">
        {/* Logo */}
        <a href="#" onClick={scrollToTop} className="flex items-center">
          <img 
            src={logoFull} 
            alt="QuickFix Malta" 
            className="h-[30px] hidden sm:block w-auto object-contain"
          />
          <img 
            src={logoIcon} 
            alt="QuickFix Malta" 
            className="h-[26px] sm:hidden w-auto object-contain"
          />
        </a>

        {/* Desktop Nav */}
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
          {/* Call dropdown */}
          <div className="relative" ref={dropdownRef}>
            <Button
              variant="headerCta"
              size="sm"
              onClick={() => setCallDropdownOpen(!callDropdownOpen)}
            >
              <Phone className="w-4 h-4" />
              Call
              <ChevronDown className="w-3 h-3" />
            </Button>
            {callDropdownOpen && (
              <div className="absolute top-full right-0 mt-1 bg-card border border-border rounded-lg shadow-lg overflow-hidden z-50 min-w-[180px]">
                <a
                  href="tel:+35627802501"
                  onClick={() => { trackEvent('call_click', { location: 'zebbug', source: 'header' }); setCallDropdownOpen(false); }}
                  className="flex items-center gap-2 px-4 py-3 text-sm font-medium text-foreground hover:bg-secondary transition-colors"
                >
                  <Phone className="w-4 h-4 text-accent" />
                  Call Żebbuġ
                </a>
                <a
                  href="tel:+35621317810"
                  onClick={() => { trackEvent('call_click', { location: 'fgura', source: 'header' }); setCallDropdownOpen(false); }}
                  className="flex items-center gap-2 px-4 py-3 text-sm font-medium text-foreground hover:bg-secondary transition-colors border-t border-border"
                >
                  <Phone className="w-4 h-4 text-accent" />
                  Call Fgura
                </a>
              </div>
            )}
          </div>
          <Button
            variant="headerWhatsapp"
            size="sm"
            asChild
            onClick={handleWhatsAppClick}
          >
            <a href="https://wa.me/35699209313" target="_blank" rel="noopener noreferrer">
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
          </nav>
        </div>
      )}
    </header>
  );
};
