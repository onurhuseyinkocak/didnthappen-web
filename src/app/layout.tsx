import type { Metadata } from "next";
import "./globals.css";

const SITE_URL = "https://didnthappen-web.vercel.app";
const APP_STORE_URL = "https://apps.apple.com/us/app/didnthappen/id6762467761";

export const metadata: Metadata = {
  title: "DidntHappen — Your Brain Lies. We Prove It.",
  description:
    "Track your worries, collect evidence, and prove your anxious mind wrong. 91% of feared outcomes never happen. Built on peer-reviewed research.",
  metadataBase: new URL(SITE_URL),
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    title: "DidntHappen — Your Brain Lies. We Prove It.",
    description:
      "Track your worries and prove your anxious mind wrong. 91% of fears never come true.",
    type: "website",
    url: SITE_URL,
    siteName: "DidntHappen",
  },
  twitter: {
    card: "summary_large_image",
    title: "DidntHappen — Your Brain Lies. We Prove It.",
    description:
      "Track your worries and prove your anxious mind wrong. 91% of fears never come true.",
  },
  other: {
    "apple-itunes-app": "app-id=6762467761",
  },
};

const applicationSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "DidntHappen",
  alternateName: "DidntHappen Fear Tracker",
  applicationCategory: "HealthApplication",
  operatingSystem: "iOS",
  url: SITE_URL,
  installUrl: APP_STORE_URL,
  downloadUrl: APP_STORE_URL,
  description:
    "DidntHappen is an iPhone app for tracking worries, collecting evidence, and reviewing which feared outcomes did not happen.",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
  },
  author: {
    "@type": "Person",
    name: "Onur Hüseyin Koçak",
    sameAs: [
      "https://promtable.com",
      "https://vibecodingturkey.com",
      "https://dream-mining.co",
      "https://minesminis.com",
      "https://onarika.net",
      "https://growth.vibecodingturkey.com/brands/onur-huseyin-kocak",
    ],
  },
  sameAs: [
    APP_STORE_URL,
    "https://growth.vibecodingturkey.com/apps/didnthappen",
    "https://promtable.com/ecosystem",
    "https://promtable.com/datasets/ai-tool-index",
    "https://apps.apple.com/us/app/promtable-ai-prompt-vault/id6770004106",
    "https://vibecodingturkey.com",
    "https://dream-mining.co",
    "https://minesminis.com",
    "https://onarika.net",
  ],
  isPartOf: {
    "@type": "CreativeWorkSeries",
    name: "Onur Huseyin Kocak product ecosystem",
    url: "https://promtable.com/ecosystem",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        <link rel="alternate" type="text/plain" href="/llms.txt" title="LLMs.txt" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(applicationSchema) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
