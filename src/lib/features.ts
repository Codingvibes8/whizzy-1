export type FeatureCategory =
  | "food"
  | "bookings"
  | "shop"
  | "payments"
  | "marketing";

export interface FeatureItem {
  id: string;
  category: FeatureCategory;
  title: string;
  bullets: string[];
  /** Short pitch used on the homepage highlight reel. */
  highlight?: string;
}

export interface FeatureCategoryMeta {
  key: FeatureCategory;
  label: string;
  description: string;
}

export const FEATURE_CATEGORIES: FeatureCategoryMeta[] = [
  {
    key: "food",
    label: "Food & takeaway",
    description:
      "Menus, delivery zones, table ordering and the kitchen workflow behind them.",
  },
  {
    key: "bookings",
    label: "Bookings & appointments",
    description:
      "Live calendars, deposits and reminders for salons, studios and tables.",
  },
  {
    key: "shop",
    label: "Selling products",
    description:
      "Variants, stock, click & collect and private trade pricing.",
  },
  {
    key: "payments",
    label: "Payments & POS",
    description:
      "Card, Apple Pay and in-person payments straight into your own account.",
  },
  {
    key: "marketing",
    label: "Marketing & admin",
    description:
      "Reviews, loyalty, bookkeeping exports and embeds for the site you already have.",
  },
];

export const FEATURES: FeatureItem[] = [
  // Food & takeaway
  {
    id: "food-1",
    category: "food",
    title: "Online ordering menu",
    highlight:
      "A menu that behaves like your counter: allergens flagged, opening hours live and orders queued for tomorrow.",
    bullets: [
      "Allergen and dietary badges with filters",
      'Opening hours with "order for tomorrow"',
      "Menu import from a photo of your paper menu",
    ],
  },
  {
    id: "food-2",
    category: "food",
    title: "Delivery zones & table QR",
    bullets: [
      "Delivery radius or postcode list",
      "Distance-based delivery fees",
      "Per-table QR codes, order and pay at the table",
    ],
  },
  {
    id: "food-3",
    category: "food",
    title: "Kitchen dockets",
    bullets: [
      "Clean, printable order slips",
      "Notes and allergies highlighted",
      "Status: preparing, out for delivery, ready",
    ],
  },

  // Bookings & appointments
  {
    id: "book-1",
    category: "bookings",
    title: "Online booking calendar",
    highlight:
      "Let customers book themselves — real availability, the right staff member and a deposit that stops no-shows.",
    bullets: [
      "Live availability with buffers between appointments",
      "Choose a service and staff member",
      "Self-serve reschedule and cancel links",
    ],
  },
  {
    id: "book-2",
    category: "bookings",
    title: "Deposits & no-show protection",
    bullets: [
      "Card deposits or full prepayment via Stripe",
      "Automatic SMS and WhatsApp reminders",
      "Your cancellation policy shown at checkout",
    ],
  },
  {
    id: "book-3",
    category: "bookings",
    title: "Team rotas & calendar sync",
    bullets: [
      "Individual hours, services and days off per staff member",
      "Rooms, chairs or tables reserved per booking",
      "Two-way Google and iCal sync",
    ],
  },

  // Selling products
  {
    id: "shop-1",
    category: "shop",
    title: "Online shop & variants",
    highlight:
      "Sizes, flavours and stock handled properly, with click & collect that doesn't need another monthly plugin.",
    bullets: [
      "Sizes, flavours, colours, add-on extras",
      "Stock tracked per variant",
      "Phone-friendly product pages",
    ],
  },
  {
    id: "shop-2",
    category: "shop",
    title: "Delivery & click & collect",
    bullets: [
      "Flat-rate and free-over-£X postage",
      "Pickup day and time slots at checkout",
      "Printable labels and packing slips",
    ],
  },
  {
    id: "shop-3",
    category: "shop",
    title: "Trade pricing & pre-orders",
    bullets: [
      "Passcode-unlocked wholesale prices",
      "Minimum order quantities",
      "Pre-order drops with caps and countdowns",
    ],
  },
  {
    id: "shop-4",
    category: "shop",
    title: "Digital downloads & bundles",
    bullets: [
      "Secure download links after payment",
      "Gift boxes and mystery bundles",
      '"Buy more, save more" basket discounts',
    ],
  },

  // Payments & POS
  {
    id: "pay-1",
    category: "payments",
    title: "Fast checkout",
    highlight:
      "Apple Pay, Google Pay and cards straight into your own account. No commission on a single sale.",
    bullets: [
      "Apple Pay, Google Pay and cards via Stripe",
      "Money goes straight to your own account",
      "GBP, EUR or USD",
    ],
  },
  {
    id: "pay-2",
    category: "payments",
    title: "In-person payments",
    bullets: [
      "Phone or tablet as a payment terminal",
      "QR pay codes and email receipts",
      "Cash-on-collection switch",
    ],
  },
  {
    id: "pay-3",
    category: "payments",
    title: "Tips, refunds & receipts",
    bullets: [
      "Optional tips at checkout or at the table",
      "Full and partial refunds from one dashboard",
      "Automatic email receipts",
    ],
  },

  // Marketing & admin
  {
    id: "grow-1",
    category: "marketing",
    title: "Reviews & loyalty",
    highlight:
      "Turn one-off orders into regulars with automatic review requests and a digital stamp card.",
    bullets: [
      "Automatic Google review requests",
      "Digital stamp cards",
      "Discount codes and gift vouchers",
    ],
  },
  {
    id: "grow-2",
    category: "marketing",
    title: "Bookkeeping exports",
    bullets: [
      "Sales CSVs for Xero, QuickBooks, Excel",
      "UK VAT breakdowns",
      "Any date range",
    ],
  },
  {
    id: "grow-3",
    category: "marketing",
    title: "Embed on your current site",
    bullets: [
      "Add a shop or menu widget",
      "Works with WordPress, Wix, Squarespace, Webflow",
      "Keep the site you already have",
    ],
  },
];

/** Feature ids that make up the trimmed homepage highlight reel. */
export const HIGHLIGHT_IDS = ["food-1", "book-1", "shop-1", "pay-1"] as const;

export const HIGHLIGHT_FEATURES: FeatureItem[] = HIGHLIGHT_IDS.map((id) => {
  const feature = FEATURES.find((item) => item.id === id);
  if (!feature) {
    throw new Error(`Unknown highlight feature: ${id}`);
  }
  return feature;
});
