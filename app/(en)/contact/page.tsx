import { ArrowRight, Mail, MapPin, Phone, type LucideIcon } from "lucide-react";
import type { Metadata } from "next";
import type { ReactNode } from "react";
import { CopyButton } from "@/components/copy-button";
import { EnquiryForm } from "@/components/enquiry-form";
import { JsonLd } from "@/components/json-ld";
import { PageHero } from "@/components/page-hero";
import { breadcrumbSchema, openGraphFor } from "@/lib/seo";
import { serviceOptions } from "@/lib/services";
import { site } from "@/lib/site";
import heroImage from "@/public/images/talk-to-business-advisor-doha.webp";

export const metadata: Metadata = {
  title: "Contact Our Business Consultants in Doha",
  description:
    "Talk to Al Aflah about company setup and PRO services in Qatar. Call +974 3160 0110 or visit our office on Old Airport Street, Doha.",
  alternates: { canonical: "/contact" },
  openGraph: openGraphFor("/contact"),
};

function ContactCard({
  icon: Icon,
  title,
  children,
}: {
  icon: LucideIcon;
  title: string;
  children: ReactNode;
}) {
  return (
    <div className="flex gap-4 rounded border border-line bg-white p-5 md:p-6">
      <span className="grid size-11 shrink-0 place-items-center rounded-full bg-brand text-white">
        <Icon aria-hidden="true" strokeWidth={1.75} className="size-5" />
      </span>
      <div className="min-w-0">
        <h2 className="eyebrow font-sans text-gold-ink">{title}</h2>
        {children}
      </div>
    </div>
  );
}

const contactValue = "font-bold text-ink hover:text-brand";

export default function ContactPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema("Contact", "/contact")} />
      <PageHero
        crumb="Contact"
        title="Contact our business consultants in Doha"
        lead="Whether you're starting a new business or expanding an existing one, we're here for every step of the way."
        image={heroImage}
        imagePosition="object-[50%_20%]"
      />

      <div className="site-container grid items-start gap-8 py-20 md:py-24 lg:grid-cols-[0.85fr_1fr] lg:gap-10">
        <div className="grid gap-4">
          <ContactCard icon={Phone} title="Call us">
            <ul className="mt-1.5 space-y-1.5">
              {site.phones.map((phone) => (
                <li key={phone.href} className="flex flex-wrap items-center gap-2">
                  <a href={phone.href} className={contactValue}>
                    {phone.display}
                  </a>
                  <CopyButton value={phone.display} />
                </li>
              ))}
            </ul>
          </ContactCard>

          <ContactCard icon={Mail} title="Email us">
            <ul className="mt-1.5 space-y-1.5">
              {site.emails.map((email) => (
                <li key={email} className="flex flex-wrap items-center gap-2">
                  <a href={`mailto:${email}`} className={`${contactValue} break-all`}>
                    {email}
                  </a>
                  <CopyButton value={email} />
                </li>
              ))}
            </ul>
          </ContactCard>

          <ContactCard icon={MapPin} title="Visit our office">
            <address className="mt-1.5 text-[0.9375rem] leading-relaxed text-ink not-italic">
              {site.address.lines.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </address>
          </ContactCard>

          <div className="rounded bg-brand-deep p-6 text-white [background-image:linear-gradient(rgb(255_255_255/0.03)_1px,transparent_1px),linear-gradient(90deg,rgb(255_255_255/0.03)_1px,transparent_1px)] [background-size:32px_32px]">
            <p className="flex items-center gap-3 font-display text-2xl">
              <MapPin aria-hidden="true" strokeWidth={1.5} className="size-5 text-gold" />
              Old Airport, Doha
            </p>
            <p className="mt-3 text-sm text-white/75">Zone 45 · Street 840 · Building 80</p>
            <a
              href={site.mapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-gold mt-4"
            >
              Open in Google Maps
              <ArrowRight aria-hidden="true" className="size-4" />
            </a>
            <p className="mt-4 text-[0.8125rem] text-white/75">
              Commercial Registration No. {site.commercialRegistration}
            </p>
          </div>
        </div>

        <section
          id="enquiry"
          aria-labelledby="enquiry-title"
          className="relative rounded bg-mist p-6 md:p-9"
        >
          <p className="eyebrow text-gold-ink">Send an enquiry</p>
          <h2 id="enquiry-title" className="mt-3 text-[2.25rem] leading-tight text-brand">
            Tell us what you need
          </h2>
          <p className="mt-2 text-body">
            We&apos;ll reply with the requirements, timeline and a clear quote.
          </p>
          <EnquiryForm services={serviceOptions} />
        </section>
      </div>
    </>
  );
}
