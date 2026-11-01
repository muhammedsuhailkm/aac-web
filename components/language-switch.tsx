import Link from "next/link";

type Language = "en" | "ar";

const languages: { code: Language; label: string; href: string }[] = [
  { code: "en", label: "English", href: "/services" },
  { code: "ar", label: "العربية", href: "/ar/services" },
];

export function LanguageSwitch({ active }: { active: Language }) {
  return (
    <div
      role="group"
      aria-label="Language"
      dir="ltr"
      className="mt-7 inline-flex gap-1 rounded border border-white/40 bg-brand-deep/40 p-1"
    >
      {languages.map(({ code, label, href }) => (
        <Link
          key={code}
          href={href}
          lang={code}
          hrefLang={code}
          aria-current={code === active ? "page" : undefined}
          className={`inline-flex min-h-10 min-w-24 items-center justify-center rounded-sm px-4 text-sm font-bold transition-colors ${
            code === active ? "bg-gold text-brand-deep" : "text-white hover:bg-white/10"
          } ${code === "ar" ? "font-arabic-sans" : ""}`}
        >
          {label}
        </Link>
      ))}
    </div>
  );
}
