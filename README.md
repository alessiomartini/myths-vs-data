questo e' un nuovo progetto che vorrei trasformare in sito web.

vorrei prendere tutti i miti, credenze, etc. che ci sono, per esempio riguardo a economia, politica, finanza, fisica, matematica, etc. che sia da entrambi i lati del dibattito, per esempio pro e contro la globalizzazione o pro e contro capitalismo o pro e contro anarchismo etc. e cercare di capire se esiste una risposta backed up dalla scienza a riguardo, possibillmente con dati, grafici, etc.


**Sito:** https://alessiomartini.github.io/myths-vs-data/

## Cos'e' / come si usa

Sito statico (HTML/CSS/JS, nessun build). Ogni scheda e' un'affermazione popolare, con tipo, verdetto,
livello di evidenza, fonti verificate e (se c'e') un grafico di Our World in Data.

Per provarlo: apri `index.html` oppure, dalla cartella del progetto, `python -m http.server` e vai su http://localhost:8000
(con `file://` il caricamento di `data/claims.json` puo' essere bloccato dal browser, meglio il server).

Struttura: `data/claims.json` (contenuti), `css/style.css`, `js/app.js`, `js/notes-widget.js` (feedback, copia dal progetto site-notes),
`sources/raw-ai-dumps/` (vecchi elenchi di affermazioni, non sono prove). Piani e decisioni: `ROADMAP.md`.
