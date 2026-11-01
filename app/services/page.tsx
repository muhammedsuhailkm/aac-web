import { ArrowRight } from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArabicServices } from "@/components/arabic-services";
import { JsonLd } from "@/components/json-ld";
import { LanguagePanel, LanguageSwitch } from "@/components/language-switch";
import { PageHero } from "@/components/page-hero";
import { Stripes } from "@/components/stripes";
import { breadcrumbSchema, openGraphFor, servicesSchema } from "@/lib/seo";
import { setupServices, supportServices, type Service } from "@/lib/services";
import { site } from "@/lib/site";
import formationImage from "@/public/images/company-formation-qatar-meeting.webp";
import supportImage from "@/public/images/corporate-support-team-handshake.webp";
import heroImage from "@/public/images/qatar-government-services-support.webp";

export const metadata: Metadata = {
  title: "Company Formation, CR & PRO Services in Qatar",
  description:
    "Company formation, 100% foreign ownership guidance, Commercial Registration, PRO services, Dhareeba NOC, Hukoomi, WPS, audit and translation support in Qatar.",
  alternates: { canonical: "/services" },
  openGraph: openGraphFor("/services"),
};

const formationSteps = [
  "Documentation",
  "Applications",
  "Registrations",
  "Coordination with relevant authorities",
];

function ServiceCard({ service }: { service: Service }) {
  const Icon = service.icon;
  return (
    <article id={service.id} className="rounded border border-line bg-white p-7">
      <span className="grid size-15 place-items-center rounded-full bg-cream">
        <Icon aria-hidden="true" strokeWidth={1.75} className="size-7 text-brand" />
      </span>
      <h3 className="mt-3 text-2xl text-brand">{service.name}</h3>
      <p className="mt-3 text-[0.9375rem] leading-relaxed text-body">{service.description}</p>
    </article>
  );
}

function EnglishServices() {
  const [formation, ...otherSetupServices] = setupServices;
  const FormationIcon = formation.icon;

  return (
    <>
      <PageHero
        crumb="Services"
        title="Our services in Qatar"
        lead="Business setup, government liaison and day-to-day corporate support for companies of every size in Qatar."
        image={heroImage}
        imagePosition="object-[20%_16%]"
      >
        <LanguageSwitch />
      </PageHero>

      <section className="site-container py-20 md:py-24">
        <p className="eyebrow text-gold-ink">Business setup &amp; corporate services</p>
        <h2 className="heading-xl mt-3 max-w-2xl text-brand">
          Everything you need to open and register your company
        </h2>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          <article
            id={formation.id}
            className="grid gap-6 rounded bg-brand p-7 text-white sm:col-span-2 md:grid-cols-[1fr_0.85fr]"
          >
            <div>
              <span className="grid size-15 place-items-center rounded-full bg-white/12">
                <FormationIcon aria-hidden="true" strokeWidth={1.75} className="size-7 text-gold" />
              </span>
              <h3 className="mt-4 text-[1.875rem]">{formation.name}</h3>
              <p className="mt-3 text-[0.9375rem] leading-relaxed text-white/75">
                {formation.description}
              </p>
              <ul className="mt-5 space-y-2.5 text-[0.9375rem]">
                {formationSteps.map((step) => (
                  <li key={step} className="flex items-center gap-2.5">
                    <span aria-hidden="true" className="size-1.5 rotate-45 bg-gold" />
                    {step}
                  </li>
                ))}
              </ul>
            </div>
            <Image
              src={formationImage}
              alt="Business consultants reviewing company formation documents together"
              sizes="(min-width: 1024px) 320px, (min-width: 768px) 40vw, 100vw"
              placeholder="blur"
              className="aspect-[4/3] size-full rounded object-cover md:aspect-auto"
            />
          </article>

          {otherSetupServices.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}

          <div
            aria-hidden="true"
            className="relative hidden min-h-40 overflow-hidden rounded lg:block"
          >
            <Stripes className="absolute inset-0 size-full" />
          </div>
        </div>
      </section>

      <section className="bg-mist">
        <div className="site-container grid gap-12 py-20 md:py-24 lg:grid-cols-[0.75fr_1fr] lg:gap-14">
          <div>
            <p className="eyebrow text-gold-ink">Business support services</p>
            <h2 className="heading-xl mt-3 text-brand">
              Professional support for your day-to-day business needs
            </h2>
            <p className="mt-5 leading-[1.75] text-body">
              Running a business involves more than registration and licensing. Government
              procedures, banking, compliance and paperwork take time. We keep them moving so you
              don&apos;t have to.
            </p>
            <Image
              src={supportImage}
              alt="A corporate team shaking hands across a meeting table"
              sizes="(min-width: 1024px) 460px, 100vw"
              placeholder="blur"
              className="mt-7 aspect-[16/9] w-full rounded object-cover object-bottom"
            />
          </div>
          <ul className="border-t border-line">
            {supportServices.map(({ id, name, description, icon: Icon }) => (
              <li
                key={id}
                id={id}
                className="grid grid-cols-[3rem_1fr] gap-4 border-b border-line py-6 sm:grid-cols-[3.5rem_1fr]"
              >
                <Icon
                  aria-hidden="true"
                  strokeWidth={1.5}
                  className="mx-auto mt-1 size-8 text-gold-ink"
                />
                <div>
                  <h3 className="text-[1.375rem] text-brand">{name}</h3>
                  <p className="mt-1.5 text-[0.9375rem] leading-relaxed text-body">{description}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="relative isolate overflow-hidden bg-brand text-white">
        <Stripes
          accent={false}
          lineClassName="stroke-white/5"
          className="absolute top-0 right-0 -z-10 h-full w-1/3"
        />
        <div className="site-container flex flex-wrap items-center justify-between gap-8 py-16">
          <div>
            <h2 className="max-w-md text-[clamp(2.25rem,1.9rem+1.6vw,3rem)] leading-[1.16]">
              Not sure which service you need?
            </h2>
            <p className="mt-3 text-lg text-white/75">
              Tell us about your business and we&apos;ll recommend the right next step.
            </p>
          </div>
          <Link href="/contact#enquiry" className="btn btn-gold">
            Get a free consultation
            <ArrowRight aria-hidden="true" className="size-4" />
          </Link>
        </div>
      </section>
    </>
  );
}

export default function ServicesPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema("Services", "/services")} />
      <JsonLd data={servicesSchema} />
      <LanguagePanel language="en">
        <EnglishServices />
      </LanguagePanel>
      <LanguagePanel language="ar">
        <PageHero
          crumb="الخدمات"
          homeLabel="الرئيسية"
          title="خدمات تأسيس الأعمال والشركات والخدمات المؤسسية في قطر"
          lead={site.arabicTagline}
          image={heroImage}
          imagePosition="object-[20%_16%]"
        >
          <LanguageSwitch />
        </PageHero>
        <ArabicServices />
      </LanguagePanel>
    </>
  );
}
