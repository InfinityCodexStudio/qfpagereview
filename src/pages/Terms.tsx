import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

const Terms = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      <main className="flex-1 container max-w-3xl py-16 px-4">
        <button
          onClick={() => navigate(-1)}
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Back
        </button>
        <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-2">
          Terms of Service
        </h1>
        <p className="text-sm text-muted-foreground mb-8">Last updated: March 2026</p>

        <div className="prose prose-sm text-muted-foreground space-y-8">
          <section>
            <h2 className="text-lg font-semibold text-foreground">1. About Us</h2>
            <p>These terms govern your use of QuickFix Ltd's repair services. QuickFix Ltd (Registration No. C 102721) is registered in Malta at 2, Triq Luret Vella, Ħaż-Żebbuġ, ZBG 1971, Malta. By using our services you agree to these terms.</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-foreground">2. Our Services</h2>
            <p>We provide repair services for smartphones, tablets, laptops, computers, and game consoles. All quotes provided are estimates based on the information given. A final price is confirmed before any repair begins. We reserve the right to decline a repair if the device is beyond economic repair.</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-foreground">3. Diagnostic Fee</h2>
            <p>A diagnostic fee of €30 applies to all devices brought in for assessment. This fee is waived and included in the repair price if you proceed with the repair. If you choose not to proceed, or if the device is assessed as Beyond Economic Repair (BER), the €30 fee is charged.</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-foreground">4. Insurance Reports</h2>
            <p>Insurance damage assessment reports are available for €35 upfront. This fee is deducted from your repair cost if you proceed with the repair at QuickFix. The report is an official damage assessment only and does not guarantee insurance approval.</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-foreground">5. Warranty</h2>
            <p>All repairs carry a 90-day warranty covering the parts replaced and the work carried out. This warranty does not cover physical damage, liquid damage, or faults unrelated to the original repair. An extended 6-month warranty is available for €20.</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-foreground">6. Protection Products</h2>
            <p>ProtectionPro Film (€35 installed) is a military-grade screen protection product by Madico, professionally fitted by our technicians. The Protection Pack (€45) bundles ProtectionPro Film with a 6-month extended warranty. These products are non-refundable once fitted. The extended warranty included in the Protection Pack covers the same scope as our standard 90-day warranty for the extended period.</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-foreground">7. Pickup and Delivery</h2>
            <p>Pickup and delivery is available anywhere in Malta. One-way (pickup or delivery only) costs €15. Round trip (we collect and return) costs €30. Pickup and delivery fees are non-refundable once the service has been carried out.</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-foreground">8. Same-Day Priority</h2>
            <p>Same-Day Priority repairs carry an additional fee of €15. If we are unable to complete your repair on the same day, this fee is waived in full.</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-foreground">9. Your Device</h2>
            <p>You are responsible for backing up your data before bringing your device in for repair. We do not access or touch your data during repairs. We are not liable for data loss. Devices left uncollected for more than 60 days after repair completion may be disposed of at our discretion.</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-foreground">10. Limitation of Liability</h2>
            <p>Our liability is limited to the cost of the repair carried out. We are not liable for any indirect or consequential losses arising from a repair or delay in repair.</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-foreground">11. Governing Law</h2>
            <p>These terms are governed by the laws of Malta. Any disputes shall be subject to the exclusive jurisdiction of the Maltese courts.</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-foreground">11. Contact</h2>
            <p>For any queries regarding these terms, contact us at info@quickfixmalta.com or visit us at 2, Triq Luret Vella, Ħaż-Żebbuġ, ZBG 1971, Malta.</p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Terms;
