import Link from "next/link";

export default function Paths() {
  const paths = [
    {
      emoji: "🛍️",
      title: "Sell products",
      description:
        "Online shop with sizes and variants, click & collect, delivery rules, digital downloads and private trade pricing.",
      category: "shop",
    },
    {
      emoji: "🍕",
      title: "Take food orders",
      description:
        "Your own ordering site with no delivery-app cut: delivery zones, table QR ordering and kitchen dockets.",
      category: "food",
    },
  ];

  return (
    <section id="paths" className="pt-0 pb-20">
      <div className="max-w-[1120px] mx-auto px-5">
        <span className="inline-block text-xs font-semibold tracking-wider uppercase text-[#e8572a] mb-3">
          What does your business do?
        </span>
        <h2 className="font-serif text-[clamp(1.7rem,3.5vw,2.6rem)] font-bold text-[#14161c] mb-8 leading-tight">
          Pick your starting point
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {paths.map((p, idx) => (
            <div
              key={idx}
              className="bg-white border border-[#e7e2d8] rounded-[14px] p-7 md:p-8 hover:shadow-md hover:border-[#e8572a]/30 transition group flex flex-col justify-between"
            >
              <div>
                <div className="text-3xl mb-4 group-hover:scale-110 transition-transform origin-left inline-block" aria-hidden="true">
                  {p.emoji}
                </div>
                <h3 className="font-serif text-xl font-bold text-[#14161c] mb-2.5">
                  {p.title}
                </h3>
                <p className="text-[#4a4f5c] text-[0.96rem] leading-relaxed m-0">
                  {p.description}
                </p>
              </div>
              <div className="mt-5 pt-4 border-t border-[#f0ece3]">
                <Link
                  href="#services"
                  className="text-sm font-semibold text-[#e8572a] hover:text-[#d2481e] inline-flex items-center gap-1.5"
                >
                  Explore features <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
