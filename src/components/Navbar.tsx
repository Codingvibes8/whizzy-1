"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import {
  Show,
  SignInButton,
  UserButton,
} from "@clerk/nextjs";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-[#faf8f4]/90 backdrop-blur-md border-b border-[#e7e2d8] transition-all">
      <div className="max-w-[1120px] mx-auto px-5 h-[68px] flex items-center justify-between gap-4">
        <Link
          href="/"
          className="font-serif font-bold text-[1.35rem] tracking-tight text-[#14161c]"
        >
          Forge<span className="text-[#e8572a]">&</span>Pixel
        </Link>

        {/* Desktop Navigation */}
        <nav aria-label="Main" className="hidden md:flex items-center gap-7">
          <Link
            href="/#services"
            className="text-[0.95rem] font-medium text-[#14161c] hover:text-[#e8572a] transition-colors"
          >
            Services
          </Link>
          <Link
            href="/#process"
            className="text-[0.95rem] font-medium text-[#14161c] hover:text-[#e8572a] transition-colors"
          >
            How it works
          </Link>
          <Link
            href="/#pricing"
            className="text-[0.95rem] font-medium text-[#14161c] hover:text-[#e8572a] transition-colors"
          >
            Pricing
          </Link>
          <Link
            href="/#faq"
            className="text-[0.95rem] font-medium text-[#14161c] hover:text-[#e8572a] transition-colors"
          >
            FAQ
          </Link>

          {/* Clerk Auth Section */}
          <Show when="signed-out">
            <SignInButton mode="modal">
              <button
                type="button"
                className="text-[0.95rem] font-medium text-[#14161c] hover:text-[#e8572a] transition-colors cursor-pointer"
              >
                Sign in
              </button>
            </SignInButton>
          </Show>
          <Show when="signed-in">
            <UserButton />
          </Show>

          <Link
            href="/#contact"
            className="inline-flex items-center justify-center px-5 py-2.5 rounded-full font-semibold text-sm bg-[#e8572a] text-white hover:bg-[#d2481e] hover:-translate-y-0.5 active:translate-y-0 transition duration-150 shadow-sm"
          >
            Get a quote
          </Link>
        </nav>

        {/* Mobile menu trigger */}
        <div className="flex items-center gap-3 md:hidden">
          <Show when="signed-out">
            <SignInButton mode="modal">
              <button
                type="button"
                className="text-xs font-semibold text-[#14161c] hover:text-[#e8572a] px-2 py-1"
              >
                Sign in
              </button>
            </SignInButton>
          </Show>
          <Show when="signed-in">
            <UserButton />
          </Show>

          <Link
            href="/#contact"
            className="inline-flex items-center justify-center px-3.5 py-1.5 rounded-full font-semibold text-xs bg-[#e8572a] text-white hover:bg-[#d2481e] transition"
          >
            Get quote
          </Link>
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-1.5 rounded-lg text-[#14161c] hover:bg-black/5"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-[#e7e2d8] bg-[#faf8f4] px-5 py-4 space-y-3">
          <Link
            href="/#services"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-base font-medium text-[#14161c] hover:text-[#e8572a]"
          >
            Services
          </Link>
          <Link
            href="/#process"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-base font-medium text-[#14161c] hover:text-[#e8572a]"
          >
            How it works
          </Link>
          <Link
            href="/#pricing"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-base font-medium text-[#14161c] hover:text-[#e8572a]"
          >
            Pricing
          </Link>
          <Link
            href="/#faq"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-base font-medium text-[#14161c] hover:text-[#e8572a]"
          >
            FAQ
          </Link>
        </div>
      )}
    </header>
  );
}
