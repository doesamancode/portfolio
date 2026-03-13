import { useEffect, useRef, useState } from "react";
import GlowButton from "./ui/GlowButton";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === "Escape") setOpen(false);
    };

    const onClickOutside = (e) => {
      if (!menuRef.current) return;
      if (!menuRef.current.contains(e.target)) setOpen(false);
    };

    window.addEventListener("keydown", onKeyDown);
    window.addEventListener("mousedown", onClickOutside);

    return () => {
      window.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("mousedown", onClickOutside);
    };
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="nav-glass-band nav-sweep">
        <div className="mx-auto max-w-8xl px-30 py-1">
          <div className="flex h-16 items-center justify-between">
            <a href="#top" className="flex items-center gap-3">
              <div className="h-8 w-8 rounded-full bg-gradient-to-br from-[var(--primary-from)] to-[var(--primary-to)]" />
              <div className="leading-tight">
                <div className="text-lg font-semibold tracking-wide text-[var(--fg)]">
                  Aman Pathak
                </div>
              </div>
            </a>

            <div className="hidden items-center gap-8 md:flex">
              <NavLink href="#services" label="Services" />
              <NavLink href="#projects" label="Projects" />
              <NavLink href="#about" label="About" />
              <NavLink href="#contact" label="Contact" />

              <GlowButton href="https://cal.com/amanpathak/book" size="sm">
                Start a Project
              </GlowButton>
            </div>

            <button
              className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--glass)] backdrop-blur-xl transition hover:bg-[var(--glass-strong)]"
              onClick={() => setOpen((v) => !v)}
              aria-label="Toggle menu"
              aria-expanded={open}
            >
              <div className="relative h-4 w-5">
                <span
                  className={`absolute left-0 top-0 h-[2px] w-full rounded bg-[var(--fg)] transition ${
                    open ? "translate-y-[7px] rotate-45" : ""
                  }`}
                />
                <span
                  className={`absolute left-0 top-[7px] h-[2px] w-full rounded bg-[var(--fg)] transition ${
                    open ? "opacity-0" : "opacity-100"
                  }`}
                />
                <span
                  className={`absolute left-0 top-[14px] h-[2px] w-full rounded bg-[var(--fg)] transition ${
                    open ? "-translate-y-[7px] -rotate-45" : ""
                  }`}
                />
              </div>
            </button>
          </div>

          {open && (
            <div ref={menuRef} className="md:hidden pb-4">
              <div className="rounded-2xl border border-[var(--border)] bg-[var(--glass)] p-3 backdrop-blur-xl">
                <MobileLink href="#services" label="Services" onClick={() => setOpen(false)} />
                <MobileLink href="#projects" label="Projects" onClick={() => setOpen(false)} />
                <MobileLink href="#about" label="About" onClick={() => setOpen(false)} />
                <MobileLink href="#contact" label="Contact" onClick={() => setOpen(false)} />

                <div className="mt-3">
                  <GlowButton
                    href="#contact"
                    size="md"
                    className="w-full"
                    onClick={() => setOpen(false)}
                  >
                    Start a Project
                  </GlowButton>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}

function NavLink({ href, label }) {
  return (
    <a
      href={href}
      className="text-md text-[var(--muted)] transition hover:text-[var(--fg)]"
    >
      {label}
    </a>
  );
}

function MobileLink({ href, label, onClick }) {
  return (
    <a
      href={href}
      onClick={onClick}
      className="block rounded-xl px-3 py-2 text-sm text-[var(--fg)]/90 hover:bg-[var(--glass-strong)]"
    >
      {label}
    </a>
  );
}
