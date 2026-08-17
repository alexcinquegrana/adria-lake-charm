import type { Lang } from "@/content/menu";
import { copy } from "@/content/site";
import { Reveal } from "./Reveal";
import facciata from "@/assets/facciata.jpg.asset.json";
import frutti from "@/assets/frutti-di-mare.jpg.asset.json";
import tiramisu from "@/assets/tiramisu.jpg.asset.json";

export function PlacePage({ lang }: { lang: Lang }) {
  const c = copy[lang].placePage;
  return (
    <div className="mx-auto max-w-5xl px-5 pb-28 pt-14">
      <h1 className="font-display text-4xl leading-tight sm:text-6xl">{c.title}</h1>
      <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">{c.lead}</p>
      <img src={facciata.url} alt={c.title} className="mt-10 aspect-16/9 w-full rounded-sm object-cover" />
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
        <img src={frutti.url} alt={c.galleryTitle} loading="lazy" className="aspect-4/3 w-full rounded-sm object-cover" />
        <img src={tiramisu.url} alt={c.galleryTitle} loading="lazy" className="aspect-4/3 w-full rounded-sm object-cover" />
      </div>
      <section className="mt-20 max-w-2xl">
        <h2 className="font-display text-2xl">{c.storyTitle}</h2>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{c.storyBody}</p>
      </section>
    </div>
  );
}
