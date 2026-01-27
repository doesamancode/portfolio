const projects = [
  { title: "Project Title 01" },
  { title: "Project Title 02" },
  { title: "Project Title 03" },
  { title: "Project Title 04" },
  { title: "Project Title 05" },
  { title: "Project Title 06" },
];

function ProjectCard({ title }) {
  return (
    <div className="liquid-glass rounded-[var(--radius-card)] p-5">
      <div className="flex items-start justify-between gap-4">
        <h3 className="text-lg font-semibold tracking-tight text-[var(--fg)]">
          {title}
        </h3>
        <span className="text-xs uppercase tracking-[0.22em] text-[var(--fg)]/55">
          Video
        </span>
      </div>

      <div className="mt-4 overflow-hidden rounded-[calc(var(--radius-card)-10px)] border border-white/15 bg-black/35">
        <div className="relative aspect-video w-full">
          <div className="absolute inset-0 grid place-items-center">
            <div className="text-center">
              <div className="mx-auto grid h-12 w-12 place-items-center rounded-[var(--radius-btn)] border border-white/20 bg-white/10 backdrop-blur-xl">
                ▶
              </div>
              <p className="mt-3 text-xs text-[var(--muted)]">
                Video preview placeholder
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-4 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-[var(--fg)]/60">
        <span className="uppercase tracking-[0.22em]">Editing</span>
        <span className="uppercase tracking-[0.22em]">Color</span>
        <span className="uppercase tracking-[0.22em]">Sound</span>
      </div>
    </div>
  );
}

export default function ProjectsSection() {
  return (
    <section id="projects" className="relative py-24">
      <div className="mx-auto max-w-8xl px-30 py-1">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-[var(--fg)] sm:text-4xl">
            Featured Projects
          </h2>
          <p className="mt-4 text-[var(--muted)]">
            A selection of work across creators, brands, and cinematic storytelling edits.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {projects.map((p, idx) => (
            <ProjectCard key={idx} title={p.title} />
          ))}
        </div>
      </div>
    </section>
  );
}
