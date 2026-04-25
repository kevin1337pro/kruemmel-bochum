// Krümmel Bochum – 3-Step Checkout
(function () {
  "use strict";

  const STORE_KEY = "kruemmel_checkout_v1";
  const PHONE = "+492348900900";

  let currentStep = 1;
  let formData = loadForm();

  // Restore name/contact from logged-in user
  if (window.KruemmelAuth) {
    const u = window.KruemmelAuth.getUser();
    if (u && !formData.name) {
      formData.name = u.name || "";
      formData.email = u.email || "";
      formData.phone = u.phone || "";
    }
  }

  const $ = (sel, root) => (root || document).querySelector(sel);
  const $$ = (sel, root) => Array.from((root || document).querySelectorAll(sel));

  function fmt(n) {
    return n.toFixed(2).replace(".", ",") + " €";
  }

  function loadForm() {
    try {
      return JSON.parse(sessionStorage.getItem(STORE_KEY)) || {};
    } catch (e) {
      return {};
    }
  }

  function saveForm() {
    sessionStorage.setItem(STORE_KEY, JSON.stringify(formData));
  }

  // ════ Cart Rendering ════
  function renderCart() {
    const items = window.KruemmelCart.items();
    const list = $("#cart-list");
    const empty = $("#cart-empty");
    const continueBtn = $('[data-show-when="cart-not-empty"]');

    if (!items.length) {
      list.innerHTML = "";
      empty.hidden = false;
      if (continueBtn) continueBtn.style.display = "none";
      return;
    }

    empty.hidden = true;
    if (continueBtn) continueBtn.style.display = "";

    list.innerHTML = items
      .map(
        (i) => `
      <article class="cart-item" data-id="${i.id}">
        <div class="cart-item__image" style="background-image:url('${i.image}')"></div>
        <div class="cart-item__info">
          <h3>${i.name}</h3>
          <p class="cart-item__meta">
            ${fmt(i.price)} / ${i.unit} · Verpackung: ${i.packaging}
          </p>
        </div>
        <div class="cart-item__qty">
          <button type="button" class="qty-btn" data-act="dec" aria-label="Menge verringern">−</button>
          <input type="number" class="qty-input" value="${i.quantity}" min="1" max="99" data-id="${i.id}" />
          <button type="button" class="qty-btn" data-act="inc" aria-label="Menge erhöhen">+</button>
        </div>
        <div class="cart-item__price">${fmt(i.price * i.quantity)}</div>
        <button type="button" class="cart-item__remove" data-act="remove" aria-label="Aus Warenkorb entfernen">×</button>
      </article>
    `
      )
      .join("");

    list.querySelectorAll(".cart-item").forEach((row) => {
      const id = row.dataset.id;
      row.querySelector('[data-act="inc"]').addEventListener("click", () =>
        window.KruemmelCart.setQty(id, currentQty(id) + 1)
      );
      row.querySelector('[data-act="dec"]').addEventListener("click", () =>
        window.KruemmelCart.setQty(id, currentQty(id) - 1)
      );
      row.querySelector('[data-act="remove"]').addEventListener("click", () => {
        if (confirm("Diesen Artikel aus dem Warenkorb entfernen?")) {
          window.KruemmelCart.remove(id);
        }
      });
      row.querySelector(".qty-input").addEventListener("change", (e) => {
        const v = parseInt(e.target.value, 10) || 0;
        window.KruemmelCart.setQty(id, v);
      });
    });
  }

  function currentQty(id) {
    const item = window.KruemmelCart.items().find((i) => i.id === id);
    return item ? item.quantity : 0;
  }

  // ════ Summary (Sticky Sidebar) ════
  function getDeliveryFee() {
    const fulfillment = formData.fulfillment || "lieferung";
    if (fulfillment === "abholung") return 0;
    const subtotal = window.KruemmelCart.totalPrice();
    if (subtotal >= 60) return 0;
    let fee = 4.9;
    if (formData.zip && /^4[567]/.test(formData.zip)) fee = 6.9;
    if (formData.slot && formData.slot.startsWith("so-")) fee += 2;
    return fee;
  }

  function renderSummary() {
    const items = window.KruemmelCart.items();
    const subtotal = window.KruemmelCart.totalPrice();
    const delivery = getDeliveryFee();
    const total = subtotal + delivery;

    $("#summary-list").innerHTML = items.length
      ? items
          .map(
            (i) => `
        <li>
          <span>${i.quantity}× ${i.name}</span>
          <span>${fmt(i.price * i.quantity)}</span>
        </li>
      `
          )
          .join("")
      : `<li class="summary__empty">Noch keine Produkte</li>`;

    $("#summary-subtotal").textContent = fmt(subtotal);
    $("#summary-delivery").textContent =
      formData.fulfillment === "abholung"
        ? "Abholung – kostenlos"
        : delivery === 0
        ? subtotal >= 60
          ? "kostenlos (ab 60 €)"
          : "–"
        : fmt(delivery);
    $("#summary-total").textContent = fmt(total);

    // Free-shipping progress bar
    const remaining = 60 - subtotal;
    const progress = $("#summary-progress");
    if (subtotal > 0 && remaining > 0 && formData.fulfillment !== "abholung") {
      progress.hidden = false;
      $("#progress-fill").style.width = Math.min((subtotal / 60) * 100, 100) + "%";
      $("#progress-text").innerHTML = `Noch <strong>${fmt(remaining)}</strong> bis zur kostenlosen Lieferung`;
    } else {
      progress.hidden = true;
    }
  }

  // ════ Step Navigation ════
  function showStep(n) {
    currentStep = n;

    $$(".step").forEach((el, idx) => {
      el.classList.toggle("is-active", idx + 1 === n);
      el.classList.toggle("is-done", idx + 1 < n);
    });

    $$(".step-panel").forEach((p) => {
      p.hidden = String(p.dataset.stepPanel) !== String(n);
      p.classList.toggle("is-active", String(p.dataset.stepPanel) === String(n));
    });

    if (n === 3) renderConfirmation();
    if (n === 1) renderCart();

    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function showSuccess(orderId) {
    $$(".step").forEach((el) => el.classList.add("is-done"));
    $$(".step-panel").forEach((p) => {
      p.hidden = p.dataset.stepPanel !== "success";
      p.classList.toggle("is-active", p.dataset.stepPanel === "success");
    });
    $("#success-order").innerHTML = `
      <strong>Bestellnummer:</strong> #${orderId}<br>
      <span>Eine Kopie wurde an unser Team übermittelt.</span>
    `;
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  // ════ Step 2: Form ════
  function bindStep2() {
    const radios = $$('input[name="fulfillment"]');
    radios.forEach((r) => {
      if (formData.fulfillment === r.value) r.checked = true;
      r.addEventListener("change", (e) => {
        formData.fulfillment = e.target.value;
        toggleFulfillmentSections();
        saveForm();
        renderSummary();
      });
    });
    if (!formData.fulfillment) formData.fulfillment = "lieferung";
    toggleFulfillmentSections();

    [
      "street", "zip", "city", "slot", "pickup-time",
      "name", "phone", "email", "notes"
    ].forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const key = id.replace("-", "_");
      if (formData[key]) el.value = formData[key];
      el.addEventListener("input", () => {
        formData[key] = el.value;
        saveForm();
        if (id === "zip" || id === "slot") renderSummary();
      });
    });
  }

  function toggleFulfillmentSections() {
    const f = formData.fulfillment || "lieferung";
    $$("[data-show-for]").forEach((el) => {
      el.hidden = el.dataset.showFor !== f;
    });
    document.getElementById("street").required = f === "lieferung";
    document.getElementById("zip").required = f === "lieferung";
    document.getElementById("slot").required = f === "lieferung";
  }

  function validateStep2() {
    const required = ["name", "phone"];
    if (formData.fulfillment === "lieferung") {
      required.push("street", "zip", "slot");
    }
    for (const id of required) {
      const el = document.getElementById(id);
      if (!el || !el.value.trim()) {
        el.focus();
        el.classList.add("is-invalid");
        setTimeout(() => el.classList.remove("is-invalid"), 1500);
        return false;
      }
    }
    return true;
  }

  // ════ Step 3: Confirmation ════
  function renderConfirmation() {
    const items = window.KruemmelCart.items();
    const f = formData.fulfillment || "lieferung";

    $("#confirm-delivery").innerHTML =
      f === "lieferung"
        ? `
        <p>🚚 <strong>Lieferung</strong></p>
        <p>${escape(formData.street || "")}<br>${escape(formData.zip || "")} ${escape(formData.city || "Bochum")}</p>
        <p>Slot: <strong>${slotLabel(formData.slot)}</strong></p>
      `
        : `
        <p>🏪 <strong>Abholung</strong> im Werksverkauf Bochum</p>
        ${formData.pickup_time ? `<p>Wunschzeit: ${escape(formData.pickup_time)}</p>` : ""}
      `;

    $("#confirm-contact").innerHTML = `
      <p>${escape(formData.name || "")}</p>
      <p>📞 ${escape(formData.phone || "")}</p>
      ${formData.email ? `<p>✉️ ${escape(formData.email)}</p>` : ""}
      ${formData.notes ? `<p>📝 <em>${escape(formData.notes)}</em></p>` : ""}
    `;

    $("#confirm-items").innerHTML = `
      <ul class="confirm-items__list">
        ${items
          .map(
            (i) => `
          <li>
            <span>${i.quantity}× ${escape(i.name)}</span>
            <span>${fmt(i.price * i.quantity)}</span>
          </li>
        `
          )
          .join("")}
      </ul>
    `;
  }

  function slotLabel(v) {
    const map = {
      "sa-10-12": "Samstag 10:00 – 12:00",
      "sa-12-14": "Samstag 12:00 – 14:00",
      "sa-14-16": "Samstag 14:00 – 16:00",
      "sa-16-18": "Samstag 16:00 – 18:00",
      "so-10-12": "Sonntag 10:00 – 12:00",
      "so-12-14": "Sonntag 12:00 – 14:00",
      "so-14-17": "Sonntag 14:00 – 17:00 (+2 €)",
    };
    return map[v] || "–";
  }

  function escape(s) {
    return String(s)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;");
  }

  // ════ Submit ════
  function submitOrder() {
    if (!$("#agb").checked) {
      $("#agb").focus();
      alert("Bitte akzeptieren Sie die AGB, um fortzufahren.");
      return;
    }

    const items = window.KruemmelCart.items();
    if (!items.length) {
      alert("Ihr Warenkorb ist leer.");
      return;
    }

    const orderId = (Date.now().toString(36).toUpperCase()).slice(-6);
    const total = window.KruemmelCart.totalPrice() + getDeliveryFee();
    const f = formData.fulfillment || "lieferung";

    const lines = [
      `*Bestellung #${orderId}*`,
      ``,
      ...items.map((i) => `• ${i.quantity}× ${i.name} – ${fmt(i.price * i.quantity)}`),
      ``,
      f === "lieferung"
        ? `🚚 Lieferung\n${formData.street}\n${formData.zip} ${formData.city || "Bochum"}\nSlot: ${slotLabel(formData.slot)}`
        : `🏪 Abholung\n${formData.pickup_time ? "Wunschzeit: " + formData.pickup_time : ""}`,
      ``,
      `👤 ${formData.name}`,
      `📞 ${formData.phone}`,
      formData.email ? `✉️ ${formData.email}` : "",
      formData.notes ? `📝 ${formData.notes}` : "",
      ``,
      `*Gesamt: ${fmt(total)}*`,
      `Zahlung bei ${f === "lieferung" ? "Lieferung" : "Abholung"} (Bar/EC)`,
    ]
      .filter(Boolean)
      .join("\n");

    // Save to local order history
    const orders = JSON.parse(localStorage.getItem("kruemmel_orders_v1") || "[]");
    orders.push({
      id: orderId,
      items: items,
      formData: formData,
      total: total,
      createdAt: Date.now(),
    });
    localStorage.setItem("kruemmel_orders_v1", JSON.stringify(orders));

    // Open WhatsApp with prefilled order text
    const wa = "https://wa.me/" + PHONE.replace(/\D/g, "") + "?text=" + encodeURIComponent(lines);
    window.open(wa, "_blank", "noopener");

    // Clear cart
    window.KruemmelCart.clear();
    sessionStorage.removeItem(STORE_KEY);
    formData = {};

    showSuccess(orderId);
  }

  // ════ Wire-up ════
  document.addEventListener("DOMContentLoaded", () => {
    renderCart();
    renderSummary();
    bindStep2();

    document.addEventListener("cart:change", () => {
      renderCart();
      renderSummary();
    });

    $$("[data-next]").forEach((b) =>
      b.addEventListener("click", () => {
        if (currentStep === 1) {
          if (!window.KruemmelCart.totalItems()) {
            alert("Ihr Warenkorb ist leer.");
            return;
          }
          showStep(2);
        } else if (currentStep === 2) {
          if (!validateStep2()) return;
          saveForm();
          showStep(3);
        }
      })
    );

    $$("[data-prev]").forEach((b) =>
      b.addEventListener("click", () => {
        if (currentStep > 1) showStep(currentStep - 1);
      })
    );

    const submit = $("#submit-order");
    if (submit) submit.addEventListener("click", submitOrder);
  });
})();
