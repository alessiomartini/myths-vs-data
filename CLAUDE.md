# Istruzioni per Claude

Sito statico (HTML/CSS/JS, nessun build) che, per miti e affermazioni popolari di entrambi gli schieramenti,
mostra le evidenze scientifiche con dati e grafici. Lingua del sito e della documentazione: italiano.

## Regole
- Dati in `data/claims.json` (campi: id, claim, sides (lista di etichette: sinistra, destra, liberista, pro-mercato, critico del mercato, popolare), topic, type, verdict, evidence, summary, sources[{title,url}], chart).
- **Mai inventare una fonte, un numero o un URL.** Ogni URL va aperto e controllato prima di inserirlo; nel dubbio, omettere.
- `sources/raw-ai-dumps/` = solo elenco di affermazioni, non prove.
- Tipi: empirico (verdetto) / normativo (nessun verdetto, elencare i fatti empirici) / definizione. Evidenza: consenso, misto, debole, nessun dato, non empirico.
- Presentare entrambe le parti quando la letteratura e' divisa; dire quando l'evidenza e' debole.
- Widget feedback: `js/notes-widget.js` e' copia identica di `site-notes/widget/notes-widget.js`: non modificarlo.
- Verifica: `python -m http.server` e controllare `data/claims.json` con `python -m json.tool`.
