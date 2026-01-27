document.addEventListener('DOMContentLoaded', () => {
  const callBtn = document.getElementById('floatingCallBtn');

  if (!callBtn) return;

  callBtn.addEventListener('click', () => {

    /* Вибрация */
    if (navigator.vibrate) {
      navigator.vibrate(200);
    }

    /* GA4 Event Tracking */
    if (typeof gtag === 'function') {
      gtag('event', 'call_click', {
        event_category: 'engagement',
        event_label: 'floating_call_mobile'
      });
    }

    

  });
});

document.querySelectorAll(".faq-question").forEach(button => {
    button.addEventListener("click", () => {
        const item = button.parentElement;
        const answer = item.querySelector(".faq-answer");

        item.classList.toggle("active");

        if (item.classList.contains("active")) {
            answer.style.maxHeight = answer.scrollHeight + "px";
        } else {
            answer.style.maxHeight = null;
        }
    });
});

const callBtn = document.getElementById('floatingCallBtn');

if (callBtn) {
  callBtn.addEventListener('click', () => {
    if (navigator.vibrate) {
      navigator.vibrate([100, 50, 100]);
    }

    if (window.gtag) {
      gtag('event', 'call_click', {
        event_category: 'engagement',
        event_label: 'floating_call_mobile'
      });
    }
  });
}


document.getElementById("contactForm").addEventListener("submit", function (e) {
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


/* DESKTOP DROPDOWN */
document.querySelectorAll('.service-toggle').forEach(toggle => {
  toggle.addEventListener('click', e => {
    e.preventDefault();

    const parent = toggle.closest('.dropdown');

    // затваря другите
    document.querySelectorAll('.dropdown.active').forEach(item => {
      if (item !== parent) item.classList.remove('active');
    });

    parent.classList.toggle('active');
  });
});

/* MOBILE DROPDOWN */
document.querySelectorAll('.mobileServices').forEach(toggle => {
  toggle.addEventListener('click', e => {
    e.preventDefault();
    toggle.parentElement.classList.toggle('active');
  });
});

/* Затваряне при клик извън менюто (desktop) */
document.addEventListener('click', e => {
  if (!e.target.closest('.dropdown')) {
    document.querySelectorAll('.dropdown.active').forEach(item => {
      item.classList.remove('active');
    });
  }
});














