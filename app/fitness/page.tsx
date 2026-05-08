import FitnessHero from '@/components/FitnessHero';

export default function FitnessPage() {
  const ctaHref = 'https://calendly.com/d/ct66-jqx-38v';

  return (
    <div className="bg-[#080B14] text-white overflow-x-hidden">
      <main>

        <FitnessHero videoId="sULrktkZ8lU" thumbnail="/fitness-thumbnail.png" ctaHref={ctaHref} />

        {/* ═══════════════════════════════════════════════
            THE CREATOR GAP
        ═══════════════════════════════════════════════ */}
        <section className="px-6 py-20 md:px-10">
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-xs font-bold tracking-[0.2em] text-[#7C3AED] uppercase mb-6">The Problem</p>
            <h2 className="text-4xl font-black leading-tight tracking-tight md:text-5xl lg:text-6xl">
              Your audience uses 5 different apps.
              <span className="text-[#475569]"> None of them have your name on them.</span>
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg font-medium text-[#64748B]">
              They watch your reels, follow your form cues, trust your advice — then track calories in MyFitnessPal, log workouts in some random app, and pay someone else for plans. You built the audience. Someone else captured the revenue.
            </p>
          </div>

          {/* Before / After */}
          <div className="mx-auto mt-14 grid max-w-5xl gap-5 md:grid-cols-2">
            <div className="rounded-3xl border border-red-500/20 bg-red-500/5 p-8">
              <p className="text-xs font-bold tracking-[0.18em] text-red-400 uppercase mb-4">Right now</p>
              <ul className="space-y-4">
                {[
                  'Audience watches your content',
                  'Opens 4–5 random fitness apps',
                  'Pays other platforms for premium',
                  'You get zero of that revenue',
                  'No way to push plans or offers',
                ].map((t, i) => (
                  <li key={i} className="flex items-start gap-3 text-base font-semibold text-[#CBD5E1]">
                    <span className="mt-0.5 text-red-400 text-lg">✗</span> {t}
                  </li>
                ))}
              </ul>
            </div>
            <div
              className="rounded-3xl border border-[#7C3AED]/30 p-8"
              style={{ background: 'linear-gradient(135deg, rgba(124,58,237,0.08) 0%, rgba(34,197,94,0.05) 100%)' }}
            >
              <p className="text-xs font-bold tracking-[0.18em] text-[#A78BFA] uppercase mb-4">With your app</p>
              <ul className="space-y-4">
                {[
                  'One destination — your brand',
                  'Workouts, diet, progress in one place',
                  'Premium plans paid directly to you',
                  'Daily engagement you own',
                  'Push new programs and offers anytime',
                ].map((t, i) => (
                  <li key={i} className="flex items-start gap-3 text-base font-semibold text-white">
                    <span className="mt-0.5 text-[#22C55E] text-lg">✓</span> {t}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════
            WHAT YOUR AUDIENCE GETS — image + features
        ═══════════════════════════════════════════════ */}
        <section className="px-6 py-20 md:px-10">
          <div className="mx-auto max-w-6xl">
            <div className="grid items-center gap-12 lg:grid-cols-2">

              {/* App screenshot */}
              <div className="relative">
                <div className="absolute inset-0 rounded-3xl bg-[#7C3AED]/20 blur-2xl" />
                <div
                  className="relative overflow-hidden rounded-3xl border border-white/10"
                  style={{ background: '#0F1629' }}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/hero-image.png"
                    alt="Fitness app interface"
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>

              {/* Feature list */}
              <div>
                <p className="text-xs font-bold tracking-[0.2em] text-[#A78BFA] uppercase mb-4">For your audience</p>
                <h2 className="text-4xl font-black leading-tight tracking-tight md:text-5xl">
                  Everything they need.{' '}
                  <span
                    className="bg-clip-text text-transparent"
                    style={{ backgroundImage: 'linear-gradient(135deg, #A78BFA, #7C3AED)' }}
                  >
                    One app. Your name.
                  </span>
                </h2>
                <div className="mt-8 space-y-3">
                  {[
                    { icon: '🏋️', title: 'Structured workouts', desc: 'Your training plans, delivered in a structured in-app experience' },
                    { icon: '🥗', title: 'Nutrition tracking', desc: 'Calorie goals, diet logs, meal plans — all in one screen' },
                    { icon: '📈', title: 'Progress tracking', desc: 'Weight logs, consistency graphs, visual milestones' },
                    { icon: '👑', title: 'Premium programs', desc: 'Sell coaching plans directly through your app — recurring revenue' },
                  ].map(({ icon, title, desc }, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-4 rounded-2xl border border-white/[0.06] bg-white/[0.03] p-5 backdrop-blur-sm"
                    >
                      <span className="text-2xl">{icon}</span>
                      <div>
                        <p className="font-bold text-white">{title}</p>
                        <p className="mt-0.5 text-sm font-medium text-[#64748B]">{desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════
            CUSTOMIZATION
        ═══════════════════════════════════════════════ */}
        <section className="px-6 py-16 md:px-10 md:py-20">
          <div className="mx-auto max-w-6xl">
            <div className="text-center">
              <p className="text-xs font-bold tracking-[0.2em] text-[#22C55E] uppercase">Built around your coaching style</p>
              <h2 className="mt-4 text-4xl font-black leading-tight tracking-tight md:text-5xl">
                Not a fixed template.
                <span className="bg-clip-text text-transparent" style={{ backgroundImage: 'linear-gradient(135deg, #A78BFA, #7C3AED)' }}>
                  {' '}Customized to your ecosystem.
                </span>
              </h2>
              <p className="mx-auto mt-5 max-w-3xl text-base font-medium text-[#94A3B8] md:text-lg">
                This demo is gym-heavy, but your version is shaped to your niche, your audience behavior, and your coaching method. Your app, your brand, your colors, your positioning.
              </p>
            </div>

            <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  title: 'Strength / Gym',
                  focus: 'Progressive overload, split plans',
                },
                {
                  title: 'Yoga / Mobility',
                  focus: 'Flow calendars, mobility streaks',
                },
                {
                  title: 'Hyrox / Performance',
                  focus: 'Conditioning blocks, pace metrics',
                },
                {
                  title: 'Fat-loss / Habits',
                  focus: 'Daily compliance, behavior tracking',
                },
              ].map((mode, index) => (
                <article key={index} className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 backdrop-blur-sm">
                  <p className="text-sm font-extrabold text-white">{mode.title}</p>
                  <p className="mt-2 text-sm font-medium text-[#94A3B8]">{mode.focus}</p>
                </article>
              ))}
            </div>

            <div className="mt-8 rounded-3xl border border-white/10 bg-white/[0.02] p-6 md:p-8">
              <p className="text-sm font-bold tracking-[0.16em] text-[#A78BFA] uppercase">What we customize for you</p>
              <div className="mt-5 grid gap-3 md:grid-cols-2">
                {[
                  'Onboarding questions and user flow',
                  'Workout structure and program templates',
                  'Progress metrics shown to users',
                  'Nutrition style and compliance tracking',
                  'Brand language, colors, UI style, and positioning',
                  'Premium plans and monetization paths',
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3">
                    <span className="text-[#22C55E]">✓</span>
                    <span className="text-sm font-semibold text-[#CBD5E1]">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════
            EXTRA APP SCREENSHOTS ROW 
        ═══════════════════════════════════════════════ */}
        <section className="px-6 py-16 md:px-10">
          <div className="mx-auto max-w-6xl">
            <p className="mb-10 text-center text-xs font-bold tracking-[0.2em] text-[#475569] uppercase">See it in action</p>
            <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
              {['/fitness-screen-1.png', '/fitness-screen-2.png', '/fitness-screen-3.png', '/fitness-screen-4.png'].map(
                (src, i) => (
                  <div
                    key={i}
                    className="overflow-hidden rounded-2xl border border-white/[0.06] bg-[#0F1629]"
                    style={{ aspectRatio: '9 / 16' }}
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={src}
                      alt={`App screen ${i + 1}`}
                      className="h-full w-full object-cover"
                    />
                  </div>
                )
              )}
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════
            CREATOR CONTROL — what YOU get
        ═══════════════════════════════════════════════ */}
        <section
          className="px-6 py-20 md:px-10"
          style={{ background: 'linear-gradient(180deg, #080B14 0%, #0D0F1F 50%, #080B14 100%)' }}
        >
          <div className="mx-auto max-w-6xl">
            <div className="grid items-center gap-12 lg:grid-cols-[1fr_1.15fr]">
              <div>
                <p className="text-xs font-bold tracking-[0.2em] text-[#22C55E] uppercase mb-4">For you, the creator</p>
                <h2 className="text-4xl font-black leading-tight tracking-tight md:text-5xl">
                  Your command centre.
                </h2>
                <p className="mt-4 text-lg font-medium text-[#64748B]">
                  A creator dashboard that gives you full control — manage clients, push plans, see engagement, collect payments.
                </p>
                <div className="mt-8 space-y-3">
                  {[
                    'Client management dashboard',
                    'Session scheduling + calendar',
                    'Push workout & diet plans per client',
                    'Track weight & progress per user',
                    'Notes and coaching log',
                    'Premium subscription management',
                  ].map((t, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <span
                        className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full text-xs"
                        style={{ background: 'rgba(34,197,94,0.15)', color: '#22C55E' }}
                      >
                        ✓
                      </span>
                      <span className="text-base font-semibold text-[#CBD5E1]">{t}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Dashboard image slot */}
              <div className="relative">
                <div className="absolute inset-0 rounded-3xl bg-[#22C55E]/10 blur-2xl" />
                <div className="relative aspect-[16/10] overflow-hidden rounded-3xl border border-white/10 bg-[#0F1629] md:aspect-[16/9]">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/fitness-dashboard.png"
                    alt="Creator dashboard"
                    className="h-full w-full object-cover object-top"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════
            PRICING
        ═══════════════════════════════════════════════ */}
        <section id="pricing" className="px-6 py-20 md:px-10">
          <div className="mx-auto max-w-2xl">
            <div className="mb-10 text-center">
              <p className="text-xs font-bold tracking-[0.2em] text-[#A78BFA] uppercase mb-4">Pricing</p>
              <h2 className="text-4xl font-black leading-tight tracking-tight md:text-5xl">
                One plan.{' '}
                <span className="bg-clip-text text-transparent" style={{ backgroundImage: 'linear-gradient(135deg, #A78BFA, #7C3AED)' }}>
                  Everything included.
                </span>
              </h2>
            </div>

            <div
              className="rounded-3xl border border-[#7C3AED]/40 p-10 md:p-12"
              style={{
                background: 'linear-gradient(135deg, #0D0A1F 0%, #120D2A 100%)',
                boxShadow: '0 0 80px rgba(124,58,237,0.15)',
              }}
            >
              <div className="flex flex-col items-center text-center">
                <div className="flex items-end gap-1">
                  <span className="text-7xl font-black text-white">$99</span>
                  <span className="mb-3 text-lg font-semibold text-[#64748B]">/month</span>
                </div>
                <p className="mt-2 text-sm font-semibold text-[#475569]">after your free 60-day trial</p>
              </div>

              <div className="my-8 h-px bg-white/[0.06]" />

              <ul className="space-y-4">
                {[
                  'Your app, your brand, your colors — fully customizable',
                  'Workouts, nutrition tracking & progress graphs',
                  'Creator dashboard — manage clients, push plans',
                  'App store publishing on iOS & Google Play',
                  'Hosting, infrastructure & security',
                  'Bug fixes & feature updates, forever',
                  'Dedicated support — real humans, fast responses',
                ].map((t, i) => (
                  <li key={i} className="flex items-start gap-3 text-base font-semibold text-[#CBD5E1]">
                    <span className="mt-0.5 flex-shrink-0 text-[#22C55E]">✓</span> {t}
                  </li>
                ))}
              </ul>

              <a
                href={ctaHref}
                target="_blank"
                rel="noreferrer"
                className="mt-10 block w-full rounded-full py-4 text-center text-base font-black text-white transition-all"
                style={{
                  background: 'linear-gradient(135deg, #7C3AED 0%, #6D28D9 100%)',
                  boxShadow: '0 0 50px rgba(124,58,237,0.4)',
                }}
              >
                Book your free 60-day trial →
              </a>
              <p className="mt-4 text-center text-sm font-semibold text-[#475569]">
                No credit card. No commitment. Cancel anytime.
              </p>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════
            FAQ
        ═══════════════════════════════════════════════ */}
        <section className="px-6 py-16 md:px-10 md:py-20">
          <div className="mx-auto max-w-5xl">
            <div className="text-center">
              <p className="text-xs font-bold tracking-[0.2em] text-[#A78BFA] uppercase">FAQ</p>
              <h2 className="mt-4 text-4xl font-black leading-tight tracking-tight md:text-5xl">
                Questions creators ask
                <span className="bg-clip-text text-transparent" style={{ backgroundImage: 'linear-gradient(135deg, #A78BFA, #7C3AED)' }}>
                  {' '}before they launch.
                </span>
              </h2>
            </div>

            <div className="mt-10 space-y-4">
              {[
                {
                  question: 'Do I need any technical knowledge to run this?',
                  answer: "None. We handle everything — building, launching, App Store setup, hosting, and ongoing maintenance. You get a creator dashboard where you manage your clients and push plans. That's it. No code, no servers, no headaches.",
                },
                {
                  question: 'What does "free for 60 days" actually mean?',
                  answer: "You pay nothing for the first 60 days. No credit card required upfront. We build your app, get it live on iOS and Android, and you run it with your audience. After 60 days, it's $99/month to keep it running. If it hasn't worked for you, you cancel — no questions, no fees.",
                },
                {
                  question: 'Will it actually have my branding — my logo, my colours?',
                  answer: "Yes. Your app name, your logo, your brand colours, and your content. When your audience downloads it from the App Store, they see your name — not ours. We're invisible.",
                },
                {
                  question: 'Why would my audience pay for an app when they already follow me for free?',
                  answer: "They're already paying — just not you. The average fitness-conscious person spends $20-40/month across MyFitnessPal, a workout tracker, and random program PDFs. Your app replaces all of that under one subscription, with your coaching built in. You're not asking them to spend more. You're asking them to spend it with you.",
                },
                {
                  question: 'Can\'t I just get a freelancer to build me an app for a one-time fee?',
                  answer: "Yes — and it'll cost $3,000-8,000 upfront, take 3-4 months, and the moment something breaks or Apple updates their guidelines, you're on your own. With us, maintenance, updates, bug fixes, and App Store compliance are included forever. Most creators who've gone the freelancer route come back because the ongoing cost and stress isn't worth it.",
                },
                {
                  question: 'How does my audience pay me through the app?',
                  answer: 'We set up a premium subscription inside your app. Your audience subscribes directly, and payments go to you. You set the price. You decide what\'s free and what\'s premium.',
                },
                {
                  question: 'How long does it actually take to launch?',
                  answer: "Your app is ready within 48 hours of our onboarding call. App Store and Play Store approval typically takes 3-7 days after submission — that's Apple and Google's process, not ours. Most creators are fully live within 10 days of signing up.",
                },
                {
                  question: 'What happens to my audience\'s data if I cancel?',
                  answer: "Your audience data belongs to you. If you ever cancel, we provide a full export of all user data before taking the app offline. You're never locked in without an exit.",
                },
                {
                  question: 'I don\'t have a huge following. Is this still worth it?',
                  answer: 'Yes — and smaller audiences often convert better because the trust is higher. You only need 7 people from your audience paying $15/month to cover the platform cost entirely. Everything above that is profit. Creators with 8,000 engaged followers consistently outperform creators with 100,000 passive ones.',
                },
                {
                  question: 'Who is behind HiddenSaaS?',
                  answer: "We're a small team of builders who got frustrated watching creators hand their audience's attention — and money — to third-party apps. We build and maintain the tech so creators can focus entirely on their content and coaching.",
                },
              ].map((item, index) => (
                <details key={index} className="group rounded-2xl border border-white/10 bg-white/[0.03] p-6 md:p-7">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-left">
                    <span className="text-lg font-black text-white">{item.question}</span>
                    <span className="text-xl font-bold text-[#A78BFA] transition-transform duration-200 group-open:rotate-45">+</span>
                  </summary>
                  <p className="mt-4 text-sm font-medium leading-7 text-[#94A3B8] md:text-base">{item.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════
            CLOSING CTA
        ═══════════════════════════════════════════════ */}
        <section className="px-6 pb-28 pt-4 md:px-10">
          <div
            className="mx-auto max-w-3xl rounded-3xl border border-[#7C3AED]/30 p-10 text-center md:p-14"
            style={{ background: 'linear-gradient(135deg, rgba(124,58,237,0.07) 0%, rgba(34,197,94,0.04) 100%)' }}
          >
            <p className="text-xs font-bold tracking-[0.2em] text-[#A78BFA] uppercase mb-5">Get started</p>
            <h2 className="text-3xl font-black leading-tight tracking-tight md:text-4xl">
              Your app. Live in 48 hours.
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-base font-medium text-[#64748B]">
              Free for 60 days — no credit card, no commitment. If your audience doesn&apos;t love it, walk away. No questions.
            </p>
            <div className="mt-8 flex flex-col items-center gap-3">
              <a
                href={ctaHref}
                target="_blank"
                rel="noreferrer"
                className="inline-block w-full max-w-xs rounded-full py-4 text-center text-base font-black text-white transition-all"
                style={{
                  background: 'linear-gradient(135deg, #7C3AED 0%, #6D28D9 100%)',
                  boxShadow: '0 0 50px rgba(124,58,237,0.4)',
                }}
              >
                Book your free 60-day trial →
              </a>
              <p className="text-sm font-semibold text-[#475569]">Starts at $99/month after trial. Cancel anytime.</p>
            </div>
          </div>
        </section>

      </main>

      <footer className="border-t border-[#E5E7EB] bg-white px-6 py-10 text-center md:px-10">
        <p className="text-sm font-medium text-[#6B7280]">© 2026 HiddenSaaS. All rights reserved.</p>
        <p className="mt-3 text-sm font-medium text-[#6B7280]">
          Email: <a href="mailto:dsg@hiddensaas.com" className="text-[#5B4EE8] hover:underline">dsg@hiddensaas.com</a>
        </p>
      </footer>
    </div>
  );
}
