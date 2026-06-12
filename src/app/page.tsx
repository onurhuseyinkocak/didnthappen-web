const APP_STORE_URL = "https://apps.apple.com/us/app/didnthappen/id6762467761";

export default function Home() {
  return (
    <main className="min-h-screen bg-cream">
      {/* ── Nav ─────────────────────────────────────────────── */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-cream/80 backdrop-blur-lg border-b border-sage-100">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="/" className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-sage flex items-center justify-center">
              <CheckIcon className="w-4 h-4 text-white" />
            </div>
            <span className="text-lg font-bold text-dark tracking-tight">
              DidntHappen
            </span>
          </a>
          <a
            href={APP_STORE_URL}
            className="hidden sm:inline-flex items-center gap-2 bg-dark text-white text-sm font-semibold px-5 py-2.5 rounded-full hover:bg-dark-soft transition-colors"
          >
            <AppleIcon className="w-4 h-4" />
            Download
          </a>
        </div>
      </nav>

      {/* ── Hero ────────────────────────────────────────────── */}
      <section className="relative pt-32 pb-24 sm:pt-40 sm:pb-32 overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-sage-50 via-cream to-cream" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-sage/5 rounded-full blur-3xl" />

        <div className="relative max-w-6xl mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-sage-100 text-sage-dark text-sm font-medium px-4 py-2 rounded-full mb-8">
              <span className="w-2 h-2 rounded-full bg-sage animate-pulse" />
              Built on peer-reviewed research
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-dark leading-[1.08] tracking-tight mb-6">
              Your brain lies to you.
              <br />
              <span className="text-sage">We&apos;ll prove it.</span>
            </h1>

            <p className="text-lg sm:text-xl text-dark-soft/70 leading-relaxed max-w-xl mx-auto mb-10">
              Track your worries, collect evidence, and silence the spiral.
              Because 9 out of 10 fears never come true.
            </p>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
              <a
                href={APP_STORE_URL}
                className="inline-flex items-center gap-3 bg-dark text-white font-semibold px-8 py-4 rounded-full text-lg hover:bg-dark-soft transition-colors shadow-lg shadow-dark/20"
              >
                <AppleIcon className="w-5 h-5" />
                Download on the App Store
              </a>
              <span className="text-sm text-dark-soft/50">
                Free to try
              </span>
            </div>

            {/* Phone mockup */}
            <div className="relative mx-auto w-[280px] sm:w-[300px]">
              <div className="relative bg-dark rounded-[3rem] p-3 shadow-2xl shadow-dark/30">
                <div className="bg-sage-50 rounded-[2.3rem] overflow-hidden aspect-[9/19.5]">
                  {/* App screen mockup */}
                  <div className="p-6 pt-14 flex flex-col h-full">
                    {/* Status bar fake */}
                    <div className="flex items-center justify-between mb-8">
                      <span className="text-xs font-semibold text-dark/60">
                        9:41
                      </span>
                      <div className="flex gap-1">
                        <div className="w-4 h-2 bg-dark/30 rounded-sm" />
                        <div className="w-4 h-2 bg-dark/30 rounded-sm" />
                        <div className="w-6 h-2 bg-sage rounded-sm" />
                      </div>
                    </div>

                    {/* Reality Gap card */}
                    <div className="bg-white rounded-2xl p-5 shadow-sm mb-4">
                      <p className="text-xs text-dark/40 font-medium uppercase tracking-wider mb-1">
                        Your Reality Gap
                      </p>
                      <p className="text-4xl font-black text-sage">91%</p>
                      <p className="text-xs text-dark/50 mt-1">
                        of your fears didn&apos;t happen
                      </p>
                    </div>

                    {/* Worry items */}
                    <div className="space-y-3 flex-1">
                      <div className="bg-white rounded-xl p-4 shadow-sm">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-full bg-sage/10 flex items-center justify-center">
                            <CheckIcon className="w-4 h-4 text-sage" />
                          </div>
                          <div>
                            <p className="text-sm font-semibold text-dark">
                              Job interview
                            </p>
                            <p className="text-xs text-dark/40">
                              Didn&apos;t happen
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="bg-white rounded-xl p-4 shadow-sm">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-full bg-sage/10 flex items-center justify-center">
                            <CheckIcon className="w-4 h-4 text-sage" />
                          </div>
                          <div>
                            <p className="text-sm font-semibold text-dark">
                              Health scare
                            </p>
                            <p className="text-xs text-dark/40">
                              Didn&apos;t happen
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="bg-white rounded-xl p-4 shadow-sm opacity-60">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-full bg-amber-50 flex items-center justify-center">
                            <ClockIcon className="w-4 h-4 text-amber-500" />
                          </div>
                          <div>
                            <p className="text-sm font-semibold text-dark">
                              Financial worry
                            </p>
                            <p className="text-xs text-dark/40">
                              3 days left
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Tab bar */}
                    <div className="flex justify-around pt-4 mt-auto border-t border-sage-100">
                      <div className="w-6 h-1 bg-sage rounded-full" />
                      <div className="w-6 h-1 bg-dark/10 rounded-full" />
                      <div className="w-6 h-1 bg-dark/10 rounded-full" />
                      <div className="w-6 h-1 bg-dark/10 rounded-full" />
                    </div>
                  </div>
                </div>
              </div>
              {/* Glow behind phone */}
              <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-[200px] h-[60px] bg-sage/20 rounded-full blur-2xl" />
            </div>
          </div>
        </div>
      </section>

      {/* ── Stats bar ───────────────────────────────────────── */}
      <section className="py-16 border-y border-sage-100">
        <div className="max-w-4xl mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-4 text-center">
            {[
              {
                value: "91%",
                label: "of fears never materialize",
                sub: "LaFreniere & Newman, 2020",
              },
              {
                value: "2 weeks",
                label: "to see your first mindset shift",
                sub: "Average user experience",
              },
              {
                value: "100%",
                label: "private and secure",
                sub: "Row-level encryption",
              },
            ].map((s) => (
              <div key={s.label}>
                <p className="text-3xl sm:text-4xl font-black text-sage mb-2">
                  {s.value}
                </p>
                <p className="text-sm font-medium text-dark/70">{s.label}</p>
                <p className="text-xs text-dark/40 mt-1">{s.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── How It Works ────────────────────────────────────── */}
      <section className="py-24 sm:py-32">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold text-sage uppercase tracking-wider mb-3">
              How it works
            </p>
            <h2 className="text-3xl sm:text-4xl font-black text-dark tracking-tight">
              Three steps to silence the spiral
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                icon: <PenIcon className="w-6 h-6" />,
                title: "Log your fear",
                desc: "Write down the worry as it hits. Rate your intensity. Set a deadline for when you'll know the outcome.",
              },
              {
                step: "02",
                icon: <HourglassIcon className="w-6 h-6" />,
                title: "Wait for reality",
                desc: "The app holds your worry while you live your life. No rumination loops. Just a calm countdown.",
              },
              {
                step: "03",
                icon: <BarChartIcon className="w-6 h-6" />,
                title: "See the truth",
                desc: "When the deadline passes, record what actually happened. Watch your Reality Gap grow with every resolved fear.",
              },
            ].map((item) => (
              <div
                key={item.step}
                className="relative bg-white rounded-2xl p-8 shadow-sm border border-sage-100 hover:shadow-md hover:border-sage-200 transition-all"
              >
                <span className="absolute top-6 right-6 text-5xl font-black text-sage-100">
                  {item.step}
                </span>
                <div className="w-12 h-12 rounded-xl bg-sage-50 text-sage flex items-center justify-center mb-5">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-dark mb-3">
                  {item.title}
                </h3>
                <p className="text-sm text-dark-soft/70 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Research Section ─────────────────────────────────── */}
      <section className="py-24 sm:py-32 bg-sage-50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-sm font-semibold text-sage uppercase tracking-wider mb-3">
            The science
          </p>
          <h2 className="text-3xl sm:text-4xl font-black text-dark tracking-tight mb-6">
            Built on real research, not wishful thinking
          </h2>
          <p className="text-lg text-dark-soft/70 leading-relaxed max-w-2xl mx-auto mb-12">
            A 2020 study by LaFreniere and Newman at Penn State found that{" "}
            <strong className="text-dark font-semibold">
              91.4% of worry predictions did not come true
            </strong>
            . For the remaining 8.6%, outcomes were better than expected in most
            cases.
          </p>

          <div className="bg-white rounded-2xl p-8 sm:p-10 shadow-sm border border-sage-100 max-w-2xl mx-auto">
            <blockquote className="text-lg sm:text-xl italic text-dark/80 leading-relaxed mb-6">
              &ldquo;Anxiety tells you everything will go wrong. The data says
              otherwise.&rdquo;
            </blockquote>
            <div className="h-px bg-sage-100 mb-6" />
            <p className="text-sm text-dark/50">
              LaFreniere, L. S., & Newman, M. G. (2020).{" "}
              <em>
                Exposing Worry&apos;s Deceit: Percentage of Untrue Worries in
                Generalized Anxiety Disorder Treatment.
              </em>{" "}
              Behavior Therapy, 51(3), 413-423.
            </p>
          </div>
        </div>
      </section>

      {/* ── Features Grid ───────────────────────────────────── */}
      <section className="py-24 sm:py-32">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold text-sage uppercase tracking-wider mb-3">
              Features
            </p>
            <h2 className="text-3xl sm:text-4xl font-black text-dark tracking-tight">
              Everything you need to outsmart anxiety
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: <GaugeIcon className="w-5 h-5" />,
                title: "Reality Gap Score",
                desc: "Your personal proof that most fears are fiction. Tracked over time.",
              },
              {
                icon: <BrainIcon className="w-5 h-5" />,
                title: "Personalized Insights",
                desc: "See patterns in your worries: which categories, which times, which intensities.",
              },
              {
                icon: <WindIcon className="w-5 h-5" />,
                title: "Breathing & Grounding",
                desc: "Box breathing, 5-4-3-2-1 grounding, and cognitive defusion exercises.",
              },
              {
                icon: <FlameIcon className="w-5 h-5" />,
                title: "Streaks & Milestones",
                desc: "Build a daily check-in habit. Watch your Reality Tree grow.",
              },
              {
                icon: <TrendingUpIcon className="w-5 h-5" />,
                title: "Weekly Progress",
                desc: "Digest reports with heatmaps and shareable stats cards.",
              },
              {
                icon: <ShieldIcon className="w-5 h-5" />,
                title: "Private & Secure",
                desc: "Row-level security. Your worries are yours alone. Always.",
              },
            ].map((f) => (
              <div
                key={f.title}
                className="group bg-white rounded-2xl p-6 border border-sage-100 hover:border-sage-200 hover:shadow-sm transition-all"
              >
                <div className="w-10 h-10 rounded-lg bg-sage-50 text-sage flex items-center justify-center mb-4 group-hover:bg-sage group-hover:text-white transition-colors">
                  {f.icon}
                </div>
                <h3 className="text-base font-bold text-dark mb-2">
                  {f.title}
                </h3>
                <p className="text-sm text-dark-soft/60 leading-relaxed">
                  {f.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Quote/CTA Section ───────────────────────────────── */}
      <section className="py-24 sm:py-32 bg-dark relative overflow-hidden">
        {/* Ambient circles */}
        <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[400px] h-[400px] bg-sage/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[300px] h-[300px] bg-sage/5 rounded-full blur-3xl" />

        <div className="relative max-w-3xl mx-auto px-6 text-center">
          <p className="text-sage text-sm font-semibold uppercase tracking-wider mb-8">
            Stop the spiral
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white leading-tight tracking-tight mb-6">
            Anxiety lies &mdash; loudly.
            <br />
            <span className="text-sage-light">Data tells the truth.</span>
          </h2>
          <p className="text-lg text-white/50 mb-12 max-w-xl mx-auto">
            Free to try. Your peace of mind is worth it.
          </p>

          <a
            href={APP_STORE_URL}
            className="inline-flex items-center gap-3 bg-white text-dark font-semibold px-8 py-4 rounded-full text-lg hover:bg-cream transition-colors shadow-lg"
          >
            <AppleIcon className="w-5 h-5" />
            Download on the App Store
          </a>
        </div>
      </section>

      {/* ── Footer ──────────────────────────────────────────── */}
      <footer className="py-12 border-t border-sage-100">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-8">
            {/* Logo */}
            <div className="flex items-center gap-2.5">
              <div className="w-7 h-7 rounded-md bg-sage flex items-center justify-center">
                <CheckIcon className="w-3.5 h-3.5 text-white" />
              </div>
              <span className="text-sm font-bold text-dark tracking-tight">
                DidntHappen
              </span>
            </div>

            {/* Links */}
            <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-sm text-dark/40 max-w-xl">
              <a href="/privacy" className="hover:text-sage transition-colors">Privacy</a>
              <a href="/terms" className="hover:text-sage transition-colors">Terms</a>
              <a href="/cookies" className="hover:text-sage transition-colors">Cookies</a>
              <a href="/acceptable-use" className="hover:text-sage transition-colors">Acceptable Use</a>
              <a href="/community-guidelines" className="hover:text-sage transition-colors">Community</a>
              <a href="/copyright" className="hover:text-sage transition-colors">Copyright</a>
              <a href="/ugc" className="hover:text-sage transition-colors">User Content</a>
              <a href="/ai-disclaimer" className="hover:text-sage transition-colors">AI Disclaimer</a>
              <a href="/mental-health-disclaimer" className="hover:text-sage transition-colors">Mental Health</a>
              <a href="/refunds" className="hover:text-sage transition-colors">Refunds</a>
              <a href="/subscription-terms" className="hover:text-sage transition-colors">Subscriptions</a>
              <a href="/contact" className="hover:text-sage transition-colors">Contact</a>
              <a href="/abuse" className="hover:text-sage transition-colors">Report Abuse</a>
              <a href="/delete-account" className="hover:text-sage transition-colors">Delete Account</a>
              <a href="/unsubscribe" className="hover:text-sage transition-colors">Unsubscribe</a>
              <a href="/support" className="hover:text-sage transition-colors">Support</a>
              <a href="https://promtable.com" className="hover:text-sage transition-colors">Promtable</a>
              <a href="https://apps.apple.com/us/app/promtable-ai-prompt-vault/id6770004106" className="hover:text-sage transition-colors">Promtable iOS</a>
              <a href="https://promtable.com/datasets/ai-tool-index" className="hover:text-sage transition-colors">AI Tool Index</a>
              <a href="https://vibecodingturkey.com" className="hover:text-sage transition-colors">Vibe Coding Turkey</a>
              <a href="https://dream-mining.co" className="hover:text-sage transition-colors">Dream Mining</a>
              <a href="https://minesminis.com" className="hover:text-sage transition-colors">MinesMinis</a>
              <a href="https://onarika.net" className="hover:text-sage transition-colors">Onarika</a>
            </div>

            {/* Copyright */}
            <p className="text-xs text-dark/30">
              &copy; {new Date().getFullYear()} DidntHappen. All rights
              reserved.
            </p>
            <p className="text-xs text-dark/30">
              Built with AI-assisted vibe coding by{" "}
              <a href="https://growth.vibecodingturkey.com/brands/onur-huseyin-kocak" className="underline hover:text-dark/50">
                Onur Hüseyin Koçak
              </a>{" "}
              · Community:{" "}
              <a href="https://vibecodingturkey.com" className="underline hover:text-dark/50">
                Vibe Coding Turkey
              </a>
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}

/* ── Icon Components ────────────────────────────────────────── */

function CheckIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={3}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

function AppleIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
    </svg>
  );
}

function PenIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 20h9" />
      <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
    </svg>
  );
}

function HourglassIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 22h14" />
      <path d="M5 2h14" />
      <path d="M17 22v-4.172a2 2 0 0 0-.586-1.414L12 12l-4.414 4.414A2 2 0 0 0 7 17.828V22" />
      <path d="M7 2v4.172a2 2 0 0 0 .586 1.414L12 12l4.414-4.414A2 2 0 0 0 17 6.172V2" />
    </svg>
  );
}

function BarChartIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="18" y1="20" x2="18" y2="10" />
      <line x1="12" y1="20" x2="12" y2="4" />
      <line x1="6" y1="20" x2="6" y2="14" />
    </svg>
  );
}

function ClockIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
}

function GaugeIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m12 14 4-4" />
      <path d="M3.34 19a10 10 0 1 1 17.32 0" />
    </svg>
  );
}

function BrainIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 1.98-3A2.5 2.5 0 0 1 9.5 2Z" />
      <path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-1.98-3A2.5 2.5 0 0 0 14.5 2Z" />
    </svg>
  );
}

function WindIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M17.7 7.7a2.5 2.5 0 1 1 1.8 4.3H2" />
      <path d="M9.6 4.6A2 2 0 1 1 11 8H2" />
      <path d="M12.6 19.4A2 2 0 1 0 14 16H2" />
    </svg>
  );
}

function FlameIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z" />
    </svg>
  );
}

function TrendingUpIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
      <polyline points="16 7 22 7 22 13" />
    </svg>
  );
}

function ShieldIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <polyline points="9 12 11 14 15 10" />
    </svg>
  );
}
