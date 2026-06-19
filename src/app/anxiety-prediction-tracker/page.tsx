import type { Metadata } from "next";
import { SeoLanding } from "@/components/SeoLanding";

export const metadata: Metadata = {
  title: "Anxiety Prediction Tracker — DidntHappen",
  description:
    "Track anxious predictions, assign probability, and review the real outcome later with DidntHappen for iPhone.",
  alternates: { canonical: "/anxiety-prediction-tracker" },
};

export default function AnxietyPredictionTrackerPage() {
  return (
    <SeoLanding
      eyebrow="Anxiety prediction tracker"
      title="Track what anxiety predicts, then check it against reality."
      subtitle="Anxiety often feels certain in the moment. DidntHappen gives that certainty a timestamp, a probability, and a check-back date so you can see the difference between prediction and outcome."
      primaryKeyword="anxiety prediction tracking"
      features={[
        {
          title: "Probability scoring",
          body: "Rate how likely the feared outcome feels now. Later, compare that estimate with what happened.",
        },
        {
          title: "Check-back reminders",
          body: "Set a date when the outcome should be clear. The app reminds you to resolve the prediction instead of forgetting it.",
        },
        {
          title: "Reality Gap",
          body: "The core metric shows the gap between felt certainty and real outcomes across your logged predictions.",
        },
      ]}
      comparison={[
        {
          title: "Evidence over reassurance",
          body: "Reassurance can fade quickly. A record of predictions and outcomes gives you something concrete to revisit.",
        },
        {
          title: "Private by design",
          body: "Your entries are personal. Share cards are optional and should not include sensitive details.",
        },
        {
          title: "Built for everyday spirals",
          body: "Use it for work, health, relationship, money, social, or future-focused worries.",
        },
      ]}
      faqs={[
        {
          question: "Why track anxious predictions?",
          answer: "Tracking predictions helps expose the pattern between what anxiety says will happen and what actually happens later.",
        },
        {
          question: "Does the app promise my fear will not happen?",
          answer: "No. DidntHappen does not promise outcomes. It helps you record and review your own evidence over time.",
        },
        {
          question: "Can I use it alongside therapy?",
          answer: "Yes, as a personal journal. It does not replace professional support, but your records may help you reflect more clearly.",
        },
      ]}
    />
  );
}
