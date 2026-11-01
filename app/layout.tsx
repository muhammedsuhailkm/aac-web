import type { Metadata, Viewport } from "next";
import { Amiri, IBM_Plex_Sans_Arabic, Marcellus, Mulish } from "next/font/google";
import { JsonLd } from "@/components/json-ld";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { TopBar } from "@/components/top-bar";
import { organizationSchema, shareImage } from "@/lib/seo";
import { site } from "@/lib/site";
import "./globals.css";

const marcellus = Marcellus({
  variable: "--font-marcellus",
  subsets: ["latin"],
  weight: "400",
});

const mulish = Mulish({
  variable: "--font-mulish",
  subsets: ["latin"],
});

const amiri = Amiri({
  variable: "--font-amiri",
  subsets: ["arabic"],
  weight: "400",
  preload: false,
});

const plexArabic = IBM_Plex_Sans_Arabic({
  variable: "--font-plex-arabic",
  subsets: ["arabic"],
  weight: ["400", "700"],
  preload: false,
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Business Setup & PRO Services in Qatar | Al Aflah",
    template: "%s | Al Aflah",
  },
  description:
    "Set up and run your company in Qatar with Al Aflah: company formation, Commercial Registration, PRO services, foreign ownership guidance and WPS support.",
  applicationName: site.name,
  twitter: {
    card: "summary_large_image",
    images: [shareImage],
  },
  formatDetection: {
    telephone: false,
  },
};

export const viewport: Viewport = {
  themeColor: "#0a5246",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${marcellus.variable} ${mulish.variable} ${amiri.variable} ${plexArabic.variable} antialiased`}
    >
      <body className="flex min-h-dvh flex-col">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:z-60 focus:bg-white focus:p-3 focus:text-brand"
        >
          Skip to content
        </a>
        <JsonLd data={organizationSchema} />
        <TopBar />
        <SiteHeader />
        <main id="main" className="flex-1">
          {children}
        </main>
        <SiteFooter />
      </body>
    </html>
  );
}
