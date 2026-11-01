import {
  ArrowRight,
  BriefcaseBusiness,
  BuildingComplex,
  Clock,
  Eye,
  FileBadge,
  Globe,
  Heart,
  Phone,
  Route,
  UserRound,
} from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { MeetingPicker } from "@/components/meeting-picker";
import { Stripes } from "@/components/stripes";
import { WhatsappIcon } from "@/components/whatsapp-icon";
import { openGraphFor } from "@/lib/seo";
import { site, whatsappUrl } from "@/lib/site";
import aboutImage from "@/public/images/al-aflah-consultants-at-work.webp";
import heroImage from "@/public/images/business-setup-consultants-qatar.webp";
import whyImage from "@/public/images/one-partner-for-qatar-business.webp";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
  openGraph: openGraphFor("/"),
};

const serviceHighlights = [
  { id: "commercial-registration", label: "Commercial Registration" },
  { id: "hukoomi-services", label: "Hukoomi Services" },
  { id: "dhareeba-noc", label: "Dhareeba NOC" },
  { id: "wage-protection-system", label: "Wage Protection System" },
  { id: "document-clearance", label: "Document Clearance" },
];

const coreServices = [
  {
    id: "company-formation",
    title: "Company Formation",
    text: "End-to-end setup: documentation, applications, registrations and coordination with the relevant authorities.",
    icon: BuildingComplex,
  },
  {
    id: "foreign-ownership",
    title: "100% Foreign Ownership",
    text: "Guidance for eligible investors on foreign ownership opportunities and the right business structure in Qatar.",
    icon: Globe,
  },
  {
    id: "commercial-registration",
    title: "Commercial Registration",
    text: "CR applications, renewals, amendments and every requirement that comes with them.",
    icon: FileBadge,
  },
  {
    id: "pro-services",
    title: "PRO Services",
    text: "Government procedures, submissions, documentation and follow-ups handled on behalf of your business.",
    icon: BriefcaseBusiness,
  },
];

const steps = [
  {
    title: "Consultation",
    text: "We listen to your plans and recommend the right activity, structure and ownership model.",
  },
  {
    title: "Documentation",
    text: "We handle document clearance, translation and typing for everything the authorities ask for.",
  },
  {
    title: "Registration",
    text: "We submit applications, follow up with each department and complete your Commercial Registration and permits.",
  },
  {
    title: "Ongoing support",
    text: "PRO services, WPS, Dhareeba NOC, bank account support and audits, handled for as long as you need us.",
  },
];

const reasons = [
  {
    title: "Experienced professionals",
    text: "A team that knows Qatar's ministries, portals and procedures first-hand.",
    icon: UserRound,
  },
  {
    title: "Fast & reliable processing",
    text: "Applications prepared right the first time, so they move without delays.",
    icon: Clock,
  },
  {
    title: "End-to-end solutions",
    text: "From company formation to audits and WPS, one point of contact.",
    icon: Route,
  },
  {
    title: "Transparent service",
    text: "Clear scope, clear fees and regular updates on where each file stands.",
    icon: Eye,
  },
];

function OwnershipBadge() {
  const ring = "FOREIGN OWNERSHIP • START & GROW IN QATAR • ";
  return (
    <div
      role="img"
      aria-label="100% foreign ownership. Start and grow in Qatar."
      className="absolute right-4 bottom-4 size-28 md:right-8 md:bottom-8 md:size-36"
    >
      <svg viewBox="0 0 200 200" className="size-full">
        <circle cx="100" cy="100" r="98" className="fill-brand-deep stroke-gold" strokeWidth="1.5" />
        <g className="origin-center animate-[spin_40s_linear_infinite]">
          <defs>
            <path id="badge-ring" d="M100 100m-78 0a78 78 0 1 1 156 0a78 78 0 1 1-156 0" />
          </defs>
          <text className="fill-gold text-[13.5px] font-bold">
            <textPath href="#badge-ring" textLength="486">
              {ring}
            </textPath>
          </text>
        </g>
        <text x="100" y="108" textAnchor="middle" className="fill-gold font-display text-[46px]">
          100%
        </text>
        <text
          x="100"
          y="132"
          textAnchor="middle"
          className="fill-white text-[13px] font-extrabold tracking-[0.14em]"
        >
          OWNERSHIP
        </text>
      </svg>
    </div>
  );
}

function SectionIntro({
  eyebrow,
  title,
  children,
}: {
  eyebrow: string;
  title: string;
  children?: React.ReactNode;
}) {
  return (
    <>
      <p className="eyebrow text-gold-ink">{eyebrow}</p>
      <h2 className="heading-xl mt-3 max-w-2xl text-brand">{title}</h2>
      {children}
    </>
  );
}

export default function HomePage() {
  return (
    <>
      <section className="relative isolate flex min-h-[min(calc(100svh-7.375rem),54rem)] flex-col justify-center overflow-hidden bg-brand-deep text-white">
        <Image
          src={heroImage}
          alt="Two business consultants discussing a company setup plan at a table in Qatar"
          fill
          sizes="100vw"
          loading="eager"
          fetchPriority="high"
          placeholder="blur"
          className="-z-20 object-cover object-[70%_center]"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-10 bg-linear-to-r from-brand-deep/90 via-brand-deep/75 to-brand-deep/25"
        />
        <div className="site-container py-16 pb-36 md:py-24">
          <div className="max-w-156">
            <h1>
              <span className="eyebrow block font-sans text-gold">
                Business setup &amp; corporate services in Qatar
              </span>
              <span className="mt-5 block text-[clamp(2.75rem,1.9rem+4vw,4.75rem)] leading-[1.14]">
                Your trusted partner for <span className="text-gold">business success</span>
              </span>
            </h1>
            <p className="mt-6 max-w-136 text-lg leading-relaxed text-white/80">
              From your first Commercial Registration to monthly WPS payroll, we handle the
              paperwork and government follow-ups so you can focus on building and growing your
              business.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/services" className="btn btn-gold">
                Explore our services
                <ArrowRight aria-hidden="true" className="size-4" />
              </Link>
              <Link href="/contact#enquiry" className="btn btn-outline">
                Talk to an advisor
              </Link>
            </div>
            <p lang="ar" dir="rtl" className="mt-6 font-arabic text-2xl text-gold">
              {site.arabicTagline}
            </p>
          </div>
        </div>
        <a
          href="#about"
          className="eyebrow absolute bottom-5 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-[0.625rem] text-white/70 hover:text-white md:flex"
        >
          Scroll
          <span aria-hidden="true" className="h-9 w-px bg-gold" />
        </a>
        <OwnershipBadge />
      </section>

      <nav aria-label="Popular services" className="bg-brand-deep">
        <ul className="site-container flex flex-wrap items-center justify-center gap-x-8 gap-y-2 py-4 lg:justify-between">
          {serviceHighlights.map((item) => (
            <li key={item.id}>
              <Link
                href={`/services#${item.id}`}
                className="eyebrow flex items-center gap-2 text-white/75 hover:text-gold"
              >
                <span aria-hidden="true" className="size-1.5 rotate-45 bg-gold" />
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <section id="about" className="site-container grid gap-14 py-20 md:py-24 lg:grid-cols-2 lg:gap-16">
        <div className="relative mr-5 mb-5">
          <Stripes className="absolute -right-5 -bottom-5 h-2/5 w-1/2" />
          <Image
            src={aboutImage}
            alt="Two Al Aflah consultants reviewing notes beside a laptop"
            sizes="(min-width: 1024px) 520px, 100vw"
            placeholder="blur"
            className="relative aspect-[4/5] w-full rounded object-cover object-bottom"
          />
        </div>
        <div className="lg:pt-6">
          <p className="eyebrow text-gold-ink">About Al Aflah</p>
          <h2 className="heading-xl mt-4 text-brand">
            Making business simpler. <span className="text-gold-ink">Supporting every step.</span>
          </h2>
          <p className="mt-6 leading-[1.75] text-body">
            We are a trusted provider of{" "}
            <strong className="font-bold text-ink">
              business setup, government liaison and corporate support services in Qatar
            </strong>
            . Entrepreneurs, investors, SMEs and established companies come to us to handle the
            requirements of doing business here with greater confidence.
          </p>
          <p className="mt-5 leading-[1.75] text-body">
            Our team combines practical knowledge, professional service and attention to detail.
            From establishing a new company to managing ongoing government and administrative work,
            we simplify complex processes so you can focus on what matters most.
          </p>
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            <div className="border-t-2 border-gold pt-3">
              <h3 className="text-xl text-brand">Our vision</h3>
              <p className="mt-2 text-[0.9375rem] leading-relaxed text-body">
                To be Qatar&apos;s preferred business support partner, known for professionalism,
                reliability and transparency.
              </p>
            </div>
            <div className="border-t-2 border-gold pt-3">
              <h3 className="text-xl text-brand">Our mission</h3>
              <p className="mt-2 text-[0.9375rem] leading-relaxed text-body">
                To simplify setup and corporate processes with efficient, compliant solutions
                tailored to each client.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section aria-labelledby="core-services">
        <div className="site-container pb-10">
          <p className="eyebrow text-gold-ink">What we do</p>
          <h2 id="core-services" className="heading-xl mt-3 text-brand">
            Core business setup services
          </h2>
        </div>
        <ul className="grid gap-0.5 sm:grid-cols-2 lg:grid-cols-4">
          {coreServices.map(({ id, title, text, icon: Icon }, index) => (
            <li key={id} className={index % 2 === 0 ? "bg-brand" : "bg-brand-mid"}>
              <Link
                href={`/services#${id}`}
                className="group flex h-full flex-col p-7 text-white transition-opacity hover:opacity-95 xl:p-9"
              >
                <Icon aria-hidden="true" strokeWidth={1.5} className="size-10 text-gold" />
                <h3 className="mt-5 min-h-[2.5em] max-w-52 text-[1.625rem] leading-[1.25]">
                  {title}
                </h3>
                <p className="mt-3 flex-1 text-[0.9375rem] leading-relaxed text-white/75">{text}</p>
                <span className="eyebrow mt-5 flex items-center gap-2 text-gold">
                  Learn more
                  <span className="sr-only"> about {title}</span>
                  <ArrowRight
                    aria-hidden="true"
                    className="size-4 transition-transform group-hover:translate-x-1"
                  />
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <section className="site-container py-20 md:py-24">
        <SectionIntro eyebrow="How it works" title="From first meeting to licensed business">
          <p className="mt-4 text-lg text-body">
            A clear path with one team handling every step, so you always know what happens next.
          </p>
        </SectionIntro>
        <ol className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {steps.map((step, index) => (
            <li key={step.title} className="relative border-t border-line pt-6">
              <span aria-hidden="true" className="absolute -top-0.5 left-0 h-1 w-14 bg-brand" />
              <span aria-hidden="true" className="font-display text-[2.5rem] leading-none text-gold">
                0{index + 1}
              </span>
              <h3 className="mt-4 text-2xl text-brand">{step.title}</h3>
              <p className="mt-3 text-[0.9375rem] leading-relaxed text-body">{step.text}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="bg-brand-deep text-white">
        <div className="site-container grid gap-12 py-20 md:py-24 lg:grid-cols-[minmax(0,26rem)_1fr] lg:gap-16">
          <div>
            <p className="eyebrow text-gold">Why choose us</p>
            <h2 className="mt-3 text-[clamp(2.5rem,2rem+2vw,3.25rem)] leading-[1.14]">
              One partner for every government step
            </h2>
            <p className="mt-5 leading-[1.75] text-white/75">
              Setting up and running a company in Qatar means dealing with many departments. We
              bring it all under one roof.
            </p>
            <Image
              src={whyImage}
              alt="A business professional in a suit walking past a stone wall"
              sizes="(min-width: 1024px) 400px, 100vw"
              placeholder="blur"
              className="mt-8 aspect-[3/2] w-full rounded object-cover object-[50%_65%]"
            />
          </div>
          <div className="grid border border-gold/25 sm:grid-cols-2 sm:grid-rows-[1fr_1fr_auto]">
            {reasons.map(({ title, text, icon: Icon }, index) => (
              <div
                key={title}
                className={`p-7 ${index % 2 === 0 ? "sm:border-r sm:border-gold/25" : ""} ${
                  index < 2 ? "border-b border-gold/25" : "max-sm:border-b max-sm:border-gold/25"
                }`}
              >
                <Icon aria-hidden="true" strokeWidth={1.5} className="size-8 text-gold" />
                <h3 className="mt-4 text-[1.375rem]">{title}</h3>
                <p className="mt-2 text-[0.9375rem] leading-relaxed text-white/75">{text}</p>
              </div>
            ))}
            <div className="flex items-center gap-5 bg-brand p-7 sm:col-span-2">
              <Heart aria-hidden="true" strokeWidth={1.5} className="size-8 shrink-0 text-gold" />
              <div>
                <h3 className="text-[1.375rem]">Personalized client support</h3>
                <p className="mt-1 text-[0.9375rem] leading-relaxed text-white/85">
                  Every client gets advice shaped to their activity, budget and timeline.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="site-container grid gap-6 py-20 lg:grid-cols-2">
        <div className="rounded bg-brand p-8 text-white md:p-11">
          <p className="eyebrow text-gold">Need help today?</p>
          <h2 className="mt-4 text-[2.25rem] leading-tight">Get support right away</h2>
          <p className="mt-4 leading-[1.75] text-white/75">
            Short on time? Message us on WhatsApp or call for immediate help with your setup,
            renewal or government transaction.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href={whatsappUrl("Hello Al Aflah, I need help with a business service in Qatar.")}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-gold"
            >
              <WhatsappIcon className="size-5" />
              Chat on WhatsApp
            </a>
            <a href={site.phones[0].href} className="btn btn-outline">
              <Phone aria-hidden="true" className="size-4" />
              {site.phones[0].display}
            </a>
          </div>
        </div>
        <div className="rounded bg-brand-deep p-8 text-white md:p-11">
          <p className="eyebrow text-gold">Plan a meeting</p>
          <h2 className="mt-4 text-[2.25rem] leading-tight">Pick a day that suits you</h2>
          <MeetingPicker />
        </div>
      </section>
    </>
  );
}
