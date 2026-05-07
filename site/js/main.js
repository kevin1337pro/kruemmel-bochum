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

  // Tier-Slider mit alternierenden Übergangsrichtungen
  const tierStage = document.getElementById("tier-slider");
  if (tierStage) {
    const slides = Array.from(tierStage.querySelectorAll(".tier-slide"));
    const dots = Array.from(tierStage.querySelectorAll(".tier-dot"));
    const prevBtn = tierStage.querySelector("[data-tier-prev]");
    const nextBtn = tierStage.querySelector("[data-tier-next]");
    const AUTO_MS = 5000;
    const directions = ["right", "down", "left", "up"];
    let current = 0;
    let dirIndex = 0;
    let timer = null;
    let isAnimating = false;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    function clearLeaving() {
      slides.forEach((s) =>
        s.classList.remove(
          "is-leaving-left", "is-leaving-right",
          "is-leaving-up",   "is-leaving-down",
          "is-entering-from-left", "is-entering-from-right",
          "is-entering-from-top",  "is-entering-from-bottom"
        )
      );
    }

    function go(targetIdx, forcedDir) {
      if (isAnimating || targetIdx === current) return;
      isAnimating = true;

      const dir = forcedDir || directions[dirIndex % directions.length];
      dirIndex++;

      const leaving = slides[current];
      const entering = slides[targetIdx];

      const leaveMap   = { right: "is-leaving-left",  left: "is-leaving-right", down: "is-leaving-up",   up: "is-leaving-down" };
      const enterStart = { right: "is-entering-from-right", left: "is-entering-from-left", down: "is-entering-from-bottom", up: "is-entering-from-top" };

      // Reset
      clearLeaving();

      // Eingehende Slide an Startposition setzen (ohne Transition)
      entering.classList.add(enterStart[dir]);

      // Force reflow, dann Klassen tauschen
      // eslint-disable-next-line no-unused-expressions
      entering.offsetHeight;

      // Aktive Slide raus, neue rein
      leaving.classList.remove("is-active");
      leaving.classList.add(leaveMap[dir]);
      entering.classList.remove(enterStart[dir]);
      entering.classList.add("is-active");

      // Dots
      dots.forEach((d, i) => d.classList.toggle("is-active", i === targetIdx));

      current = targetIdx;

      const onEnd = () => {
        clearLeaving();
        isAnimating = false;
        entering.removeEventListener("transitionend", onEnd);
      };
      entering.addEventListener("transitionend", onEnd);
      // Fallback falls transitionend nicht feuert
      setTimeout(onEnd, 1100);
    }

    function next() { go((current + 1) % slides.length); }
    function prev() {
      const dir = directions[dirIndex % directions.length];
      const reverseMap = { right: "left", left: "right", up: "down", down: "up" };
      go((current - 1 + slides.length) % slides.length, reverseMap[dir]);
    }

    function startAuto() {
      if (reduceMotion) return;
      stopAuto();
      timer = setInterval(next, AUTO_MS);
    }
    function stopAuto() { if (timer) { clearInterval(timer); timer = null; } }

    if (nextBtn) nextBtn.addEventListener("click", () => { next(); startAuto(); });
    if (prevBtn) prevBtn.addEventListener("click", () => { prev(); startAuto(); });
    dots.forEach((d) =>
      d.addEventListener("click", () => {
        const idx = parseInt(d.dataset.go, 10);
        if (!isNaN(idx)) { go(idx); startAuto(); }
      })
    );

    // Pause bei Hover/Focus
    tierStage.addEventListener("mouseenter", stopAuto);
    tierStage.addEventListener("mouseleave", startAuto);
    tierStage.addEventListener("focusin", stopAuto);
    tierStage.addEventListener("focusout", startAuto);

    // Pause wenn nicht im Viewport (Performance)
    if ("IntersectionObserver" in window) {
      const obs = new IntersectionObserver((entries) => {
        entries.forEach((e) => (e.isIntersecting ? startAuto() : stopAuto()));
      }, { threshold: 0.25 });
      obs.observe(tierStage);
    } else {
      startAuto();
    }

    // Touch-Swipe (links/rechts)
    let touchStartX = 0, touchStartY = 0;
    tierStage.addEventListener("touchstart", (e) => {
      touchStartX = e.touches[0].clientX;
      touchStartY = e.touches[0].clientY;
      stopAuto();
    }, { passive: true });
    tierStage.addEventListener("touchend", (e) => {
      const dx = e.changedTouches[0].clientX - touchStartX;
      const dy = e.changedTouches[0].clientY - touchStartY;
      if (Math.abs(dx) > 40 && Math.abs(dx) > Math.abs(dy)) {
        if (dx < 0) go((current + 1) % slides.length, "right");
        else        go((current - 1 + slides.length) % slides.length, "left");
      } else if (Math.abs(dy) > 40) {
        if (dy < 0) go((current + 1) % slides.length, "down");
        else        go((current - 1 + slides.length) % slides.length, "up");
      }
      startAuto();
    }, { passive: true });
  }

  // Newsletter (LocalStorage – Backend folgt später)
  const nlForm = document.getElementById("newsletter-form");
  if (nlForm) {
    const emailEl = document.getElementById("newsletter-email");
    const consentEl = document.getElementById("newsletter-consent");
    const errEl = document.getElementById("newsletter-error");
    const okEl = document.getElementById("newsletter-success");

    function showErr(msg) {
      errEl.textContent = msg;
      errEl.classList.add("is-visible");
      okEl.classList.remove("is-visible");
    }

    nlForm.addEventListener("submit", (e) => {
      e.preventDefault();
      errEl.classList.remove("is-visible");
      const email = (emailEl.value || "").trim();
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) {
        showErr("Bitte gib eine gültige E-Mail-Adresse ein.");
        emailEl.focus();
        return;
      }
      if (!consentEl.checked) {
        showErr("Bitte bestätige die Datenschutzhinweise.");
        return;
      }
      const list = JSON.parse(localStorage.getItem("kruemmel_newsletter_v1") || "[]");
      if (!list.includes(email)) list.push(email);
      localStorage.setItem("kruemmel_newsletter_v1", JSON.stringify(list));
      okEl.classList.add("is-visible");
      nlForm.querySelector(".newsletter__field").style.display = "none";
      nlForm.querySelector(".newsletter__consent").style.display = "none";
    });
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
