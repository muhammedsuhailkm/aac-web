import type { Metadata, Viewport } from "next";
import { SiteShell } from "@/components/site-shell";
import { baseMetadata, siteViewport } from "@/lib/seo";

export const metadata: Metadata = baseMetadata;

export const viewport: Viewport = siteViewport;

export default function RootLayout({ children }: LayoutProps<"/">) {
  return <SiteShell lang="en">{children}</SiteShell>;
}
