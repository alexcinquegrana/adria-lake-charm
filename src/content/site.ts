import type { Lang } from "./menu";

export type PageKey = "home" | "menu" | "place" | "contact";

export const restaurant = {
  name: "Trattoria Adria da Kevin",
  shortName: "Adria",
  street: "Via Caduti 13/15",
  postalCode: "25083",
  city: "Gardone Riviera",
  province: "BS",
  region: "Lombardia",
  country: "IT",
  phone: "+39 392 788 8456",
  phoneHref: "tel:+393927888456",
  lat: 45.6222,
  lng: 10.5636,
  maps: "https://www.google.com/maps/search/?api=1&query=Trattoria+Adria+Via+Caduti+13+Gardone+Riviera",
  servesCuisine: ["Italiana", "Pizza", "Pesce di lago"],
  whatsapp: "393927888456",
  mapsEmbed:
    "https://www.google.com/maps?q=Trattoria+Adria+da+Kevin,+Via+Caduti+13,+25083+Gardone+Riviera+BS&output=embed",
};

const whatsappMessage: Record<Lang, string> = {
  it: "Ciao Kevin, vorrei prenotare un tavolo il…",
  en: "Hi Kevin, I'd like to book a table on…",
  de: "Hallo Kevin, ich möchte einen Tisch reservieren am…",
};

export function whatsappHref(lang: Lang) {
  return `https://wa.me/${restaurant.whatsapp}?text=${encodeURIComponent(whatsappMessage[lang])}`;
}

export const languages: { code: Lang; label: string; full: string }[] = [
  { code: "it", label: "IT", full: "Italiano" },
  { code: "en", label: "EN", full: "English" },
  { code: "de", label: "DE", full: "Deutsch" },
];

export const paths: Record<Lang, Record<PageKey, string>> = {
  it: { home: "/", menu: "/menu", place: "/il-locale", contact: "/contatti" },
  en: { home: "/en/", menu: "/en/menu", place: "/en/the-place", contact: "/en/contact" },
  de: { home: "/de/", menu: "/de/speisekarte", place: "/de/lokal", contact: "/de/kontakt" },
};

interface Copy {
  htmlLang: string;
  nav: Record<PageKey, string>;
  callNow: string;
  bookByPhone: string;
  skipToContent: string;
  hero: {
    place: string;
    title: string;
    lead: string;
    since: string;
    scroll: string;
  };
  intro: { eyebrow: string; title: string; body: string[] };
  lake: { eyebrow: string; title: string; body: string[]; caption: string };
  dishes: {
    eyebrow: string;
    title: string;
    body: string;
    cta: string;
    captions: Record<string, string>;
  };
  pause: { eyebrow: string; title: string; body: string };
  pizza: { eyebrow: string; title: string; body: string };
  visit: {
    eyebrow: string;
    title: string;
    body: string;
    addressLabel: string;
    phoneLabel: string;
    hoursLabel: string;
    hoursValue: string;
    directions: string;
  };
  menuPage: {
    title: string;
    lead: string;
    search: string;
    searchPlaceholder: string;
    filters: string;
    clear: string;
    noResults: string;
    allergensTitle: string;
    allergensNote: string;
    frozenNote: string;
    downloadPdf: string;
  };
  placePage: {
    title: string;
    lead: string;
    blocks: { title: string; body: string }[];
    galleryTitle: string;
    storyTitle: string;
    storyBody: string;
  };
  contactPage: {
    title: string;
    lead: string;
    howToFind: string;
    howToFindBody: string[];
    mapLabel: string;
  };
  footer: { tagline: string; rights: string; menuLink: string };
  meta: Record<PageKey, { title: string; description: string }>;
}

export const copy: Record<Lang, Copy> = {
  it: {
    htmlLang: "it",
    nav: { home: "Casa", menu: "Menù", place: "Il locale", contact: "Dove siamo" },
    callNow: "Prenota su WhatsApp",
    bookByPhone: "Scrivici su WhatsApp o chiamaci",
    skipToContent: "Vai al contenuto",
    hero: {
      place: "Gardone Riviera · Lago di Garda",
      title: "Trattoria Adria",
      lead: "Sotto gli archi gialli di Via Caduti, a due passi dal Vittoriale: trattoria, pizzeria e bar come in paese.",
      since: "Da Kevin",
      scroll: "Scorri",
    },
    intro: {
      eyebrow: "Che posto è",
      title: "Un pezzo di Gardone, non una cartolina",
      body: [
        "Siamo nel centro storico di Gardone Riviera, a pochi metri dal Vittoriale, in Piazza dei Caduti. L’Adria si riconosce da lontano: facciata gialla, gerani alle finestre, l’arco con scritto TRATTORIA.",
        "Dentro si mangia come a casa: tovaglie a quadretti, piatti fatti come si deve, chi si ferma per il pranzo e chi solo per un caffè. Trattoria, pizzeria e bar nello stesso indirizzo. Chi sale al Vittoriale passa di qui prima o dopo. Chi vive a Gardone torna il mercoledì sera senza pensarci.",
      ],
    },
    lake: {
      eyebrow: "Il lago nel piatto",
      title: "Sarde del Garda, trota, casoncelli",
      body: [
        "La cucina si apre con i fiori di zucca alla nostra maniera, fatti in casa, ripieni ai tre formaggi, pastellati e fritti al momento.",
        "Accanto, la tradizione bresciana: i casoncelli preparati nel nostro territorio, burro e salvia. E i vini del Garda — Groppello, Lugana — che di questo lago sanno tutto.",
      ],
      caption: "Spaghetti alla nostra pescatora: cozze, vongole, gamberoni, calamari",
    },
    dishes: {
      eyebrow: "In cucina",
      title: "Poche cose, fatte come si deve",
      body: "La carta è quella di un locale di paese: ognuno deve trovare il suo. Pasta della casa, fritto di calamari, verdure dell’orto in griglia, una coppa gelato a fine pasto. Niente scenografie: i classici di trattoria, senza fronzoli.",
      cta: "Leggi tutto il menù",
      captions: {
        carbonara: "Pasta della casa, con un calice di vino",
        gnocchetti: "Fritto di calamari con limone",
        verdure: "Verdure di stagione alla griglia",
        tiramisu: "Coppa gelato della casa",
      },
    },
    pause: {
      eyebrow: "Dolce e caffè",
      title: "Il piacere di non alzarsi subito",
      body: "Una fetta di crostata, un caffè, ancora cinque minuti a tavola. Il gesto più semplice di una trattoria, e spesso il più bello.",
    },
    pizza: {
      eyebrow: "Pizzeria",
      title: "Anche la sera tardi, anche solo una margherita",
      body: "Forno acceso tutte le sere, impasto classico. Dalla marinara a 6 euro alla Lazio con guanciale e pecorino romano DOP. Le speciali portano il nome delle regioni; la D’Annunzio — crema di zucchine e pomodorini — quello del vicino di casa più illustre.",
    },
    visit: {
      eyebrow: "Prenotare",
      title: "Un tavolo si tiene con una telefonata. O un messaggio.",
      body: "Niente moduli: dimmi quanti siete e a che ora. Se è pieno, ti diciamo subito quando c’è posto.",
      addressLabel: "Indirizzo",
      phoneLabel: "Telefono",
      hoursLabel: "Orari",
      hoursValue: "Chiama per gli orari del giorno",
      directions: "Apri in Google Maps",
    },
    menuPage: {
      title: "Il menù",
      lead: "Il menù della trattoria, della pizzeria e del bar. Prezzi e descrizioni sono quelli della carta in tavola.",
      search: "Cerca",
      searchPlaceholder: "Cerca un piatto, un ingrediente…",
      filters: "Filtra",
      clear: "Azzera",
      noResults: "Nessun piatto corrisponde alla ricerca.",
      allergensTitle: "Allergeni",
      allergensNote:
        "I numeri tra parentesi indicano gli allergeni. Per qualsiasi intolleranza, parlane con noi in sala.",
      frozenNote:
        "Alcuni prodotti ittici possono essere abbattuti o surgelati all'origine, secondo disponibilità.",
      downloadPdf: "Scarica il menù in PDF",
    },
    placePage: {
      title: "Il locale",
      lead: "Trattoria, pizzeria, bar e gelateria: quattro insegne, una porta sola, sotto l'arco giallo di Via Caduti.",
      blocks: [
        {
          title: "La trattoria",
          body: "La sala interna con le tovaglie a quadretti e i tavoli fuori, sul selciato, quando la sera è tiepida. Cucina italiana di casa, pesce di lago e di mare, carne alla griglia.",
        },
        {
          title: "La pizzeria",
          body: "Forno acceso tutte le sere. Pizze classiche, speciali dedicate alle regioni italiane, calzoni e puccia — il panpizza servito con le patatine.",
        },
        {
          title: "Il bar",
          body: "Bar Adria da Maja: caffè al mattino, spritz al tramonto, birre alla spina tedesche e italiane. Si entra anche solo per quello.",
        },
      ],
      galleryTitle: "Il locale e la tavola",
      storyTitle: "La storia",
      storyBody:
        "Questa pagina è pronta per raccontare la storia dell'Adria e di Kevin: chi c'era prima, come è nata la cucina, cosa non è mai cambiato. Mandaci il racconto e lo mettiamo qui, con le vostre parole.",
    },
    contactPage: {
      title: "Dove siamo",
      lead: "Nel centro storico di Gardone Riviera, in Piazza dei Caduti: a pochi passi dal Vittoriale degli Italiani e a pochi minuti a piedi dal lungolago.",
      howToFind: "Come arrivare",
      howToFindBody: [
        "Dal Vittoriale degli Italiani: siamo a pochi passi, scendendo verso il centro storico.",
        "Dal lungolago di Gardone Riviera: siamo a pochi minuti a piedi, a meno di 1 km; la facciata gialla con l'arco della trattoria è all'angolo.",
        "In auto: parcheggi nelle vie del centro storico; l'ultimo tratto si fa a piedi.",
      ],
      mapLabel: "Mappa di Gardone Riviera con la posizione della trattoria",
    },
    footer: {
      tagline: "Trattoria · Pizzeria · Bar — Gardone Riviera, Lago di Garda",
      rights: "Tutti i diritti riservati",
      menuLink: "Menù",
    },
    meta: {
      home: {
        title: "Trattoria Adria da Kevin — Gardone Riviera, Lago di Garda",
        description:
          "Trattoria, pizzeria e bar a Gardone Riviera, a due passi dal Vittoriale. Pesce di lago, pasta fresca, pizza. Prenota al +39 392 788 8456.",
      },
      menu: {
        title: "Menù — Trattoria Adria da Kevin, Gardone Riviera",
        description:
          "Il menù completo: antipasti, primi di lago e di mare, secondi alla griglia, pizze, puccia, insalate, vini del Garda. Prezzi aggiornati.",
      },
      place: {
        title: "Il locale — Trattoria, pizzeria e bar a Gardone Riviera",
        description:
          "La sala, il dehors sul selciato, il forno della pizzeria e il bar Adria: com'è fatta la trattoria all'angolo di Via Caduti, a Gardone Sopra.",
      },
      contact: {
        title: "Dove siamo e come prenotare — Trattoria Adria, Gardone Riviera",
        description:
          "Via Caduti 13/15, Gardone Riviera (BS), vicino al Vittoriale degli Italiani. Prenotazioni telefoniche al +39 392 788 8456.",
      },
    },
  },

  en: {
    htmlLang: "en",
    nav: { home: "Home", menu: "Menu", place: "The place", contact: "Find us" },
    callNow: "Book on WhatsApp",
    bookByPhone: "Message us on WhatsApp or call",
    skipToContent: "Skip to content",
    hero: {
      place: "Gardone Riviera · Lake Garda",
      title: "Trattoria Adria",
      lead: "Under the yellow arches of Via Caduti, a short walk from the Vittoriale: trattoria, pizzeria and bar, the little town way.",
      since: "da Kevin",
      scroll: "Scroll",
    },
    intro: {
      eyebrow: "What kind of place",
      title: "A piece of Gardone, not a postcard",
      body: [
        "We are in the old centre of Gardone Riviera, a few metres from the Vittoriale, on Piazza dei Caduti. You spot Adria from down the street: yellow façade, geraniums at the windows, the arch that reads TRATTORIA.",
        "Inside it feels like home: checked tablecloths, honest plates, people who stay for lunch and people who drop in just for a coffee. Trattoria, pizzeria and bar at the same address. Visitors heading to the Vittoriale stop here before or after. Locals come back on a Wednesday evening without thinking twice.",
      ],
    },
    lake: {
      eyebrow: "The lake on the plate",
      title: "Garda sardines, trout, casoncelli",
      body: [
        "The meal begins with our own courgette flowers: homemade, filled with three cheeses, battered and fried to order.",
        "Alongside them, the Brescia tradition: casoncelli made locally, with butter and sage. And the wines of the lake — Groppello, Lugana — that know this water by heart.",
      ],
      caption: "Spaghetti alla nostra pescatora: mussels, clams, prawns, squid",
    },
    dishes: {
      eyebrow: "In the kitchen",
      title: "A few things, done properly",
      body: "The menu is that of a little town place: everyone should find their dish. House pasta, fried calamari, garden vegetables off the grill, a house sundae to finish. No staging. Trattoria classics, nothing extra.",
      cta: "Read the full menu",
      captions: {
        carbonara: "House pasta, with a glass of wine",
        gnocchetti: "Fried calamari with lemon",
        verdure: "Grilled seasonal vegetables",
        tiramisu: "House ice cream sundae",
      },
    },
    pause: {
      eyebrow: "Dessert and coffee",
      title: "The pleasure of not getting up just yet",
      body: "A slice of jam tart, a coffee, five more minutes at the table. The simplest moment in a trattoria — and often the best.",
    },
    pizza: {
      eyebrow: "Pizzeria",
      title: "Late in the evening, even just a margherita",
      body: "Classic dough, oven on every night. From a €6 marinara to the Lazio with guanciale and pecorino romano DOP. The specials take their names from Italian regions; the D’Annunzio — courgette cream and cherry tomatoes — from the most famous neighbour.",
    },
    visit: {
      eyebrow: "Booking",
      title: "A table is held with a phone call. Or a message.",
      body: "No forms. Tell us how many you are and what time. If we are full, we will say straight away when there is a table.",
      addressLabel: "Address",
      phoneLabel: "Phone",
      hoursLabel: "Opening hours",
      hoursValue: "Call us for today's hours",
      directions: "Open in Google Maps",
    },
    menuPage: {
      title: "The menu",
      lead: "The full menu of the trattoria, pizzeria and bar. Prices and descriptions match the card on the table.",
      search: "Search",
      searchPlaceholder: "Search a dish, an ingredient…",
      filters: "Filter",
      clear: "Reset",
      noResults: "No dish matches your search.",
      allergensTitle: "Allergens",
      allergensNote:
        "Numbers in brackets mark allergens. If you have an intolerance, just tell us in the dining room.",
      frozenNote:
        "Some fish and seafood may have been frozen at source, depending on availability.",
      downloadPdf: "Download the menu as PDF",
    },
    placePage: {
      title: "The place",
      lead: "Trattoria, pizzeria, bar and gelateria: four signs, one door, under the yellow arch of Via Caduti.",
      blocks: [
        {
          title: "The trattoria",
          body: "The inside room with its checked tablecloths, and the tables outside on the cobbles when the evening is warm. Italian home cooking, lake and sea fish, grilled meat.",
        },
        {
          title: "The pizzeria",
          body: "The oven is lit every evening. Classic pizzas, signature ones named after Italian regions, calzoni and puccia — pizza bread served with fries.",
        },
        {
          title: "The bar",
          body: "Bar Adria da Maja: coffee in the morning, spritz at sunset, German and Italian beers on tap. Coming in just for that is perfectly fine.",
        },
      ],
      galleryTitle: "The room and the table",
      storyTitle: "The story",
      storyBody:
        "This page is ready for the story of Adria and Kevin: who was here before, how the kitchen came to be, what never changed. Send us the story and it goes here, in your own words.",
    },
    contactPage: {
      title: "Find us",
      lead: "In Gardone Riviera’s historic centre, in Piazza dei Caduti: a few steps from the Vittoriale and a short walk from the lakefront.",
      howToFind: "Getting here",
      howToFindBody: [
        "From the Vittoriale degli Italiani: we are just a few steps away, walking down towards the historic centre.",
        "From the Gardone Riviera lakefront: we are a short walk away, less than 1 km; the yellow facade with the trattoria arch is on the corner.",
        "By car: park in the streets of the old centre; the last stretch is on foot.",
      ],
      mapLabel: "Map of Gardone Riviera showing the trattoria",
    },
    footer: {
      tagline: "Trattoria · Pizzeria · Bar — Gardone Riviera, Lake Garda",
      rights: "All rights reserved",
      menuLink: "Menu",
    },
    meta: {
      home: {
        title: "Trattoria Adria da Kevin — Gardone Riviera, Lake Garda",
        description:
          "Trattoria, pizzeria and bar in Gardone Riviera, minutes from the Vittoriale. Lake fish, fresh pasta, pizza. Book on +39 392 788 8456.",
      },
      menu: {
        title: "Menu — Trattoria Adria da Kevin, Gardone Riviera",
        description:
          "The full menu: starters, lake and sea pasta, grilled mains, pizza, puccia, salads and Garda wines, with prices.",
      },
      place: {
        title: "The place — Trattoria, pizzeria and bar in Gardone Riviera",
        description:
          "The dining room, the tables on the cobbles, the pizza oven and the Adria bar: the trattoria on the corner of Via Caduti in Gardone Sopra.",
      },
      contact: {
        title: "Find us and book — Trattoria Adria, Gardone Riviera",
        description:
          "Via Caduti 13/15, Gardone Riviera (BS), near the Vittoriale degli Italiani. Phone bookings on +39 392 788 8456.",
      },
    },
  },

  de: {
    htmlLang: "de",
    nav: { home: "Start", menu: "Speisekarte", place: "Das Lokal", contact: "Anfahrt" },
    callNow: "Per WhatsApp reservieren",
    bookByPhone: "Schreiben Sie uns auf WhatsApp oder rufen Sie an",
    skipToContent: "Zum Inhalt springen",
    hero: {
      place: "Gardone Riviera · Gardasee",
      title: "Trattoria Adria",
      lead: "Unter den gelben Bögen der Via Caduti, wenige Schritte vom Vittoriale: Trattoria, Pizzeria und Bar, wie im Dorf.",
      since: "da Kevin",
      scroll: "Scrollen",
    },
    intro: {
      eyebrow: "Was für ein Ort",
      title: "Ein Stück Gardone, keine Postkarte",
      body: [
        "Wir sind im historischen Zentrum von Gardone Riviera, wenige Meter vom Vittoriale entfernt, an der Piazza dei Caduti. Das Adria erkennt man von weitem: gelbe Fassade, Geranien an den Fenstern, der Bogen mit dem Schriftzug TRATTORIA.",
        "Drinnen isst man wie zu Hause: karierte Tischdecken, ehrliche Teller, Gäste zum Mittagessen und Gäste nur auf einen Kaffee. Trattoria, Pizzeria und Bar unter derselben Adresse. Wer zum Vittoriale hinaufgeht, kehrt davor oder danach ein. Wer in Gardone lebt, kommt am Mittwochabend ganz selbstverständlich wieder.",
      ],
    },
    lake: {
      eyebrow: "Der See auf dem Teller",
      title: "Gardasee-Sardinen, Forelle, Casoncelli",
      body: [
        "Den Anfang machen unsere Zucchiniblüten: hausgemacht, mit drei Käsesorten gefüllt, im Teigmantel und frisch frittiert.",
        "Daneben die Brescianer Tradition: Casoncelli aus unserer Region, mit Butter und Salbei. Und die Weine des Sees — Groppello, Lugana —, die dieses Wasser kennen.",
      ],
      caption: "Spaghetti alla nostra pescatora: Miesmuscheln, Venusmuscheln, Garnelen, Tintenfisch",
    },
    dishes: {
      eyebrow: "Aus der Küche",
      title: "Wenige Dinge, richtig gemacht",
      body: "Die Karte ist die eines Dorflokals: jede und jeder soll das Passende finden. Hausgemachte Pasta, frittierte Calamari, Gemüse vom Grill, zum Schluss ein Eisbecher. Keine Inszenierung. Klassiker der Trattoria, ohne Schnörkel.",
      cta: "Ganze Speisekarte lesen",
      captions: {
        carbonara: "Hausgemachte Pasta, dazu ein Glas Wein",
        gnocchetti: "Frittierte Calamari mit Zitrone",
        verdure: "Gegrilltes Gemüse der Saison",
        tiramisu: "Eisbecher des Hauses",
      },
    },
    pause: {
      eyebrow: "Dolce und Kaffee",
      title: "Die Freude, noch nicht aufzustehen",
      body: "Ein Stück Marmeladenkuchen, ein Kaffee, noch fünf Minuten am Tisch. Der einfachste Moment in einer Trattoria — und oft der schönste.",
    },
    pizza: {
      eyebrow: "Pizzeria",
      title: "Auch spätabends, auch nur eine Margherita",
      body: "Klassischer Teig, jeden Abend heißer Ofen. Von der Marinara für 6 Euro bis zur Lazio mit Guanciale und Pecorino Romano DOP. Die Spezial-Pizzen tragen Namen italienischer Regionen; die D’Annunzio — Zucchinicreme und Kirschtomaten — den des berühmtesten Nachbarn.",
    },
    visit: {
      eyebrow: "Reservieren",
      title: "Ein Tisch wird mit einem Anruf gehalten. Oder einer Nachricht.",
      body: "Kein Formular. Sagen Sie uns, wie viele Sie sind und um wie viel Uhr. Wenn es voll ist, sagen wir sofort, wann wieder Platz ist.",
      addressLabel: "Adresse",
      phoneLabel: "Telefon",
      hoursLabel: "Öffnungszeiten",
      hoursValue: "Rufen Sie uns für die heutigen Zeiten an",
      directions: "In Google Maps öffnen",
    },
    menuPage: {
      title: "Die Speisekarte",
      lead: "Die Karte der Trattoria, der Pizzeria und der Bar. Preise und Beschreibungen entsprechen der Karte auf dem Tisch.",
      search: "Suchen",
      searchPlaceholder: "Gericht oder Zutat suchen…",
      filters: "Filtern",
      clear: "Zurücksetzen",
      noResults: "Kein Gericht passt zur Suche.",
      allergensTitle: "Allergene",
      allergensNote:
        "Die Zahlen in Klammern stehen für Allergene. Bei Unverträglichkeiten einfach im Saal Bescheid sagen.",
      frozenNote:
        "Einige Fisch- und Meeresfrüchteprodukte können je nach Verfügbarkeit tiefgekühlt sein.",
      downloadPdf: "Speisekarte als PDF laden",
    },
    placePage: {
      title: "Das Lokal",
      lead: "Trattoria, Pizzeria, Bar und Gelateria: vier Schilder, eine Tür, unter dem gelben Bogen der Via Caduti.",
      blocks: [
        {
          title: "Die Trattoria",
          body: "Der Innenraum mit den karierten Tischdecken und die Tische draußen auf dem Pflaster, wenn der Abend mild ist. Italienische Hausmannskost, Fisch aus See und Meer, Fleisch vom Grill.",
        },
        {
          title: "Die Pizzeria",
          body: "Der Ofen brennt jeden Abend. Klassische Pizzen, Spezialitäten mit Namen italienischer Regionen, Calzoni und Puccia — Pizzabrot mit Pommes.",
        },
        {
          title: "Die Bar",
          body: "Bar Adria da Maja: Kaffee am Morgen, Spritz bei Sonnenuntergang, deutsche und italienische Biere vom Fass. Auch nur dafür darf man hereinkommen.",
        },
      ],
      galleryTitle: "Der Raum und der Tisch",
      storyTitle: "Die Geschichte",
      storyBody:
        "Diese Seite ist bereit für die Geschichte des Adria und von Kevin: wer vorher hier war, wie die Küche entstand, was nie anders wurde. Schicken Sie uns den Text, wir setzen ihn hierher — in Ihren Worten.",
    },
    contactPage: {
      title: "Anfahrt",
      lead: "Im historischen Zentrum von Gardone Riviera, an der Piazza dei Caduti: wenige Schritte vom Vittoriale und nur wenige Gehminuten von der Seepromenade entfernt.",
      howToFind: "So finden Sie uns",
      howToFindBody: [
        "Vom Vittoriale degli Italiani: nur wenige Schritte hinunter in Richtung Altstadt.",
        "Von der Seepromenade in Gardone Riviera: wenige Gehminuten und weniger als 1 km; die gelbe Fassade mit dem Trattoria-Bogen steht an der Ecke.",
        "Mit dem Auto: Parkplätze in den Gassen des Ortskerns; das letzte Stück geht zu Fuß.",
      ],
      mapLabel: "Karte von Gardone Riviera mit der Lage der Trattoria",
    },
    footer: {
      tagline: "Trattoria · Pizzeria · Bar — Gardone Riviera, Gardasee",
      rights: "Alle Rechte vorbehalten",
      menuLink: "Speisekarte",
    },
    meta: {
      home: {
        title: "Trattoria Adria da Kevin — Gardone Riviera, Gardasee",
        description:
          "Trattoria, Pizzeria und Bar in Gardone Riviera, nahe dem Vittoriale. Seefisch, frische Pasta, Pizza. Reservierung: +39 392 788 8456.",
      },
      menu: {
        title: "Speisekarte — Trattoria Adria da Kevin, Gardone Riviera",
        description:
          "Die ganze Karte: Vorspeisen, Pasta mit See- und Meeresfisch, Gegrilltes, Pizza, Puccia, Salate und Gardasee-Weine, mit Preisen.",
      },
      place: {
        title: "Das Lokal — Trattoria, Pizzeria und Bar in Gardone Riviera",
        description:
          "Gaststube, Tische auf dem Pflaster, Pizzaofen und Bar Adria: die Trattoria an der Ecke der Via Caduti in Gardone Sopra.",
      },
      contact: {
        title: "Anfahrt und Reservierung — Trattoria Adria, Gardone Riviera",
        description:
          "Via Caduti 13/15, Gardone Riviera (BS), nahe dem Vittoriale degli Italiani. Telefonische Reservierung: +39 392 788 8456.",
      },
    },
  },
};
