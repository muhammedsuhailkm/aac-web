import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

// Update when page content changes: search engines only trust an accurate lastmod.
const lastModified = "2026-10-31";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: site.url, lastModified },
    { url: `${site.url}/services`, lastModified },
    { url: `${site.url}/contact`, lastModified },
  ];
}
