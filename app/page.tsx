import type { Metadata } from "next";
import Link from "next/link";
import {
  SUPPORTED_LANGS, CATEGORIES, UNITS_BY_CATEGORY,
  UI_STRINGS, type Lang,
} from "@/lib/config";

export const metadata: Metadata = {
  title: "Unit Converter Global",
  description: "Fast, accurate unit conversions in 10 languages",
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
