import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { Services } from '@/components/Services';
import { CommonFixes } from '@/components/CommonFixes';
import { HowItWorks } from '@/components/HowItWorks';
import { Locations } from '@/components/Locations';
import { Testimonials } from '@/components/Testimonials';
import { FAQ } from '@/components/FAQ';
import { BookingForm } from '@/components/BookingForm';
import { Footer } from '@/components/Footer';
import { StickyCTA } from '@/components/StickyCTA';
import { SEO } from '@/components/SEO';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <SEO />
      <Header />
      
      <main className="flex-1 pb-20 md:pb-0">
        <Hero />
        <Services />
        <CommonFixes />
        <HowItWorks />
        <Locations />
        <Testimonials />
        <FAQ />
        <BookingForm />
      </main>

      <Footer />
      <StickyCTA />
    </div>
  );
};

export default Index;
