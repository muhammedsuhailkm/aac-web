"use client";

import { useEffect, useSyncExternalStore, type ReactNode } from "react";

type Language = "en" | "ar";

const languages: { code: Language; label: string }[] = [
  { code: "en", label: "English" },
  { code: "ar", label: "العربية" },
];

// next/link moves between hashes with pushState, which doesn't fire hashchange.
function subscribe(onChange: () => void) {
  const { navigation } = window as Window & { navigation?: EventTarget };
  window.addEventListener("hashchange", onChange);
  navigation?.addEventListener("currententrychange", onChange);
  return () => {
    window.removeEventListener("hashchange", onChange);
    navigation?.removeEventListener("currententrychange", onChange);
  };
}

const currentLanguage = (): Language => (window.location.hash === "#ar" ? "ar" : "en");

function useLanguage() {
  return useSyncExternalStore(subscribe, currentLanguage, (): Language => "en");
}

export function LanguageSwitch() {
  const active = useLanguage();

  return (
    <div
      role="group"
      aria-label="Language"
      dir="ltr"
      className="mt-7 inline-flex gap-1 rounded border border-white/40 bg-brand-deep/40 p-1"
    >
      {languages.map(({ code, label }) => (
        <a
          key={code}
          href={`#${code}`}
          lang={code}
          aria-current={code === active ? "true" : undefined}
          className={`inline-flex min-h-10 min-w-24 items-center justify-center rounded-sm px-4 text-sm font-bold transition-colors ${
            code === active ? "bg-gold text-brand-deep" : "text-white hover:bg-white/10"
          } ${code === "ar" ? "font-arabic-sans" : ""}`}
        >
          {label}
        </a>
      ))}
    </div>
  );
}

export function LanguagePanel({
  language,
  children,
}: {
  language: Language;
  children: ReactNode;
}) {
  const active = useLanguage() === language;

  // A service link can't scroll to its card until this panel stops being hidden.
  useEffect(() => {
    if (active && language === "en") {
      document.getElementById(window.location.hash.slice(1))?.scrollIntoView();
    }
  }, [active, language]);

  return language === "ar" ? (
    <div hidden={!active} lang="ar" dir="rtl" className="font-arabic-sans">
      {children}
    </div>
  ) : (
    <div hidden={!active}>{children}</div>
  );
}
