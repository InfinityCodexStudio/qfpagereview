import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const faqs = [
  {
    question: 'What warranty do you offer?',
    answer: '90 days on all repairs and replaced parts. You can upgrade to 6 months for €20.',
  },
  {
    question: 'Will I lose my data during the repair?',
    answer: "No. We don't access or touch your data. If a repair might affect it, we'll tell you first.",
  },
  {
    question: 'Do you use quality parts?',
    answer: 'Yes. We use high-quality replacement parts. No cheap knockoffs.',
  },
  {
    question: 'Do I need to book an appointment?',
    answer: 'No, walk-ins welcome. Booking ahead helps us prepare parts faster.',
  },
  {
    question: 'How long does a typical repair take?',
    answer: 'Many repairs same day. Screen or battery often within an hour. Book Same-Day Priority (+€15) for guaranteed same-day.',
  },
  {
    question: 'Can you fix water damage?',
    answer: 'We can try. €30 diagnostic to assess damage, then quote the repair. Fee waived if you proceed.',
  },
  {
    question: 'How much will my repair cost?',
    answer: 'Depends on device and issue. Screens from €70, batteries from €45. Flagship models cost more. We always confirm price before starting.',
  },
  {
    question: "What's the diagnostic fee?",
    answer: '€30, waived if you proceed with repair. For repairs under €100, we often fix on the spot.',
  },
  {
    question: 'Which brands do you repair?',
    answer: 'Apple, Samsung, Huawei, Xiaomi, OnePlus, Google Pixel, and more. Laptops and tablets too.',
  },
  {
    question: 'How much is pickup and delivery?',
    answer: '€15 one-way, or €30 for round trip (we collect and return). Available anywhere in Malta.',
  },
  {
    question: "What if my same-day priority repair isn't done same day?",
    answer: "If we can't complete your repair same day, the €15 priority fee is waived.",
  },
  {
    question: 'What is ProtectionPro?',
    answer: "ProtectionPro is a military-grade screen protection film by Madico. It's tested to withstand extreme impact and professionally fitted by our technicians. €35 installed.",
  },
];

export const FAQ = () => {
  return (
    <section id="faq" className="py-10 md:py-16 bg-background">
      <div className="container">
        <div className="text-center mb-8">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-3">
            Frequently asked questions
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Everything you need to know before your visit.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <Accordion type="single" collapsible className="space-y-2">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card rounded-lg border border-border px-6 data-[state=open]:shadow-sm"
              >
                <AccordionTrigger className="text-left font-medium text-foreground hover:no-underline py-4">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
