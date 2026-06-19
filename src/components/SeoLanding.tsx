import type { ReactNode } from "react";

export const APP_STORE_URL = "https://apps.apple.com/us/app/didnthappen/id6762467761";

type Feature = {
  title: string;
  body: string;
};

type Faq = {
  question: string;
  answer: string;
};

export function SeoLanding({
  eyebrow,
  title,
  subtitle,
  primaryKeyword,
  features,
  comparison,
  faqs,
  children,
}: {
  eyebrow: string;
  title: string;
  subtitle: string;
  primaryKeyword: string;
  features: Feature[];
  comparison?: Feature[];
  faqs: Faq[];
  children?: ReactNode;
}) {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <main className="min-h-screen bg-cream">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <nav className="border-b border-sage-100 bg-cream/90">
        <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-6">
          <a href="/" className="text-lg font-black tracking-tight text-dark">
            DidntHappen
          </a>
          <a
            href={APP_STORE_URL}
            className="rounded-full bg-dark px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-dark-soft"
          >
            Download
          </a>
        </div>
      </nav>

      <section className="mx-auto max-w-5xl px-6 py-20 sm:py-24">
        <p className="mb-4 text-sm font-bold uppercase tracking-wider text-sage">
          {eyebrow}
        </p>
        <h1 className="max-w-3xl text-4xl font-black leading-tight tracking-tight text-dark sm:text-5xl">
          {title}
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-dark-soft/75">
          {subtitle}
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
          <a
            href={APP_STORE_URL}
            className="inline-flex justify-center rounded-full bg-sage px-7 py-3.5 text-base font-bold text-white transition-colors hover:bg-sage-dark"
          >
            Get DidntHappen on iPhone
          </a>
          <span className="text-sm text-dark-soft/55">
            Built for {primaryKeyword}. Not therapy. Not diagnosis.
          </span>
        </div>
      </section>

      <section className="border-y border-sage-100 bg-sage-50">
        <div className="mx-auto grid max-w-5xl gap-5 px-6 py-14 md:grid-cols-3">
          {features.map((feature) => (
            <article key={feature.title} className="rounded-2xl border border-sage-100 bg-white p-6">
              <h2 className="text-lg font-black text-dark">{feature.title}</h2>
              <p className="mt-3 text-sm leading-relaxed text-dark-soft/70">{feature.body}</p>
            </article>
          ))}
        </div>
      </section>

      {comparison ? (
        <section className="mx-auto max-w-5xl px-6 py-16">
          <h2 className="text-3xl font-black tracking-tight text-dark">How DidntHappen is different</h2>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {comparison.map((item) => (
              <article key={item.title} className="rounded-2xl border border-sage-100 bg-white p-6">
                <h3 className="font-bold text-sage-dark">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-dark-soft/70">{item.body}</p>
              </article>
            ))}
          </div>
        </section>
      ) : null}

      {children}

      <section className="mx-auto max-w-5xl px-6 py-16">
        <h2 className="text-3xl font-black tracking-tight text-dark">FAQ</h2>
        <div className="mt-8 space-y-5">
          {faqs.map((faq) => (
            <article key={faq.question} className="border-b border-sage-100 pb-5">
              <h3 className="font-bold text-dark">{faq.question}</h3>
              <p className="mt-2 text-sm leading-relaxed text-dark-soft/70">{faq.answer}</p>
            </article>
          ))}
        </div>
      </section>

      <footer className="border-t border-sage-100 px-6 py-10 text-center text-sm text-dark-soft/55">
        <a href="/privacy">Privacy</a>
        <span className="mx-3">·</span>
        <a href="/mental-health-disclaimer">Mental health disclaimer</a>
        <span className="mx-3">·</span>
        <a href="/terms">Terms</a>
      </footer>
    </main>
  );
}
