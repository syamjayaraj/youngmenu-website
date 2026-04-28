"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

type NavItem = { href: string; label: string };

export function MobileNav({ items }: { items: NavItem[] }) {
  const [openPath, setOpenPath] = useState<string | null>(null);
  const pathname = usePathname();
  const open = openPath === pathname;

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <button
        onClick={() =>
          setOpenPath((prev) => (prev === pathname ? null : pathname))
        }
        className="flex h-9 w-9 items-center justify-center rounded-full border border-[#362216]/15 text-[#4f3a2e] transition hover:bg-[#2d1f18]/6 hover:text-[#2d1f18] md:hidden"
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
      >
        {open ? (
          <svg
            width="13"
            height="13"
            viewBox="0 0 13 13"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M1 1l11 11M12 1L1 12"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
            />
          </svg>
        ) : (
          <svg
            width="16"
            height="11"
            viewBox="0 0 16 11"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M0 1h16M0 5.5h16M0 10h16"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
        )}
      </button>

      {open && (
        <nav
          aria-label="Mobile navigation"
          className="absolute inset-x-3 top-full mt-2 rounded-[1.5rem] border border-[#362216]/10 bg-[#fffaf4f7] p-3 shadow-[0_24px_60px_rgba(45,31,24,0.16)] backdrop-blur-xl"
        >
          <ul className="flex flex-col gap-0.5">
            {items.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setOpenPath(null)}
                  className="block rounded-xl px-4 py-3 text-sm font-semibold uppercase tracking-[0.22em] text-[#5f4a3d] transition hover:bg-[#2d1f18]/6 hover:text-[#2d1f18]"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </>
  );
}
