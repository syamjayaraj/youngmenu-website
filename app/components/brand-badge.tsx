type BrandBadgeProps = {
  className?: string;
  tone?: "light" | "dark";
};

export function BrandBadge({
  className = "",
  tone = "light",
}: BrandBadgeProps) {
  const tones =
    tone === "light"
      ? "border-white/60 bg-black/28 text-white shadow-[0_18px_50px_rgba(0,0,0,0.25)]"
      : "border-[#2d1f18]/12 bg-white text-[#2d1f18] shadow-[0_18px_40px_rgba(45,31,24,0.1)]";

  return (
    <div
      className={`brand-seal inline-flex min-w-[118px] flex-col items-center justify-center border px-4 py-3 text-center backdrop-blur-sm ${tones} ${className}`}
    >
      <span className="font-display text-[1.55rem] leading-none tracking-[-0.06em]">
        YoungMenu
      </span>
      <span className="mt-1 text-[0.68rem] uppercase tracking-[0.28em] opacity-75">
        Manager
      </span>
    </div>
  );
}
