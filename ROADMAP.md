# Roadmap

## Sito base
- [x] Scheletro statico: index.html, css, js, data/claims.json
- [x] Filtri per tema / schieramento / evidenza, schede espandibili con fonti e grafico
- [x] Widget Feedback (site-notes)
- [x] Prime 5 affermazioni con fonti verificate
- [ ] Deploy di site-notes con `myths-vs-data` in SITES (Alessio)
- [ ] Pubblicare su GitHub Pages (repo privato: serve decidere se renderlo pubblico)

## Contenuti
- [x] Seconda tornata: 10 affermazioni (15 totali)
- [ ] Altre ~15 affermazioni da `sources/raw-ai-dumps/` (economia, politica, finanza), bilanciando i due schieramenti
- [ ] Per ogni affermazione normativa: elenco dei fatti empirici sottostanti
- [ ] Aggiungere un dato primario (grafico proprio) dove OWID non basta (SPIVA, TIC, WID)
- [ ] Fisica e matematica (fase successiva)

## Idee
- [ ] Collegare le schede alle pagine di markets-first-principles
- [ ] Possibile figlio/sezione di "Capire il mondo" (non deciso)
- [ ] Sondaggi Clark Center (ex IGM Forum) come indicatore del consenso degli esperti

## Decisioni e cose provate
- **Tipi di affermazione**: `empirico` (riceve un verdetto), `normativo` (nessun verdetto: "questione di valori", si elencano i fatti empirici sottostanti), `definizione` (equivoco sul significato dei termini).
- **Scala di evidenza** (ispirata a GRADE): `consenso` (meta-analisi / consenso degli esperti), `misto`, `debole`, `nessun dato`, `non empirico`.
- **Bilanciamento**: affermazioni scelte da entrambi gli schieramenti; il campo `sides` (lista, anche piu' etichette) dice da chi viene l'affermazione: sinistra, destra, liberista, pro-mercato, critico del mercato, popolare. Le etichette sono una semplificazione; una tesi puo' venire da piu' parti (es. protezionismo).
- **Grafici**: iframe del grapher di Our World in Data (CC-BY) quando c'è; consenso degli esperti dai sondaggi Clark Center; dati primari (SPIVA, US Treasury TIC, WID).
- **Dump AI scartati come fonti**: i file in `sources/raw-ai-dumps/` hanno citazioni senza URL e alcune "realtà" di parte; usati solo come lista di affermazioni.
- **Widget Feedback**: copia identica di `site-notes/widget/notes-widget.js` (non modificarla qui).
- Limite: SPIVA e CBO bloccano il fetch automatico (403); per SPIVA le cifre precise non sono state ricontrollate sul PDF, quindi la scheda cita solo la conclusione qualitativa.

## Log
- 2026-11-06: etichette di schieramento multiple (campo `sides`, aggiunte sinistra/destra/liberista); aggiunte 10 affermazioni (affitto, dividendi, rent control, dazi, disuguaglianza, immigrazione, divario di genere, debito 90%, carbon pricing, proprieta' come furto): 15 totali. Fonti non lette per intero: Nature (redirect), JSTOR/Nobel (403), Beracha-Johnson e Miller-Modigliani solo pagina bibliografica; nessun grafico OWID adatto trovato.
- 2026-11-06: repo pubblico, sito online su GitHub Pages: https://alessiomartini.github.io/myths-vs-data/
- 2026-11-06: progetto avviato: struttura, sito statico, 5 affermazioni verificate, feedback collegato a site-notes
