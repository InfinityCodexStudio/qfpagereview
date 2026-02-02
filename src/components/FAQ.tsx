import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const faqs = [
  {
    question: 'What warranty do you offer?',
    answer: '90 days on all repairs and replaced parts.',
  },
  {
    question: 'Will I lose my data during the repair?',
    answer: "No. We don't touch your data. If a repair might affect it, we'll tell you first.",
  },
  {
    question: 'Do you use quality parts?',
    answer: 'Yes. We use high-quality replacement parts on all repairs.',
  },
  {
    question: 'Do I need to book an appointment?',
    answer: 'No, walk-ins are welcome. Booking ahead helps us prepare your parts.',
  },
  {
    question: 'How long does a typical repair take?',
    answer: 'Many repairs are done same day. Some within an hour.',
  },
  {
    question: 'Can you fix water damage?',
    answer: 'We can try. We charge €20 for diagnostic, then quote the repair.',
  },
  {
    question: 'How much will my repair cost?',
    answer: "It depends on device and issue. Screen repairs start from €45, batteries from €35. We always confirm the price before starting.",
  },
  {
    question: 'Which brands do you repair?',
    answer: "Apple, Samsung, Huawei, Xiaomi, OnePlus, Google, and more. If it's broken, ask us.",
  },
];

export const FAQ = () => {
  return (
    <section id="faq" className="section-padding bg-secondary">
      <div className="container">
        {/* Section header */}
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Frequently asked questions
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Everything you need to know before your visit.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-2xl mx-auto">
          <Accordion type="single" collapsible className="space-y-3">
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