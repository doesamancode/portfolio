export default function Background() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-[var(--bg)]" />

      <div className="absolute -left-[25%] -top-[35%] h-[900px] w-[900px] rounded-full blur-[160px] opacity-40 bg-[radial-gradient(circle_at_center,var(--primary-from)_0%,transparent_62%)] animate-blobA" />

      <div className="absolute -right-[25%] -bottom-[35%] h-[900px] w-[900px] rounded-full blur-[170px] opacity-35 bg-[radial-gradient(circle_at_center,var(--primary-to)_0%,transparent_62%)] animate-blobB" />

      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[var(--bg)]" />
    </div>
  );
}
