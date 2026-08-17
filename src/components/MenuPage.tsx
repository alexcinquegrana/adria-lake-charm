import { useMemo, useState } from "react";
import { allergenNames, dishText, menuGroups, tagLabels, type Lang, type Tag } from "@/content/menu";
import { copy, restaurant } from "@/content/site";

const allTags: Tag[] = ["lago", "mare", "carne", "veg", "pizza"];

export function MenuPage({ lang }: { lang: Lang }) {
  const c = copy[lang];
  const [q, setQ] = useState("");
  const [tag, setTag] = useState<Tag | null>(null);
  const [group, setGroup] = useState(menuGroups[0]!.id);

  const query = q.trim().toLowerCase();

  const sections = useMemo(() => {
    const active = menuGroups.find((g) => g.id === group)!;
    return active.sections
      .map((s) => ({
        ...s,
        items: s.items.filter((d) => {
          if (tag && !(d.tags ?? []).includes(tag)) return false;
          if (!query) return true;
          const hay = `${d.name} ${dishText(d, lang) ?? ""}`.toLowerCase();
          return hay.includes(query);
        }),
      }))
      .filter((s) => s.items.length > 0);
  }, [group, tag, query, lang]);

  return (
    <div className="mx-auto max-w-4xl px-5 pb-28 pt-14">
      <p className="eyebrow text-primary">{restaurant.city}</p>
      <h1 className="mt-3 font-display text-4xl leading-tight sm:text-6xl">{c.menuPage.title}</h1>
      <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">
        {c.menuPage.lead}
      </p>

      <div className="sticky top-[57px] z-30 -mx-5 mt-8 border-y border-border/60 bg-background/95 px-5 py-3 backdrop-blur">
        <div className="flex flex-wrap gap-2">
          {menuGroups.map((g) => (
            <button
              key={g.id}
              type="button"
              onClick={() => setGroup(g.id)}
              className={`rounded-full px-4 py-2 text-xs uppercase tracking-widest transition-colors ${
                g.id === group
                  ? "bg-primary text-primary-foreground"
                  : "border border-border text-muted-foreground hover:text-foreground"
              }`}
            >
              {g.title[lang]}
            </button>
          ))}
        </div>
        <div className="mt-3 flex flex-wrap items-center gap-2">
          <label className="sr-only" htmlFor="menu-search">
            {c.menuPage.search}
          </label>
          <input
            id="menu-search"
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder={c.menuPage.searchPlaceholder}
            className="min-w-0 flex-1 rounded-full border border-border bg-background px-4 py-2 text-sm outline-none focus:border-primary"
          />
          {(q || tag) && (
            <button
              type="button"
              onClick={() => {
                setQ("");
                setTag(null);
              }}
              className="text-xs uppercase tracking-widest text-primary"
            >
              {c.menuPage.clear}
            </button>
          )}
        </div>
        <div className="mt-2 flex flex-wrap gap-2">
          {allTags.map((t) => (
            <button
              key={t}
              type="button"
              aria-pressed={tag === t}
              onClick={() => setTag(tag === t ? null : t)}
              className={`rounded-full border px-3 py-1 text-[0.7rem] uppercase tracking-widest transition-colors ${
                tag === t ? "border-primary text-primary" : "border-border text-muted-foreground"
              }`}
            >
              {tagLabels[t][lang]}
            </button>
          ))}
        </div>
      </div>

      {sections.length === 0 && (
        <p className="mt-16 text-sm text-muted-foreground">{c.menuPage.noResults}</p>
      )}

      {sections.map((s) => (
        <section key={s.id} className="mt-14">
          <h2 className="font-display text-2xl sm:text-3xl">{s.title[lang]}</h2>
          {s.kicker && <p className="mt-1 text-xs text-muted-foreground">{s.kicker[lang]}</p>}
          <ul className="mt-6 divide-y divide-border/60">
            {s.items.map((d) => (
              <li key={d.id} className="flex gap-4 py-4">
                <div className="min-w-0 flex-1">
                  <p className="font-medium">{d.name}</p>
                  {dishText(d, lang) && (
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                      {dishText(d, lang)}
                    </p>
                  )}
                  {d.note && <p className="mt-1 text-xs text-muted-foreground">{d.note[lang]}</p>}
                  {d.allergens && d.allergens.length > 0 && (
                    <p className="mt-1 text-[0.7rem] uppercase tracking-widest text-muted-foreground">
                      ({d.allergens.join(", ")})
                    </p>
                  )}
                </div>
                <p className="shrink-0 font-display text-lg tabular-nums">{d.price}</p>
              </li>
            ))}
          </ul>
          {s.footnote && (
            <p className="mt-3 text-xs text-muted-foreground">{s.footnote[lang]}</p>
          )}
        </section>
      ))}

      <section className="mt-20 rounded-sm bg-secondary/50 p-6">
        <h2 className="font-display text-xl">{c.menuPage.allergensTitle}</h2>
        <p className="mt-2 text-sm text-muted-foreground">{c.menuPage.allergensNote}</p>
        <ul className="mt-4 grid gap-x-6 gap-y-1 text-xs text-muted-foreground sm:grid-cols-3">
          {Object.entries(allergenNames).map(([n, names]) => (
            <li key={n}>
              {n}. {names[lang]}
            </li>
          ))}
        </ul>
        <p className="mt-4 text-xs text-muted-foreground">{c.menuPage.frozenNote}</p>
      </section>
    </div>
  );
}
