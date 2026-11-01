import { Amiri, IBM_Plex_Sans_Arabic, Marcellus, Mulish } from "next/font/google";
import type { ReactNode } from "react";
import { JsonLd } from "@/components/json-ld";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { TopBar } from "@/components/top-bar";
import { organizationSchema } from "@/lib/seo";
import "@/app/globals.css";

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

// The header and footer are English on every page, so they keep `lang="en"`
// inside the Arabic document.
export function SiteShell({ lang, children }: { lang: "en" | "ar"; children: ReactNode }) {
  const arabic = lang === "ar";

  return (
    <html
      lang={lang}
      className={`${marcellus.variable} ${mulish.variable} ${amiri.variable} ${plexArabic.variable} antialiased`}
    >
      <body className="flex min-h-dvh flex-col">
        <div lang="en" className="contents">
          <a
            href="#main"
            className="sr-only focus:not-sr-only focus:absolute focus:z-60 focus:bg-white focus:p-3 focus:text-brand"
          >
            Skip to content
          </a>
          <JsonLd data={organizationSchema} />
          <TopBar />
          <SiteHeader />
        </div>
        <main
          id="main"
          dir={arabic ? "rtl" : undefined}
          className={arabic ? "flex-1 font-arabic-sans" : "flex-1"}
        >
          {children}
        </main>
        <div lang="en" className="contents">
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}
