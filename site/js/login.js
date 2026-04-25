// Krümmel Bochum – Login / Register
(function () {
  "use strict";

  const $ = (s, r) => (r || document).querySelector(s);
  const $$ = (s, r) => Array.from((r || document).querySelectorAll(s));

  function showAccount() {
    const u = window.KruemmelAuth.getUser();
    $('[data-view="auth"]').hidden = !!u;
    $('[data-view="account"]').hidden = !u;
    if (u) {
      const emailEl = $("#account-email");
      if (emailEl) emailEl.textContent = u.email;
    }
  }

  function showError(formEl, msg) {
    const err = formEl.querySelector("[data-error]");
    err.textContent = msg;
    err.hidden = false;
    setTimeout(() => (err.hidden = true), 5000);
  }

  function switchTab(name) {
    $$(".auth-tab").forEach((t) => {
      const active = t.dataset.tab === name;
      t.classList.toggle("is-active", active);
      t.setAttribute("aria-selected", String(active));
    });
    $$(".auth-form").forEach((f) => {
      f.classList.toggle("is-active", f.dataset.form === name);
    });
  }

  document.addEventListener("DOMContentLoaded", () => {
    showAccount();

    $$(".auth-tab").forEach((t) => {
      t.addEventListener("click", () => switchTab(t.dataset.tab));
    });
    $$(".auth-form__switch-btn").forEach((b) => {
      b.addEventListener("click", () => switchTab(b.dataset.switchTo));
    });

    // Login
    const loginForm = $('[data-form="login"]');
    if (loginForm) {
      loginForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const email = $("#login-email").value.trim();
        const pw = $("#login-password").value;
        if (!email || !pw) return;
        try {
          window.KruemmelAuth.login(email);
          showAccount();
        } catch (err) {
          // Wenn Email noch nicht registriert: gleich registrieren als Fallback
          // Da wir Mock-Auth nutzen, bei "nicht gefunden" → freundliche Meldung
          showError(loginForm, err.message);
        }
      });
    }

    // Register
    const regForm = $('[data-form="register"]');
    if (regForm) {
      regForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const name = $("#reg-name").value.trim();
        const email = $("#reg-email").value.trim();
        const phone = $("#reg-phone").value.trim();
        const pw = $("#reg-password").value;
        if (!name || !email || pw.length < 6) {
          showError(regForm, "Bitte alle Pflichtfelder ausfüllen (Passwort min. 6 Zeichen).");
          return;
        }
        try {
          window.KruemmelAuth.register({ name: name, email: email, phone: phone });
          showAccount();
        } catch (err) {
          showError(regForm, err.message);
        }
      });
    }

    // Logout
    const logoutBtn = $("#logout-btn");
    if (logoutBtn) {
      logoutBtn.addEventListener("click", () => {
        if (confirm("Wirklich abmelden?")) {
          window.KruemmelAuth.logout();
          showAccount();
        }
      });
    }
  });
})();
