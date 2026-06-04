import Image, { type ImageProps } from "next/image";
import { getCmsUrl } from "@/app/lib/cms";

function isCmsAsset(src: string): boolean {
  try {
    const cms = new URL(getCmsUrl());
    const target = new URL(src, cms.origin);
    return target.origin === cms.origin;
  } catch {
    return false;
  }
}

/** Next/Image for Strapi media — skips optimizer for CMS host (reliable in local dev). */
export function CmsImage(props: ImageProps) {
  const src = typeof props.src === "string" ? props.src : "";

  return (
    <Image
      {...props}
      unoptimized={src ? isCmsAsset(src) : props.unoptimized}
    />
  );
}
