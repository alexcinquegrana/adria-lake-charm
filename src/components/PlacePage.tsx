import type { Lang } from "@/content/menu";
import { copy } from "@/content/site";
import { Reveal } from "./Reveal";
import { Logo } from "./Logo";
import ingresso from "@/assets/ingresso-trattoria.jpeg.asset.json";
import piazzaArchi from "@/assets/piazza-archi.jpeg.asset.json";
import tavolaFiori from "@/assets/tavola-fiori.jpeg.asset.json";

export function PlacePage({ lang }: { lang: Lang }) {
  const c = copy[lang].placePage;
  return (
    <div className="mx-auto max-w-5xl px-5 pb-28 pt-14">
      <div className="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h1 className="font-display text-4xl leading-tight sm:text-6xl">{c.title}</h1>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">
            {c.lead}
          </p>
        </div>
        <Logo variant="full" className="h-24 w-auto shrink-0 text-primary sm:h-28" />
      </div>

      <figure className="mt-10">
        <img
          src={ingresso.url}
          alt={alts[lang].ingresso}
          className="aspect-16/9 w-full rounded-sm object-cover object-center"
        />
      </figure>

      <div className="mt-14 grid gap-10 sm:grid-cols-3">
        {c.blocks.map((b, i) => (
          <Reveal key={b.title} delay={i * 80}>
            <h2 className="font-display text-2xl">{b.title}</h2>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{b.body}</p>
          </Reveal>
        ))}
      </div>

      <h2 className="mt-20 font-display text-2xl">{c.galleryTitle}</h2>
      <div className="mt-6 grid gap-6 sm:grid-cols-2">
        <img
          src={piazzaArchi.url}
          alt={alts[lang].piazza}
          loading="lazy"
          className="aspect-4/3 w-full rounded-sm object-cover object-center"
        />
        <img
          src={tavolaFiori.url}
          alt={alts[lang].tavola}
          loading="lazy"
          className="aspect-4/3 w-full rounded-sm object-cover object-center"
        />
      </div>
    </div>
  );
}

const alts: Record<Lang, { ingresso: string; piazza: string; tavola: string }> = {
  it: {
    ingresso: "Ingresso giallo della Trattoria Adria con l'arco e le insegne Pizzeria e Gelati, Gardone Riviera",
    piazza: "Tavoli apparecchiati sotto gli archi in Piazza dei Caduti, con la chiesa sullo sfondo",
    tavola: "Tavolo all'aperto con tovaglia e fiori rosa sotto la pergola dell'Adria",
  },
  en: {
    ingresso: "Yellow entrance of Trattoria Adria with its arch and Pizzeria and Gelati signs, Gardone Riviera",
    piazza: "Set tables under the arches of Piazza dei Caduti, with the church in the background",
    tavola: "Outdoor table with tablecloth and pink flowers under the Adria pergola",
  },
  de: {
    ingresso: "Gelber Eingang der Trattoria Adria mit Bogen und Schildern Pizzeria und Gelati, Gardone Riviera",
    piazza: "Gedeckte Tische unter den Arkaden der Piazza dei Caduti, im Hintergrund die Kirche",
    tavola: "Gedeckter Tisch im Freien mit rosa Blumen unter der Pergola der Adria",
  },
};
