import Image from "next/image";

type BrandBadgeProps = {
  className?: string;
  tone?: "light" | "dark";
};

export function BrandBadge({
  className = "",
  tone = "light",
}: BrandBadgeProps) {
  const tones = tone === "light" ? "text-white" : "text-[#2d1f18]";

  return (
    <div
      className={`inline-flex items-center gap-2.5 pl-1 ${tones} ${className}`}
    >
      <Image
        src="/assets/logo/logo.png"
        alt="YoungMenu Logo"
        width={32}
        height={32}
        className="object-contain rounded-full"
      />
      <span className="font-display text-[1.4rem] leading-none tracking-[-0.04em] pr-1">
        YoungMenu
      </span>
    </div>
  );
}
