"use client";

import { useState } from "react";

type Category = "all" | "shop" | "food" | "pay" | "grow";

interface ServiceItem {
  id: string;
  category: "shop" | "food" | "pay" | "grow";
  categoryLabel: string;
  title: string;
  bullets: string[];
}

const serviceItems: ServiceItem[] = [
  // shop
  {
    id: "shop-1",
    category: "shop",
    categoryLabel: "Selling products",
    title: "Online shop & variants",
    bullets: [
      "Sizes, flavours, colours, add-on extras",
      "Stock tracked per variant",
      "Phone-friendly product pages",
    ],
  },
  {
    id: "shop-2",
    category: "shop",
    categoryLabel: "Selling products",
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
    categoryLabel: "Selling products",
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
    categoryLabel: "Selling products",
    title: "Digital downloads & bundles",
    bullets: [
      "Secure download links after payment",
      "Gift boxes and mystery bundles",
      '"Buy more, save more" basket discounts',
    ],
  },
  // food
  {
    id: "food-1",
    category: "food",
    categoryLabel: "Food & takeaway",
    title: "Online ordering menu",
    bullets: [
      "Allergen and dietary badges with filters",
      'Opening hours with "order for tomorrow"',
      "Menu import from a photo of your paper menu",
    ],
  },
  {
    id: "food-2",
    category: "food",
    categoryLabel: "Food & takeaway",
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
    categoryLabel: "Food & takeaway",
    title: "Kitchen dockets",
    bullets: [
      "Clean, printable order slips",
      "Notes and allergies highlighted",
      "Status: preparing, out for delivery, ready",
    ],
  },
  // pay
  {
    id: "pay-1",
    category: "pay",
    categoryLabel: "Payments & POS",
    title: "Fast checkout",
    bullets: [
      "Apple Pay, Google Pay and cards via Stripe",
      "Money goes straight to your own account",
      "GBP, EUR or USD",
    ],
  },
  {
    id: "pay-2",
    category: "pay",
    categoryLabel: "Payments & POS",
    title: "In-person payments",
    bullets: [
      "Phone or tablet as a payment terminal",
      "QR pay codes and email receipts",
      "Cash-on-collection switch",
    ],
  },
  // grow
  {
    id: "grow-1",
    category: "grow",
    categoryLabel: "Marketing & admin",
    title: "Reviews & loyalty",
    bullets: [
      "Automatic Google review requests",
      "Digital stamp cards",
      "Discount codes and gift vouchers",
    ],
  },
  {
    id: "grow-2",
    category: "grow",
    categoryLabel: "Marketing & admin",
    title: "Bookkeeping exports",
    bullets: [
      "Sales CSVs for Xero, QuickBooks, Excel",
      "UK VAT breakdowns",
      "Any date range",
    ],
  },
  {
    id: "grow-3",
    category: "grow",
    categoryLabel: "Marketing & admin",
    title: "Embed on your current site",
    bullets: [
      "Add a shop or menu widget",
      "Works with WordPress, Wix, Squarespace, Webflow",
      "Keep the site you already have",
    ],
  },
];

const tabs: { key: Category; label: string }[] = [
  { key: "all", label: "All" },
  { key: "shop", label: "Selling products" },
  { key: "food", label: "Food & takeaway" },
  { key: "pay", label: "Payments & POS" },
  { key: "grow", label: "Marketing & admin" },
];

export default function Services() {
  const [activeCategory, setActiveCategory] = useState<Category>("all");

  const filteredItems =
    activeCategory === "all"
      ? serviceItems
      : serviceItems.filter((item) => item.category === activeCategory);

  return (
    <section id="services" className="bg-white border-y border-[#e7e2d8] py-20 md:py-24">
      <div className="max-w-[1120px] mx-auto px-5">
        <span className="inline-block text-xs font-semibold tracking-wider uppercase text-[#e8572a] mb-3">
          Services
        </span>
        <h2 className="font-serif text-[clamp(1.7rem,3.5vw,2.6rem)] font-bold text-[#14161c] mb-3 leading-tight">
          Everything I can build into your site
        </h2>
        <p className="text-[#4a4f5c] text-[1.05rem] max-w-[620px] leading-relaxed mb-8">
          Choose a category to see the features. Mix and match: you only pay for
          what your business uses.
        </p>

        {/* Filter buttons */}
        <div
          className="flex flex-wrap gap-2 mb-10"
          role="group"
          aria-label="Filter services"
        >
          {tabs.map((tab) => {
            const isActive = activeCategory === tab.key;
            return (
              <button
                key={tab.key}
                type="button"
                onClick={() => setActiveCategory(tab.key)}
                aria-pressed={isActive}
                className={`font-sans font-medium text-[0.92rem] px-4 py-2 rounded-full border transition cursor-pointer ${
                  isActive
                    ? "bg-[#1b2a3a] text-white border-[#1b2a3a] shadow-xs"
                    : "bg-[#faf8f4] text-[#14161c] border-[#e7e2d8] hover:border-[#1b2a3a]/40"
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredItems.map((svc) => (
            <article
              key={svc.id}
              className="border border-[#e7e2d8] rounded-[14px] p-6 bg-[#faf8f4] hover:border-[#e8572a]/30 transition hover:shadow-xs flex flex-col justify-between"
            >
              <div>
                <span className="text-[0.75rem] font-semibold text-[#e8572a] uppercase tracking-wide">
                  {svc.categoryLabel}
                </span>
                <h3 className="font-serif text-lg font-bold text-[#14161c] mt-1.5 mb-3">
                  {svc.title}
                </h3>
                <ul className="m-0 pl-4 space-y-1.5 text-[#4a4f5c] text-[0.92rem] list-disc">
                  {svc.bullets.map((bullet, idx) => (
                    <li key={idx} className="leading-snug">
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
