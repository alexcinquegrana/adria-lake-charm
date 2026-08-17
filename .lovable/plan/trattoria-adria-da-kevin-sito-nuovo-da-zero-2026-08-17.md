# Trattoria Adria da Kevin — sito nuovo, da zero

Progetto ripartito da zero: nessuna sezione dell'attuale placeholder viene conservata. Direzione creativa, contenuti e struttura derivano dal materiale reale (menù ufficiale, foto della facciata e dei piatti).

## Direzione artistica

Registro editoriale, caldo e artigianale — non "fine dining" finto, non template ristorante.

- Palette dal menù reale: giallo ocra della facciata, rosso profondo dell'insegna, verde salvia dei piatti in ceramica, carta calda come sfondo. Nessun bianco clinico.
- Tipografia: serif editoriale a grandi corpi per i titoli (display), sans neutra e ampia per il testo. Firma "with love Adria" usata come marchio ricorrente, non come decoro.
- Composizione: griglia asimmetrica, molto spazio negativo, fotografia a piena larghezza alternata a blocchi di testo stretti. Ritmo verticale variabile invece della sequenza hero→cards→cards.
- Movimento: solo rivelazioni discrete allo scroll e transizioni di stato. Nessun effetto decorativo.

## Struttura

Nessuna homepage a blocchi intercambiabili. Percorso: dove siamo → che posto è → cosa si mangia → prenota.

- **/** — apertura sulla facciata reale con nome, luogo e telefono; passaggio narrativo su Gardone Riviera e il Vittoriale; anteprima curata della cucina (piatti del lago in evidenza: Bigoli alle Sarde del Garda, Maccheroncini al Ragù di Lago); accenno alla pizzeria; chiusura su orari/indirizzo/prenotazione.
- **/menu** — menù digitale completo e navigabile.
- **/il-locale** — trattoria, pizzeria e bar raccontati con le foto reali; sezione predisposta per la storia del locale, da riempire quando i contenuti saranno disponibili.
- **/contatti** — indirizzo, mappa, telefono, come arrivare dal Vittoriale e dal lungolago.

Ogni pagina esiste nelle tre lingue con URL propri: `/`, `/en/...`, `/de/...`.

## Menù digitale

Il PDF non viene incorporato: resta scaricabile come alternativa.

- Tutti i contenuti in file dati TypeScript separati dalla UI (una voce = nome, descrizione IT/EN/DE, prezzo, allergeni, tag come "pesce di lago", "vegetariano").
- Categorie fedeli al menù ufficiale: Antipasti, Primi di terra, Primi di pesce, Secondi, Pizze classiche, Pizze speciali, Pizze bianche, Calzoni, Puccia, Insalate, Contorni, Aperitivi, Cocktail, Birre, Vini, Caffetteria.
- Navigazione mobile-first: barra categorie sticky, scorrimento fluido, ricerca, filtri per allergeni/tag; prezzi allineati e leggibili.
- Prezzi e testi esattamente quelli del menù ufficiale. Nessun piatto o ingrediente inventato.

## Conversione

- Telefono +39 392 788 8456 sempre raggiungibile: nell'header su desktop, con una barra di chiamata discreta e non invadente su mobile (compare dopo la prima schermata).
- Indirizzo Via Caduti 13/15, 25083 Gardone Riviera (BS) ripetuto in modo coerente (NAP) in header contestuale, contatti, footer e dati strutturati.
- Orari: struttura pronta, valori da fornire — nessun orario inventato.

## Multilingua

IT lingua principale, EN e DE complete e scritte in modo naturale (non traduzioni letterali). Dizionari di contenuto separati, selettore lingua nella navigazione, hreflang reciproci su ogni pagina.

## SEO

Title e meta description per pagina e per lingua orientati a ricerche locali (trattoria/ristorante/pizzeria Gardone Riviera, vicino al Vittoriale, pesce di lago), senza keyword stuffing. Una sola H1 per pagina, gerarchia corretta, canonical self-referencing, hreflang, sitemap con tutte le lingue, robots.txt, Open Graph e Twitter card, structured data Restaurant/LocalBusiness con indirizzo, telefono, geo, cucine servite, link al menù, più BreadcrumbList sulle pagine interne. Alt text descrittivi e reali su ogni foto.

## Fotografia

Le sei foto caricate vengono ritagliate per eliminare barra di stato, pulsanti, nomi utente e ogni elemento di interfaccia; resta solo la fotografia. Nessuna "ripulitura" che ne tolga l'autenticità. Le immagini vengono caricate su CDN e servite in formato ottimizzato con dimensioni corrette e lazy loading sotto la prima schermata. Dove servono immagini aggiuntive, si usa materiale coerente con il luogo, mai stock generico.

## Note tecniche

- TanStack Start, rotte file-based; layout condiviso, componenti riutilizzabili (blocchi editoriali, voce di menù, blocco contatti).
- Design tokens (colori oklch, tipografia, radius, ombre) definiti in `src/styles.css`; nessun colore hardcoded nei componenti.
- Contenuti in `src/content/` (menu, copy per lingua, dati locale) separati dalla UI e facilmente aggiornabili.
- Nessuna nuova dipendenza pesante; animazioni con CSS e IntersectionObserver.
- Accessibilità: contrasto verificato, focus visibile, touch target ≥44px, navigazione da tastiera, `lang` corretto per lingua.

## Revisione finale

Al termine: verifica in preview su mobile e desktop di tutte le pagine e lingue, controllo di leggibilità, spaziature, immagini, CTA e dati strutturati, correzione autonoma di ciò che risulta generico o poco curato.

## Cosa manca (predisposto, non inventato)

Orari di apertura, storia del locale e di Kevin, recensioni, eventuale sistema di prenotazione online: struttura pronta, contenuti da inserire quando disponibili.
