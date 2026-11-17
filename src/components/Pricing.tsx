import Link from "next/link";
import { Check } from "lucide-react";

export default function Pricing() {
  const plans = [
    {
      name: "Starter",
      price: "£950",
      cadence: "one-off",
      featured: false,
      ctaText: "Start with Starter",
      features: [
        "Up to 5-page website",
        "Contact and enquiry forms",
        "Google Business & local SEO setup",
        "Embed one widget (shop or menu)",
      ],
    },
    {
      name: "Business",
      price: "£2,400",
      cadence: "one-off",
      featured: true,
      badge: "Most popular",
      ctaText: "Choose Business",
      features: [
        "Everything in Starter",
        "Full shop or ordering system",
        "Apple Pay, Google Pay & card checkout",
        "Reviews and discount codes",
      ],
    },
    {
      name: "Care plan",
      price: "£49",
      cadence: "/ month",
      featured: false,
      ctaText: "Add care plan",
      features: [
        "Hosting, backups and security updates",
        "Up to 2 hours of changes a month",
        "Monthly sales and traffic summary",
        "Priority support by WhatsApp",
      ],
    },
  ];

  return (
    <section id="pricing" className="py-20 md:py-24">
      <div className="max-w-[1120px] mx-auto px-5">
        <span className="inline-block text-xs font-semibold tracking-wider uppercase text-[#e8572a] mb-3">
          Pricing
        </span>
        <h2 className="font-serif text-[clamp(1.7rem,3.5vw,2.6rem)] font-bold text-[#14161c] mb-3 leading-tight">
          Simple packages, fixed prices
        </h2>
        <p className="text-[#4a4f5c] text-[1.05rem] max-w-[620px] leading-relaxed mb-8">
          Every package includes mobile design, hosting setup, SSL, basic SEO and
          a handover session.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-10 items-stretch">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`bg-white rounded-[14px] p-7 md:p-8 flex flex-col justify-between transition relative ${
                plan.featured
                  ? "border-2 border-[#e8572a] shadow-xl shadow-[#e8572a]/10 ring-1 ring-[#e8572a]/20"
                  : "border border-[#e7e2d8] hover:border-[#e8572a]/40 shadow-xs"
              }`}
            >
              <div>
                <div className="flex items-center justify-between">
                  <h3 className="font-serif text-2xl font-bold text-[#14161c]">
                    {plan.name}
                  </h3>
                  {plan.featured && (
                    <span className="bg-[#fdeee7] text-[#e8572a] text-xs font-semibold px-2.5 py-1 rounded-full uppercase tracking-wider">
                      {plan.badge}
                    </span>
                  )}
                </div>

                <div className="font-serif text-4xl md:text-5xl font-bold text-[#14161c] mt-4 mb-6">
                  {plan.price}{" "}
                  <span className="font-sans text-sm font-normal text-[#4a4f5c]">
                    {plan.cadence}
                  </span>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feat, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-2.5 text-[0.93rem] text-[#4a4f5c]"
                    >
                      <Check
                        size={17}
                        className="text-[#e8572a] shrink-0 mt-0.5"
                      />
                      <span className="leading-snug">{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <Link
                href="#contact"
                className={`w-full py-3.5 px-6 rounded-full font-semibold text-center text-sm transition duration-150 inline-block ${
                  plan.featured
                    ? "bg-[#e8572a] text-white hover:bg-[#d2481e] shadow-sm hover:-translate-y-0.5"
                    : "border-2 border-[#14161c] text-[#14161c] hover:bg-[#14161c] hover:text-white hover:-translate-y-0.5"
                }`}
              >
                {plan.ctaText}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
