import { Link } from "@tanstack/react-router";
import type { Lang } from "@/content/menu";
import { copy, paths, restaurant } from "@/content/site";
import { Reveal } from "./Reveal";
import facciata from "@/assets/facciata.jpg.asset.json";
import frutti from "@/assets/frutti-di-mare.jpg.asset.json";
import carbonara from "@/assets/carbonara.jpg.asset.json";
import gnocchetti from "@/assets/gnocchetti.jpg.asset.json";
import verdure from "@/assets/verdure-griglia.jpg.asset.json";
import tiramisu from "@/assets/tiramisu.jpg.asset.json";

export function HomePage({ lang }: { lang: Lang }) {
  const c = copy[lang];

  return (
    <>
      <section className="relative isolate">
        <img
          src={facciata.url}
          alt={`${restaurant.name}, ${restaurant.street}, ${restaurant.city}`}
          className="h-[78vh] min-h-[520px] w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-black/30" />
        <div className="absolute inset-x-0 bottom-0 mx-auto max-w-6xl px-5 pb-14 text-paper">
          <p className="eyebrow text-paper/80">{c.hero.place}</p>
          <h1 className="display-xl mt-3 text-paper">{c.hero.title}</h1>
          <p className="font-display text-xl text-paper/90">{c.hero.since}</p>
          <p className="mt-5 max-w-xl text-sm leading-relaxed text-paper/85 sm:text-base">
            {c.hero.lead}
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <a
              href={restaurant.phoneHref}
              className="rounded-full bg-primary px-6 py-3 text-xs font-medium uppercase tracking-widest text-primary-foreground"
            >
              {c.callNow}
            </a>
            <Link
              to={paths[lang].menu}
              className="rounded-full border border-paper/50 px-6 py-3 text-xs font-medium uppercase tracking-widest text-paper"
            >
              {c.nav.menu}
            </Link>
          </div>
        </div>
      </section>

      <Reveal as="section" className="mx-auto max-w-6xl px-5 py-20 sm:py-28">
        <p className="eyebrow text-primary">{c.intro.eyebrow}</p>
        <div className="mt-4 grid gap-8 md:grid-cols-[1.1fr_1fr]">
          <h2 className="font-display text-3xl leading-tight sm:text-5xl">{c.intro.title}</h2>
          <div className="space-y-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
            {c.intro.body.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
        </div>
      </Reveal>

      <section className="bg-secondary/50 py-20 sm:py-28">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 md:grid-cols-2">
          <Reveal as="figure" className="order-2 md:order-1">
            <img
              src={frutti.url}
              alt={c.lake.caption}
              loading="lazy"
              className="aspect-4/5 w-full rounded-sm object-cover"
            />
            <figcaption className="mt-3 text-xs text-muted-foreground">{c.lake.caption}</figcaption>
          </Reveal>
          <Reveal className="order-1 md:order-2">
            <p className="eyebrow text-primary">{c.lake.eyebrow}</p>
            <h2 className="mt-4 font-display text-3xl leading-tight sm:text-4xl">{c.lake.title}</h2>
            <div className="mt-5 space-y-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
              {c.lake.body.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <Reveal as="section" className="mx-auto max-w-6xl px-5 py-20 sm:py-28">
        <p className="eyebrow text-primary">{c.dishes.eyebrow}</p>
        <h2 className="mt-4 max-w-2xl font-display text-3xl leading-tight sm:text-5xl">
          {c.dishes.title}
        </h2>
        <p className="mt-5 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">
          {c.dishes.body}
        </p>

        <ul className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { src: carbonara.url, caption: c.dishes.captions.carbonara },
            { src: gnocchetti.url, caption: c.dishes.captions.gnocchetti },
            { src: verdure.url, caption: c.dishes.captions.verdure },
            { src: tiramisu.url, caption: c.dishes.captions.tiramisu },
          ].map((d, i) => (
            <Reveal as="li" key={d.src} delay={i * 80}>
              <img
                src={d.src}
                alt={d.caption}
                loading="lazy"
                className="aspect-square w-full rounded-sm object-cover"
              />
              <p className="mt-3 text-xs leading-relaxed text-muted-foreground">{d.caption}</p>
            </Reveal>
          ))}
        </ul>

        <Link
          to={paths[lang].menu}
          className="mt-10 inline-block border-b border-primary pb-1 text-sm uppercase tracking-widest text-primary"
        >
          {c.dishes.cta}
        </Link>
      </Reveal>

      <Reveal as="section" className="border-y border-border/60 bg-ink text-paper">
        <div className="mx-auto max-w-6xl px-5 py-20 sm:py-24">
          <p className="eyebrow text-paper/70">{c.pizza.eyebrow}</p>
          <h2 className="mt-4 max-w-2xl font-display text-3xl leading-tight sm:text-5xl">
            {c.pizza.title}
          </h2>
          <p className="mt-5 max-w-2xl text-sm leading-relaxed text-paper/80 sm:text-base">
            {c.pizza.body}
          </p>
        </div>
      </Reveal>

      <Reveal as="section" className="mx-auto max-w-6xl px-5 py-20 sm:py-28">
        <p className="eyebrow text-primary">{c.visit.eyebrow}</p>
        <h2 className="mt-4 max-w-xl font-display text-3xl leading-tight sm:text-5xl">
          {c.visit.title}
        </h2>
        <p className="mt-5 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base">
          {c.visit.body}
        </p>

        <dl className="mt-10 grid gap-8 sm:grid-cols-3">
          <div>
            <dt className="eyebrow text-muted-foreground">{c.visit.addressLabel}</dt>
            <dd className="mt-2 text-sm leading-relaxed">
              {restaurant.street}
              <br />
              {restaurant.postalCode} {restaurant.city} ({restaurant.province})
            </dd>
          </div>
          <div>
            <dt className="eyebrow text-muted-foreground">{c.visit.phoneLabel}</dt>
            <dd className="mt-2 text-sm">
              <a href={restaurant.phoneHref} className="text-primary hover:underline">
                {restaurant.phone}
              </a>
            </dd>
          </div>
          <div>
            <dt className="eyebrow text-muted-foreground">{c.visit.hoursLabel}</dt>
            <dd className="mt-2 text-sm text-muted-foreground">{c.visit.hoursValue}</dd>
          </div>
        </dl>
      </Reveal>
    </>
  );
}
