import type { Metadata } from "next";
import { SeoLanding } from "@/components/SeoLanding";

export const metadata: Metadata = {
  title: "Worry Tracker App for iPhone — DidntHappen",
  description:
    "DidntHappen is a worry tracker app that helps you log anxious predictions, set a check-back date, and compare fear with what actually happened.",
  alternates: { canonical: "/worry-tracker" },
};

export default function WorryTrackerPage() {
  return (
    <SeoLanding
      eyebrow="Worry tracker app"
      title="A worry tracker that makes your anxious predictions visible."
      subtitle="DidntHappen is built around one simple loop: write the worry, wait for reality, then record what actually happened. Over time you see your real track record instead of relying on anxious memory."
      primaryKeyword="worry tracking"
      features={[
        {
          title: "Log the prediction",
          body: "Capture the feared outcome while it feels loud. Add a probability and a deadline so the worry becomes something you can check later.",
        },
        {
          title: "Review the outcome",
          body: "When the deadline arrives, mark whether it happened, partly happened, or did not happen. This turns vague worry into evidence.",
        },
        {
          title: "See the pattern",
          body: "Your Reality Gap shows how often fear and reality disagree, with private insights over time.",
        },
      ]}
      comparison={[
        {
          title: "Not a mood tracker",
          body: "Mood trackers record how you feel. DidntHappen records what anxiety predicted and whether that prediction was accurate.",
        },
        {
          title: "Not meditation",
          body: "Meditation helps you sit with anxiety. DidntHappen helps you build a personal record that shows what actually happened.",
        },
        {
          title: "Not medical care",
          body: "The app is a private self-reflection journal, not diagnosis, treatment, or crisis support.",
        },
      ]}
      faqs={[
        {
          question: "What is a worry tracker?",
          answer: "A worry tracker is a journal for recording anxious predictions and checking later whether the feared outcome actually happened.",
        },
        {
          question: "Who is DidntHappen for?",
          answer: "DidntHappen is for people who spiral into what-if thoughts and want a private way to compare fear with real outcomes.",
        },
        {
          question: "Is DidntHappen therapy?",
          answer: "No. DidntHappen is a self-reflection app and is not a medical device, therapist, diagnosis, or treatment.",
        },
      ]}
    />
  );
}
