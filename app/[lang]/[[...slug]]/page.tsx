// app/[lang]/[[...slug]]/page.tsx
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import {
  SUPPORTED_LANGS, CATEGORIES, UNITS_BY_CATEGORY, REGIONS,
  UI_STRINGS, getCategoryBySlug, getUnitBySlug, getRegionBySlug,
  convertValue, buildFormula, type Lang,
} from "@/lib/config";

// ─── Params ───────────────────────────────────────────────────────────────────
interface Params {
  lang: string;
  slug?: string[];
}

// ─── Static params (sampled for build speed; sitemap covers all) ──────────────
export async function generateStaticParams() {
  const params: Params[] = [];
  for (const lang of SUPPORTED_LANGS) {
    // Root page for each language
    params.push({ lang, slug: [] });
    // One sample page per category
    for (const cat of CATEGORIES) {
      const catSlug = cat.slug[lang];
      const units = UNITS_BY_CATEGORY[cat.key];
      params.push({ lang, slug: [catSlug] });
      // Sample: first unit pair × first region
      if (units.length >= 2) {
        params.push({
          lang,
          slug: [catSlug, units[0].slug, units[1].slug, REGIONS[0].slug],
        });
      }
    }
  }
  return params;
}

// ─── Metadata ────────────────────────────────────────────────────────────────
export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const lang = (SUPPORTED_LANGS as readonly string[]).includes(params.lang)
    ? (params.lang as Lang)
    : "en";
  const ui = UI_STRINGS[lang];
  const slug = params.slug ?? [];

  if (slug.length === 0) {
    return {
      title: ui.title,
      description: ui.subtitle,
      alternates: { canonical: `/${lang}` },
    };
  }

  const cat = slug[0] ? getCategoryBySlug(slug[0], lang) : undefined;
  if (!cat) return { title: ui.title };

  const fromUnit = slug[1] ? getUnitBySlug(slug[1], cat.key) : undefined;
  const toUnit   = slug[2] ? getUnitBySlug(slug[2], cat.key) : undefined;
  const region   = slug[3] ? getRegionBySlug(slug[3]) : undefined;

  if (fromUnit && toUnit) {
    const regionLabel = region ? ` ${region.label[lang]}` : "";
    const title = `${fromUnit.label[lang]} ${ui.to} ${toUnit.label[lang]}${regionLabel} | ${ui.title}`;
    const description = `${ui.convert} ${fromUnit.label[lang]} ${ui.to} ${toUnit.label[lang]}${regionLabel}. ${buildFormula(fromUnit, toUnit, lang)}.`;
    return {
      title,
      description,
      alternates: { canonical: `/${lang}/${slug.join("/")}` },
      openGraph: { title, description },
    };
  }

  const catLabel = cat.label[lang];
  return {
    title: `${catLabel} ${ui.title}`,
    description: `${ui.popularConversions} — ${catLabel}`,
  };
}

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function Page({ params }: { params: Params }) {
  const lang = (SUPPORTED_LANGS as readonly string[]).includes(params.lang)
    ? (params.lang as Lang)
    : null;

  if (!lang) notFound();

  const ui = UI_STRINGS[lang];
  const slug = params.slug ?? [];

  // ── Root: show all categories ──
  if (slug.length === 0) {
    return <HomeView lang={lang} ui={ui} />;
  }

  // ── Category page ──
  const cat = getCategoryBySlug(slug[0], lang);
  if (!cat) notFound();

  if (slug.length <= 1) {
    return <CategoryView lang={lang} ui={ui} cat={cat} />;
  }

  // ── Conversion page ──
  const fromUnit = getUnitBySlug(slug[1], cat.key);
  const toUnit   = slug[2] ? getUnitBySlug(slug[2], cat.key) : undefined;

  if (!fromUnit || !toUnit) notFound();

  const region = slug[3] ? getRegionBySlug(slug[3]) : undefined;

  return (
    <ConversionView
      lang={lang}
      ui={ui}
      cat={cat}
      fromUnit={fromUnit}
      toUnit={toUnit}
      region={region}
      defaultValue={1}
    />
  );
}

// ─── Home View ────────────────────────────────────────────────────────────────
function HomeView({ lang, ui }: { lang: Lang; ui: typeof UI_STRINGS[Lang] }) {
  return (
    <PageShell lang={lang}>
      {/* ── Adsterra: Leaderboard top ─────────────────────────────────────
          PASTE YOUR ADSTERRA BANNER CODE BELOW:
      ────────────────────────────────────────────────────────────────────── */}
      <div className="ad-slot ad-slot--leaderboard" aria-label="Advertisement">
        {/* <script async src="//your-adsterra-leaderboard-script.js"></script> */}
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

      {/* Sample popular conversions across all categories */}
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

      {/* ── Adsterra: Rectangle mid-page ──────────────────────────────────
          PASTE YOUR ADSTERRA 300x250 BANNER CODE BELOW:
      ────────────────────────────────────────────────────────────────────── */}
      <div className="ad-slot ad-slot--rectangle" aria-label="Advertisement">
        {/* <script async src="//your-adsterra-rectangle-script.js"></script> */}
      </div>
    </PageShell>
  );
}

// ─── Category View ────────────────────────────────────────────────────────────
function CategoryView({
  lang, ui, cat,
}: {
  lang: Lang;
  ui: typeof UI_STRINGS[Lang];
  cat: ReturnType<typeof getCategoryBySlug> & {};
}) {
  const units = UNITS_BY_CATEGORY[cat.key];
  // Build popular pairs (first 6 units × all combinations)
  const pairs: [typeof units[0], typeof units[0]][] = [];
  for (let i = 0; i < Math.min(6, units.length); i++) {
    for (let j = 0; j < Math.min(6, units.length); j++) {
      if (i !== j) pairs.push([units[i], units[j]]);
    }
  }

  return (
    <PageShell lang={lang}>
      {/* ── Adsterra: Leaderboard ──────────────────────────────────────────
      ─────────────────────────────────────────────────────────────────────── */}
      <div className="ad-slot ad-slot--leaderboard" aria-label="Advertisement">
        {/* <script async src="//your-adsterra-leaderboard-script.js"></script> */}
      </div>

      <div className="hero">
        <p className="hero-category-pill">{cat.icon} {cat.label[lang]}</p>
        <h1>
          <span className="highlight">{cat.label[lang]}</span>{" "}
          {ui.title}
        </h1>
        <p className="hero-subtitle">{ui.popularConversions}</p>
      </div>

      <div className="popular-grid">
        {pairs.map(([from, to]) => {
          const result = convertValue(1, from, to, cat);
          const rounded = parseFloat(result.toPrecision(5));
          return (
            <Link
              key={`${from.key}-${to.key}`}
              href={`/${lang}/${cat.slug[lang]}/${from.slug}/${to.slug}`}
              className="popular-card"
            >
              <div className="popular-card-from">
                1 {from.label[lang]} ({from.symbol})
              </div>
              <div className="popular-card-to">
                <span className="popular-card-arrow">→</span>
                {rounded} {to.symbol}
              </div>
            </Link>
          );
        })}
      </div>

      <p className="section-title">
        {ui.from} <span>{cat.label[lang]}</span>
      </p>
      <div className="popular-grid">
        {units.map(u => (
          <Link
            key={u.key}
            href={`/${lang}/${cat.slug[lang]}/${u.slug}/${units.find(x => x.key !== u.key)?.slug ?? ""}`}
            className="popular-card"
          >
            <div className="popular-card-from">{u.symbol}</div>
            <div className="popular-card-to">{u.label[lang]}</div>
          </Link>
        ))}
      </div>
    </PageShell>
  );
}

// ─── Conversion View ──────────────────────────────────────────────────────────
function ConversionView({
  lang, ui, cat, fromUnit, toUnit, region, defaultValue,
}: {
  lang: Lang;
  ui: typeof UI_STRINGS[Lang];
  cat: NonNullable<ReturnType<typeof getCategoryBySlug>>;
  fromUnit: NonNullable<ReturnType<typeof getUnitBySlug>>;
  toUnit: NonNullable<ReturnType<typeof getUnitBySlug>>;
  region?: ReturnType<typeof getRegionBySlug>;
  defaultValue: number;
}) {
  const result = convertValue(defaultValue, fromUnit, toUnit, cat);
  const resultRounded = parseFloat(result.toPrecision(8));
  const formula = buildFormula(fromUnit, toUnit, lang);
  const regionLabel = region ? ` ${region.label[lang]}` : "";

  // Build related conversions (same from unit, different targets)
  const units = UNITS_BY_CATEGORY[cat.key];
  const related = units
    .filter(u => u.key !== fromUnit.key && u.key !== toUnit.key)
    .slice(0, 6);

  // Build breadcrumb
  const crumbs = [
    { label: ui.title, href: `/${lang}` },
    { label: cat.label[lang], href: `/${lang}/${cat.slug[lang]}` },
    { label: `${fromUnit.label[lang]} → ${toUnit.label[lang]}`, href: "#" },
  ];

  return (
    <PageShell lang={lang}>
      {/* Breadcrumb for SEO */}
      <nav aria-label="breadcrumb" style={{ marginBottom: "1.25rem" }}>
        <ol style={{ display: "flex", gap: "0.5rem", fontSize: "0.72rem", fontFamily: "var(--font-mono)", color: "var(--muted)", listStyle: "none", flexWrap: "wrap" }}>
          {crumbs.map((c, i) => (
            <li key={i} style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
              {i > 0 && <span>/</span>}
              {c.href === "#"
                ? <span style={{ color: "var(--text)" }}>{c.label}</span>
                : <Link href={c.href} style={{ color: "inherit", textDecoration: "none" }}>{c.label}</Link>
              }
            </li>
          ))}
        </ol>
      </nav>

      {/* ── Adsterra: Leaderboard top ─────────────────────────────────────
      ─────────────────────────────────────────────────────────────────────── */}
      <div className="ad-slot ad-slot--leaderboard" aria-label="Advertisement">
        {/* <script async src="//your-adsterra-leaderboard-script.js"></script> */}
      </div>

      {/* ── Adsterra: Pop-under ───────────────────────────────────────────
          PASTE YOUR ADSTERRA POP-UNDER SCRIPT HERE (loads once per session):
      ────────────────────────────────────────────────────────────────────── */}
      {/* <script async src="//your-adsterra-popunder-script.js"></script> */}

      <div className="hero">
        {region && <div className="region-badge">📍 {region.label[lang]}</div>}
        <p className="hero-category-pill">{cat.icon} {cat.label[lang]}</p>
        <h1>
          <span className="highlight">{fromUnit.label[lang]}</span>
          {" "}{ui.to}{" "}
          {toUnit.label[lang]}
          {regionLabel}
        </h1>
        <p className="hero-subtitle">
          {formula}
        </p>
      </div>

      {/* ── Main Converter Card ── */}
      <div className="converter-card">
        <div className="converter-grid">
          <div>
            <div className="unit-label">{ui.from}</div>
            <div className="unit-display">
              <span>{defaultValue} </span>
              <span className="unit-symbol">{fromUnit.symbol}</span>
            </div>
            <div style={{ fontSize: "0.78rem", color: "var(--muted)", marginTop: "0.2rem" }}>
              {fromUnit.label[lang]}
            </div>
          </div>

          <div className="converter-arrow">⟶</div>

          <div>
            <div className="unit-label">{ui.to}</div>
            <div className="result-block">
              <div className="result-value">{resultRounded}</div>
              <div className="result-unit">{toUnit.symbol} — {toUnit.label[lang]}</div>
              <div className="formula-line">{ui.formula}: {formula}</div>
            </div>
          </div>
        </div>

        {/* Common conversion table */}
        <table style={{ width: "100%", borderCollapse: "collapse", fontFamily: "var(--font-mono)", fontSize: "0.78rem" }}>
          <thead>
            <tr style={{ borderBottom: "1px solid var(--border)" }}>
              <th style={{ textAlign: "left", padding: "0.5rem 0", color: "var(--muted)", fontWeight: 400 }}>{fromUnit.symbol}</th>
              <th style={{ textAlign: "right", padding: "0.5rem 0", color: "var(--muted)", fontWeight: 400 }}>{toUnit.symbol}</th>
            </tr>
          </thead>
          <tbody>
            {[0.01, 0.1, 0.5, 1, 5, 10, 25, 50, 100, 500, 1000].map(v => {
              const r = convertValue(v, fromUnit, toUnit, cat);
              return (
                <tr key={v} style={{ borderBottom: "1px solid var(--border)" }}>
                  <td style={{ padding: "0.4rem 0", color: "var(--text)" }}>{v}</td>
                  <td style={{ textAlign: "right", padding: "0.4rem 0", color: "var(--accent)" }}>
                    {parseFloat(r.toPrecision(6))}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* ── Adsterra: Rectangle mid-page ──────────────────────────────────
      ─────────────────────────────────────────────────────────────────────── */}
      <div className="ad-slot ad-slot--rectangle" aria-label="Advertisement">
        {/* <script async src="//your-adsterra-rectangle-script.js"></script> */}
      </div>

      {/* Related conversions */}
      <p className="section-title">
        {ui.from} <span>{fromUnit.label[lang]}</span>
      </p>
      <div className="popular-grid">
        {related.map(u => {
          const r = convertValue(1, fromUnit, u, cat);
          return (
            <Link
              key={u.key}
              href={`/${lang}/${cat.slug[lang]}/${fromUnit.slug}/${u.slug}${region ? `/${region.slug}` : ""}`}
              className="popular-card"
            >
              <div className="popular-card-from">1 {fromUnit.symbol}</div>
              <div className="popular-card-to">
                <span className="popular-card-arrow">→</span>
                {parseFloat(r.toPrecision(5))} {u.symbol}
                <span style={{ fontSize: "0.75rem", color: "var(--muted)", display: "block" }}>{u.label[lang]}</span>
              </div>
            </Link>
          );
        })}
      </div>

      {/* Region pages for this conversion */}
      {!region && (
        <>
          <p className="section-title"><span>{ui.in}</span> the World</p>
          <div className="popular-grid">
            {REGIONS.slice(0, 10).map(r => (
              <Link
                key={r.key}
                href={`/${lang}/${cat.slug[lang]}/${fromUnit.slug}/${toUnit.slug}/${r.slug}`}
                className="popular-card"
              >
                <div className="popular-card-to">
                  {fromUnit.label[lang]} → {toUnit.label[lang]}
                </div>
                <div className="popular-card-from" style={{ marginTop: "0.2rem" }}>
                  {r.label[lang]}
                </div>
              </Link>
            ))}
          </div>
        </>
      )}

      {/* ── Adsterra: Footer Banner ────────────────────────────────────────
      ─────────────────────────────────────────────────────────────────────── */}
      <div className="ad-slot ad-slot--footer" aria-label="Advertisement">
        {/* <script async src="//your-adsterra-footer-script.js"></script> */}
      </div>

      {/* Structured data for rich snippets */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": `${fromUnit.label[lang]} to ${toUnit.label[lang]}`,
            "description": formula,
            "breadcrumb": {
              "@type": "BreadcrumbList",
              "itemListElement": crumbs.map((c, i) => ({
                "@type": "ListItem",
                "position": i + 1,
                "name": c.label,
              })),
            },
          }),
        }}
      />
    </PageShell>
  );
}

// ─── Shell ────────────────────────────────────────────────────────────────────
function PageShell({ lang, children }: { lang: Lang; children: React.ReactNode }) {
  const ui = UI_STRINGS[lang];
  return (
    <div className="page-wrap">
      <header className="site-header">
        <Link href={`/${lang}`} className="site-logo">⟳ {ui.title}</Link>
        <span className="site-tagline">
          {CATEGORIES.map(c => c.slug[lang]).join(" · ")}
        </span>
      </header>
      <main>{children}</main>
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
