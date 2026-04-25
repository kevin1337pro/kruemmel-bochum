# Lieferservice Krümmel – Samstag &amp; Sonntag

**Kurzfassung:** Wir liefern frische Fleisch- und Wurstwaren genau dann, wenn der Werksverkauf zu hat oder kurze Öffnungszeiten hat – am **Samstagnachmittag und Sonntag**. Damit fängt Krümmel die Wochenendnachfrage ein, die heute komplett verloren geht.

---

## 1. Warum gerade Samstag &amp; Sonntag?

| Tag | Status heute | Marktlücke |
|---|---|---|
| Samstag | Werksverkauf 07:00–14:00 → Nachmittag zu | Spontane Grill-/Familieneinkäufe nach 14:00 |
| Sonntag | Geschlossen | Kompletter Tag ohne Versorgung – höchster Hebel |

**Effekt:** zusätzlicher Umsatz an Tagen, an denen heute **0 €** reinkommen. Das Risiko, bestehende Werksverkauf-Umsätze zu kannibalisieren, ist gering – wer Samstagvormittag im Laden war, bestellt seltener am gleichen Tag noch online.

---

## 2. Lieferzonen &amp; Slots

### Geografisch (Pilot 10 km, Ausbau 15 km)
- **Zone A (0–8 km)**: Bochum-Innenstadt, Wattenscheid, Hamme, Hofstede, Riemke
- **Zone B (8–15 km)**: Essen-Ost, Witten, Herne-Süd, Bochum-Linden/Querenburg
- **Zone C (Großbestellungen, ab 100 €)**: bis 25 km auf Anfrage (Gastro/Vereine)

### Zeitfenster
| | Bestell-Cutoff | Lieferfenster |
|---|---|---|
| Samstag | Freitag 18:00 | Sa 10:00–14:00 (Slot 1), 14:00–18:00 (Slot 2) |
| Sonntag | Samstag 14:00 | So 10:00–14:00 (Slot 1), 14:00–17:00 (Slot 2) |

2-Stunden-Slots wählbar. Tracking-Link per SMS bei Auslieferung.

### Preise
- **Mindestbestellwert:** 25 €
- **Liefergebühr:** 4,90 € (Zone A), 6,90 € (Zone B)
- **Versandkostenfrei** ab 60 € Bestellwert
- **Sonntagszuschlag:** +2 €

---

## 3. Bestellkanäle (gestaffelt nach Phase)

### Phase 0 – Pilot (kein Tech-Aufwand)
- **Telefon** + **WhatsApp**: bestehende Nummer 0234 / 890 09 00
- vorausgefüllte WhatsApp-Nachricht über die Website
- manuelle Erfassung in Tabelle (Excel/Google Sheets)

### Phase 1 – Web-Formular (Monat 2)
- einfaches Bestellformular auf `/lieferservice`
- PLZ-Check für Lieferzone
- Slot-Auswahl
- Bezahlung **an der Tür** (Bar/EC) – kein Online-Payment im Pilot

### Phase 2 – Vollausbau (Monat 4–6)
- Warenkorb basierend auf [`produkte.html`](site/produkte.html)
- Kundenkonto + Wiederbestellung („mein letztes Grillpaket erneut")
- Online-Zahlung (PayPal, Klarna, SEPA)

---

## 4. Logistik

### Fahrzeug &amp; Kühlung
| Variante | Kosten | Geeignet für |
|---|---|---|
| **Pilot (Kühlbox)** | 0 € (eigene Kühlbox + Akkus im VW Caddy) | bis 15 Lieferungen pro Tag, Fahrt &lt; 90 Min |
| **Mietkühlfahrzeug** | ~80–120 €/Tag | ab 20 Lieferungen, Sommerbetrieb |
| **Eigener Kühltransporter** | ab 25.000 € (Anschaffung) | ab 50 Lieferungen/Wochenende dauerhaft |

**Empfehlung:** Pilot mit Kühlbox + bestehendem Firmenfahrzeug. Investition erst, wenn ≥ 25 Bestellungen pro Tag stabil sind.

### Verpackung
- Isolierte **Mehrweg-Boxen mit Pfand** (10 €) – ökologisch und Wiedererkennung
- Kühlakkus aus Tiefkühler im Werksverkauf
- Etikett mit Kundenname + Slot

### Routenplanung
- **Pilot:** händisch oder Google Maps mit max. 10 Stops
- **Skalierung:** [Circuit](https://getcircuit.com) oder [Route4Me] – ~20 €/Monat

---

## 5. Sortiment für den Lieferservice

Nicht alles aus dem Laden ist lieferfähig. Empfehlung für den Start:

| Geeignet | Zurückhaltend | Nicht im Pilot |
|---|---|---|
| Wurstwaren (vakuumiert) | Lose Theke (kürzere MHD) | Frischfisch (Kühlkette zu fragil) |
| Fleisch vakuumiert | Hackfleisch (max. 24h) | Heiße Speisen |
| Grillpakete | Fertiggerichte mit Soße | – |
| **Hausgemachte Frankfurter** ⭐ | Suppen im Glas (Gewicht!) | – |
| **Tiernahrung-Pakete** ⭐ | – | – |

⭐ = Signature-Produkte, sollten in jedem Liefer-Werbemittel auftauchen.

---

## 6. Personal &amp; Schichten

### Pilot (Sa)
- 1 Picker (Werksverkauf-Mitarbeiter, bekannt mit Sortiment) – 4 h
- 1 Fahrer – 4–5 h
- 1 Telefonkraft (Vormittag) – 2 h

### Pilot (So)
- gleiche Besetzung, aber **Sonntags-Zuschlag** (+50 % Lohn)
- **Wichtig:** Sonntagsarbeit braucht eine **arbeitsrechtliche Ausnahme­genehmigung** in NRW (Bezirksregierung Arnsberg). Vorab klären – ggf. Genehmigung als „Lieferdienst Lebensmittel" beantragen.

### Aufwand initial
- Antrag Bezirksregierung: ~2–4 Wochen Vorlauf
- Hygieneschulung für Fahrer (HACCP) – existiert i. d. R. bereits

---

## 7. Wirtschaftlichkeit – Ziel-Pilot

Konservative Annahme für Wochenende 1–8:

| Kennzahl | Annahme |
|---|---|
| Bestellungen pro Tag | 8 (Pilot) → 20 (nach 8 Wochen) |
| Ø Warenkorb | 45 € |
| Marge auf Ware | ~35 % |
| Liefergebühr (netto) | 4 € |

**Pro Wochenende (Woche 8):**
- Umsatz: 40 Best. × 45 € = **1.800 €**
- Rohertrag Ware: ~630 €
- Liefergebühren: ~160 €
- **Personalkosten Sa+So:** ~350 €
- **Treibstoff/Verpackung:** ~80 €
- **Deckungsbeitrag/Wochenende:** ~360 €
- **Pro Monat:** ca. **1.400–1.500 €** zusätzlicher DB

Skalierung auf 50 Best./Tag → DB ≈ 3.500 €/Monat. Break-even des Mietkühlfahrzeugs ab ~30 Best./Tag.

---

## 8. Marketing &amp; Anlauf

### Soft-Launch (Woche 1–2)
- nur **Stammkunden** über WhatsApp-Broadcast
- Aushang im Werksverkauf („Wir liefern jetzt – fragen Sie an der Kasse")
- QR-Code-Karten an der Theke

### Public Launch (ab Woche 3)
- **Google Business Profile**: „Lieferung am Wochenende" als Highlight
- **Lokale Facebook-Gruppen**: Bochum-Innenstadt, Wattenscheid, Witten („Mensch, gibt's das jetzt …?")
- **Flyer-Verteilung** in Zone A: Hauswurfsendung, ~3.000 Stk., Kosten ~250 €
- **Krümmel-Magnet** mit Lieferservice-Hotline (statt Visitenkarte)
- **Instagram-Reels:** „Bestellung um 11, Lieferung um 13 Uhr – so geht das"

### Stammkunden-Bindung
- Punktekarte: jede 10. Lieferung Versand frei
- Geburtstags-Code: 10 % auf nächste Bestellung
- Saisonangebote: „Grillpaket der Woche – heute liefern lassen"

---

## 9. Risiken &amp; Gegenmaßnahmen

| Risiko | Wahrscheinlichkeit | Maßnahme |
|---|---|---|
| Kühlkette unterbrochen | mittel | Slot ≤ 4 h, Kühlakkus + Temperatur-Logger im Pilot |
| No-Show beim Kunden | mittel | Vorab-SMS „Fahrer in 20 Min", Vorkasse ab 100 € |
| Sonntagsarbeit nicht genehmigt | gering | Antrag rechtzeitig stellen, alternativ Samstag-Spätschicht |
| Bestellaufkommen unterschätzt | hoch | Cap pro Slot (Soft-Limit im Formular) |
| Negative Bewertung wegen Verspätung | mittel | Slot 2 h breit, ehrliche ETA, automatisches Update |
| Kannibalisierung Werksverkauf | gering | Mindestbestellwert 25 €, Lieferzuschlag |

---

## 10. Roadmap (Wochenplan)

```
Woche 1   ▒▒░░  Genehmigung Sonntagsarbeit beantragen (Bezirksregierung)
Woche 2   ▒▒▒░  Verpackungs-Pfandboxen bestellen, Kühlboxen testen
Woche 3   ▒▒▒▒  WhatsApp-Bestellprozess + Excel-Tabelle aufsetzen
Woche 4   ▒▒░░  Soft-Launch nur für Stammkunden
Woche 5–6 ▒▒▒▒  Erste 2 Wochen Pilotbetrieb auswerten
Woche 7   ▒▒░░  Anpassungen: Slots, Preise, Sortiment
Woche 8   ▒▒▒▒  Public Launch + Flyer-Aktion
Monat 3   ░░░░  Web-Formular live (/lieferservice)
Monat 4   ░░░░  Routen-Tool, Mietkühler bei Bedarf
Monat 6   ░░░░  Online-Zahlung, Wiederbestellung
```

---

## 11. Sofort-Checkliste „erste Lieferung in 14 Tagen"

- [ ] Telefon-Bestellscript schreiben (5 Felder: Name, Adresse, Slot, Produkte, Telefon)
- [ ] WhatsApp Business einrichten (separate Nummer / oder bestehende mit Auto-Reply)
- [ ] 10 Mehrweg-Kühlboxen + 30 Kühlakkus beschaffen (~250 €)
- [ ] Lieferzonen-Karte mit PLZ-Liste anfertigen
- [ ] Antrag Sonntagsarbeit – vorerst **nur Samstag-Spätschicht starten**
- [ ] Aushang &amp; QR-Code im Werksverkauf vorbereiten
- [ ] 1 Probefahrt mit befreundeter Familie (UAT)
- [ ] Versicherung prüfen: Warentransport im Firmenwagen
- [ ] Hygiene-Doku ergänzen: Lieferprotokoll mit Temperaturkontrolle

→ Mit dieser Liste **kann Krümmel in 2 Wochenenden den Pilot starten**, ohne Tech-Investition.
