import GlowButton from "./ui/GlowButton";
import Plasma from "./Plasma";

function SocialButton({ label, href }) {
  return (
    <a
      href={href}
      className="liquid-glass rounded-[var(--radius-btn)] px-4 py-2 text-sm text-[var(--fg)]/80 transition hover:text-[var(--fg)]"
      target="_blank"
    >
      {label}
    </a>
  );
}

export default function FinalCTASection() {
  return (
    <section
      id="contact"
      className="relative flex min-h-[100vh] items-center justify-center overflow-hidden"
    >
      {/* Black base layer (hard reset of background) */}
      <div className="absolute inset-0 z-0 bg-black" />

      {/* Plasma layer ABOVE black */}
      <div className="absolute inset-0 z-[1] pointer-events-none">
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
        <div className="flex flex-col items-center text-center">
          {/* Availability Badge */}
          <div className="mb-8 inline-flex items-center gap-2 liquid-glass rounded-[var(--radius-btn)] px-4 py-2 text-sm text-[var(--fg)]/80">
            <span className="h-2 w-2 rounded-full bg-green-400" />
            Available for Work
          </div>

          {/* Main CTA Text */}
          <h2 className="max-w-4xl text-balance text-3xl font-semibold leading-tight tracking-tight text-[var(--fg)] sm:text-4xl md:text-5xl">
            Curious about what we can create together?
            <br className="hidden sm:block" />
            Let’s bring something extraordinary to life.
          </h2>

          {/* Primary CTA */}
          <div className="mt-10">
            <GlowButton href="https://cal.com/" size="lg" className="px-8">
              Book a Free Call
            </GlowButton>
          </div>

          {/* Social / Contact Links */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <SocialButton label="Instagram" href="#" />
            <SocialButton label="X" href="#" />
            <SocialButton label="Email" href="mailto:hello@example.com" />
          </div>

          {/* Footer line */}
          <div className="mt-16 text-sm text-[var(--fg)]/45">
            © {new Date().getFullYear()} Aman Pathak — All rights reserved
          </div>
        </div>
      </div>
    </section>
  );
}
