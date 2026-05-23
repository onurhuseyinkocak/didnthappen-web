import type { Metadata } from "next";
import { LegalPage, Section } from "@/components/Legal";

export const metadata: Metadata = {
  title: "Cookie Policy — DidntHappen",
  description: "Cookie Policy for the DidntHappen website and iOS app.",
};

export default function CookiesPage() {
  return (
    <LegalPage title="Cookie Policy">
      <Section title="1. Overview">
        This page describes how the DidntHappen website (didnthappen-web.vercel.app) uses cookies and similar technologies. The DidntHappen iOS app does not use cookies.
      </Section>
      <Section title="2. What we use">
        <ul>
          <li><strong>Strictly necessary cookies</strong> set by our hosting provider (Vercel) and Next.js framework to keep the site secure and functioning.</li>
          <li><strong>No analytics, advertising, or tracking cookies.</strong> We do not set Google Analytics, Facebook Pixel, or any third-party tracking tag.</li>
        </ul>
      </Section>
      <Section title="3. Your choices">
        You can block or delete cookies in your browser settings. Strictly necessary cookies cannot be disabled without breaking site functionality, but they do not track you across sites.
      </Section>
      <Section title="4. Changes">
        If we ever add non-essential cookies, we will publish a cookie banner before they load and update this page with a new effective date.
      </Section>
      <Section title="5. Contact">
        Questions about cookies: <a href="mailto:privacy@didnthappen.app">privacy@didnthappen.app</a>.
      </Section>
    </LegalPage>
  );
}
