import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const faqs = [
  {
    question: 'What warranty do you offer?',
    answer: 'All repairs and parts come with a 90-day warranty. If the same issue returns within 90 days, we\'ll fix it at no extra cost.',
  },
  {
    question: 'Will I lose my data during the repair?',
    answer: 'For most repairs (screen, battery, charging port), your data stays safe. For more complex issues, we\'ll always let you know in advance if there\'s any risk.',
  },
  {
    question: 'Do you use quality parts?',
    answer: 'Yes. We use quality replacement parts that meet or exceed original specifications. All parts are covered by our 90-day warranty.',
  },
  {
    question: 'Do I need to book an appointment?',
    answer: 'No appointment needed for most repairs—just walk in. However, booking ahead helps us prepare and can speed things up, especially for busy times.',
  },
  {
    question: 'How long does a typical repair take?',
    answer: 'Many common repairs (screen replacement, battery swap) are done same day, often within 1–2 hours. More complex issues may take longer. We\'ll give you a time estimate upfront.',
  },
  {
    question: 'Can you fix water damage?',
    answer: 'We can often recover water-damaged devices, but success depends on how quickly you bring it in and the extent of the damage. The sooner, the better—don\'t try to charge it, just bring it straight to us.',
  },
  {
    question: 'How much will my repair cost?',
    answer: 'Prices depend on your device model and the issue. We\'ll give you a clear quote before any work begins—no surprise charges.',
  },
  {
    question: 'Which brands do you repair?',
    answer: 'We repair all major brands: Apple, Samsung, Huawei, Xiaomi, OnePlus, Sony, LG, and more. If you\'re unsure, just ask.',
  },
];

export const FAQ = () => {
  return (
    <section id="faq" className="section-padding bg-secondary/50">
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
