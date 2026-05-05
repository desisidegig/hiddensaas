'use client';

import { useState } from 'react';

interface FitnessHeroProps {
  videoId: string;
  thumbnail: string;
  name?: string; // if provided → personalised headline
  whatsappHref: string;
}

export default function FitnessHero({ videoId, thumbnail, name, whatsappHref }: FitnessHeroProps) {
  const [playing, setPlaying] = useState(false);

  function handleWatchDemo() {
    setPlaying(true);
    document.getElementById('demo')?.scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <section className="relative min-h-screen overflow-hidden px-6 pb-20 pt-24 md:px-10">

      {/* ── Background glow layers ── */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-[700px] w-[700px] -translate-x-1/2 rounded-full bg-[#7C3AED]/25 blur-[160px]" />
        <div className="absolute -left-32 top-1/2 h-80 w-80 rounded-full bg-[#22C55E]/10 blur-[100px]" />
        <div className="absolute right-0 top-1/3 h-64 w-64 rounded-full bg-[#7C3AED]/15 blur-[80px]" />
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)',
            backgroundSize: '64px 64px',
          }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">

        {/* Badge */}
        <div className="mb-10 flex justify-center lg:justify-start">
          <span className="inline-flex items-center gap-2 rounded-full border border-[#7C3AED]/40 bg-[#7C3AED]/10 px-4 py-1.5 text-xs font-bold tracking-widest text-purple-300 backdrop-blur-sm">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-purple-400" />
            {name ? `HEY ${name.toUpperCase()} — THIS IS FOR YOU` : 'BUILT FOR FITNESS CREATORS'}
          </span>
        </div>

        {/* ── Phone LEFT · Text RIGHT ── */}
        <div className="flex flex-col items-center gap-12 lg:flex-row lg:items-center lg:gap-16">

          {/* ── RIGHT: big phone video ── */}
          <div id="demo" className="relative order-2 flex-shrink-0 lg:order-2">

            {/* Outer glow */}
            <div className="absolute inset-0 scale-110 rounded-[3.5rem] bg-[#7C3AED]/35 blur-3xl" />

            {/* Phone shell */}
            <div
              className="relative w-[300px] overflow-hidden rounded-[2.8rem] border-2 border-[#7C3AED]/50 bg-black sm:w-[340px] lg:w-[380px]"
              style={{
                aspectRatio: '9 / 16',
                boxShadow: '0 0 100px rgba(124,58,237,0.35), 0 60px 100px rgba(0,0,0,0.9)',
              }}
            >
              {/* Notch */}
              <div className="absolute left-1/2 top-3 z-10 h-5 w-24 -translate-x-1/2 rounded-full bg-black" />

              {playing ? (
                <iframe
                  src={`https://www.youtube.com/embed/${videoId}?autoplay=1&loop=1&playlist=${videoId}&modestbranding=1&playsinline=1&rel=0`}
                  className="h-full w-full"
                  allow="autoplay; fullscreen"
                  allowFullScreen
                  title="Fitness app demo"
                  style={{ border: 'none' }}
                />
              ) : (
                <button
                  onClick={() => setPlaying(true)}
                  className="group relative h-full w-full cursor-pointer"
                  aria-label="Play video"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={thumbnail}
                    alt="Fitness app demo"
                    className="h-full w-full object-cover"
                  />
                  {/* Dark overlay */}
                  <div className="absolute inset-0 bg-black/20 transition-colors group-hover:bg-black/10" />
                  {/* Play button */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div
                      className="flex h-20 w-20 items-center justify-center rounded-full transition-transform group-hover:scale-110"
                      style={{
                        background: 'rgba(255,255,255,0.95)',
                        boxShadow: '0 0 60px rgba(124,58,237,0.5)',
                      }}
                    >
                      <svg width="28" height="28" viewBox="0 0 24 24" fill="#7C3AED" className="translate-x-0.5">
                        <polygon points="5,3 19,12 5,21" />
                      </svg>
                    </div>
                  </div>
                  {/* Sound hint */}
                  <div className="absolute bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-black/60 px-3 py-1.5 text-xs font-bold text-white backdrop-blur-sm">
                    🔊 Tap to watch with sound
                  </div>
                </button>
              )}
            </div>

            {/* Floating: Live Demo tag */}
            <div className="absolute -right-4 top-1/4 rounded-2xl border border-white/10 bg-white/5 px-3 py-2 text-xs backdrop-blur-lg shadow-xl">
              <p className="text-[10px] font-bold text-purple-400 uppercase tracking-wider">Live Demo</p>
              <p className="mt-0.5 font-bold text-white">Tap to watch ↓</p>
            </div>

            {/* Floating: With sound tag */}
            <div className="absolute -left-4 bottom-20 rounded-2xl border border-[#22C55E]/20 bg-[#22C55E]/10 px-3 py-2 text-xs backdrop-blur-lg shadow-xl">
              <p className="font-bold text-[#22C55E]">🔊 With sound</p>
            </div>
          </div>

          {/* ── LEFT: text ── */}
          <div className="order-1 flex-1 text-center lg:order-1 lg:text-left">
            <h1 className="text-5xl font-black leading-[0.92] tracking-tight sm:text-6xl lg:text-7xl xl:text-8xl">
              {name ? (
                <>
                  {name},{' '}
                  <span
                    className="bg-clip-text text-transparent"
                    style={{ backgroundImage: 'linear-gradient(135deg, #A78BFA 0%, #7C3AED 50%, #C4B5FD 100%)' }}
                  >
                    your fitness empire
                  </span>{' '}
                  starts here.
                </>
              ) : (
                <>
                  Your audience.{' '}
                  <span
                    className="bg-clip-text text-transparent"
                    style={{ backgroundImage: 'linear-gradient(135deg, #A78BFA 0%, #7C3AED 50%, #C4B5FD 100%)' }}
                  >
                    Your app.
                  </span>{' '}
                  Your empire.
                </>
              )}
            </h1>

            <p className="mx-auto mt-6 max-w-lg text-lg font-medium leading-relaxed text-[#94A3B8] lg:mx-0">
              {name
                ? 'Your audience already trusts you. Now give them a home — a fully branded fitness app with your workouts, nutrition plans, and progress tracking. All under your name.'
                : "Stop sending your followers to apps that don't pay you. Launch a fully branded fitness app for your audience — workouts, nutrition, progress tracking — all under your name."}
            </p>

            <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row lg:justify-start">
              {/* Primary CTA */}
              <a
                href={whatsappHref}
                target="_blank"
                rel="noreferrer"
                className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full px-8 py-4 text-base font-black text-white shadow-2xl transition-all duration-200"
                style={{
                  background: 'linear-gradient(135deg, #7C3AED 0%, #6D28D9 100%)',
                  boxShadow: '0 0 40px rgba(124,58,237,0.4)',
                }}
              >
                <span
                  className="absolute inset-0 opacity-0 transition-opacity duration-200 group-hover:opacity-100"
                  style={{ background: 'linear-gradient(135deg, #8B5CF6, #7C3AED)' }}
                />
                <span className="relative">Build my app — free</span>
                <svg className="relative h-4 w-4 transition-transform group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </a>

              {/* Watch demo — triggers play */}
              <button
                onClick={handleWatchDemo}
                className="flex items-center gap-3 text-sm font-semibold text-[#CBD5E1] transition-colors hover:text-white"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/5 backdrop-blur-sm">
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="white"><polygon points="8,5 19,12 8,19" /></svg>
                </span>
                Watch the demo
              </button>
            </div>

            {/* Micro stats */}
            <div className="mt-10 flex items-center justify-center gap-8 lg:justify-start">
              {[
                { num: '48h', label: 'Launch time' },
                { num: '₹0', label: 'Upfront cost' },
                { num: '100%', label: 'Your brand' },
              ].map(({ num, label }, i) => (
                <div key={i} className="text-center lg:text-left">
                  <p className="text-2xl font-black text-white">{num}</p>
                  <p className="mt-0.5 text-xs font-semibold text-[#475569]">{label}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
