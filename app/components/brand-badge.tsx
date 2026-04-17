import Image from "next/image";

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
      className={`brand-seal inline-flex items-center gap-2.5 border px-3.5 py-2 backdrop-blur-sm ${tones} ${className}`}
    >
      <Image
        src="/assets/logo/logo.png"
        alt="YoungMenu Logo"
        width={34}
        height={34}
        className="object-contain rounded-full"
      />
      <span className="font-display text-[1.4rem] leading-none tracking-[-0.04em] pr-1">
        YoungMenu
      </span>
    </div>
  );
}
