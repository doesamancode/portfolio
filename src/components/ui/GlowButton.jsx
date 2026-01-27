export default function GlowButton({
  children,
  href = "#",
  onClick,
  className = "",
  size = "md",
}) {
  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-sm",
    lg: "px-7 py-3.5 text-base",
  };

  return (
    <a
      href={href}
      onClick={onClick}
      className={[
        "group relative inline-flex items-center justify-center",
        "rounded-[var(--radius-btn)]",
        "bg-[var(--glass)] text-[var(--fg)] backdrop-blur-xl",
        "border border-white/10",
        "transition",
        sizes[size] ?? sizes.md,
        className,
      ].join(" ")}
    >
      <span className="pointer-events-none absolute -inset-[2px] rounded-[calc(var(--radius-btn)+2px)] bg-gradient-to-r from-[var(--primary-from)] to-[var(--primary-to)] opacity-50 blur-[10px] transition duration-300 group-hover:-inset-[3px] group-hover:opacity-90 group-hover:blur-[14px]" />

      <span className="pointer-events-none absolute inset-0 rounded-[var(--radius-btn)]">
        <span className="absolute inset-0 rounded-[var(--radius-btn)] border border-transparent [background:linear-gradient(var(--glass),var(--glass))_padding-box,linear-gradient(90deg,var(--primary-from),var(--primary-to))_border-box]" />
      </span>

      <span className="relative z-10 inline-flex items-center justify-center gap-2">
        {children}
      </span>

    </a>
  );
}
