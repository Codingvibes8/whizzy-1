import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Check } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { FEATURES, FEATURE_CATEGORIES } from "@/lib/features";

export const metadata: Metadata = {
  title: "All features — Forge & Pixel",
  description:
    "The full feature list for online shops, food ordering, table QR, kitchen dockets, bookings, payments and marketing — built for independent businesses.",
};

export default function FeaturesPage() {
  return (
    <>
      <Navbar />
      <main>
        <section className="py-16 md:py-20">
          <div className="max-w-[1120px] mx-auto px-5">
            <Link
              href="/#services"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#4a4f5c] hover:text-[#e8572a] transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4" aria-hidden="true" />
              Back to the highlights
            </Link>

            <span className="block text-xs font-semibold tracking-wider uppercase text-[#e8572a] mb-3">
              Full feature list
            </span>
            <h1 className="font-serif text-[clamp(2rem,4.5vw,3.2rem)] font-bold text-[#14161c] mb-4 leading-[1.12] tracking-tight max-w-[760px]">
              Everything I can build into your site
            </h1>
            <p className="text-[#4a4f5c] text-[1.05rem] max-w-[640px] leading-relaxed mb-8">
              {FEATURES.length} features, grouped by what your business does.
              Mix and match — you only pay for what you use, and each one is
              wired into the same checkout, dashboard and support.
            </p>

            {/* Category jump links */}
            <nav
              aria-label="Feature categories"
              className="flex flex-wrap gap-2 mb-4"
            >
              {FEATURE_CATEGORIES.map((category) => (
                <a
                  key={category.key}
                  href={`#${category.key}`}
                  className="font-sans font-medium text-[0.92rem] px-4 py-2 rounded-full border bg-white text-[#14161c] border-[#e7e2d8] hover:border-[#1b2a3a]/40 hover:text-[#e8572a] transition"
                >
                  {category.label}
                </a>
              ))}
            </nav>

            {/* Grouped full list */}
            {FEATURE_CATEGORIES.map((category, index) => {
              const items = FEATURES.filter(
                (feature) => feature.category === category.key,
              );

              return (
                <section
                  key={category.key}
                  id={category.key}
                  className={`scroll-mt-24 ${
                    index === 0
                      ? "pt-10"
                      : "pt-12 mt-12 border-t border-[#e7e2d8]"
                  }`}
                >
                  <div className="flex flex-wrap items-baseline justify-between gap-2 mb-5">
                    <h2 className="font-serif text-[clamp(1.35rem,2.5vw,1.8rem)] font-bold text-[#14161c]">
                      {category.label}
                    </h2>
                    <span className="text-xs font-semibold text-[#6b7280] uppercase tracking-wide">
                      {items.length} features
                    </span>
                  </div>
                  <p className="text-[#4a4f5c] text-[0.98rem] max-w-[620px] leading-relaxed mb-6">
                    {category.description}
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {items.map((feature) => (
                      <article
                        key={feature.id}
                        className="bg-white border border-[#e7e2d8] rounded-[14px] p-6 hover:border-[#e8572a]/30 hover:shadow-xs transition"
                      >
                        <h3 className="font-serif text-lg font-bold text-[#14161c] mb-3">
                          {feature.title}
                        </h3>
                        <ul className="m-0 p-0 list-none space-y-2">
                          {feature.bullets.map((bullet) => (
                            <li
                              key={bullet}
                              className="text-[#4a4f5c] text-[0.9rem] flex items-start gap-2 leading-snug"
                            >
                              <Check
                                className="w-3.5 h-3.5 text-[#e8572a] shrink-0 mt-0.5"
                                aria-hidden="true"
                              />
                              <span>{bullet}</span>
                            </li>
                          ))}
                        </ul>
                      </article>
                    ))}
                  </div>
                </section>
              );
            })}

            {/* CTA */}
            <div className="mt-14 bg-[#1b2a3a] text-white rounded-[16px] p-7 md:p-9 flex flex-col md:flex-row md:items-center justify-between gap-5">
              <div>
                <h2 className="font-serif text-xl md:text-2xl font-bold mb-1.5">
                  Not sure which of these you need?
                </h2>
                <p className="text-slate-300 text-sm md:text-[0.98rem] leading-relaxed max-w-[560px] m-0">
                  Tell me how your business runs and I&apos;ll suggest the
                  smallest set of features that solves it — with a fixed price.
                </p>
              </div>
              <Link
                href="/#contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full font-semibold text-sm bg-[#e8572a] text-white hover:bg-[#d2481e] transition shadow-sm hover:-translate-y-0.5 active:translate-y-0 shrink-0"
              >
                Book a free 20-min call
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
