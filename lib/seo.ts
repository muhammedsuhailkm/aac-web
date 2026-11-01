import type { Metadata } from "next";
import { site } from "@/lib/site";
import { allServices } from "@/lib/services";

export const organizationId = `${site.url}/#organization`;

export const shareImage = "/opengraph-image.jpg";

// Next replaces a parent's `openGraph` rather than merging it, so every page
// has to restate these alongside its own URL.
export function openGraphFor(path: string): Metadata["openGraph"] {
  return {
    type: "website",
    siteName: site.name,
    locale: "en_QA",
    images: [shareImage],
    url: path,
  };
}

export const organizationSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ProfessionalService",
      "@id": organizationId,
      name: site.name,
      legalName: site.legalName,
      alternateName: site.arabicName,
      description: site.summary,
      url: site.url,
      logo: `${site.url}/brand/logo-mark.svg`,
      image: `${site.url}/opengraph-image.jpg`,
      telephone: site.phones[0].display,
      email: site.emails[0],
      identifier: {
        "@type": "PropertyValue",
        name: "Commercial Registration",
        value: site.commercialRegistration,
      },
      address: {
        "@type": "PostalAddress",
        streetAddress: site.address.street,
        addressLocality: site.address.locality,
        addressCountry: site.address.country,
      },
      hasMap: site.mapUrl,
      areaServed: { "@type": "Country", name: "Qatar" },
      knowsLanguage: ["en", "ar"],
      contactPoint: site.phones.map((phone) => ({
        "@type": "ContactPoint",
        telephone: phone.display,
        contactType: "customer service",
        areaServed: "QA",
        availableLanguage: ["English", "Arabic"],
      })),
    },
    {
      "@type": "WebSite",
      "@id": `${site.url}/#website`,
      url: site.url,
      name: site.name,
      publisher: { "@id": organizationId },
      inLanguage: "en",
    },
  ],
};

export function breadcrumbSchema(name: string, path: string) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: site.url },
      { "@type": "ListItem", position: 2, name, item: `${site.url}${path}` },
    ],
  };
}

export const servicesSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Business setup and corporate services in Qatar",
  itemListElement: allServices.map((service, index) => ({
    "@type": "ListItem",
    position: index + 1,
    item: {
      "@type": "Service",
      "@id": `${site.url}/services#${service.id}`,
      name: service.name,
      description: service.description,
      url: `${site.url}/services#${service.id}`,
      provider: { "@id": organizationId },
      areaServed: { "@type": "Country", name: "Qatar" },
    },
  })),
};
