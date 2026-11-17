export default function Comparison() {
  const rows = [
    {
      need: "Selling online",
      built: "0% commission, only Stripe card fees",
      alt: "15–30% marketplace or delivery-app cut",
    },
    {
      need: "Trade / wholesale pricing",
      built: "Passcode-protected price list",
      alt: "Enterprise-tier ecommerce plans",
    },
    {
      need: "Table ordering",
      built: "QR codes on your own site",
      alt: "Dedicated hospitality apps and tablets",
    },
    {
      need: "Bookkeeping",
      built: "One-click VAT-ready exports",
      alt: "Manual spreadsheet entry",
    },
  ];

  return (
    <section className="bg-[#1b2a3a] text-white py-20 md:py-24">
      <div className="max-w-[1120px] mx-auto px-5">
        <span className="inline-block text-xs font-semibold tracking-wider uppercase text-[#e8572a] mb-3">
          Why a custom build
        </span>
        <h2 className="font-serif text-[clamp(1.7rem,3.5vw,2.6rem)] font-bold mb-3 leading-tight text-white">
          One site instead of six subscriptions
        </h2>
        <p className="text-[#c4ccd6] text-[1.05rem] max-w-[620px] leading-relaxed mb-8">
          Marketplaces and app bundles add up every month and don't talk to each
          other. A site built for you does it all in one place.
        </p>

        <div className="overflow-x-auto mt-8">
          <table className="w-full border-collapse text-left text-sm md:text-base">
            <thead>
              <tr className="border-b border-white/15">
                <th
                  scope="col"
                  className="font-serif font-bold text-base md:text-lg py-3.5 px-3 md:px-4 text-white"
                >
                  What you need
                </th>
                <th
                  scope="col"
                  className="font-serif font-bold text-base md:text-lg py-3.5 px-3 md:px-4 text-[#ffd3c2]"
                >
                  Built by me
                </th>
                <th
                  scope="col"
                  className="font-serif font-bold text-base md:text-lg py-3.5 px-3 md:px-4 text-[#9aa6b4]"
                >
                  Typical alternative
                </th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, idx) => (
                <tr
                  key={idx}
                  className="border-b border-white/10 hover:bg-white/[0.02] transition-colors"
                >
                  <td className="py-4 px-3 md:px-4 font-medium text-white/90 align-top">
                    {row.need}
                  </td>
                  <td className="py-4 px-3 md:px-4 text-[#ffd3c2] font-medium align-top">
                    {row.built}
                  </td>
                  <td className="py-4 px-3 md:px-4 text-[#9aa6b4] align-top">
                    {row.alt}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
