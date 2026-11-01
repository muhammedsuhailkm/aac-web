import type { Metadata } from "next";
import { ArabicServices } from "@/components/arabic-services";
import { JsonLd } from "@/components/json-ld";
import { LanguageSwitch } from "@/components/language-switch";
import { PageHero } from "@/components/page-hero";
import { breadcrumbSchema, openGraphFor, servicesLanguages } from "@/lib/seo";
import { site } from "@/lib/site";
import heroImage from "@/public/images/qatar-government-services-support.webp";

export const metadata: Metadata = {
  title: { absolute: "تأسيس الشركات والخدمات الحكومية في قطر | الافلح" },
  description:
    "تأسيس الشركات والملكية الأجنبية، السجل التجاري والرخصة، العلاقات العامة والمعاملات الحكومية، شهادة عدم الممانعة من «ضريبة»، التدقيق والترجمة وفتح الحسابات البنكية في قطر.",
  alternates: { canonical: "/ar/services", languages: servicesLanguages },
  openGraph: openGraphFor("/ar/services", "ar_QA"),
};

export default function ArabicServicesPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema("الخدمات", "/ar/services", "الرئيسية")} />
      <PageHero
        crumb="الخدمات"
        homeLabel="الرئيسية"
        title="خدمات تأسيس الأعمال والشركات والخدمات المؤسسية في قطر"
        lead={site.arabicTagline}
        image={heroImage}
        imagePosition="object-[20%_16%]"
      >
        <LanguageSwitch active="ar" />
      </PageHero>
      <ArabicServices />
    </>
  );
}
