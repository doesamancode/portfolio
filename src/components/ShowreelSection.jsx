export default function ShowreelSection() {
  return (
    <section id="showreel" className="relative py-24">
      <div className="mx-auto max-w-8xl px-30 py-1">
        <div className="mx-auto max-w-5xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-[var(--fg)] sm:text-4xl">
            Showreel
          </h2>

          <p className="mt-4 text-[var(--muted)]">
            A curated selection of my best editing work — storytelling, pacing, sound design and visual impact.
          </p>

          <div className="mt-10 rounded-[var(--radius-card)] border border-white/10 bg-[var(--glass)] p-4 backdrop-blur-xl">
            <div className="relative aspect-video w-full overflow-hidden rounded-[calc(var(--radius-card)-6px)] border border-white/10 bg-black/40">
              <div className="absolute inset-0 grid place-items-center">
                <div className="text-center">
                  <div className="mx-auto grid h-14 w-14 place-items-center rounded-[var(--radius-btn)] border border-white/15 bg-white/5 backdrop-blur-xl">
                    ▶
                  </div>
                  <p className="mt-4 text-sm text-[var(--muted)]">
                    Showreel embed placeholder
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-4 flex flex-wrap items-center justify-center gap-x-10 gap-y-2 text-xs uppercase tracking-[0.25em] text-[var(--fg)]/55">
              <span>60–90s</span>
              <span>Cinematic</span>
              <span>Premium Cut</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
