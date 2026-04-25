// Krümmel Bochum – Warenkorb (LocalStorage-basiert)
window.KruemmelCart = (function () {
  "use strict";

  const KEY = "kruemmel_cart_v1";
  let state = load();

  function load() {
    try {
      return JSON.parse(localStorage.getItem(KEY)) || { items: [] };
    } catch (e) {
      return { items: [] };
    }
  }

  function save() {
    localStorage.setItem(KEY, JSON.stringify(state));
    updateBadges();
    document.dispatchEvent(new CustomEvent("cart:change", { detail: state }));
  }

  function find(id) {
    return state.items.find((i) => i.id === id);
  }

  function add(product, qty) {
    qty = qty || 1;
    const item = find(product.id);
    if (item) {
      item.quantity += qty;
    } else {
      state.items.push({
        id: product.id,
        name: product.name,
        price: product.price,
        unit: product.unit,
        packaging: product.packaging,
        image: product.image,
        category: product.category,
        quantity: qty,
      });
    }
    save();
    showToast(`✓ ${product.name} im Warenkorb`);
  }

  function remove(id) {
    state.items = state.items.filter((i) => i.id !== id);
    save();
  }

  function setQty(id, qty) {
    const item = find(id);
    if (!item) return;
    if (qty <= 0) return remove(id);
    item.quantity = qty;
    save();
  }

  function clear() {
    state.items = [];
    save();
  }

  function totalItems() {
    return state.items.reduce((n, i) => n + i.quantity, 0);
  }

  function totalPrice() {
    return state.items.reduce((s, i) => s + i.price * i.quantity, 0);
  }

  function items() {
    return state.items.slice();
  }

  function updateBadges() {
    const count = totalItems();
    document.querySelectorAll("[data-cart-count]").forEach((el) => {
      el.textContent = count;
      el.classList.toggle("is-visible", count > 0);
    });
  }

  function showToast(msg) {
    let toast = document.getElementById("cart-toast");
    if (!toast) {
      toast = document.createElement("div");
      toast.id = "cart-toast";
      toast.className = "cart-toast";
      toast.setAttribute("role", "status");
      toast.setAttribute("aria-live", "polite");
      document.body.appendChild(toast);
    }
    toast.innerHTML = `${msg} <a href="kasse.html">Zum Warenkorb →</a>`;
    toast.classList.add("is-visible");
    clearTimeout(toast._timer);
    toast._timer = setTimeout(() => toast.classList.remove("is-visible"), 3200);
  }

  if (document.readyState !== "loading") {
    updateBadges();
  } else {
    document.addEventListener("DOMContentLoaded", updateBadges);
  }

  return {
    add: add,
    remove: remove,
    setQty: setQty,
    clear: clear,
    items: items,
    totalItems: totalItems,
    totalPrice: totalPrice,
  };
})();
