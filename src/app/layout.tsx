import type { Metadata } from "next";
import "./globals.css";

const SITE_URL = "https://didnthappen.onarika.net";
const APP_STORE_URL = "https://apps.apple.com/us/app/didnthappen/id6762467761";

export const metadata: Metadata = {
  title: "DidntHappen — Your Brain Lies. We Prove It.",
  description:
    "Track your worries, collect evidence, and prove your anxious mind wrong. 91% of feared outcomes never happen. Built on peer-reviewed research.",
  metadataBase: new URL(SITE_URL),
  alternates: {
    canonical: "./",
  },
  openGraph: {
    title: "DidntHappen — Your Brain Lies. We Prove It.",
    description:
      "Track your worries and prove your anxious mind wrong. 91% of fears never come true.",
    type: "website",
    url: "./",
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
    "msvalidate.01": "5A9A887B37FD4117E878FDA4134C5B82",
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
    "@id": "https://vibecodingturkey.com/onur-huseyin-kocak#person",
    name: "Onur Hüseyin Koçak",
    url: "https://vibecodingturkey.com/onur-huseyin-kocak",
    sameAs: [
      "https://medium.com/@onurhuseyinkocak",
      "https://github.com/onurhuseyinkocak",
      "https://www.linkedin.com/in/onurhuseyinkocak",
      "https://www.instagram.com/onurhuseyinkocak.ai",
      "https://www.tiktok.com/@onurhuseyinkocak.ai",
      "https://apps.apple.com/us/developer/onur-hseyin-kocak/id1878351222",
    ],
  },
  sameAs: [APP_STORE_URL],
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
