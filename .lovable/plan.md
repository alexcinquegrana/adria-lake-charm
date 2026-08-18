# Adria — inversione cromatica, WhatsApp, logo e wow factor

Cinque interventi: palette invertita, CTA WhatsApp al posto della chiamata, logo proprio in navbar, mappa Google, e una revisione estetica che alzi decisamente il livello.

## 1. Palette invertita — rosso, bianco, oro

Il sito passa da "carta calda" a fondo rosso profondo dominante.

- Sfondo: rosso scuro (tono dell'insegna, leggermente desaturato per non affaticare).
- Testo: bianco caldo, non bianco puro.
- Dettagli, accenti, filetti, prezzi, hover, bordi: giallo ocra/oro.
- Superfici secondarie: rosso più scuro e rosso leggermente più chiaro per creare profondità tra le sezioni.
- Tutto tramite i token in `src/styles.css`: nessun colore scritto a mano nei componenti. Contrasto verificato (AA) su testo, link e stati di focus.
- Le fotografie restano il punto caldo della pagina: su fondo rosso guadagnano forza, con leggera vignettatura e bordi netti.

## 2. CTA WhatsApp al posto di "Chiama ora"

Ogni "Chiama e prenota" / "Call to book" / "Anrufen & reservieren" diventa un link WhatsApp diretto a +39 392 788 8456, con messaggio precompilato nella lingua della pagina:

- IT: "Ciao Kevin, vorrei prenotare un tavolo il…"
- EN: "Hi Kevin, I'd like to book a table on…"
- DE: "Hallo Kevin, ich möchte einen Tisch reservieren am…"

Sostituzione in header, hero, barra fissa mobile e pagina contatti. Il numero di telefono resta comunque visibile e cliccabile come dato di contatto (footer, contatti, dati strutturati); sparisce solo come pulsante d'azione primario.

## 3. Logo del ristorante

Marchio disegnato su misura, non generico: monogramma "A" / lemniscata del nome "Adria" con la firma "da Kevin", in oro su rosso, versione compatta per la navbar e versione estesa per hero e footer. SVG inline così scala perfetto, cambia colore col tema e non pesa. Usato anche come favicon e immagine di condivisione.

## 4. Mappa Google

La mappa OpenStreetMap in `/contatti` viene sostituita da Google Maps embed centrata su Via Caduti 13/15, con caricamento lazy, cornice coerente col tema e pulsante "Apri in Google Maps / Indicazioni". Aggiunta anche una fascia mappa breve in fondo alla home.

## 5. Effetto wow — dove il sito diventa memorabile

Non decorazione fine a sé stessa: gesti forti e pochi, eseguiti bene.

- **Apertura in scena**: hero a piena altezza con la facciata, nome del ristorante in tipografia molto grande che entra con un'animazione di rivelazione a maschera, sopra un velo rosso che si dissolve.
- **Tipografia scultorea**: titoli enormi, giustapposti a testo piccolissimo e spaziato; numeri di sezione e filetti oro come in una rivista.
- **Scroll cinematico**: parallasse leggera sulle immagini, immagini che si rivelano dal basso con maschera, testo che entra riga per riga. Sempre discreto, sempre disattivato con `prefers-reduced-motion`.
- **Sezione piatti immersiva**: da griglia di quadrati a composizione editoriale asimmetrica, con una fascia orizzontale a scorrimento e didascalie oro.
- **Texture e materia**: grana sottile di carta/stampa sul rosso, bordi a filetto oro, piccolo pattern ricorrente ispirato alle onde del lago come divisore tra sezioni.
- **Menù digitale**: barra categorie che diventa un indice elegante, prezzi allineati con filetto punteggiato oro, evidenziazione dei piatti di lago.
- **Micro-dettagli**: hover con sottolineatura oro che cresce, cursore/stati curati, footer come "colophon" con logo grande.

## Note tecniche

- Token colore ridefiniti in `src/styles.css` (oklch), nuovi token per oro e superfici rosse; `@utility` per grana, filetti e maschere di rivelazione.
- Un unico helper per il link WhatsApp con messaggio per lingua in `src/content/site.ts`.
- Animazioni con CSS + IntersectionObserver (componente `Reveal` esistente esteso), nessuna libreria aggiuntiva.
- Logo come componente React SVG in `src/components/Logo.tsx`.
- Verifica finale in preview su mobile e desktop, tutte le pagine e le tre lingue.
