import type { Metadata } from "next";
import { LegalPage, Section } from "@/components/Legal";

export const metadata: Metadata = {
  title: "Copyright / DMCA Policy — DidntHappen",
  description: "How to report copyright infringement on DidntHappen.",
};

export default function CopyrightPage() {
  return (
    <LegalPage title="Copyright / DMCA Policy">
      <Section title="1. Our commitment">
        DidntHappen respects copyright and other intellectual-property rights. We respond to clear notices of alleged infringement that comply with the U.S. Digital Millennium Copyright Act (DMCA) and applicable laws in other jurisdictions.
      </Section>
      <Section title="2. Submitting a copyright notice">
        Send a written notice to <a href="mailto:info@vibecodingturkey.com">info@vibecodingturkey.com</a> containing:
        <ol>
          <li>Your physical or electronic signature.</li>
          <li>Identification of the copyrighted work claimed to be infringed.</li>
          <li>Identification of the material that is allegedly infringing, with enough detail (URL, screenshot, content ID) for us to locate it.</li>
          <li>Your contact information (address, email, phone).</li>
          <li>A statement that you have a good-faith belief that use of the material in the manner complained of is not authorised by the copyright owner, its agent, or the law.</li>
          <li>A statement, under penalty of perjury, that the information in the notice is accurate and that you are the copyright owner or authorised to act on behalf of the owner.</li>
        </ol>
      </Section>
      <Section title="3. Counter-notice">
        If you believe your content was removed by mistake or misidentification, you may submit a counter-notice to the same email with: signature, identification of the material, your contact info, a statement under penalty of perjury that you have a good-faith belief the removal was a mistake, and consent to the jurisdiction of the appropriate federal court.
      </Section>
      <Section title="4. Repeat infringer policy">
        We may suspend or terminate accounts that we determine to be repeat infringers under appropriate circumstances. Three valid copyright removals targeting an account ordinarily trigger a suspension pending review.
      </Section>
      <Section title="5. False claims">
        Submitting a false copyright claim may result in liability for damages, including costs and attorney fees, under Section 512(f) of the DMCA and equivalent laws. Do not file a notice unless you are the rightsholder or authorised to act for them.
      </Section>
    </LegalPage>
  );
}
