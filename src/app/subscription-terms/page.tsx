import type { Metadata } from "next";
import { LegalPage, Section, Table } from "@/components/Legal";

export const metadata: Metadata = {
  title: "Subscription Terms — DidntHappen",
  description: "DidntHappen Pro subscription pricing, trial, renewal, and cancellation terms.",
};

export default function SubscriptionTermsPage() {
  return (
    <LegalPage title="Subscription Terms">
      <Section title="1. Products">
        DidntHappen Pro unlocks all features of the app. Two subscription options:
        <Table rows={[
          ["Plan", "Price", "Free trial"],
          ["Weekly", "$2.99 / week", "3-day free trial for eligible new users"],
          ["Yearly", "$59.99 / year", "3-day free trial for eligible new users"],
        ]} />
        Prices may vary by territory in your local currency as displayed by Apple at the point of purchase. The trial is available in 175 territories.
      </Section>
      <Section title="2. Auto-renewal">
        Your subscription renews automatically at the end of each period (weekly or yearly) until you cancel. Apple charges your Apple ID payment method within 24 hours before the period ends. The renewal price equals the original purchase price unless we publish a price change at least 30 days in advance, in which case Apple will collect your explicit consent before charging the new price.
      </Section>
      <Section title="3. Trial conversion">
        If you are eligible for the 3-day free trial, you are not charged during those 3 days. If you do not cancel before the trial ends, the subscription begins and Apple charges the price shown on the paywall. You may have only one trial per Apple ID across both subscription options.
      </Section>
      <Section title="4. Cancellation">
        Cancel any time from Settings → [your Apple ID] → Subscriptions, or via <a href="https://apps.apple.com/account/subscriptions" target="_blank" rel="noreferrer">apps.apple.com/account/subscriptions</a>. Cancelling stops the next renewal. You keep Pro access until the end of the period you already paid for.
      </Section>
      <Section title="5. Restore purchases">
        Tap "Restore Purchases" on the paywall or in Settings to recover an active subscription on a new device or after re-installing the app.
      </Section>
      <Section title="6. Family Sharing">
        Family Sharing is currently not enabled on DidntHappen Pro subscriptions. If this changes, this page will be updated.
      </Section>
      <Section title="7. Refunds">
        See <a href="/refunds">/refunds</a>. Refunds are handled by Apple.
      </Section>
      <Section title="8. Changes to these terms">
        We may change these subscription terms going forward. Material changes will be disclosed in-app before they apply to your subscription. Continued use after the change means you accept the new terms; if you do not, cancel.
      </Section>
    </LegalPage>
  );
}
