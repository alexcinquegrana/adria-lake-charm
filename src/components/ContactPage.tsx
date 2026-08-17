import type { Lang } from "@/content/menu";
import { copy, restaurant } from "@/content/site";

export function ContactPage({ lang }: { lang: Lang }) {
  const c = copy[lang];
  const p = c.contactPage;
  return (
    <div className="mx-auto max-w-5xl px-5 pb-28 pt-14">
      <h1 className="font-display text-4xl leading-tight sm:text-6xl">{p.title}</h1>
      <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">{p.lead}</p>
      <div className="mt-12 grid gap-10 md:grid-cols-2">
        <div>
          <h2 className="eyebrow text-muted-foreground">{c.visit.addressLabel}</h2>
          <address className="mt-2 not-italic leading-relaxed">
            {restaurant.street}<br />{restaurant.postalCode} {restaurant.city} ({restaurant.province})
          </address>
          <h2 className="eyebrow mt-8 text-muted-foreground">{c.visit.phoneLabel}</h2>
          <a href={restaurant.phoneHref} className="mt-2 inline-block font-display text-2xl text-primary">{restaurant.phone}</a>
          <p className="mt-2 text-sm text-muted-foreground">{c.bookByPhone}</p>
          <a href={restaurant.maps} target="_blank" rel="noreferrer" className="mt-8 inline-block border-b border-primary pb-1 text-sm uppercase tracking-widest text-primary">{c.visit.directions}</a>
          <h2 className="eyebrow mt-10 text-muted-foreground">{p.howToFind}</h2>
          <ul className="mt-3 space-y-3 text-sm leading-relaxed text-muted-foreground">
            {p.howToFindBody.map((t) => <li key={t}>{t}</li>)}
          </ul>
        </div>
        <iframe
          title={p.mapLabel}
          loading="lazy"
          className="h-[420px] w-full rounded-sm border border-border"
          src="https://www.openstreetmap.org/export/embed.html?bbox=10.556%2C45.617%2C10.571%2C45.627&layer=mapnik&marker=45.6222%2C10.5636"
        />
      </div>
    </div>
  );
}
