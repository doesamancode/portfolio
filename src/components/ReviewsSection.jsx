const reviews = [
  {
    name: "Siddharth Shankar Tripathi",
    title: "Founder / CEO @ RinggAI",
    review:
      "Working with Aman was a breath of fresh air for our team at Ringg AI. He managed to take our complex SaaS concepts and translate them into top-tier motion graphics with zero friction and perfect communication. It is rare to find someone who can deliver this level of quality without the usual project management headaches. If you're looking for high-impact results and a seamless workflow, I highly recommend him.",
    rating: 5,
  },
  {
    name: "Abhishek",
    title: "UX Designer - Germany",
    review:
      "Aman Pathak is one of those guys who really understands concepts well. He takes the vision, turns it into a clear storyboard, and then transforms that into videos that are always really stunning. Whenever he works on something, he fully understands the concept of what I’m saying and turns it into a truly impactful video. Some of the videos have gained great attention and strong insights as well. Even with a simple explanation, he knows how to develop the story properly. He also listens carefully to all the requirements. And yes, he’s fast too.",
    rating: 5,
  },
  {
    name: "Elmi Dela Cruz",
    title: "Project Manager @ Clifton Creations",
    review:
      "We’ve had a great experience working with Aman. He has been consistently responsive, communicative, and dependable throughout our projects. Even when we’ve had tight deadlines, Aman has been willing to stretch and accommodate our timelines without compromising professionalism. He’s easy to work with and open to feedback, making collaboration smooth and efficient.",
    rating: 5,
  },
  // {
  //   name: "Client Name",
  //   title: "Brand Manager",
  //   review:
  //     "Clean edits, premium transitions and amazing finishing touches. Everything stayed consistent with our brand.",
  //   rating: 5,
  // },
  // {
  //   name: "Client Name",
  //   title: "SaaS Growth Lead",
  //   review:
  //     "The explainer was clear, structured and stylish. It didn’t just look good — it actually sold the product better.",
  //   rating: 5,
  // },
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

        {/* Reviews container */}
        <div className="mt-14 flex flex-wrap items-center justify-center gap-8">
          {reviews.map((r, idx) => (
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
    </section>
  );
}
