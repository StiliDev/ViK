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



