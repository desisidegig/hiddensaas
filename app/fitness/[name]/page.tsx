type FitnessPersonalizedPageProps = {
  params: Promise<{
    name: string;
  }>;
};

function formatName(rawName: string): string {
  const decodedName = decodeURIComponent(rawName ?? "").trim();

  if (!decodedName) {
    return "Creator";
  }

  const normalizedName = decodedName.replace(/[-_]+/g, " ");
  return normalizedName.charAt(0).toUpperCase() + normalizedName.slice(1);
}

export default async function FitnessPersonalizedPage({ params }: FitnessPersonalizedPageProps) {
  const { name: rawName } = await params;
  const name = formatName(rawName);

  return (
    <div className="bg-[#F8FAFC] text-[#0F172A]">
      <main>
        <section className="relative overflow-hidden bg-[#0F172A] px-6 pb-14 pt-20 md:px-10 md:pb-20 md:pt-24">
          <div className="absolute left-1/2 top-0 -z-0 h-[440px] w-[440px] -translate-x-1/2 rounded-full bg-[#16A34A]/40 blur-3xl" />
          <div className="relative z-10 mx-auto w-full max-w-5xl text-center">
            <h1 className="text-5xl font-extrabold leading-[0.95] tracking-tight text-white sm:text-6xl md:text-7xl">
              {name}, your fitness empire starts here
            </h1>
            <p className="mx-auto mt-6 max-w-3xl text-lg font-medium text-[#CBD5E1] md:text-xl">
              Turn your audience into a fitness ecosystem you own, fully under your brand.
            </p>
          </div>
          <div id="demo" className="mx-auto w-full max-w-6xl pt-10">
            <div className="overflow-hidden rounded-3xl border border-[#22C55E]/40 bg-white/5 p-3 shadow-2xl shadow-[#22C55E]/10 md:p-5">
              <div className="relative w-full overflow-hidden rounded-2xl" style={{ paddingBottom: "56.25%" }}>
                <iframe
                  src="https://www.loom.com/embed/00000000000000000000000000000000"
                  className="absolute inset-0 h-full w-full rounded-2xl bg-[#1E293B]"
                  frameBorder="0"
                  allowFullScreen
                  title="Personalized fitness app demo"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="px-6 pb-24 pt-14 md:px-10 md:pt-16">
          <div className="mx-auto w-full max-w-5xl rounded-3xl border-2 border-[#16A34A] bg-[#F0FDF4] p-8 md:p-12">
            <p className="whitespace-pre-line text-center text-base font-medium text-[#334155] md:text-lg">
              {"Right now people consume your content,\nbut rely on other platforms for training, tracking, and plans.\n\nThis brings the entire experience into one destination you own."}
            </p>
          </div>
        </section>

        <section className="bg-white px-6 py-16 md:px-10 md:py-20">
          <div className="mx-auto w-full max-w-6xl">
            <div className="grid items-center gap-8 lg:grid-cols-2">
              <div>
                <h2 className="text-4xl font-extrabold leading-tight tracking-tight md:text-6xl">What your audience gets</h2>
                <ul className="mt-8 space-y-4 text-base font-semibold text-[#0F172A] md:text-lg">
                  <li className="rounded-xl border border-[#DCFCE7] bg-[#F0FDF4] px-5 py-4">Adaptive workouts + workout tracking</li>
                  <li className="rounded-xl border border-[#DCFCE7] bg-[#F0FDF4] px-5 py-4">Diet plans + calorie tracking</li>
                  <li className="rounded-xl border border-[#DCFCE7] bg-[#F0FDF4] px-5 py-4">Weight &amp; progress tracking</li>
                  <li className="rounded-xl border border-[#DCFCE7] bg-[#F0FDF4] px-5 py-4">Everything in one clear flow</li>
                  <li className="rounded-xl border border-[#DCFCE7] bg-[#F0FDF4] px-5 py-4">Direct access to your paid programs</li>
                </ul>
              </div>
              <div className="rounded-3xl border border-dashed border-[#86EFAC] bg-[#F0FDF4] px-6 py-16 text-center text-sm font-semibold text-[#166534]">
                Demo app image slot
                <p className="mt-2 text-xs font-medium text-[#475569]">Add mobile app screenshot here</p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#0F172A] px-6 py-16 md:px-10 md:py-20">
          <div className="mx-auto w-full max-w-6xl">
            <div className="grid items-center gap-8 lg:grid-cols-2">
              <div className="order-2 lg:order-1">
                <h2 className="text-4xl font-extrabold leading-tight tracking-tight text-white md:text-6xl">What you get</h2>
                <ul className="mt-8 space-y-4 text-base font-semibold text-white md:text-lg">
                  <li className="rounded-xl border border-white/10 bg-white/5 px-5 py-4">Dashboard to manage users</li>
                  <li className="rounded-xl border border-white/10 bg-white/5 px-5 py-4">Data &amp; insights</li>
                  <li className="rounded-xl border border-white/10 bg-white/5 px-5 py-4">Control over your ecosystem</li>
                  <li className="rounded-xl border border-white/10 bg-white/5 px-5 py-4">A scalable fitness business</li>
                </ul>
              </div>
              <div className="order-1 rounded-3xl border border-dashed border-white/30 bg-white/5 px-6 py-16 text-center text-sm font-semibold text-[#CBD5E1] lg:order-2">
                Dashboard demo image slot
                <p className="mt-2 text-xs font-medium text-[#94A3B8]">Add dashboard screenshot here</p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white px-6 py-16 md:px-10 md:py-20">
          <div className="mx-auto w-full max-w-6xl">
            <div className="grid items-center gap-8 lg:grid-cols-2">
              <div>
                <h2 className="text-4xl font-extrabold leading-tight tracking-tight md:text-6xl">
                  Where you can monetize your audience
                </h2>
                <ul className="mt-8 space-y-4 text-base font-semibold text-[#0F172A] md:text-lg">
                  <li className="rounded-xl border border-[#DCFCE7] bg-[#F0FDF4] px-5 py-4">1:1 coaching offers</li>
                  <li className="rounded-xl border border-[#DCFCE7] bg-[#F0FDF4] px-5 py-4">Custom plan upgrades</li>
                  <li className="rounded-xl border border-[#DCFCE7] bg-[#F0FDF4] px-5 py-4">Paid transformation programs</li>
                  <li className="rounded-xl border border-[#DCFCE7] bg-[#F0FDF4] px-5 py-4">Premium in-app features</li>
                </ul>
              </div>
              <div className="rounded-3xl border border-dashed border-[#86EFAC] bg-[#F0FDF4] px-6 py-16 text-center text-sm font-semibold text-[#166534]">
                Monetization demo image slot
                <p className="mt-2 text-xs font-medium text-[#475569]">Add premium offer or checkout screenshot here</p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#0F172A] px-6 py-16 md:px-10 md:py-20">
          <div className="mx-auto w-full max-w-5xl rounded-3xl border border-white/10 bg-white/5 p-8 md:p-10">
            <p className="whitespace-pre-line text-center text-lg font-medium text-[#CBD5E1] md:text-xl">
              {"Give your audience so much value inside your ecosystem\nthat they never need to leave.\n\nAnd when they are inside - they convert."}
            </p>
          </div>
        </section>

        <section className="bg-white px-6 py-16 md:px-10 md:py-20">
          <div className="mx-auto w-full max-w-6xl">
            <p className="mx-auto max-w-5xl text-center text-4xl font-extrabold leading-tight tracking-tight md:text-6xl">
              10x your premium sales by owning your ecosystem.
            </p>
          </div>
        </section>

        <section id="offer" className="px-6 pb-24 pt-14 md:px-10 md:pt-16">
          <div className="mx-auto w-full max-w-5xl rounded-3xl border-2 border-[#16A34A] bg-[#F0FDF4] p-8 md:p-12">
            <h2 className="text-center text-4xl font-extrabold leading-tight tracking-tight md:text-6xl">{name} , We&apos;ll build this for you</h2>
            <p className="mx-auto mt-7 max-w-3xl whitespace-pre-line text-center text-lg font-medium text-[#334155] md:text-xl">
              {"Zero upfront fee.\nFully set up and launched in 48 hours.\n\nYou focus on your audience. I handle everything technical end to end.\n\nIf it does not feel valuable, you do not continue."}
            </p>
            <a
              href="#"
              className="mx-auto mt-9 block w-full max-w-xl rounded-full bg-[#16A34A] px-8 py-4 text-center text-base font-extrabold text-white shadow-xl shadow-[#16A34A]/25"
            >
              Let&apos;s launch your app
            </a>
            <p className="mt-5 text-center text-sm font-semibold text-[#166534]">
              I&apos;m working with a small number of fitness creators right now.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}
