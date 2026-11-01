import { Mail, Phone } from "lucide-react";
import { site } from "@/lib/site";

export function TopBar() {
  return (
    <div className="bg-brand text-white/90">
      <div className="site-container flex min-h-10.5 items-center justify-between gap-4 text-[0.8125rem]">
        <ul className="flex items-center gap-5">
          {site.phones.map((phone, index) => (
            <li key={phone.href} className={index > 0 ? "hidden sm:block" : undefined}>
              <a href={phone.href} className="flex items-center gap-1.5 hover:text-gold">
                <Phone aria-hidden="true" className="size-3.5" />
                {phone.display}
              </a>
            </li>
          ))}
          <li className="hidden md:block">
            <a
              href={`mailto:${site.emails[0]}`}
              className="flex items-center gap-1.5 hover:text-gold"
            >
              <Mail aria-hidden="true" className="size-3.5" />
              {site.emails[0]}
            </a>
          </li>
        </ul>
        <p lang="ar" dir="rtl" className="font-arabic text-base leading-none text-gold">
          {site.arabicName}
        </p>
      </div>
    </div>
  );
}
