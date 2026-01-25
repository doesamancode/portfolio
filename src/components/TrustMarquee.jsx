const items = [
  "Brand Name",
  "Creator",
  "Platform",
  "Client",
  "Agency",
  "Startup",
  "YouTube",
  "Instagram",
];

function Row({ reverse = false }) {
  return (
    <div className="relative overflow-hidden">
      <div
        className={[
          "flex w-max items-center gap-10 whitespace-nowrap",
          reverse ? "animate-marqueeReverse" : "animate-marquee",
        ].join(" ")}
      >
        {[...items, ...items, ...items].map((t, i) => (
          <span
            key={i}
            className="text-xs uppercase tracking-[0.28em] text-[var(--fg)]/55"
          >
            {t}
          </span>
        ))}
      </div>

      <div className="pointer-events-none absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-[var(--bg)] to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-[var(--bg)] to-transparent" />
    </div>
  );
}

export default function TrustMarquee() {
  return (
    <div className="mt-10 w-full">
      <div className="rounded-2xl border border-white/10 bg-[var(--glass)] px-6 py-4 backdrop-blur-xl">
        <div className="text-center text-sm text-[var(--muted)]">
          Worked with creators & brands across platforms
        </div>

        <div className="mt-4 space-y-3">
          <Row />
          <Row reverse />
        </div>
      </div>
    </div>
  );
}
