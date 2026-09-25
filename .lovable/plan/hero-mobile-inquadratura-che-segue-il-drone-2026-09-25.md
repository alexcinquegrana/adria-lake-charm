# Hero mobile: inquadratura che segue il drone

## Obiettivo
Solo su telefono: la hero parte con l'inquadratura spostata a sinistra (focus sul locale, senza le due persone) e, durante lo zoom-out del drone nel video, torna gradualmente al centro così da mostrare tutto il locale e la scritta "TRATTORIA" per intero. Su PC l'inquadratura resta invariata (centrata, come ora).

## Come funziona
- Il video hero dura ~13,5 s: la prima parte è ravvicinata, il drone si allontana nella seconda metà.
- Su mobile il video usa `object-position` spostato a sinistra (stato attuale). Lo rendiamo dinamico:
  - Ascoltiamo l'evento `timeupdate` del video (o `requestAnimationFrame` leggendo `video.currentTime`).
  - Calcoliamo un progresso `p = currentTime / duration` e lo mappiamo con una curva morbida (ease-in-out) sull'`object-position`: da sinistra (valore attuale, es. `38% 50%`) a centro (`50% 50%`).
  - Lo spostamento inizia circa a metà video (quando parte lo zoom-out) e si completa verso la fine, così il movimento della crop segue il movimento del drone e risulta naturale, non un salto.
- Applicato solo sotto il breakpoint `sm` (via media query / matchMedia): desktop invariato.
- Nessun impatto su poster, overlay scroll-driven, navbar a comparsa e indicatore di scorrimento.

## File toccati
- `src/components/HomePage.tsx` — logica di pan dinamico della hero su mobile (ref al video, listener, interpolazione `object-position`).

## Verifica
- Playwright a 393px: screenshot a inizio, metà e fine video per confermare il pan sinistra → centro e la scritta intera visibile alla fine.
- Playwright a 1280px: conferma che l'inquadratura desktop non è cambiata.
- Controllo build OK.
