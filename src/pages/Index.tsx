import { lazy, Suspense } from 'react';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { Footer } from '@/components/Footer';
import { StickyCTA } from '@/components/StickyCTA';
import { SEO } from '@/components/SEO';

const Services = lazy(() => import('@/components/Services'));
const InstantQuote = lazy(() => import('@/components/InstantQuote'));
const HowItWorks = lazy(() => import('@/components/HowItWorks'));
const PickupDelivery = lazy(() => import('@/components/PickupDelivery'));
const Locations = lazy(() => import('@/components/Locations'));
const Testimonials = lazy(() => import('@/components/Testimonials'));
const FAQ = lazy(() => import('@/components/FAQ'));
const ProtectYourDevice = lazy(() => import('@/components/ProtectYourDevice'));
const BookingForm = lazy(() => import('@/components/BookingForm'));
const FinalCTA = lazy(() => import('@/components/FinalCTA'));

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <SEO />
      <Header />
      
      <main className="flex-1 pb-20 md:pb-0">
        <Hero />
        <Suspense fallback={null}>
          <Services />
          <InstantQuote />
          <HowItWorks />
          <PickupDelivery />
          <Locations />
          <Testimonials />
          <FAQ />
          <ProtectYourDevice />
          <BookingForm />
          <FinalCTA />
        </Suspense>
      </main>

      <Footer />
      <StickyCTA />
    </div>
  );
};

export default Index;
