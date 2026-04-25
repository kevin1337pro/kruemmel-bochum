// Krümmel Bochum – Mock-Auth (LocalStorage)
// Hinweis: Echte Auth folgt in Phase 3 mit Backend (Firebase/Supabase).
window.KruemmelAuth = (function () {
  "use strict";

  const KEY = "kruemmel_user_v1";
  const USERS_KEY = "kruemmel_users_v1";

  function getUser() {
    try {
      return JSON.parse(localStorage.getItem(KEY));
    } catch (e) {
      return null;
    }
  }

  function setUser(u) {
    localStorage.setItem(KEY, JSON.stringify(u));
    renderHeaderState();
    document.dispatchEvent(new CustomEvent("auth:change", { detail: u }));
  }

  function logout() {
    localStorage.removeItem(KEY);
    renderHeaderState();
    document.dispatchEvent(new CustomEvent("auth:change", { detail: null }));
  }

  function getUsers() {
    try {
      return JSON.parse(localStorage.getItem(USERS_KEY)) || {};
    } catch (e) {
      return {};
    }
  }

  function saveUsers(users) {
    localStorage.setItem(USERS_KEY, JSON.stringify(users));
  }

  function register(payload) {
    const users = getUsers();
    if (users[payload.email]) {
      throw new Error("Mit dieser E-Mail existiert bereits ein Konto.");
    }
    users[payload.email] = {
      email: payload.email,
      name: payload.name,
      phone: payload.phone || "",
      address: payload.address || "",
      createdAt: Date.now(),
    };
    saveUsers(users);
    setUser(users[payload.email]);
    return users[payload.email];
  }

  function login(email) {
    const users = getUsers();
    if (!users[email]) {
      throw new Error("Kein Konto mit dieser E-Mail gefunden.");
    }
    setUser(users[email]);
    return users[email];
  }

  function renderHeaderState() {
    const u = getUser();
    document.querySelectorAll("[data-auth-name]").forEach((el) => {
      el.textContent = u ? u.name.split(" ")[0] : "";
    });
    document.querySelectorAll("[data-auth-state]").forEach((el) => {
      el.dataset.authState = u ? "in" : "out";
    });
  }

  if (document.readyState !== "loading") {
    renderHeaderState();
  } else {
    document.addEventListener("DOMContentLoaded", renderHeaderState);
  }

  return {
    getUser: getUser,
    setUser: setUser,
    logout: logout,
    register: register,
    login: login,
  };
})();
