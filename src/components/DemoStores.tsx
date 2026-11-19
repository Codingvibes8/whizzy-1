"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ExternalLink,
  Utensils,
  Calendar,
  ShoppingBag,
  Check,
  ArrowRight,
  Sparkles,
  Eye,
  Info,
} from "lucide-react";

/**
 * =========================================================================
 * DEMO STORES CONFIGURATION
 * -------------------------------------------------------------------------
 * Each card below points at a live demo deployment on Vercel. To swap or
 * add a demo, update `demoUrl` (and optionally `quickLinks`, `storeName`,
 * `stats`, `keyFeatures` and `mockupData`) in the matching entry.
 * =========================================================================
 */
export interface DemoStoreItem {
  id: string;
  order: number;
  serviceNumber: 1 | 2 | 3; // Which of the three services this demo showcases
  serviceCategory: "orders" | "bookings" | "products";
  serviceTitle: string; // Ordered: 1. Take orders online, 2. Accept bookings, 3. Sell products
  storeName: string;
  tagline: string;
  description: string;
  mockDomain: string;
  demoUrl: string; // Live demo deployment URL
  isLive: boolean; // True when `demoUrl` points at a working demo
  quickLinks?: { label: string; href: string }[]; // Deep links inside a live demo
  badge: string;
  icon: typeof Utensils;
  stats: { label: string; value: string }[];
  keyFeatures: string[];
  mockupData: {
    accentColor: string;
    pillText: string;
    title: string;
    subtitle: string;
    previewBadge: string;
    sampleItems: { name: string; price: string; extra?: string }[];
  };
}

export const DEMO_STORES: DemoStoreItem[] = [
  // TAKE ORDERS ONLINE — food ordering (pizza)
  {
    id: "demo-orders",
    order: 1,
    serviceNumber: 1,
    serviceCategory: "orders",
    serviceTitle: "Take orders online",
    storeName: "Vibes Pizza — Marylebone",
    tagline: "Wood-fired pizzeria with click & collect, delivery & table ordering",
    description:
      "A complete direct-ordering storefront for a 500°C sourdough pizzeria. A 22-dish menu with dietary badges, delivery and collection modes across four London sites, basket checkout, live order tracking, a kitchen display and an admin dashboard — all with zero commission on sales.",
    mockDomain: "pizz-sigma.vercel.app",
    demoUrl: "https://pizz-sigma.vercel.app/",
    isLive: true,
    quickLinks: [
      { label: "Menu", href: "https://pizz-sigma.vercel.app/menu" },
      { label: "Reservations", href: "https://pizz-sigma.vercel.app/reservations" },
      { label: "Live tracker", href: "https://pizz-sigma.vercel.app/orders/VP-9482" },
      { label: "Kitchen", href: "https://pizz-sigma.vercel.app/kitchen" },
      { label: "Admin", href: "https://pizz-sigma.vercel.app/admin" },
    ],
    badge: "Food & Hospitality",
    icon: Utensils,
    stats: [
      { label: "Commission fee", value: "0%" },
      { label: "Menu dishes", value: "22" },
      { label: "Oven temp", value: "500°C" },
    ],
    keyFeatures: [
      "72-hour sourdough menu with dietary & allergen badges",
      "Delivery, click & collect and dine-in table ordering",
      "Basket checkout plus live order status tracker",
      "Kitchen display (/kitchen) and owner admin dashboard",
    ],
    mockupData: {
      accentColor: "#e8572a",
      pillText: "🍕 Food & Takeaway Demo",
      title: "Vibes Pizza — Marylebone",
      subtitle: "Open daily 12:00 – 23:00 • 20 min avg. prep",
      previewBadge: "Zero-Commission Ordering",
      sampleItems: [
        { name: 'Smoked Pepperoni & Hot Honey (14")', price: "£22.00", extra: "Hot honey drizzle" },
        { name: 'All-Nighter Vodka Sauce & Buffalo (14")', price: "£19.50", extra: "Campania buffalo mozzarella" },
        { name: 'Truffle Wild Mushroom & Taleggio (14")', price: "£24.00", extra: "Wood-roasted forest mushrooms" },
      ],
    },
  },

  // ACCEPT BOOKINGS — table reservations & kitchen ops
  {
    id: "demo-bookings",
    order: 3,
    serviceNumber: 2,
    serviceCategory: "bookings",
    serviceTitle: "Accept bookings",
    storeName: "Saffron & Ember — Soho & NW2",
    tagline: "Table reservations, private dining & live kitchen operations",
    description:
      "A modern Indian kitchen demo covering the full booking journey: date, time and party-size reservations for the Soho dining room, private-dining enquiries, plus live order tracking, a tandoor kitchen display and an admin command centre.",
    mockDomain: "saffron-sooty-phi.vercel.app",
    demoUrl: "https://saffron-sooty-phi.vercel.app/",
    isLive: true,
    quickLinks: [
      { label: "Reservations", href: "https://saffron-sooty-phi.vercel.app/reservations" },
      { label: "Menu", href: "https://saffron-sooty-phi.vercel.app/menu" },
      { label: "Order tracker", href: "https://saffron-sooty-phi.vercel.app/orders/SE-8492" },
      { label: "Kitchen KDS", href: "https://saffron-sooty-phi.vercel.app/kitchen" },
      { label: "Admin", href: "https://saffron-sooty-phi.vercel.app/admin" },
    ],
    badge: "Dining & Reservations",
    icon: Calendar,
    stats: [
      { label: "Table bookings", value: "Live" },
      { label: "Private dining", value: "16 guests" },
      { label: "Kitchen sync", value: "Live KDS" },
    ],
    keyFeatures: [
      "Date, time and party-size table reservation flow",
      "Private dining & group enquiries for up to 16 guests",
      "Live order tracker with tandoor kitchen display (/kitchen)",
      "Admin portal for orders, bookings and menu stock (/admin)",
    ],
    mockupData: {
      accentColor: "#1b2a3a",
      pillText: "📅 Reservation & Ordering Demo",
      title: "Saffron & Ember",
      subtitle: "Soho W1 & NW2 • Book a table in three taps",
      previewBadge: "Live Calendar & Kitchen Sync",
      sampleItems: [
        { name: "Old Delhi Smoked Butter Chicken", price: "£19.95", extra: "24-hour marinade • Medium" },
        { name: "Awadhi Saffron Lamb Dum Biryani", price: "£22.50", extra: "Aged basmati • Halal" },
        { name: "Emperor's Grand Tandoor Feast (For 2)", price: "£58.00", extra: "Chef's signature sharing platter" },
      ],
    },
  },

  // TAKE ORDERS ONLINE — food ordering (Cantonese)
  {
    id: "demo-orders-dragon",
    order: 2,
    serviceNumber: 1,
    serviceCategory: "orders",
    serviceTitle: "Take orders online",
    storeName: "Golden Dragon — Soho",
    tagline: "Cantonese institution taking direct orders and table bookings",
    description:
      "A heritage restaurant storefront taking orders direct: Peking duck, dim sum and wok dishes with a live order basket, collection or local delivery, and table reservations — no marketplace commission or aggregator fees.",
    mockDomain: "golden-dragon888.vercel.app",
    demoUrl: "https://golden-dragon888.vercel.app/",
    isLive: true,
    quickLinks: [
      { label: "Menu & order", href: "https://golden-dragon888.vercel.app/#menu" },
      { label: "Gallery", href: "https://golden-dragon888.vercel.app/#gallery" },
      { label: "Reservations", href: "https://golden-dragon888.vercel.app/#reserve" },
    ],
    badge: "Food & Hospitality",
    icon: Utensils,
    stats: [
      { label: "Commission fee", value: "0%" },
      { label: "Prep time", value: "20–25 min" },
      { label: "Trading since", value: "1988" },
    ],
    keyFeatures: [
      "Full à la carte catalogue with add-to-order basket",
      "Direct checkout for collection or local delivery",
      "Table reservations & private dining requests online",
      "Menu, story and gallery sections built mobile-first",
    ],
    mockupData: {
      accentColor: "#d97706",
      pillText: "🥡 Direct Ordering Demo",
      title: "Golden Dragon 金龙",
      subtitle: "42 Gerrard St, Soho • Free collection",
      previewBadge: "Basket, Checkout & Collection",
      sampleItems: [
        { name: "Roast Peking Duck", price: "£46.00", extra: "24-hour dried • carved tableside" },
        { name: "Har Gow & Siu Mai Platter", price: "£6.50", extra: "Dim sum trolley 12–4pm" },
        { name: "Char Siu Pork", price: "£15.00", extra: "Honey-glazed • roast oven" },
      ],
    },
  },

  // SELL PRODUCTS — retail catalogue
  {
    id: "demo-products",
    order: 4,
    serviceNumber: 3,
    serviceCategory: "products",
    serviceTitle: "Sell products",
    storeName: "Stride & Style",
    tagline: "Premium shoes & menswear with size and colour variants",
    description:
      "A variant-rich retail storefront for premium footwear and menswear: category, sale and newest filters, size and colour pickers per product, a persistent cart and customer accounts — built to handle a real product catalogue.",
    mockDomain: "stride-styles.vercel.app",
    demoUrl: "https://stride-styles.vercel.app/",
    isLive: true,
    quickLinks: [
      { label: "Shop all", href: "https://stride-styles.vercel.app/products" },
      { label: "Shoes", href: "https://stride-styles.vercel.app/products?category=shoes" },
      { label: "Clothing", href: "https://stride-styles.vercel.app/products?category=clothing" },
      { label: "Sale", href: "https://stride-styles.vercel.app/products?sale=true" },
      { label: "Cart", href: "https://stride-styles.vercel.app/cart" },
    ],
    badge: "Retail & Makers",
    icon: ShoppingBag,
    stats: [
      { label: "Catalogue", value: "Shoes + Apparel" },
      { label: "Variants", value: "Size & colour" },
      { label: "Accounts", value: "Sign-in" },
    ],
    keyFeatures: [
      "Category, sale and newest filters across the catalogue",
      "Size and colour variant pickers per product",
      "Persistent cart with customer account sign-in",
      "Promotional home page with featured products & categories",
    ],
    mockupData: {
      accentColor: "#1b2a3a",
      pillText: "🛍️ Online Shop Demo",
      title: "Stride & Style",
      subtitle: "Premium shoes & menswear • New arrivals weekly",
      previewBadge: "Variant-Rich Catalogue",
      sampleItems: [
        { name: "Nike Air Max 270", price: "$129.99", extra: "Sizes 7–10 • shoes" },
        { name: "Adidas Ultraboost 22", price: "$189.99", extra: "Boost midsole • shoes" },
        { name: "Levi's 501 Original Jeans", price: "$89.99", extra: "Sizes 30–36 • clothing" },
      ],
    },
  },

  // SELL PRODUCTS — footwear catalogue
  {
    id: "demo-products-flexshoes",
    order: 5,
    serviceNumber: 3,
    serviceCategory: "products",
    serviceTitle: "Sell products",
    storeName: "FlexShoes",
    tagline: "Premium footwear hall spanning sneakers, running, boots and formal",
    description:
      "A footwear-first retail storefront for a multi-brand shoe shop: six curated categories from sneakers and running to boots and formal, quick-add from the grid, full product pages, a sale section and a home page built around featured pairs.",
    mockDomain: "flexshoes.vercel.app",
    demoUrl: "https://flexshoes.vercel.app/",
    isLive: true,
    quickLinks: [
      { label: "Shop all", href: "https://flexshoes.vercel.app/products" },
      { label: "Sneakers", href: "https://flexshoes.vercel.app/products?category=sneakers" },
      { label: "Running", href: "https://flexshoes.vercel.app/products?category=running" },
      { label: "Formal", href: "https://flexshoes.vercel.app/products?category=formal" },
      { label: "Sale", href: "https://flexshoes.vercel.app/sale" },
    ],
    badge: "Retail & Footwear",
    icon: ShoppingBag,
    stats: [
      { label: "Catalogue", value: "6 categories" },
      { label: "Brands", value: "Nike · Adidas" },
      { label: "Quick add", value: "1 tap" },
    ],
    keyFeatures: [
      "Category browsing across sneakers, running, boots, formal, sandals & casual",
      "Quick Add straight from the product grid and load-more catalogue",
      "Individual product pages with brand, imagery and pricing",
      "Dedicated sale section plus featured products on the home page",
    ],
    mockupData: {
      accentColor: "#0f172a",
      pillText: "👟 Footwear Shop Demo",
      title: "FlexShoes",
      subtitle: "Step into excellence • Premium footwear collection",
      previewBadge: "Multi-Brand Footwear Catalogue",
      sampleItems: [
        { name: "Nike Air Max 270 Men's", price: "$149.99", extra: "Nike • sneakers" },
        { name: "New Balance FuelCell Rebel v4", price: "$159.99", extra: "New Balance • running" },
        { name: "Red Wing Iron Ranger Boot", price: "$349.99", extra: "Red Wing • boots" },
      ],
    },
  },
];

export default function DemoStores() {
  const [activeTab, setActiveTab] = useState<"all" | "orders" | "bookings" | "products">("all");
  const [previewModalStore, setPreviewModalStore] = useState<DemoStoreItem | null>(null);

  const displayedDemos = (
    activeTab === "all"
      ? DEMO_STORES
      : DEMO_STORES.filter((store) => store.serviceCategory === activeTab)
  )
    .slice()
    .sort((a, b) => a.serviceNumber - b.serviceNumber || a.order - b.order);

  return (
    <section id="demos" className="py-20 md:py-28 bg-[#faf8f4] border-t border-[#e7e2d8] relative">
      <div className="max-w-[1120px] mx-auto px-5">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-[680px]">
            <span className="inline-block text-xs font-semibold tracking-wider uppercase text-[#e8572a] mb-3">
              Interactive Demo Stores
            </span>
            <h2 className="font-serif text-[clamp(1.8rem,3.8vw,2.75rem)] font-bold text-[#14161c] leading-[1.15] mb-4">
              See exactly what your customers experience.
            </h2>
            <p className="text-[#4a4f5c] text-[1.05rem] leading-relaxed">
              Explore live preview stores for each core service. Built with mobile-first checkout,
              zero commission fees, and customized for your trade.
            </p>
          </div>

          {/* Quick tab filter */}
          <div className="flex flex-wrap gap-1.5 p-1 bg-[#ede8df] rounded-full self-start md:self-auto border border-[#e2dcd1]">
            <button
              type="button"
              onClick={() => setActiveTab("all")}
              className={`text-xs font-semibold px-4 py-2 rounded-full transition cursor-pointer ${
                activeTab === "all"
                  ? "bg-[#1b2a3a] text-white shadow-xs"
                  : "text-[#4a4f5c] hover:text-[#14161c]"
              }`}
            >
              All Demos
            </button>
            <button
              type="button"
              onClick={() => setActiveTab("orders")}
              className={`text-xs font-semibold px-4 py-2 rounded-full transition cursor-pointer ${
                activeTab === "orders"
                  ? "bg-[#1b2a3a] text-white shadow-xs"
                  : "text-[#4a4f5c] hover:text-[#14161c]"
              }`}
            >
              1. Take Orders
            </button>
            <button
              type="button"
              onClick={() => setActiveTab("bookings")}
              className={`text-xs font-semibold px-4 py-2 rounded-full transition cursor-pointer ${
                activeTab === "bookings"
                  ? "bg-[#1b2a3a] text-white shadow-xs"
                  : "text-[#4a4f5c] hover:text-[#14161c]"
              }`}
            >
              2. Accept Bookings
            </button>
            <button
              type="button"
              onClick={() => setActiveTab("products")}
              className={`text-xs font-semibold px-4 py-2 rounded-full transition cursor-pointer ${
                activeTab === "products"
                  ? "bg-[#1b2a3a] text-white shadow-xs"
                  : "text-[#4a4f5c] hover:text-[#14161c]"
              }`}
            >
              3. Sell Products
            </button>
          </div>
        </div>

        {/* Demo Cards Grid (Ordered: 1. Take orders online -> 2. Accept bookings -> 3. Sell products) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {displayedDemos.map((demo) => {
            const Icon = demo.icon;

            return (
              <div
                key={demo.id}
                className="bg-white border border-[#e7e2d8] rounded-[18px] overflow-hidden shadow-xs hover:shadow-lg hover:border-[#e8572a]/40 transition-all duration-300 flex flex-col justify-between group"
              >
                {/* Top Browser Bar & Visual Mockup */}
                <div>
                  {/* Browser top chrome */}
                  <div className="bg-[#f3efe8] px-4 py-2.5 border-b border-[#e7e2d8] flex items-center justify-between gap-2">
                    <div className="flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-[#e38573] inline-block"></span>
                      <span className="w-2.5 h-2.5 rounded-full bg-[#f1ca74] inline-block"></span>
                      <span className="w-2.5 h-2.5 rounded-full bg-[#9bc995] inline-block"></span>
                    </div>

                    <div className="bg-white/80 border border-[#ded8cb] rounded-md px-2.5 py-0.5 text-[0.72rem] text-[#4a4f5c] font-mono truncate max-w-[180px] sm:max-w-[210px] flex items-center gap-1">
                      <span className="text-emerald-600 font-bold">https://</span>
                      {demo.isLive ? (
                        <a
                          href={demo.demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:text-[#e8572a] hover:underline truncate"
                          title={`Open ${demo.mockDomain}`}
                        >
                          {demo.mockDomain}
                        </a>
                      ) : (
                        <span className="truncate">{demo.mockDomain}</span>
                      )}
                    </div>

                    <div className="flex items-center gap-1">
                      <span
                        className={`inline-flex items-center gap-1 text-[0.68rem] font-semibold px-2 py-0.5 rounded-full ${
                          demo.isLive
                            ? "bg-emerald-100 text-emerald-800 border border-emerald-300"
                            : "bg-[#fdeee7] text-[#e8572a] border border-[#f5cfbf]"
                        }`}
                        title={
                          demo.isLive
                            ? "Live interactive store active"
                            : "Demo slot ready — add your URL in code"
                        }
                      >
                        <span
                          className={`w-1.5 h-1.5 rounded-full ${
                            demo.isLive ? "bg-emerald-500 animate-pulse" : "bg-[#e8572a]"
                          }`}
                        ></span>
                        {demo.isLive ? "Live Demo" : "Ready for URL"}
                      </span>
                    </div>
                  </div>

                  {/* Interactive Visual Storefront Teaser */}
                  <div className="p-5 bg-gradient-to-b from-[#faf8f4] to-[#ffffff] border-b border-[#f0ece3] relative">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-[0.7rem] font-bold tracking-wider uppercase px-2.5 py-1 rounded-md bg-white border border-[#e7e2d8] text-[#1b2a3a]">
                        {demo.mockupData.pillText}
                      </span>
                      <span className="text-[0.7rem] font-medium text-emerald-700 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded">
                        0% Commission
                      </span>
                    </div>

                    <h4 className="font-serif font-bold text-lg text-[#14161c] mb-1">
                      {demo.mockupData.title}
                    </h4>
                    <p className="text-xs text-[#4a4f5c] mb-4">
                      {demo.mockupData.subtitle}
                    </p>

                    {/* Mock Storefront Items */}
                    <div className="space-y-2">
                      {demo.mockupData.sampleItems.map((item, idx) => (
                        <div
                          key={idx}
                          className="bg-white border border-[#eae5dc] rounded-lg p-2.5 flex items-center justify-between text-xs hover:border-[#e8572a]/50 transition-colors"
                        >
                          <div>
                            <span className="font-semibold text-[#14161c] block">
                              {item.name}
                            </span>
                            {item.extra && (
                              <span className="text-[0.7rem] text-[#6b7280]">
                                {item.extra}
                              </span>
                            )}
                          </div>
                          <div className="flex items-center gap-2">
                            <span className="font-mono font-bold text-[#1b2a3a]">
                              {item.price}
                            </span>
                            <span className="w-6 h-6 rounded-full bg-[#fdeee7] text-[#e8572a] font-bold text-xs flex items-center justify-center hover:bg-[#e8572a] hover:text-white transition">
                              +
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Store Details */}
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-8 h-8 rounded-lg bg-[#fdeee7] text-[#e8572a] flex items-center justify-center">
                        <Icon className="w-4 h-4" />
                      </div>
                      <div>
                        <span className="text-[0.7rem] font-bold uppercase tracking-wider text-[#e8572a] block">
                          Service #{demo.serviceNumber}
                        </span>
                        <h3 className="font-serif text-xl font-bold text-[#14161c] leading-tight">
                          {demo.serviceTitle}
                        </h3>
                      </div>
                    </div>

                    <p className="text-[#4a4f5c] text-[0.92rem] leading-relaxed mt-2.5 mb-5">
                      {demo.description}
                    </p>

                    {/* Metrics Banner */}
                    <div className="grid grid-cols-3 gap-2 py-3 px-3 bg-[#faf8f4] border border-[#e7e2d8] rounded-xl mb-5 text-center">
                      {demo.stats.map((stat, sIdx) => (
                        <div key={sIdx} className="px-1">
                          <span className="block text-[0.68rem] text-[#6b7280] uppercase tracking-wide">
                            {stat.label}
                          </span>
                          <span className="font-serif font-bold text-[#14161c] text-sm">
                            {stat.value}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* Key features checklist */}
                    <div className="space-y-2 mb-2">
                      <span className="text-xs font-semibold text-[#14161c] block">
                        Included in this build:
                      </span>
                      <ul className="space-y-1.5">
                        {demo.keyFeatures.map((feat, fIdx) => (
                          <li
                            key={fIdx}
                            className="text-xs text-[#4a4f5c] flex items-start gap-2 leading-tight"
                          >
                            <Check className="w-3.5 h-3.5 text-[#e8572a] mt-0.5 shrink-0" />
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Card Actions & Live Link slot */}
                <div className="p-6 pt-0 border-t border-[#f0ece3] mt-4">
                  <div className="pt-4 flex flex-col gap-2.5">
                    {demo.isLive && demo.demoUrl !== "#" ? (
                      <a
                        href={demo.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full font-semibold text-sm bg-[#e8572a] text-white hover:bg-[#d2481e] transition shadow-xs hover:-translate-y-0.5 active:translate-y-0"
                      >
                        <span>Open Live Demo Store</span>
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    ) : (
                      <button
                        type="button"
                        onClick={() => setPreviewModalStore(demo)}
                        className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full font-semibold text-sm bg-[#1b2a3a] text-white hover:bg-[#14161c] transition shadow-xs hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
                      >
                        <Eye className="w-4 h-4 text-[#e8572a]" />
                        <span>Preview Demo Specs</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    )}

                    {demo.isLive && demo.quickLinks && demo.quickLinks.length > 0 && (
                      <div className="flex flex-wrap items-center gap-1.5 px-0.5">
                        {demo.quickLinks.map((link) => (
                          <a
                            key={link.label}
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[0.7rem] font-medium px-2.5 py-1 rounded-full border border-[#e7e2d8] bg-white text-[#4a4f5c] hover:border-[#e8572a]/50 hover:text-[#e8572a] transition"
                          >
                            {link.label}
                          </a>
                        ))}
                      </div>
                    )}

                    <div className="flex items-center justify-between text-[0.72rem] text-[#6b7280] px-1">
                      <span className="flex items-center gap-1">
                        <Info className="w-3 h-3 text-[#e8572a]" />
                        <span>{demo.isLive ? "Live on Vercel" : "Ready for custom URL"}</span>
                      </span>
                      <button
                        type="button"
                        onClick={() => setPreviewModalStore(demo)}
                        className="text-[#e8572a] hover:underline font-medium cursor-pointer"
                      >
                        {demo.isLive ? "Demo highlights →" : "How to connect →"}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Callout: custom demo provisioning */}
        <div className="mt-12 bg-white border border-[#e7e2d8] rounded-[16px] p-6 md:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 shadow-xs">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-[#fdeee7] text-[#e8572a] flex items-center justify-center shrink-0 mt-0.5">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-serif font-bold text-lg text-[#14161c] mb-1">
                Want a store like these for your business?
              </h3>
              <p className="text-[#4a4f5c] text-sm leading-relaxed max-w-[620px]">
                Every card above is a working build — browse the menu, place a test order, reserve a
                table or open the kitchen display. We can provision the same stack for your trade,
                with your menu, branding and payments.
              </p>
            </div>
          </div>

          <Link
            href="#contact"
            className="inline-flex items-center justify-center px-5 py-2.5 rounded-full font-semibold text-sm border-2 border-[#14161c] text-[#14161c] hover:bg-[#14161c] hover:text-white transition shrink-0"
          >
            Request a custom demo
          </Link>
        </div>
      </div>

      {/* Modal for Demo Preview & Configuration Helper */}
      {previewModalStore && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-xs p-4 animate-in fade-in duration-200">
          <div className="bg-white rounded-[20px] max-w-lg w-full border border-[#e7e2d8] shadow-2xl p-6 sm:p-7 relative overflow-hidden">
            {/* Header */}
            <div className="flex items-start justify-between gap-4 pb-4 border-b border-[#f0ece3]">
              <div>
                <span className="text-[0.72rem] font-bold text-[#e8572a] uppercase tracking-wider block mb-1">
                  Demo Slot • Service #{previewModalStore.serviceNumber}
                </span>
                <h3 className="font-serif text-xl font-bold text-[#14161c]">
                  {previewModalStore.serviceTitle}
                </h3>
                <p className="text-xs text-[#4a4f5c] mt-0.5">
                  {previewModalStore.storeName}
                </p>
              </div>

              <button
                type="button"
                onClick={() => setPreviewModalStore(null)}
                className="w-8 h-8 rounded-full bg-[#faf8f4] hover:bg-[#e7e2d8] text-[#14161c] flex items-center justify-center text-sm font-bold transition cursor-pointer"
                aria-label="Close modal"
              >
                ✕
              </button>
            </div>

            {/* Modal Body */}
            <div className="py-5 space-y-4">
              <div className="bg-[#faf8f4] p-4 rounded-xl border border-[#e7e2d8]">
                <span className="text-xs font-semibold text-[#14161c] block mb-1">
                  {previewModalStore.isLive ? "Live demo deployment:" : "Ready for your live demo URL:"}
                </span>

                {previewModalStore.isLive ? (
                  <>
                    <p className="text-xs text-[#4a4f5c] leading-relaxed mb-3">
                      This store is deployed and fully interactive. Open it to try the customer
                      journey end to end — menu, basket, checkout, bookings and order tracking.
                    </p>
                    <a
                      href={previewModalStore.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 max-w-full text-[0.75rem] font-mono text-[#1b2a3a] bg-white border border-[#ded8cb] rounded-lg px-3 py-2 hover:border-[#e8572a]/60 hover:text-[#e8572a] transition"
                    >
                      <span className="truncate">{previewModalStore.mockDomain}</span>
                      <ExternalLink className="w-3.5 h-3.5 shrink-0" />
                    </a>
                  </>
                ) : (
                  <>
                    <p className="text-xs text-[#4a4f5c] leading-relaxed mb-3">
                      To wire your live store to this demo button, simply update the{" "}
                      <code className="bg-[#ede8df] px-1.5 py-0.5 rounded text-[0.75rem] font-mono text-[#1b2a3a]">
                        demoUrl
                      </code>{" "}
                      property in{" "}
                      <code className="bg-[#ede8df] px-1.5 py-0.5 rounded text-[0.75rem] font-mono text-[#1b2a3a]">
                        src/components/DemoStores.tsx
                      </code>
                      :
                    </p>

                    <div className="bg-[#1b2a3a] text-slate-100 p-3 rounded-lg text-xs font-mono overflow-x-auto">
                      <span className="text-emerald-400">
                        // In DEMO_STORES [{DEMO_STORES.findIndex((store) => store.id === previewModalStore.id)}]:
                      </span>
                      <br />
                      <span className="text-amber-300">serviceTitle:</span> &quot;{previewModalStore.serviceTitle}&quot;,
                      <br />
                      <span className="text-amber-300">demoUrl:</span> &quot;
                      <span className="text-emerald-300">https://your-{previewModalStore.serviceCategory}-demo.com</span>&quot;,
                      <br />
                      <span className="text-amber-300">isLive:</span> <span className="text-cyan-300">true</span>
                    </div>
                  </>
                )}
              </div>

              <div>
                <span className="text-xs font-semibold text-[#14161c] block mb-2">
                  Customer Experience Highlights:
                </span>
                <ul className="grid grid-cols-1 gap-1.5">
                  {previewModalStore.keyFeatures.map((feat, i) => (
                    <li key={i} className="text-xs text-[#4a4f5c] flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-[#e8572a] shrink-0" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="pt-4 border-t border-[#f0ece3] flex items-center justify-between gap-3">
              <span className="text-[0.75rem] text-[#6b7280]">
                Arranged in requested order: 1. Take orders, 2. Bookings, 3. Sell products
              </span>
              <button
                type="button"
                onClick={() => setPreviewModalStore(null)}
                className="px-4 py-2 rounded-full font-semibold text-xs bg-[#14161c] text-white hover:bg-[#1b2a3a] transition cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
