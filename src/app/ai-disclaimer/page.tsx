import type { Metadata } from "next";
import { LegalPage, Section } from "@/components/Legal";

export const metadata: Metadata = {
  title: "AI Disclaimer — DidntHappen",
  description: "How AI is used in DidntHappen and what it is not.",
};

export default function AiDisclaimerPage() {
  return (
    <LegalPage title="AI Disclaimer">
      <Section title="1. Where AI is used">
        DidntHappen uses generative AI in two places:
        <ul>
          <li><strong>Mira reflective companion</strong> — produces short conversational text in response to your worry entries and chat messages.</li>
          <li><strong>Mira voice</strong> — synthesises Mira's text into speech using Microsoft's neural Edge TTS.</li>
        </ul>
        The underlying language model is provided by OpenAI (model selected for response generation).
      </Section>
      <Section title="2. What AI is not">
        AI outputs are computer-generated suggestions, not professional advice. Mira is not a therapist, psychologist, psychiatrist, social worker, physician, lawyer, financial advisor, or emergency responder. Do not use Mira's responses for medical decisions, medication management, legal questions, financial choices, or any high-stakes situation.
      </Section>
      <Section title="3. Inaccuracy and hallucination">
        Generative AI can produce plausible-sounding text that is factually wrong or out-of-date. Always verify any claim Mira makes before acting on it. We do not guarantee accuracy, completeness, or fitness for purpose.
      </Section>
      <Section title="4. Crisis content">
        If you describe thoughts of self-harm, suicide, or serious medical emergency, Mira is configured to surface crisis-line resources and decline to give clinical instructions. This is a safety guardrail, not a substitute for emergency services. Call your local emergency number if you are in immediate danger.
      </Section>
      <Section title="5. No affiliation">
        DidntHappen is not affiliated with, endorsed by, or sponsored by OpenAI, Apple, Microsoft, RevenueCat, Sentry, Supabase, Render, or any other vendor mentioned in our service architecture. Brand names appear only to identify the technologies we use.
      </Section>
      <Section title="6. Your responsibility">
        You are responsible for reviewing AI outputs lawfully and ethically before relying on or sharing them. You may not present Mira's outputs as content created by a human professional.
      </Section>
    </LegalPage>
  );
}
