import Image from "next/image";
import Link from "next/link";
import { footerServices } from "@/lib/services";
import { navLinks, site } from "@/lib/site";

// Fixed rather than computed: a live date can't be part of the prerendered shell.
const copyrightYear = 2026;
const columnTitle = "eyebrow mb-4 text-gold";
const footerLink = "transition-colors hover:text-gold";

export function SiteFooter() {
  return (
    <footer className="bg-brand text-sm text-white/75">
      <div className="site-container pt-16 pb-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.45fr_0.9fr_1.25fr_1.3fr]">
          <div className="max-w-72">
            <Image
              src="/brand/logo-stacked-gold.svg"
              alt={`${site.name} logo`}
              width={150}
              height={191}
            />
            <p className="mt-5 leading-relaxed">{site.summary}</p>
          </div>

          <div>
            <p className={columnTitle}>Quick links</p>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className={footerLink}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className={columnTitle}>Services</p>
            <ul className="space-y-3">
              {footerServices.map((service) => (
                <li key={service.id}>
                  <Link href={`/services#${service.id}`} className={footerLink}>
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className={columnTitle}>Contact</p>
            <ul className="space-y-3">
              {site.phones.map((phone) => (
                <li key={phone.href}>
                  <a href={phone.href} className={footerLink}>
                    {phone.display}
                  </a>
                </li>
              ))}
              <li>
                <a href={`mailto:${site.emails[0]}`} className={footerLink}>
                  {site.emails[0]}
                </a>
              </li>
              <li>
                <a
                  href={site.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${footerLink} leading-relaxed`}
                >
                  <address className="not-italic">{site.address.short}</address>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-wrap justify-between gap-2 border-t border-white/15 pt-6 text-[0.8125rem]">
          <p>
            © {copyrightYear} {site.legalName}. CR# {site.commercialRegistration}
          </p>
          <p>{site.domain}</p>
        </div>
      </div>
    </footer>
  );
}
