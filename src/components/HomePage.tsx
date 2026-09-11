import { Link } from "@tanstack/react-router";
import type { Lang } from "@/content/menu";
import { copy, paths, restaurant, whatsappHref } from "@/content/site";
import { Reveal } from "./Reveal";
import { Logo } from "./Logo";
import facciata from "@/assets/facciata.jpg.asset.json";
import frutti from "@/assets/frutti-di-mare.jpg.asset.json";
import pastaVino from "@/assets/pasta-vino.jpeg.asset.json";
import frittoCalamari from "@/assets/fritto-calamari.jpeg.asset.json";
import verdure from "@/assets/verdure-griglia.jpg.asset.json";
import coppaGelato from "@/assets/coppa-gelato.jpeg.asset.json";
import crostataCaffe from "@/assets/crostata-caffe.jpeg.asset.json";

export function HomePage({ lang }: { lang: Lang }) {
  const c = copy[lang];
  const wa = whatsappHref(lang);

  const dishes = [
    { src: pastaVino.url, caption: c.dishes.captions["carbonara"]!, n: "01", position: "object-[center_58%]" },
    { src: frittoCalamari.url, caption: c.dishes.captions["gnocchetti"]!, n: "02", position: "object-[center_56%]" },
    { src: verdure.url, caption: c.dishes.captions["verdure"]!, n: "03", position: "object-center" },
    { src: coppaGelato.url, caption: c.dishes.captions["tiramisu"]!, n: "04", position: "object-[center_48%]" },
  ];

  const marquee = [
    restaurant.city,
    "Lago di Garda",
    "Trattoria",
    "Pizzeria",
    "Vittoriale",
    "da Kevin",
  ];

  return (
    <>
      <section className="relative isolate overflow-hidden">
        <img
          src={facciata.url}
          alt={`${restaurant.name}, ${restaurant.street}, ${restaurant.city}`}
          className="h-[92vh] min-h-[560px] w-full scale-105 object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/55 to-background/70 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
        <div
          className="veil pointer-events-none absolute inset-0 bg-background"
          aria-hidden="true"
        />

        <div className="absolute inset-x-0 bottom-0 mx-auto max-w-6xl px-5 pb-16">
          <Reveal className="mask-rise">
            <p className="eyebrow text-primary">{c.hero.place}</p>
          </Reveal>
          <Reveal className="mask-rise mt-3" delay={120}>
            <h1 className="display-xl text-foreground">{c.hero.title}</h1>
          </Reveal>
          <Reveal className="mask-rise" delay={240}>
            <p className="font-display text-xl text-primary">{c.hero.since}</p>
          </Reveal>
          <div className="mt-6 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <p className="max-w-md text-sm leading-relaxed text-foreground/80 sm:text-base">
              {c.hero.lead}
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href={wa}
                target="_blank"
                rel="noreferrer"
                className="rounded-full bg-primary px-7 py-3.5 text-xs font-medium uppercase tracking-widest text-primary-foreground transition-transform hover:-translate-y-0.5"
              >
                {c.callNow}
              </a>
              <Link
                to={paths[lang].menu}
                className="rounded-full border border-primary/60 px-7 py-3.5 text-xs font-medium uppercase tracking-widest text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
              >
                {c.nav.menu}
              </Link>
            </div>
          </div>
          <p className="mt-10 text-[0.65rem] uppercase tracking-[0.4em] text-foreground/45">
            {c.hero.scroll}
          </p>
        </div>
      </section>

      <div className="overflow-hidden border-y border-primary/20 bg-secondary py-4">
        <div className="marquee-track flex w-max gap-10 whitespace-nowrap">
          {[...marquee, ...marquee, ...marquee, ...marquee].map((w, i) => (
            <span
              key={`${w}-${i}`}
              className="flex items-center gap-10 font-display text-xl text-primary/80"
            >
              {w}
              <span className="text-primary/40">◆</span>
            </span>
          ))}
        </div>
      </div>

      <Reveal as="section" className="mx-auto max-w-6xl px-5 py-24 sm:py-32">
        <p className="eyebrow text-primary">{c.intro.eyebrow}</p>
        <div className="mt-6 grid gap-10 md:grid-cols-[1.15fr_1fr]">
          <h2 className="font-display text-4xl leading-[1.02] sm:text-6xl">{c.intro.title}</h2>
          <div className="space-y-5 text-sm leading-relaxed text-foreground/75 sm:text-base">
            {c.intro.body.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
        </div>
      </Reveal>

      <section className="relative bg-secondary py-24 sm:py-32">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 md:grid-cols-2">
          <Reveal as="figure" className="order-2 md:order-1">
            <img
              src={frutti.url}
              alt={c.lake.caption}
              loading="lazy"
              className="gilt aspect-4/5 w-full rounded-sm object-cover"
            />
            <figcaption className="mt-4 text-xs uppercase tracking-[0.2em] text-primary/80">
              {c.lake.caption}
            </figcaption>
          </Reveal>
          <Reveal className="order-1 md:order-2">
            <p className="eyebrow text-primary">{c.lake.eyebrow}</p>
            <h2 className="mt-4 font-display text-3xl leading-tight sm:text-5xl">{c.lake.title}</h2>
            <div className="mt-6 space-y-5 text-sm leading-relaxed text-foreground/75 sm:text-base">
              {c.lake.body.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <Reveal as="section" className="mx-auto max-w-6xl px-5 py-24 sm:py-32">
        <p className="eyebrow text-primary">{c.dishes.eyebrow}</p>
        <h2 className="mt-5 max-w-3xl font-display text-4xl leading-[1.02] sm:text-6xl">
          {c.dishes.title}
        </h2>
        <p className="mt-6 max-w-xl text-sm leading-relaxed text-foreground/75 sm:text-base">
          {c.dishes.body}
        </p>

        <ul className="mt-16 grid gap-x-8 gap-y-14 sm:grid-cols-2">
          {dishes.map((d, i) => (
            <Reveal
              as="li"
              key={d.src}
              delay={i * 90}
              className={i % 2 === 1 ? "sm:mt-24" : undefined}
            >
              <div className="relative">
                <img
                  src={d.src}
                  alt={d.caption}
                  loading="lazy"
                  className={`gilt w-full rounded-sm object-cover ${d.position} ${
                    i % 2 === 1 ? "aspect-4/5" : "aspect-square"
                  }`}
                />
                <span className="absolute -left-2 -top-4 font-display text-5xl text-primary/70 sm:-left-5 sm:text-6xl">
                  {d.n}
                </span>
              </div>
              <div className="mt-4 flex items-start gap-3">
                <span className="wave-rule mt-2 max-w-16 shrink-0" aria-hidden="true" />
                <p className="text-xs leading-relaxed text-foreground/70">{d.caption}</p>
              </div>
            </Reveal>
          ))}
        </ul>

        <Link
          to={paths[lang].menu}
          className="link-gold mt-16 inline-block text-sm uppercase tracking-[0.24em]"
        >
          {c.dishes.cta}
        </Link>
      </Reveal>

      <Reveal as="section" className="bg-secondary py-24 sm:py-32">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 md:grid-cols-[1.2fr_0.8fr] md:gap-14">
          <figure className="gilt overflow-hidden rounded-sm">
            <img
              src={crostataCaffe.url}
              alt={`${c.pause.title}: ${c.pause.body}`}
              loading="lazy"
              className="aspect-4/3 w-full object-cover object-[center_58%] sm:aspect-16/10"
            />
          </figure>
          <div>
            <p className="eyebrow text-primary">{c.pause.eyebrow}</p>
            <h2 className="mt-5 font-display text-4xl leading-[1.02] sm:text-5xl">
              {c.pause.title}
            </h2>
            <p className="mt-6 text-sm leading-relaxed text-foreground/75 sm:text-base">
              {c.pause.body}
            </p>
          </div>
        </div>
      </Reveal>

      <Reveal as="section" className="border-y border-primary/25 bg-ink">
        <div className="mx-auto max-w-6xl px-5 py-24 text-center sm:py-28">
          <Logo variant="full" className="mx-auto h-28 w-auto text-primary" />
          <p className="eyebrow mt-8 text-primary">{c.pizza.eyebrow}</p>
          <h2 className="mx-auto mt-5 max-w-3xl font-display text-3xl leading-tight sm:text-5xl">
            {c.pizza.title}
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-sm leading-relaxed text-foreground/70 sm:text-base">
            {c.pizza.body}
          </p>
        </div>
      </Reveal>

      <Reveal as="section" className="mx-auto max-w-6xl px-5 py-24 sm:py-32">
        <p className="eyebrow text-primary">{c.visit.eyebrow}</p>
        <h2 className="mt-5 max-w-xl font-display text-4xl leading-[1.02] sm:text-6xl">
          {c.visit.title}
        </h2>
        <p className="mt-6 max-w-xl text-sm leading-relaxed text-foreground/75 sm:text-base">
          {c.visit.body}
        </p>

        <dl className="mt-12 grid gap-10 sm:grid-cols-3">
          <div>
            <dt className="eyebrow text-primary/80">{c.visit.addressLabel}</dt>
            <dd className="mt-3 text-sm leading-relaxed">
              {restaurant.street}
              <br />
              {restaurant.postalCode} {restaurant.city} ({restaurant.province})
            </dd>
          </div>
          <div>
            <dt className="eyebrow text-primary/80">{c.visit.phoneLabel}</dt>
            <dd className="mt-3 text-sm">
              <a href={restaurant.phoneHref} className="link-gold">
                {restaurant.phone}
              </a>
            </dd>
          </div>
          <div>
            <dt className="eyebrow text-primary/80">{c.visit.hoursLabel}</dt>
            <dd className="mt-3 text-sm text-foreground/70">{c.visit.hoursValue}</dd>
          </div>
        </dl>

        <div className="gilt mt-14 overflow-hidden rounded-sm">
          <iframe
            title={c.contactPage.mapLabel}
            src={restaurant.mapsEmbed}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="h-[360px] w-full border-0 grayscale-[0.2]"
          />
        </div>
        <a
          href={restaurant.maps}
          target="_blank"
          rel="noreferrer"
          className="link-gold mt-6 inline-block text-sm uppercase tracking-[0.24em]"
        >
          {c.visit.directions}
        </a>
      </Reveal>
    </>
  );
}
