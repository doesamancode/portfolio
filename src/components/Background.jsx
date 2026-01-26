export default function Background() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-[var(--bg)]" />

      <div className="absolute -left-[30%] -top-[45%] h-[1100px] w-[1100px] rounded-full blur-[140px] opacity-55 bg-[radial-gradient(circle_at_center,var(--primary-from)_0%,transparent_62%)] animate-blobA" />

      <div className="absolute -right-[30%] -bottom-[45%] h-[1100px] w-[1100px] rounded-full blur-[150px] opacity-50 bg-[radial-gradient(circle_at_center,var(--primary-to)_0%,transparent_62%)] animate-blobB" />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03)_0%,transparent_65%)]" />
    </div>
  );
}
