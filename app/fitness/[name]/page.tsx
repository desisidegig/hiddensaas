import FitnessHero from '@/components/FitnessHero';

type FitnessPersonalizedPageProps = {
  params: Promise<{ name: string }>;
};

function formatName(rawName: string): string {
  const decodedName = decodeURIComponent(rawName ?? '').trim();
  if (!decodedName) return 'Creator';
  const normalizedName = decodedName.replace(/[-_]+/g, ' ');
  return normalizedName.charAt(0).toUpperCase() + normalizedName.slice(1);
}

export default async function FitnessPersonalizedPage({ params }: FitnessPersonalizedPageProps) {
  const { name: rawName } = await params;
  const name = formatName(rawName);
  const whatsappHref = `https://wa.me/919113914154?text=${encodeURIComponent(`Hey, I saw the fitness app page made for ${name} and I am interested in launching a branded app for my audience. Can we talk?`)}`;

  return (
    <div className="bg-[#080B14] text-white overflow-x-hidden">
      <main>

        <FitnessHero videoId="sULrktkZ8lU" thumbnail="/fitness-thumbnail.png" name={name} whatsappHref={whatsappHref} />

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
            WHAT YOUR AUDIENCE GETS
        ═══════════════════════════════════════════════ */}
        <section className="px-6 py-20 md:px-10">
          <div className="mx-auto max-w-6xl">
            <div className="grid items-center gap-12 lg:grid-cols-2">
              <div className="relative">
                <div className="absolute inset-0 rounded-3xl bg-[#7C3AED]/20 blur-2xl" />
                <div className="relative overflow-hidden rounded-3xl border border-white/10" style={{ background: '#0F1629' }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/hero-image.png" alt="Fitness app interface" className="h-full w-full object-cover" />
                </div>
              </div>
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
                    <div key={i} className="flex items-start gap-4 rounded-2xl border border-white/[0.06] bg-white/[0.03] p-5 backdrop-blur-sm">
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
                {name}, this demo is gym-heavy, but your version is shaped to your niche, your audience behavior, and your coaching method.
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
                  'Brand language, look, and positioning',
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
              {['/fitness-screen-1.png', '/fitness-screen-2.png', '/fitness-screen-3.png', '/fitness-screen-4.png'].map((src, i) => (
                <div key={i} className="overflow-hidden rounded-2xl border border-white/[0.06] bg-[#0F1629]" style={{ aspectRatio: '9 / 16' }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={src}
                    alt={`App screen ${i + 1}`}
                    className="h-full w-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════
            CREATOR CONTROL
        ═══════════════════════════════════════════════ */}
        <section className="px-6 py-20 md:px-10" style={{ background: 'linear-gradient(180deg, #080B14 0%, #0D0F1F 50%, #080B14 100%)' }}>
          <div className="mx-auto max-w-6xl">
            <div className="grid items-center gap-12 lg:grid-cols-[1fr_1.15fr]">
              <div>
                <p className="text-xs font-bold tracking-[0.2em] text-[#22C55E] uppercase mb-4">For you, the creator</p>
                <h2 className="text-4xl font-black leading-tight tracking-tight md:text-5xl">Your command centre.</h2>
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
                      <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full text-xs" style={{ background: 'rgba(34,197,94,0.15)', color: '#22C55E' }}>✓</span>
                      <span className="text-base font-semibold text-[#CBD5E1]">{t}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative">
                <div className="absolute inset-0 rounded-3xl bg-[#22C55E]/10 blur-2xl" />
                <div className="relative aspect-[16/10] overflow-hidden rounded-3xl border border-white/10 bg-[#0F1629] md:aspect-[16/9]">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/fitness-dashboard.png" alt="Creator dashboard" className="h-full w-full object-cover object-top" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════
            QUOTE STRIP
        ═══════════════════════════════════════════════ */}
        <section className="px-6 py-16 md:px-10">
          <div
            className="mx-auto max-w-4xl rounded-3xl border border-[#7C3AED]/20 p-10 text-center md:p-14"
            style={{ background: 'linear-gradient(135deg, rgba(124,58,237,0.07) 0%, rgba(34,197,94,0.04) 100%)' }}
          >
            <p className="text-2xl font-black leading-tight tracking-tight md:text-3xl lg:text-4xl" style={{ fontStyle: 'italic' }}>
              &ldquo;Give your audience so much value inside your ecosystem that they never need to leave. And when they&apos;re inside — they convert.&rdquo;
            </p>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════
            10X STRIP
        ═══════════════════════════════════════════════ */}
        <section className="px-6 py-16 md:px-10">
          <div className="mx-auto max-w-5xl text-center">
            <p className="text-4xl font-black leading-tight tracking-tight md:text-6xl lg:text-7xl">
              10× your premium sales by{' '}
              <span className="bg-clip-text text-transparent" style={{ backgroundImage: 'linear-gradient(135deg, #A78BFA 0%, #22C55E 100%)' }}>
                owning your ecosystem.
              </span>
            </p>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════
            OFFER — personalised
        ═══════════════════════════════════════════════ */}
        <section id="offer" className="px-6 pb-28 pt-10 md:px-10">
          <div
            className="mx-auto max-w-4xl overflow-hidden rounded-3xl border border-[#7C3AED]/40 p-10 md:p-14"
            style={{
              background: 'linear-gradient(135deg, #0D0A1F 0%, #120D2A 100%)',
              boxShadow: '0 0 100px rgba(124,58,237,0.15)',
            }}
          >
            <p className="text-center text-xs font-bold tracking-[0.2em] text-[#A78BFA] uppercase">Limited Creator Offer</p>
            <h2 className="mt-5 text-center text-4xl font-black leading-tight tracking-tight md:text-5xl lg:text-6xl">
              {name}, I will build your fitness app for you.
            </h2>
            <div className="mx-auto mt-8 max-w-2xl space-y-3 text-center">
              {[
                'Zero upfront fee — you pay nothing to start',
                'Fully built and launched in 48 hours',
                'Your brand. Your audience. Your recurring revenue.',
                'You focus on content. I handle the tech.',
                'No value, no continuation — zero risk.',
              ].map((t, i) => (
                <p key={i} className="text-base font-semibold text-[#CBD5E1]">{t}</p>
              ))}
            </div>
            <p className="mx-auto mt-6 max-w-2xl text-center text-sm font-semibold text-[#A78BFA]">
              This preview is gym-focused. Your production app will be customized to your niche, coaching style, and business model.
            </p>
            <div className="mt-10 flex flex-col items-center gap-4">
              <a
                href={whatsappHref}
                target="_blank"
                rel="noreferrer"
                className="inline-block w-full max-w-sm rounded-full py-4 text-center text-base font-black text-white transition-all"
                style={{
                  background: 'linear-gradient(135deg, #7C3AED 0%, #6D28D9 100%)',
                  boxShadow: '0 0 50px rgba(124,58,237,0.5)',
                }}
              >
                Let&apos;s launch your app →
              </a>
              <p className="text-sm font-semibold text-[#475569]">
                I&apos;m working with a small number of fitness creators right now.
              </p>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
}
