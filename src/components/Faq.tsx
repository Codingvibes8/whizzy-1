export default function Faq() {
  const faqs = [
    {
      q: "Do I need to be good with technology?",
      a: "No. I set everything up and show you how to add items, change prices and handle orders from your phone.",
    },
    {
      q: "Do you take a cut of my sales?",
      a: "Never. Payments go straight to your own Stripe account. You only pay Stripe's standard card fees.",
    },
    {
      q: "Can you add features to my existing website?",
      a: "Yes. I can embed a shop or menu on WordPress, Wix, Squarespace or Webflow without rebuilding your site.",
    },
    {
      q: "Who owns the website?",
      a: "You do: the domain, the code and your customer data. If you ever want to move on, you take everything with you.",
    },
    {
      q: "How long does it take?",
      a: "Most Starter sites launch in about two weeks; Business builds take three to four.",
    },
  ];

  return (
    <section id="faq" className="pt-0 pb-20 md:pb-24">
      <div className="max-w-[760px] mx-auto px-5">
        <span className="inline-block text-xs font-semibold tracking-wider uppercase text-[#e8572a] mb-3">
          FAQ
        </span>
        <h2 className="font-serif text-[clamp(1.7rem,3.5vw,2.6rem)] font-bold text-[#14161c] mb-8 leading-tight">
          Common questions
        </h2>

        <div className="divide-y divide-[#e7e2d8]">
          {faqs.map((faq, idx) => (
            <details
              key={idx}
              className="group py-5 text-left cursor-pointer transition-colors"
            >
              <summary className="font-sans font-semibold text-[1.05rem] text-[#14161c] flex items-center justify-between list-none outline-hidden select-none hover:text-[#e8572a] transition-colors">
                <span>{faq.q}</span>
                <span className="ml-4 text-xl font-light text-[#4a4f5c] transition-transform duration-200 group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="mt-3 text-[#4a4f5c] text-[0.98rem] leading-relaxed pr-6">
                {faq.a}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
