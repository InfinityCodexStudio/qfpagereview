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

const SectionFallback = () => (
  <div className="w-full animate-pulse bg-muted/40 rounded-lg mx-auto my-2" style={{ height: '120px' }} />
);

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <SEO />
      <Header />
      
      <main className="flex-1 pb-20 md:pb-0">
        <Hero />
        <Suspense fallback={<SectionFallback />}><Services /></Suspense>
        <Suspense fallback={<SectionFallback />}><InstantQuote /></Suspense>
        <Suspense fallback={<SectionFallback />}><HowItWorks /></Suspense>
        <Suspense fallback={<SectionFallback />}><PickupDelivery /></Suspense>
        <Suspense fallback={<SectionFallback />}><Locations /></Suspense>
        <Suspense fallback={<SectionFallback />}><Testimonials /></Suspense>
        <Suspense fallback={<SectionFallback />}><ProtectYourDevice /></Suspense>
        <Suspense fallback={<SectionFallback />}><FAQ /></Suspense>
        <Suspense fallback={<SectionFallback />}><BookingForm /></Suspense>
        <Suspense fallback={<SectionFallback />}><FinalCTA /></Suspense>
      </main>

      <Footer />
      <StickyCTA />
    </div>
  );
};

export default Index;
