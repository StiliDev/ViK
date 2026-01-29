document.addEventListener("DOMContentLoaded", () => {

  /* =====================
     FLOATING CALL BUTTON
  ===================== */
  const callBtn = document.getElementById("floatingCallBtn");

  if (callBtn) {
    callBtn.addEventListener("click", () => {
      if (navigator.vibrate) navigator.vibrate([100, 50, 100]);

      if (window.gtag) {
        gtag("event", "call_click", {
          event_category: "engagement",
          event_label: "floating_call_mobile"
        });
      }
    });
  }

  /* =====================
     FAQ ACCORDION
  ===================== */
  document.querySelectorAll(".faq-question").forEach(button => {
    button.addEventListener("click", () => {
      const item = button.parentElement;
      const answer = item.querySelector(".faq-answer");

      item.classList.toggle("active");
      answer.style.maxHeight = item.classList.contains("active")
        ? answer.scrollHeight + "px"
        : null;
    });
  });

  /* =====================
     CONTACT FORM CHECKBOX
  ===================== */
  const form = document.getElementById("contactForm");
  if (form) {
    form.addEventListener("submit", e => {
      const checkbox = document.getElementById("privacy");
      const error = document.querySelector(".checkbox-error");

      if (!checkbox.checked) {
        e.preventDefault();
        error.style.display = "block";
        checkbox.focus();
      } else {
        error.style.display = "none";
      }
    });
  }

  /* =====================
     DESKTOP DROPDOWN
  ===================== */
  document.querySelectorAll(".service-toggle").forEach(toggle => {
    toggle.addEventListener("click", e => {
      e.preventDefault();
      const parent = toggle.closest(".dropdown");

      document.querySelectorAll(".dropdown.active").forEach(item => {
        if (item !== parent) item.classList.remove("active");
      });

      parent.classList.toggle("active");
    });
  });

  document.addEventListener("click", e => {
    if (!e.target.closest(".dropdown")) {
      document.querySelectorAll(".dropdown.active").forEach(item =>
        item.classList.remove("active")
      );
    }
  });

  /* =====================
     HAMBURGER + MOBILE MENU
  ===================== */
  const hamburger = document.getElementById("hamburger");
  const sideMenu = document.getElementById("sideMenu");
  const closeBtn = document.getElementById("closeBtn");

  if (hamburger && sideMenu && closeBtn) {

    const closeMenu = () => {
      sideMenu.classList.remove("active");
      hamburger.classList.remove("active");
      document.body.style.overflow = "";
    };

    hamburger.addEventListener("click", () => {
      sideMenu.classList.add("active");
      hamburger.classList.add("active");
      document.body.style.overflow = "hidden";
    });

    closeBtn.addEventListener("click", closeMenu);

    /* SWIPE TO CLOSE */
    let touchStartX = 0;

    sideMenu.addEventListener("touchstart", e => {
      touchStartX = e.changedTouches[0].screenX;
    });

    sideMenu.addEventListener("touchend", e => {
      if (e.changedTouches[0].screenX - touchStartX > 80) {
        closeMenu();
      }
    });
  }

  /* =====================
     MOBILE SUBMENU
  ===================== */
  document.querySelectorAll(".side-menu .has-submenu > a").forEach(toggle => {
    toggle.addEventListener("click", e => {
      e.preventDefault();
      e.stopPropagation();
      const parent = toggle.parentElement;

      document.querySelectorAll(".side-menu .has-submenu.active").forEach(item => {
        if (item !== parent) item.classList.remove("active");
      });

      parent.classList.toggle("active");
    });
  });

  /* =====================
     ACTIVE LINK (MOBILE)
  ===================== */
  document.querySelectorAll(".side-menu a").forEach(link => {
    if (link.href === window.location.href) {
      link.classList.add("active");
    }
  });

});
