import type { Metadata } from "next";
import { LegalPage, Section } from "@/components/Legal";

export const metadata: Metadata = {
  title: "Community Guidelines — DidntHappen",
  description: "Guidelines for any shared content within DidntHappen.",
};

export default function CommunityGuidelinesPage() {
  return (
    <LegalPage title="Community Guidelines">
      <Section title="1. Scope">
        DidntHappen is primarily a private journaling app. The only outward-facing content surface is share cards you create explicitly to share your own progress or stats. These guidelines apply to anything you generate inside the app that you then make visible to others.
      </Section>
      <Section title="2. What we expect">
        <ul>
          <li>Share content that belongs to you or that you have permission to share.</li>
          <li>Respect the privacy of others — do not include identifying details about people who have not consented.</li>
          <li>Do not produce content that promotes self-harm, encourages dangerous behaviour, harasses a specific person, or contains hate against any protected group.</li>
          <li>Keep medical or therapeutic claims to your own personal experience. Mira's outputs and the techniques in the app are not medical advice.</li>
        </ul>
      </Section>
      <Section title="3. What we do not allow">
        <ul>
          <li>Illegal content, child sexual abuse material, terrorism content.</li>
          <li>Content that infringes someone else's copyright, trademark, or right of publicity.</li>
          <li>Doxing, threats, intimate-image abuse, coordinated harassment.</li>
          <li>Content that misrepresents Mira as a licensed professional, therapist, or doctor.</li>
        </ul>
      </Section>
      <Section title="4. Reporting and enforcement">
        Use <a href="/abuse">/abuse</a> or email <a href="mailto:info@vibecodingturkey.com">info@vibecodingturkey.com</a> to report content. We may remove content, suspend, or terminate accounts that violate these guidelines.
      </Section>
      <Section title="5. Appeals">
        If we remove content or suspend your account and you believe we made a mistake, reply to the notification email or write to <a href="mailto:info@vibecodingturkey.com">info@vibecodingturkey.com</a> with details. We will review in good faith.
      </Section>
    </LegalPage>
  );
}
