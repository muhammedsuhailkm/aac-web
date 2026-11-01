"use client";

import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { navLinks } from "@/lib/site";

export function SiteHeader() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-white">
      <div className="site-container flex h-(--header-height) items-center justify-between gap-6">
        <Link
          href="/"
          onNavigate={() => setMenuOpen(false)}
          className="flex shrink-0 items-center gap-2.5"
        >
          <Image src="/brand/logo-mark.svg" alt="" width={42} height={52} />
          <span className="flex flex-col">
            <span className="font-display text-2xl leading-none tracking-wide text-brand">
              AL AFLAH
            </span>
            <span className="mt-1 text-[0.625rem] font-bold tracking-[0.16em] text-gold-ink">
              BUSINESS CONSULTANCY
            </span>
          </span>
        </Link>

        <nav aria-label="Main" className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={active ? "page" : undefined}
                className={`border-b-2 py-1 text-sm font-bold tracking-[0.08em] uppercase transition-colors hover:text-brand ${
                  active ? "border-gold text-brand" : "border-transparent text-ink"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
          <Link href="/contact#enquiry" className="btn btn-brand min-h-10.5! px-4.5! py-2! text-sm!">
            Book a consultation
          </Link>
        </nav>

        <button
          type="button"
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          onClick={() => setMenuOpen((open) => !open)}
          className="-mr-2 grid size-11 place-items-center text-brand md:hidden"
        >
          {menuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </button>
      </div>

      <nav
        id="mobile-menu"
        aria-label="Mobile"
        hidden={!menuOpen}
        className="border-t border-line bg-white md:hidden"
      >
        <div className="site-container flex flex-col gap-1 py-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              aria-current={pathname === link.href ? "page" : undefined}
              onNavigate={() => setMenuOpen(false)}
              className={`py-3 text-sm font-bold tracking-[0.08em] uppercase ${
                pathname === link.href ? "text-brand" : "text-ink"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact#enquiry"
            onNavigate={() => setMenuOpen(false)}
            className="btn btn-brand mt-2"
          >
            Book a consultation
          </Link>
        </div>
      </nav>
    </header>
  );
}
