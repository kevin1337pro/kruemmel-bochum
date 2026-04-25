# Krümmel Bochum – Webseite

Statische Webseite für die K. W. Krümmel GmbH in Bochum. Reine HTML/CSS/JS-Seite, kein Build-Step nötig.

## Struktur

```
site/                  ← Deployable Webseite
├── index.html         ← Startseite
├── produkte.html      ← Produktkatalog
├── css/
├── js/
└── assets/

LIEFERSERVICE.md       ← Plan für Wochenend-Lieferservice
WEITERENTWICKLUNG.md   ← Roadmap (5 Phasen)
Krümmel Bochum.md      ← Ursprüngliche Spezifikation
```

## Lokal testen

`site/index.html` einfach im Browser öffnen.

## Deployment

GitHub Pages über Actions Workflow `.github/workflows/pages.yml` – publiziert automatisch den Inhalt von `site/` nach jedem Push auf `main`.
