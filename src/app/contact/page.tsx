import type { Metadata } from "next";
import { LegalPage, Section } from "@/components/Legal";

export const metadata: Metadata = {
  title: "Contact — DidntHappen",
  description: "How to reach the team behind DidntHappen.",
};

export default function ContactPage() {
  return (
    <LegalPage title="Contact">
      <Section title="Support">
        For general help, bugs, or feature requests: <a href="mailto:info@vibecodingturkey.com">info@vibecodingturkey.com</a>
      </Section>
      <Section title="Privacy and data requests">
        Privacy, GDPR, CCPA, or data-subject requests: <a href="mailto:info@vibecodingturkey.com">info@vibecodingturkey.com</a>. We will respond within 30 days.
      </Section>
      <Section title="Legal">
        Legal notices, contractual matters, EU withdrawal: <a href="mailto:info@vibecodingturkey.com">info@vibecodingturkey.com</a>
      </Section>
      <Section title="Copyright / DMCA">
        Copyright complaints and counter-notices: <a href="mailto:info@vibecodingturkey.com">info@vibecodingturkey.com</a>. See also <a href="/copyright">/copyright</a>.
      </Section>
      <Section title="Abuse / safety">
        Report misuse of the app, harassment, or content that violates our Acceptable Use Policy: <a href="mailto:info@vibecodingturkey.com">info@vibecodingturkey.com</a> or <a href="/abuse">/abuse</a>.
      </Section>
      <Section title="Account deletion">
        Delete your account from inside the iOS app (Settings → Account → Delete Account) or email <a href="mailto:info@vibecodingturkey.com">info@vibecodingturkey.com</a>. See <a href="/delete-account">/delete-account</a> for details.
      </Section>
      <Section title="Postal address">
        Onur Hüseyin Koçak (DidntHappen)
        <br />
        Güllerpınarı, Harmandalı 6/7
        <br />
        Alanya, Antalya, Türkiye
      </Section>
      <Section title="Response time">
        We aim to respond within 5 business days for support requests and within 30 days for privacy or legal requests, as required by GDPR / CCPA / similar laws.
      </Section>
    </LegalPage>
  );
}
