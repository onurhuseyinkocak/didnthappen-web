import type { Metadata } from "next";
import { LegalPage, Section } from "@/components/Legal";

export const metadata: Metadata = {
  title: "Unsubscribe — DidntHappen",
  description: "Manage your email preferences for DidntHappen.",
};

export default function UnsubscribePage() {
  return (
    <LegalPage title="Unsubscribe">
      <Section title="1. About our email">
        DidntHappen sends two kinds of email:
        <ul>
          <li><strong>Transactional</strong> — account confirmation, magic-link sign-in, password reset, security alerts. These are required to operate the service and cannot be turned off while you have an account.</li>
          <li><strong>Marketing or product update</strong> — occasional product news, feature launches, tips. You can unsubscribe from these at any time.</li>
        </ul>
      </Section>
      <Section title="2. One-click unsubscribe">
        Every marketing email contains an unsubscribe link in the footer. Tap it to remove yourself from the marketing list immediately. We honour unsubscribes globally across all marketing lists within 24 hours and process all marketing-list opt-outs within the 10-business-day window required by U.S. CAN-SPAM.
      </Section>
      <Section title="3. Manual unsubscribe">
        If a link does not work, email <a href="mailto:info@vibecodingturkey.com">info@vibecodingturkey.com</a> from the address you want to remove. Subject: "Unsubscribe". We confirm by reply.
      </Section>
      <Section title="4. Manage preferences in app">
        You can disable push notifications individually in iOS Settings → Notifications → DidntHappen. In-app you can also disable specific reminder types in Settings → Notifications.
      </Section>
      <Section title="5. Right to object (GDPR)">
        If you are in the EEA or UK, you have the right under GDPR Article 21 to object to direct-marketing processing at any time. We will stop sending marketing email as soon as we process your request. You can also delete your account entirely from <a href="/delete-account">/delete-account</a>.
      </Section>
      <Section title="6. Transactional email cannot be disabled">
        Sign-in confirmations, password resets, and security alerts are required by law and by Apple's developer policies to keep your account safe. The only way to stop receiving them is to delete the account.
      </Section>
    </LegalPage>
  );
}
