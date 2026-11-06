(function () {
  var list = document.getElementById('list'), claims = [];
  var F = {topic: 'f-topic', sides: 'f-side', evidence: 'f-evidence'};
  var LAB = {topic: 'Tutti i temi', sides: 'Tutti', evidence: 'Tutte'};
  function el(t, c, x) { var e = document.createElement(t); if (c) e.className = c; if (x) e.textContent = x; return e; }
  function fill() {
    Object.keys(F).forEach(function (k) {
      var s = document.getElementById(F[k]), vals = [];
      claims.forEach(function (c) { [].concat(c[k]).forEach(function (x) { if (vals.indexOf(x) < 0) vals.push(x); }); });
      s.appendChild(new Option(LAB[k], ''));
      vals.sort().forEach(function (v) { s.appendChild(new Option(v, v)); });
      s.onchange = render;
    });
  }
  function card(c) {
    var d = el('article', 'card'), b = el('button'), body = el('div', 'body'), tags = el('div', 'tags');
    b.setAttribute('aria-expanded', 'false');
    b.appendChild(el('h2', '', c.claim));
    [c.topic].concat(c.sides, c.type).forEach(function (t) { tags.appendChild(el('span', 'tag', t)); });
    tags.appendChild(el('span', 'tag ev ' + c.evidence.replace(/ /g, '-'), 'evidenza: ' + c.evidence));
    b.appendChild(tags);
    if (c.verdict) b.appendChild(el('p', 'verdict', c.verdict));
    body.appendChild(el('p', '', c.summary));
    var ul = el('ul');
    c.sources.forEach(function (s) {
      var li = el('li'), a = el('a', '', s.title);
      a.href = s.url; a.target = '_blank'; a.rel = 'noopener';
      li.appendChild(a); ul.appendChild(li);
    });
    body.appendChild(el('h3', '', 'Fonti')); body.appendChild(ul);
    b.onclick = function () {
      var open = d.classList.toggle('open');
      b.setAttribute('aria-expanded', open);
      if (open && c.chart && !body.querySelector('iframe')) {
        var f = el('iframe'); f.loading = 'lazy'; f.title = 'Grafico: ' + c.claim;
        f.src = c.chart + '?tab=chart'; body.appendChild(f);
        body.appendChild(el('p', 'tags', 'Grafico: Our World in Data (CC BY)'));
      }
    };
    d.appendChild(b); d.appendChild(body);
    return d;
  }
  function render() {
    list.textContent = '';
    var n = 0;
    claims.forEach(function (c) {
      for (var k in F) { var v = document.getElementById(F[k]).value; if (v && [].concat(c[k]).indexOf(v) < 0) return; }
      list.appendChild(card(c)); n++;
    });
    if (!n) list.appendChild(el('p', '', 'Nessuna affermazione con questi filtri.'));
  }
  fetch('data/claims.json').then(function (r) { return r.json(); }).then(function (d) { claims = d; fill(); render(); })
    .catch(function () { list.textContent = 'Impossibile caricare i dati (usa un server locale: python -m http.server).'; });
})();
