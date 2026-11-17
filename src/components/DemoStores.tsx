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
  Clock,
  Sparkles,
  Smartphone,
  Eye,
  ShieldCheck,
  ChevronRight,
  Info,
} from "lucide-react";

/**
 * =========================================================================
 * DEMO STORES CONFIGURATION
 * -------------------------------------------------------------------------
 * When you are ready to provide your real demo store links in the future,
 * simply update the `demoUrl` field in the array below.
 * You can also update the `storeName`, `status`, or preview images.
 * =========================================================================
 */
export interface DemoStoreItem {
  id: string;
  order: number;
  serviceCategory: "orders" | "bookings" | "products";
  serviceTitle: string; // Ordered: 1. Take orders online, 2. Accept bookings, 3. Sell products
  storeName: string;
  tagline: string;
  description: string;
  mockDomain: string;
  demoUrl: string; // <-- Place your future live demo link here
  isLive: boolean; // Set to true when your live demo URL is ready
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
  // 1. TAKE ORDERS ONLINE (First)
  {
    id: "demo-orders",
    order: 1,
    serviceCategory: "orders",
    serviceTitle: "Take orders online",
    storeName: "Crust & Craft Artisan Pizza",
    tagline: "Independent takeaway, delivery & dine-in table ordering",
    description:
      "A fast, phone-first food ordering system with zero commission on sales. Features interactive menu categories, dietary badges, postcode delivery fees, and automated kitchen dockets.",
    mockDomain: "order.crustandcraft.co.uk",
    demoUrl: "#", // 💡 FUTURE LINK: Paste your food ordering demo URL here
    isLive: false,
    badge: "Food & Hospitality",
    icon: Utensils,
    stats: [
      { label: "Commission fee", value: "0%" },
      { label: "Checkout speed", value: "< 25s" },
      { label: "Table QR support", value: "Built-in" },
    ],
    keyFeatures: [
      "Allergen & dietary badges (GF, Vegan, Halal)",
      "Radius & postcode-based delivery fees",
      "Table QR ordering with instant card & Apple Pay",
      "Printable kitchen tickets & live status tracker",
    ],
    mockupData: {
      accentColor: "#e8572a",
      pillText: "🍕 Food & Takeaway Demo",
      title: "Crust & Craft Kitchen",
      subtitle: "Open today • 12:00 – 22:30 • 20-35 min delivery",
      previewBadge: "Zero-Commission Ordering",
      sampleItems: [
        { name: "Wood-Fired Margherita D.O.P", price: "£11.50", extra: "San Marzano, fresh basil" },
        { name: "Hot Honey & Spicy Nduja", price: "£13.50", extra: "Hot honey drizzle" },
        { name: "Truffle Rosemary Skinny Fries", price: "£4.50", extra: "Parmesan dip" },
      ],
    },
  },

  // 2. ACCEPT BOOKINGS (Second)
  {
    id: "demo-bookings",
    order: 2,
    serviceCategory: "bookings",
    serviceTitle: "Accept bookings",
    storeName: "Haven & Mane Grooming Studio",
    tagline: "Appointments, staff schedules & deposit protection",
    description:
      "A friction-free appointment scheduling portal. Clients select their favourite stylist or service, choose live calendar slots with automatic buffers, and pay deposits to eliminate no-shows.",
    mockDomain: "book.havenandmane.co.uk",
    demoUrl: "#", // 💡 FUTURE LINK: Paste your booking demo URL here
    isLive: false,
    badge: "Appointments & Studios",
    icon: Calendar,
    stats: [
      { label: "No-show cut", value: "Down 85%" },
      { label: "Deposit payments", value: "Stripe" },
      { label: "Calendar sync", value: "Google/iCal" },
    ],
    keyFeatures: [
      "Real-time calendar availability with custom buffers",
      "Upfront deposit or full payment via Apple/Google Pay",
      "Team member selection with individual working hours",
      "Automated SMS & WhatsApp appointment confirmations",
    ],
    mockupData: {
      accentColor: "#1b2a3a",
      pillText: "📅 Appointment Booking Demo",
      title: "Haven & Mane Studio",
      subtitle: "Next available: Tomorrow at 10:15 AM",
      previewBadge: "Live Calendar & Deposits",
      sampleItems: [
        { name: "Signature Haircut & Beard Trim", price: "£36.00", extra: "45 mins • with Alex" },
        { name: "Luxury Hot Towel Head Shave", price: "£28.00", extra: "30 mins • with Sam" },
        { name: "Full Re-style & Conditioning", price: "£45.00", extra: "60 mins • with Senior" },
      ],
    },
  },

  // 3. SELL PRODUCTS (Third)
  {
    id: "demo-products",
    order: 3,
    serviceCategory: "products",
    serviceTitle: "Sell products",
    storeName: "Monolith Coffee & Goods",
    tagline: "Speciality retail, multi-variants & click and collect",
    description:
      "A lightning-fast ecommerce boutique built for independent makers. Handles complex size and variant matrices, stock tracking, click & collect collection windows, and private wholesale gates.",
    mockDomain: "shop.monolithgoods.co.uk",
    demoUrl: "#", // 💡 FUTURE LINK: Paste your ecommerce shop demo URL here
    isLive: false,
    badge: "Retail & Makers",
    icon: ShoppingBag,
    stats: [
      { label: "Page load", value: "0.6s" },
      { label: "Wholesale gate", value: "Passcode" },
      { label: "Click & Collect", value: "Slot picker" },
    ],
    keyFeatures: [
      "Multi-variant selectors (Sizes, colours, grinds, packs)",
      "Click & Collect checkout with designated pickup time slots",
      "Wholesale & trade pricing with password-protected catalogs",
      "Automated packing slips, shipping labels & inventory alerts",
    ],
    mockupData: {
      accentColor: "#d97706",
      pillText: "🛍️ Online Shop Demo",
      title: "Monolith Roasters",
      subtitle: "Free UK shipping on orders over £30",
      previewBadge: "Fast Variant Checkout",
      sampleItems: [
        { name: "Ethiopia Yirgacheffe (250g / 1kg)", price: "£11.00", extra: "Whole bean or Ground" },
        { name: "Signature Espresso Blend No. 4", price: "£9.50", extra: "Medium-Dark roast" },
        { name: "Ceramic Minimalist Dripper Set", price: "£28.00", extra: "Includes 40 filters" },
      ],
    },
  },
];

export default function DemoStores() {
  const [activeTab, setActiveTab] = useState<"all" | "orders" | "bookings" | "products">("all");
  const [previewModalStore, setPreviewModalStore] = useState<DemoStoreItem | null>(null);

  const displayedDemos =
    activeTab === "all"
      ? DEMO_STORES
      : DEMO_STORES.filter((store) => store.serviceCategory === activeTab);

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
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
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
                      {demo.mockDomain}
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
                          Service #{demo.order}
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

                    <div className="flex items-center justify-between text-[0.72rem] text-[#6b7280] px-1">
                      <span className="flex items-center gap-1">
                        <Info className="w-3 h-3 text-[#e8572a]" />
                        <span>Ready for custom URL</span>
                      </span>
                      <button
                        type="button"
                        onClick={() => setPreviewModalStore(demo)}
                        className="text-[#e8572a] hover:underline font-medium cursor-pointer"
                      >
                        How to connect →
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Informative helper callout for future store links */}
        <div className="mt-12 bg-white border border-[#e7e2d8] rounded-[16px] p-6 md:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 shadow-xs">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-[#fdeee7] text-[#e8572a] flex items-center justify-center shrink-0 mt-0.5">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-serif font-bold text-lg text-[#14161c] mb-1">
                Have existing store links or want custom demo staging?
              </h3>
              <p className="text-[#4a4f5c] text-sm leading-relaxed max-w-[620px]">
                These demo cards are built modularly in the code. Whenever you are ready, provide your
                live store links to easily link &ldquo;Take orders online&rdquo;, &ldquo;Accept bookings&rdquo;, or &ldquo;Sell products&rdquo;.
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
                  Demo Slot • Service #{previewModalStore.order}
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
                  Ready for your live demo URL:
                </span>
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
                  <span className="text-emerald-400">// In DEMO_STORES [{previewModalStore.order - 1}]:</span>
                  <br />
                  <span className="text-amber-300">serviceTitle:</span> &quot;{previewModalStore.serviceTitle}&quot;,
                  <br />
                  <span className="text-amber-300">demoUrl:</span> &quot;
                  <span className="text-emerald-300">https://your-{previewModalStore.serviceCategory}-demo.com</span>&quot;,
                  <br />
                  <span className="text-amber-300">isLive:</span> <span className="text-cyan-300">true</span>
                </div>
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
