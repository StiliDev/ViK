function loadGA() {
  if (window.gaLoaded) return;
  window.gaLoaded = true;

  const script = document.createElement('script');
  script.src = 'https://www.googletagmanager.com/gtag/js?id=G-PYZ5DFKT8W';
  script.async = true;
  document.head.appendChild(script);

  script.onload = () => {
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    window.gtag = gtag;

    gtag('js', new Date());
    gtag('config', 'G-PYZ5DFKT8W');
  };
}

/* Ако вече е прието */
if (localStorage.getItem('cookieConsent') === 'accepted') {
  loadGA();
}

