import type { Metadata } from "next";
import { LegalPage, Section } from "@/components/Legal";

export const metadata: Metadata = {
  title: "Mental Health Disclaimer — DidntHappen",
  description: "DidntHappen is not medical care. Read this before using the app.",
};

export default function MentalHealthDisclaimerPage() {
  return (
    <LegalPage title="Mental Health Disclaimer">
      <Section title="1. Not medical care">
        DidntHappen is a self-reflection and journaling app designed to help you track worries you predict, observe what actually happens, and notice patterns. It is <strong>not</strong> a medical device, treatment, therapy, diagnosis, or emergency service. The exercises labelled as CBT, ACT, or DBT inside the app are inspired by published self-help techniques and are intended as educational reflection prompts only — they are not a substitute for evidence-based therapy delivered by a licensed clinician.
      </Section>
      <Section title="2. Mira is not a clinician">
        Mira is an AI reflective companion. Mira is not a therapist, psychologist, psychiatrist, counsellor, social worker, doctor, or any other licensed professional. Mira cannot diagnose conditions, prescribe medication, deliver crisis intervention, or replace human clinical care.
      </Section>
      <Section title="3. Crisis resources">
        If you are thinking about hurting yourself or someone else, or you are in immediate danger, contact local emergency services right now.
        <ul>
          <li><strong>US/Canada:</strong> Call or text 988 (Suicide and Crisis Lifeline)</li>
          <li><strong>US/UK/IE/CA:</strong> Text HOME to 741741 (Crisis Text Line)</li>
          <li><strong>Türkiye:</strong> 444 0 741 (Yaşam Çizgisi)</li>
          <li><strong>Germany/AT/CH:</strong> 0800 111 0 111 (Telefonseelsorge)</li>
          <li><strong>Worldwide directory:</strong> <a href="https://findahelpline.com" target="_blank" rel="noreferrer">findahelpline.com</a> and <a href="https://www.iasp.info/resources/Crisis_Centres/" target="_blank" rel="noreferrer">IASP Crisis Centres</a></li>
        </ul>
        These resources are operated by independent organisations. DidntHappen is not affiliated with any of them and is not responsible for the support they provide.
      </Section>
      <Section title="4. No outcome promise">
        Anxiety and worry are individual experiences. Use of this app may or may not produce changes you can perceive. We do not promise reduction in symptoms, cure, recovery, or any specific outcome. Statistics presented in the app (for example the "91% of worries never happen" reference) summarise published research and are presented for general education, not as a prediction about your worries.
      </Section>
      <Section title="5. When to seek professional help">
        Please contact a licensed mental-health professional if you experience persistent low mood, anxiety that interferes with daily life, thoughts of self-harm or suicide, panic that does not resolve, or any other symptom that concerns you. If you already work with a clinician, share what you do in DidntHappen with them; do not stop their care because of anything this app tells you.
      </Section>
      <Section title="6. Acceptance">
        By using DidntHappen you confirm that you understand the above. If you do not agree, please uninstall the app.
      </Section>
    </LegalPage>
  );
}
