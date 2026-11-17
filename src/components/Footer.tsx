import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 text-[0.9rem] text-[#4a4f5c] border-t border-[#e7e2d8]">
      <div className="max-w-[1120px] mx-auto px-5 flex flex-wrap items-center justify-between gap-3">
        <span>
          © {currentYear} Forge &amp; Pixel. Web development for independent
          businesses.
        </span>
        <Link
          href="#"
          className="hover:text-[#e8572a] transition-colors font-medium"
        >
          Back to top ↑
        </Link>
      </div>
    </footer>
  );
}
