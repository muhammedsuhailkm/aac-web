import { ArrowRight } from "lucide-react";
import type { Metadata, Viewport } from "next";
import Link from "next/link";
import { SiteShell } from "@/components/site-shell";
import { baseMetadata, siteViewport } from "@/lib/seo";

export const metadata: Metadata = {
  ...baseMetadata,
  title: "Page not found | Al Aflah",
};

export const viewport: Viewport = siteViewport;

export default function GlobalNotFound() {
  return (
    <SiteShell lang="en">
      <section className="site-container py-24 md:py-32">
        <p className="eyebrow text-gold-ink">404</p>
        <h1 className="heading-xl mt-3 text-brand">We couldn&apos;t find that page</h1>
        <p className="mt-4 max-w-lg text-lg text-body">
          The page may have moved. Our services page is a good place to pick up from.
        </p>
        <Link href="/services" className="btn btn-brand mt-8">
          View our services
          <ArrowRight aria-hidden="true" className="size-4" />
        </Link>
      </section>
    </SiteShell>
  );
}
