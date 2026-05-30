# Unit Converter Global 🌍

SEO-programmatic unit conversion app — **Next.js 14 App Router**, ~30,000 URLs, 10 languages.

## Stack
- **Next.js 14** — App Router, ISR, static generation
- **TypeScript** — strict mode
- **Zero dependencies** — no UI library, pure CSS custom properties
- **Fonts** — Syne (display) + DM Mono (data) via Google Fonts

---

## Quick Start

```bash
npm install
npm run dev       # http://localhost:3000
npm run build     # Production build
npm start
```

Set your domain in `.env.local`:
```
NEXT_PUBLIC_BASE_URL=https://yourdomain.com
```

---

## URL Structure

```
/{lang}                                           → Home (popular conversions)
/{lang}/{category}                                → Category page
/{lang}/{category}/{from}/{to}                    → Conversion page
/{lang}/{category}/{from}/{to}/{region}           → Localized conversion
```

**Examples:**
```
/en/length/kilometer/mile/en-usa
/es/temperatura/celsius/fahrenheit/en-argentina
/fr/devise/eur/usd/en-france
/de/gewicht/kilogram/pound/en-deutschland
/pt/volume/liter/gallon-us/no-brasil
```

---

## Matrix Coverage

| Dimension | Count |
|-----------|-------|
| Languages | 10 (en, es, fr, de, pt, it, nl, ru, zh, ja) |
| Categories | 5 (Currency, Length, Weight, Temperature, Volume) |
| Units per category | 25 |
| Regions | 25 |
| Combinations (capped) | ~30,000 |

**Formula:** 10 × 5 × (25 × 6 targets) × 25 regions = 187,500 raw → sitemap caps at 30,000

---

## Adsterra Integration

### 1. Leaderboard Banner (728×90 or responsive)

Find these comments in `app/[lang]/[[...slug]]/page.tsx`:

```tsx
{/* ── Adsterra: Leaderboard top ──────────────────── */}
<div className="ad-slot ad-slot--leaderboard">
  {/* PASTE YOUR CODE HERE */}
</div>
```

Replace the comment with your Adsterra banner script tag.

### 2. Rectangle Banner (300×250)

```tsx
{/* ── Adsterra: Rectangle mid-page ──────────────── */}
<div className="ad-slot ad-slot--rectangle">
  {/* PASTE YOUR CODE HERE */}
</div>
```

### 3. Pop-Under (fires once per session)

Find this comment in the `ConversionView` component:

```tsx
{/* ── Adsterra: Pop-under ──────────────────────── */}
{/* <script async src="//your-adsterra-popunder-script.js"></script> */}
```

Uncomment and replace with your Adsterra pop-under code. It fires on the high-intent conversion pages only.

### 4. Footer Banner

```tsx
{/* ── Adsterra: Footer Banner ──────────────────── */}
<div className="ad-slot ad-slot--footer">
  {/* PASTE YOUR CODE HERE */}
</div>
```

> **Tip:** For maximum RPM, enable both Display banners and Pop-under from your Adsterra dashboard. The site's dark aesthetic pairs well with Adsterra's native ad format too.

---

## Performance (PageSpeed 98+)

- **No client JS** — fully server-rendered, zero hydration cost
- **Font preconnect** — `rel="preconnect"` to Google Fonts
- **Static generation** — key pages pre-rendered at build time
- **ISR** — conversion pages revalidate hourly
- **Immutable cache** — `/_next/static/` files cached for 1 year
- **No layout shift** — ad slots have fixed `min-height`
- **Compressed** — `compress: true` in next.config.js

Run `npx @next/bundle-analyzer` after adding `ANALYZE=true` to check bundle size.

---

## SEO Features

- **Canonical URLs** per language
- **hreflang** tags via Next.js `alternates`
- **JSON-LD** structured data on conversion pages (BreadcrumbList)
- **OpenGraph** metadata on all pages
- **sitemap.xml** — auto-generated, covers all 30k URLs
- **robots.txt** — open to all crawlers

---

## Adding More Content

### New unit
Add to the relevant array in `lib/config.ts`:
```ts
{ key:"new-unit", slug:"new-unit", symbol:"NU",
  label:{ en:"New Unit", es:"...", /* all 10 langs */ },
  toBase: v => v * FACTOR,
  fromBase: v => v / FACTOR,
},
```

### New language
1. Add to `SUPPORTED_LANGS` array
2. Add translations in `UI_STRINGS`
3. Add slugs in each `CATEGORIES` entry
4. Add labels in each unit's `label` object
5. Add labels in each `REGIONS` entry

### New region
Add to `REGIONS` array in `lib/config.ts`.

---

## Deployment

**Vercel (recommended):**
```bash
vercel --prod
```

**Self-hosted:**
```bash
npm run build
npm start
```

The sitemap is served at `/sitemap.xml` automatically by Next.js.

---

## License
MIT — build freely, monetize freely.
