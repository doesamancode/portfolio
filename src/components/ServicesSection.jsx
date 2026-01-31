const services = [
  {
    title: "Short Form Content",
    desc: "High-retention edits optimized for Reels, Shorts, TikTok — punchy pacing + hooks.",
    tag: "Reels / Shorts",
  },
  {
    title: "Cinematic Interviews & Videos",
    desc: "Story-driven edits with clean structure, color, sound design and premium visuals.",
    tag: "Cinematic",
  },
  {
    title: "SaaS Videos & Explainers",
    desc: "Product videos that feel premium: clarity, motion polish, and brand consistency.",
    tag: "SaaS/Explainer",
  },
  {
    title: "Motion Graphics & Brand Identity",
    desc: "Smooth typography, transitions, logo animations and identity motion systems.",
    tag: "Motion",
  },
];

const processSteps = [
  {
    step: "01",
    title: "Brief & Direction",
    desc: "You share your idea, raw footage and references. I align with your brand tone, audience and the exact vibe you want.",
  },
  {
    step: "02",
    title: "Story & First Cut",
    desc: "I structure the narrative, pacing and hook. You get a first cut quickly so we’re synced early and nothing feels off.",
  },
  {
    step: "03",
    title: "Polish & Enhancements",
    desc: "I elevate the edit with sound design, clean transitions, color, motion details and the premium finishing touches.",
  },
  {
    step: "04",
    title: "Feedback → Final Delivery",
    desc: "You review and send changes. I revise fast and deliver final exports optimized for your platform (Reels/Shorts/YouTube/Ads).",
  },
];


function ServiceCard({ title, desc, tag }) {
  return (
    <div className="liquid-glass rounded-[var(--radius-card)] p-5">
      <div className="flex items-start justify-between gap-4">
        <h3 className="text-base font-semibold tracking-tight text-[var(--fg)]">
          {title}
        </h3>
        <span className="rounded-[var(--radius-btn)] border border-white/15 bg-white/5 px-3 py-1 text-[11px] uppercase tracking-[0.22em] text-[var(--fg)]/60 backdrop-blur-xl">
          {tag}
        </span>
      </div>

      <p className="mt-3 text-sm leading-relaxed text-[var(--muted)]">{desc}</p>
    </div>
  );
}

function ProcessPill({ step, title, desc }) {
  return (
    <div className="liquid-glass rounded-[var(--radius-card)] px-7 py-5">
      <div className="flex items-start gap-5">
        <div className="grid h-14 w-14 shrink-0 place-items-center rounded-[16px] border border-white/15 bg-white/5 text-sm font-semibold text-[var(--fg)]">
          {step}
        </div>

        <div className="min-w-0 text-left">
          <div className="text-lg font-semibold tracking-tight text-[var(--fg)]">
            {title}
          </div>

          <div className="mt-2 text-sm leading-relaxed text-[var(--muted)]">
            {desc}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ServicesSection() {
  return (
    <section id="services" className="relative py-20">
      <div className="mx-auto max-w-8xl px-30 py-1">
        <div className="mb-10 text-center">
          <h2 className="text-2xl font-semibold tracking-tight text-[var(--fg)] sm:text-3xl">
            What I Do
          </h2>
          <p className="mt-3 text-[var(--muted)]">
            High-end editing, storytelling and motion — designed for creators & brands.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
          {services.map((s, idx) => (
            <ServiceCard
              key={idx}
              title={s.title}
              desc={s.desc}
              tag={s.tag}
            />
          ))}
        </div>

        <div className="mt-16">
          <div className="text-center">
            <h3 className="text-xl font-semibold tracking-tight text-[var(--fg)]">
              My Process
            </h3>
            <p className="mt-3 text-[var(--muted)]">
              Simple, fast and collaborative — built for premium output.
            </p>
          </div>

          <div className="mx-auto mt-8 max-w-4xl px-4 sm:px-8">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {processSteps.map((p, idx) => (
                <ProcessPill
                  key={idx}
                  step={p.step}
                  title={p.title}
                  desc={p.desc}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
