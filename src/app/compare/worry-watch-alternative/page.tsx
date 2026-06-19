import type { Metadata } from "next";
import { SeoLanding } from "@/components/SeoLanding";

export const metadata: Metadata = {
  title: "Worry Watch Alternative for iPhone — DidntHappen",
  description:
    "Looking for a Worry Watch alternative? DidntHappen focuses on fear predictions, Reality Gap, Mira AI support, and outcome review.",
  alternates: { canonical: "/compare/worry-watch-alternative" },
};

export default function WorryWatchAlternativePage() {
  return (
    <SeoLanding
      eyebrow="Worry Watch alternative"
      title="A focused alternative for tracking fear vs reality."
      subtitle="DidntHappen is for people who want the core worry-outcome loop: log the prediction, wait, resolve it, and see how often fear was wrong. It adds a Reality Gap score, optional Mira AI reflection, and shareable progress moments."
      primaryKeyword="Worry Watch alternative"
      features={[
        {
          title: "Prediction-first flow",
          body: "Every entry starts with a feared prediction and a future check-back moment.",
        },
        {
          title: "Reality Gap score",
          body: "The product centers on your personal evidence ratio, not generic wellness streaks.",
        },
        {
          title: "Mira support",
          body: "Optional AI reflection helps you slow down and understand recurring worry patterns without presenting itself as therapy.",
        },
      ]}
      comparison={[
        {
          title: "For fear tracking",
          body: "Choose DidntHappen if the main thing you want to measure is whether feared outcomes actually happened.",
        },
        {
          title: "For simple review",
          body: "The loop stays intentionally simple: log, wait, resolve, learn.",
        },
        {
          title: "For private evidence",
          body: "The app is designed as a private record first, with optional share cards after wins.",
        },
      ]}
      faqs={[
        {
          question: "Is DidntHappen the same as Worry Watch?",
          answer: "No. DidntHappen is an independent app. It shares the broad idea of reviewing worry outcomes, but focuses its product around Reality Gap, prediction scoring, and Mira AI reflection.",
        },
        {
          question: "Why compare DidntHappen with Worry Watch?",
          answer: "People searching for worry outcome journals often know Worry Watch. DidntHappen is another option for iPhone users who want a prediction-vs-reality workflow.",
        },
        {
          question: "Does DidntHappen diagnose anxiety?",
          answer: "No. It is not a diagnostic tool and does not replace a clinician.",
        },
      ]}
    />
  );
}
