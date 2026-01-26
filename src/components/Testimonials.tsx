import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Maria C.',
    location: 'Żebbuġ',
    text: 'Dropped my phone in water. They saved it and all my photos. So relieved!',
    rating: 5,
  },
  {
    name: 'Joseph M.',
    location: 'Fgura',
    text: 'Screen replaced in under an hour. Good price, friendly service.',
    rating: 5,
  },
  {
    name: 'Sarah B.',
    location: 'Żebbuġ',
    text: 'My laptop wouldn\'t turn on. They diagnosed it quickly and were honest about the repair cost.',
    rating: 5,
  },
  {
    name: 'David R.',
    location: 'Fgura',
    text: 'Battery was dying fast. Now my phone lasts all day again. 90-day warranty gives peace of mind.',
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-12">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="relative p-6 bg-card rounded-xl border border-border"
            >
              <Quote className="absolute top-4 right-4 w-8 h-8 text-primary/10" />
              
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

        {/* Trust strip */}
        <div className="flex flex-wrap items-center justify-center gap-4 md:gap-8 py-6 px-4 bg-primary/5 rounded-xl">
          {trustStrip.map((item, index) => (
            <div key={index} className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-success" />
              <span className="text-sm font-medium text-foreground">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
