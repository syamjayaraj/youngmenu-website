import Link from "next/link";
import type { ReactNode } from "react";

export function TextLinkArrow({
  href,
  children,
}: {
  href: string;
  children: ReactNode;
}) {
  return (
    <Link href={href} className="text-link-arrow">
      {children}
      <span aria-hidden="true">→</span>
    </Link>
  );
}
