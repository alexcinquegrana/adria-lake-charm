import type { Lang } from "@/content/menu";
import { copy, paths, restaurant, type PageKey } from "@/content/site";

const langs: Lang[] = ["it", "en", "de"];

function restaurantSchema(lang: Lang) {
  return {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    name: restaurant.name,
    description: copy[lang].meta.home.description,
    telephone: restaurant.phone,
    servesCuisine: restaurant.servesCuisine,
    priceRange: "€€",
    address: {
      "@type": "PostalAddress",
      streetAddress: restaurant.street,
      addressLocality: restaurant.city,
      addressRegion: restaurant.province,
      postalCode: restaurant.postalCode,
      addressCountry: restaurant.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: restaurant.lat,
      longitude: restaurant.lng,
    },
    hasMenu: paths[lang].menu,
    acceptsReservations: "True",
    areaServed: "Gardone Riviera, Lago di Garda",
  };
}

function breadcrumbSchema(lang: Lang, page: Exclude<PageKey, "home">) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: copy[lang].nav.home,
        item: paths[lang].home,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: copy[lang].nav[page],
        item: paths[lang][page],
      },
    ],
  };
}

export function pageHead(lang: Lang, page: PageKey) {
  const c = copy[lang];
  const meta = c.meta[page];
  const self = paths[lang][page];

  return {
    meta: [
      { title: meta.title },
      { name: "description", content: meta.description },
      { property: "og:title", content: meta.title },
      { property: "og:description", content: meta.description },
      { property: "og:type", content: page === "home" ? "website" : "article" },
      { property: "og:url", content: self },
      { property: "og:locale", content: c.htmlLang },
      { property: "og:site_name", content: restaurant.name },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: meta.title },
      { name: "twitter:description", content: meta.description },
    ],
    links: [
      { rel: "canonical", href: self },
      ...langs.map((l) => ({
        rel: "alternate",
        hrefLang: l,
        href: paths[l][page],
      })),
      { rel: "alternate", hrefLang: "x-default", href: paths.it[page] },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(restaurantSchema(lang)),
      },
      ...(page === "home"
        ? []
        : [
            {
              type: "application/ld+json",
              children: JSON.stringify(breadcrumbSchema(lang, page)),
            },
          ]),
    ],
  };
}
