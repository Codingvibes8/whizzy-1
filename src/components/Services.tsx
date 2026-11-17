import Link from "next/link";
import {
  ArrowRight,
  CalendarCheck,
  CreditCard,
  ShoppingBag,
  Utensils,
  type LucideIcon,
} from "lucide-react";
import {
  FEATURE_CATEGORIES,
  FEATURES,
  HIGHLIGHT_FEATURES,
  type FeatureCategory,
} from "@/lib/features";

const categoryIcons: Record<FeatureCategory, LucideIcon> = {
  food: Utensils,
  bookings: CalendarCheck,
  shop: ShoppingBag,
  payments: CreditCard,
  marketing: ArrowRight,
};

const categoryLabels = Object.fromEntries(
  FEATURE_CATEGORIES.map((category) => [category.key, category.label]),
) as Record<FeatureCategory, string>;

export default function Services() {
  return (
    <section
      id="services"
      className="bg-white border-y border-[#e7e2d8] py-20 md:py-24"
    >
      <div className="max-w-[1120px] mx-auto px-5">
        <span className="inline-block text-xs font-semibold tracking-wider uppercase text-[#e8572a] mb-3">
          Services
        </span>
        <h2 className="font-serif text-[clamp(1.7rem,3.5vw,2.6rem)] font-bold text-[#14161c] mb-3 leading-tight">
          The features that do the heavy lifting
        </h2>
        <p className="text-[#4a4f5c] text-[1.05rem] max-w-[620px] leading-relaxed mb-10">
          A quick look at the four things owners ask for most. Everything is
          modular — you only pay for what your business uses.
        </p>

        {/* Highlight reel */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {HIGHLIGHT_FEATURES.map((feature) => {
            const Icon = categoryIcons[feature.category];

            return (
              <Link
                key={feature.id}
                href={`/features#${feature.category}`}
                className="group border border-[#e7e2d8] rounded-[14px] p-6 bg-[#faf8f4] hover:border-[#e8572a]/40 hover:shadow-sm transition flex flex-col"
              >
                <div className="w-10 h-10 rounded-xl bg-[#fdeee7] text-[#e8572a] flex items-center justify-center mb-4">
                  <Icon className="w-5 h-5" aria-hidden="true" />
                </div>
                <span className="text-[0.72rem] font-semibold text-[#e8572a] uppercase tracking-wide mb-1.5">
                  {categoryLabels[feature.category]}
                </span>
                <h3 className="font-serif text-lg font-bold text-[#14161c] mb-2 leading-snug">
                  {feature.title}
                </h3>
                <p className="text-[#4a4f5c] text-[0.9rem] leading-relaxed m-0 flex-1">
                  {feature.highlight}
                </p>
                <span className="mt-4 text-sm font-semibold text-[#e8572a] inline-flex items-center gap-1.5">
                  See what&apos;s included
                  <ArrowRight
                    className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5"
                    aria-hidden="true"
                  />
                </span>
              </Link>
            );
          })}
        </div>

        {/* Link to the full list */}
        <div className="mt-10 bg-[#faf8f4] border border-[#e7e2d8] rounded-[14px] p-6 md:p-7 flex flex-col md:flex-row md:items-center justify-between gap-5">
          <div>
            <p className="font-serif text-lg font-bold text-[#14161c] mb-1">
              That&apos;s the highlight reel.
            </p>
            <p className="text-[#4a4f5c] text-sm leading-relaxed max-w-[560px] m-0">
              All {FEATURES.length} features are listed by category — from
              kitchen dockets and delivery zones to deposits, stock and
              bookkeeping exports.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <Link
              href="/features"
              className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full font-semibold text-sm bg-[#e8572a] text-white hover:bg-[#d2481e] transition shadow-xs hover:-translate-y-0.5 active:translate-y-0"
            >
              See all features
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </Link>
            <Link
              href="#contact"
              className="inline-flex items-center justify-center px-5 py-3 rounded-full font-semibold text-sm border-2 border-[#14161c] text-[#14161c] hover:bg-[#14161c] hover:text-white transition"
            >
              Ask what I&apos;d use
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
