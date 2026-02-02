import { Star } from 'lucide-react';
import { GOOGLE_REVIEWS_URL } from '@/lib/tracking';

const testimonials = [
  {
    name: 'Raymond A.',
    location: 'Żebbuġ',
    text: 'Two mobiles with cracked screens. Very good job and fast return once collected. Will definitely use again.',
    rating: 5,
  },
  {
    name: 'Jason I.',
    location: 'Fgura',
    text: 'Fast and reliable service. Changed my Samsung screen in less than 24 hours. Highly recommended.',
    rating: 5,
  },
  {
    name: 'Marco M.',
    location: 'Żebbuġ',
    text: "Great and efficient service. Pickup and delivery is the best. Device was fixed same day. Price agreed before as well.",
    rating: 5,
  },
  {
    name: 'Jack M.',
    location: 'Fgura',
    text: 'Omar was very knowledgeable and provided excellent service. The whole process was very organised. Highly recommended!',
    rating: 5,
  },
];

const trustStrip = [
  'Trusted local repairs',
  'Clear quotes',
  'No surprise charges',
];

export const Testimonials = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container">
        {/* Section header */}
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            What our customers say
          </h2>
        </div>

        {/* Testimonials grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="relative p-6 bg-card rounded-xl border border-border"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-3">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                ))}
              </div>

              {/* Text */}
              <p className="text-foreground mb-4">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div className="text-sm">
                <span className="font-medium text-foreground">{testimonial.name}</span>
                <span className="text-muted-foreground"> · {testimonial.location}</span>
              </div>
            </div>
          ))}
        </div>

        {/* See all reviews link */}
        <div className="text-center mb-8">
          <a 
            href={GOOGLE_REVIEWS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors"
          >
            See all reviews on Google →
          </a>
        </div>

        {/* Trust strip */}
        <div className="flex flex-wrap items-center justify-center gap-4 md:gap-8 py-6 px-4 bg-primary/5 rounded-xl">
          {trustStrip.map((item, index) => (
            <div key={index} className="flex items-center gap-2">
              <div className="w-5 h-5 rounded-full bg-primary flex items-center justify-center">
                <svg className="w-3 h-3 text-primary-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span className="text-sm font-medium text-foreground">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};