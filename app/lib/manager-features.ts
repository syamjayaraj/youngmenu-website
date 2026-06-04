export type KeyFeature = {
  icon: string;
  title: string;
  desc: string;
};

export type DeepFeature = {
  kicker: string;
  title: string;
  description: string;
  points: string[];
  image: string;
  alt: string;
  reverse?: boolean;
};

export const keyFeatures: KeyFeature[] = [
  {
    icon: "◈",
    title: "Smart Dashboard",
    desc: "Real-time overview of orders, sales, menu, and kitchen queue — all on one screen.",
  },
  {
    icon: "◎",
    title: "Menu Management",
    desc: "Categories, modifiers, pricing, and availability in one catalogue.",
  },
  {
    icon: "₹",
    title: "Payments & Billing",
    desc: "Counter payments, track dues, generate receipts, and share via WhatsApp.",
  },
  {
    icon: "✦",
    title: "Counter POS",
    desc: "Fast walk-in ordering built for busy restaurant and cafe hours.",
  },
  {
    icon: "▤",
    title: "Kitchen Display",
    desc: "Live order queue so the kitchen stays aligned with the front counter.",
  },
  {
    icon: "☰",
    title: "Reports & Oversight",
    desc: "Owner-ready reports for sales, orders, and daily operations.",
  },
];

export const deepFeatures: DeepFeature[] = [
  {
    kicker: "Dashboard",
    title: "Start every day with a clear business overview.",
    description:
      "Greet staff with today’s sales, live orders, and menu status. Switch between day, week, or month views, then jump straight into common counter tasks from shortcuts.",
    points: [
      "Sales, orders, and kitchen queue at a glance",
      "Quick actions: new order, menu update, reports",
      "Today’s activity and recent walk-ins",
      "Works on phone and tablet at the counter",
    ],
    image: "/assets/app-ss-all.png",
    alt: "YoungMenu Manager dashboard on multiple devices",
  },
  {
    kicker: "Counter POS",
    title: "Record walk-in orders without slowing the queue.",
    description:
      "Counter staff search the menu, build the cart, and complete payment in a guided flow built for busy service hours.",
    points: [
      "Menu search with categories and modifiers",
      "Orders flow to kitchen display instantly",
      "Cart with cash, UPI, and card payments",
      "Confirm and print receipts from the counter",
    ],
    image: "/assets/youngmenu-ss-phone-tab.png",
    alt: "YoungMenu Manager Counter POS on tablet and phone",
    reverse: true,
  },
  {
    kicker: "Menu",
    title: "Browse and update your menu with confidence.",
    description:
      "Search the full menu catalogue by item or category. Filter by availability, modifiers, and specials so counter staff find the right dish quickly.",
    points: [
      "Item and category search across the menu",
      "Modifiers and pricing on every card",
      "Availability toggles for sold-out items",
      "Add selections to cart in one tap",
    ],
    image: "/assets/app-ss.png",
    alt: "YoungMenu Manager menu catalogue",
  },
  {
    kicker: "Orders",
    title: "Review every transaction in one list.",
    description:
      "See counter orders, online requests, and status in separate views. Search by customer or receipt, filter by date, and confirm what was collected at the desk.",
    points: [
      "Counter, takeaway, and delivery order views",
      "Search and date or status filters",
      "Payment method and receipt IDs per order",
      "Confirmed totals with item breakdown",
    ],
    image: "/assets/app-ss.png",
    alt: "YoungMenu Manager orders list",
    reverse: true,
  },
  {
    kicker: "Expenses",
    title: "Track spending alongside daily sales.",
    description:
      "Log utilities, supplies, salaries, and other costs with categories and dates so owners see how the business is performing beyond counter collections.",
    points: [
      "Add expenses with category and vendor notes",
      "Running total and entry count at a glance",
      "Cash and other payment methods recorded",
      "Simple list built for monthly reconciliation",
    ],
    image: "/assets/app-ss-all.png",
    alt: "YoungMenu Manager expense tracking",
    reverse: true,
  },
  {
    kicker: "Administration",
    title: "Manage business data from one settings hub.",
    description:
      "Owners and managers maintain menus, staff roles, outlet profile, and reports without leaving the app — built for calm oversight during busy service.",
    points: [
      "Menu and modifier catalogue management",
      "Staff roles, permissions, and devices",
      "Business profile and operating hours",
      "Reports and exports for owners",
    ],
    image: "/assets/youngmenu-ss-phone-tab.png",
    alt: "YoungMenu Manager settings and administration",
  },
];
