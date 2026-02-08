import GlowButton from "./ui/GlowButton";
import TrustMarquee from "./TrustMarquee";
import Plasma from "./Plasma";

function MouseIcon() {
  return (
    <svg
      className="h-7 w-7 text-[var(--fg)] mouse-float"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 256"
      fill="currentColor"
    >
      <path
        d="M200,80v96a56,56,0,0,1-56,56H112a56,56,0,0,1-56-56V80a56,56,0,0,1,56-56h32A56,56,0,0,1,200,80Z"
        opacity="0.2"
      />
      <path d="M144,16H112A64.07,64.07,0,0,0,48,80v96a64.07,64.07,0,0,0,64,64h32a64.07,64.07,0,0,0,64-64V80A64.07,64.07,0,0,0,144,16Zm48,160a48.05,48.05,0,0,1-48,48H112a48.05,48.05,0,0,1-48-48V80a48.05,48.05,0,0,1,48-48h32a48.05,48.05,0,0,1,48,48ZM136,64v48a8,8,0,0,1-16,0V64a8,8,0,0,1,16,0Z" />
    </svg>
  );
}

function PlayIcon() {
  return (
    <svg
      className="h-4 w-4 text-[var(--fg)]"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 256"
      fill="currentColor"
    >
      <path
        d="M228.23,134.69,84.15,222.81A8,8,0,0,1,72,216.12V39.88a8,8,0,0,1,12.15-6.69l144.08,88.12A7.82,7.82,0,0,1,228.23,134.69Z"
        opacity="0.2"
      />
      <path d="M232.4,114.49,88.32,26.35a16,16,0,0,0-16.2-.3A15.86,15.86,0,0,0,64,39.87V216.13A15.94,15.94,0,0,0,80,232a16.07,16.07,0,0,0,8.36-2.35L232.4,141.51a15.81,15.81,0,0,0,0-27ZM80,215.94V40l143.83,88Z" />
    </svg>
  );
}

export default function HeroSection() {
  return (
    <section className="relative min-h-[92vh] overflow-hidden">
      {/* Plasma background – now perfectly bound to hero */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Plasma
          color="#00fffb"
          speed={0.6}
          scale={1.6}
          opacity={0.55}
          mouseInteractive={true}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-8xl px-30 py-1">
        <div className="flex min-h-[92vh] flex-col items-center justify-center text-center">
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-white/10 bg-[var(--glass)] px-4 py-2 text-sm text-[var(--muted)] backdrop-blur-xl">
            <span className="h-2 w-2 rounded-full bg-[var(--primary-from)]" />
            <span>Cinematic Video Editing & Visual Storytelling</span>
          </div>

          <h1 className="text-balance text-5xl font-semibold leading-[1.05] tracking-tight text-[var(--fg)] sm:text-6xl md:text-7xl">
            Crafting Powerful Visual Stories
            <br className="hidden md:block" /> That Capture Attention
          </h1>

          <p className="mt-6 max-w-2xl text-pretty text-base leading-relaxed text-[var(--muted)] sm:text-lg">
            I help creators, brands, and businesses turn raw footage into
            cinematic, high-impact videos that engage audiences and drive
            results.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <GlowButton href="#showreel" size="lg">
              <PlayIcon /> Watch Showreel
            </GlowButton>

            <a
              href="#projects"
              className="rounded-[var(--radius-btn)] border border-white/10 bg-[var(--glass)] px-7 py-3.5 text-base text-[var(--fg)]/85 backdrop-blur-xl transition hover:bg-[var(--glass-strong)] hover:text-[var(--fg)]"
            >
              View Projects
            </a>
          </div>

          <div className="mt-14 flex flex-wrap items-center justify-center gap-x-10 gap-y-3 text-xs uppercase tracking-[0.25em] text-[var(--fg)]/55">
            <span>Premiere Pro</span>
            <span>After Effects</span>
            <span>DaVinci Resolve</span>
            <span>Motion + Sound</span>
          </div>

          <div className="mt-10 flex items-center justify-center gap-4 text-xs text-[var(--muted)]">
            <span>Scroll down</span>
            <span className="h-[1px] w-16 bg-white/10" />
            <MouseIcon />
            <span className="h-[1px] w-16 bg-white/10" />
            <span>to see projects</span>
          </div>

          <TrustMarquee />
        </div>
      </div>
    </section>
  );
}
