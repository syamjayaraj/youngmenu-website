export const CURRENCIES = ["INR", "USD", "AED"] as const;

export type Currency = (typeof CURRENCIES)[number];

export const CURRENCY_STORAGE_KEY = "youngmenu-currency";

export const DEFAULT_CURRENCY: Currency = "INR";

export type CurrencyMeta = {
  code: Currency;
  label: string;
  icon: "inr" | "globe" | "aed";
};

export const CURRENCY_OPTIONS: CurrencyMeta[] = [
  { code: "INR", label: "INR", icon: "inr" },
  { code: "USD", label: "USD", icon: "globe" },
  { code: "AED", label: "AED", icon: "aed" },
];

export function isCurrency(value: string): value is Currency {
  return (CURRENCIES as readonly string[]).includes(value);
}

export function getCurrencyMeta(code: Currency): CurrencyMeta {
  return CURRENCY_OPTIONS.find((option) => option.code === code) ?? CURRENCY_OPTIONS[0];
}
