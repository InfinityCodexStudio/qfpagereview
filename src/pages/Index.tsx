import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { Services } from '@/components/Services';
import { CommonFixes } from '@/components/CommonFixes';
import { ChooseYourSpeed } from '@/components/ChooseYourSpeed';
import { HowItWorks } from '@/components/HowItWorks';
import { PickupDelivery } from '@/components/PickupDelivery';
import { Locations } from '@/components/Locations';
import { Testimonials } from '@/components/Testimonials';
import { ProtectYourDevice } from '@/components/ProtectYourDevice';
import { FAQ } from '@/components/FAQ';
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
        <CommonFixes />
        <ChooseYourSpeed />
        <HowItWorks />
        <PickupDelivery />
        <Locations />
        <Testimonials />
        <ProtectYourDevice />
        <FAQ />
        <FinalCTA />
      </main>

      <Footer />
      <StickyCTA />
    </div>
  );
};

export default Index;