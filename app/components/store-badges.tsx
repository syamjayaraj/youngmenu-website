import Image from "next/image";
import Link from "next/link";

const DEFAULT_APP_STORE_URL =
  "https://apps.apple.com/in/app/youngmenu-manager-pos/id6766444665";
const DEFAULT_PLAY_STORE_URL =
  "https://play.google.com/store/apps/details?id=com.youngmenu.manager";

const appStoreUrl =
  process.env.NEXT_PUBLIC_APP_STORE_URL ?? DEFAULT_APP_STORE_URL;
const playStoreUrl =
  process.env.NEXT_PUBLIC_PLAY_STORE_URL ?? DEFAULT_PLAY_STORE_URL;

export function StoreBadges({ className = "" }: { className?: string }) {
  return (
    <div className={`store-badges ${className}`.trim()}>
      <Link
        href={appStoreUrl}
        className="store-badge"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Download YoungMenu Manager on the App Store"
      >
        <Image
          src="/assets/badges/app-store-badge.svg"
          alt=""
          width={156}
          height={52}
          className="store-badge__img"
          aria-hidden
        />
      </Link>
      <Link
        href={playStoreUrl}
        className="store-badge"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Get YoungMenu Manager on Google Play"
      >
        <Image
          src="/assets/badges/google-play-badge.svg"
          alt=""
          width={156}
          height={52}
          className="store-badge__img"
          aria-hidden
        />
      </Link>
    </div>
  );
}
