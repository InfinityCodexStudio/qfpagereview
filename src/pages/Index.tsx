import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { Services } from '@/components/Services';
import { InstantQuote } from '@/components/InstantQuote';
import { ChooseYourSpeed } from '@/components/ChooseYourSpeed';
import { HowItWorks } from '@/components/HowItWorks';
import { PickupDelivery } from '@/components/PickupDelivery';
import { Locations } from '@/components/Locations';
import { Testimonials } from '@/components/Testimonials';
import { ProtectYourDevice } from '@/components/ProtectYourDevice';
import { FAQ } from '@/components/FAQ';
import { BookingForm } from '@/components/BookingForm';
import { FinalCTA } from '@/components/FinalCTA';
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
        <InstantQuote />
        <ChooseYourSpeed />
        <HowItWorks />
        <PickupDelivery />
        <Locations />
        <Testimonials />
        <ProtectYourDevice />
        <FAQ />
        <BookingForm />
        <FinalCTA />
      </main>

      <Footer />
      <StickyCTA />
    </div>
  );
};

export default Index;