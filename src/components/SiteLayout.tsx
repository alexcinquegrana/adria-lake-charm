import { Link } from "@tanstack/react-router";
import { useEffect, useState, type ReactNode } from "react";
import type { Lang } from "@/content/menu";
import { copy, languages, paths, restaurant, whatsappHref, type PageKey } from "@/content/site";
import { Logo } from "./Logo";

export function SiteLayout({
  lang,
  page,
  children,
}: {
  lang: Lang;
  page: PageKey;
  children: ReactNode;
}) {
  const c = copy[lang];
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const nav: PageKey[] = ["menu", "place", "contact"];
  const wa = whatsappHref(lang);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="grain min-h-screen bg-background text-foreground">
      <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:p-4">
        {c.skipToContent}
      </a>

      <header
        className={`${page === "home" ? "fixed inset-x-0" : "sticky"} top-0 z-40 border-b transition-all duration-500 ${
          scrolled
            ? "translate-y-0 border-primary/30 bg-background/92 opacity-100 backdrop-blur-md"
            : page === "home"
              ? "pointer-events-none -translate-y-full border-transparent opacity-0"
              : "border-transparent bg-background/40 backdrop-blur-sm"
        }`}
      >
        <div className="mx-auto flex max-w-6xl items-center gap-4 px-5 py-4">
          <Link
            to={paths[lang].home}
            className="flex items-center gap-3 text-foreground transition-opacity hover:opacity-85"
          >
            <Logo className="h-14 w-auto" />
            <span className="leading-none">
              <span className="block font-display text-sm tracking-wide text-primary">
                da Kevin
              </span>
              <span className="mt-1.5 block text-[0.68rem] uppercase tracking-[0.2em] text-foreground/70">
                Gardone Riviera
              </span>
            </span>
          </Link>

          <nav className="ml-auto hidden items-center gap-8 text-sm font-medium uppercase tracking-[0.16em] md:flex">
            {nav.map((k) => (
              <Link
                key={k}
                to={paths[lang][k]}
                activeProps={{ className: "text-primary" }}
                className="link-gold text-foreground/90 hover:text-primary"
              >
                {c.nav[k]}
              </Link>
            ))}
          </nav>


          <div className="ml-auto flex items-center gap-3 md:ml-0">
            <ul className="flex items-center gap-1 text-xs">
              {languages.map((l) => (
                <li key={l.code}>
                  <Link
                    to={paths[l.code][page]}
                    hrefLang={l.code}
                    aria-current={l.code === lang ? "true" : undefined}
                    className={`rounded px-1.5 py-1 tracking-widest transition-colors ${
                      l.code === lang
                        ? "text-primary underline underline-offset-4"
                        : "text-foreground/60 hover:text-foreground"
                    }`}
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
            <a
              href={wa}
              target="_blank"
              rel="noreferrer"
              className="hidden rounded-full bg-primary px-4 py-2 text-xs font-medium uppercase tracking-widest text-primary-foreground transition-opacity hover:opacity-90 sm:inline-block"
            >
              {c.callNow}
            </a>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-label={c.nav.menu}
              className="rounded-full border border-primary/50 px-3 py-2 text-xs uppercase tracking-widest text-primary md:hidden"
            >
              {open ? "×" : "≡"}
            </button>
          </div>
        </div>

        {open && (
          <nav className="border-t border-primary/25 bg-background px-5 py-4 md:hidden">
            <ul className="flex flex-col gap-4 font-display text-2xl">
              {nav.map((k) => (
                <li key={k}>
                  <Link to={paths[lang][k]} onClick={() => setOpen(false)}>
                    {c.nav[k]}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        )}
      </header>

      <main id="main">{children}</main>

      <footer className="mt-24 border-t border-primary/25 bg-secondary">
        <div className="mx-auto max-w-6xl px-5 pt-16">
          <div className="wave-rule" aria-hidden="true" />
        </div>
        <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 sm:grid-cols-3">
          <div>
            <Logo variant="full" className="h-20 w-auto text-foreground/90" />
            <p className="mt-4 text-sm text-foreground/70">{c.footer.tagline}</p>
          </div>
          <address className="not-italic text-sm leading-relaxed">
            {restaurant.street}
            <br />
            {restaurant.postalCode} {restaurant.city} ({restaurant.province})
            <br />
            <a href={restaurant.phoneHref} className="link-gold">
              {restaurant.phone}
            </a>
            <br />
            <a href={wa} target="_blank" rel="noreferrer" className="link-gold">
              WhatsApp
            </a>
          </address>
          <ul className="space-y-3 text-xs uppercase tracking-[0.2em]">
            {nav.map((k) => (
              <li key={k}>
                <Link to={paths[lang][k]} className="link-gold text-foreground/85">
                  {c.nav[k]}
                </Link>
              </li>
            ))}
            <li>
              <a
                href={restaurant.maps}
                target="_blank"
                rel="noreferrer"
                className="link-gold text-foreground/85"
              >
                {c.visit.directions}
              </a>
            </li>
          </ul>
        </div>
        <div className="border-t border-primary/20 px-5 py-5 text-center text-[0.7rem] uppercase tracking-[0.24em] text-foreground/55">
          © {new Date().getFullYear()} {restaurant.name} — {c.footer.rights}
        </div>
      </footer>

      <a
        href={wa}
        target="_blank"
        rel="noreferrer"
        className="fixed inset-x-4 bottom-4 z-40 rounded-full bg-primary px-5 py-3 text-center text-sm font-medium uppercase tracking-widest text-primary-foreground shadow-lg sm:hidden"
      >
        {c.callNow}
      </a>
    </div>
  );
}
