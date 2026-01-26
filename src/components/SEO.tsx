import { useEffect } from 'react';
import { LOCATIONS, OPENING_HOURS, PHONE_NUMBER, EMAIL } from '@/lib/tracking';

// LocalBusiness Schema for both locations
const generateLocalBusinessSchema = () => {
  const baseInfo = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "QuickFix Malta",
    "description": "Professional phone, tablet, laptop, and game console repairs in Malta. Same-day repairs, 90-day warranty, two locations in Żebbuġ and Fgura.",
    "telephone": PHONE_NUMBER,
    "email": EMAIL,
    "url": "https://quickfixmalta.com",
    "priceRange": "€€",
    "image": "https://quickfixmalta.com/og-image.jpg",
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
    "areaServed": {
      "@type": "Country",
      "name": "Malta"
    },
    "serviceType": [
      "Phone Repair",
      "Tablet Repair",
      "Laptop Repair",
      "Computer Repair",
      "Game Console Repair",
      "Screen Replacement",
      "Battery Replacement"
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
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 35.8714,
      "longitude": 14.4392
    },
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
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 35.8721,
      "longitude": 14.5122
    },
    "hasMap": LOCATIONS.fgura.directionsUrl
  };

  return [zebbugLocation, fguraLocation];
};

export const SEO = () => {
  useEffect(() => {
    // Update document title
    document.title = "QuickFix Malta | Phone & Device Repairs in Żebbuġ & Fgura";

    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 
        'Professional phone, tablet, laptop & game console repairs in Malta. Same-day service, 90-day warranty. Visit our Żebbuġ or Fgura shop. Screen & battery replacements.'
      );
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = 'Professional phone, tablet, laptop & game console repairs in Malta. Same-day service, 90-day warranty. Visit our Żebbuġ or Fgura shop. Screen & battery replacements.';
      document.head.appendChild(meta);
    }

    // Add Open Graph tags
    const ogTags = [
      { property: 'og:title', content: 'QuickFix Malta | Phone & Device Repairs' },
      { property: 'og:description', content: 'Same-day phone repairs in Malta. Screen replacements, battery fixes & more. 90-day warranty. Żebbuġ & Fgura locations.' },
      { property: 'og:type', content: 'website' },
      { property: 'og:locale', content: 'en_MT' },
    ];

    ogTags.forEach(({ property, content }) => {
      let tag = document.querySelector(`meta[property="${property}"]`);
      if (!tag) {
        tag = document.createElement('meta');
        tag.setAttribute('property', property);
        document.head.appendChild(tag);
      }
      tag.setAttribute('content', content);
    });

    // Add LocalBusiness Schema
    const existingSchema = document.querySelector('script[type="application/ld+json"]');
    if (existingSchema) {
      existingSchema.remove();
    }

    const schemas = generateLocalBusinessSchema();
    schemas.forEach((schema, index) => {
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.text = JSON.stringify(schema);
      document.head.appendChild(script);
    });

    return () => {
      // Cleanup schemas on unmount
      document.querySelectorAll('script[type="application/ld+json"]').forEach(el => el.remove());
    };
  }, []);

  return null;
};
