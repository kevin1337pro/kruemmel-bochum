// Krümmel Bochum – Frontend Interaktivität
(function () {
  "use strict";

  // Year in footer
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Mobile menu toggle
  const toggle = document.querySelector(".nav__toggle");
  const menu = document.getElementById("mobile-menu");
  if (toggle && menu) {
    toggle.addEventListener("click", () => {
      const open = toggle.getAttribute("aria-expanded") === "true";
      toggle.setAttribute("aria-expanded", String(!open));
      if (!open) {
        menu.removeAttribute("hidden");
        menu.setAttribute("data-open", "true");
      } else {
        menu.setAttribute("data-open", "false");
        setTimeout(() => menu.setAttribute("hidden", ""), 200);
      }
    });
    menu.querySelectorAll("a").forEach((a) =>
      a.addEventListener("click", () => {
        toggle.setAttribute("aria-expanded", "false");
        menu.setAttribute("data-open", "false");
        setTimeout(() => menu.setAttribute("hidden", ""), 200);
      })
    );
  }

  // Reveal-on-scroll
  const revealCandidates = document.querySelectorAll(
    ".section__head, .usp, .offer, .world, .about__text, .about__media, .cta-final__inner"
  );
  revealCandidates.forEach((el) => el.classList.add("reveal"));

  if ("IntersectionObserver" in window) {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    revealCandidates.forEach((el) => io.observe(el));
  } else {
    revealCandidates.forEach((el) => el.classList.add("is-visible"));
  }

  // Sticky header shadow on scroll
  const header = document.getElementById("site-header");
  if (header) {
    const onScroll = () => {
      if (window.scrollY > 8) {
        header.style.boxShadow = "0 4px 18px rgba(0,0,0,0.06)";
      } else {
        header.style.boxShadow = "none";
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
  }
})();
