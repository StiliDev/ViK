document.addEventListener('DOMContentLoaded', () => {
  const banner = document.getElementById('cookieBanner');
  const acceptBtn = document.getElementById('acceptCookies');
  const rejectBtn = document.getElementById('rejectCookies');

  const consent = localStorage.getItem('cookieConsent');

  if (!consent) {
    banner.style.display = 'block';
  }

  acceptBtn.addEventListener('click', () => {
    localStorage.setItem('cookieConsent', 'accepted');
    banner.style.display = 'none';
    loadGA();
  });

  rejectBtn.addEventListener('click', () => {
    localStorage.setItem('cookieConsent', 'rejected');
    banner.style.display = 'none';
  });
});
