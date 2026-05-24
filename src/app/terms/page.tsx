import type { Metadata } from "next";
import { LegalFooter } from "@/components/Legal";

export const metadata: Metadata = {
  title: "Terms of Use — DidntHappen",
  description: "Terms of Use for the DidntHappen iOS app.",
};

const LAST_UPDATED = "May 24, 2026";
const EFFECTIVE_DATE = "May 24, 2026";
const APP_NAME = "DidntHappen";
const DEVELOPER_NAME = "DidntHappen";
const CONTACT_EMAIL = "info@vibecodingturkey.com";

export default function TermsPage() {
  return (
    <div style={{ maxWidth: 680, margin: "0 auto", padding: "64px 24px 96px" }}>
      <a href="/" style={backLink}>← Back</a>

      <h1 style={h1}>Terms of Use</h1>
      <p style={meta}>Effective: {EFFECTIVE_DATE} · Last updated: {LAST_UPDATED}</p>

      {/* Apple EULA requirement: must be accepted before use */}
      <Section title="1. Agreement to Terms">
        By downloading, installing, or using {APP_NAME} ("the App"), you enter into a binding agreement with {DEVELOPER_NAME} ("we," "us," or "our") and agree to these Terms of Use ("Terms"). If you do not agree to these Terms, do not download or use the App.
      </Section>

      <Section title="2. Eligibility">
        <ul>
          <li>You must be at least <strong>13 years old</strong> to use the App.</li>
          <li>If you are between 13 and 18, you must have parental or guardian consent.</li>
          <li>By using the App, you represent that you meet these requirements.</li>
        </ul>
      </Section>

      <Section title="3. License to Use the App">
        Subject to these Terms, we grant you a limited, non-exclusive, non-transferable, revocable license to download and use the App on Apple-branded devices that you own or control, solely for your personal, non-commercial use, as permitted by the App Store Terms of Service.
      </Section>

      {/* Apple requires: NOT a medical service disclaimer */}
      <Section title="4. Not a Medical or Mental Health Service">
        <p style={{ fontWeight: 600, color: "var(--text)" }}>
          {APP_NAME} is a personal productivity and self-reflection tool. It is NOT a medical service, mental health treatment, therapy, counseling, or clinical intervention.
        </p>
        <ul>
          <li>The app does not provide diagnoses, treatment plans, or medical advice.</li>
          <li>Exercises within the app (breathing, cognitive defusion, grounding) are informational tools, not clinical protocols.</li>
          <li>Mira is an AI system, not a licensed clinician, and cannot diagnose or treat mental health conditions.</li>
          <li>Statistics (e.g., "91% of fears never happen") are based on published peer-reviewed research and your personal data — they are not guaranteed outcomes for any individual.</li>
        </ul>
        <p style={{ marginTop: 12, fontWeight: 600, color: "var(--text)" }}>
          If you are experiencing a mental health crisis or emergency, please contact emergency services or a qualified mental health professional in your country immediately.
        </p>
      </Section>

      <Section title="4b. AI Data Processing and OpenAI DPA">
        <p>
          When you use Mira or opt into memory-extraction features, your text is sent to OpenAI's API for processing:
        </p>
        <ul>
          <li><strong>Data Processing Addendum (DPA):</strong> OpenAI processes this data under a DPA that explicitly prohibits training future models on your API traffic.</li>
          <li><strong>Retention:</strong> OpenAI retains data for up to 30 days for abuse monitoring. Longer retention is available only under Enterprise agreements (Zero Data Retention).</li>
          <li><strong>No training:</strong> Your worry entries and conversations are not used to improve OpenAI's models or shared with other customers.</li>
          <li><strong>Your choice:</strong> You can disable Mira features to avoid sending data to OpenAI, though this limits app functionality.</li>
        </ul>
      </Section>

      {/* Apple requires: subscription / auto-renewal terms — verbatim Apple language required */}
      <Section title="6. Subscriptions and Billing">
        <p><strong>{APP_NAME} Pro</strong> is available as an auto-renewing subscription:</p>
        <ul>
          <li><strong>Plans:</strong> Weekly ($2.99/week) and Annual ($59.99/year). Prices vary by territory.</li>
          <li><strong>Free trial:</strong> Eligible new subscribers receive a 3-day free introductory period. The trial is offered on both Weekly and Annual plans in 175 territories and is granted at most once per Apple ID across both plans. Apple does not charge during the trial. If you do not cancel before the trial ends, the subscription begins at the price shown on the paywall.</li>
          <li><strong>Payment:</strong> Payment will be charged to your Apple ID account at confirmation of purchase (or at the end of the free trial, if applicable).</li>
          <li><strong>Auto-renewal:</strong> Your subscription automatically renews unless cancelled at least 24 hours before the end of the current billing period.</li>
          <li><strong>Renewal charge:</strong> Your account will be charged for renewal within 24 hours prior to the end of the current period, at the rate of the selected plan.</li>
          <li><strong>Managing subscriptions:</strong> You can manage and turn off auto-renewal at any time in Settings → [your Apple ID] → Subscriptions, or via <a href="https://apps.apple.com/account/subscriptions" target="_blank" rel="noreferrer">apps.apple.com/account/subscriptions</a>.</li>
          <li><strong>Cancellation:</strong> Cancellation takes effect at the end of the current billing period — you retain access until then.</li>
          <li><strong>Refunds:</strong> Refund requests are handled exclusively by Apple. See <a href="/refunds">/refunds</a>.</li>
          <li><strong>EU 14-day withdrawal:</strong> EU residents may withdraw a subscription purchase within 14 days where Apple's flow does not require explicit consent to immediate performance. See <a href="/refunds">/refunds</a>.</li>
          <li><strong>Price changes:</strong> Material price increases require your explicit consent before Apple charges the new price, as enforced by Apple. Otherwise, continued use after a notified price change constitutes acceptance.</li>
        </ul>
        <p style={{ marginTop: 12 }}>
          Full subscription terms are also published at <a href="/subscription-terms">/subscription-terms</a>.
        </p>
      </Section>

      <Section title="7. User Accounts">
        <ul>
          <li>You are responsible for maintaining the security of your account.</li>
          <li>You must not share your account credentials with others.</li>
          <li>You must notify us immediately of any unauthorized use of your account.</li>
          <li>We are not liable for any loss resulting from unauthorized access to your account caused by your failure to secure your credentials.</li>
        </ul>
      </Section>

      <Section title="8. User Content">
        <p>You retain full ownership of any content you create in the App ("User Content"), including worry entries, notes, and reflections.</p>
        <ul>
          <li>By using the App, you grant us a limited, non-exclusive, worldwide, royalty-free license to store, process, and display your User Content solely to provide the service to you.</li>
          <li>You are responsible for the accuracy and legality of your User Content.</li>
          <li>You may export or delete your User Content at any time from the Settings screen.</li>
        </ul>
      </Section>

      <Section title="9. Acceptable Use">
        <p>You agree not to:</p>
        <ul>
          <li>Use the App for any unlawful, harmful, or fraudulent purpose.</li>
          <li>Attempt to reverse-engineer, decompile, disassemble, or derive source code from the App.</li>
          <li>Use the App to store content that violates any third-party intellectual property rights.</li>
          <li>Interfere with or disrupt the App's servers, networks, or infrastructure.</li>
          <li>Attempt to gain unauthorized access to any portion of the App or its related systems.</li>
          <li>Use automated tools to scrape, extract, or collect data from the App.</li>
        </ul>
      </Section>

      <Section title="10. Intellectual Property">
        All content, software, features, and functionality of {APP_NAME} — including but not limited to the UI design, graphics, text, animations, and source code — are owned by or licensed to {DEVELOPER_NAME} and are protected by copyright, trademark, and other intellectual property laws. You may not copy, modify, distribute, sell, or create derivative works without our written permission.
      </Section>

      {/* Apple requires: termination clause */}
      <Section title="11. Termination">
        <p>We may suspend or terminate your access to the App at any time if you violate these Terms or for any other reason at our sole discretion. You may terminate your account at any time by deleting it from the Settings screen.</p>
        <p style={{ marginTop: 8 }}>Upon termination, your license to use the App ends. Sections that by their nature should survive termination (intellectual property, disclaimers, limitation of liability) will continue to apply.</p>
      </Section>

      {/* Apple requires: disclaimer of warranties */}
      <Section title="12. Disclaimer of Warranties">
        THE APP IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED. TO THE FULLEST EXTENT PERMITTED BY LAW, WE DISCLAIM ALL WARRANTIES INCLUDING, WITHOUT LIMITATION, IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT. WE DO NOT WARRANT THAT THE APP WILL BE UNINTERRUPTED, ERROR-FREE, SECURE, OR FREE OF HARMFUL COMPONENTS.
      </Section>

      {/* Apple requires: limitation of liability */}
      <Section title="13. Limitation of Liability">
        TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, IN NO EVENT SHALL {DEVELOPER_NAME.toUpperCase()} BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, EXEMPLARY, OR PUNITIVE DAMAGES — INCLUDING LOSS OF PROFITS, DATA, GOODWILL, OR BUSINESS — ARISING OUT OF OR IN CONNECTION WITH YOUR USE OF THE APP, EVEN IF WE HAVE BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.

        OUR TOTAL LIABILITY TO YOU FOR ALL CLAIMS ARISING FROM OR RELATED TO THE APP SHALL NOT EXCEED THE AMOUNT YOU PAID FOR THE APP (IF ANY) IN THE TWELVE MONTHS PRECEDING THE CLAIM.
      </Section>

      {/* Apple requires: account deletion instructions */}
      <Section title="14. Account Deletion">
        You may delete your account at any time:
        <ol>
          <li>Open the {APP_NAME} app.</li>
          <li>Tap the <strong>Settings</strong> tab.</li>
          <li>Scroll to the bottom and tap <strong>Delete Account</strong>.</li>
          <li>Confirm the deletion.</li>
        </ol>
        All personal data associated with your account will be permanently deleted from our servers within 30 days of the request, as required by Apple's App Store Review Guidelines (Guideline 5.1.1).
      </Section>

      {/* Apple requires: third-party content / links */}
      <Section title="15. Third-Party Services">
        The App integrates with third-party services (Apple Sign In, App Store subscriptions, Supabase for data storage). Your use of these services is subject to their respective terms and privacy policies. We are not responsible for the practices of any third-party service providers.
      </Section>

      {/* Apple requires: governing law */}
      <Section title="15. Governing Law and Disputes">
        These Terms are governed by the laws of the Republic of Türkiye, without regard to its conflict-of-laws rules. Mandatory consumer-protection rights in your country of residence (EU, UK, US states, etc.) remain unaffected. Any dispute arising from these Terms or your use of the App shall first be addressed in good faith between you and us; if not resolved within 30 days, the dispute may be brought before the competent courts of Istanbul, Türkiye, except where mandatory local law assigns exclusive jurisdiction to your country of residence.
      </Section>

      <Section title="17. Apple-Specific Terms">
        <p>As required by Apple's standard EULA provisions:</p>
        <ul>
          <li>These Terms are between you and {DEVELOPER_NAME} only, not with Apple.</li>
          <li>Apple is not responsible for the App or its content.</li>
          <li>Apple has no obligation to provide maintenance or support for the App.</li>
          <li>In the event of any failure of the App to conform to applicable warranties, you may notify Apple and Apple will refund the purchase price (if applicable). Apple has no other warranty obligation regarding the App.</li>
          <li>Apple is not responsible for addressing any claims by you or a third party relating to the App.</li>
          <li>Apple and its subsidiaries are third-party beneficiaries of these Terms and, upon your acceptance, will have the right to enforce these Terms against you.</li>
        </ul>
      </Section>

      <Section title="18. Changes to These Terms">
        We may update these Terms from time to time. We will notify you of material changes via an in-app banner at least 7 days before the change takes effect. Your continued use of the App after the effective date constitutes acceptance of the updated Terms.
      </Section>

      <Section title="18. Contact">
        <p>For questions about these Terms:</p>
        <p>Email: <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a> · Legal: <a href="mailto:info@vibecodingturkey.com">info@vibecodingturkey.com</a></p>
        <p><a href="/contact">/contact</a> · <a href="https://didnthappen-web.vercel.app/support">Support Center</a></p>
      </Section>

      <LegalFooter />
    </div>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section style={{ marginBottom: 40 }}>
      <h2 style={{ fontSize: 19, fontWeight: 700, marginBottom: 12, color: "var(--accent)" }}>{title}</h2>
      <div style={{ fontSize: 15.5, color: "var(--text-secondary)", lineHeight: 1.8 }}>
        {typeof children === "string" ? <p>{children}</p> : children}
      </div>
    </section>
  );
}

const backLink: React.CSSProperties = { display: "inline-flex", alignItems: "center", gap: 8, color: "var(--text-secondary)", fontSize: 14, marginBottom: 48 };
const h1: React.CSSProperties = { fontSize: 34, fontWeight: 800, marginBottom: 8, letterSpacing: "-0.5px" };
const meta: React.CSSProperties = { color: "var(--text-tertiary)", marginBottom: 48, fontSize: 14 };
