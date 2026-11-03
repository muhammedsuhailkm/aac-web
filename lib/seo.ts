import type { Metadata, Viewport } from "next";
import { site } from "@/lib/site";
import { allServices } from "@/lib/services";

export const organizationId = `${site.url}/#organization`;

export const shareImage = {
  url: "/opengraph-image.jpg",
  width: 1200,
  height: 630,
  alt: `${site.name}: business setup and corporate services in Qatar`,
};

export const baseMetadata: Metadata = {
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
  // Search Console property for https://www.alaflahbusinessconsultancy.com/
  verification: {
    google: "Un6o0nkrV353mTS3iXMtod3UHdydtYU9wkFIaUc4Q2Y",
  },
};

export const siteViewport: Viewport = {
  themeColor: "#0a5246",
};

// Next replaces a parent's `openGraph` rather than merging it, so every page
// has to restate these alongside its own URL.
export function openGraphFor(path: string, locale = "en_QA"): Metadata["openGraph"] {
  return {
    type: "website",
    siteName: site.name,
    locale,
    images: [shareImage],
    url: path,
  };
}

// Every page in the pair has to list both versions, including itself.
export const servicesLanguages = {
  en: `${site.url}/services`,
  ar: `${site.url}/ar/services`,
  "x-default": `${site.url}/services`,
};

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
      geo: {
        "@type": "GeoCoordinates",
        latitude: site.geo.latitude,
        longitude: site.geo.longitude,
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
      inLanguage: ["en", "ar"],
    },
  ],
};

export function breadcrumbSchema(name: string, path: string, homeName = "Home") {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: homeName, item: site.url },
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
