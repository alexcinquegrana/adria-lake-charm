import { Link } from "@tanstack/react-router";
import { useState, type ReactNode } from "react";
import type { Lang } from "@/content/menu";
import { copy, languages, paths, restaurant, type PageKey } from "@/content/site";

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
  const nav: PageKey[] = ["menu", "place", "contact"];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:p-4">
        {c.skipToContent}
      </a>

      <header className="sticky top-0 z-40 border-b border-border/60 bg-background/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center gap-4 px-5 py-3">
          <Link to={paths[lang].home} className="font-display text-lg leading-none tracking-tight">
            Adria<span className="text-primary">.</span>
            <span className="block text-[0.6rem] uppercase tracking-[0.24em] text-muted-foreground">
              da Kevin
            </span>
          </Link>

          <nav className="ml-auto hidden items-center gap-6 text-sm md:flex">
            {nav.map((k) => (
              <Link
                key={k}
                to={paths[lang][k]}
                activeProps={{ className: "text-primary" }}
                className="transition-colors hover:text-primary"
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
                        ? "text-foreground underline underline-offset-4"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
            <a
              href={restaurant.phoneHref}
              className="hidden rounded-full bg-primary px-4 py-2 text-xs font-medium uppercase tracking-widest text-primary-foreground transition-opacity hover:opacity-90 sm:inline-block"
            >
              {c.callNow}
            </a>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              className="md:hidden rounded border border-border px-2 py-1 text-xs uppercase tracking-widest"
            >
              {c.nav.menu}
            </button>
          </div>
        </div>

        {open && (
          <nav className="border-t border-border/60 bg-background px-5 py-3 md:hidden">
            <ul className="flex flex-col gap-3 text-sm">
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

      <footer className="mt-24 border-t border-border/60 bg-secondary/40">
        <div className="mx-auto grid max-w-6xl gap-8 px-5 py-14 sm:grid-cols-3">
          <div>
            <p className="font-display text-2xl">{restaurant.name}</p>
            <p className="mt-2 text-sm text-muted-foreground">{c.footer.tagline}</p>
          </div>
          <address className="not-italic text-sm leading-relaxed">
            {restaurant.street}
            <br />
            {restaurant.postalCode} {restaurant.city} ({restaurant.province})
            <br />
            <a href={restaurant.phoneHref} className="text-primary hover:underline">
              {restaurant.phone}
            </a>
          </address>
          <ul className="space-y-2 text-sm">
            {nav.map((k) => (
              <li key={k}>
                <Link to={paths[lang][k]} className="hover:text-primary">
                  {c.nav[k]}
                </Link>
              </li>
            ))}
            <li>
              <a href={restaurant.maps} target="_blank" rel="noreferrer" className="hover:text-primary">
                {c.visit.directions}
              </a>
            </li>
          </ul>
        </div>
        <div className="border-t border-border/60 px-5 py-5 text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} {restaurant.name} — {c.footer.rights}
        </div>
      </footer>

      <a
        href={restaurant.phoneHref}
        className="fixed inset-x-4 bottom-4 z-40 rounded-full bg-primary px-5 py-3 text-center text-sm font-medium uppercase tracking-widest text-primary-foreground shadow-lg sm:hidden"
      >
        {c.callNow} · {restaurant.phone}
      </a>
    </div>
  );
}
