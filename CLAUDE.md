# Istruzioni per Claude

Sito statico (HTML/CSS/JS, nessun build) che, per miti e affermazioni popolari di entrambi gli schieramenti,
mostra le evidenze scientifiche con dati e grafici. Lingua del sito e della documentazione: italiano.

## Regole
- Dati in `data/claims.json` (campi: id, claim, side, topic, type, verdict, evidence, summary, sources[{title,url}], chart).
- **Mai inventare una fonte, un numero o un URL.** Ogni URL va aperto e controllato prima di inserirlo; nel dubbio, omettere.
- `sources/raw-ai-dumps/` = solo elenco di affermazioni, non prove.
- Tipi: empirico (verdetto) / normativo (nessun verdetto, elencare i fatti empirici) / definizione. Evidenza: consenso, misto, debole, nessun dato, non empirico.
- Presentare entrambe le parti quando la letteratura e' divisa; dire quando l'evidenza e' debole.
- Link senza sottolineatura blu (grassetto, colore solo al passaggio). Controllare sempre il layout mobile.
- Widget feedback: `js/notes-widget.js` e' copia identica di `site-notes/widget/notes-widget.js`: non modificarlo. Sito `myths-vs-data` in SITES di site-notes (serve il deploy di Alessio).
- Cambiando css/js alzare `?v=` in index.html.
- Verifica: `python -m http.server` e controllare `data/claims.json` con `python -m json.tool`.

## Roadmap, idee e progressi

`ROADMAP.md` nella root è l'**unico** file per todo, idee, decisioni e diario del progetto
(niente `FUTURE-ARCHITECTURE.md`, `IDEE.md`, `TODO.md`). È letto da https://alessiomartini.github.io/projects-overview/.
Sezioni: `## <fase>` (checkbox, contano nella percentuale), `## Idee` (checkbox, non contano),
`## Decisioni e cose provate` (prosa: scartato/rimandato e perché, provato e annullato, limiti e bug noti), `## Log`.

- Alla fine di ogni sessione di lavoro (prima del commit finale), aggiorna `ROADMAP.md`:
  - spunta (`- [x]`) i punti completati in questa sessione;
  - aggiungi come `- [ ]` i nuovi compiti nella fase giusta, e le idee non decise in `## Idee`;
  - annota in `## Decisioni e cose provate` ciò che è stato scartato, rimandato o annullato, col perché;
  - aggiungi in cima a `## Log` una riga `- AAAA-MM-GG: <cosa è stato fatto, in una frase>`
    (se esiste già una riga con la data di oggi, estendila invece di crearne un'altra).
- Non riscrivere né riordinare le voci esistenti senza motivo; non cancellare le voci completate.
- Includi l'aggiornamento di `ROADMAP.md` nello stesso commit del lavoro.
