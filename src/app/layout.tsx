import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "DidntHappen — Your Brain Lies. We Prove It.",
  description:
    "Track your worries, collect evidence, and prove your anxious mind wrong. 91% of feared outcomes never happen. Built on peer-reviewed research.",
  openGraph: {
    title: "DidntHappen — Your Brain Lies. We Prove It.",
    description:
      "Track your worries and prove your anxious mind wrong. 91% of fears never come true.",
    type: "website",
    url: "https://didnthappen-web.vercel.app",
    siteName: "DidntHappen",
  },
  twitter: {
    card: "summary_large_image",
    title: "DidntHappen — Your Brain Lies. We Prove It.",
    description:
      "Track your worries and prove your anxious mind wrong. 91% of fears never come true.",
  },
  metadataBase: new URL("https://didnthappen-web.vercel.app"),
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
      </head>
      <body>{children}</body>
    </html>
  );
}
