export type BillingPeriod = "monthly" | "yearly";

export type PricingPlan = {
  id: string;
  name: string;
  subtitle: string;
  tag: string | null;
  featured?: boolean;
  features: string[];
  cta: string;
  href: string;
  monthly: {
    displayPerMonth: string;
    billingLine: string;
  };
  yearly: {
    displayPerMonth: string;
    billingLine: string;
  };
  enterprise?: boolean;
};

export const lifetimeOffer = {
  badge: "Limited time offer",
  badgeDetail: "Only for first 100 restaurants",
  title: "Get Lifetime Access to YoungMenu",
  description:
    "Pay once, use forever. Includes all current features + future updates. No monthly fees. No hidden charges.",
  perks: "Free onboarding · Priority support · All Automated plan features included",
  price: "₹17,999",
  originalPrice: "₹49,999",
  href: "/contact",
  cta: "Claim lifetime deal",
};

export const pricingPlans: PricingPlan[] = [
  {
    id: "smart",
    name: "Smart",
    subtitle: "For small restaurants starting out",
    tag: null,
    monthly: {
      displayPerMonth: "₹200",
      billingLine: "Billed monthly",
    },
    yearly: {
      displayPerMonth: "₹166",
      billingLine: "Billed ₹1,990 yearly (Save 17%)",
    },
    features: [
      "Unlimited menu items",
      "Counter POS and billing",
      "Payment recording",
      "Manual WhatsApp payment receipts",
      "Kitchen display",
      "Basic reports",
    ],
    cta: "Get started",
    href: "/contact",
  },
  {
    id: "automated",
    name: "Automated",
    subtitle: "Complete automation suite",
    tag: "Best value",
    featured: true,
    monthly: {
      displayPerMonth: "₹501",
      billingLine: "Billed monthly",
    },
    yearly: {
      displayPerMonth: "₹416",
      billingLine: "Billed ₹4,990 yearly (Save 17%)",
    },
    features: [
      "Everything in Smart",
      "Automatic WhatsApp payment receipts",
      "Staff roles and permissions",
      "Advanced analytics and trends",
      "Dedicated relationship manager",
      "Advanced reports",
      "Priority support",
    ],
    cta: "Get started",
    href: "/contact",
  },
  {
    id: "enterprise",
    name: "Enterprise",
    subtitle: "For chains and franchises",
    tag: null,
    enterprise: true,
    monthly: {
      displayPerMonth: "Contact",
      billingLine: "Custom billing",
    },
    yearly: {
      displayPerMonth: "Contact",
      billingLine: "Custom billing",
    },
    features: [
      "Everything in Automated",
      "Multi-branch management",
      "Custom branding app",
      "Custom reports",
    ],
    cta: "Contact sales",
    href: "/contact",
  },
];
