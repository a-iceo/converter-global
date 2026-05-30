// app/sitemap.ts
import type { MetadataRoute } from "next";
import { allCombinations, SUPPORTED_LANGS, CATEGORIES } from "@/lib/config";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL ?? "https://unitconverter.global";

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];
  const now = new Date();

  // ── Root pages per language ──
  for (const lang of SUPPORTED_LANGS) {
    entries.push({
      url: `${BASE_URL}/${lang}`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1.0,
    });

    // Category pages
    for (const cat of CATEGORIES) {
      entries.push({
        url: `${BASE_URL}/${lang}/${cat.slug[lang]}`,
        lastModified: now,
        changeFrequency: "weekly",
        priority: 0.9,
      });
    }
  }

  // ─── All conversion combos (~30k) ──
  let count = 0;
  const combinations = Array.from(allCombinations());
  for (const combo of combinations) {
    entries.push({
      url: `${BASE_URL}/${combo.lang}/${combo.categorySlug}/${combo.fromUnitSlug}/${combo.toUnitSlug}/${combo.regionSlug}`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.6,
    });
    count++;
    // Safety cap — adjust if needed
    if (count >= 30_000) break;
  }

  return entries;
}
