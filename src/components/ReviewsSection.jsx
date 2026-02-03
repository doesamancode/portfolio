const reviews = [
  {
    name: "Client Name",
    title: "Founder / CEO",
    review:
      "Aman’s edit quality is top-tier. The pacing, sound design and final polish made the video feel genuinely premium.",
    rating: 5,
  },
  {
    name: "Client Name",
    title: "Marketing Head",
    review:
      "Super smooth workflow. Communication was clear, edits were fast, and the final output exceeded our expectations.",
    rating: 5,
  },
  {
    name: "Client Name",
    title: "Content Creator",
    review:
      "Retention improved instantly. The hook placement, cut timing and motion details were done with real skill.",
    rating: 5,
  },
  {
    name: "Client Name",
    title: "Brand Manager",
    review:
      "Clean edits, premium transitions and amazing finishing touches. Everything stayed consistent with our brand.",
    rating: 5,
  },
  {
    name: "Client Name",
    title: "SaaS Growth Lead",
    review:
      "The explainer was clear, structured and stylish. It didn’t just look good — it actually sold the product better.",
    rating: 5,
  },
];

function Stars({ rating }) {
  const full = Math.max(0, Math.min(5, rating));
  return (
    <div className="flex items-center gap-1">
      {Array.from({ length: 5 }).map((_, i) => (
        <span
          key={i}
          className={`text-sm ${
            i < full ? "text-[var(--fg)]" : "text-[var(--fg)]/25"
          }`}
        >
          ★
        </span>
      ))}
    </div>
  );
}

function ReviewCard({ name, title, review, rating }) {
  return (
    <div className="liquid-glass w-[360px] shrink-0 rounded-[var(--radius-card)] p-6">
      <div>
        <div className="text-base font-semibold text-[var(--fg)]">{name}</div>
        <div className="mt-1 text-sm text-[var(--muted)]">{title}</div>
      </div>

      <div className="my-4 h-px w-full bg-white/10" />

      <p className="text-sm leading-relaxed text-[var(--fg)]/80">{review}</p>

      <div className="mt-5 flex items-center justify-between">
        <div className="text-sm font-semibold text-[var(--fg)]/85">
          {rating}.0{" "}
          <span className="text-[var(--muted)] font-normal">/ 5</span>
        </div>
        <Stars rating={rating} />
      </div>
    </div>
  );
}

export default function ReviewsSection() {
  return (
    <section id="reviews" className="relative py-24">
      <div className="mx-auto max-w-8xl px-30 py-1">
        <div className="text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-[var(--fg)] sm:text-4xl">
            What Clients Say
          </h2>
          <p className="mt-4 text-[var(--muted)]">
            Premium edits, smooth communication, and results-driven
            storytelling.
          </p>
        </div>

        <div className="reviews-wrap mt-12 overflow-hidden">
          <div className="reviews-track">
            {[...reviews, ...reviews].map((r, idx) => (
              <ReviewCard
                key={idx}
                name={r.name}
                title={r.title}
                review={r.review}
                rating={r.rating}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
