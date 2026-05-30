import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import {
  SUPPORTED_LANGS, CATEGORIES, UNITS_BY_CATEGORY,
  UI_STRINGS, type Lang,
} from "@/lib/config";

export const metadata: Metadata = {
  title: "Unit Converter Global",
  description: "Fast, accurate unit conversions in 10 languages",
  verification: {
    google: "bYtU1NUr1KSo1e0UBMcxEKNFAY9YqmgVFlWWg05kxF0",
  },
};

export default function RootPage() {
  const lang: Lang = "en";
  const ui = UI_STRINGS[lang];
  
  return (
    <div className="page-wrap">
      <header className="site-header">
        <Link href={`/${lang}`} className="site-logo">⟳ {ui.title}</Link>
        <span className="site-tagline">
          {CATEGORIES.map(c => c.slug[lang]).join(" · ")}
        </span>
      </header>
      <main>
        <div className="ad-slot ad-slot--leaderboard" aria-label="Advertisement">
          <Script
            data-cfasync="false"
            src="https://pl29594823.effectivecpmnetwork.com/edfbf32ab62eebc9b7cea323868d7ace/invoke.js"
            strategy="afterInteractive"
          />
          <div id="container-edfbf32ab62eebc9b7cea323868d7ace"></div>
        </div>

        <div className="hero">
          <p className="hero-category-pill">🌍 {SUPPORTED_LANGS.length} languages · {CATEGORIES.length} categories</p>
          <h1>{ui.title.split(" ").map((w, i) =>
            i === 0 ? <span key={i} className="highlight">{w} </span> : w + " "
          )}</h1>
          <p className="hero-subtitle">{ui.subtitle}</p>
        </div>

        <p className="section-title"><span>{ui.popularConversions}</span></p>
        <div className="cat-grid">
          {CATEGORIES.map(cat => (
            <Link key={cat.key} href={`/${lang}/${cat.slug[lang]}`} className="cat-card">
              <span className="cat-icon">{cat.icon}</span>
              {cat.label[lang]}
            </Link>
          ))}
        </div>

        <div className="ad-slot ad-slot--rectangle" aria-label="Advertisement" style={{ textAlign: "center" }}>
          <Script id="adsterra-300x250-options" strategy="afterInteractive">{`
            window.atOptions = {
              key: "6914b26119906a83ee39c653659a84d5",
              format: "iframe",
              height: 250,
              width: 300,
              params: {}
            };
          `}</Script>
          <Script
            src="https://www.highperformanceformat.com/6914b26119906a83ee39c653659a84d5/invoke.js"
            strategy="afterInteractive"
          />
        </div>

        <div className="popular-grid">
          {CATEGORIES.flatMap(cat => {
            const units = UNITS_BY_CATEGORY[cat.key];
            return [
              [units[0], units[1]],
              [units[1], units[2]],
              [units[0], units[2]],
            ].map(([from, to]) => (
              <Link
                key={`${cat.key}-${from.key}-${to.key}`}
                href={`/${lang}/${cat.slug[lang]}/${from.slug}/${to.slug}`}
                className="popular-card"
              >
                <div className="popular-card-from">{cat.icon} {cat.label[lang]}</div>
                <div className="popular-card-to">
                  {from.label[lang]}
                  <span className="popular-card-arrow">→</span>
                  {to.label[lang]}
                </div>
              </Link>
            ));
          })}
        </div>
      </main>
      <footer className="site-footer">
        <span>© {new Date().getFullYear()} Unit Converter Global</span>
        <span>
          {SUPPORTED_LANGS.map(l => (
            <Link
              key={l}
              href={`/${l}`}
              style={{ marginLeft: "0.75rem", color: l === lang ? "var(--accent)" : "inherit", textDecoration: "none" }}
            >
              {l.toUpperCase()}
            </Link>
          ))}
        </span>
      </footer>
    </div>
  );
}
