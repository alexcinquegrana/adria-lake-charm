# Aggiornamento fotografico mirato

## Ambito
Intervenire esclusivamente sulle fotografie, mantenendo invariati design, struttura, navigazione, tipografia, colori, animazioni e testi esistenti, salvo le brevi didascalie necessarie per descrivere correttamente i nuovi soggetti.

## Componenti fotografici individuati
- `HomePage`: facciata principale, fotografia “Il lago nel piatto”, griglia “In cucina” e punto adatto alla fascia editoriale dolce.
- `PlacePage`: facciata e galleria secondaria; non saranno modificate perché non richiesto.
- `ContactPage`: contiene solo la mappa; non sarà modificata.

## Modifiche
1. Caricare le quattro fotografie fornite come risorse ottimizzate, senza filtri o alterazioni cromatiche.
2. Nella griglia “In cucina” sostituire solo:
   - carbonara con FOTO 6, pasta con vino;
   - gnocchi con FOTO 7, fritto di calamari;
   - tiramisù con FOTO 2, coppa gelato;
   - lasciare invariata la fotografia delle verdure.
3. Conservare senza modifiche la facciata principale e gli spaghetti/frutti di mare nella sezione “Il lago nel piatto”.
4. Inserire FOTO 4, crostata e caffè, in un’unica fascia editoriale semplice dopo “In cucina”, con immagine ampia, crop responsive e testo sobrio tradotto in IT/EN/DE sul tema “Il piacere di fermarsi”. Non aggiungerla alla griglia.
5. Aggiornare esclusivamente le didascalie delle card che altrimenti descriverebbero piatti non più mostrati.

## Dettagli tecnici
- Conservare le proporzioni attuali delle card (`square` e `4:5`) con `object-fit: cover` e posizionamento mirato del soggetto.
- Dare alla nuova fascia dimensioni stabili e proporzioni responsive per evitare deformazioni e spostamenti del layout.
- Usare caricamento differito per tutte le nuove immagini sotto la prima schermata.
- Verificare la home in italiano, inglese e tedesco su desktop, tablet e mobile, controllando caricamento, crop, leggibilità e assenza di regressioni.
