"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useId,
  useRef,
  useState,
  useSyncExternalStore,
  type CSSProperties,
  type ReactNode,
} from "react";
import { createPortal } from "react-dom";
import {
  CURRENCY_OPTIONS,
  CURRENCY_STORAGE_KEY,
  DEFAULT_CURRENCY,
  getCurrencyMeta,
  isCurrency,
  type Currency,
} from "@/app/lib/currency";

type CurrencyContextValue = {
  currency: Currency;
  setCurrency: (currency: Currency) => void;
};

const CurrencyContext = createContext<CurrencyContextValue | null>(null);

function readCurrency(): Currency {
  const stored = localStorage.getItem(CURRENCY_STORAGE_KEY);
  return stored && isCurrency(stored) ? stored : DEFAULT_CURRENCY;
}

function subscribe(onStoreChange: () => void) {
  window.addEventListener("storage", onStoreChange);
  window.addEventListener("youngmenu-currency-change", onStoreChange);

  return () => {
    window.removeEventListener("storage", onStoreChange);
    window.removeEventListener("youngmenu-currency-change", onStoreChange);
  };
}

function useStoredCurrency() {
  return useSyncExternalStore(subscribe, readCurrency, () => DEFAULT_CURRENCY);
}

export function CurrencyProvider({ children }: { children: ReactNode }) {
  const currency = useStoredCurrency();

  const setCurrency = useCallback((next: Currency) => {
    localStorage.setItem(CURRENCY_STORAGE_KEY, next);
    window.dispatchEvent(new Event("youngmenu-currency-change"));
  }, []);

  useEffect(() => {
    document.documentElement.dataset.currency = currency;
  }, [currency]);

  return (
    <CurrencyContext.Provider value={{ currency, setCurrency }}>
      {children}
    </CurrencyContext.Provider>
  );
}

function useCurrency() {
  const context = useContext(CurrencyContext);
  if (!context) {
    throw new Error("useCurrency must be used within CurrencyProvider");
  }
  return context;
}

function ChevronIcon({ open }: { open: boolean }) {
  return (
    <svg
      width="9"
      height="5"
      viewBox="0 0 9 5"
      fill="none"
      aria-hidden="true"
      className={`currency-dropdown__chevron ${open ? "is-open" : ""}`.trim()}
    >
      <path
        d="M1 1 4.5 4 8 1"
        stroke="currentColor"
        strokeWidth="1.35"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function GlobeIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 13 13" fill="none" aria-hidden="true">
      <circle cx="6.5" cy="6.5" r="4.85" stroke="currentColor" strokeWidth="1.05" />
      <path
        d="M1.65 6.5h9.7M6.5 1.65c1.35 1.5 2.05 3.15 2.05 4.85s-.7 3.35-2.05 4.85-2.05-3.15-2.05-4.85 0-3.35 2.05-4.85Z"
        stroke="currentColor"
        strokeWidth="1.05"
        strokeLinecap="round"
      />
    </svg>
  );
}

function CurrencyIcon({ icon }: { icon: "inr" | "globe" | "aed" }) {
  if (icon === "globe") {
    return (
      <span className="currency-dropdown__icon currency-dropdown__icon--globe">
        <GlobeIcon />
      </span>
    );
  }

  const emoji = icon === "inr" ? "🇮🇳" : "🇦🇪";

  return (
    <span className="currency-dropdown__icon currency-dropdown__icon--flag" aria-hidden="true">
      {emoji}
    </span>
  );
}

type MenuPosition = {
  top: number;
  left: number;
  minWidth: number;
};

type CurrencySelectorProps = {
  className?: string;
};

export function CurrencySelector({ className = "" }: CurrencySelectorProps) {
  const { currency, setCurrency } = useCurrency();
  const [open, setOpen] = useState(false);
  const [menuPosition, setMenuPosition] = useState<MenuPosition | null>(null);
  const rootRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const listboxId = useId();
  const active = getCurrencyMeta(currency);

  const updateMenuPosition = useCallback(() => {
    const trigger = triggerRef.current;
    if (!trigger) return;

    const rect = trigger.getBoundingClientRect();
    setMenuPosition({
      top: rect.bottom + 8,
      left: rect.right,
      minWidth: Math.max(rect.width, 132),
    });
  }, []);

  const toggleMenu = () => {
    if (open) {
      setOpen(false);
      return;
    }

    updateMenuPosition();
    setOpen(true);
  };

  useEffect(() => {
    if (!open) return;

    window.addEventListener("resize", updateMenuPosition);
    window.addEventListener("scroll", updateMenuPosition, true);

    return () => {
      window.removeEventListener("resize", updateMenuPosition);
      window.removeEventListener("scroll", updateMenuPosition, true);
    };
  }, [open, updateMenuPosition]);

  useEffect(() => {
    if (!open) return;

    const handlePointerDown = (event: MouseEvent) => {
      const target = event.target as Node;
      if (
        !rootRef.current?.contains(target) &&
        !(event.target as Element).closest?.(".currency-dropdown__menu")
      ) {
        setOpen(false);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("mousedown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [open]);

  const selectCurrency = (code: Currency) => {
    setCurrency(code);
    setOpen(false);
  };

  const menuStyle: CSSProperties | undefined = menuPosition
    ? {
        position: "fixed",
        top: menuPosition.top,
        left: menuPosition.left,
        transform: "translateX(-100%)",
        minWidth: menuPosition.minWidth,
      }
    : undefined;

  const menu =
    open && menuPosition && typeof document !== "undefined"
      ? createPortal(
          <ul
            id={listboxId}
            role="listbox"
            aria-label="Currency"
            style={menuStyle}
            className="currency-dropdown__menu"
          >
            {CURRENCY_OPTIONS.map((option) => {
              const selected = option.code === currency;

              return (
                <li key={option.code} role="presentation">
                  <button
                    type="button"
                    role="option"
                    aria-selected={selected}
                    className={`currency-dropdown__option ${selected ? "is-active" : ""}`.trim()}
                    onClick={() => selectCurrency(option.code)}
                  >
                    <CurrencyIcon icon={option.icon} />
                    <span className="currency-dropdown__option-label">{option.label}</span>
                  </button>
                </li>
              );
            })}
          </ul>,
          document.body,
        )
      : null;

  return (
    <div ref={rootRef} className={`currency-dropdown ${className}`.trim()}>
      <button
        ref={triggerRef}
        type="button"
        aria-expanded={open}
        aria-haspopup="listbox"
        aria-controls={open ? listboxId : undefined}
        className="currency-dropdown__trigger"
        onClick={toggleMenu}
      >
        <CurrencyIcon icon={active.icon} />
        <span className="currency-dropdown__code">{active.label}</span>
        <ChevronIcon open={open} />
      </button>
      {menu}
    </div>
  );
}
