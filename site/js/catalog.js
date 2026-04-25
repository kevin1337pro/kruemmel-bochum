// Krümmel Bochum – Produktkatalog Logik
(function () {
  "use strict";

  const products = window.KRUEMMEL_PRODUCTS || [];
  const grid = document.getElementById("catalog-grid");
  const empty = document.getElementById("catalog-empty");
  const search = document.getElementById("search");
  const sort = document.getElementById("sort");
  const chips = document.querySelectorAll(".chip");
  const resultCount = document.getElementById("result-count");

  if (!grid) return;

  const state = {
    category: getInitialCategory(),
    query: "",
    sort: "default",
  };

  function getInitialCategory() {
    const params = new URLSearchParams(window.location.search);
    const cat = params.get("kategorie");
    const valid = ["frankfurter", "wurst", "fleisch", "grill", "fertig", "fisch-kaese", "suppen", "tiernahrung"];
    return valid.includes(cat) ? cat : "alle";
  }

  function formatPrice(value) {
    return value.toFixed(2).replace(".", ",") + " €";
  }

  function buildCard(p) {
    const tags = (p.tags || [])
      .map((t) => `<span class="ptag">${t}</span>`)
      .join("");

    const badge = p.badge ? `<div class="card__badge">${p.badge}</div>` : "";
    const oldPrice = p.priceOld
      ? `<span class="card__price-old">${formatPrice(p.priceOld)}</span>`
      : "";

    const waText = encodeURIComponent(
      `Hallo, ich möchte vorbestellen: ${p.name} (${p.unit})`
    );

    return `
      <article class="card" data-cat="${p.category}" data-name="${p.name.toLowerCase()}" data-price="${p.price}">
        <div class="card__media">
          ${badge}
          <div class="card__image" style="background-image:url('${p.image}');" role="img" aria-label="${p.name}"></div>
        </div>
        <div class="card__body">
          <div class="card__cat">${categoryLabel(p.category)}</div>
          <h3 class="card__title">${p.name}</h3>
          <p class="card__desc">${p.description}</p>
          <div class="card__tags">${tags}</div>

          <div class="card__price-row">
            <div class="card__price-block">
              ${oldPrice}
              <span class="card__price">${formatPrice(p.price)}</span>
              <span class="card__unit">/ ${p.unit}</span>
            </div>
          </div>

          <div class="card__pack">Verpackungseinheit: <strong>${p.packaging}</strong></div>

          <div class="card__actions">
            <button class="btn btn--primary btn--block card__add" data-add-id="${p.id}" aria-label="${p.name} in den Warenkorb">
              🛒 In den Warenkorb
            </button>
          </div>
          <div class="card__quick">
            <a href="tel:+492348900900" class="card__quick-btn" title="Telefonisch bestellen" aria-label="Anrufen">📞</a>
            <a href="https://wa.me/492348900900?text=${waText}" target="_blank" rel="noopener" class="card__quick-btn" title="WhatsApp" aria-label="WhatsApp">💬</a>
          </div>
        </div>
      </article>
    `;
  }

  function categoryLabel(cat) {
    return {
      frankfurter: "Frankfurter",
      wurst: "Wurstwaren",
      fleisch: "Fleisch",
      grill: "Grillprodukte",
      fertig: "Fertiggerichte",
      "fisch-kaese": "Fisch & Käse",
      suppen: "Suppen",
      tiernahrung: "Tiernahrung",
    }[cat] || "Sortiment";
  }

  function categoryLabelLong(cat) {
    if (cat === "alle") return "Alle Produkte";
    return categoryLabel(cat);
  }

  function applyFilters() {
    let list = products.slice();

    if (state.category !== "alle") {
      list = list.filter((p) => p.category === state.category);
    }

    if (state.query) {
      const q = state.query.toLowerCase();
      list = list.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.description.toLowerCase().includes(q) ||
          (p.tags || []).some((t) => t.toLowerCase().includes(q))
      );
    }

    switch (state.sort) {
      case "price-asc":
        list.sort((a, b) => a.price - b.price);
        break;
      case "price-desc":
        list.sort((a, b) => b.price - a.price);
        break;
      case "name":
        list.sort((a, b) => a.name.localeCompare(b.name, "de"));
        break;
    }

    render(list);
  }

  function render(list) {
    if (!list.length) {
      grid.innerHTML = "";
      empty.hidden = false;
      resultCount.textContent = "Keine Treffer";
      return;
    }
    empty.hidden = true;
    grid.innerHTML = list.map(buildCard).join("");

    const label = categoryLabelLong(state.category);
    resultCount.textContent = `${list.length} ${list.length === 1 ? "Produkt" : "Produkte"} · ${label}`;

    // Wire add-to-cart buttons
    grid.querySelectorAll("[data-add-id]").forEach((btn) => {
      btn.addEventListener("click", () => {
        const id = btn.dataset.addId;
        const p = products.find((x) => x.id === id);
        if (p && window.KruemmelCart) {
          window.KruemmelCart.add(p);
          btn.classList.add("is-added");
          btn.innerHTML = "✓ Hinzugefügt";
          setTimeout(() => {
            btn.classList.remove("is-added");
            btn.innerHTML = "🛒 In den Warenkorb";
          }, 1500);
        }
      });
    });
  }

  // Wire up chips
  chips.forEach((chip) => {
    chip.addEventListener("click", () => {
      chips.forEach((c) => {
        c.classList.remove("is-active");
        c.setAttribute("aria-selected", "false");
      });
      chip.classList.add("is-active");
      chip.setAttribute("aria-selected", "true");
      state.category = chip.dataset.cat;

      const params = new URLSearchParams(window.location.search);
      if (state.category === "alle") params.delete("kategorie");
      else params.set("kategorie", state.category);
      const newUrl =
        window.location.pathname +
        (params.toString() ? "?" + params.toString() : "");
      window.history.replaceState({}, "", newUrl);

      applyFilters();
    });
  });

  // Sync chip state with initial category from URL
  chips.forEach((chip) => {
    const isActive = chip.dataset.cat === state.category;
    chip.classList.toggle("is-active", isActive);
    chip.setAttribute("aria-selected", String(isActive));
  });

  // Search
  if (search) {
    let timer;
    search.addEventListener("input", (e) => {
      clearTimeout(timer);
      timer = setTimeout(() => {
        state.query = e.target.value.trim();
        applyFilters();
      }, 120);
    });
  }

  // Sort
  if (sort) {
    sort.addEventListener("change", (e) => {
      state.sort = e.target.value;
      applyFilters();
    });
  }

  applyFilters();
})();
