import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import type { Lang } from "@/content/menu";
import { copy, paths, restaurant, whatsappHref } from "@/content/site";
import { Reveal } from "./Reveal";
import { Logo } from "./Logo";
import facciata from "@/assets/facciata.jpg.asset.json";
import heroVideo from "@/assets/adria-hero.mp4.asset.json";
import salaEsterno from "@/assets/sala-esterno.jpeg.asset.json";
import pastaVino from "@/assets/pasta-vino.jpeg.asset.json";
import frittoCalamari from "@/assets/fritto-calamari.jpeg.asset.json";
import verdure from "@/assets/verdure-griglia.jpg.asset.json";
import coppaGelato from "@/assets/coppa-gelato.jpeg.asset.json";
import crostataCaffe from "@/assets/crostata-caffe.jpeg.asset.json";

export function HomePage({ lang }: { lang: Lang }) {
  const c = copy[lang];
  const wa = whatsappHref(lang);
  const [veil, setVeil] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const vh = window.innerHeight || 1;
      setVeil(Math.min(1, Math.max(0, window.scrollY / (vh * 0.45))));
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const dishes = [
    { src: pastaVino.url, caption: c.dishes.captions["carbonara"]!, position: "object-[center_58%]" },
    { src: frittoCalamari.url, caption: c.dishes.captions["gnocchetti"]!, position: "object-[center_56%]" },
    { src: verdure.url, caption: c.dishes.captions["verdure"]!, position: "object-center" },
    { src: coppaGelato.url, caption: c.dishes.captions["tiramisu"]!, position: "object-[center_48%]" },
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
      <div className="relative h-[calc(100svh+55vh)]">
      <section className="sticky top-0 isolate overflow-hidden">
        <video

          src={heroVideo.url}
          poster={facciata.url}
          autoPlay
          muted
          loop
          playsInline
          aria-label={`${restaurant.name}, ${restaurant.street}, ${restaurant.city}`}
          className="h-[100svh] min-h-[560px] w-full object-cover object-center md:scale-110 md:object-[34%_center]"
        />

        <div
          aria-hidden={veil < 0.05}
          className="absolute inset-0 transition-opacity duration-200 ease-out"
          style={{ opacity: veil, pointerEvents: veil > 0.6 ? "auto" : "none" }}
        >
          <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-background via-background/80 to-transparent" />
          <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-background/70 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 mx-auto max-w-6xl px-5 pb-16 sm:pb-20">
            <p className="eyebrow text-primary drop-shadow-[0_1px_6px_rgba(0,0,0,0.4)]">
              {c.hero.place}
            </p>
            <h1 className="mt-3 font-display text-5xl leading-[0.95] drop-shadow-[0_2px_10px_rgba(0,0,0,0.45)] sm:text-7xl">
              {c.hero.title}
            </h1>
            <p className="mt-3 font-display text-lg text-primary drop-shadow-[0_1px_6px_rgba(0,0,0,0.4)] sm:text-xl">
              {c.hero.since}
            </p>
            <Link
              to={paths[lang].menu}
              className="mt-8 inline-block rounded-full border border-primary/60 bg-background/25 px-6 py-3 text-xs font-medium uppercase tracking-widest text-foreground backdrop-blur-sm transition-colors hover:bg-background/40"
            >
              {c.nav.menu}
            </Link>
          </div>
        </div>

        <div
          className="pointer-events-none absolute inset-x-0 bottom-0 flex flex-col items-center gap-3 pb-8 transition-opacity duration-300"
          style={{ opacity: 1 - veil }}
        >
          <span className="text-[0.62rem] uppercase tracking-[0.42em] text-primary-foreground/90 drop-shadow-[0_1px_6px_rgba(0,0,0,0.55)]">
            {c.hero.scroll}
          </span>
          <span
            className="h-10 w-px animate-pulse bg-primary-foreground/70"
            aria-hidden="true"
          />
        </div>
      </section>
      </div>



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
        <p className="eyebrow text-primary">{c.hero.place}</p>
        <p className="mt-6 max-w-3xl font-display text-2xl leading-snug text-foreground/90 sm:text-3xl">
          {c.hero.lead}
        </p>
        <div className="mt-12 grid gap-10 md:grid-cols-[1.15fr_1fr]">
          <h2 className="font-display text-4xl leading-[1.02] sm:text-6xl">{c.intro.title}</h2>
          <div className="space-y-5 text-sm leading-relaxed text-foreground/75 sm:text-base">
            {c.intro.body.map((p) => (
              <p key={p}>{p}</p>
            ))}
            <a
              href={wa}
              target="_blank"
              rel="noreferrer"
              className="hidden rounded-full bg-primary px-7 py-3.5 text-xs font-medium uppercase tracking-widest text-primary-foreground transition-transform hover:-translate-y-0.5 sm:inline-block"
            >
              {c.callNow}
            </a>
          </div>
        </div>
        <figure className="gilt mt-14 overflow-hidden rounded-sm">
          <img
            src={salaEsterno.url}
            alt={`${restaurant.name}, ${restaurant.city}`}
            loading="lazy"
            className="aspect-16/9 w-full object-cover object-center sm:aspect-21/9"
          />
        </figure>
      </Reveal>

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
              className={i % 2 === 1 ? "sm:mt-24" : ""}
            >
              <div>
                <img
                  src={d.src}
                  alt={d.caption}
                  loading="lazy"
                  className={`gilt w-full rounded-sm object-cover ${d.position} ${
                    i % 2 === 1 ? "aspect-4/5" : "aspect-square"
                  }`}
                />
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
