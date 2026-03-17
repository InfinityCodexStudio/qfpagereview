import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

const Privacy = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      <main className="flex-1 container max-w-3xl py-16 px-4">
        <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-2">
          Privacy Policy
        </h1>
        <p className="text-sm text-muted-foreground mb-8">Last updated: March 2026</p>

        <div className="prose prose-sm text-muted-foreground space-y-8">
          <section>
            <h2 className="text-lg font-semibold text-foreground">1. Who We Are</h2>
            <p>QuickFix Ltd (Registration No. C 102721) is a Malta-registered company with its registered office at 2, Triq Luret Vella, Ħaż-Żebbuġ, ZBG 1971, Malta. We operate device repair services from two locations in Żebbuġ and Fgura. You can contact us at info@quickfixmalta.com or via WhatsApp on +356 9920 9313.</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-foreground">2. What Data We Collect</h2>
            <p>When you contact us through our website, WhatsApp, or by phone, we may collect your name, phone number, WhatsApp number, device details, and the nature of your repair request. We do not collect payment card data through our website.</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-foreground">3. How We Use Your Data</h2>
            <p>We use your information solely to respond to your repair enquiry, provide a quote, arrange pickup or delivery if requested, and follow up on your repair. We do not use your data for marketing without your consent and we do not sell your data to third parties.</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-foreground">4. WhatsApp Communications</h2>
            <p>When you contact us via WhatsApp, your messages are subject to WhatsApp's own privacy policy. We use WhatsApp for Business to manage customer communications. Message history is retained for service continuity purposes.</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-foreground">5. Data Retention</h2>
            <p>We retain your contact and repair details for up to 12 months after your last interaction with us. After this period, your data is deleted unless we are required by law to retain it longer.</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-foreground">6. Your Rights Under GDPR</h2>
            <p>As a Malta-based business operating under EU law, we respect your rights under the General Data Protection Regulation (GDPR). You have the right to access, correct, or request deletion of your personal data at any time. To exercise these rights, contact us at info@quickfixmalta.com.</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-foreground">7. Cookies and Analytics</h2>
            <p>Our website uses Google Analytics to understand how visitors use our site. This involves the use of cookies. No personally identifiable information is collected through analytics. You can opt out of Google Analytics tracking via your browser settings.</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-foreground">8. Contact</h2>
            <p>For any privacy-related queries, contact us at info@quickfixmalta.com or write to us at 2, Triq Luret Vella, Ħaż-Żebbuġ, ZBG 1971, Malta.</p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Privacy;
