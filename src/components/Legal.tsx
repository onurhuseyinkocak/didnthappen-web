import type { CSSProperties, ReactNode } from "react";

export const LEGAL_LAST_UPDATED = "May 23, 2026";
export const LEGAL_EFFECTIVE_DATE = "May 23, 2026";
export const APP_NAME = "DidntHappen";
export const DEVELOPER_NAME = "DidntHappen";
export const CONTACT_EMAIL = "privacy@didnthappen.app";
export const LEGAL_EMAIL = "legal@didnthappen.app";
export const ABUSE_EMAIL = "abuse@didnthappen.app";
export const COPYRIGHT_EMAIL = "copyright@didnthappen.app";
export const DELETE_EMAIL = "delete@didnthappen.app";
export const SUPPORT_URL = "https://didnthappen-web.vercel.app/support";

export function LegalPage({
  title,
  effective,
  updated,
  children,
}: {
  title: string;
  effective?: string;
  updated?: string;
  children: ReactNode;
}) {
  return (
    <div style={{ maxWidth: 680, margin: "0 auto", padding: "64px 24px 96px" }}>
      <a href="/" style={backLink}>← Back</a>
      <h1 style={h1}>{title}</h1>
      <p style={meta}>
        Effective: {effective ?? LEGAL_EFFECTIVE_DATE} · Last updated: {updated ?? LEGAL_LAST_UPDATED}
      </p>
      {children}
      <LegalFooter />
    </div>
  );
}

export function Section({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section style={{ marginBottom: 40 }}>
      <h2 style={{ fontSize: 19, fontWeight: 700, marginBottom: 12, color: "var(--accent)" }}>{title}</h2>
      <div style={{ fontSize: 15.5, color: "var(--text-secondary)", lineHeight: 1.8 }}>
        {typeof children === "string" ? <p>{children}</p> : children}
      </div>
    </section>
  );
}

export function Table({ rows }: { rows: string[][] }) {
  const [header, ...body] = rows;
  return (
    <div style={{ overflowX: "auto", margin: "12px 0" }}>
      <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 14 }}>
        <thead>
          <tr>
            {header.map((h) => (
              <th
                key={h}
                style={{
                  textAlign: "left",
                  padding: "8px 12px",
                  background: "var(--accent-light)",
                  color: "var(--accent)",
                  fontWeight: 600,
                  borderBottom: "2px solid var(--border)",
                }}
              >
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {body.map((row, i) => (
            <tr key={i} style={{ background: i % 2 === 0 ? "var(--surface)" : "transparent" }}>
              {row.map((cell, j) => (
                <td
                  key={j}
                  style={{
                    padding: "8px 12px",
                    borderBottom: "1px solid var(--border)",
                    color: "var(--text-secondary)",
                  }}
                >
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

export function LegalFooter() {
  return (
    <div
      style={{
        borderTop: "1px solid var(--border)",
        marginTop: 64,
        paddingTop: 32,
        display: "flex",
        flexWrap: "wrap",
        gap: "12px 24px",
        fontSize: 13,
        color: "var(--text-tertiary)",
      }}
    >
      <a href="/">Home</a>
      <a href="/privacy">Privacy</a>
      <a href="/terms">Terms</a>
      <a href="/cookies">Cookies</a>
      <a href="/acceptable-use">Acceptable Use</a>
      <a href="/community-guidelines">Community Guidelines</a>
      <a href="/copyright">Copyright / DMCA</a>
      <a href="/ugc">User Content Policy</a>
      <a href="/ai-disclaimer">AI Disclaimer</a>
      <a href="/mental-health-disclaimer">Mental Health Disclaimer</a>
      <a href="/refunds">Refunds</a>
      <a href="/subscription-terms">Subscriptions</a>
      <a href="/contact">Contact</a>
      <a href="/abuse">Report Abuse</a>
      <a href="/delete-account">Delete Account</a>
      <a href="/unsubscribe">Unsubscribe</a>
      <a href="/support">Support</a>
    </div>
  );
}

export const backLink: CSSProperties = {
  display: "inline-flex",
  alignItems: "center",
  gap: 8,
  color: "var(--text-secondary)",
  fontSize: 14,
  marginBottom: 48,
};
export const h1: CSSProperties = { fontSize: 34, fontWeight: 800, marginBottom: 8, letterSpacing: "-0.5px" };
export const meta: CSSProperties = { color: "var(--text-tertiary)", marginBottom: 48, fontSize: 14 };
