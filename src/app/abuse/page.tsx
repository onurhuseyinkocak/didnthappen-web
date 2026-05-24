import type { Metadata } from "next";
import { LegalPage, Section } from "@/components/Legal";

export const metadata: Metadata = {
  title: "Report Abuse — DidntHappen",
  description: "Report misuse, harassment, or content that violates DidntHappen policies.",
};

export default function AbusePage() {
  return (
    <LegalPage title="Report Abuse">
      <Section title="1. What to report">
        Use this page to report content or behaviour that violates our <a href="/acceptable-use">Acceptable Use Policy</a> or <a href="/community-guidelines">Community Guidelines</a>, including:
        <ul>
          <li>Harassment, threats, intimate-image abuse.</li>
          <li>Self-harm or suicide encouragement.</li>
          <li>Hate speech or content targeting protected groups.</li>
          <li>Impersonation of a real person or organisation.</li>
          <li>Illegal content (terrorism, child sexual abuse material).</li>
          <li>Privacy violations (doxing, sharing without consent).</li>
          <li>Misuse of Mira's outputs presented as professional advice.</li>
        </ul>
        Copyright complaints go to <a href="/copyright">/copyright</a> instead.
      </Section>
      <Section title="2. How to send a report">
        Email <a href="mailto:info@vibecodingturkey.com">info@vibecodingturkey.com</a> with:
        <ul>
          <li>Your contact email (we may need to follow up).</li>
          <li>What happened, in your own words.</li>
          <li>Who or what is involved (account username, Mira chat ID, share-card URL, screenshot).</li>
          <li>When it happened (date and approximate time, with timezone if known).</li>
          <li>Whether you reported it elsewhere (police, hotline, another platform).</li>
        </ul>
        Do not include sensitive personal data of others (passwords, financial info) — we cannot accept or store it.
      </Section>
      <Section title="3. What we do with reports">
        We review each report, ordinarily within 5 business days. We may remove content, suspend or terminate accounts, preserve evidence, or refer matters to authorities where required by law. We may contact you if we need clarification. We do not share your identity with the reported user unless legally compelled.
      </Section>
      <Section title="4. Emergencies">
        If a report involves immediate danger to life, contact local emergency services first. DidntHappen does not provide emergency response.
      </Section>
      <Section title="5. False reports">
        Knowingly submitting a false report wastes review capacity and can be grounds for suspension of the reporter's account.
      </Section>
    </LegalPage>
  );
}
