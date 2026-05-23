import type { Metadata } from "next";
import { LegalPage, Section } from "@/components/Legal";

export const metadata: Metadata = {
  title: "Acceptable Use Policy — DidntHappen",
  description: "Acceptable Use Policy for the DidntHappen iOS app.",
};

export default function AcceptableUsePage() {
  return (
    <LegalPage title="Acceptable Use Policy">
      <Section title="1. Purpose">
        DidntHappen is a self-reflection and journaling tool. This policy lists what you may not do with the app.
      </Section>
      <Section title="2. Prohibited conduct">
        You may not use DidntHappen to:
        <ul>
          <li>Break any law or regulation that applies to you, including laws on harassment, hate speech, threats, or violence.</li>
          <li>Encourage self-harm, suicide, or violence against others.</li>
          <li>Impersonate another person, organization, or service.</li>
          <li>Submit content that infringes a third party's copyright, trademark, privacy, or publicity rights.</li>
          <li>Attempt to access another user's account, data, or device.</li>
          <li>Interfere with the security or integrity of the app, servers, or networks (rate-limit bypass, scraping, vulnerability probing without authorization, malware injection).</li>
          <li>Use the app to make automated decisions about people (employment, insurance, credit, housing). DidntHappen outputs are reflections, not assessments.</li>
          <li>Reproduce, sell, sublicense, or commercially redistribute the app, its content, or Mira's outputs without our prior written permission.</li>
          <li>Reverse engineer, decompile, or attempt to derive source code, except where the law expressly allows.</li>
        </ul>
      </Section>
      <Section title="3. Mira AI usage">
        Mira is an AI reflection companion, not a therapist, doctor, lawyer, or emergency service. Do not use Mira to request medical diagnosis, medication dosing, crisis intervention, legal advice, or any high-stakes decision. If you are in danger, contact local emergency services.
      </Section>
      <Section title="4. Enforcement">
        We may suspend or terminate accounts that violate this policy, remove offending content, and report unlawful conduct to authorities where required. We may also preserve evidence (timestamps, device IDs, IPs) where permitted by law.
      </Section>
      <Section title="5. Reporting violations">
        Report suspected violations to <a href="mailto:abuse@didnthappen.app">abuse@didnthappen.app</a>. We review reports promptly.
      </Section>
    </LegalPage>
  );
}
