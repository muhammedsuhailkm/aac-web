import Image, { type StaticImageData } from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";

export function PageHero({
  crumb,
  homeLabel = "Home",
  title,
  lead,
  image,
  imagePosition,
  children,
}: {
  crumb: string;
  homeLabel?: string;
  title: string;
  lead: ReactNode;
  image: StaticImageData;
  imagePosition: string;
  children?: ReactNode;
}) {
  return (
    <section className="relative isolate overflow-hidden bg-brand-deep text-white">
      <Image
        src={image}
        alt=""
        fill
        sizes="100vw"
        loading="eager"
        fetchPriority="high"
        placeholder="blur"
        className={`-z-20 object-cover ${imagePosition}`}
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-linear-to-r from-brand-deep/90 via-brand-deep/70 to-brand/60 rtl:bg-linear-to-l rtl:via-brand-deep/80 rtl:to-brand-deep/70"
      />
      <div className="site-container py-16 md:py-24">
        <nav aria-label="Breadcrumb">
          {/* Arabic drops the eyebrow tracking: it pulls joined letters apart. */}
          <ol className="eyebrow flex gap-2 rtl:text-sm rtl:tracking-normal">
            <li>
              <Link href="/" className="hover:text-gold">
                {homeLabel}
              </Link>
            </li>
            <li aria-hidden="true" className="text-gold">
              /
            </li>
            <li aria-current="page" className="text-gold">
              {crumb}
            </li>
          </ol>
        </nav>
        <h1 className="mt-5 text-[clamp(2.5rem,1.9rem+2.8vw,4rem)] leading-[1.12] rtl:font-arabic rtl:text-[clamp(2.25rem,1.8rem+2vw,3.25rem)] rtl:leading-[1.35]">
          {title}
        </h1>
        <p className="mt-5 max-w-xl text-lg leading-relaxed text-white/80">{lead}</p>
        {children}
      </div>
    </section>
  );
}
