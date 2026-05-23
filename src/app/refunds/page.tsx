import type { Metadata } from "next";
import { LegalPage, Section } from "@/components/Legal";

export const metadata: Metadata = {
  title: "Refund Policy — DidntHappen",
  description: "How refunds work for DidntHappen subscriptions.",
};

export default function RefundsPage() {
  return (
    <LegalPage title="Refund Policy">
      <Section title="1. Refunds go through Apple">
        DidntHappen Pro is sold exclusively through Apple's App Store using Apple's in-app purchase system. All payments, billing disputes, and refunds are handled by Apple, not by us. We do not have access to your payment method and cannot process refunds directly.
      </Section>
      <Section title="2. Request a refund from Apple">
        To request a refund:
        <ol>
          <li>Visit <a href="https://reportaproblem.apple.com" target="_blank" rel="noreferrer">reportaproblem.apple.com</a> in any browser.</li>
          <li>Sign in with the Apple ID used for the purchase.</li>
          <li>Find the DidntHappen Pro charge and tap "Report a Problem".</li>
          <li>Choose the reason that fits and submit.</li>
        </ol>
        Apple reviews each request individually. Approval is at Apple's discretion under Apple's own policies.
      </Section>
      <Section title="3. EU 14-day right of withdrawal">
        If you reside in the European Union and you purchased a subscription, EU law gives you a 14-day right of withdrawal for digital services unless you expressly consented to immediate performance and acknowledged the loss of the right of withdrawal. The App Store's confirmation flow surfaces this. To exercise withdrawal, use the Report a Problem path above and select the EU-withdrawal reason where offered, or write to <a href="mailto:legal@didnthappen.app">legal@didnthappen.app</a>.
      </Section>
      <Section title="4. Trial">
        New subscribers may be eligible for a 3-day free introductory offer. Apple will not bill you if you cancel during the trial. After the trial, the subscription renews at the disclosed price until you cancel.
      </Section>
      <Section title="5. Cancellation">
        Cancel from Settings → [your Apple ID] → Subscriptions, or via <a href="https://apps.apple.com/account/subscriptions" target="_blank" rel="noreferrer">apps.apple.com/account/subscriptions</a>. Cancelling stops the next renewal; access remains until the current period ends.
      </Section>
    </LegalPage>
  );
}
