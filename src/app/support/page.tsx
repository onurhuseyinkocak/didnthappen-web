import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Support — DidntHappen",
};

export default function SupportPage() {
  return (
    <div style={{ maxWidth: 680, margin: "0 auto", padding: "64px 24px 96px" }}>
      <a href="/" style={{ display: "inline-flex", alignItems: "center", gap: 8, color: "var(--text-secondary)", fontSize: 14, marginBottom: 48 }}>
        ← Back
      </a>

      <h1 style={{ fontSize: 34, fontWeight: 800, marginBottom: 8, letterSpacing: "-0.5px" }}>Support</h1>
      <p style={{ color: "var(--text-tertiary)", marginBottom: 48, fontSize: 14 }}>We're here to help.</p>

      <section style={{ marginBottom: 40 }}>
        <h2 style={{ fontSize: 20, fontWeight: 700, marginBottom: 12, color: "var(--accent)" }}>Contact Us</h2>
        <p style={{ fontSize: 16, color: "var(--text-secondary)", lineHeight: 1.75 }}>
          For any questions, bug reports, or feedback, email us at:{" "}
          <a href="mailto:support@didnthappen.app" style={{ color: "var(--accent)" }}>support@didnthappen.app</a>
        </p>
        <p style={{ fontSize: 16, color: "var(--text-secondary)", lineHeight: 1.75, marginTop: 12 }}>
          We typically respond within 1–2 business days.
        </p>
      </section>

      <section style={{ marginBottom: 40 }}>
        <h2 style={{ fontSize: 20, fontWeight: 700, marginBottom: 12, color: "var(--accent)" }}>Frequently Asked Questions</h2>
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          {[
            {
              q: "How do I cancel my subscription?",
              a: "Open the Settings app on your iPhone → tap your name → Subscriptions → DidntHappen → Cancel Subscription. Cancellation takes effect at the end of the current billing period.",
            },
            {
              q: "How do I delete my account?",
              a: "Open the DidntHappen app → Settings tab → scroll to the bottom → tap 'Delete Account'. All your data will be permanently deleted within 30 days.",
            },
            {
              q: "I lost my data after reinstalling. Can I recover it?",
              a: "If you were signed in with an account, your data syncs automatically. Sign in with the same Apple ID to restore your worries.",
            },
            {
              q: "Why didn't I receive my notification?",
              a: "Check that notifications are enabled: iPhone Settings → DidntHappen → Notifications → Allow Notifications. Also verify you have at least one active worry with a deadline set.",
            },
            {
              q: "Is my worry data private?",
              a: "Yes. Your worry entries are stored securely under your account with row-level security — only you can access them. We never share your personal worry content with third parties.",
            },
            {
              q: "I was charged but the app still shows a paywall.",
              a: "Tap 'Restore purchases' on the paywall screen. If the issue persists, contact us at support@didnthappen.app with your Apple ID receipt.",
            },
          ].map(({ q, a }) => (
            <div key={q} style={{ borderLeft: "3px solid var(--accent)", paddingLeft: 16 }}>
              <p style={{ fontWeight: 600, fontSize: 15, color: "var(--text)", marginBottom: 6 }}>{q}</p>
              <p style={{ fontSize: 15, color: "var(--text-secondary)", lineHeight: 1.65 }}>{a}</p>
            </div>
          ))}
        </div>
      </section>

      <div style={{ borderTop: "1px solid var(--border)", marginTop: 64, paddingTop: 32, display: "flex", gap: 24, fontSize: 14, color: "var(--text-tertiary)" }}>
        <a href="/">Home</a>
        <a href="/privacy">Privacy Policy</a>
        <a href="/terms">Terms of Use</a>
      </div>
    </div>
  );
}
