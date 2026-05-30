import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  title: "Unit Converter Global",
  description: "Fast, accurate unit conversions in 10 languages",
  verification: {
    google: "bYtU1NUr1KSo1e0UBMcxEKNFAY9YqmgVFlWWg05kxF0",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Mono:wght@400;500&family=Syne:wght@400;600;700;800&display=swap"
          rel="stylesheet"
        />
        {/* Adsterra Social Bar */}
        <Script
          src="https://pl29594822.effectivecpmnetwork.com/db/7e/91/db7e9195b032e7b8397e2a8601cbd164.js"
          strategy="afterInteractive"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
