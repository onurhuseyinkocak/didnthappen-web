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
        DidntHappen uses generative AI in the following places:
        <ul>
          <li><strong>Mira reflective companion</strong> — produces short conversational text in response to your worry entries and chat messages using OpenAI's gpt-4o-mini model.</li>
          <li><strong>Mira voice</strong> — synthesizes Mira's text-generated responses into speech using Microsoft Edge TTS (neural voice synthesis).</li>
          <li><strong>Memory extraction and pattern detection</strong> — analyzes your entries to identify key people, relationships, recurring events, and worry patterns using OpenAI's API.</li>
        </ul>
      </Section>
      <Section title="2. EU AI Act Transparency (2026)">
        <p>
          As of August 2, 2026, DidntHappen complies with the EU Artificial Intelligence Act's transparency obligations for limited-risk AI systems:
        </p>
        <ul>
          <li><strong>You are interacting with an AI system.</strong> Mira is a generative AI assistant, not a human or clinician.</li>
          <li><strong>AI-generated content notice:</strong> Text responses from Mira are computer-generated using OpenAI's language model and should not be assumed to be human-written or professionally validated.</li>
          <li><strong>No automated decision-making that restricts access:</strong> We do not use AI to make decisions that restrict your access to the app or its features.</li>
          <li><strong>Human oversight available:</strong> Our mental health disclaimers ensure you are informed of AI limitations and encouraged to seek professional help when needed.</li>
        </ul>
      </Section>
      <Section title="3. What AI is not">
        AI outputs are computer-generated suggestions, not professional advice. Mira is not a therapist, psychologist, psychiatrist, social worker, physician, lawyer, financial advisor, or emergency responder. Do not use Mira's responses for medical decisions, medication management, legal questions, financial choices, or any high-stakes situation.
      </Section>
      <Section title="4. Inaccuracy and hallucination">
        Generative AI can produce plausible-sounding text that is factually wrong, out-of-date, or fabricated. Always verify any claim Mira makes before acting on it. We do not guarantee accuracy, completeness, or fitness for purpose.
      </Section>
      <Section title="5. Data sent to OpenAI">
        <p>
          When you interact with Mira or use memory extraction features, the following data is sent to OpenAI's API:
        </p>
        <ul>
          <li><strong>Worry text:</strong> Your worry description and chat messages sent for Mira's response generation.</li>
          <li><strong>Context for memory extraction:</strong> Selected excerpts from your entries used to identify people and patterns.</li>
          <li><strong>OpenAI's data handling:</strong> OpenAI processes this data under a Data Processing Addendum (DPA) that prohibits model training on API traffic. Data is retained for up to 30 days for abuse monitoring unless you have a Zero Data Retention (ZDR) agreement (not currently enabled for this app).</li>
          <li><strong>Your control:</strong> You can limit AI features by not engaging with Mira or memory-analysis features, though this may reduce app functionality.</li>
        </ul>
      </Section>
      <Section title="6. Crisis content">
        If you describe thoughts of self-harm, suicide, or serious medical emergency, Mira is configured to surface crisis-line resources and decline to give clinical instructions. This is a safety guardrail, not a substitute for emergency services. Call your local emergency number if you are in immediate danger.
      </Section>
      <Section title="7. No affiliation">
        DidntHappen is not affiliated with, endorsed by, or sponsored by OpenAI, Apple, Microsoft, RevenueCat, Sentry, Supabase, Render, or any other vendor mentioned in our service architecture. Brand names appear only to identify the technologies we use.
      </Section>
      <Section title="8. Your responsibility">
        You are responsible for reviewing AI outputs lawfully and ethically before relying on or sharing them. You may not present Mira's outputs as content created by a human professional or as medical, legal, or professional advice.
      </Section>
    </LegalPage>
  );
}
