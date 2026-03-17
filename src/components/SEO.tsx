import { useEffect } from 'react';
import { LOCATIONS, OPENING_HOURS, PHONE_ZEBBUG, EMAIL } from '@/lib/tracking';

const generateLocalBusinessSchema = () => {
  const baseInfo = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "QuickFix Malta",
    "description": "Professional phone, tablet, laptop, and game console repairs in Malta. Same-day repairs, 90-day warranty, two locations in Żebbuġ and Fgura.",
    "telephone": PHONE_ZEBBUG,
    "email": EMAIL,
    "url": "https://quickfixmalta.com",
    "priceRange": "€€",
    "image": "https://quickfixmalta.com/og-image.png",
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "10:00",
        "closes": "19:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Saturday",
        "opens": "10:00",
        "closes": "14:00"
      }
    ],
    "areaServed": { "@type": "Country", "name": "Malta" },
    "serviceType": [
      "Phone Repair", "Tablet Repair", "Laptop Repair",
      "Computer Repair", "Game Console Repair",
      "Screen Replacement", "Battery Replacement"
    ]
  };

  const zebbugLocation = {
    ...baseInfo,
    "@id": "https://quickfixmalta.com/#zebbug",
    "name": "QuickFix Żebbuġ",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Triq Luret Vella",
      "addressLocality": "Żebbuġ",
      "postalCode": "ZBG 1971",
      "addressCountry": "MT"
    },
    "geo": { "@type": "GeoCoordinates", "latitude": 35.8714, "longitude": 14.4392 },
    "hasMap": LOCATIONS.zebbug.directionsUrl
  };

  const fguraLocation = {
    ...baseInfo,
    "@id": "https://quickfixmalta.com/#fgura",
    "name": "QuickFix Fgura",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "31 Vjal Kottoner",
      "addressLocality": "Fgura",
      "postalCode": "FGR 1388",
      "addressCountry": "MT"
    },
    "geo": { "@type": "GeoCoordinates", "latitude": 35.8721, "longitude": 14.5122 },
    "hasMap": LOCATIONS.fgura.directionsUrl
  };

  return [zebbugLocation, fguraLocation];
};

// FAQ schema from FAQ section
const faqItems = [
  { q: 'What warranty do you offer?', a: '90 days on all repairs and replaced parts. You can upgrade to 6 months for €20.' },
  { q: 'Will I lose my data during the repair?', a: "No. We don't access or touch your data. If a repair might affect it, we'll tell you first." },
  { q: 'Do you use quality parts?', a: 'Yes. We use high-quality replacement parts. No cheap knockoffs.' },
  { q: 'Do I need to book an appointment?', a: 'No, walk-ins welcome. Booking ahead helps us prepare parts faster.' },
  { q: 'How long does a typical repair take?', a: 'Many repairs same day. Screen or battery often within an hour. Book Same-Day Priority (+€15) for guaranteed same-day.' },
  { q: 'Can you fix water damage?', a: 'We can try. €30 diagnostic to assess damage, then quote the repair. Fee waived if you proceed.' },
  { q: 'How much will my repair cost?', a: 'Depends on device and issue. Screens from €70, batteries from €45. Flagship models cost more. We always confirm price before starting.' },
  { q: "What's the diagnostic fee?", a: '€30, waived if you proceed with repair. For repairs under €100, we often fix on the spot.' },
  { q: 'Which brands do you repair?', a: 'Apple, Samsung, Huawei, Xiaomi, OnePlus, Google Pixel, and more. Laptops and tablets too.' },
  { q: 'How much is pickup and delivery?', a: '€15 one-way, or €30 for round trip (we collect and return). Available anywhere in Malta.' },
  { q: "What if my same-day priority repair isn't done same day?", a: "If we can't complete your repair same day, the €15 priority fee is waived." },
  { q: 'What is ProtectionPro?', a: "ProtectionPro is a military-grade screen protection film by Madico. It's tested to withstand extreme impact and professionally fitted by our technicians. €35 installed." },
];

const generateFAQSchema = () => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqItems.map(({ q, a }) => ({
    "@type": "Question",
    "name": q,
    "acceptedAnswer": { "@type": "Answer", "text": a }
  }))
});

export const SEO = () => {
  useEffect(() => {
    document.title = "QuickFix Malta | Phone & Device Repairs in Żebbuġ & Fgura";

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content',
        'Professional phone, tablet, laptop & game console repairs in Malta. Same-day service, 90-day warranty. Visit our Żebbuġ or Fgura shop. Screen & battery replacements.'
      );
    }

    // Remove existing schemas
    document.querySelectorAll('script[type="application/ld+json"]').forEach(el => el.remove());

    // Add LocalBusiness schemas
    const schemas = generateLocalBusinessSchema();
    schemas.forEach((schema) => {
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.text = JSON.stringify(schema);
      document.head.appendChild(script);
    });

    // Add FAQ schema
    const faqScript = document.createElement('script');
    faqScript.type = 'application/ld+json';
    faqScript.text = JSON.stringify(generateFAQSchema());
    document.head.appendChild(faqScript);

    return () => {
      document.querySelectorAll('script[type="application/ld+json"]').forEach(el => el.remove());
    };
  }, []);

  return null;
};
