import type { Metadata, Viewport } from "next";
import { ClerkProvider } from "@clerk/nextjs";
import { clerkEnabled } from "@/lib/clerk";
import "./globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Forge & Pixel — Websites That Sell & Take Orders",
  description:
    "UK web developer building online shops and food ordering sites for independent businesses. You own the site. No commission on your sales.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const document = (
    <html lang="en-GB">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,600;9..144,700&family=Inter:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased min-h-screen selection:bg-[#e8572a] selection:text-white">
        {children}
      </body>
    </html>
  );

  // ClerkProvider throws if the publishable key is missing, so only mount it
  // when Clerk is actually configured. Without it the site still renders.
  return clerkEnabled ? <ClerkProvider>{document}</ClerkProvider> : document;
}
