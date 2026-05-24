import type { Metadata } from "next";
import { LegalFooter } from "@/components/Legal";

export const metadata: Metadata = {
  title: "Privacy Policy — DidntHappen",
  description: "Privacy Policy for the DidntHappen iOS app.",
};

const LAST_UPDATED = "May 24, 2026";
const EFFECTIVE_DATE = "May 24, 2026";
const APP_NAME = "DidntHappen";
const DEVELOPER_NAME = "DidntHappen";
const CONTACT_EMAIL = "info@vibecodingturkey.com";
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
          ["User-generated content", "Worry text, category, deadline, outcome, intensity rating, reflections, chat messages with Mira", "Core app functionality — storing and syncing your entries"],
          ["Audio data (voice input)", "Voice transcripts from speech-to-text (processed on-device by Apple's Speech Recognition framework). Raw audio is never transmitted to our servers.", "Convert spoken worries to text using your device's native speech recognition"],
          ["Auto-extracted memories", "People names, relationships, life facts, worry patterns (extracted by AI analysis of your entries)", "Pattern detection and personalized insight generation"],
          ["Usage data", "Crash logs, error messages (anonymous)", "App stability and bug fixes"],
          ["Preferences", "First name, primary worry category, notification settings", "Personalization"],
        ]} />
        <p style={{ marginTop: 12 }}>
          We do <strong>not</strong> collect precise geolocation, biometric data, browsing history, contacts, photos, or any data not listed above.
        </p>
      </Section>

      <Section title="2. Voice Input and Audio Data Processing">
        <p>
          When you use voice input to describe worries, the following happens:
        </p>
        <ul>
          <li><strong>On-device transcription:</strong> Your voice is transcribed into text using Apple's built-in Speech Recognition framework. This transcription happens entirely on your device and is not shared with us.</li>
          <li><strong>Raw audio is never sent:</strong> Only the resulting text transcript is transmitted to our servers. Your raw audio file is not retained or transmitted.</li>
          <li><strong>Transcript storage:</strong> The text transcript is stored in your Supabase account as a worry entry (encrypted in transit and at rest).</li>
          <li><strong>Apple's involvement:</strong> Apple's Speech Recognition API may collect minimal usage data as part of iOS system services; see Apple's Privacy Policy for details.</li>
        </ul>
      </Section>

      <Section title="2b. Auto-Extracted Memory Processing">
        <p>
          Mira's backend automatically extracts structured information from your worry entries and chat messages to power pattern detection and personalized insights. This processing includes:
        </p>
        <ul>
          <li><strong>Data extracted:</strong> Key people mentioned, relationships described, recurring life events, worry patterns, emotional themes, and importance scores.</li>
          <li><strong>AI model used:</strong> OpenAI's gpt-4o-mini API analyzes your text to identify these entities and relationships. This model input is not used to train OpenAI's models (covered by our API DPA below).</li>
          <li><strong>Storage:</strong> Extracted entities are stored as structured data in your Supabase account (tables: user_entities, user_facts) and are used only to improve your personalized insights.</li>
          <li><strong>Your control:</strong> Extracted memories appear in your account data export (when you export your data). You can request deletion of extracted data by contacting info@vibecodingturkey.com.</li>
          <li><strong>No third-party sharing:</strong> Extracted memories are never sold, shared with advertisers, or used for purposes beyond providing you insight recommendations.</li>
        </ul>
      </Section>

      {/* Apple requires: explain purpose of data collection */}
      <Section title="3. How We Use Your Information">
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
      <Section title="4. Data Sharing and Disclosure">
        <p>We do not sell, rent, or trade your personal data. We share data only as follows:</p>
        <ul>
          <li><strong>Supabase (database provider):</strong> Your worry entries and account data are stored on Supabase servers (PostgreSQL) in the Frankfurt, EU region. Supabase acts as a data processor under our instructions (Data Processing Addendum in place) and does not use your data for its own purposes. Data encrypted in transit (TLS) and at rest (AES-256).</li>
          <li><strong>Apple:</strong> Sign In with Apple transactions are processed by Apple. We receive only the anonymized identifier and optional email Apple provides.</li>
          <li><strong>Legal requirements:</strong> We may disclose information if required by law, court order, or to protect the safety of users or the public.</li>
        </ul>
        <p style={{ marginTop: 12 }}>No other third parties receive your personal data.</p>
      </Section>

      {/* Apple requires: data retention policy */}
      <Section title="5. Data Retention">
        <ul>
          <li>Your account data and worry entries are retained while your account is active.</li>
          <li>If you delete your account (Settings → Delete Account), all personal data is permanently deleted from our servers within <strong>30 days</strong>.</li>
          <li>Anonymous crash logs are retained for up to 90 days, after which they are automatically purged.</li>
          <li><strong>OpenAI API data:</strong> Text sent to OpenAI for Mira's responses is retained by OpenAI for abuse monitoring for up to 30 days unless we have a Zero Data Retention agreement (ZDR). Our standard API agreement does not include ZDR, so 30-day retention applies. OpenAI does not use this data to train models under the API DPA.</li>
          <li>You may request earlier deletion by contacting us at <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.</li>
        </ul>
      </Section>

      {/* Apple requires: security section */}
      <Section title="6. Security">
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
      <Section title="7. Your Rights and Choices">
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
      <Section title="8. Children's Privacy (COPPA)">
        {APP_NAME} is rated 4+ on the App Store and is not directed at children under the age of 13. We do not knowingly collect personal information from children under 13. If you are a parent or guardian and believe your child has provided us with personal information, please contact us immediately at <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a> and we will delete the information promptly.
      </Section>

      {/* Apple requires: Sign In with Apple */}
      <Section title="9. Sign In with Apple">
        We support Sign In with Apple as an authentication method. When you use this feature:
        <ul>
          <li>Apple generates a unique anonymized identifier for your account on our service.</li>
          <li>You choose whether to share your real email or use Apple's private relay email.</li>
          <li>We never receive your Apple ID password.</li>
          <li>Apple's Privacy Policy governs the data Apple collects during authentication.</li>
        </ul>
      </Section>

      {/* Apple requires: subscriptions / payments */}
      <Section title="10. Subscriptions and Payments">
        All subscription payments for {APP_NAME} Pro are processed by Apple through the App Store. We do not collect, store, or process payment card information. Your subscription can be managed through your Apple ID account settings. Apple's Privacy Policy applies to payment processing.
      </Section>

      {/* Apple requires: third-party SDK + sub-processor disclosure */}
      <Section title="11. Sub-processors and Third-Party Services">
        <p>The app and our backend rely on the following independent sub-processors. Each receives only the data needed for the stated purpose. None of them are advertising or cross-app tracking providers.</p>
        <Table rows={[
          ["Service", "Location", "Purpose", "Data shared"],
          ["Supabase", "Frankfurt, EU", "Database, authentication, file storage, DPA in place", "Account ID, email (if Email sign-in), worry entries, chat messages, profile fields, extracted memories"],
          ["Apple StoreKit 2", "Varies", "Subscription billing and entitlement", "Apple-managed (we do not see payment details)"],
          ["Apple Push Notification Service", "Varies", "Local reminders, deadline alerts", "Device push token only"],
          ["RevenueCat", "US", "Subscription receipt validation and analytics", "Anonymous in-app user ID, subscription status"],
          ["Sentry", "Frankfurt, EU", "Crash and error reporting for stability", "Anonymous in-app user ID, crash stack trace, OS version, app version"],
          ["OpenAI (gpt-4o-mini API)", "US", "Generates Mira's reflective text responses; extracts memory entities (server-to-server)", "Your recent messages, extracted context, memory analysis. DPA in place; data retained 30 days for abuse monitoring; no training on API traffic"],
          ["Microsoft Edge TTS (Bing endpoint)", "US", "Synthesizes Mira's AI-generated reply text into speech", "Only the generated reply text (not your private worry text); no audio retained after synthesis"],
          ["Render", "Frankfurt, EU", "Hosts voice backend that orchestrates OpenAI + Edge TTS", "Transient request payload; no persistent storage"],
          ["Vercel", "US", "Hosts this website (didnthappen-web)", "Standard web request logs only; no sensitive app data"],
        ]} />
        <p style={{ marginTop: 12 }}>
          <strong>Note on Edge TTS:</strong> Microsoft's Edge TTS endpoint is provided by the open-source edge-tts library. It is not an official Microsoft service with a standard Data Processing Addendum. We use it for cost efficiency and developer convenience. If you require official Microsoft Azure Speech Service compliance, please contact <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.
        </p>
        <p>We do not use third-party advertising, behavioural analytics, or cross-app tracking SDKs. Our SDKs do not request App Tracking Transparency authorisation because no tracking occurs.</p>
      </Section>

      <Section title="12. International Data Transfers">
        <p>
          Your personal data may be stored and processed in multiple jurisdictions:
        </p>
        <ul>
          <li><strong>Primary storage (Supabase):</strong> Frankfurt, EU (encrypted at rest and in transit).</li>
          <li><strong>API services:</strong> OpenAI (US), Microsoft Edge TTS (US), RevenueCat (US), Vercel (US).</li>
          <li><strong>Error reporting:</strong> Sentry (Frankfurt, EU).</li>
          <li><strong>Voice backend:</strong> Render (Frankfurt, EU).</li>
        </ul>
        <p style={{ marginTop: 12 }}>
          By using the app, you consent to these transfers. For transfers to the US, we rely on Standard Contractual Clauses (SCCs) and other mechanisms available under applicable law (including the UK/EU adequacy frameworks where applicable).
        </p>
      </Section>

      {/* Apple requires: GDPR / California notice where applicable */}
      <Section title="13. California and EEA Residents">
        <p><strong>California (CCPA/CPRA):</strong> We do not sell or share personal information. You have the right to know, delete, and correct personal information we collect. Contact us to exercise your rights within 45 days. We do not discriminate against users for exercising their rights.</p>
        <p style={{ marginTop: 8 }}><strong>European Economic Area (GDPR):</strong> Our legal basis for processing is contract performance (providing the app service). You have the right to access, rectify, erase, restrict, and port your data, and to lodge a complaint with your supervisory authority. We respond within 30 days of your rights request.</p>
      </Section>

      <Section title="13b. CCPA/CPRA Categories of Personal Information">
        <p>Under California law, we collect the following <strong>categories</strong> of personal information:</p>
        <Table rows={[
          ["Category (CCPA SPI)", "Examples", "Sold/Shared?"],
          ["Identifiers", "Email, Apple ID, Apple-generated UUID", "No"],
          ["Commercial information", "Subscription plan, trial status, purchase history", "No"],
          ["Biometric information", "Speech transcripts (audio converted to text only)", "No"],
          ["Internet activity", "App crash reports, stability logs", "No"],
          ["Geolocation", "None collected", "N/A"],
          ["Sensitive personal information (Article 9 GDPR)", "Worry entries, mental health data, chat with Mira", "No — processed only with explicit consent"],
          ["Inferred information", "Patterns of anxiety, worry themes, relationship networks (AI-extracted)", "No"],
        ]} />
        <p style={{ marginTop: 12 }}>
          <strong>Right to know:</strong> Contact <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a> to request what personal information we hold and the purposes for processing.
        </p>
        <p style={{ marginTop: 8 }}>
          <strong>Right to delete:</strong> Request deletion of your personal information via Settings → Delete Account or <a href="mailto:info@vibecodingturkey.com">info@vibecodingturkey.com</a>.
        </p>
        <p style={{ marginTop: 8 }}>
          <strong>Right to correct:</strong> Contact us to correct inaccurate personal information.
        </p>
      </Section>

      <Section title="13c. California Shine the Light (CA Civil Code 1798.100)">
        <p>
          If you are a California resident, you may request information about the types of personal information we share with third parties for their direct marketing purposes. We do not sell or share personal information with third parties for commercial purposes, so we have nothing to disclose under this law. If your circumstances change and we begin selling or sharing, we will update this policy and honor opt-out requests.
        </p>
      </Section>

      <Section title="14. EU AI Act Transparency Notice">
        <p>
          Under the EU AI Act (in force from 2 August 2026), this notice informs you that DidntHappen uses AI systems in the following limited-risk categories:
        </p>
        <ul>
          <li><strong>Mira reflective companion:</strong> Uses OpenAI's generative AI model (gpt-4o-mini) to produce conversational text responses to your worry descriptions. This system is designed to be informational and reflective, not clinical or diagnostic.</li>
          <li><strong>Memory extraction and pattern detection:</strong> Uses AI to identify people, relationships, and recurring themes in your entries. This processing is used only to personalize your experience and generate insights.</li>
          <li><strong>Transparency:</strong> You are informed in this policy and at key points in the app that AI-generated content is computer-generated. Mira is not a therapist, and AI outputs should not be relied upon for medical decisions.</li>
          <li><strong>Human oversight:</strong> Our mental health disclaimers (see <a href="/mental-health-disclaimer">/mental-health-disclaimer</a>) ensure you understand the limitations and encourage you to seek professional help when needed.</li>
        </ul>
        <p style={{ marginTop: 12 }}>
          We do not use AI for content moderation decisions that restrict your access to the service. We do not use emotion-recognition or facial-recognition AI.
        </p>
      </Section>

      <Section title="15. Sensitive Data (Mental Health)">
        Worry entries and chat messages can describe how you feel, which may amount to <strong>special category personal data</strong> under GDPR Article 9. Our legal basis for processing this data is your <strong>explicit consent</strong>, given when you agree to these terms during onboarding. You may withdraw consent at any time by deleting your account (see <a href="/delete-account">/delete-account</a>); withdrawal does not affect the lawfulness of processing before withdrawal.
      </Section>

      <Section title="16. Data Breach Notification">
        If we discover a personal-data breach that is likely to result in a risk to your rights and freedoms, we will notify the competent supervisory authority within 72 hours of becoming aware, as required by GDPR Article 33, and we will notify you without undue delay where the risk is high (Article 34).
      </Section>

      <Section title="17. Encryption and Security Posture">
        Data is encrypted in transit (TLS 1.2+) and at rest (AES-256 at Supabase). Row-level security enforces account isolation at the database. Crash logs sent to Sentry have personal identifiers stripped. No system is risk-free — we describe what we do and how to reach us if you suspect a problem (<a href="mailto:info@vibecodingturkey.com">info@vibecodingturkey.com</a>).
      </Section>

      <Section title="18. Changes to This Policy">
        We may update this Privacy Policy. We will notify you of material changes via an in-app banner before the change takes effect. The updated policy will also be posted at this URL with a new effective date. Continued use after changes constitutes acceptance.
      </Section>

      <Section title="19. Data Protection Officer and GDPR Accountability">
        <p>
          DidntHappen is a small developer without mandatory Data Protection Officer appointment under GDPR Article 37 (not a public authority, not carrying out systematic monitoring of data subjects at scale). However, we comply with all GDPR requirements including lawfulness, fairness, transparency, purpose limitation, data minimization, accuracy, integrity, confidentiality, and accountability. Data processing is documented and requests for data rights are handled within 30 days under Articles 15–22.
        </p>
        <p style={{ marginTop: 12 }}>
          For GDPR inquiries: <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>. If you are not satisfied with our response, you may file a complaint with the supervisory authority in your country (list: <a href="https://edpb.europa.eu/about-edpb/about-edpb/members_en" target="_blank" rel="noreferrer">edpb.europa.eu</a>).
        </p>
      </Section>

      <Section title="20. Legal Basis and Lawfulness">
        <p><strong>Performance of contract:</strong> Your use of DidntHappen is based on the contract between you and us. We process your account data, worry entries, and preferences to perform this service.</p>
        <p style={{ marginTop: 8 }}><strong>Consent:</strong> You consent to process mental-health sensitive data (worry entries) by accepting these terms. You withdraw consent by deleting your account.</p>
        <p style={{ marginTop: 8 }}><strong>Legal compliance:</strong> We may process data where required by law (e.g., tax records, abuse investigation).</p>
        <p style={{ marginTop: 8 }}><strong>Legitimate interests:</strong> We process crash logs and usage patterns to improve app stability and security.</p>
      </Section>

      <Section title="21. Contact and Data Controller">
        <p><strong>Data controller:</strong> {DEVELOPER_NAME}</p>
        <p>Email: <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a></p>
        <p>Support: <a href={SUPPORT_URL}>{SUPPORT_URL}</a></p>
        <p>Right to lodge a complaint with a supervisory authority: EEA/UK residents may complain to their local data-protection authority. A list is published at <a href="https://edpb.europa.eu/about-edpb/about-edpb/members_en" target="_blank" rel="noreferrer">edpb.europa.eu</a>.</p>
      </Section>

      <LegalFooter />
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
