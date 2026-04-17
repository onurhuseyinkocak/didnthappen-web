import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy — DidntHappen",
  description: "Privacy Policy for the DidntHappen iOS app.",
};

const LAST_UPDATED = "April 15, 2026";
const EFFECTIVE_DATE = "April 15, 2026";
const APP_NAME = "DidntHappen";
const DEVELOPER_NAME = "DidntHappen";
const CONTACT_EMAIL = "privacy@didnthappen.app";
const SUPPORT_URL = "https://didnthappen-web.vercel.app/support";

export default function PrivacyPage() {
  return (
    <div style={{ maxWidth: 680, margin: "0 auto", padding: "64px 24px 96px" }}>
      <a href="/" style={backLink}>← Back</a>

      <h1 style={h1}>Privacy Policy</h1>
      <p style={meta}>Effective: {EFFECTIVE_DATE} · Last updated: {LAST_UPDATED}</p>

      {/* Apple requires: identify what personal data is collected */}
      <Section title="1. Information We Collect">
        <p>We collect the following categories of personal information:</p>
        <Table rows={[
          ["Category", "Examples", "Purpose"],
          ["Contact information", "Email address (if provided via Apple Sign In)", "Account creation and authentication"],
          ["Identifiers", "Apple-issued anonymized user ID", "Link your data to your account securely"],
          ["User-generated content", "Worry text, category, deadline, outcome, intensity rating, reflections", "Core app functionality — storing and syncing your entries"],
          ["Usage data", "Crash logs, error messages (anonymous)", "App stability and bug fixes"],
          ["Preferences", "First name, primary worry category, notification settings", "Personalization"],
        ]} />
        <p style={{ marginTop: 12 }}>
          We do <strong>not</strong> collect precise geolocation, biometric data, browsing history, contacts, photos, or any data not listed above.
        </p>
      </Section>

      {/* Apple requires: explain purpose of data collection */}
      <Section title="2. How We Use Your Information">
        <ul>
          <li>To create and maintain your account.</li>
          <li>To store, sync, and display your worry entries across devices.</li>
          <li>To calculate your personal Reality Gap score and statistics.</li>
          <li>To send you push notifications you have opted into (deadline reminders, morning check-ins). You can withdraw consent at any time in iOS Settings.</li>
          <li>To diagnose crashes and improve app stability using anonymous error logs.</li>
          <li>To comply with our legal obligations.</li>
        </ul>
        <p style={{ marginTop: 12 }}>We do <strong>not</strong> use your data for targeted advertising, behavioral profiling, or any purpose beyond providing the app service to you.</p>
      </Section>

      {/* Apple requires: data sharing disclosure */}
      <Section title="3. Data Sharing and Disclosure">
        <p>We do not sell, rent, or trade your personal data. We share data only as follows:</p>
        <ul>
          <li><strong>Supabase (database provider):</strong> Your worry entries and account data are stored on Supabase servers (PostgreSQL). Supabase acts as a data processor under our instructions and does not use your data for its own purposes. Data is stored in the US.</li>
          <li><strong>Apple:</strong> Sign In with Apple transactions are processed by Apple. We receive only the anonymized identifier and optional email Apple provides.</li>
          <li><strong>Legal requirements:</strong> We may disclose information if required by law, court order, or to protect the safety of users or the public.</li>
        </ul>
        <p style={{ marginTop: 12 }}>No other third parties receive your personal data.</p>
      </Section>

      {/* Apple requires: data retention policy */}
      <Section title="4. Data Retention">
        <ul>
          <li>Your account data and worry entries are retained while your account is active.</li>
          <li>If you delete your account (Settings → Delete Account), all personal data is permanently deleted from our servers within <strong>30 days</strong>.</li>
          <li>Anonymous crash logs are retained for up to 90 days, after which they are automatically purged.</li>
          <li>You may request earlier deletion by contacting us at <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.</li>
        </ul>
      </Section>

      {/* Apple requires: security section */}
      <Section title="5. Security">
        <p>We implement the following security measures:</p>
        <ul>
          <li><strong>Encryption in transit:</strong> All data is transmitted over HTTPS/TLS.</li>
          <li><strong>Encryption at rest:</strong> Data stored in Supabase is encrypted at rest.</li>
          <li><strong>Row-level security:</strong> Database policies ensure each user can only access their own data — no other user or process can read your worry entries.</li>
          <li><strong>Authentication:</strong> Account access is protected by Sign In with Apple or email/password authentication.</li>
        </ul>
        <p style={{ marginTop: 12 }}>No method of transmission over the Internet is 100% secure. While we use commercially reasonable means to protect your data, we cannot guarantee absolute security.</p>
      </Section>

      {/* Apple requires: user rights */}
      <Section title="6. Your Rights and Choices">
        <p>Depending on your location, you may have the following rights:</p>
        <ul>
          <li><strong>Access:</strong> Request a copy of the personal data we hold about you.</li>
          <li><strong>Correction:</strong> Request correction of inaccurate data.</li>
          <li><strong>Deletion:</strong> Delete your account and all associated data from within the app (Settings → Delete Account), or by contacting us.</li>
          <li><strong>Data portability:</strong> Export your worry data in JSON format from the app's Settings screen.</li>
          <li><strong>Withdraw consent:</strong> Disable push notifications at any time in iOS Settings → DidntHappen → Notifications.</li>
          <li><strong>Opt out of telemetry:</strong> Crash reporting is anonymous and cannot be linked back to you.</li>
        </ul>
        <p style={{ marginTop: 12 }}>To exercise any rights, contact us at <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>. We will respond within 30 days.</p>
      </Section>

      {/* Apple requires: children's privacy */}
      <Section title="7. Children's Privacy (COPPA)">
        {APP_NAME} is rated 4+ on the App Store and is not directed at children under the age of 13. We do not knowingly collect personal information from children under 13. If you are a parent or guardian and believe your child has provided us with personal information, please contact us immediately at <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a> and we will delete the information promptly.
      </Section>

      {/* Apple requires: Sign In with Apple */}
      <Section title="8. Sign In with Apple">
        We support Sign In with Apple as an authentication method. When you use this feature:
        <ul>
          <li>Apple generates a unique anonymized identifier for your account on our service.</li>
          <li>You choose whether to share your real email or use Apple's private relay email.</li>
          <li>We never receive your Apple ID password.</li>
          <li>Apple's Privacy Policy governs the data Apple collects during authentication.</li>
        </ul>
      </Section>

      {/* Apple requires: subscriptions / payments */}
      <Section title="9. Subscriptions and Payments">
        All subscription payments for {APP_NAME} Pro are processed by Apple through the App Store. We do not collect, store, or process payment card information. Your subscription can be managed through your Apple ID account settings. Apple's Privacy Policy applies to payment processing.
      </Section>

      {/* Apple requires: third-party SDK disclosure */}
      <Section title="10. Third-Party Services">
        <p>The app uses the following third-party services:</p>
        <Table rows={[
          ["Service", "Purpose", "Data shared"],
          ["Supabase", "Database & authentication", "Account ID, worry entries"],
          ["Apple StoreKit 2", "Subscription management", "None (handled by Apple)"],
          ["Apple Push Notification Service", "Local notifications", "Device push token (Apple only)"],
        ]} />
        <p style={{ marginTop: 12 }}>We do not use any third-party advertising, analytics, or tracking SDKs.</p>
      </Section>

      <Section title="11. International Data Transfers">
        Your data may be stored and processed in the United States, where our database provider (Supabase) operates. By using the app, you consent to this transfer. We ensure appropriate safeguards are in place.
      </Section>

      {/* Apple requires: GDPR / California notice where applicable */}
      <Section title="12. California and EEA Residents">
        <p><strong>California (CCPA/CPRA):</strong> We do not sell personal information. You have the right to know, delete, and opt-out of sale (though we do not sell). Contact us to exercise your rights.</p>
        <p style={{ marginTop: 8 }}><strong>European Economic Area (GDPR):</strong> Our legal basis for processing is contract performance (providing the app service). You have the right to access, rectify, erase, restrict, and port your data, and to lodge a complaint with your supervisory authority.</p>
      </Section>

      <Section title="13. Changes to This Policy">
        We may update this Privacy Policy. We will notify you of material changes via an in-app banner before the change takes effect. The updated policy will also be posted at this URL with a new effective date. Continued use after changes constitutes acceptance.
      </Section>

      <Section title="14. Contact and Data Controller">
        <p><strong>Data controller:</strong> {DEVELOPER_NAME}</p>
        <p>Email: <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a></p>
        <p>Support: <a href={SUPPORT_URL}>{SUPPORT_URL}</a></p>
      </Section>

      <div style={{ borderTop: "1px solid var(--border)", marginTop: 64, paddingTop: 32, display: "flex", gap: 24, fontSize: 14, color: "var(--text-tertiary)" }}>
        <a href="/">Home</a>
        <a href="/terms">Terms of Use</a>
        <a href="/support">Support</a>
      </div>
    </div>
  );
}

// ─── Helpers ─────────────────────────────────────────────────────────────────

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

function Table({ rows }: { rows: string[][] }) {
  const [header, ...body] = rows;
  return (
    <div style={{ overflowX: "auto", margin: "12px 0" }}>
      <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 14 }}>
        <thead>
          <tr>
            {header.map((h) => (
              <th key={h} style={{ textAlign: "left", padding: "8px 12px", background: "var(--accent-light)", color: "var(--accent)", fontWeight: 600, borderBottom: "2px solid var(--border)" }}>
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {body.map((row, i) => (
            <tr key={i} style={{ background: i % 2 === 0 ? "var(--surface)" : "transparent" }}>
              {row.map((cell, j) => (
                <td key={j} style={{ padding: "8px 12px", borderBottom: "1px solid var(--border)", color: "var(--text-secondary)" }}>
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

const backLink: React.CSSProperties = { display: "inline-flex", alignItems: "center", gap: 8, color: "var(--text-secondary)", fontSize: 14, marginBottom: 48 };
const h1: React.CSSProperties = { fontSize: 34, fontWeight: 800, marginBottom: 8, letterSpacing: "-0.5px" };
const meta: React.CSSProperties = { color: "var(--text-tertiary)", marginBottom: 48, fontSize: 14 };
