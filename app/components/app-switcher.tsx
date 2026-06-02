"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { APP_MODE_PATH, parseAppModeFromPath, type AppMode } from "@/app/lib/app-mode";
import { YOUNGMENU_USER_APP_COMING_SOON } from "@/app/lib/product-status";

const options: { mode: AppMode; label: string; shortLabel: string }[] = [
  { mode: "manager", label: "YoungMenu Manager", shortLabel: "Manager" },
  { mode: "users", label: "YoungMenu", shortLabel: "YoungMenu" },
];

type AppSwitcherProps = {
  variant?: "header" | "hero";
  className?: string;
};

export function AppSwitcher({ variant = "header", className = "" }: AppSwitcherProps) {
  const pathname = usePathname();
  const mode = parseAppModeFromPath(pathname ?? "");

  return (
    <div
      role="tablist"
      aria-label="Choose app"
      className={`app-switcher app-switcher--${variant} ${className}`.trim()}
    >
      {options.map((option) => {
        const selected = mode !== null && mode === option.mode;
        const tabClassName = `app-switcher__tab ${selected ? "is-active" : ""} ${
          option.mode === "users" && YOUNGMENU_USER_APP_COMING_SOON
            ? "app-switcher__tab--soon"
            : ""
        }`.trim();

        if (option.mode === "users" && YOUNGMENU_USER_APP_COMING_SOON) {
          return (
            <span
              key={option.mode}
              role="tab"
              aria-selected={false}
              aria-disabled="true"
              className={tabClassName}
              title="Coming soon"
            >
              <span className="app-switcher__label-full">{option.shortLabel}</span>
              <span className="app-switcher__label-short">{option.shortLabel}</span>
            </span>
          );
        }

        return (
          <Link
            key={option.mode}
            href={APP_MODE_PATH[option.mode]}
            role="tab"
            aria-selected={selected}
            className={tabClassName}
          >
            <span className="app-switcher__label-full">{option.label}</span>
            <span className="app-switcher__label-short">{option.shortLabel}</span>
          </Link>
        );
      })}
    </div>
  );
}
