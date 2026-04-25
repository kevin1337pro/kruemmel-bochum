// Krümmel Bochum – Produktdaten
// Hinweis: Bilder sind aktuell Platzhalter (Unsplash). In Phase 1
// werden sie durch eigene Produktfotografie ersetzt.

window.KRUEMMEL_PRODUCTS = [
  // ─────────────── Frankfurter (Signature) ───────────────
  {
    id: "frankfurter-klassisch",
    name: "Hausgemachter Frankfurter – Klassisch",
    category: "frankfurter",
    description: "Über Buchenholz geräuchert, im Saitling, ohne Geschmacksverstärker. Familienrezept seit Generationen.",
    tags: ["Hausmacher", "Geräuchert", "Schwein", "Buchenholz"],
    price: 5.90, unit: "Packung", packaging: "5 Stück",
    badge: "Signature",
    image: "https://images.unsplash.com/photo-1599909533039-78e8e4ee9b6e?auto=format&fit=crop&w=800&q=70"
  },
  {
    id: "frankfurter-premium",
    name: "Hausgemachter Frankfurter – Premium",
    category: "frankfurter",
    description: "Doppelt über Buchenholz geräuchert für intensiveres Aroma – die Edelvariante.",
    tags: ["Premium", "Doppelt geräuchert", "Hausmacher"],
    price: 6.90, unit: "Packung", packaging: "5 Stück",
    badge: "Beliebt",
    image: "https://images.unsplash.com/photo-1612392061787-2d078b3e573a?auto=format&fit=crop&w=800&q=70"
  },
  {
    id: "frankfurter-familienpack",
    name: "Hausgemachter Frankfurter – Familienpack",
    category: "frankfurter",
    description: "Großpackung zum Einfrieren oder für die ganze Familie.",
    tags: ["Großpackung", "Hausmacher"],
    price: 10.90, unit: "Packung", packaging: "10 Stück",
    image: "https://images.unsplash.com/photo-1599909533039-78e8e4ee9b6e?auto=format&fit=crop&w=800&q=70"
  },
  {
    id: "frankfurter-rind",
    name: "Frankfurter vom Rind",
    category: "frankfurter",
    description: "Reine Rindfleisch-Variante – ohne Schwein, ebenso über Buchenholz geräuchert.",
    tags: ["Rind", "Geräuchert", "Hausmacher"],
    price: 7.90, unit: "Packung", packaging: "5 Stück",
    image: "https://images.unsplash.com/photo-1612392061787-2d078b3e573a?auto=format&fit=crop&w=800&q=70"
  },

  // ─────────────── Wurstwaren ───────────────
  {
    id: "rostbratwurst-samba",
    name: 'Rostbratwurst "Samba"',
    category: "wurst",
    description: "Würzige Bratwurst mit feiner Chili-Note – beliebt für Grill und Pfanne.",
    tags: ["Hausmacher", "Würzig", "Schwein"],
    price: 4.00, unit: "Packung", packaging: "5 Stück",
    badge: "Beliebt",
    image: "https://images.unsplash.com/photo-1601001435957-74f0958a93c0?auto=format&fit=crop&w=800&q=70"
  },
  {
    id: "bockwurst",
    name: "Bockwurst",
    category: "wurst",
    description: "Klassische Bockwurst nach traditioneller Rezeptur.",
    tags: ["Klassiker", "Schwein"],
    price: 4.00, unit: "500 g", packaging: "4 Stück",
    image: "https://images.unsplash.com/photo-1626200419199-391ae4be7a41?auto=format&fit=crop&w=800&q=70"
  },
  {
    id: "pferdefleischwurst",
    name: "Pferdefleischwurst",
    category: "wurst",
    description: "Spezialität aus magerem Pferdefleisch – kräftiger Geschmack.",
    tags: ["Spezialität", "Mager"],
    price: 9.50, unit: "1 kg", packaging: "1 Stück",
    image: "https://images.unsplash.com/photo-1599909533039-78e8e4ee9b6e?auto=format&fit=crop&w=800&q=70"
  },
  {
    id: "pferdebockwurst",
    name: "Pferdebockwurst",
    category: "wurst",
    description: "Bockwurst-Variante aus Pferdefleisch – besonders mager.",
    tags: ["Spezialität", "Mager"],
    price: 4.48, unit: "4 × 100 g", packaging: "4 Stück",
    image: "https://images.unsplash.com/photo-1599909366516-6c1c2b66f8a3?auto=format&fit=crop&w=800&q=70"
  },
  {
    id: "wiener-knacker",
    name: "Wiener (Knacker)",
    category: "wurst",
    description: "Saftige Wiener Würstchen mit knackiger Haut – Familienliebling.",
    tags: ["Klassiker", "Schwein", "Rind"],
    price: 6.75, unit: "Packung", packaging: "5 Stück",
    image: "https://images.unsplash.com/photo-1612392061787-2d078b3e573a?auto=format&fit=crop&w=800&q=70"
  },
  {
    id: "rostbratwurst-exquisit",
    name: "Rostbratwurst Exquisit",
    category: "wurst",
    description: "Edelvariante unserer Rostbratwurst – fein abgeschmeckt.",
    tags: ["Premium", "Schwein"],
    price: 3.90, unit: "Packung", packaging: "5 Stück",
    badge: "Aktion",
    image: "https://images.unsplash.com/photo-1601001435957-74f0958a93c0?auto=format&fit=crop&w=800&q=70"
  },
  {
    id: "rostbratwurst-grob",
    name: "Rostbratwurst grob",
    category: "wurst",
    description: "Grob gewolfte Bratwurst – Hausmacher Art.",
    tags: ["Hausmacher", "Schwein", "Grill"],
    price: 8.00, unit: "Packung", packaging: "10 Stück",
    image: "https://images.unsplash.com/photo-1626200419199-391ae4be7a41?auto=format&fit=crop&w=800&q=70"
  },
  {
    id: "bochumer-rostbratwurst",
    name: "Bochumer Rostbratwurst",
    category: "wurst",
    description: "Unsere Spezialität aus dem Ruhrgebiet – nach hauseigenem Rezept.",
    tags: ["Hausmacher", "Regional", "Schwein"],
    price: 4.00, unit: "Packung", packaging: "5 Stück",
    badge: "Regional",
    image: "https://images.unsplash.com/photo-1601001435957-74f0958a93c0?auto=format&fit=crop&w=800&q=70"
  },
  {
    id: "schinkenkrakauer",
    name: "Schinkenkrakauer",
    category: "wurst",
    description: "Geräucherte Brühwurst mit grobem Schinkenanteil.",
    tags: ["Geräuchert", "Schwein", "Grobe Einlage"],
    price: 12.00, unit: "Packung", packaging: "10 Stück",
    image: "https://images.unsplash.com/photo-1612392061787-2d078b3e573a?auto=format&fit=crop&w=800&q=70"
  },
  {
    id: "rostbratwurst-kaese",
    name: 'Rostbratwurst "Käse"',
    category: "wurst",
    description: "Bratwurst mit eingearbeiteten Käsestücken – schmilzt beim Grillen.",
    tags: ["Mit Käse", "Schwein", "Grill"],
    price: 4.00, unit: "Packung", packaging: "5 Stück",
    image: "https://images.unsplash.com/photo-1626200419199-391ae4be7a41?auto=format&fit=crop&w=800&q=70"
  },
  {
    id: "gefluegel-bratwurst",
    name: "Geflügel Bratwurst",
    category: "wurst",
    description: "Leichte Bratwurst aus reinem Geflügelfleisch.",
    tags: ["Geflügel", "Mager", "Grill"],
    price: 5.50, unit: "Packung", packaging: "5 Stück",
    image: "https://images.unsplash.com/photo-1604503468506-a8da13d82791?auto=format&fit=crop&w=800&q=70"
  },
  {
    id: "schinkenkrakauer-klein",
    name: "Schinkenkrakauer klein",
    category: "wurst",
    description: "Kleine Variante unserer Schinkenkrakauer – ideal als Snack.",
    tags: ["Geräuchert", "Schwein"],
    price: 4.50, unit: "Packung", packaging: "5 Stück",
    image: "https://images.unsplash.com/photo-1612392061787-2d078b3e573a?auto=format&fit=crop&w=800&q=70"
  },
  {
    id: "delikatess-wienerle",
    name: "Delikatess Wienerle",
    category: "wurst",
    description: "Feine Wienerle in Großpackung – perfekt für Familien und Feiern.",
    tags: ["Großpackung", "Schwein"],
    price: 11.10, unit: "Packung", packaging: "20 Stück",
    image: "https://images.unsplash.com/photo-1599909533039-78e8e4ee9b6e?auto=format&fit=crop&w=800&q=70"
  },
  {
    id: "bratwurstschnecke",
    name: "Bratwurstschnecke",
    category: "wurst",
    description: "Spiralförmig aufgerollte Bratwurst – Hingucker auf jedem Grill.",
    tags: ["Grill", "Schwein", "Hingucker"],
    price: 10.45, unit: "1 kg", packaging: "4 Stück",
    image: "https://images.unsplash.com/photo-1626200419199-391ae4be7a41?auto=format&fit=crop&w=800&q=70"
  },
  {
    id: "jaegermett",
    name: "Jägermett frisch",
    category: "wurst",
    description: "Frisch hergestelltes Mett – würzig abgeschmeckt.",
    tags: ["Frisch", "Schwein", "Streichfähig"],
    price: 6.48, unit: "1 kg", packaging: "lose",
    badge: "Tagesfrisch",
    image: "https://images.unsplash.com/photo-1602273660127-a0000560a4c1?auto=format&fit=crop&w=800&q=70"
  },
  {
    id: "leberwurst",
    name: "Leberwurst hausgemacht",
    category: "wurst",
    description: "Cremig-feine Leberwurst nach altem Familienrezept.",
    tags: ["Hausmacher", "Streichfähig", "Schwein"],
    price: 4.50, unit: "250 g", packaging: "1 Stück",
    image: "https://images.unsplash.com/photo-1612392061787-2d078b3e573a?auto=format&fit=crop&w=800&q=70"
  },

  // ─────────────── Fleisch ───────────────
  {
    id: "nackensteak",
    name: "Schweinenackensteak",
    category: "fleisch",
    description: "Mariniert oder natur – aus eigener Verarbeitung, grillfertig.",
    tags: ["Schwein", "Grill", "Mariniert"],
    price: 5.49, unit: "1 kg", packaging: "ca. 4 Stück",
    badge: "Aktion",
    priceOld: 7.99,
    image: "https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?auto=format&fit=crop&w=800&q=70"
  },
  {
    id: "rinderhack",
    name: "Rinderhackfleisch frisch",
    category: "fleisch",
    description: "Täglich frisch gewolft – ideal für Bolognese, Burger und Frikadellen.",
    tags: ["Rind", "Frisch", "Tagesfrisch"],
    price: 6.99, unit: "1 kg", packaging: "lose",
    badge: "Frisch",
    priceOld: 9.49,
    image: "https://images.unsplash.com/photo-1602273660127-a0000560a4c1?auto=format&fit=crop&w=800&q=70"
  },
  {
    id: "schweinegulasch",
    name: "Schweinegulasch",
    category: "fleisch",
    description: "Gewürfelt, küchenfertig – aus der Schulter geschnitten.",
    tags: ["Schwein", "Schmoren"],
    price: 7.90, unit: "1 kg", packaging: "lose",
    image: "https://images.unsplash.com/photo-1588347818481-c7c1e3835d97?auto=format&fit=crop&w=800&q=70"
  },
  {
    id: "haehnchenbrust",
    name: "Hähnchenbrustfilet",
    category: "fleisch",
    description: "Mageres Geflügelfilet – ohne Haut, ohne Knochen.",
    tags: ["Geflügel", "Mager"],
    price: 7.49, unit: "1 kg", packaging: "lose",
    image: "https://images.unsplash.com/photo-1604503468506-a8da13d82791?auto=format&fit=crop&w=800&q=70"
  },
  {
    id: "schweinefilet",
    name: "Schweinefilet",
    category: "fleisch",
    description: "Edles Filet vom Schwein – butterzart und mager.",
    tags: ["Premium", "Schwein", "Mager"],
    price: 12.90, unit: "1 kg", packaging: "ca. 2 Stück",
    image: "https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?auto=format&fit=crop&w=800&q=70"
  },
  {
    id: "rumpsteak",
    name: "Rumpsteak",
    category: "fleisch",
    description: "Rumpsteak vom Rind, sauber pariert – perfekt für die Pfanne.",
    tags: ["Premium", "Rind", "Steak"],
    price: 22.00, unit: "1 kg", packaging: "ca. 4 Stück",
    badge: "Premium",
    image: "https://images.unsplash.com/photo-1558030006-450675393462?auto=format&fit=crop&w=800&q=70"
  },

  // ─────────────── Grill ───────────────
  {
    id: "schaschlik",
    name: "Schaschlik-Spieße",
    category: "grill",
    description: "Bunt gespickt mit Paprika und Zwiebeln – fertig mariniert.",
    tags: ["Grill", "Mariniert", "Schwein"],
    price: 9.90, unit: "1 kg", packaging: "ca. 6 Spieße",
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=70"
  },
  {
    id: "haehnchenfluegel",
    name: "Hähnchenflügel mariniert",
    category: "grill",
    description: "BBQ-mariniert – knusprig vom Grill oder aus dem Ofen.",
    tags: ["Geflügel", "Grill", "BBQ"],
    price: 6.90, unit: "1 kg", packaging: "lose",
    image: "https://images.unsplash.com/photo-1604503468506-a8da13d82791?auto=format&fit=crop&w=800&q=70"
  },
  {
    id: "bauchscheiben",
    name: "Bauchscheiben mariniert",
    category: "grill",
    description: "Würzig mariniert – bleibt saftig auf dem Rost.",
    tags: ["Schwein", "Grill", "Mariniert"],
    price: 8.49, unit: "1 kg", packaging: "ca. 8 Scheiben",
    image: "https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?auto=format&fit=crop&w=800&q=70"
  },
  {
    id: "grillpaket-familie",
    name: 'Grillpaket "Familie"',
    category: "grill",
    description: "5 kg gemischtes Grillgut – Steaks, Würste, Spieße, Bauchscheiben.",
    tags: ["Großpackung", "Grill", "Sparpaket"],
    price: 29.90, unit: "Paket (5 kg)", packaging: "1 Stück",
    badge: "Sparpaket",
    priceOld: 39.99,
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=70"
  },

  // ─────────────── Fertiggerichte ───────────────
  {
    id: "gulasch-glas",
    name: "Gulasch im Glas",
    category: "fertig",
    description: "Hausgemachtes Schweinegulasch – nur erhitzen, fertig.",
    tags: ["Hausmacher", "Fertig", "Schwein"],
    price: 5.90, unit: "600 g", packaging: "1 Glas",
    image: "https://images.unsplash.com/photo-1574484284002-952d92456975?auto=format&fit=crop&w=800&q=70"
  },
  {
    id: "klopse",
    name: "Königsberger Klopse",
    category: "fertig",
    description: "Klassiker mit feiner Kapernsoße – nach altem Rezept.",
    tags: ["Klassiker", "Fertig", "Rind"],
    price: 6.90, unit: "500 g", packaging: "1 Schale",
    image: "https://images.unsplash.com/photo-1574484284002-952d92456975?auto=format&fit=crop&w=800&q=70"
  },
  {
    id: "sauerbraten",
    name: "Sauerbraten",
    category: "fertig",
    description: "In hauseigener Sauerbratensoße geschmort – nur aufwärmen.",
    tags: ["Hausmacher", "Fertig", "Rind"],
    price: 9.90, unit: "500 g", packaging: "1 Schale",
    image: "https://images.unsplash.com/photo-1574484284002-952d92456975?auto=format&fit=crop&w=800&q=70"
  },

  // ─────────────── Fisch & Käse ───────────────
  {
    id: "forelle",
    name: "Forelle geräuchert",
    category: "fisch-kaese",
    description: "Im eigenen Räucherofen veredelt – goldgelb und aromatisch.",
    tags: ["Geräuchert", "Fisch"],
    price: 3.90, unit: "Stück", packaging: "1 Stück",
    image: "https://images.unsplash.com/photo-1565680018434-b513d5e5fd47?auto=format&fit=crop&w=800&q=70"
  },
  {
    id: "matjes",
    name: "Matjes nach Hausfrauenart",
    category: "fisch-kaese",
    description: "Mit Apfel, Zwiebel und feiner Soße – fertig zum Servieren.",
    tags: ["Klassiker", "Fisch"],
    price: 4.90, unit: "200 g", packaging: "1 Schale",
    image: "https://images.unsplash.com/photo-1565680018434-b513d5e5fd47?auto=format&fit=crop&w=800&q=70"
  },
  {
    id: "bergkaese",
    name: "Bergkäse Stück",
    category: "fisch-kaese",
    description: "Würziger Bergkäse, mindestens 6 Monate gereift.",
    tags: ["Käse", "Würzig", "Gereift"],
    price: 2.90, unit: "100 g", packaging: "1 Stück",
    image: "https://images.unsplash.com/photo-1486297678162-eb2a19b0a32d?auto=format&fit=crop&w=800&q=70"
  },

  // ─────────────── Suppen ───────────────
  {
    id: "hochzeitssuppe",
    name: "Hochzeitssuppe",
    category: "suppen",
    description: "Klare Brühe mit Markklößchen, Eierstich und Gemüse.",
    tags: ["Klassiker", "Hausmacher"],
    price: 4.50, unit: "750 ml", packaging: "1 Glas",
    image: "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=800&q=70"
  },
  {
    id: "linseneintopf",
    name: "Linseneintopf",
    category: "suppen",
    description: "Mit Mettwürstchen und Wurzelgemüse – wärmt von innen.",
    tags: ["Hausmacher", "Deftig"],
    price: 3.90, unit: "750 ml", packaging: "1 Glas",
    image: "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=800&q=70"
  },
  {
    id: "erbsensuppe",
    name: "Erbsensuppe",
    category: "suppen",
    description: "Sämige Erbsensuppe mit Bockwurst-Stücken – Klassiker.",
    tags: ["Klassiker", "Deftig"],
    price: 3.90, unit: "750 ml", packaging: "1 Glas",
    image: "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=800&q=70"
  },

  // ─────────────── Tiernahrung – frisch &amp; hausgemacht ───────────────
  {
    id: "barf-rind",
    name: "BARF-Mischung Rind",
    category: "tiernahrung",
    description: "Frische Mischung aus Muskelfleisch, Pansen und gemahlenen Knochen – ausgewogen für den Hund.",
    tags: ["Hund", "BARF", "Frisch", "Rind"],
    price: 4.90, unit: "1 kg", packaging: "Beutel",
    badge: "Hausmacher",
    image: "https://images.unsplash.com/photo-1601758228041-f3b2795255f1?auto=format&fit=crop&w=800&q=70"
  },
  {
    id: "barf-gefluegel",
    name: "BARF-Mischung Geflügel",
    category: "tiernahrung",
    description: "Hühnerhälse, Herzen und Mägen – leicht verdaulich, ideal für sensible Hunde.",
    tags: ["Hund", "BARF", "Geflügel", "Sensibel"],
    price: 3.90, unit: "1 kg", packaging: "Beutel",
    image: "https://images.unsplash.com/photo-1587300003388-59208cc962cb?auto=format&fit=crop&w=800&q=70"
  },
  {
    id: "pansen-frisch",
    name: "Pansen frisch",
    category: "tiernahrung",
    description: "Naturbelassener Rinderpansen – beliebter Top-Snack mit hoher Akzeptanz.",
    tags: ["Hund", "Frisch", "Rind", "Snack"],
    price: 3.50, unit: "500 g", packaging: "Beutel",
    image: "https://images.unsplash.com/photo-1546975490-e8b92a360b24?auto=format&fit=crop&w=800&q=70"
  },
  {
    id: "markknochen",
    name: "Markknochen geräuchert",
    category: "tiernahrung",
    description: "Vom Rind, mild geräuchert – stundenlange Kaubeschäftigung für Hunde.",
    tags: ["Hund", "Geräuchert", "Rind", "Kauknochen"],
    price: 2.50, unit: "Stück", packaging: "1 Stück",
    badge: "Beliebt",
    image: "https://images.unsplash.com/photo-1596797882870-8c33deeac224?auto=format&fit=crop&w=800&q=70"
  },
  {
    id: "ochsenziemer",
    name: "Ochsenziemer getrocknet",
    category: "tiernahrung",
    description: "Schonend luftgetrocknet – natürliche Kaustange ohne Zusätze.",
    tags: ["Hund", "Getrocknet", "Rind", "Kauartikel"],
    price: 4.90, unit: "Stück", packaging: "1 Stück",
    image: "https://images.unsplash.com/photo-1605568427561-40dd23c2acea?auto=format&fit=crop&w=800&q=70"
  },
  {
    id: "huehnerhaelse",
    name: "Hühnerhälse frisch",
    category: "tiernahrung",
    description: "Knochen-Fleisch-Anteil ideal für Welpen und kleine Hunde.",
    tags: ["Hund", "Welpen", "Geflügel", "Knochen"],
    price: 2.90, unit: "1 kg", packaging: "Beutel",
    image: "https://images.unsplash.com/photo-1603904367060-7e3a40e2e96c?auto=format&fit=crop&w=800&q=70"
  },
  {
    id: "innereien-katze",
    name: "Innereien-Mix für Katzen",
    category: "tiernahrung",
    description: "Herz, Leber und Magen vom Geflügel – fein gewolft, frisch portioniert.",
    tags: ["Katze", "Frisch", "Geflügel"],
    price: 3.90, unit: "250 g", packaging: "Becher",
    image: "https://images.unsplash.com/photo-1574144611937-0df059b5ef3e?auto=format&fit=crop&w=800&q=70"
  },
  {
    id: "hundewurst",
    name: "Hundewurst frisch",
    category: "tiernahrung",
    description: "Hauseigene Wurst nur für Vierbeiner – ohne Salz und Gewürze, ohne Konservierungsstoffe.",
    tags: ["Hund", "Hausmacher", "Frisch", "Ohne Zusätze"],
    price: 4.50, unit: "500 g", packaging: "1 Stück",
    badge: "Tagesfrisch",
    image: "https://images.unsplash.com/photo-1601758228041-f3b2795255f1?auto=format&fit=crop&w=800&q=70"
  }
];
