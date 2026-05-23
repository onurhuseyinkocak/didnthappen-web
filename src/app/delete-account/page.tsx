import type { Metadata } from "next";
import { LegalPage, Section } from "@/components/Legal";

export const metadata: Metadata = {
  title: "Delete Account — DidntHappen",
  description: "How to delete your DidntHappen account and the data associated with it.",
};

export default function DeleteAccountPage() {
  return (
    <LegalPage title="Delete Account">
      <Section title="1. In-app deletion (preferred)">
        Open the DidntHappen iOS app → <strong>Settings</strong> → scroll to <strong>Account</strong> → tap <strong>Delete Account</strong> → confirm. Deletion runs immediately and removes:
        <ul>
          <li>Your profile (name, preferences)</li>
          <li>All worry entries, predictions, and outcomes you logged</li>
          <li>Chat history with Mira</li>
          <li>Voice transcripts, core memories, garden plants you collected</li>
          <li>Your authentication record</li>
        </ul>
        Apple's StoreKit subscription (if any) is not cancelled automatically — manage it in <a href="https://apps.apple.com/account/subscriptions" target="_blank" rel="noreferrer">Apple ID → Subscriptions</a>.
      </Section>
      <Section title="2. Deletion by email">
        If you cannot use the app, email <a href="mailto:delete@didnthappen.app">delete@didnthappen.app</a> from the email address linked to your account, or from any address with proof of account ownership (subscription receipt, etc.). State that you want to delete your account. We complete the deletion within 30 days and confirm by reply.
      </Section>
      <Section title="3. What is retained">
        We may retain limited data after deletion only where law requires us to (e.g. financial records of paid subscriptions for tax / accounting periods), or where strictly necessary to defend legal claims. Retention is the minimum required and the data is not used for any other purpose. Anonymous crash logs that have already been ingested by Sentry may persist for that provider's retention period (typically 90 days).
      </Section>
      <Section title="4. Third-party records">
        Deletion in our systems does not automatically delete data held by independent processors who already received it before deletion: Apple (subscription records), RevenueCat (subscription analytics), Sentry (anonymous crash logs), OpenAI (transient generation calls — not retained past the API turn), Microsoft Edge TTS (transient synthesis). We have no API to force their deletion beyond what their own retention policies dictate.
      </Section>
      <Section title="5. Recovery is not possible">
        Once deletion completes, your data is gone. We cannot recover worry entries, Mira chats, or memories after deletion. Export anything you want to keep first, by contacting <a href="mailto:privacy@didnthappen.app">privacy@didnthappen.app</a>.
      </Section>
    </LegalPage>
  );
}
