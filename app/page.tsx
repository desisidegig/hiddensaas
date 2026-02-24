"use client";

import { FormEvent, useState } from "react";

const platformOptions = [
  "YouTube",
  "Instagram",
  "TikTok",
  "LinkedIn",
  "Twitter/X",
  "Podcast",
  "Newsletter",
  "Other",
];

const nicheOptions = [
  "Career & Jobs",
  "Education & Learning",
  "Finance & Investing",
  "Fitness & Health",
  "Lifestyle & Productivity",
  "Other",
];

const audienceOptions = [
  "Under 10k",
  "10k–50k",
  "50k–200k",
  "200k–1M",
  "1M+",
];

const steps = [
  {
    number: "01",
    title: "We Build It",
    description:
      "We scope and build your monetizable software tool tailored to your niche.",
  },
  {
    number: "02",
    title: "You Brand It",
    description:
      "Your name, logo, domain. Completely yours. Your audience never knows we exist. We're the engine, you're the face.",
  },
  {
    number: "03",
    title: "You Market It",
    description:
      "Launch to your audience and keep the revenue. We handle hosting, updates, and maintenance.",
  },
];

const faqItems = [
  {
    question: "How fast can we launch?",
    answer: "Simple tools can go live in days. More advanced tools may take longer depending on scope.",
  },
  {
    question: "Do I own the product and brand?",
    answer: "Yes. Your name, domain, and brand are fully yours. We operate behind the scenes.",
  },
  {
    question: "What do you handle?",
    answer: "We handle development, hosting, payments, maintenance, bug fixes, and technical management.",
  },
];

export default function Home() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setIsSubmitting(true);
    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/xpqjdona", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setIsSubmitted(true);
        form.reset();
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <div className="bg-white text-[#0D0D0D]">
      <div className="fixed inset-x-0 top-0 z-[60] bg-[#0D0D0D] py-2 text-center text-xs font-semibold text-white">
        🚀 Founding Creator Slots Open – Only 3 Available{" "}
        <a href="#founding-program" className="underline underline-offset-2 hover:text-[#C5BEFF]">
          Apply Now
        </a>
      </div>
      <header className="fixed inset-x-0 top-8 z-50 border-b border-[#E5E7EB] bg-white/95 backdrop-blur-sm">
        <div className="mx-auto flex h-20 w-full max-w-7xl items-center justify-between px-6 md:px-10">
          <div className="flex items-center gap-3">
            <span className="h-3 w-3 rounded-full bg-[#5B4EE8]" />
            <span className="text-2xl font-extrabold text-[#5B4EE8]">HiddenSaaS</span>
          </div>
          <a
            href="#lead-form"
            className="hidden sm:inline-block rounded-full bg-[#5B4EE8] px-5 py-3 text-sm font-extrabold text-white shadow-xl shadow-[#5B4EE8]/15"
          >
            Book a Strategy Call
          </a>
        </div>
      </header>

      <main>
        <section className="relative flex min-h-screen items-center overflow-hidden px-6 pt-36 pb-20 md:px-10">
          <div className="absolute right-[-220px] top-[180px] -z-0 h-[420px] w-[420px] rounded-[42%_58%_63%_37%/45%_34%_66%_55%] bg-[#F0EEFF]" />
          <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col items-start">
            <span className="mb-8 rounded-full bg-[#F0EEFF] px-5 py-2 text-sm font-medium text-[#5B4EE8]">
              For creators who want a software product
            </span>
            <h1 className="max-w-5xl text-5xl leading-[0.95] font-extrabold tracking-tight sm:text-6xl md:text-7xl lg:text-8xl">
              We Build Monetizable Software Tools For <span className="text-[#5B4EE8]">Creators</span>
            </h1>
            <p className="mt-8 max-w-3xl text-lg font-medium text-[#6B7280] md:text-xl">
              No upfront setup cost. Delivered fast. Fully managed by us.
            </p>

            <div className="mt-10 flex w-full flex-col gap-4 sm:w-auto sm:flex-row">
              <a
                href="#lead-form"
                className="rounded-full bg-[#5B4EE8] px-8 py-4 text-center text-base font-extrabold text-white shadow-xl shadow-[#5B4EE8]/15"
              >
                Book a Strategy Call
              </a>
              <a
                href="#how-it-works"
                className="rounded-full border border-[#5B4EE8] px-8 py-4 text-center text-base font-extrabold text-[#5B4EE8]"
              >
                See how it works
              </a>
            </div>

            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm font-medium text-[#6B7280]">
              <span>✦ No coding needed</span>
              <span>✦ You keep the revenue</span>
              <span>✦ Delivered fast (days for simple tools)</span>
            </div>
          </div>
        </section>

        <section id="what-we-build" className="px-6 py-24 md:px-10">
          <div className="mx-auto w-full max-w-7xl">
            <div className="mb-8 flex items-center justify-center gap-3">
              <span className="h-px w-10 bg-[#D1CCFF]" />
              <span className="text-xs font-extrabold tracking-[0.18em] text-[#5B4EE8]">WHAT WE BUILD</span>
              <span className="h-px w-10 bg-[#D1CCFF]" />
            </div>
            <h2 className="mx-auto mb-14 max-w-4xl text-center text-4xl leading-tight font-extrabold tracking-tight md:text-6xl">
              Instead Of Promoting Apps, Build Your Own.
            </h2>
            <div className="mx-auto max-w-3xl grid grid-cols-1 gap-5 sm:grid-cols-2">
              {[
                {
                  category: "Career Creators",
                  items: ["AI Resume Builder", "AI Interview Simulator", "Study Assistant Tool"],
                },
                {
                  category: "Fitness Creators",
                  items: ["AI Workout Planner", "AI Meal Planner", "All-in-one Fitness App"],
                },
                {
                  category: "Finance / Investing",
                  items: ["Stock Dashboard", "Portfolio Tracker", "Market Insights Tool"],
                },
                {
                  category: "Health & Wellness",
                  items: ["Meditation App", "Breathwork App", "Mood / Habit Tracker"],
                },
              ].map((group) => (
                <article key={group.category} className="rounded-3xl border border-[#E5E7EB] bg-white p-9 md:p-10">
                  <p className="mb-4 text-xs font-extrabold tracking-[0.14em] text-[#5B4EE8]">{group.category}</p>
                  <ul className="space-y-2">
                    {group.items.map((item) => (
                      <li key={item} className="flex items-center gap-2 text-sm font-medium text-[#0D0D0D]">
                        <span className="text-[#C5BEFF] font-extrabold">&#8599;</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
            <p className="mx-auto mt-12 max-w-2xl text-center text-base font-semibold text-[#0D0D0D]">
              Whatever your niche — there&apos;s a software product your audience would engage with.
            </p>
          </div>
        </section>

        <section id="how-it-works" className="px-6 py-24 md:px-10">
          <div className="mx-auto w-full max-w-7xl">
            <div className="mb-8 flex items-center justify-center gap-3">
              <span className="h-px w-10 bg-[#D1CCFF]" />
              <span className="text-xs font-extrabold tracking-[0.18em] text-[#5B4EE8]">HOW IT WORKS</span>
              <span className="h-px w-10 bg-[#D1CCFF]" />
            </div>

            <h2 className="mx-auto mb-14 max-w-4xl text-center text-4xl leading-tight font-extrabold tracking-tight md:text-6xl">
              Three steps to owning your software
            </h2>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              {steps.map((step) => (
                <article key={step.number} className="rounded-3xl bg-[#F0EEFF] p-8 md:p-10">
                  <p className="text-6xl leading-none font-extrabold text-[#C5BEFF]">{step.number}</p>
                  <h3 className="mt-6 text-2xl leading-tight font-extrabold">{step.title}</h3>
                  <p className="mt-4 text-base leading-relaxed font-medium text-[#6B7280]">{step.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="products" className="bg-[#F0EEFF] px-6 py-24 md:px-10">
          <div className="mx-auto w-full max-w-7xl">
            <div className="mb-8 flex items-center justify-center gap-3">
              <span className="h-px w-10 bg-[#D1CCFF]" />
              <span className="text-xs font-extrabold tracking-[0.18em] text-[#5B4EE8]">PROOF</span>
              <span className="h-px w-10 bg-[#D1CCFF]" />
            </div>
            <h2 className="mx-auto mb-14 max-w-4xl text-center text-4xl leading-tight font-extrabold tracking-tight md:text-6xl">
              Products We&apos;ve Built
            </h2>
            <div className="mx-auto max-w-xl">
              <article className="rounded-3xl bg-white p-8 shadow-xl shadow-black/5 md:p-10">
                <h3 className="text-2xl font-extrabold text-[#0D0D0D]">ResumeDarzi</h3>
                <p className="mt-4 text-base leading-relaxed font-medium text-[#6B7280]">
                  Live AI powered resume to Job Description matcher tool built and deployed end-to-end. Includes payments, user flows, and admin management.
                </p>
                <ul className="mt-5 space-y-2 text-sm font-medium text-[#0D0D0D]">
                  <li className="flex items-center gap-2"><span className="text-[#5B4EE8]">✓</span> Live production tool</li>
                  <li className="flex items-center gap-2"><span className="text-[#5B4EE8]">✓</span> Payments integrated</li>
                  <li className="flex items-center gap-2"><span className="text-[#5B4EE8]">✓</span> Fully deployed &amp; maintained</li>
                </ul>
                <div className="relative mt-7 w-full overflow-hidden rounded-2xl" style={{ paddingBottom: "56.25%" }}>
                  <iframe
                    src="https://www.loom.com/embed/5af03cf3ddef42a79f78bdcebe3307d6"
                    frameBorder="0"
                    allowFullScreen
                    className="absolute inset-0 h-full w-full rounded-2xl bg-[#F0EEFF]"
                    title="Resume Darzi - AI Resume Builder"
                  />
                </div>
                <div className="mt-5 flex flex-col gap-3 sm:flex-row">
                  <a
                    href="https://resumedarzi.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full bg-[#5B4EE8] px-6 py-3 text-center text-sm font-extrabold text-white shadow-xl shadow-[#5B4EE8]/15"
                  >
                    Visit Live Tool
                  </a>
                  <a
                    href="https://www.loom.com/share/5af03cf3ddef42a79f78bdcebe3307d6"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full border border-[#5B4EE8] px-6 py-3 text-center text-sm font-extrabold text-[#5B4EE8]"
                  >
                    Watch Demo
                  </a>
                </div>
              </article>
            </div>
          </div>
        </section>

        <section id="founding-program" className="px-6 py-24 md:px-10">
          <div className="mx-auto w-full max-w-7xl">
            <div className="mb-8 flex items-center justify-center gap-3">
              <span className="h-px w-10 bg-[#D1CCFF]" />
              <span className="text-xs font-extrabold tracking-[0.18em] text-[#5B4EE8]">LIMITED OFFER</span>
              <span className="h-px w-10 bg-[#D1CCFF]" />
            </div>
            <h2 className="mx-auto mb-6 max-w-4xl text-center text-4xl leading-tight font-extrabold tracking-tight md:text-6xl">
              Founding Creator Program
            </h2>
            <p className="mx-auto mb-10 max-w-2xl text-center text-lg font-medium text-[#6B7280]">
              We&apos;re onboarding a limited number of creators under a special structure.
            </p>
            <div className="mx-auto max-w-xl rounded-3xl border border-[#E5E7EB] bg-white p-8 md:p-10">
              <ul className="space-y-4 text-base font-medium text-[#0D0D0D]">
                <li className="flex items-start gap-3">
                  <span className="mt-0.5 text-[#5B4EE8] font-extrabold">✓</span>
                  <span>$0 upfront. We build first.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-0.5 text-[#5B4EE8] font-extrabold">✓</span>
                  <span>Setup fee paid only after the product is live.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-0.5 text-[#5B4EE8] font-extrabold">✓</span>
                  <span> <span className="line-through text-[#9CA3AF]">Standard setup: $3000</span> → Founding rate: $1500 <span className="text-[#5B4EE8] font-semibold">(50% off)</span>.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-0.5 text-[#5B4EE8] font-extrabold">✓</span>
                  <span>We manage hosting, maintenance, updates, and operations.</span>
                </li>
              </ul>
              <a
                href="#lead-form"
                className="mt-7 block w-full rounded-full bg-[#5B4EE8] px-6 py-4 text-center text-base font-extrabold text-white shadow-xl shadow-[#5B4EE8]/15"
              >
                Apply For A Founding Slot
              </a>
              <p className="mt-4 text-center text-sm font-medium text-[#6B7280]">Limited to 3 creators.</p>
            </div>
          </div>
        </section>

        <section id="lead-form" className="bg-[#F0EEFF] px-6 py-24 md:px-10">
          <div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-start gap-10 lg:grid-cols-2">
            <div>
              <p className="text-xs font-extrabold tracking-[0.18em] text-[#5B4EE8]">GET STARTED</p>
              <h2 className="mt-4 max-w-xl text-4xl leading-tight font-extrabold tracking-tight md:text-6xl">
                Let&apos;s Build a Tool Your Audience Will Love
              </h2>
              <p className="mt-6 max-w-xl text-lg leading-relaxed font-medium text-[#6B7280]">
                Tell us about yourself and your audience. We&apos;ll reach out within 24 hours to schedule a call.
              </p>
              <ul className="mt-8 space-y-3 text-base font-medium text-[#0D0D0D]">
                <li className="flex items-center gap-3">
                  <span className="text-[#5B4EE8]">✓</span>
                  <span>No commitment, no sales pressure</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-[#5B4EE8]">✓</span>
                  <span>We respond within 24 hours</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-[#5B4EE8]">✓</span>
                  <span>Delivered fast (days for simple tools)</span>
                </li>
              </ul>
            </div>

            <div className="rounded-3xl bg-white p-7 shadow-xl shadow-black/5 md:p-10">
              {isSubmitted ? (
                <p className="rounded-xl border border-green-200 bg-green-50 px-4 py-3 text-base font-medium text-green-700">
                  ✓ Got it! We&apos;ll be in touch within 24 hours.
                </p>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label htmlFor="name" className="mb-2 block text-sm font-medium text-[#0D0D0D]">
                      Your Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      className="w-full rounded-xl border border-[#E5E7EB] px-4 py-3 text-base font-medium outline-none"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="mb-2 block text-sm font-medium text-[#0D0D0D]">
                      Email Address
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      className="w-full rounded-xl border border-[#E5E7EB] px-4 py-3 text-base font-medium outline-none"
                    />
                  </div>

                  <div>
                    <label htmlFor="platform" className="mb-2 block text-sm font-medium text-[#0D0D0D]">
                      Your Main Platform
                    </label>
                    <select
                      id="platform"
                      name="platform"
                      required
                      className="w-full rounded-xl border border-[#E5E7EB] bg-white px-4 py-3 text-base font-medium outline-none"
                      defaultValue=""
                    >
                      <option value="" disabled>
                        Select platform
                      </option>
                      {platformOptions.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="niche" className="mb-2 block text-sm font-medium text-[#0D0D0D]">
                      Your Niche
                    </label>
                    <select
                      id="niche"
                      name="niche"
                      required
                      className="w-full rounded-xl border border-[#E5E7EB] bg-white px-4 py-3 text-base font-medium outline-none"
                      defaultValue=""
                    >
                      <option value="" disabled>
                        Select niche
                      </option>
                      {nicheOptions.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="audience" className="mb-2 block text-sm font-medium text-[#0D0D0D]">
                      Audience Size
                    </label>
                    <select
                      id="audience"
                      name="audience"
                      required
                      className="w-full rounded-xl border border-[#E5E7EB] bg-white px-4 py-3 text-base font-medium outline-none"
                      defaultValue=""
                    >
                      <option value="" disabled>
                        Select audience size
                      </option>
                      {audienceOptions.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="mb-2 block text-sm font-medium text-[#0D0D0D]">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      placeholder="Tell us about your audience or the tool you have in mind..."
                      className="w-full rounded-xl border border-[#E5E7EB] px-4 py-3 text-base font-medium outline-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full rounded-full bg-[#5B4EE8] px-6 py-4 text-base font-extrabold text-white shadow-xl shadow-[#5B4EE8]/15 disabled:cursor-not-allowed disabled:opacity-80"
                  >
                    {isSubmitting ? "Sending..." : "Send My Details →"}
                  </button>

                  <p className="text-center text-sm font-medium text-[#6B7280]">We respond within 24 hours. No spam, ever.</p>
                </form>
              )}
            </div>
          </div>

          <div className="mx-auto mt-16 w-full max-w-7xl">
            <div className="mb-8 flex items-center justify-center gap-3">
              <span className="h-px w-10 bg-[#D1CCFF]" />
              <span className="text-xs font-extrabold tracking-[0.18em] text-[#5B4EE8]">FAQ</span>
              <span className="h-px w-10 bg-[#D1CCFF]" />
            </div>
            <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
              {faqItems.map((item) => (
                <article key={item.question} className="rounded-3xl bg-white p-7 shadow-xl shadow-black/5">
                  <h3 className="text-xl leading-tight font-extrabold text-[#0D0D0D]">{item.question}</h3>
                  <p className="mt-3 text-base leading-relaxed font-medium text-[#6B7280]">{item.answer}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <footer className="border-t border-[#E5E7EB] bg-white px-6 py-10 text-center md:px-10">
        <p className="text-sm font-medium text-[#6B7280]">© 2025 HiddenSaaS. All rights reserved.</p>
        <div className="mt-3 flex items-center justify-center gap-4 text-sm font-medium text-[#6B7280]">
          <a href="#" className="hover:text-[#0D0D0D]">
            Twitter
          </a>
          <span>·</span>
          <a href="#" className="hover:text-[#0D0D0D]">
            LinkedIn
          </a>
          <span>·</span>
          <a href="#" className="hover:text-[#0D0D0D]">
            Instagram
          </a>
        </div>
        <p className="mt-3 text-sm font-medium text-[#6B7280]">
          Email: <a href="mailto:dsg@hiddensaas.com" className="text-[#5B4EE8] hover:underline">dsg@hiddensaas.com</a>
        </p>
      </footer>
    </div>
  );
}
