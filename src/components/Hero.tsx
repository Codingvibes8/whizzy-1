import Link from "next/link";
import { FEATURES } from "@/lib/features";

export default function Hero() {
  const stats = [
    { value: "0%", label: "commission on your sales" },
    { value: `${FEATURES.length}`, label: "features I can build in" },
    { value: "2–4 wks", label: "typical launch time" },
    { value: "100%", label: "yours: code, domain, data" },
  ];

  return (
    <section className="pt-20 pb-16 md:pt-24 md:pb-20">
      <div className="max-w-[1120px] mx-auto px-5">
        <span className="inline-block text-xs font-semibold tracking-wider uppercase text-[#e8572a] mb-3">
          Web developer for independent businesses
        </span>
        <h1 className="font-serif text-[clamp(2.2rem,5.5vw,4rem)] font-bold leading-[1.12] text-[#14161c] mb-5 tracking-tight">
          A website that sells and takes orders.
          <br className="hidden sm:inline" />
          <span className="block mt-1 sm:mt-0">Built for you, owned by you.</span>
        </h1>
        <p className="text-lg md:text-xl text-[#4a4f5c] max-w-[640px] leading-relaxed mb-8">
          I build fast, mobile-first websites for shops, cafés and makers, with
          online payments and ordering built in. No platform taking a cut of every
          sale, and no pile of plugins to keep paying for.
        </p>

        <div className="flex flex-wrap items-center gap-3.5">
          <Link
            href="#contact"
            className="inline-flex items-center justify-center px-6 py-3.5 rounded-full font-semibold text-[0.98rem] bg-[#e8572a] text-white hover:bg-[#d2481e] hover:-translate-y-0.5 active:translate-y-0 transition duration-150 shadow-md shadow-[#e8572a]/15"
          >
            Book a free 20-min call
          </Link>
          <Link
            href="#services"
            className="inline-flex items-center justify-center px-6 py-3.5 rounded-full font-semibold text-[0.98rem] border-2 border-[#14161c] text-[#14161c] hover:bg-[#14161c] hover:text-white hover:-translate-y-0.5 active:translate-y-0 transition duration-150"
          >
            See what I build
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16">
          {stats.map((stat, i) => (
            <div
              key={i}
              className="bg-white border border-[#e7e2d8] rounded-[14px] p-5 shadow-xs hover:border-[#e8572a]/30 transition"
            >
              <b className="block font-serif text-2xl md:text-3xl font-bold text-[#14161c] mb-1">
                {stat.value}
              </b>
              <span className="text-xs md:text-sm text-[#4a4f5c] leading-snug">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
