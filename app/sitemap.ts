import type { MetadataRoute } from "next";
import { servicesLanguages } from "@/lib/seo";
import { site } from "@/lib/site";

// Update when page content changes: search engines only trust an accurate lastmod.
const lastModified = "2026-11-01";

export default function sitemap(): MetadataRoute.Sitemap {
  const alternates = { languages: servicesLanguages };

  return [
    { url: site.url, lastModified },
    { url: `${site.url}/services`, lastModified, alternates },
    { url: `${site.url}/ar/services`, lastModified, alternates },
    { url: `${site.url}/contact`, lastModified },
  ];
}
