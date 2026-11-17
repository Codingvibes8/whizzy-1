export default function Process() {
  const steps = [
    {
      num: "01",
      title: "Free call",
      desc: "We talk through your business, what you sell and what is slowing you down.",
    },
    {
      num: "02",
      title: "Fixed quote",
      desc: "A clear price and feature list within 48 hours. No surprise invoices.",
    },
    {
      num: "03",
      title: "Build & review",
      desc: "You see progress on a private preview link and give feedback each week.",
    },
    {
      num: "04",
      title: "Launch & support",
      desc: "I go live, show you how to run it, and stay on hand for updates.",
    },
  ];

  return (
    <section id="process" className="py-20 md:py-24">
      <div className="max-w-[1120px] mx-auto px-5">
        <span className="inline-block text-xs font-semibold tracking-wider uppercase text-[#e8572a] mb-3">
          How it works
        </span>
        <h2 className="font-serif text-[clamp(1.7rem,3.5vw,2.6rem)] font-bold text-[#14161c] mb-8 leading-tight">
          From first chat to launch day
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
          {steps.map((step) => (
            <div
              key={step.num}
              className="pt-4 border-t-3 border-[#e8572a] flex flex-col justify-start"
            >
              <span className="font-serif text-3xl font-bold text-[#e8572a] mb-2">
                {step.num}
              </span>
              <h3 className="font-serif text-xl font-bold text-[#14161c] mb-2">
                {step.title}
              </h3>
              <p className="text-[#4a4f5c] text-[0.95rem] leading-relaxed m-0">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
