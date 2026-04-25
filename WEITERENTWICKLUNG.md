# Krümmel Bochum – Weiterentwicklungsplan

Status: Erste statische Homepage steht (siehe `site/`).
Nächste Schritte sind in vier Phasen gegliedert – von „Quick Wins" bis hin zu echtem Geschäftsmehrwert.

---

## Phase 1 — Inhalte & Echtbetrieb (Woche 1–2)

Ziel: Aus der Vorlage wird eine **echte, glaubwürdige** Seite.

- [ ] **Echte Bilder einsetzen**
  - Hero-Bild: Foto vom Werksverkauf / Fleischtheke (statt Stockfoto)
  - Produktwelt-Bilder: 6 echte Fotos aus dem Sortiment
  - Über-uns-Bild: Team / Betriebsgelände / Schlachthof außen
- [ ] **Reale Daten einpflegen**
  - Adresse, Telefonnummer, korrekte Öffnungszeiten
  - Echte E-Mail-Adresse für Kontakt
  - Korrektes Google-Maps-Embed (statt OpenStreetMap-Bbox)
- [ ] **Aktuelle Wochenangebote**
  - 4 echte Angebote inkl. Bild, Preis, Einheit
  - Optional: Datum „gültig bis …"
- [ ] **Pflichtseiten anlegen**
  - Impressum (rechtlich verpflichtend in DE)
  - Datenschutzerklärung (DSGVO)
  - Cookie-Banner falls Tracking eingebunden wird

**Aufwand:** ~1–2 Tage Content-Arbeit + Bilder.

---

## Phase 2 — Conversion & Vertrauen (Woche 3–4)

Ziel: Mehr Anrufe, mehr Werksverkauf-Besucher.

- [ ] **WhatsApp-Bestellung**
  - „Click-to-WhatsApp"-Button auf Mobil prominent einbauen
  - Vorausgefüllte Nachricht: „Hallo, ich möchte vorbestellen …"
- [ ] **Wochenangebote als PDF**
  - Download-Button für die Angebote-Liste
  - Automatisch über Google Drive / Dropbox-Link aktualisierbar
- [ ] **„Grillpaket der Woche"** als Aktions-Banner
  - Saisonal: Sommer = Grill, Winter = Eintopf/Braten
- [ ] **QR-Code für den Laden**
  - QR-Code-Grafik generieren → Link auf Seite (z. B. /angebote)
  - Einfach an der Theke aufhängen
- [ ] **Vertrauen visualisieren**
  - Google-Bewertungs-Sterne anzeigen (Embed)
  - Ggf. Lieferantensiegel / Qualitätssiegel zeigen

**Aufwand:** ~3–5 Tage Entwicklung + Setup.

---

## Phase 3 — Eigenständige Pflege (Monat 2)

Ziel: Mitarbeiter können Inhalte **selbst** ändern – ohne Entwickler.

- [ ] **CMS-Anbindung**
  - Variante A: WordPress (klassisch, breit bekannt)
  - Variante B: Headless-CMS (z. B. Sanity, Strapi, Decap) + statisches Frontend bleibt
  - Empfehlung: **Decap CMS** auf Git-Basis – kostenlos, einfach, keine Server-Wartung
- [ ] **Pflegbare Inhalte**
  - Wochenangebote (Bild, Titel, Preis, gültig bis)
  - Öffnungszeiten + Feiertagsausnahmen
  - News / Aktionen
- [ ] **Hosting + Deployment**
  - Statisches Hosting: Netlify / Vercel / GitHub Pages (alles kostenlos)
  - Domain anbinden (z. B. krümmel-bochum.de)
  - HTTPS + automatische Deployments

**Aufwand:** ~1 Woche initial, danach 0 € laufend.

---

## Phase 4 — Geschäftsfunktionen (Monat 3+)

Ziel: Die Website wird zum **echten Vertriebskanal**.

- [ ] **Vorbestellung online**
  - Einfaches Formular: Produkt + Menge + Abholdatum
  - E-Mail an Theke → Personal bereitet vor
  - Kein Online-Bezahlen nötig (Bezahlung im Laden)
- [ ] **Grillpaket-Konfigurator**
  - Personenanzahl wählen → System empfiehlt Pakete
  - Conversion-Magnet im Sommer
- [ ] **B2B-Bereich**
  - Eigene Landingpage für Gastronomie / Großabnehmer
  - Preisliste auf Anfrage, Kontaktformular
- [ ] **Newsletter / WhatsApp-Broadcast**
  - Wöchentliche Angebote pushen
  - Conversion-stark, kostenlos
- [ ] **SEO-Offensive**
  - Lokales SEO: „Fleischer Bochum", „Werksverkauf A40", „Grillpaket Bochum"
  - Google Business Profile pflegen
  - Backlinks von lokalen Portalen (Bochum-Tourismus, Branchenverzeichnisse)

**Aufwand:** je Modul 1–2 Wochen, schrittweise.

---

## Phase 5 — Optional / Premium

Wenn das Geschäft wächst:

- [ ] **Online-Shop mit Versand** (gekühlter Versand für Wurstwaren)
- [ ] **Loyalty-System** (Stempelkarte digital)
- [ ] **Event-Catering-Buchung** (Hochzeit, Firmenfest)
- [ ] **Mehrsprachig** (Türkisch, Englisch — A40-Lage = viel Durchgangsverkehr)

---

## Technische Hinweise

### Aktueller Stand (`site/`)
- Reine HTML/CSS/JS-Seite, **kein Build-Step nötig**
- Funktioniert lokal per Doppelklick auf `index.html`
- Mobile-first, responsive Breakpoints bei 540 / 880 px
- Performance: Google Fonts vorgeladen, Bilder lazy-loadable
- A11y: semantische Tags, ARIA-Labels, Tastatur-Navigation, Reduced-Motion respektiert

### Empfohlene nächste Tech-Schritte
1. Stockbilder (`unsplash.com`-URLs) durch eigene ersetzen → in `index.html` an den `background-image`-URLs
2. `analytics`-Tag (z. B. Plausible — DSGVO-freundlich, kein Cookie-Banner nötig)
3. `sitemap.xml` + `robots.txt` für SEO
4. `og:image` + Open-Graph-Tags für Social-Media-Sharing
5. Lighthouse-Audit fahren → Score > 95 anpeilen

### Deployment in 5 Minuten
```bash
# Beispiel mit Netlify Drop
# 1. site/-Ordner als ZIP packen
# 2. auf netlify.com/drop ziehen
# 3. fertig — eigene Domain via DNS verbinden
```

---

## Priorisierung – Was zuerst?

Wenn nur Zeit/Budget für **drei Dinge** ist:

1. **Echte Bilder + echte Angebote** (Phase 1) — ohne diese wirkt die Seite generisch
2. **WhatsApp-Bestellung** (Phase 2) — bringt sofort messbare Anrufe / Bestellungen
3. **CMS für Angebote** (Phase 3) — sonst veraltet die Seite und verliert Vertrauen

Alles andere ist nice-to-have und kann iterativ kommen.
